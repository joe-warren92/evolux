import { useEffect } from "react";

interface ArticleMeta {
  publishedTime: string;
  modifiedTime?: string;
  author: string;
  section?: string;
  tags?: string[];
}

interface SEOProps {
  title: string;
  description: string;
  ogType?: "website" | "article";
  canonicalPath?: string;
  article?: ArticleMeta;
  jsonLd?: object;
}

const SITE_NAME = "Evolux Web Design";
const SITE_URL  = "https://evoluxwebdesign.co.uk";

function setMeta(nameOrProp: string, content: string, isProperty = false) {
  const attr = isProperty ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${nameOrProp}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, nameOrProp);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(path: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", `${SITE_URL}${path}`);
}

function setJsonLd(data: object) {
  let el = document.querySelector('script#page-schema') as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.setAttribute("type", "application/ld+json");
    el.setAttribute("id", "page-schema");
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function removeJsonLd() {
  document.querySelector('script#page-schema')?.remove();
}

export function useSEO({
  title,
  description,
  ogType = "website",
  canonicalPath,
  article,
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;

    document.title = fullTitle;

    setMeta("description", description);
    setMeta("og:title",       fullTitle,   true);
    setMeta("og:description", description, true);
    setMeta("og:type",        ogType,      true);
    setMeta("og:site_name",   SITE_NAME,   true);

    setMeta("twitter:card",        "summary_large_image");
    setMeta("twitter:title",       fullTitle);
    setMeta("twitter:description", description);

    if (article) {
      setMeta("article:published_time", article.publishedTime, true);
      if (article.modifiedTime) setMeta("article:modified_time", article.modifiedTime, true);
      setMeta("article:author",  article.author,  true);
      if (article.section) setMeta("article:section", article.section, true);
    }

    if (canonicalPath) setCanonical(canonicalPath);

    if (jsonLd) setJsonLd(jsonLd);

    return () => {
      document.title = SITE_NAME;
      removeJsonLd();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description]);
}

export { SITE_NAME, SITE_URL };
