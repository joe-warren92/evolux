import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, Clock, Calendar, Tag, ExternalLink } from "lucide-react";
import { Link, useParams, Redirect } from "wouter";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { useSEO, SITE_URL } from "@/lib/seo";
import {
  getPostBySlug,
  getRelatedPosts,
  JOE_AUTHOR,
  type ContentBlock,
} from "@/data/insights";

/* ─── Content renderer ──────────────────────────────────────── */

function Block({ block, i }: { block: ContentBlock; i: number }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={i} className="type-body-lg text-foreground/60 leading-[1.85]">
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2 key={i} className="text-2xl md:text-[1.65rem] font-extrabold text-foreground tracking-tight pt-4">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="text-xl font-extrabold text-foreground tracking-tight pt-2">
          {block.text}
        </h3>
      );
    case "list":
      return (
        <ul key={i} className="flex flex-col gap-2.5">
          {block.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-[0.55rem]" />
              <span className="type-body-lg text-foreground/60 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "numbered-list":
      return (
        <ol key={i} className="flex flex-col gap-3">
          {block.items.map((item, j) => (
            <li key={j} className="flex items-start gap-4">
              <span className="text-accent font-extrabold text-sm shrink-0 min-w-[1.5rem] mt-0.5 tabular-nums">{j + 1}.</span>
              <span className="type-body-lg text-foreground/60 leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote key={i} className="border-l-[3px] border-accent pl-6 py-1">
          <p className="text-xl font-semibold text-foreground/70 italic leading-relaxed mb-2">{block.text}</p>
          {block.attribution && (
            <footer className="type-index text-foreground/35">— {block.attribution}</footer>
          )}
        </blockquote>
      );
    case "callout":
      return (
        <div key={i} className="bg-accent/[0.06] border border-accent/20 rounded-2xl px-7 py-6">
          {block.label && (
            <p className="type-label text-accent mb-2">{block.label}</p>
          )}
          <p className="type-body-lg text-foreground/70 leading-relaxed">{block.text}</p>
        </div>
      );
    default:
      return null;
  }
}

/* ─── Author bio card ───────────────────────────────────────── */

function AuthorCard() {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-6 p-7 border border-border rounded-2xl bg-white">
      <div className="w-14 h-14 rounded-full bg-foreground flex items-center justify-center shrink-0">
        <span className="text-xl font-extrabold text-white">{JOE_AUTHOR.initials}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-1">
          <p className="font-semibold text-foreground text-sm">{JOE_AUTHOR.name}</p>
          <span className="type-label text-foreground/30">·</span>
          <p className="type-label text-foreground/45">{JOE_AUTHOR.role}</p>
        </div>
        <p className="type-body text-foreground/50 leading-relaxed mb-4">{JOE_AUTHOR.bio}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {JOE_AUTHOR.expertise.map(tag => (
            <span key={tag} className="px-3 py-1 rounded-full border border-border type-label text-foreground/45 bg-background">
              {tag}
            </span>
          ))}
        </div>
        <Link
          href="/about"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/50 hover:text-accent transition-colors"
        >
          More about Joe <ExternalLink size={11} />
        </Link>
      </div>
    </div>
  );
}

/* ─── Main page ─────────────────────────────────────────────── */

export default function InsightPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug ?? "");
  const related = getRelatedPosts(slug ?? "");

  useSEO({
    title: post ? (post.metaTitle ?? post.title) : "Article Not Found",
    description: post?.metaDescription ?? "Read more on the Evolux Insights blog.",
    ogType: "article",
    canonicalPath: post ? `/insights/${post.slug}` : "/insights",
    article: post
      ? {
          publishedTime: post.publishedAt,
          modifiedTime: post.updatedAt,
          author: `${SITE_URL}/about`,
          section: post.category,
          tags: post.tags,
        }
      : undefined,
    jsonLd: post
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.metaDescription,
          url: `${SITE_URL}/insights/${post.slug}`,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt ?? post.publishedAt,
          author: {
            "@type": "Person",
            name: JOE_AUTHOR.name,
            jobTitle: JOE_AUTHOR.role,
            url: `${SITE_URL}/about`,
          },
          publisher: {
            "@type": "Organization",
            name: "Evolux Web Design",
            url: SITE_URL,
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${SITE_URL}/insights/${post.slug}`,
          },
          keywords: post.tags.join(", "),
          articleSection: post.category,
        }
      : undefined,
  });

  if (!post) return <Redirect to="/insights" />;

  const publishedDate = new Date(post.publishedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>

        {/* ── Article header ── */}
        <header className="pt-[62px] bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-6 md:px-10 pt-12 pb-16">

            {/* Breadcrumb */}
            <motion.nav
              aria-label="Breadcrumb"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex items-center gap-2 mb-10"
            >
              <Link href="/" className="type-label text-foreground/40 hover:text-accent transition-colors">Home</Link>
              <span className="type-label text-foreground/20">/</span>
              <Link href="/insights" className="type-label text-foreground/40 hover:text-accent transition-colors flex items-center gap-1">
                <ArrowLeft size={10} /> Insights
              </Link>
              <span className="type-label text-foreground/20">/</span>
              <span className="type-label text-accent">{post.category}</span>
            </motion.nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-8"
              >
                {/* Category badge */}
                <span className="inline-block type-label text-accent bg-accent/8 border border-accent/20 px-3 py-1.5 rounded-full mb-6">
                  {post.category}
                </span>

                {/* H1 */}
                <h1 className="type-display-md font-extrabold text-foreground tracking-tight leading-tight mb-8">
                  {post.title}
                </h1>

                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-5">
                  {/* Author inline */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center shrink-0">
                      <span className="text-[11px] font-extrabold text-white">{JOE_AUTHOR.initials}</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground leading-none">{JOE_AUTHOR.name}</p>
                      <p className="type-index text-foreground/40 mt-0.5">{JOE_AUTHOR.role}</p>
                    </div>
                  </div>

                  <span className="w-px h-6 bg-border" />

                  <div className="flex items-center gap-1.5 type-label text-foreground/40">
                    <Calendar size={11} />
                    <time dateTime={post.publishedAt}>{publishedDate}</time>
                  </div>

                  <div className="flex items-center gap-1.5 type-label text-foreground/40">
                    <Clock size={11} />
                    {post.readingTime} min read
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Accent gradient banner */}
          <div
            className="w-full h-2"
            style={{ background: "linear-gradient(90deg, hsl(22 88% 48%) 0%, hsl(22 88% 48% / 0.3) 60%, transparent 100%)" }}
          />
        </header>

        {/* ── Article body ── */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Main content */}
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-7 flex flex-col gap-6"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              <meta itemProp="datePublished" content={post.publishedAt} />
              <meta itemProp="author" content={JOE_AUTHOR.name} />

              {post.content.map((block, i) => (
                <Block key={i} block={block} i={i} />
              ))}

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-border mt-4">
                <Tag size={12} className="text-foreground/30" />
                {post.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full border border-border type-label text-foreground/40 hover:border-accent hover:text-accent transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Author bio card */}
              <div className="mt-4">
                <p className="type-label text-foreground/35 mb-4">Written by</p>
                <AuthorCard />
              </div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-4 lg:col-start-9"
            >
              <div className="lg:sticky lg:top-24 flex flex-col gap-6">

                {/* CTA card */}
                <div className="rounded-2xl bg-foreground text-white p-7 relative overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at 80% 10%, hsl(22 88% 48% / 0.2) 0%, transparent 60%)" }}
                  />
                  <div className="relative z-10">
                    <p className="type-label text-white/40 mb-3">Free review</p>
                    <h3 className="text-lg font-extrabold text-white tracking-tight leading-snug mb-3">
                      Want us to review your website?
                    </h3>
                    <p className="type-body text-white/50 leading-relaxed mb-5">
                      Get an honest, no-obligation assessment of what's stopping your site from converting visitors into enquiries.
                    </p>
                    <Link
                      href="/#review"
                      className="flex items-center justify-center gap-2 bg-accent text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-accent/90 transition-colors w-full"
                    >
                      Get a free review <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>

                {/* Related posts */}
                {related.length > 0 && (
                  <div>
                    <p className="type-label text-foreground/35 mb-4">More from Insights</p>
                    <div className="flex flex-col gap-3">
                      {related.map(relPost => (
                        <Link
                          key={relPost.slug}
                          href={`/insights/${relPost.slug}`}
                          className="group flex flex-col gap-2 p-5 rounded-2xl border border-border hover:border-foreground/20 transition-colors bg-white"
                        >
                          <span className="type-label text-accent">{relPost.category}</span>
                          <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors leading-snug line-clamp-2">
                            {relPost.title}
                          </p>
                          <div className="flex items-center gap-1.5 type-label text-foreground/35 mt-1">
                            <Clock size={10} />
                            {relPost.readingTime} min read
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Back link */}
                <Link
                  href="/insights"
                  className="flex items-center gap-2 type-label text-foreground/40 hover:text-accent transition-colors"
                >
                  <ArrowLeft size={11} /> All articles
                </Link>
              </div>
            </motion.aside>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
