import article from "../../data/yandex-blog-articles/vliyanie-yandeks-kart-na-lokalnoe-seo-i-privlechenie-klientov.json";
import ImportedYandexBusinessArticle from "../../components/blog/ImportedYandexBusinessArticle";
import type { ArticleEntry } from "../../lib/yandexBusinessBlogTypes";

const data = article as ArticleEntry;

export default function Page() {
  return (
    <ImportedYandexBusinessArticle
      slug="vliyanie-yandeks-kart-na-lokalnoe-seo-i-privlechenie-klientov"
      title={data.title}
      description={data.description}
      bodyHtml={data.bodyHtml}
    />
  );
}
