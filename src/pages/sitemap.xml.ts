import type { APIRoute } from "astro";
import { INSIGHT_POSTS } from "../data/insights";
import { INDUSTRIES } from "../data/industries";
import { LOCATION_PAGES } from "../data/locations";
import { PROJECTS } from "../data/projects";
import { SERVICES } from "../data/services";

const SITE_URL = "https://evoluxwebdesign.co.uk";

interface SitemapEntry {
  path: string;
  lastModified?: string;
}

const staticEntries: SitemapEntry[] = [
  { path: "" },
  { path: "/about" },
  { path: "/contact" },
  { path: "/free-review" },
  { path: "/packages" },
  { path: "/services" },
  { path: "/projects" },
  { path: "/insights" },
  { path: "/industries" },
  { path: "/locations" }
];

const entries: SitemapEntry[] = [
  ...staticEntries,
  ...SERVICES.map(({ slug }) => ({ path: `/services/${slug}` })),
  ...PROJECTS.map(({ slug }) => ({ path: `/projects/${slug}` })),
  ...LOCATION_PAGES.map(({ slug }) => ({ path: `/locations/${slug}` })),
  ...INDUSTRIES.map(({ slug }) => ({ path: `/industries/${slug}` })),
  ...INSIGHT_POSTS.map(({ slug, updatedAt, publishedAt }) => ({
    path: `/insights/${slug}`,
    lastModified: updatedAt ?? publishedAt
  }))
];

const escapeXml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const getAbsoluteUrl = (path: string) => {
  if (!path) return `${SITE_URL}/`;
  return `${SITE_URL}${path.endsWith("/") ? path : `${path}/`}`;
};

export const GET: APIRoute = () => {
  const urls = entries
    .map(({ path, lastModified }) => {
      const lastModifiedElement = lastModified ? `<lastmod>${escapeXml(lastModified)}</lastmod>` : "";
      return `<url><loc>${escapeXml(getAbsoluteUrl(path))}</loc>${lastModifiedElement}</url>`;
    })
    .join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8"
      }
    }
  );
};
