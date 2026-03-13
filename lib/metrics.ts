declare global {
  interface Window {
    ym?: (...args: any[]) => void;
  }
}

export type MetrikaGoalParams = Record<string, unknown>;

const METRIKA_ID = 106276548;

export function trackMetrikaGoal(goalId: string, params?: MetrikaGoalParams) {
  if (typeof window === 'undefined') return;

  const ym = window.ym;

  if (typeof ym !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.debug('[Metrika] ym is not available yet', { goalId, params });
    }
    return;
  }

  try {
    ym(METRIKA_ID, 'reachGoal', goalId, params);
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.error('[Metrika] reachGoal error', error);
    }
  }
}

export type PageType =
  | 'home'
  | 'services'
  | 'contacts'
  | 'cases'
  | 'blog'
  | 'geomarketing'
  | 'consultations'
  | 'other';

export interface CommonGoalParams extends MetrikaGoalParams {
  page_type?: PageType;
  page_slug?: string;
  block_id?: string;
  service_id?: string | number;
  element_id?: string;
}

export function trackTelegramClick(params: CommonGoalParams) {
  trackMetrikaGoal('macro_telegram_click', params);
}

export function trackLinkSubmit(params: CommonGoalParams) {
  trackMetrikaGoal('macro_link_submit', params);
}

export function trackFormSubmit(params: CommonGoalParams) {
  trackMetrikaGoal('macro_form_submit', params);
}

export function trackNavToSection(goalId: string, params: CommonGoalParams) {
  trackMetrikaGoal(goalId, params);
}

