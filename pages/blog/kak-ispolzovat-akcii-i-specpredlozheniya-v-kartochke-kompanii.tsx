import article from "../../data/yandex-blog-articles/kak-ispolzovat-akcii-i-specpredlozheniya-v-kartochke-kompanii.json";
import ImportedYandexBusinessArticle from "../../components/blog/ImportedYandexBusinessArticle";
import type { ArticleEntry } from "../../lib/yandexBusinessBlogTypes";

const data = article as ArticleEntry;

export default function Page() {
  return (
    <ImportedYandexBusinessArticle
      slug="kak-ispolzovat-akcii-i-specpredlozheniya-v-kartochke-kompanii"
      title={data.title}
      description={data.description}
      bodyHtml={data.bodyHtml}
    />
  );
}
