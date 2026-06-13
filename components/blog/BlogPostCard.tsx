import Link from "next/link";

const glassCard =
  "glass-card backdrop-blur-xl bg-white/70 border-white/50 shadow-xl hover:shadow-black/10 p-8 rounded-2xl overflow-hidden";

const badgePrimary =
  "px-3 py-1 bg-[#F5C518]/40 text-[#1A3A2E] text-sm font-medium rounded-full backdrop-blur-sm border border-white/60";

export type BlogPostCardProps = {
  title: string;
  excerpt: string;
  href: string;
  date: string;
  category: string;
};

export default function BlogPostCard({
  title,
  excerpt,
  href,
  date,
  category,
}: BlogPostCardProps) {
  return (
    <article className={`${glassCard} flex flex-col h-full`}>
      <div className="flex-grow">
        <div className="flex items-center justify-between mb-4">
          <span className={badgePrimary}>{category}</span>
          <span className="text-sm text-gray-600 font-medium">{date}</span>
        </div>

        <h3 className="text-xl font-semibold mb-4 leading-tight m-0 p-0">
          <Link href={href} className="blog-card-title-link">
            {title}
          </Link>
        </h3>

        <p className="text-gray-700 mb-0 leading-relaxed line-clamp-3">{excerpt}</p>
      </div>
    </article>
  );
}
