/* ─── Author ─────────────────────────────────────────────────── */

export const JOE_AUTHOR = {
  id: "joe",
  name: "Joe",
  role: "Founder & Web Designer",
  company: "Evolux Web Design",
  location: "Sunderland, UK",
  initials: "J",
  bio: "Joe is the founder of Evolux Web Design, a conversion-focused web design studio based in Sunderland, North East England. With 5+ years of experience building WordPress websites that generate real enquiries for UK businesses, he writes about web design, conversion optimisation, and digital strategy for SMEs.",
  expertise: ["WordPress", "Bricks Builder", "Conversion Optimisation", "UX Strategy"],
  linkedIn: "https://linkedin.com",
};

/* ─── Content block types ───────────────────────────────────── */

export type ContentBlock =
  | { type: "paragraph";      text: string }
  | { type: "h2";             text: string }
  | { type: "h3";             text: string }
  | { type: "list";           items: string[] }
  | { type: "numbered-list";  items: string[] }
  | { type: "quote";          text: string; attribution?: string }
  | { type: "callout";        text: string; label?: string };

/* ─── Post type ─────────────────────────────────────────────── */

export interface InsightPost {
  slug: string;
  title: string;
  metaTitle?: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  authorId: string;
  content: ContentBlock[];
}

/* ─── Posts ─────────────────────────────────────────────────── */

export const INSIGHT_POSTS: InsightPost[] = [
  {
    slug: "why-websites-dont-generate-business",
    title: "Why Your Website Gets Traffic But No Enquiries (And How to Fix It)",
    metaDescription:
      "High traffic, low enquiries? Discover the five conversion mistakes most UK business websites make — and the straightforward fixes that generate results.",
    excerpt:
      "Most sites are built to look presentable. The ones that generate revenue are engineered around a single question: what do we want the visitor to do? Here's the difference in practice.",
    category: "Strategy",
    tags: ["conversion", "website strategy", "lead generation", "web design"],
    publishedAt: "2025-03-12",
    updatedAt: "2025-04-01",
    readingTime: 6,
    authorId: "joe",
    content: [
      {
        type: "paragraph",
        text: "Here's a situation that comes up in nearly every first conversation I have with a new client: their website gets decent traffic — maybe a few hundred visitors a week — but the enquiries aren't coming. They've assumed the problem is traffic. It usually isn't.",
      },
      {
        type: "paragraph",
        text: "Traffic and conversion are different problems, and they require different solutions. A site with 200 visitors and a 3% conversion rate will generate more enquiries than a site with 2,000 visitors and a 0.1% rate. Most businesses are trying to solve the wrong problem.",
      },
      { type: "h2", text: "Why the Gap Between Traffic and Enquiries Exists" },
      {
        type: "paragraph",
        text: "When someone lands on your website, they're not automatically ready to make contact. They're evaluating. They want to know: can this business solve my problem? Can I trust them? Is the process easy? If your site doesn't answer those questions quickly and confidently, they leave — and you'll never know they were there.",
      },
      {
        type: "callout",
        label: "The real question",
        text: "Don't ask 'how do I get more traffic?' Ask 'why aren't the visitors I already have making contact?'",
      },
      { type: "h2", text: "Five Reasons Your Website Isn't Converting" },
      { type: "h3", text: "1. There's no clear next step" },
      {
        type: "paragraph",
        text: "Walk through your website right now and ask yourself: what is the single most important action I want a visitor to take? If your answer is vague, your website is almost certainly vague too. Every page needs one primary call-to-action — not three, not a contact form buried in the footer. One clear, prominent next step.",
      },
      { type: "h3", text: "2. Your copy describes you, not their problem" },
      {
        type: "paragraph",
        text: "The most common homepage mistake I see: the hero section leads with 'Welcome to [Business Name] — we've been serving customers since 2008.' Your visitor doesn't care about your history. They care about their problem. Lead with what you solve, not who you are.",
      },
      { type: "h3", text: "3. Trust signals are absent or buried" },
      {
        type: "paragraph",
        text: "Google reviews, case studies, client logos, real photos — these aren't optional extras. They're the difference between a visitor who reads and a visitor who enquires. People need to see evidence that you've solved problems like theirs before. If that evidence isn't visible above the fold, a significant proportion of visitors will never scroll far enough to find it.",
      },
      { type: "h3", text: "4. The mobile experience is broken" },
      {
        type: "paragraph",
        text: "Over 60% of web traffic in the UK is now mobile. If your site was built primarily for desktop, the mobile version is likely an afterthought — text too small, buttons too close together, images that overflow. Mobile visitors are often higher-intent (they're on the move, searching with purpose). Losing them is expensive.",
      },
      { type: "h3", text: "5. You're attracting the wrong visitors" },
      {
        type: "paragraph",
        text: "Sometimes the conversion problem isn't on your website at all — it's in how people are finding you. If you're ranking for broad, informational keywords rather than commercial ones, your traffic will be curious readers rather than ready-to-buy prospects. An enquiry-focused SEO strategy targets people with buying intent, not just people with questions.",
      },
      { type: "h2", text: "What High-Converting Websites Do Differently" },
      {
        type: "paragraph",
        text: "The websites that consistently generate enquiries share a few common characteristics. They're built around the visitor's journey, not the business owner's preferences. They answer objections before they're raised. They make the next step obvious at every point on the page.",
      },
      {
        type: "list",
        items: [
          "One primary CTA per page, repeated multiple times as the visitor scrolls",
          "Social proof (reviews, client logos, results) visible without scrolling",
          "Copy that speaks to a specific customer problem in plain language",
          "Mobile load times under 3 seconds",
          "A contact process with as few steps as possible",
        ],
      },
      {
        type: "paragraph",
        text: "None of this requires a rebuild. Some of the biggest conversion improvements I've seen came from rewriting a homepage headline and moving a phone number. The changes that matter most are usually the simplest — they're just not obvious until you look at the site through a visitor's eyes.",
      },
      {
        type: "quote",
        text: "Your website isn't for you. It's for the person who's about to decide whether to make contact.",
      },
      {
        type: "paragraph",
        text: "If you'd like an honest assessment of what's stopping your website from converting — without the sales pitch — that's exactly what the free website review is for.",
      },
    ],
  },

  {
    slug: "real-cost-of-cheap-website",
    title: "The Real Cost of a Cheap Website (And How to Do the Maths)",
    metaDescription:
      "A cheap website might cost £500 upfront — but if it's losing you three enquiries a month, the real cost is much higher. Here's how to calculate whether your website is an asset or a liability.",
    excerpt:
      "A £500 build feels like a saving. But if it's losing you 3 enquiries a month at an average deal value of £2,000, the maths fall apart quickly. Here's how to calculate what your website is actually costing you.",
    category: "Business Case",
    tags: ["roi", "web design cost", "small business", "website investment"],
    publishedAt: "2025-04-08",
    readingTime: 4,
    authorId: "joe",
    content: [
      {
        type: "paragraph",
        text: "The most common objection I hear when talking to small business owners about a new website is: 'I just need something simple — nothing expensive.' I understand the instinct. But 'simple and cheap' and 'effective' are often different things, and confusing them is one of the more expensive mistakes a growing business can make.",
      },
      { type: "h2", text: "The Maths Behind a 'Cheap' Website" },
      {
        type: "paragraph",
        text: "Let's run some numbers. If your average client is worth £2,000 to your business, and your current website is losing you three enquiries a month because of poor design, slow load times, or a confusing contact process — that's £6,000 a month in missed revenue. Over a year: £72,000.",
      },
      {
        type: "callout",
        label: "Quick calculation",
        text: "Take your average client value × the number of enquiries you estimate your website is losing per month. That's your website's monthly cost. Now compare that to the cost of rebuilding it properly.",
      },
      {
        type: "paragraph",
        text: "Suddenly a £3,000–£5,000 investment in a conversion-focused website doesn't look expensive. It looks like it pays for itself in the first month.",
      },
      { type: "h2", text: "What a Cheap Website Actually Costs You" },
      {
        type: "paragraph",
        text: "The upfront cost of a cheap website is almost always the smallest part of the total expense. Here's where the real costs accumulate:",
      },
      {
        type: "numbered-list",
        items: [
          "Time — endless DIY tweaks, learning page builders, chasing developers for small fixes, redoing things that were never quite right the first time.",
          "Performance — slow load times from bloated themes and unoptimised images directly correlate with higher bounce rates. Google has stated that a 1-second delay in mobile load time can reduce conversions by up to 20%.",
          "Credibility — your website is often the first impression a potential client gets of your business. A site that looks like it cost £500 signals exactly that.",
          "SEO — cheap websites typically have poor technical SEO foundations: missing schema markup, unoptimised meta tags, slow Core Web Vitals scores. You're invisible to the people who are searching for exactly what you offer.",
          "Maintenance — platforms and page builders popular with cheap builds often have poor long-term support. A site built on a discontinued theme in 2022 is a security liability by 2025.",
        ],
      },
      { type: "h2", text: "What Good Web Design Investment Looks Like" },
      {
        type: "paragraph",
        text: "A website built properly isn't just a digital brochure — it's a sales asset. It's working for your business at 11pm on a Saturday when you're not. It's answering the questions your prospective clients have before they've even called you. It's filtering out the tyre-kickers and attracting the people who are genuinely ready to buy.",
      },
      {
        type: "paragraph",
        text: "The businesses I've worked with that see the strongest return on their web investment share one thing: they stopped thinking about their website as a cost and started treating it as infrastructure. Like a well-fitted shop floor. Like a member of staff who never calls in sick.",
      },
      {
        type: "quote",
        text: "Your website is either earning you money or costing you money. It isn't doing nothing.",
      },
      {
        type: "paragraph",
        text: "Before you commission another cheap build, spend ten minutes doing the maths. You might find you can't afford not to invest properly.",
      },
    ],
  },

  {
    slug: "questions-to-ask-web-design-agency",
    title: "5 Questions to Ask a Web Design Agency Before You Sign Anything",
    metaDescription:
      "Not all web design agencies deliver on their promises. Before you hire anyone, ask these five questions — the answers will immediately tell you whether they can actually deliver results.",
    excerpt:
      "Every agency will tell you what you want to hear. Ask these five questions instead — the answers will tell you immediately whether they can actually deliver what your business needs.",
    category: "Hiring Guide",
    tags: ["hiring", "web design agency", "questions to ask", "due diligence"],
    publishedAt: "2025-05-02",
    readingTime: 5,
    authorId: "joe",
    content: [
      {
        type: "paragraph",
        text: "Every web design agency will tell you they create 'stunning, results-driven websites' for 'businesses like yours.' The language is interchangeable. The results are not. Before you hand over a deposit, there are five questions that will cut through the marketing copy and give you an honest picture of what you're actually buying.",
      },
      { type: "h2", text: "1. Can you show me before-and-after analytics from a recent project?" },
      {
        type: "paragraph",
        text: "Any agency that builds genuinely effective websites should be able to show you concrete evidence of the outcomes their work has produced. Not just 'the client was happy' — actual data. Traffic before and after. Enquiry rate comparisons. Google ranking improvements. If they struggle to produce this, either they're not tracking results, or the results aren't worth showing.",
      },
      {
        type: "callout",
        label: "What a good answer looks like",
        text: "Specific numbers from real projects: 'For this client, enquiries increased by X% in the 90 days after launch.' Vague testimonials without data are a yellow flag.",
      },
      { type: "h2", text: "2. What happens after the site goes live?" },
      {
        type: "paragraph",
        text: "Launch day is not the finish line — it's the starting gun. A well-built website requires performance monitoring, content updates, and iterative improvement based on real user behaviour. Ask explicitly: do you offer post-launch support? What does it include? How long? A developer who disappears after they've been paid isn't a partner — they're a one-off supplier.",
      },
      { type: "h2", text: "3. How do you measure whether a project has been successful?" },
      {
        type: "paragraph",
        text: "This question separates the agencies that think about business outcomes from the ones that think about design. The answer should reference specific, measurable goals: enquiry volume, contact form submissions, phone calls, revenue. If the answer is 'we want you to love the design' or 'we measure by your satisfaction', that's useful but incomplete. Design and satisfaction are means, not ends.",
      },
      { type: "h2", text: "4. Who will actually be working on my project?" },
      {
        type: "paragraph",
        text: "Many mid-sized agencies win work with senior talent and execute it with juniors or overseas contractors. There's nothing inherently wrong with this model, but you should know about it upfront. Ask specifically: who will be designing my site? Who will build it? Will I have a direct line to them, or does everything go through an account manager?",
      },
      {
        type: "paragraph",
        text: "At a solo studio like Evolux, the answer is unambiguous: you work directly with me throughout. No handoffs. No surprises.",
      },
      { type: "h2", text: "5. What's your process for understanding my customers?" },
      {
        type: "paragraph",
        text: "A website built without understanding your customers is a website built for the wrong person. The best agencies spend significant time at the start of a project understanding who your customers are, what they're searching for, what objections they have, and what would make them choose you over a competitor. If the process skips straight to 'send us your logo and brand colours', the resulting website will look like your business — but it won't speak to your customer.",
      },
      {
        type: "list",
        items: [
          "What do they ask to learn about your customers before designing anything?",
          "Do they review competitor sites as part of their research?",
          "How do they validate their design decisions against actual user intent?",
        ],
      },
      {
        type: "paragraph",
        text: "Hiring a web designer is a significant investment. These five questions won't guarantee a perfect outcome, but they'll filter out the agencies that are more interested in collecting a fee than generating a return on your investment.",
      },
      {
        type: "quote",
        text: "The right web designer should be able to tell you exactly what result they're going to build toward — before they've designed a single page.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): InsightPost | undefined {
  return INSIGHT_POSTS.find(p => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 2): InsightPost[] {
  return INSIGHT_POSTS.filter(p => p.slug !== slug).slice(0, limit);
}

export const ALL_CATEGORIES = ["All", ...Array.from(new Set(INSIGHT_POSTS.map(p => p.category)))];
