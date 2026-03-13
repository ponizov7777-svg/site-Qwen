import { trackMetrikaGoal, type PageType } from './metrics';

export interface DwellOptions {
  goalId: string;
  dwellMs: number;
  params?: Record<string, unknown>;
  /**
   * Доля видимости блока (0–1), при которой считаем, что человек реально его смотрит.
   * По умолчанию 0.5 (50% площади в вьюпорте).
   */
  visibilityThreshold?: number;
}

/**
 * Отправляет цель, если блок был непрерывно виден на экране не меньше dwellMs.
 * Подходит для микроконверсий типа "задержка внимания на тарифах / кейсе / статье".
 */
export function observeBlockDwell(element: HTMLElement, options: DwellOptions) {
  if (typeof window === 'undefined') return;

  const { goalId, dwellMs, params, visibilityThreshold = 0.5 } = options;

  let timer: number | null = null;
  let goalSent = false;

  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      const isVisible = entry.isIntersecting && entry.intersectionRatio >= visibilityThreshold;

      if (isVisible && !goalSent && timer === null) {
        timer = window.setTimeout(() => {
          goalSent = true;
          trackMetrikaGoal(goalId, params);
          observer.disconnect();
        }, dwellMs);
      } else if (!isVisible && timer !== null && !goalSent) {
        window.clearTimeout(timer);
        timer = null;
      }
    },
    { threshold: [visibilityThreshold] }
  );

  observer.observe(element);
}

export interface ScrollDepthOptions {
  page_type?: PageType;
  page_slug?: string;
  /**
   * Пороги глубины скролла в %, по которым отправляем цели.
   * По умолчанию [50, 75, 90].
   */
  thresholds?: number[];
}

/**
 * Отправляет цели micro_scroll_XX при достижении глубины скролла.
 * Каждый порог срабатывает только один раз за визит на странице.
 */
export function initScrollDepthTracking(options: ScrollDepthOptions) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const { page_type, page_slug, thresholds = [50, 75, 90] } = options;
  const reached = new Set<number>();

  const handleScroll = () => {
    const docElement = document.documentElement;
    const scrollTop = window.scrollY || docElement.scrollTop || 0;
    const scrollHeight = docElement.scrollHeight;
    const clientHeight = window.innerHeight || docElement.clientHeight;
    const maxScrollable = scrollHeight - clientHeight;

    if (maxScrollable <= 0) return;

    const percent = (scrollTop / maxScrollable) * 100;

    thresholds.forEach((threshold) => {
      if (percent >= threshold && !reached.has(threshold)) {
        reached.add(threshold);
        const goalId = `micro_scroll_${threshold}`;

        trackMetrikaGoal(goalId, {
          page_type,
          page_slug,
        });
      }
    });

    if (reached.size === thresholds.length) {
      window.removeEventListener('scroll', handleScroll);
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Вызовем один раз, чтобы обработать начальное положение (если уже внизу).
  handleScroll();

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}


