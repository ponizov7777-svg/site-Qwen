declare global {
  interface Window {
    VK?: {
      Widgets?: {
        CommunityMessages: (elementId: string, groupId: number) => void;
      };
    };
    __vkChatWidgetInitialized?: boolean;
  }
}

const VK_OPENAPI_SRC = 'https://vk.com/js/api/openapi.js?169';

let vkOpenApiLoadPromise: Promise<void> | null = null;

export function loadVkOpenApi(): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.resolve();
  }
  if (window.VK?.Widgets) {
    return Promise.resolve();
  }
  if (vkOpenApiLoadPromise) {
    return vkOpenApiLoadPromise;
  }

  vkOpenApiLoadPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-vk-openapi="1"]',
    );
    if (existing) {
      const finish = () => {
        if (window.VK?.Widgets) resolve();
        else reject(new Error('VK Open API loaded without Widgets'));
      };
      if (existing.dataset.loaded === '1') {
        finish();
        return;
      }
      existing.addEventListener('load', () => {
        existing.dataset.loaded = '1';
        finish();
      });
      existing.addEventListener('error', () => {
        vkOpenApiLoadPromise = null;
        reject(new Error('VK Open API script error'));
      });
      return;
    }

    const script = document.createElement('script');
    script.src = VK_OPENAPI_SRC;
    script.async = true;
    script.dataset.vkOpenapi = '1';
    script.onload = () => {
      script.dataset.loaded = '1';
      if (window.VK?.Widgets) resolve();
      else {
        vkOpenApiLoadPromise = null;
        reject(new Error('VK Open API loaded without Widgets'));
      }
    };
    script.onerror = () => {
      vkOpenApiLoadPromise = null;
      reject(new Error('VK Open API script error'));
    };
    document.body.appendChild(script);
  });

  return vkOpenApiLoadPromise;
}

export async function initVkCommunityMessages(): Promise<void> {
  await loadVkOpenApi();
  if (window.__vkChatWidgetInitialized) return;
  window.__vkChatWidgetInitialized = true;
  try {
    window.VK?.Widgets?.CommunityMessages('vk_community_messages', 225365151);
  } catch (e) {
    window.__vkChatWidgetInitialized = false;
    throw e;
  }
}
