import article from "../../data/yandex-blog-articles/kakie-klyuchevye-metriki-vazhny-dlya-ocenki-effektivnosti-prodvizheniya.json";
import ImportedYandexBusinessArticle from "../../components/blog/ImportedYandexBusinessArticle";
import type { ArticleEntry } from "../../lib/yandexBusinessBlogTypes";

const data = article as ArticleEntry;

export default function Page() {
  return (
    <ImportedYandexBusinessArticle
      slug="kakie-klyuchevye-metriki-vazhny-dlya-ocenki-effektivnosti-prodvizheniya"
      title={data.title}
      description={data.description}
      bodyHtml={data.bodyHtml}
    />
  );
}
