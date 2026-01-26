// next.config.js
const csp =
  "default-src 'self'; " +
  "script-src 'self' 'unsafe-inline' https://mc.yandex.ru https://www.googletagmanager.com https://www.google-analytics.com; " +
  "style-src 'self' 'unsafe-inline' data: https://fonts.googleapis.com; " +
  "img-src 'self' data: https: https://mc.yandex.ru https://www.google-analytics.com; " +
  "font-src 'self' data: https: https://fonts.gstatic.com; " +
  "connect-src 'self' https://mc.yandex.ru https://www.google-analytics.com https://api.vercel.com; " +
  "frame-src 'self' https://www.google.com; " +
  "object-src 'none'; " +
  "base-uri 'self'; " +
  "form-action 'self'; " +
  "frame-ancestors 'none'; " +
  "upgrade-insecure-requests";

module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};
