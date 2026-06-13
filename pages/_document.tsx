// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';
import { getOrganizationJsonLd, getSiteNavigationJsonLd } from '../lib/structured-data';

export default function Document() {
  return (
    <Html lang="ru" data-theme="light">
      <Head>
        <meta
          name="google-site-verification"
          content="Km3mWDQgfxzeW2iVSa45k8etN7yQcsfoE6stZoHSaeM"
        />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getSiteNavigationJsonLd()),
          }}
        />
        <link rel="icon" type="image/svg+xml" href="/favicons/favicon-120.svg" sizes="120x120" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon-180x180.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}