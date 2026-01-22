// pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Script from 'next/script';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  // Мониторинг Web Vitals только в production
    const isProduction = process.env.NODE_ENV === 'production';
  
  return (
    <>
      <Header />
      
      {/* Yandex Metrika - оптимизированная загрузка */}
      {isProduction && (
        <>
          <Script 
            id="yandex-metrika" 
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                
                ym(106276548, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
                });
              `
            }}
          />
        </>
      )}
      
      {/* Google Analytics - оптимизированная загрузка */}
      {isProduction && (
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6VWKTVJT2T', {
                page_path: window.location.pathname,
                send_page_view: window.location.hostname !== 'localhost'
              });
            `
          }}
        />
      )}
      
      {/* Google Tag Manager - резервный метод */}
      {isProduction && (
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6VWKTVJT2T"
          strategy="afterInteractive"
        />
      )}
      
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;