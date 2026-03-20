'use client';

import { useState } from 'react';
import { trackMetrikaGoal } from '../lib/metrics';

declare global {
  interface Window {
    __initVkChatWidget?: () => void;
  }
}

export default function VkChatButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);

    // Цель за клик по «чату»
    trackMetrikaGoal('micro_vk_widget_open', {
      block_id: 'vk_chat_button',
      element_id: 'vk_chat_button_open',
    });

    // Инициализация настоящего виджета ВК
    try {
      window.__initVkChatWidget?.();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('[VK chat button] init error', e);
    }
  };

  // Прячем кнопку после клика, когда виджет уже на странице
  if (clicked) return null;

  return (
    <button
      type="button"
      onClick={handleClick}
      className="fixed right-4 bottom-4 z-40 flex items-center gap-3 rounded-full bg-[#5181B8] text-white px-4 py-2 shadow-xl hover:bg-[#4170a6] transition-colors text-sm md:text-base"
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 border border-white/30 text-xs font-semibold">
        VK
      </span>
      <span className="hidden sm:inline">Написать в сообщество</span>
    </button>
  );
}
