'use client';

import { useState } from 'react';

type FaqItem = {
  q: string;
  a: string | readonly string[];
};

type FaqAccordionProps = {
  items: readonly FaqItem[];
  className?: string;
};

function ChevronIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FaqAccordion({
  items,
  className = '',
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-white/50 bg-white/70 shadow-xl backdrop-blur-xl ${className}`}
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const contentId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        const isLast = index === items.length - 1;

        return (
          <div
            key={index}
            className={`transition-colors duration-200 ${
              isOpen ? 'bg-[#FFFBEF]/60' : 'hover:bg-white/50'
            } ${!isLast ? 'border-b border-[#DCCFB4]/50' : ''}`}
          >
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className={`relative flex w-full items-start justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518]/40 focus-visible:ring-offset-2 md:px-8`}
            >
              {isOpen ? (
                <span
                  className="absolute bottom-4 left-0 top-4 w-[3px] rounded-full bg-[#F5C518]"
                  aria-hidden="true"
                />
              ) : null}
              <h3 className="pr-4 text-base font-semibold leading-relaxed text-[#1A3A2E] md:text-lg">
                {item.q}
              </h3>
              <span
                className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F5C518]/25 text-[#1A3A2E] transition-transform duration-300 motion-reduce:transition-none ${
                  isOpen ? 'rotate-180' : ''
                }`}
              >
                <ChevronIcon />
              </span>
            </button>

            <div
              id={contentId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-5 md:px-8">
                  {Array.isArray(item.a) ? (
                    <div className="space-y-3">
                      {item.a.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex} className="leading-relaxed text-gray-700">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="leading-relaxed text-gray-700">{item.a}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
