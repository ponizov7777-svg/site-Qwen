// pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import Cookie from '../components/Cookie';
import VkChatButton from '../components/VkChatButton';
import DeferredAnalytics from '../components/DeferredAnalytics';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* ✅ FAVICON ПО РЕКОМЕНДАЦИИ ЯНДЕКСА — ВСТАВИТЬ СЮДА */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* SVG 120×120 — для Вебмастера и совместимости с рекомендациями по favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicons/favicon-120.svg" sizes="120x120" />
        {/* Дополнительный векторный favicon произвольного масштаба */}
        <link rel="icon" type="image/svg+xml" href="/favicons/Favicon.svg" sizes="any" />
        
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

      <DeferredAnalytics />

      {/* Виджет «Сообщения сообщества» ВКонтакте — ID сообщества 225365151 */}
      <div id="vk_community_messages" />
    </>
  );
}

export default MyApp;