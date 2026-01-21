// pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app'; // <-- Добавлен импорт типов
import Header from '../components/Header';
import Footer from '../components/Footer';
import Script from 'next/script'; // <-- Импорт Script для аналитики

function MyApp({ Component, pageProps }: AppProps) { // <-- Аннотация типом AppProps
  return (
    <>
      <Header />

      {/* Yandex Metrika */}
      {/* Используем next/script для загрузки скрипта после интерактивности */}
      <Script
        strategy="afterInteractive"
        src="https://mc.yandex.ru/metrika/tag.js"
      />
      <Script
        id="ym-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {
              if (document.scripts[j].src === r) { return; }
            }
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");

            ym(106276548, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `,
        }}
      />

      {/* Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-6VWKTVJT2T"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6VWKTVJT2T');
          `,
        }}
      />

      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;