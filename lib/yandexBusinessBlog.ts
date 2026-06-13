import articleMeta from "@/data/yandex-business-blog-meta.json";

type MetaEntry = { title: string; description: string };

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
]);

function categoryForSlug(slug: string): "Геомаркетинг" | "Реклама" {
  return advertisingArticleSlugs.has(slug) ? "Реклама" : "Геомаркетинг";
}

export function getYandexBusinessBlogListItems() {
  return YANDEX_BUSINESS_BLOG_SLUGS.map((slug, index) => {
    const a = meta[slug];
    return {
      id: 200 + index,
      title: a.title,
      excerpt: a.description,
      date: "16.04.2026",
      href: `/blog/${slug}`,
      category: categoryForSlug(slug),
    };
  });
}
