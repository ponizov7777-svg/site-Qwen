import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE = process.env.BASE_URL || 'https://ponizov-marketing.ru';
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
const sitemap = fs.readFileSync(sitemapPath, 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const extraPaths = [
  '/privacy-policy',
  '/partnerskaya-programma',
  '/yridicheskie/soglasye',
];

for (const p of extraPaths) {
  urls.push(`${BASE}${p}`);
}

async function check(url, follow = false) {
  const res = await fetch(url, {
    method: 'HEAD',
    redirect: follow ? 'follow' : 'manual',
  });
  return { status: res.status, location: res.headers.get('location') };
}

const variants = [];
for (const url of urls) {
  const u = new URL(url);
  const noSlash = u.pathname.endsWith('/') && u.pathname !== '/'
    ? `${u.origin}${u.pathname.replace(/\/$/, '')}`
    : url;
  const withSlash = noSlash === `${u.origin}/`
    ? noSlash
    : `${noSlash}/`;
  variants.push({ label: 'no-slash', url: noSlash });
  if (withSlash !== noSlash) variants.push({ label: 'with-slash', url: withSlash });
}

const failures = [];
const redirects = [];

for (const { label, url } of variants) {
  const result = await check(url);
  if (result.status >= 300 && result.status < 400) {
    redirects.push({ url, label, ...result });
  } else if (result.status !== 200) {
    failures.push({ url, label, ...result });
  }
}

console.log(`Checked ${variants.length} URL variants on ${BASE}`);
console.log(`200 OK: ${variants.length - failures.length - redirects.length}`);
if (redirects.length) {
  console.log(`\nRedirects (${redirects.length}):`);
  for (const r of redirects) console.log(`  ${r.status} ${r.label} ${r.url} -> ${r.location}`);
}
if (failures.length) {
  console.log(`\nNon-200 (${failures.length}):`);
  for (const f of failures) console.log(`  ${f.status} ${f.label} ${f.url}`);
}
if (!redirects.length && !failures.length) {
  console.log('\nAll pages return 200 without redirects.');
}
process.exit(redirects.length || failures.length ? 1 : 0);
