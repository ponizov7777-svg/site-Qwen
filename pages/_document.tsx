// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ru" data-theme="light">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://ponizov-marketing.ru/#organization",
              "name": "Понизов Маркетинг",
              "url": "https://ponizov-marketing.ru/",
              "logo": "https://ponizov-marketing.ru/images/logo.png"
            })
          }}
        />
        <link rel="icon" type="image/svg+xml" href="/favicons/favicon-120.svg" sizes="120x120" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon-180x180.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* VK Open API для виджета «Сообщения сообщества» */}
        <script src="https://vk.com/js/api/openapi.js?169" type="text/javascript" />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* Яндекс Метрика */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                try {
                  // Если пользователь явно ОТКЛОНИЛ cookies, счётчик не загружаем
                  if (e.defaultView && e.defaultView.localStorage && e.defaultView.localStorage.getItem('cookieConsent') === 'declined') {
                    return;
                  }
                } catch (err) {}
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");
              ym(106276548,'init',{
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
              });
            `
          }}
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6VWKTVJT2T" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6VWKTVJT2T');
            `
          }}
        />
      </body>
    </Html>
  );
}