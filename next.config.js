// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Убедитесь, что здесь НЕТ 'plugins: []' или подобного
};

module.exports = nextConfig;