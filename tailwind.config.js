// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './**/*.tsx',           
    './**/*.jsx',           
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {spacing: {
      section: '5rem',     // вертикальные отступы секций
      card: '1.5rem',      // padding карточек
      stack: '0.75rem',
          // расстояние между элементами
    },
    borderRadius: {
      card: '1rem',
    },
    maxWidth: {
      content: '72rem',
    },},
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