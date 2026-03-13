// components/AdFormatsFilter.tsx
'use client';
import { Fragment, useMemo, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './AdFormatsFilter.module.css';

// ===== КЛАССЫ ИЗ STYLE GUIDE =====
const container = "max-w-7xl mx-auto px-4";
const h2 = "text-3xl md:text-4xl font-semibold mb-6 text-[#1E2837] leading-[64px]";
const h3 = "text-xl font-semibold text-[#1A3A2E] mb-4 leading-tight";
const glassCard = "glass-card backdrop-blur-xl bg:white/70 border-white/50 shadow-xl hover:shadow-black/10 p-8 rounded-2xl overflow-hidden flex flex-col h-full";
const badgePrimary = "px-3 py-1 bg-[#F5C518]/40 text-[#1A3A2E] text-sm font-medium rounded-full backdrop-blur-sm border border-white/60";
const btnPrimary =
  "inline-flex items-center justify-center px-6 py-2.5 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-lg text-sm md:text-base border border-[#E0B800] hover:bg-[#F7D03A] hover:border-[#F0C000] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518]/60 focus-visible:ring-offset-2";
const btnSecondary =
  "inline-flex items-center justify-center px-5 py-2.5 bg-white text-[#1A3A2E] font-medium rounded-lg text-xs md:text-sm border border-[#E5E7EB] hover:bg-gray-50 hover:border-[#D1D5DB] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E65C00]/30 focus-visible:ring-offset-2";

const sharedSelectionBg = "bg-[#F3F4F6]";

// Интерфейсы для типизации данных
interface FormatItem {
  id: string;
  title: string;
  benefit: string;
  description: string;
  cta: string;
  href: string;
  image?: string;
  badge?: string;
}

interface SubCategory {
  id: 'standard' | 'premium';
  title: string;
  items: FormatItem[];
}

interface Category {
  title: string;
  items?: FormatItem[];
  subCategories?: SubCategory[];
}

type MainCategoryId = 'yandexBusiness' | 'geoAdvertising';
type SubCategoryId = 'standard' | 'premium';

const fadeInUp = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.16 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.1 },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.02,
    },
  },
};

// ===== ДАННЫЕ (Строгая иерархия) =====
const formatsData: { [key: string]: Category } = {
  yandexBusiness: {
    title: "Яндекс Бизнес",
    items: [
      {
        id: "add-business",
        title: "Добавить бизнес",
        benefit: "О вас узнает аудитория Карт и Поиска",
        description: "Добавлю вашу компанию в Яндекс, и информация о ней появится в Картах и Поиске. А вы сможете бесплатно получать новых клиентов.",
        image: "/images/add-business.png",
        cta: "Добавить организацию на карты",
        href: "/geomarketing",
      },
      {
        id: "subscription",
        title: "Рекламная подписка",
        benefit: "Ваш бизнес будет продвигаться сам",
        description: "Создам и настрою объявления. Они появятся в поиске Яндекса, Картах и на сайтах Рекламной сети. Только там, где есть ваши потенциальные клиенты.",
        image: "/images/subscription.png",
        cta: "Настроить подписку",
        href: "/uslugi",
      },
    ],
  },
  geoAdvertising: {
    title: "Геомедийная реклама",
    subCategories: [
      {
        id: "standard",
        title: "Стандартные форматы",
        items: [
          {
            id: "route-branding",
            title: "Брендирование маршрута",
            benefit: "Позволяет показывать рекламу без конкурентов",
            description: "На протяжении всего маршрута вашего потенциального клиента будет отображаться реклама только вашего бренда — сразу в трёх заметных механиках: пин, баннер и билборд.",
            image: "/images/standart-format/brand-marshrut.png",
            cta: "Брендировать маршрут",
            href: "#form",
          },
          {
            id: "route-recommendation",
            title: "Рекомендация маршрута в Яндекс Навигаторе",
            benefit: "Формирует знание о локации и стимулирует спонтанные покупки",
            description: "Нативный формат помогает сориентироваться на местности и предлагает маршрут, где точка вашего бренда — промежуточный пункт.",
            image: "/images/standart-format/recommendation.png",
            cta: "Рекомендовать свой маршрут",
            href: "#form",
          },
          {
            id: "banner-geoservices",
            title: "Баннер в Геосервисах",
            benefit: "Улучшает бренд-метрики за счёт максимального охвата",
            description: "Появляется, когда скорость автомобиля равна нулю. По клику на баннер показываются все детали предложения и CTA.",
            image: "/images/standart-format/banner-geoservices.png",
            cta: "Разместить баннер",
            href: "#form",
          },
          {
            id: "billboards-geoservices",
            title: "Билборды в Геосервисах",
            benefit: "Увеличивают знание бренда",
            description: "Появляются на карте во время движения и показывают детали предложения, когда пользователь рядом. Единственный цифровой формат, который дублирует наружную рекламу.",
            image: "/images/standart-format/billboards-geoservices.png",
            cta: "Разместить билборд",
            href: "#form",
          },
          {
            id: "banner-metro",
            title: "Баннер в Яндекс Метро",
            benefit: "Улучшает узнаваемость",
            description: "Появляется при построении маршрута на определённых ветках или станциях. По клику переводит пользователя на страницу с деталями предложения.",
            image: "/images/standart-format/banner-metro.png",
            cta: "Разместить баннер в метро",
            href: "#form",
          },
          {
            id: "pins-geoservices",
            title: "Пины в Геосервисах",
            benefit: "Формируют знание о локации и акции",
            description: "Появляются, когда пользователь проезжает рядом с организацией. По клику на пин показывается рекламное сообщение и маршрут до точки.",
            image: "/images/standart-format/pins-geoservices.png",
            cta: "Разместить пин",
            href: "#form",
          },
        ],
      },
      {
        id: "premium",
        title: "Премиум-форматы",
        items: [
          {
            id: "premium-pin",
            title: "Премиум-пин в Геосервисах",
            benefit: "Повышает заметность офлайн-точек",
            description: "3D-метка отображается на картах без других пинов и билбордов, когда пользователь следует по маршруту в Картах рядом с организацией. По клику показывается рекламное сообщение и предложение построить маршрут до точки, перейти на сайт или позвонить.",
            image: "/images/premium-format/premium-pin.png",
            cta: "Разместить премиум-пин",
            href: "#form",
            badge: "Новинка",
          },
          {
            id: "premium-banner",
            title: "Премиум-баннер в Геосервисах",
            benefit: "Помогает выделиться и привлечь больше внимания",
            description: "Заметный баннер появляется, когда пользователь только планирует маршрут или уже идёт или едет по нему, но решил остановиться. В зависимости от настроек формата пользователь может как сразу перейти на сайт, так и увидеть фуллскрин или сторис.",
            image: "/images/premium-format/premium-banner.png",
            cta: "Разместить премиум-баннер",
            href: "#form",
            badge: "Новинка",
          },
          {
            id: "premium-billboard",
            title: "Премиум-билборд по маршруту",
            benefit: "Повышает заметность",
            description: "Кастомизированный 3D-объект на карте органично встраивается в интерфейс приложения и привлекает потенциальных клиентов, которые проезжают рядом.",
            image: "/images/premium-format/premium-billboard.png",
            cta: "Разместить премиум-билборд",
            href: "#form",
            badge: "Новинка",
          },
        ],
      },
    ],
  },
};

function FilterButton({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`${styles.button} ${isActive ? styles.active : ''}`}
    >
      <span className={styles.label}>{label}</span>
    </button>
  );
}

function FormatPreviewButton({
  index,
  isActive,
  onClick,
}: {
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const label = String(index + 1).padStart(2, '0');

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      aria-label={`Выбрать формат ${label}`}
      className={styles.formatButtonTrigger}
    >
      <div className={styles.formatButtonContainer}>
      <div className={`${styles.button3d} ${isActive ? styles.button3dPressed : ''}`}>
        <div className={styles.headBtn}>
          <div className={styles.topBtn}>
            <span>{label}</span>
          </div>
        </div>
        <div className={styles.bodyBtn}>
          <div className={styles.leftSide} />
          <div className={styles.rightSide} />
        </div>
        <div className={styles.base}>
          <div className={styles.bodyBase}>
            <div className={styles.hole}>
              <div className={styles.btnRest}>
                <div className={styles.leftSide} />
                <div className={styles.rightSide} />
              </div>
              <div className={styles.shadow} />
            </div>
          </div>
        </div>
      </div>
      </div>
    </button>
  );
}

function StepCheckmark() {
  return (
    <span className={styles.stepCheck} aria-hidden="true">
      <svg viewBox="0 0 16 16" className={styles.stepCheckIcon}>
        <path
          d="M3.5 8.5L6.5 11.5L12.5 5.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function AdFormatsFilter() {
  const [mainCategory, setMainCategory] = useState<MainCategoryId | null>('yandexBusiness');
  const [subCategory, setSubCategory] = useState<SubCategoryId | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);
  
  // Получаем текущие данные для отображения
  const currentItems: FormatItem[] = useMemo(() => {
    if (mainCategory === 'yandexBusiness' && formatsData.yandexBusiness.items) {
      return formatsData.yandexBusiness.items;
    }
    if (mainCategory === 'geoAdvertising' && subCategory && formatsData.geoAdvertising.subCategories) {
      const subCategoryData = formatsData.geoAdvertising.subCategories.find(
        cat => cat.id === subCategory
      );
      return subCategoryData ? subCategoryData.items : [];
    }
    return [];
  }, [mainCategory, subCategory]);

  const formatRows = useMemo(() => {
    const rows: FormatItem[][] = [];

    for (let index = 0; index < currentItems.length; index += 2) {
      rows.push(currentItems.slice(index, index + 2));
    }

    return rows;
  }, [currentItems]);

  let currentFormatData: FormatItem | null = null;
  
  // Получаем данные выбранного формата
  if (selectedFormat) {
    if (mainCategory === 'yandexBusiness' && formatsData.yandexBusiness.items) {
      currentFormatData =
        formatsData.yandexBusiness.items.find((item) => item.id === selectedFormat) || null;
    } else if (mainCategory === 'geoAdvertising' && formatsData.geoAdvertising.subCategories) {
      const subCategoryData = formatsData.geoAdvertising.subCategories.find(
        cat => cat.id === subCategory
      );
      if (subCategoryData) {
        currentFormatData =
          subCategoryData.items.find((item) => item.id === selectedFormat) || null;
      }
    }
  }

  // Если пользователь еще не выбрал конкретный формат,
  // все равно показываем превью первого доступного варианта справа.
  if (!currentFormatData && currentItems.length > 0) {
    currentFormatData = currentItems[0];
  }

  const activeStep = useMemo(() => {
    if (!mainCategory) {
      return 1;
    }

    if (mainCategory === 'geoAdvertising' && !subCategory) {
      return 2;
    }

    if (!selectedFormat) {
      return 3;
    }

    return null;
  }, [mainCategory, subCategory, selectedFormat]);

  const isStepCompleted = (stepId: number) => {
    if (stepId === 1) {
      return Boolean(mainCategory);
    }

    if (stepId === 2) {
      if (!mainCategory) return false;
      if (mainCategory === 'yandexBusiness') return true;
      return Boolean(subCategory);
    }

    if (stepId === 3) {
      return Boolean(selectedFormat);
    }

    return false;
  };

  const steps = [
    { id: 1, label: 'Направление' },
    { id: 2, label: 'Тип формата' },
    { id: 3, label: 'Конкретный формат' },
  ];

  const telegramHref = useMemo(() => {
    if (!currentFormatData) {
      return 'https://t.me/ponizovandrey';
    }

    let message = `Здравствуйте! Интересует формат "${currentFormatData.title}".`;

    if (currentFormatData.cta === 'Начать бесплатно') {
      message = 'Здравствуйте! Хочу начать бесплатно продвижение в Яндекс Бизнес. Подскажите, пожалуйста, что нужно для старта.';
    } else if (currentFormatData.cta === 'Настроить подписку') {
      message = 'Здравствуйте! Хочу настроить рекламную подписку. Подскажите, пожалуйста, с чего лучше начать.';
    } else if (currentFormatData.cta === 'Попробовать') {
      message = `Здравствуйте! Хочу попробовать формат "${currentFormatData.title}". Подскажите, пожалуйста, по условиям размещения.`;
    }

    return `https://t.me/ponizovandrey?text=${encodeURIComponent(message)}`;
  }, [currentFormatData]);

  return (
    <section className="py-20 bg-gradient-to-b from-[#FFF9E6] to-white">
      <div className={container}>
        {/* Заголовок секции */}
        <div className="pb-10">
          <h2 className={h2}>Как пользователи увидят ваш бизнес: форматы рекламы</h2>
          <p className="text-lg text-gray-700 max-w-3xl">
            Ниже три простых шага: выберите направление, тип формата и сам формат.
            Справа наглядный пример, как это выглядит для пользователя.
          </p>
        </div>

        {/* Большая белая подложка, как на примере */}
        <div className="bg-white/95 rounded-[32px] px-4 py-6 md:px-8 md:py-8 shadow-sm md:min-h-[760px]">
          <div className="grid md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] gap-8 md:gap-12 items-start md:items-stretch h-full">
            {/* Левая колонка: шаги + выбор */}
            <div className="space-y-9 md:space-y-10 max-w-5xl h-full">
              {/* Степпер */}
              <div className="pb-4 md:pb-5 border-b border-gray-100">
                <ol className="flex flex-col gap-3 text-sm md:text-base text-gray-600 sm:flex-row sm:items-center sm:gap-3">
                  {steps.map((step, index) => {
                    const isCompleted = isStepCompleted(step.id);
                    const isCurrent = activeStep === step.id;
                    const showDivider = index < steps.length - 1;

                    return (
                      <li key={step.id} className="flex items-start gap-3 sm:items-center sm:gap-2">
                        <div className="flex flex-col items-center self-stretch sm:self-auto">
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold transition-colors ${
                              isCompleted
                                ? 'bg-[#1A3A2E] border-[#1A3A2E] text-white'
                                : isCurrent
                                ? 'bg-[#FFF3BF] border-[#E7D28A] text-[#1A3A2E]'
                                : 'bg-white border-gray-200 text-gray-400'
                            }`}
                          >
                            {step.id}
                          </div>
                          {showDivider && (
                            <span className="mt-2 w-px flex-1 bg-gray-200 sm:hidden" />
                          )}
                        </div>
                        <div className="min-w-0 pt-0.5 sm:hidden">
                          <span className="flex items-center gap-2 font-medium text-[#1A3A2E]">
                            <span>{step.label}</span>
                            {isCompleted && <StepCheckmark />}
                          </span>
                          {!isCompleted && (
                            <span className="block text-xs text-gray-500">
                              {isCurrent
                              ? 'Текущий шаг'
                              : 'Следующий шаг'}
                            </span>
                          )}
                        </div>
                        <span className="hidden sm:inline-flex items-center gap-2 font-medium">
                          <span>{step.label}</span>
                          {isCompleted && <StepCheckmark />}
                        </span>
                        {showDivider && (
                          <span className="hidden sm:block w-8 h-px bg-gray-200" />
                        )}
                      </li>
                    );
                  })}
                </ol>
              </div>

              {/* Блок выбора: направление, тип и конкретный формат на одном фоне */}
              <div className="pt-2 md:pt-3 space-y-3">
                <p className="text-sm md:text-base font-semibold text-[#111827]">
                  Направление:
                </p>
                <div className={`rounded-2xl ${sharedSelectionBg} border border-gray-100 px-4 py-4 md:px-5 md:py-5 space-y-5 md:space-y-6`}>
                  {/* Шаг 1. Направление */}
                  <div>
                    <div className="flex items-center justify-between gap-3 w-full">
                      <FilterButton
                        label="Яндекс Бизнес"
                        isActive={mainCategory === 'yandexBusiness'}
                        onClick={() => {
                          setMainCategory('yandexBusiness');
                          setSubCategory(null);
                          const firstYandexItem = formatsData.yandexBusiness.items?.[0];
                          setSelectedFormat(firstYandexItem ? firstYandexItem.id : null);
                        }}
                      />
                      <FilterButton
                        label="Геомедийная реклама"
                        isActive={mainCategory === 'geoAdvertising'}
                        onClick={() => {
                          setMainCategory('geoAdvertising');
                          // По умолчанию выбираем стандартные форматы и первый формат в списке
                          const defaultSub = 'standard' as SubCategoryId;
                          setSubCategory(defaultSub);
                          const standardCategory = formatsData.geoAdvertising.subCategories?.find(
                            (cat) => cat.id === defaultSub
                          );
                          const firstGeoItem = standardCategory?.items?.[0];
                          setSelectedFormat(firstGeoItem ? firstGeoItem.id : null);
                        }}
                      />
                    </div>
                  </div>

                  {/* Шаги 2–3 внутри того же контура */}
                  <div className="space-y-4 md:space-y-5">
                    <AnimatePresence initial={false}>
                      {mainCategory === 'geoAdvertising' && formatsData.geoAdvertising.subCategories && (
                        <motion.div
                          key="subcategories"
                          variants={fadeInUp}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <p className="text-sm md:text-base font-semibold text-[#111827] mb-3">
                            Тип формата:
                          </p>
                          <div className="flex flex-wrap gap-3">
                            {formatsData.geoAdvertising.subCategories.map((cat) => (
                              <FilterButton
                                key={cat.id}
                                label={cat.title}
                                isActive={subCategory === cat.id}
                                onClick={() => {
                                  setSubCategory(cat.id);
                                  // При выборе типа формата сразу подсвечиваем первый формат в этой группе
                                  const firstItem = cat.items?.[0];
                                  setSelectedFormat(firstItem ? firstItem.id : null);
                                }}
                              />
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <AnimatePresence mode="wait" initial={false}>
                      {currentItems.length > 0 && (
                        <motion.div
                          key={`${mainCategory ?? 'none'}-${subCategory ?? 'none'}`}
                          variants={fadeInUp}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <p className="text-sm md:text-base font-semibold text-[#111827] mb-8">
                            Конкретный формат:
                          </p>
                          <motion.div
                            className="space-y-4"
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                          >
                            {formatRows.map((row, rowIndex) => (
                              <motion.div
                                key={`format-row-${rowIndex}`}
                                variants={fadeInUp}
                                className="grid grid-cols-[96px_minmax(0,1fr)] gap-x-4 gap-y-3 items-start md:grid-cols-[120px_minmax(0,1fr)] lg:grid-cols-[120px_minmax(0,1fr)_120px_minmax(0,1fr)]"
                              >
                                {row.map((item, columnIndex) => {
                                  const itemIndex = rowIndex * 2 + columnIndex;
                                  const isActive = selectedFormat === item.id;
                                  const isPremium = subCategory === 'premium' || item.badge === 'Новинка';

                                  const baseCard =
                                    'text-left rounded-xl bg-white px-5 py-4 transition-all duration-200 flex flex-col justify-start h-full min-h-[112px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E65C00]/20 focus-visible:ring-offset-2';

                                  const stateClasses = isActive
                                    ? 'bg-[#FFF8DB] text-[#1A3A2E] shadow-none'
                                    : isPremium
                                    ? 'text-[#1A3A2E] bg-[#FFFEF9] shadow-none hover:bg-[#FFFBEF]'
                                    : 'text-[#1A3A2E] shadow-none hover:bg-[#FFFCF2]';

                                  return (
                                    <Fragment key={item.id}>
                                      <div className="flex justify-center lg:justify-start">
                                        <FormatPreviewButton
                                          index={itemIndex}
                                          isActive={isActive}
                                          onClick={() => setSelectedFormat(item.id)}
                                        />
                                      </div>
                                      <motion.button
                                        variants={fadeInUp}
                                        onClick={() => setSelectedFormat(item.id)}
                                        className={`${baseCard} ${stateClasses}`}
                                      >
                                        <div className="flex items-center gap-2 mb-2">
                                          <span className="text-sm font-semibold text-[#1A3A2E]">
                                            {item.title}
                                          </span>
                                        </div>
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                          {item.description}
                                        </p>
                                      </motion.button>
                                    </Fragment>
                                  );
                                })}
                                {row.length === 1 && (
                                  <>
                                    <div className="hidden lg:block" />
                                    <div className="hidden lg:block" />
                                  </>
                                )}
                              </motion.div>
                            ))}
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
              </div>
            </div>
            </div>

            {/* Правая колонка: превью выбранного формата */}
            <AnimatePresence mode="wait" initial={false}>
              {currentFormatData && (
                <motion.div
                  key={currentFormatData.id}
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="rounded-3xl bg-[#F5F7FB] p-5 md:p-6 flex flex-col h-full min-h-0"
                >
                  <div className="mb-4">
                    <h3 className={h3}>{currentFormatData.title}</h3>
                  </div>

                  <p className="text-[#1D4ED8] font-semibold mb-4 text-lg">
                    {currentFormatData.benefit}
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    {currentFormatData.description}
                  </p>

                  <a
                    href={telegramHref}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className={btnPrimary}
                  >
                    {currentFormatData.cta}
                  </a>

                  <div className="mt-6 flex-1 min-h-0 flex items-center justify-center">
                    <div
                      className={
                        'relative w-full h-full ' +
                        (currentFormatData.id === 'premium-pin'
                          ? 'max-w-[330px] md:max-w-[390px]'
                          : currentFormatData.id === 'subscription'
                          ? 'max-w-[744px] md:max-w-[876px]'
                          : 'max-w-[165px] md:max-w-[195px]')
                      }
                    >
                      <div className="w-full h-full flex items-center justify-center overflow-hidden">
                        <img
                          src={currentFormatData.image || '/images/default-format.png'}
                          alt={currentFormatData.title}
                          className="max-w-full max-h-full w-auto h-auto object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}