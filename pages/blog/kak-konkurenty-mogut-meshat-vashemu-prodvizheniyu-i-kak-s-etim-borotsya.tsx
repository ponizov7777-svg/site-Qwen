import article from "../../data/yandex-blog-articles/kak-konkurenty-mogut-meshat-vashemu-prodvizheniyu-i-kak-s-etim-borotsya.json";
import ImportedYandexBusinessArticle from "../../components/blog/ImportedYandexBusinessArticle";
import type { ArticleEntry } from "../../lib/yandexBusinessBlogTypes";

const data = article as ArticleEntry;

export default function Page() {
  return (
    <ImportedYandexBusinessArticle
      slug="kak-konkurenty-mogut-meshat-vashemu-prodvizheniyu-i-kak-s-etim-borotsya"
      title={data.title}
      description={data.description}
      bodyHtml={data.bodyHtml}
    />
  );
}
