import { mkdir, readFile, writeFile } from "node:fs/promises";
import { basename, extname } from "node:path";

const SITE = "https://evoluxwebdesign.co.uk";
const API_URL = `${SITE}/wp-json/wp/v2/article?per_page=100&_embed=1`;
const DATA_FILE = "src/data/insights.ts";
const ASSET_DIR = "public/assets/articles";
const ASSET_PUBLIC_PATH = "/assets/articles";
const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36";

const fetchOptions = { headers: { "User-Agent": USER_AGENT } };

function decodeHtml(value = "") {
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)))
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function stripTags(value = "") {
  return decodeHtml(
    value
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<\/(p|div|h[1-6]|li)>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
  );
}

function getMetaDescription(html, fallback) {
  const match = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
  return decodeHtml(match?.[1] ?? fallback ?? "");
}

function getOgImage(html) {
  const match = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i);
  return decodeHtml(match?.[1] ?? "");
}

function slugFromUrl(url) {
  return new URL(url).pathname.split("/").filter(Boolean).pop();
}

function uniqueBy(values) {
  return Array.from(new Set(values.filter(Boolean)));
}

function inferCategory(post) {
  const source = `${post.title.rendered} ${post.slug}`.toLowerCase();
  if (source.includes("backup") || source.includes("secure") || source.includes("maintenance")) return "Website Maintenance";
  if (source.includes("wordpress") || source.includes("bricks") || source.includes("plugin")) return "WordPress";
  if (source.includes("conversion") || source.includes("customers")) return "Conversion";
  if (source.includes("sunderland") || source.includes("north-east") || source.includes("near-me")) return "Local SEO";
  if (source.includes("brand")) return "Branding";
  if (source.includes("cost") || source.includes("cheap")) return "Business Case";
  return "Web Design";
}

function inferTags(post) {
  const words = post.slug.split("-").filter((word) => word.length > 2 && !["and", "the", "for", "your", "how"].includes(word));
  const tags = words.slice(0, 5);
  if (!tags.includes("web-design")) tags.unshift("web-design");
  return tags;
}

function estimateReadingTime(content) {
  const words = stripTags(content).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

function excerptFromContent(content) {
  const firstParagraph = content.match(/<p[^>]*>([\s\S]*?)<\/p>/i)?.[1] ?? stripTags(content);
  const text = stripTags(firstParagraph);
  return text.length > 180 ? `${text.slice(0, 177).trim()}...` : text;
}

function quoteFromContent(content, fallback) {
  const h2 = stripTags(content.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i)?.[1] ?? "");
  return h2 || fallback;
}

async function downloadImage(url, slug, index, cache) {
  if (!url || !url.startsWith("http")) return "";
  if (cache.has(url)) return cache.get(url);

  const cleanUrl = url.split("?")[0];
  const sourceName = basename(new URL(cleanUrl).pathname);
  const extension = extname(sourceName) || ".webp";
  const safeBase = sourceName
    .replace(extension, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 72);
  const filename = `${slug}-${String(index).padStart(2, "0")}-${safeBase}${extension}`;
  const localPath = `${ASSET_DIR}/${filename}`;
  const publicPath = `${ASSET_PUBLIC_PATH}/${filename}`;

  const response = await fetch(url, fetchOptions);
  if (!response.ok) throw new Error(`Image ${response.status}: ${url}`);

  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(localPath, buffer);
  cache.set(url, publicPath);
  return publicPath;
}

async function convertContent(content, slug, imageCache, imageCounter) {
  const blocks = [];
  const tokenRegex = /<(figure|h2|h3|p|ul|ol|blockquote)\b[^>]*>[\s\S]*?<\/\1>/gi;
  const matches = content.match(tokenRegex) ?? [];

  for (const token of matches) {
    const tag = token.match(/^<(\w+)/i)?.[1]?.toLowerCase();

    if (tag === "figure") {
      const img = token.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i);
      const alt = token.match(/<img[^>]+alt=["']([^"']*)["'][^>]*>/i);
      const caption = token.match(/<figcaption[^>]*>([\s\S]*?)<\/figcaption>/i);
      if (img?.[1]) {
        imageCounter.count += 1;
        blocks.push({
          type: "image",
          src: await downloadImage(decodeHtml(img[1]), slug, imageCounter.count, imageCache),
          alt: decodeHtml(alt?.[1] ?? ""),
          ...(caption?.[1] ? { caption: stripTags(caption[1]) } : {})
        });
      }
      continue;
    }

    if (tag === "h2" || tag === "h3") {
      const text = stripTags(token);
      if (text) blocks.push({ type: tag, text });
      continue;
    }

    if (tag === "p") {
      const text = stripTags(token);
      if (text) blocks.push({ type: "paragraph", text });
      continue;
    }

    if (tag === "ul" || tag === "ol") {
      const items = Array.from(token.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)).map((match) => stripTags(match[1])).filter(Boolean);
      if (items.length > 0) blocks.push({ type: tag === "ol" ? "numbered-list" : "list", items });
      continue;
    }

    if (tag === "blockquote") {
      const text = stripTags(token);
      if (text) blocks.push({ type: "quote", text });
    }
  }

  return blocks;
}

async function fetchHtml(url) {
  const response = await fetch(url, fetchOptions);
  if (!response.ok) throw new Error(`Page ${response.status}: ${url}`);
  return response.text();
}

function formatEntry(entry) {
  return JSON.stringify(entry, null, 2)
    .replace(/"([^"]+)":/g, "$1:")
    .replace(/\\u0026/g, "&");
}

async function main() {
  await mkdir(ASSET_DIR, { recursive: true });

  const dataSource = await readFile(DATA_FILE, "utf8");
  const existingSlugs = new Set(Array.from(dataSource.matchAll(/slug:\s*"([^"]+)"/g)).map((match) => match[1]));

  const response = await fetch(API_URL, fetchOptions);
  if (!response.ok) throw new Error(`API ${response.status}: ${API_URL}`);
  const posts = await response.json();
  const imageCache = new Map();
  const imported = [];
  const skipped = [];
  const failed = [];

  for (const post of posts) {
    if (existingSlugs.has(post.slug)) {
      skipped.push({ slug: post.slug, reason: "existing slug" });
      continue;
    }

    try {
      const html = await fetchHtml(post.link);
      const metaDescription = getMetaDescription(html, stripTags(post.excerpt?.rendered ?? ""));
      const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
      const heroSource = featuredMedia?.source_url ?? getOgImage(html);
      const imageCounter = { count: 0 };
      const heroImage = heroSource ? await downloadImage(heroSource, post.slug, imageCounter.count, imageCache) : "";
      const content = await convertContent(post.content.rendered, post.slug, imageCache, imageCounter);

      imported.push({
        slug: post.slug,
        title: stripTags(post.title.rendered),
        metaDescription,
        excerpt: excerptFromContent(post.content.rendered),
        coverQuote: quoteFromContent(post.content.rendered, stripTags(post.title.rendered)),
        category: inferCategory(post),
        tags: uniqueBy(inferTags(post)),
        publishedAt: post.date.split("T")[0],
        updatedAt: post.modified?.split("T")[0],
        readingTime: estimateReadingTime(post.content.rendered),
        sourceUrl: post.link,
        ...(heroImage ? { heroImage } : {}),
        content
      });
    } catch (error) {
      failed.push({ slug: post.slug, url: post.link, error: error.message });
    }
  }

  if (imported.length > 0) {
    const marker = dataSource.match(/\r?\n\];\r?\n\r?\nexport const ALL_CATEGORIES/);
    const insertAt = marker?.index ?? -1;
    if (insertAt === -1) throw new Error("Could not find INSIGHT_POSTS closing marker.");
    const prefix = dataSource.slice(0, insertAt);
    const suffix = dataSource.slice(insertAt);
    const entries = imported.map((entry) => `,\n  ${formatEntry(entry).replace(/\n/g, "\n  ")}`).join("");
    await writeFile(DATA_FILE, `${prefix}${entries}${suffix}`, "utf8");
  }

  console.log(JSON.stringify({ imported: imported.map((post) => post.slug), skipped, failed }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
