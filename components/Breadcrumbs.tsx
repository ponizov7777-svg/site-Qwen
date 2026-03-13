// components/Breadcrumbs.tsx
import Link from 'next/link';

export default function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  return (
    <nav className="mb-6" aria-label="Хлебные крошки">
      <ol className="flex items-center text-sm text-gray-600">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && <span className="mx-2 text-gray-400">/</span>}
            
            {index === items.length - 1 ? (
              <span className="text-[#1A3A2E] font-medium">
                {item.label}
              </span>
            ) : (
              <Link 
                href={item.href} 
                className="hover:text-[#E65C00] transition-colors duration-200"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}