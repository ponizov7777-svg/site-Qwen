import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const blogHtmlRoot = path.join(root, "blog-v-HTML");

/** Убирает служебные SEO-пометки: «(59 символов)», «(158 символа)» и т.п. */
function stripSeoLengthTails(text) {
  if (!text || typeof text !== "string") return text;
  return text
    .replace(/\s*\(\d+\s+символ(?:ов|а)?\)/gi, "")
    .trim();
}

function extractArticleFromHtml(full, slugFallback) {
  const titleMatch = full.match(/<title>([\s\S]*?)<\/title>/);
  const descMatch = full.match(
    /<meta name="description" content="([\s\S]*?)"\s*\/?>/
  );
  const title = stripSeoLengthTails(
    titleMatch ? titleMatch[1].trim() : slugFallback
  );
  const description = stripSeoLengthTails(
    descMatch ? descMatch[1].trim() : ""
  );
  const marker = '<div style="display: block;">';
  const start = full.indexOf(marker);
  const end = full.lastIndexOf("</div>");
  const bodyHtml =
    start >= 0 && end > start
      ? full.slice(start + marker.length, end).trim()
      : "";
  return { title, description, bodyHtml };
}

const data = {};

// Корень blog-v-HTML — только *.html в этой папке (без подпапок)
for (const f of fs.readdirSync(blogHtmlRoot)) {
  if (!f.endsWith(".html")) continue;
  const fp = path.join(blogHtmlRoot, f);
  if (!fs.statSync(fp).isFile()) continue;
  const slug = f.replace(/\.html$/, "");
  const full = fs.readFileSync(fp, "utf8");
  data[slug] = extractArticleFromHtml(full, slug);
}

// Дополнительный пакет статей: blog-v-HTML/s-instagram и при желании ./s-instagram в корне
const instagramDirs = [
  path.join(blogHtmlRoot, "s-instagram"),
  path.join(root, "s-instagram"),
];

for (const instagramDir of instagramDirs) {
  if (!fs.existsSync(instagramDir) || !fs.statSync(instagramDir).isDirectory()) {
    continue;
  }
  for (const f of fs.readdirSync(instagramDir)) {
    if (!f.endsWith(".html")) continue;
    const fp = path.join(instagramDir, f);
    if (!fs.statSync(fp).isFile()) continue;
    const slug = f.replace(/\.html$/, "");
    const full = fs.readFileSync(fp, "utf8");
    data[slug] = extractArticleFromHtml(full, slug);
  }
}

const outDir = path.join(root, "data");
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, "yandex-business-blog-articles.json");
fs.writeFileSync(outPath, JSON.stringify(data));

const metaOnly = {};
for (const slug of Object.keys(data)) {
  metaOnly[slug] = {
    title: data[slug].title,
    description: data[slug].description,
  };
}
const metaPath = path.join(outDir, "yandex-business-blog-meta.json");
fs.writeFileSync(metaPath, JSON.stringify(metaOnly));

// Отдельный JSON и страница Next на каждый slug
const perArticleDir = path.join(outDir, "yandex-blog-articles");
const blogPagesDir = path.join(root, "pages", "blog");
fs.mkdirSync(perArticleDir, { recursive: true });

const pageTemplate = (slug) => `import article from "../../data/yandex-blog-articles/${slug}.json";
import ImportedYandexBusinessArticle from "../../components/blog/ImportedYandexBusinessArticle";
import type { ArticleEntry } from "../../lib/yandexBusinessBlogTypes";

const data = article as ArticleEntry;

export default function Page() {
  return (
    <ImportedYandexBusinessArticle
      slug="${slug}"
      title={data.title}
      description={data.description}
      bodyHtml={data.bodyHtml}
    />
  );
}
`;

for (const slug of Object.keys(data)) {
  const singlePath = path.join(perArticleDir, `${slug}.json`);
  fs.writeFileSync(singlePath, JSON.stringify(data[slug]));
  const pagePath = path.join(blogPagesDir, `${slug}.tsx`);
  fs.writeFileSync(pagePath, pageTemplate(slug));
}

console.log(
  "Written",
  outPath,
  "slugs:",
  Object.keys(data).length,
  "full size:",
  fs.statSync(outPath).size,
  "meta size:",
  fs.statSync(metaPath).size,
  "per-article:",
  perArticleDir
);
