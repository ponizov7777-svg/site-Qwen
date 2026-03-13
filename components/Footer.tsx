// components/Footer.tsx
import Link from 'next/link';

// Стили кнопки: минималистичный вариант
const btnPrimary =
  "inline-flex items-center justify-center px-6 py-2.5 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-lg text-sm md:text-base border border-[#E0B800] hover:bg-[#F7D03A] hover:border-[#F0C000] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518]/60 focus-visible:ring-offset-2";

// Определяем ссылки прямо в этом файле
const navLinks = [
  { href: '/', label: 'Главная' },
  { href: '/uslugi', label: 'Услуги и цены' },
  { href: '/geomarketing', label: 'Геомаркетинг' },
  { href: '/cases', label: 'Кейсы' },
  { href: '/blog', label: 'Полезные статьи' },
  { href: '/consultations', label: 'Консультации' },
  { href: '/about', label: 'Обо мне' },
  { href: '/contacts', label: 'Контакты' }, 
];

const socialLinks = [
  {
    href: 'https://max.ru/u/f9LHodD0cOKv94u0uUQGsTH7c9Cibtp9qAEtmFpgYQ-QfGsVeYNyc7M34aU',
    label: 'Max',
  },
  {
    href: 'https://t.me/ponizovandrey',
    label: 'Telegram',
  },
  {
    href: 'https://vk.com/andrey_anatolyevich_marketing',
    label: 'VK',
  },
  {
    href: 'https://rutube.ru/channel/73592687/',
    label: 'RuTube',
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#E65C00]/20 bg-gradient-to-b from-[#FFF9E6] to-white mt-24">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-bold text-xl text-[#1A3A2E] mb-2">Понизов Маркетинг</p>
          <p className="text-[#1A3A2E]/70 text-sm max-w-md">
            Геомаркетинг и системное привлечение клиентов для офлайн-бизнеса: beauty, медицина, HoReCa и другие услуги.
          </p>
          <div className="mt-6">
            <a
              href="https://t.me/ponizovandrey"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 bg-[#F5C518] text-[#1A3A2E] font-semibold text-sm rounded-lg hover:bg-[#F7D03A] transition-colors shadow-sm"
            >
              Бесплатный аудит
            </a>
          </div>
        </div>

        <nav aria-label="Навигация в подвале">
          <h3 className="font-semibold text-[#1A3A2E] mb-4 text-sm uppercase tracking-wider">
            Разделы сайта
          </h3>
          <ul className="grid grid-cols-2 gap-y-3 text-[#1A3A2E]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm hover:text-[#E65C00] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-semibold text-[#1A3A2E] mb-4 text-sm uppercase tracking-wider">
            Связаться со мной
          </h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium text-[#1A3A2E]">Телефон</p>
              <p className="text-sm text-[#1A3A2E]/70">+7 (984) 195-52-27</p>
            </div>
            <div>
              <p className="text-sm font-medium text-[#1A3A2E]">Email</p>
              <p className="text-sm text-[#1A3A2E]/70">Ponizov_Andrey@mail.ru</p>
            </div>
            <div>
              <p className="text-sm font-medium text-[#1A3A2E] mb-2">Социальные сети</p>
              <ul className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="text-sm text-[#1A3A2E] hover:text-[#E65C00] transition-colors duration-200"
                      aria-label={`Перейти в ${link.label}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#E65C00]/20 py-6 px-4 text-center text-sm text-[#1A3A2E]/60 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Понизов Андрей Анатольевич ИНН 250361983170 Все права защищены. Не является публичной офертой</p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/yridicheskie/privacy-policy" className="hover:text-[#E65C00] transition-colors">
              Политика конфиденциальности
            </Link>
            <Link href="/sitemap.xml" className="hover:text-[#E65C00] transition-colors">
              Карта сайта
            </Link>
            {/* <Link href="/contacts" className="hover:text-[#E65C00] transition-colors">
              Контакты
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}