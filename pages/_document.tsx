// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ru"> {/* Устанавливаем язык */ }
      <Head>
        <meta name="theme-color" content="#ffffff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000000" />
        {/* Подключаем шрифты Inter через preconnect и stylesheet */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />

        <link rel="manifest" href="/manifest.json" />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Ponizov Marketing"
    }),
  }}
/>
        {/* Дополнительные глобальные мета-теги, если необходимо */}
        {/* <meta name="theme-color" content="#000000" /> */}
          {/* Фавиконки для браузеров */}
  <link rel="icon" href="/favicon.ico" />
  <link rel="icon" type="image/x-icon" href="/favicon-32x32.ico" />
  {/* при желании можешь добавить ещё размеры .ico */}

  {/* Иконка для iOS (желательно 180×180 PNG) */}
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}