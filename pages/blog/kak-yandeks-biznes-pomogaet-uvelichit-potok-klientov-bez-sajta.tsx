import article from "../../data/yandex-blog-articles/kak-yandeks-biznes-pomogaet-uvelichit-potok-klientov-bez-sajta.json";
import ImportedYandexBusinessArticle from "../../components/blog/ImportedYandexBusinessArticle";
import type { ArticleEntry } from "../../lib/yandexBusinessBlogTypes";

const data = article as ArticleEntry;

export default function Page() {
  return (
    <ImportedYandexBusinessArticle
      slug="kak-yandeks-biznes-pomogaet-uvelichit-potok-klientov-bez-sajta"
      title={data.title}
      description={data.description}
      bodyHtml={data.bodyHtml}
    />
  );
}
