import article from "../../data/yandex-blog-articles/kak-rabotayet-reklamnoye-prodvizheniye-v-yandeks-biznese.json";
import ImportedYandexBusinessArticle from "../../components/blog/ImportedYandexBusinessArticle";
import type { ArticleEntry } from "../../lib/yandexBusinessBlogTypes";

const data = article as ArticleEntry;

export default function Page() {
  return (
    <ImportedYandexBusinessArticle
      slug="kak-rabotayet-reklamnoye-prodvizheniye-v-yandeks-biznese"
      title={data.title}
      description={data.description}
      bodyHtml={data.bodyHtml}
    />
  );
}
