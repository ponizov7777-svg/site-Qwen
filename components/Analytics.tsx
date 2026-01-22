// components/Analytics.tsx
'use client';

import Script from 'next/script';

export default function Analytics() {
  if (process.env.NODE_ENV !== 'production') return null;

  return (
    <>
      <Script id="analytics" strategy="lazyOnload">
        {`
          // Объединенный код аналитики
          // Yandex Metrika и Google Analytics здесь
        `}
      </Script>
    </>
  );
}