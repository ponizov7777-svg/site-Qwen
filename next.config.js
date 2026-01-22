// next.config.js
/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
  analyzerPort: 8889,
});

// Безопасные источники для статических файлов Next.js
const SELF = "'self'";
const UNSAFE_INLINE = "'unsafe-inline'";
const UNSAFE_EVAL = "'unsafe-eval'"; // Только если абсолютно необходимо
const DATA = "data:";
const HTTPS = "https:";

// Разрешенные домены для внешних ресурсов
const YANDEX = "https://mc.yandex.ru";
const GOOGLE_ANALYTICS = "https://www.google-analytics.com";
const GOOGLE_TAG_MANAGER = "https://www.googletagmanager.com";
const GOOGLE = "https://www.google.com";

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src ${SELF};
              script-src ${SELF} ${UNSAFE_INLINE} ${YANDEX} ${GOOGLE_TAG_MANAGER} ${GOOGLE_ANALYTICS} 'sha256-4Su6mBWzEIFnH4pAGMOuaeZfYt34+hcG/4lhy6ZvPvI=';
              style-src ${SELF} ${UNSAFE_INLINE} ${DATA};
              img-src ${SELF} ${DATA} ${HTTPS} ${YANDEX} ${GOOGLE_ANALYTICS};
              font-src ${SELF} ${DATA} ${HTTPS};
              connect-src ${SELF} ${YANDEX} ${GOOGLE_ANALYTICS} https://api.vercel.com;
              frame-src ${SELF} ${GOOGLE};
              object-src 'none';
              base-uri ${SELF};
              form-action ${SELF};
              frame-ancestors 'none';
              upgrade-insecure-requests;
            `.replace(/\s{2,}/g, ' ').trim()
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ],
      },
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);