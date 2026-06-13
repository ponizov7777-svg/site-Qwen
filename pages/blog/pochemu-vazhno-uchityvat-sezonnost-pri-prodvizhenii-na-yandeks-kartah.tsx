import article from "../../data/yandex-blog-articles/pochemu-vazhno-uchityvat-sezonnost-pri-prodvizhenii-na-yandeks-kartah.json";
import ImportedYandexBusinessArticle from "../../components/blog/ImportedYandexBusinessArticle";
import type { ArticleEntry } from "../../lib/yandexBusinessBlogTypes";

const data = article as ArticleEntry;

export default function Page() {
  return (
    <ImportedYandexBusinessArticle
      slug="pochemu-vazhno-uchityvat-sezonnost-pri-prodvizhenii-na-yandeks-kartah"
      title={data.title}
      description={data.description}
      bodyHtml={data.bodyHtml}
    />
  );
}
