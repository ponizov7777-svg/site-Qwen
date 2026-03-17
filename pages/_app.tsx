// pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import Cookie from '../components/Cookie';

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

      {/* Виджет «Сообщения сообщества» ВКонтакте — ID сообщества 225365151 */}
      <div id="vk_community_messages" />
      <Script
        id="vk-community-messages-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              function log() {
                if (process.env.NODE_ENV !== 'production') {
                  // eslint-disable-next-line no-console
                  console.log.apply(console, arguments);
                }
              }

              function safeReachGoal(goalId) {
                try {
                  if (typeof window.ym === 'function') {
                    window.ym(106276548, 'reachGoal', goalId);
                    log('[VK widget] reachGoal', goalId);
                  } else {
                    log('[VK widget] ym is not a function yet, skip goal', goalId);
                  }
                } catch (e) {
                  log('[VK widget] reachGoal error', goalId, e);
                }
              }

              function run() {
                if (typeof VK === 'undefined' || !VK.Widgets) {
                  log('[VK widget] VK.Widgets is not ready yet, retry...');
                  setTimeout(run, 200);
                  return;
                }
                setTimeout(function() {
                  try {
                    log('[VK widget] init CommunityMessages');
                    VK.Widgets.CommunityMessages('vk_community_messages', 225365151);

                    // Отслеживание действий с виджетом ВК через Яндекс.Метрику
                    try {
                      if (typeof VK.Observer !== 'undefined' && typeof window.ym === 'function') {
                        log('[VK widget] init VK.Observer subscriptions');
                        // Открытие/разворачивание виджета — микрособытие
                        VK.Observer.subscribe('widgets.communityMessages.opened', function() {
                          log('[VK widget] event: widgets.communityMessages.opened');
                          safeReachGoal('micro_vk_widget_open');
                        });
                        // Отправка нового сообщения
                        VK.Observer.subscribe('widgets.communityMessages.newItem', function() {
                          log('[VK widget] event: widgets.communityMessages.newItem');
                          safeReachGoal('macro_vk_widget_message');
                        });
                      } else {
                        log('[VK widget] VK.Observer or ym is not available, skip subscriptions');
                      }
                    } catch (e) {
                      log('VK widget observer init error:', e);
                    }
                  } catch (e) {
                    log('VK widget init error:', e);
                  }
                }, 1500);
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