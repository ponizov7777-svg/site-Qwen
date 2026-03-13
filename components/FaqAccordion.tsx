'use client';

import { useState } from 'react';

type FaqItem = {
  q: string;
  a: string | string[];
};

type FaqAccordionProps = {
  items: FaqItem[];
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
  className = 'space-y-4',
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={className}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const contentId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div
            key={index}
            className={`overflow-hidden rounded-lg border backdrop-blur-sm transition-all duration-200 ${
              isOpen
                ? 'border-[#E7D28A] bg-[#FFFBEF] shadow-sm ring-2 ring-[#F5C518]/25'
                : 'border-y border-x-2 border-[#D1D5DB] bg-white shadow-sm hover:border-[#C9CDD3] hover:bg-gray-50'
            }`}
          >
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-start justify-between gap-7 px-9 py-7 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518]/40 focus-visible:ring-inset md:px-10"
            >
              <h3 className="pr-10 text-base font-semibold leading-relaxed text-[#1A3A2E] md:text-lg">
                {item.q}
              </h3>
              <span
                className={`mt-1 flex shrink-0 items-center justify-center transition-all duration-200 ${
                  isOpen
                    ? 'rotate-180 text-[#1A3A2E]'
                    : 'text-[#E65C00]'
                }`}
              >
                <ChevronIcon />
              </span>
            </button>

            {isOpen && (
              <div
                id={contentId}
                role="region"
                aria-labelledby={buttonId}
                className="border-t border-[#E7D9B8] px-6 pb-6 pt-5 md:px-9"
              >
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
            )}
          </div>
        );
      })}
    </div>
  );
}
