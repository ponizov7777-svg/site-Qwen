import articleMeta from "@/data/yandex-business-blog-meta.json";

type MetaEntry = { title: string; description: string };

export type BlogCategory =
  | "Геомаркетинг"
  | "Реклама"
  | "Веб-аналитика"
  | "Аналитика"
  | "Beauty";

const meta = articleMeta as Record<string, MetaEntry>;

export const YANDEX_BUSINESS_BLOG_SLUGS = Object.keys(meta).sort();

const advertisingArticleSlugs = new Set([
  "kak-avtomatizirovat-rabotu-s-otzyvami-i-reytingom",
  "kak-biznesu-zaschititsya-ot-feykovykh-otzyvov-v-yandekse",
  "kak-konkurenty-mogut-meshat-vashemu-prodvizheniyu-i-kak-s-etim-borotsya",
  "kak-motivirovat-kliyentov-ostavlyat-polozhitelnyye-otzyvy",
  "kak-pravilno-sozdat-i-oformit-kartochku-kompanii-v-yandekse",
  "kak-rabotat-s-foto-i-video-v-yandeks-biznese-dlya-povysheniya-konversii",
  "kak-rabotayet-reklamnoye-prodvizheniye-v-yandeks-biznese",
  "kakie-klyuchevye-metriki-vazhny-dlya-ocenki-effektivnosti-prodvizheniya",
  "mozhno-li-udalyat-ili-ispravlyat-otzyvy-v-yandeks-kartakh",
  "oshibki-pri-prodvizhenii-na-yandeks-kartah-kotorye-meshayut-biznesu",
  "context-offline",
]);

/** Даты и категории для статей, которые раньше были «ручными» */
const slugListMeta: Record<string, { date: string; category: BlogCategory }> = {
  "yandex-karty": { date: "25.12.2025", category: "Геомаркетинг" },
  "context-offline": { date: "23.01.2026", category: "Реклама" },
  "analiz-lokalnyh-konkurentov": { date: "02.02.2026", category: "Веб-аналитика" },
  "oshibki-maps": { date: "10.02.2026", category: "Геомаркетинг" },
  "geomarketing-roi": { date: "14.02.2026", category: "Аналитика" },
  "beauty-seasons": { date: "10.01.2026", category: "Beauty" },
};

function categoryForImportedSlug(slug: string): "Геомаркетинг" | "Реклама" {
  return advertisingArticleSlugs.has(slug) ? "Реклама" : "Геомаркетинг";
}

function listMetaForSlug(slug: string): { date: string; category: BlogCategory } {
  if (slugListMeta[slug]) {
    return slugListMeta[slug];
  }
  return {
    date: "16.04.2026",
    category: categoryForImportedSlug(slug),
  };
}

function parseRuDate(date: string): number {
  const [day, month, year] = date.split(".").map(Number);
  return new Date(year, month - 1, day).getTime();
}

export function getYandexBusinessBlogListItems() {
  return YANDEX_BUSINESS_BLOG_SLUGS.map((slug) => {
    const a = meta[slug];
    const { date, category } = listMetaForSlug(slug);
    return {
      slug,
      title: a.title,
      excerpt: a.description,
      date,
      href: `/blog/${slug}`,
      category,
    };
  })
    .sort((a, b) => parseRuDate(b.date) - parseRuDate(a.date))
    .map((item, index) => ({
      id: index + 1,
      title: item.title,
      excerpt: item.excerpt,
      date: item.date,
      href: item.href,
      category: item.category,
    }));
}
