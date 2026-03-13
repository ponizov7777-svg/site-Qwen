// next.config.js
const prodCsp = (
  "default-src 'self';" +
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' " +
    "https://mc.yandex.ru " +
    "https://metrika.yandex.ru " +
    "https://yastatic.net " +
    "https://www.googletagmanager.com " +
    "https://www.google-analytics.com " +
    "https://googleads.g.doubleclick.net " +
    "https://*.yandex.tld " +
    "https://*.yandex.net " +
    "https://webvisor.com " +
    "https://cdn.callibri.ru " +
    "https://module.callibri.ru " +
    "https://vk.com; " +                // виджет «Сообщения сообщества» ВК
  "script-src-attr 'self' 'unsafe-inline';" +
  "script-src-elem 'self' 'unsafe-inline' " +
    "https://mc.yandex.ru " +
    "https://metrika.yandex.ru " +
    "https://yastatic.net " +
    "https://www.googletagmanager.com " +
    "https://www.google-analytics.com " +
    "https://*.yandex.tld " +
    "https://*.yandex.net " +
    "https://webvisor.com " +
    "https://cdn.callibri.ru " +
    "https://module.callibri.ru " +
    "https://vk.com; " +                // виджет «Сообщения сообщества» ВК
  "style-src 'self' 'unsafe-inline' " +
    "https://yastatic.net " +
    "https://fonts.googleapis.com " +
    "https://*.yandex.tld " +
    "https://*.yandex.net " +
    "https://webvisor.com; " +
  "img-src 'self' data: https: " +
    "https://mc.yandex.ru " +
    "https://metrika.yandex.ru " +
    "https://yastatic.net " +
    "https://www.google-analytics.com " +
    "https://i.ytimg.com " +
    "https://*.yandex.tld " +
    "https://*.yandex.net " +
    "https://webvisor.com " +
    "https://cdn.callibri.ru " +
    "https://module.callibri.ru; " +    // ✅ НА ВСЯКИЙ СЛУЧАЙ
  "font-src 'self' data: https: " +
    "https://fonts.gstatic.com " +
    "https://*.yandex.tld " +
    "https://*.yandex.net " +
    "https://webvisor.com; " +
  "connect-src 'self' " +
    "https://mc.yandex.ru " +
    "https://metrika.yandex.ru " +
    "wss://mc.yandex.ru " +
    "https://www.google-analytics.com " +
    "https://*.google-analytics.com " +
    "https://api.vercel.com " +
    "https://stats.g.doubleclick.net " +
    "https://*.yandex.tld " +
    "https://*.yandex.net " +
    "https://webvisor.com " +
    "https://cdn.callibri.ru " +
    "https://module.callibri.ru " +
    "https://vk.com " +
    "https://*.vk.com " +
    "https://stats.vk-portal.net " +
    "https://privacy-cs.mail.ru " +
    "https://*.mail.ru; " +             // виджет ВК — статистика и Mail.ru
  "child-src blob: " +
    "https://mc.yandex.ru " +
    "https://metrika.yandex.ru " +
    "https://*.yandex.tld " +
    "https://*.yandex.net " +
    "https://webvisor.com; " +
  "frame-src blob: " +
    "https://mc.yandex.ru " +
    "https://metrika.yandex.ru " +
    "https://www.google.com " +
    "https://*.yandex.tld " +
    "https://*.yandex.net " +
    "https://webvisor.com " +
    "https://module.callibri.ru " +
    "https://vk.com " +
    "https://*.vk.com; " +              // виджет ВК — iframe
  "object-src 'none';" +
  "base-uri 'self';" +
  "form-action 'self';" +
  // Разрешаем встраивание страниц в iframe для WebVisor/Метрики
  "frame-ancestors 'self' https://metrika.yandex.ru https://*.metrika.yandex.ru https://webvisor.com https://*.webvisor.com https://*.yandex.ru;" +
  "upgrade-insecure-requests"
).replace(/\s+/g, ' ').trim();

module.exports = {
  async headers() {
    if (process.env.NODE_ENV === 'production') {
      return [{
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: prodCsp },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      }];
    }
    return [];
  },
};