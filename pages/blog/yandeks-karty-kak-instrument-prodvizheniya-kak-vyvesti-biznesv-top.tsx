import article from "../../data/yandex-blog-articles/yandeks-karty-kak-instrument-prodvizheniya-kak-vyvesti-biznesv-top.json";
import ImportedYandexBusinessArticle from "../../components/blog/ImportedYandexBusinessArticle";
import type { ArticleEntry } from "../../lib/yandexBusinessBlogTypes";

const data = article as ArticleEntry;

export default function Page() {
  return (
    <ImportedYandexBusinessArticle
      slug="yandeks-karty-kak-instrument-prodvizheniya-kak-vyvesti-biznesv-top"
      title={data.title}
      description={data.description}
      bodyHtml={data.bodyHtml}
    />
  );
}
