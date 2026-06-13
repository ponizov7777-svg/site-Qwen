import article from "../../data/yandex-blog-articles/pochemu-vazhno-regulyarno-obnovlyat-informatsiyu-v-kartochke-kompanii.json";
import ImportedYandexBusinessArticle from "../../components/blog/ImportedYandexBusinessArticle";
import type { ArticleEntry } from "../../lib/yandexBusinessBlogTypes";

const data = article as ArticleEntry;

export default function Page() {
  return (
    <ImportedYandexBusinessArticle
      slug="pochemu-vazhno-regulyarno-obnovlyat-informatsiyu-v-kartochke-kompanii"
      title={data.title}
      description={data.description}
      bodyHtml={data.bodyHtml}
    />
  );
}
