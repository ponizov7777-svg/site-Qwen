// pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import Cookie from '../components/Cookie';
import VkChatButton from '../components/VkChatButton';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* ✅ FAVICON ПО РЕКОМЕНДАЦИИ ЯНДЕКСА — ВСТАВИТЬ СЮДА */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Основной формат для Яндекса и современных браузеров */}
        <link rel="icon" type="image/svg+xml" href="/favicons/Favicon.svg" />
        
        {/* Фолбэки для старых браузеров */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Для iOS */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        
        {/* Manifest для PWA (рекомендуется) */}
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <Header />
      
      <main className="pt-16">
        <Component {...pageProps} />
      </main>

      <Footer />
      <Cookie />
      <MobileMenu />
      <VkChatButton />

      {/* Виджет «Сообщения сообщества» ВКонтакте — ID сообщества 225365151 */}
      <div id="vk_community_messages" />
      <Script
        id="vk-community-messages-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              function run() {
                if (typeof VK === 'undefined' || !VK.Widgets) {
                  setTimeout(run, 200);
                  return;
                }
                window.__initVkChatWidget = function initVkChatWidget() {
                  try {
                    if (window.__vkChatWidgetInitialized) {
                      return;
                    }
                    window.__vkChatWidgetInitialized = true;
                    VK.Widgets.CommunityMessages('vk_community_messages', 225365151);
                  } catch (e) {
                    // eslint-disable-next-line no-console
                    console.warn('VK widget init error:', e);
                  }
                };
              }
              if (document.readyState === 'complete') run();
              else window.addEventListener('load', run);
            })();
          `
        }}
      />

      {/* Скрипты */}
      <Script
        id="callibri-script"
        src="//cdn.callibri.ru/callibri.js"
        strategy="afterInteractive"
        defer
      />
      <Script
        id="callibri-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // window.CallibriSettings = {
            //   widgetId: 'ВАШ_ID_ВИДЖЕТА',
            // };
          `
        }}
      />
    </>
  );
}

export default MyApp;