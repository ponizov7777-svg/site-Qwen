import article from "../../data/yandex-blog-articles/reyting-i-otzyvy-kak-oni-vliyayut-na-ranzhirovaniye-v-yandeks-kartakh.json";
import ImportedYandexBusinessArticle from "../../components/blog/ImportedYandexBusinessArticle";
import type { ArticleEntry } from "../../lib/yandexBusinessBlogTypes";

const data = article as ArticleEntry;

export default function Page() {
  return (
    <ImportedYandexBusinessArticle
      slug="reyting-i-otzyvy-kak-oni-vliyayut-na-ranzhirovaniye-v-yandeks-kartakh"
      title={data.title}
      description={data.description}
      bodyHtml={data.bodyHtml}
    />
  );
}
