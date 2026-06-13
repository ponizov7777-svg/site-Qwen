import article from "../../data/yandex-blog-articles/kak-rabotat-s-foto-i-video-v-yandeks-biznese-dlya-povysheniya-konversii.json";
import ImportedYandexBusinessArticle from "../../components/blog/ImportedYandexBusinessArticle";
import type { ArticleEntry } from "../../lib/yandexBusinessBlogTypes";

const data = article as ArticleEntry;

export default function Page() {
  return (
    <ImportedYandexBusinessArticle
      slug="kak-rabotat-s-foto-i-video-v-yandeks-biznese-dlya-povysheniya-konversii"
      title={data.title}
      description={data.description}
      bodyHtml={data.bodyHtml}
    />
  );
}
