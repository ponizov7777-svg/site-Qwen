// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Отключает базовые стили, уменьшает размер CSS
  },
  safelist: [
    // Добавьте здесь классы, которые используются динамически
    // Например, если вы используете градиенты:
    'bg-linear-to-b',
    'bg-linear-to-r',
    'from-blue-500',
    'to-purple-600',
    // Добавьте другие классы по необходимости
  ],
}