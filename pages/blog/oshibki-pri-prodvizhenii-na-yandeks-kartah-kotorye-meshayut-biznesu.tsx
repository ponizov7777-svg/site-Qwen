import article from "../../data/yandex-blog-articles/oshibki-pri-prodvizhenii-na-yandeks-kartah-kotorye-meshayut-biznesu.json";
import ImportedYandexBusinessArticle from "../../components/blog/ImportedYandexBusinessArticle";
import type { ArticleEntry } from "../../lib/yandexBusinessBlogTypes";

const data = article as ArticleEntry;

export default function Page() {
  return (
    <ImportedYandexBusinessArticle
      slug="oshibki-pri-prodvizhenii-na-yandeks-kartah-kotorye-meshayut-biznesu"
      title={data.title}
      description={data.description}
      bodyHtml={data.bodyHtml}
    />
  );
}
