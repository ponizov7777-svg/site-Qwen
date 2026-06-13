'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

const GA_MEASUREMENT_ID = 'G-6VWKTVJT2T';
const YM_COUNTER_ID = 106276548;
const ANALYTICS_FALLBACK_DELAY_MS = 12000;

function analyticsAllowed(): boolean {
  try {
    return typeof window !== 'undefined' && localStorage.getItem('cookieConsent') !== 'declined';
  } catch {
    return true;
  }
}

/**
 * Подключает Метрику и GA после простоя / таймаута, чтобы не конкурировать с LCP
 * и снизить влияние сторонних скриптов на главный поток при первой отрисовке.
 */
export default function DeferredAnalytics() {
  const [mountScripts, setMountScripts] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let scheduled = false;
    let idleCallbackId: number | null = null;
    let timeoutId: ReturnType<typeof globalThis.setTimeout> | null = null;

    const schedule = () => {
      if (scheduled) return;
      scheduled = true;

      if (!analyticsAllowed()) return;

      if ('requestIdleCallback' in window) {
        idleCallbackId = window.requestIdleCallback(
          () => {
            if (analyticsAllowed()) {
              setMountScripts(true);
            }
          },
          { timeout: 1500 },
        );
        return;
      }

      if (!analyticsAllowed()) return;
      setMountScripts(true);
    };

    if (!analyticsAllowed()) return;

    const interactionEvents = ['click', 'keydown', 'scroll', 'touchstart'] as const;

    interactionEvents.forEach((eventName) => {
      window.addEventListener(eventName, schedule, { passive: true, once: true });
    });

    timeoutId = globalThis.setTimeout(schedule, ANALYTICS_FALLBACK_DELAY_MS);

    return () => {
      interactionEvents.forEach((eventName) => {
        window.removeEventListener(eventName, schedule);
      });

      if (idleCallbackId !== null) {
        window.cancelIdleCallback(idleCallbackId);
      }

      if (timeoutId !== null) {
        globalThis.clearTimeout(timeoutId);
      }
    };
  }, []);

  useEffect(() => {
    if (mountScripts || analyticsAllowed()) {
      return;
    }

    setMountScripts(false);
  }, [mountScripts]);

  if (!mountScripts || !analyticsAllowed()) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="lazyOnload"
      />
      <Script
        id="ga-config"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />
      <Script
        id="yandex-metrika"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");
            ym(${YM_COUNTER_ID},"init",{
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `,
        }}
      />
    </>
  );
}
