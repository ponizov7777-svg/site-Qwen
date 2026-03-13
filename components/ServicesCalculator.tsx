'use client';

import { ReactNode, useEffect, useMemo, useState } from 'react';
import styles from './AdFormatsFilter.module.css';

type CalculatorMode = 'pain' | 'manual';

type PainId =
  | 'sales_down'
  | 'hard_to_find'
  | 'weak_profile'
  | 'few_reviews'
  | 'low_rating'
  | 'competitors_stronger'
  | 'fear_ads'
  | 'services_not_filled'
  | 'no_content'
  | 'no_calls'
  | 'no_analytics';

type ServiceOption = {
  id: string;
  label: string;
  price: number;
  description?: string;
};

type ServiceGroup = {
  id: string;
  title: string;
  shortTitle: string;
  options: ServiceOption[];
};

type PackagePlan = {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
  includes: string[];
  description: ReactNode;
};

const painOptions = [
  { id: 'sales_down', label: 'Продажи падают, клиентов стало меньше' },
  { id: 'hard_to_find', label: 'Компанию трудно найти на Яндекс Картах' },
  { id: 'weak_profile', label: 'Карточка выглядит пустой или слабой' },
  { id: 'few_reviews', label: 'У нас мало отзывов и низкое доверие' },
  { id: 'low_rating', label: 'Рейтинг ниже 4.0 / 4.5' },
  { id: 'competitors_stronger', label: 'Конкуренты выглядят сильнее и забирают клиентов' },
  { id: 'fear_ads', label: 'Хочу запустить рекламу, но боюсь слить бюджет' },
  { id: 'services_not_filled', label: 'В карточке не заполнены услуги / товары' },
  { id: 'no_content', label: 'Нет фото, акций, новостей, контента' },
  { id: 'no_calls', label: 'Клиенты заходят в профиль, но не звонят' },
  { id: 'no_analytics', label: 'Не понимаю, работает карточка или нет' },
] as const;

const serviceGroups: ServiceGroup[] = [
  {
    id: 'profile',
    title: 'Карточка компании',
    shortTitle: 'Карточка',
    options: [
      { id: 'audit', label: 'Аудит карточки', price: 0, description: 'Проверка текущего состояния' },
      { id: 'access', label: 'Регистрация / доступы / верификация', price: 2000, description: 'Базовая настройка доступов' },
      { id: 'profile', label: 'Заполнение профиля и SEO-описание', price: 4500, description: 'Оптимизация под поиск' },
      { id: 'full_profile', label: 'Полная настройка карточки с нуля', price: 6500, description: 'Комплексная упаковка' },
    ],
  },
  {
    id: 'visual',
    title: 'Визуальное оформление',
    shortTitle: 'Визуал',
    options: [
      { id: 'photos_10', label: 'Фото до 10 шт', price: 2500, description: 'Базовый фотопакет' },
      { id: 'photos_20', label: 'Фото 11–20 шт', price: 4000, description: 'Расширенная галерея' },
      { id: 'cover', label: 'Обложка / баннер', price: 3000, description: 'Первый экран карточки' },
      { id: 'visual_full', label: 'Полная визуальная упаковка', price: 5500, description: 'Комплексное оформление' },
    ],
  },
  {
    id: 'catalog',
    title: 'Услуги и товары',
    shortTitle: 'Каталог',
    options: [
      { id: 'catalog_10', label: 'До 10 позиций', price: 3000, description: 'Базовая витрина' },
      { id: 'catalog_30', label: '11–30 позиций', price: 5500, description: 'Средний прайс' },
      { id: 'catalog_31', label: '31+ позиций', price: 8500, description: 'Большой каталог' },
    ],
  },
  {
    id: 'content',
    title: 'Контент',
    shortTitle: 'Контент',
    options: [
      { id: 'stories_3', label: 'Истории 3 шт', price: 3000, description: 'Базовый контент-пакет' },
      { id: 'stories_5', label: 'Истории 5 шт', price: 4500, description: 'Расширенный контент' },
      { id: 'posts_2', label: 'Публикации 2 шт', price: 2500, description: 'Информационные посты' },
      { id: 'promo_1', label: 'Акция 1 шт', price: 2000, description: 'Оффер для конверсии' },
      { id: 'promo_3', label: 'Акции 3 шт', price: 4500, description: 'Набор офферов' },
    ],
  },
  {
    id: 'competitors',
    title: 'Анализ конкурентов',
    shortTitle: 'Конкуренты',
    options: [
      { id: 'competitors_basic', label: 'Базовый анализ 3–5 конкурентов', price: 3000, description: 'Быстрая оценка' },
      { id: 'competitors_full', label: 'Расширенный анализ до 10 конкурентов + рекомендации', price: 5500, description: 'Детальный разбор' },
    ],
  },
  {
    id: 'ads',
    title: 'Рекламная подписка',
    shortTitle: 'Реклама',
    options: [
      { id: 'ads_base', label: 'Настройка подписки', price: 8000, description: 'Базовый запуск' },
      { id: 'ads_full', label: 'Полный запуск рекламы под ключ', price: 15000, description: 'Комплексный запуск' },
    ],
  },
  {
    id: 'reviews',
    title: 'Отзывы и репутация',
    shortTitle: 'Отзывы',
    options: [
      { id: 'reviews_base', label: 'Шаблоны ответов + правильные ответы на отзывы', price: 4000, description: 'Система работы с отзывами' },
      { id: 'reviews_full', label: 'Система сбора отзывов под ключ', price: 5500, description: 'Полный цикл репутации' },
    ],
  },
  {
    id: 'analytics',
    title: 'Аналитика и сопровождение',
    shortTitle: 'Аналитика',
    options: [
      { id: 'analytics_base', label: 'Настройка Метрики', price: 3000, description: 'Базовая аналитика' },
      { id: 'analytics_report', label: 'Отчёт за 1 месяц', price: 3500, description: 'Анализ результатов' },
      { id: 'support_month', label: 'Сопровождение 1 месяц', price: 6000, description: 'Ведение после запуска' },
    ],
  },
];

const painToServiceGroups: Record<PainId, string[]> = {
  sales_down: ['ads', 'content', 'analytics', 'catalog'],
  hard_to_find: ['profile'],
  weak_profile: ['profile', 'visual'],
  few_reviews: ['reviews'],
  low_rating: ['reviews'],
  competitors_stronger: ['competitors', 'content', 'ads'],
  fear_ads: ['ads', 'analytics'],
  services_not_filled: ['catalog'],
  no_content: ['visual', 'content'],
  no_calls: ['content', 'catalog', 'analytics', 'ads'],
  no_analytics: ['analytics'],
};

const painRecommendedOptions: Record<
  PainId,
  Partial<Record<ServiceGroup['id'], string[]>>
> = {
  sales_down: {
    ads: ['ads_full'],
    content: ['promo_3'],
    analytics: ['analytics_report'],
    catalog: ['catalog_10'],
  },
  hard_to_find: {
    profile: ['full_profile'],
    visual: ['visual_full'],
  },
  weak_profile: {
    profile: ['full_profile'],
    visual: ['photos_10'],
  },
  few_reviews: {
    reviews: ['reviews_base'],
  },
  low_rating: {
    reviews: ['reviews_full'],
  },
  competitors_stronger: {
    profile: ['profile'],
    visual: ['photos_10'],
    catalog: ['catalog_10'],
    competitors: ['competitors_full'],
    content: ['stories_3', 'posts_2', 'promo_1'],
    ads: ['ads_full'],
  },
  fear_ads: {
    ads: ['ads_full'],
    analytics: ['analytics_report', 'support_month'],
    reviews: ['reviews_base'],
  },
  services_not_filled: {
    catalog: ['catalog_10'],
  },
  no_content: {
    visual: ['photos_10'],
    content: ['stories_3', 'posts_2', 'promo_1'],
  },
  no_calls: {
    profile: ['full_profile'],
    visual: ['visual_full'],
    catalog: ['catalog_10'],
    reviews: ['reviews_base'],
    competitors: ['competitors_basic'],
  },
  no_analytics: {
    profile: ['audit'],
  },
};

const packages: PackagePlan[] = [
  {
    id: 'maps_basic',
    title: 'Размещение компании на картах / оптимизация',
    price: 20000,
    oldPrice: 25000,
    description: (
      <>
        Базовый старт для бизнеса, которому нужно привести карточку в порядок и усилить её видимость в локальном поиске.{' '}
        <strong>Без рекламного бюджета можно выйти на 30–40 новых заявок в месяц из карт:</strong>{' '}
        из них <strong>10–15 переходят в оплаты</strong> со средним чеком <strong>10 000–50 000 ₽</strong> — это
        дополнительно <strong>+100 000–500 000 ₽ ежемесячно</strong>.
      </>
    ),
    includes: ['access', 'profile', 'catalog_10', 'photos_10'],
  },
  {
    id: 'maps_turnkey',
    title: 'Настройка карт под ключ',
    price: 33000,
    description: (
      <>
        Оптимальный вариант для бизнеса, которому нужен порядок в карточке и быстрый запуск продвижения.{' '}
        <strong>Без рекламного бюджета можно увеличить от 50 до 100 новых заявок в месяц из Яндекс Карт:</strong>{' '}
        из них <strong>30–50 переходят в оплаты</strong> со средним чеком <strong>10 000–50 000 ₽</strong> — это
        дополнительно <strong>+300 000–1 000 000 ₽ ежемесячно</strong>.
      </>
    ),
    includes: ['full_profile', 'photos_20', 'catalog_30', 'ads_base', 'competitors_basic'],
  },
  {
    id: 'business_partner',
    title: 'Ваш бизнес — мой бизнес',
    price: 45000,
    oldPrice: 50000,
    description: (
      <>
        Максимальное включение: запуск и сопровождение в первый месяц.{' '}
        <strong>Без рекламного бюджета можно увеличить от 50 до 100 новых заявок в месяц из Яндекс Карт:</strong>{' '}
        из них <strong>30–50 переходят в оплаты</strong> со средним чеком <strong>10 000–50 000 ₽</strong> — это
        дополнительно <strong>+300 000–1 000 000 ₽ ежемесячно</strong>.{' '}
        Отдельно настраиваем <strong>работу с репутацией</strong>: фильтруем и отрабатываем негативные отзывы, при необходимости
        <strong> обжалуем их в поддержке сервиса</strong>.
      </>
    ),
    includes: ['full_profile', 'photos_20', 'catalog_30', 'ads_full', 'reviews_base', 'support_month', 'analytics_report'],
  },
];

function formatPrice(value: number): string {
  return `${new Intl.NumberFormat('ru-RU').format(value)} ₽`;
}

export default function ServicesCalculator() {
  const [mode, setMode] = useState<CalculatorMode>('pain');
  const [selectedPains, setSelectedPains] = useState<PainId[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string[]>>({});
  const [manualOverrides, setManualOverrides] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (mode !== 'pain') {
      return;
    }

    // Если ни одной проблемы не выбрано, полностью очищаем авто‑подбор
    if (selectedPains.length === 0) {
      setSelectedOptions({});
      setManualOverrides({});
      return;
    }

    // соберём рекомендованные работы по всем текущим болям
    const recommendedByGroup: Record<string, Set<string>> = {};

    selectedPains.forEach((painId) => {
      const recommendation = painRecommendedOptions[painId];
      if (!recommendation) return;

      Object.entries(recommendation).forEach(([groupId, optionIds]) => {
        if (!optionIds?.length) return;
        if (!recommendedByGroup[groupId]) {
          recommendedByGroup[groupId] = new Set<string>();
        }
        optionIds.forEach((id) => recommendedByGroup[groupId]!.add(id));
      });
    });

    setSelectedOptions((current) => {
      const next: Record<string, string[]> = { ...current };

      // Обновляем только те группы, которые не были вручную переопределены
      Object.entries(recommendedByGroup).forEach(([groupId, optionsSet]) => {
        if (manualOverrides[groupId]) return;
        next[groupId] = Array.from(optionsSet);
      });

      // Если по какой‑то группе больше нет рекомендаций и нет ручного выбора — удаляем её из авторасчёта
      Object.keys(next).forEach((groupId) => {
        if (manualOverrides[groupId]) return;
        if (!recommendedByGroup[groupId]) {
          delete next[groupId];
        }
      });

      return next;
    });
  }, [mode, selectedPains, manualOverrides]);

  const visibleGroups = useMemo(() => {
    if (mode === 'manual') {
      return serviceGroups;
    }

    if (selectedPains.length === 0) {
      return [];
    }

    const groupIds = new Set<string>();
    selectedPains.forEach((painId) => {
      const relatedGroups = painToServiceGroups[painId] || [];
      relatedGroups.forEach((groupId) => groupIds.add(groupId));
    });

    return serviceGroups.filter((group) => groupIds.has(group.id));
  }, [mode, selectedPains]);

  const selectedServicesDetailed = useMemo(() => {
    const result: {
      groupId: string;
      groupTitle: string;
      optionId: string;
      optionLabel: string;
      price: number;
    }[] = [];

    Object.entries(selectedOptions).forEach(([groupId, optionIds]) => {
      const group = serviceGroups.find((g) => g.id === groupId);
      if (!group) return;

      optionIds.forEach((optionId) => {
        const option = group.options.find((o) => o.id === optionId);
        if (!option) return;

        result.push({
          groupId,
          groupTitle: group.title,
          optionId: option.id,
          optionLabel: option.label,
          price: option.price,
        });
      });
    });

    return result;
  }, [selectedOptions]);

  const totalPrice = useMemo(() => {
    return selectedServicesDetailed.reduce((sum, item) => sum + item.price, 0);
  }, [selectedServicesDetailed]);

  const recommendedPackage = useMemo(() => {
    if (totalPrice < 10000) {
      return null;
    }

    // Если выбраны боли, связанные с серьёзными рекламными и конкурентными задачами,
    // рекомендуем максимальное включение: «Ваш бизнес — мой бизнес» (35 000 ₽)
    if (
      selectedPains.includes('fear_ads') ||
      selectedPains.includes('sales_down') ||
      selectedPains.includes('competitors_stronger')
    ) {
      const partner = packages.find((pkg) => pkg.id === 'business_partner') || null;
      if (partner) {
        return partner;
      }
    }

    const selectedOptionIds = selectedServicesDetailed.map((item) => item.optionId);

    const scored = packages.map((pkg) => {
      const overlapCount = pkg.includes.filter((inc) => selectedOptionIds.includes(inc)).length;
      const overlapRatio = pkg.includes.length > 0 ? overlapCount / pkg.includes.length : 0;
      const priceDiff = Math.abs(pkg.price - totalPrice);
      const priceProximity = 1 / (1 + priceDiff / 10000);

      const score = overlapCount * 3 + overlapRatio * 5 + priceProximity * 2;

      return { pkg, score, overlapCount };
    });

    scored.sort((a, b) => b.score - a.score);

    const best = scored[0];
    if (best && best.overlapCount > 0) {
      return best.pkg;
    }

    return null;
  }, [totalPrice, selectedServicesDetailed, selectedPains]);

  const telegramMessage = useMemo(() => {
    const selectedPainLabels = selectedPains.map((painId) => {
      const pain = painOptions.find((p) => p.id === painId);
      return pain?.label || '';
    });

    const problemsPart = selectedPainLabels.length
      ? `У меня проблема: ${selectedPainLabels.join(', ')}.`
      : 'Я рассматриваю варианты работы по картам.';

    const servicesPart = selectedServicesDetailed.length
      ? `Выбрал услуги: ${selectedServicesDetailed.map((s) => s.optionLabel).join(', ')}.`
      : 'Пока не выбрал конкретные услуги.';

    const pricePart = totalPrice > 0 ? `Сумма по отдельности: ${formatPrice(totalPrice)}.` : '';

    return `Здравствуйте. Я посмотрел калькулятор на странице услуг. ${problemsPart} ${servicesPart} ${pricePart} Подскажите, какой формат работы лучше выбрать?`;
  }, [selectedPains, selectedServicesDetailed, totalPrice]);

  const telegramUrl = useMemo(() => {
    return `https://t.me/ponizovandrey?text=${encodeURIComponent(telegramMessage)}`;
  }, [telegramMessage]);

  const togglePain = (painId: PainId) => {
    setSelectedPains((current) =>
      current.includes(painId) ? current.filter((id) => id !== painId) : [...current, painId]
    );
  };

  const selectOption = (groupId: string, optionId: string, isSelected: boolean) => {
    if (isSelected) {
      // повторный выбор той же опции снимает её
      setSelectedOptions((current) => {
        const currentIds = current[groupId] ?? [];
        const updated = currentIds.filter((id) => id !== optionId);
        const next: Record<string, string[]> = { ...current };
        if (updated.length > 0) {
          next[groupId] = updated;
        } else {
          delete next[groupId];
        }
        return next;
      });
      setManualOverrides((current) => {
        const currentIds = selectedOptions[groupId] ?? [];
        const stillHasOther = currentIds.filter((id) => id !== optionId).length > 0;
        if (stillHasOther) {
          return current;
        }
        const next = { ...current };
        delete next[groupId];
        return next;
      });
    } else {
      // явный выбор пользователя — фиксируем как ручное переопределение
      setSelectedOptions((current) => {
        const currentIds = current[groupId] ?? [];
        if (currentIds.includes(optionId)) return current;
        return {
          ...current,
          [groupId]: [...currentIds, optionId],
        };
      });
      setManualOverrides((current) => ({
        ...current,
        [groupId]: true,
      }));
    }
  };

  const resetCalculator = () => {
    setMode('pain');
    setSelectedPains([]);
    setSelectedOptions({});
  };

  const showAllServices = () => {
    setMode('manual');
  };

  const selectedPainsLabels = useMemo(() => {
    return selectedPains.map((painId) => {
      const pain = painOptions.find((p) => p.id === painId);
      return pain?.label || '';
    });
  }, [selectedPains]);

  return (
    <section className="py-20">
      <div className="mb-10">
        <span className="inline-block rounded-full border border-[#F5C518]/40 bg-[#F5C518]/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#1A3A2E]">
          Калькулятор стоимости
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-[#1E2837] leading-[64px] lc-styled-text__text lc-styled-text__text_align_left">
          Поймите, что именно нужно вашему бизнесу на картах
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-700">
          Сначала выберите задачи, которые хотите закрыть. Затем получите ориентир по стоимости и увидите, какой
          тариф подходит лучше.
        </p>
      </div>

      <div className="mb-8 flex w-full items-center justify-between gap-3">
        <button
          type="button"
          aria-pressed={mode === 'pain'}
          onClick={() => setMode('pain')}
          className={`${styles.button} ${mode === 'pain' ? styles.active : ''} flex-1 ${
            mode === 'pain' ? 'opacity-100' : 'opacity-60'
          }`}
        >
          <span className={styles.label}>Подобрать решение под решение проблемы</span>
        </button>
        <button
          type="button"
          aria-pressed={mode === 'manual'}
          onClick={() => setMode('manual')}
          className={`${styles.button} ${mode === 'manual' ? styles.active : ''} flex-1 ${
            mode === 'manual' ? 'opacity-100' : 'opacity-60'
          }`}
        >
          <span className={styles.label}>Выбрать точечные услуги</span>
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-8 pb-20 lg:pb-0">
          {mode === 'pain' && (
            <div className="space-y-5 rounded-2xl border border-white/60 bg-white/80 p-5 shadow-sm">
              <h3 className="text-xl font-semibold text-[#1A3A2E]">
                Какая проблема мешает получать клиентов из Яндекс Карт?
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {painOptions.map((pain) => {
                  const isSelected = selectedPains.includes(pain.id);
                  return (
                    <button
                      key={pain.id}
                      type="button"
                      onClick={() => togglePain(pain.id)}
                      aria-pressed={isSelected}
                      className={`flex h-full flex-col rounded-2xl border p-5 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518]/60 ${
                        isSelected
                          ? 'border-[#F5C518]/70 bg-gradient-to-br from-[#FFFDF2] to-[#FFF5CC] shadow-lg'
                          : 'border-white/60 bg-white/80 shadow-sm hover:border-[#F5C518]/40 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span className="text-base font-semibold leading-snug text-[#1A3A2E]">
                          {pain.label}
                        </span>
                        <span
                          className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${
                            isSelected
                              ? 'border-[#F0C000] bg-[#F5C518] text-[#1A3A2E]'
                              : 'border-[#D1D5DB] bg-white text-transparent'
                          }`}
                        >
                          ✓
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {visibleGroups.length > 0 ? (
            <div className="space-y-6">
              {mode === 'pain' && (
                <div className="rounded-xl border border-[#F5C518]/30 bg-gradient-to-br from-[#FFFDF3] to-white p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#B77900]">
                    Релевантные услуги
                  </p>
                  <p className="mt-2 text-gray-700">
                    На основе выбранных проблем калькулятор показывает только подходящие группы работ.
                  </p>
                </div>
              )}

              {visibleGroups.map((group) => {
                const selectedIds = selectedOptions[group.id] ?? [];
                return (
                  <fieldset
                    key={group.id}
                    className="overflow-hidden rounded-2xl border border-white/60 bg-white/75 shadow-sm"
                  >
                    <legend className="border-b border-white/70 px-5 py-3">
                      <h4 className="text-lg font-semibold text-[#1A3A2E]">{group.title}</h4>
                      <p className="mt-1 text-sm text-gray-600">{group.shortTitle}</p>
                    </legend>

                    <div className="space-y-2 p-4">
                      {group.options.map((option) => {
                        const isSelected = selectedIds.includes(option.id);
                        return (
                          <label
                            key={option.id}
                            className={`flex cursor-pointer items-start gap-4 rounded-xl border p-4 transition-all duration-200 ${
                              isSelected
                                ? 'border-[#F5C518]/60 bg-[#FFF8D9] shadow-md'
                                : 'border-[#E5E7EB] bg-white hover:border-[#F5C518]/30 hover:bg-[#FFFDF6]'
                            }`}
                          >
                            <input
                              type="checkbox"
                              name={`${group.id}-${option.id}`}
                              value={option.id}
                              checked={isSelected}
                              onChange={() => selectOption(group.id, option.id, isSelected)}
                              className="mt-1 h-5 w-5 shrink-0 cursor-pointer border-gray-300 text-[#F5C518] focus:ring-2 focus:ring-[#F5C518]/60"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between gap-4">
                                <span className="font-semibold text-[#1A3A2E]">{option.label}</span>
                                <span className="shrink-0 text-sm font-semibold text-[#1A3A2E]">
                                  {formatPrice(option.price)}
                                </span>
                              </div>
                              {option.description && (
                                <p className="mt-1 text-sm text-gray-600">{option.description}</p>
                              )}
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>
                );
              })}
            </div>
          ) : mode === 'pain' && selectedPains.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-white/70 p-7 text-center">
              <p className="text-lg font-semibold text-[#1A3A2E]">
                Выберите вашу проблему или соберите услуги вручную
              </p>
              <p className="mx-auto mt-2 max-w-2xl text-gray-600">
                Калькулятор покажет ориентир по стоимости и подскажет, какой тариф подходит лучше.
              </p>
              <button
                type="button"
                onClick={showAllServices}
                className="mt-6 inline-flex items-center justify-center rounded-lg border border-[#E5E7EB] bg-white px-6 py-2.5 text-sm font-medium text-[#1A3A2E] transition-colors duration-200 hover:border-[#D1D5DB] hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518]/60"
              >
                Показать все услуги
              </button>
            </div>
          ) : null}
        </div>

        <aside className="hidden lg:block lg:sticky lg:top-6 lg:self-start">
          <div className="overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-white/90 to-white/70 shadow-xl backdrop-blur-xl">
            <div className="border-b border-white/70 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#E65C00]">Ваш расчёт</p>
                  <h3 className="mt-1 text-2xl font-semibold text-[#1A3A2E]">Итого</h3>
                </div>
                <button
                  type="button"
                  onClick={resetCalculator}
                  className="rounded-lg border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-medium text-[#1A3A2E] transition-colors duration-200 hover:border-[#D1D5DB] hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518]/60"
                >
                  Сбросить
                </button>
              </div>
            </div>

            <div className="space-y-5 p-5">
              {selectedServicesDetailed.length > 0 ? (
                <>
                  {selectedPainsLabels.length > 0 && (
                    <div>
                      <p className="mb-2 text-sm font-semibold text-[#1A3A2E]">Выбранные проблемы</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedPainsLabels.map((label, idx) => (
                          <span
                            key={idx}
                            className="rounded-full border border-[#F5C518]/30 bg-[#FFF8DC] px-3 py-1 text-xs text-[#1A3A2E]"
                          >
                            {label}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <p className="mb-2 text-sm font-semibold text-[#1A3A2E]">Выбранные работы</p>
                    <div className="space-y-2">
                      {selectedServicesDetailed.map((service) => (
                        <div
                          key={`${service.groupId}-${service.optionId}`}
                          className="flex items-start justify-between gap-3 rounded-lg border border-white/70 bg-white/80 px-3 py-3"
                        >
                          <div className="flex-1">
                            <p className="text-sm text-gray-700">{service.optionLabel}</p>
                            <p className="mt-0.5 text-xs text-gray-500">{service.groupTitle}</p>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <span className="shrink-0 text-sm font-semibold text-[#1A3A2E]">
                              {formatPrice(service.price)}
                            </span>
                            <button
                              type="button"
                              onClick={() => selectOption(service.groupId, service.optionId, true)}
                              className="text-xs text-[#6B7280] hover:text-[#E65C00] focus-visible:outline-none focus-visible:underline"
                            >
                              Убрать
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#F5C518]/30 bg-[#FFFBE8] p-4">
                    <p className="text-sm text-gray-600">Стоимость по отдельности</p>
                    <p className="mt-1 text-3xl font-bold text-[#1A3A2E]">{formatPrice(totalPrice)}</p>
                  </div>

                  {recommendedPackage ? (
                    <div className="rounded-xl border border-[#1A3A2E]/10 bg-[#1A3A2E] p-5 text-white">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F5C518]">
                        Рекомендованный тариф
                      </p>
                      <h4 className="mt-2 text-lg font-semibold">{recommendedPackage.title}</h4>
                      <p className="mt-2 text-sm text-white/80">{recommendedPackage.description}</p>
                      <div className="mt-4 flex items-end justify-between gap-4 border-t border-white/20 pt-4">
                        <span className="text-sm text-white/70">Цена пакета</span>
                        <div className="flex flex-col items-end">
                          {recommendedPackage.oldPrice && (
                            <span className="text-sm text-white/60 line-through">
                              {formatPrice(recommendedPackage.oldPrice)}
                            </span>
                          )}
                          <span className="text-xl font-bold">
                            {formatPrice(recommendedPackage.price)}
                          </span>
                        </div>
                      </div>
                      {totalPrice > recommendedPackage.price ? (
                        <p className="mt-2 rounded-lg bg-white/10 px-3 py-2 text-sm">
                          Экономия: <strong>{formatPrice(totalPrice - recommendedPackage.price)}</strong>
                        </p>
                      ) : (
                        <p className="mt-2 rounded-lg bg-white/10 px-3 py-2 text-sm">
                          Можно оставить точечный набор без пакета
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="rounded-xl border border-dashed border-gray-300 bg-white/80 p-4 text-center">
                      <p className="text-sm font-semibold text-[#1A3A2E]">Похоже, вам достаточно точечной доработки</p>
                      <p className="mt-1 text-sm text-gray-600">Пакет пока не требуется</p>
                    </div>
                  )}

                  <a
                    href={telegramUrl}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="block w-full rounded-lg border border-[#E0B800] bg-[#F5C518] px-6 py-3 text-center text-sm font-semibold text-[#1A3A2E] transition-colors duration-200 hover:bg-[#F7D03A] hover:border-[#F0C000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518]/60 focus-visible:ring-offset-2"
                  >
                    Отправить расчёт в Telegram
                  </a>
                </>
              ) : (
                <div className="rounded-xl border border-dashed border-gray-300 bg-white/70 p-6 text-center">
                  <p className="text-sm text-gray-600">
                    Выберите вашу проблему или соберите услуги вручную — калькулятор покажет ориентир по стоимости.
                  </p>
                </div>
              )}
            </div>
          </div>
        </aside>
      </div>

      {/* Минималистичный итоговый расчёт для мобильной версии */}
      {totalPrice > 0 && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 px-4 py-3 shadow-[0_-6px_18px_rgba(15,23,42,0.08)] backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6B7280]">
                Стоимость по отдельности
              </p>
              <p className="text-xl font-bold text-[#1A3A2E]">
                {formatPrice(totalPrice)}
              </p>
              {recommendedPackage && (
                <p className="mt-0.5 truncate text-xs text-gray-600">
                  Тариф: <span className="font-semibold">{recommendedPackage.title}</span>
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <a
                href={telegramUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#F5C518] px-4 py-2 text-xs font-semibold text-[#1A3A2E] shadow-sm transition-colors duration-200 hover:bg-[#F7D03A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518]/60 focus-visible:ring-offset-1"
              >
                Обсудить в Telegram
              </a>
              <button
                type="button"
                onClick={resetCalculator}
                className="text-[11px] font-medium text-gray-500 underline-offset-2 hover:underline"
              >
                Сбросить
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
