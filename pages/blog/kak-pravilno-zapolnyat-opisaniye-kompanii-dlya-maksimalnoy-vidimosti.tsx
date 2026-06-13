import article from "../../data/yandex-blog-articles/kak-pravilno-zapolnyat-opisaniye-kompanii-dlya-maksimalnoy-vidimosti.json";
import ImportedYandexBusinessArticle from "../../components/blog/ImportedYandexBusinessArticle";
import type { ArticleEntry } from "../../lib/yandexBusinessBlogTypes";

const data = article as ArticleEntry;

export default function Page() {
  return (
    <ImportedYandexBusinessArticle
      slug="kak-pravilno-zapolnyat-opisaniye-kompanii-dlya-maksimalnoy-vidimosti"
      title={data.title}
      description={data.description}
      bodyHtml={data.bodyHtml}
    />
  );
}
