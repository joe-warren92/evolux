export interface IndustryPage {
  slug: string;
  name: string;
  pluralName: string;
  icon: string;
  title: string;
  metaDescription: string;
  cardDescription: string;
  intro: string;
  challengeIntro: string;
  challenges: { title: string; description: string }[];
  needsIntro: string;
  needs: { title: string; description: string; icon: string }[];
  sitemapIntro: string;
  sitemap: string[];
  helpCopy: string;
  projectIntro: string;
  projectSlugs: string[];
  relatedInsights: { slug: string; label: string }[];
  faqs: [string, string][];
}

export const INDUSTRIES: IndustryPage[] = [
  {
    slug: "accountants",
    name: "Accountants",
    pluralName: "accountancy firms",
    icon: "analytics",
    title: "Website Design for Accountants That Builds Trust Before the First Call",
    metaDescription: "Website design for accountants that explains services clearly, builds local credibility and helps the right clients feel confident making contact.",
    cardDescription: "Clear services, visible expertise and a professional first impression for firms competing on more than price.",
    intro: "People rarely choose an accountant on qualifications alone. They want to know whether you understand businesses like theirs, whether your advice will be clear and whether they can rely on you when a deadline matters. Your website should answer those questions before the first conversation.",
    challengeIntro: "Many accountancy websites list every service but make it difficult to understand why a business should choose one firm over another.",
    challenges: [
      { title: "Services without context", description: "A long list of tax, payroll and bookkeeping services does not help a business owner work out what they actually need." },
      { title: "Little differentiation", description: "Generic claims about being friendly and professional leave the firm competing on location or price." },
      { title: "Hidden sector knowledge", description: "Useful experience with trades, landlords, startups or growing companies is often buried several pages deep." },
      { title: "Weak next steps", description: "Visitors are sent to a general contact form when a short discovery call would feel more natural." }
    ],
    needsIntro: "A strong accountancy website should make a complex service feel straightforward and show the value of having the right adviser in your corner.",
    needs: [
      { title: "Organise services around real needs", description: "Help visitors find the right support whether they are starting a company, changing accountant or planning for growth.", icon: "layers" },
      { title: "Show who you work with", description: "Make your sector experience visible so the right businesses can recognise themselves quickly.", icon: "briefcase" },
      { title: "Build local confidence", description: "Use real people, reviews and a clear location to make the firm feel established and approachable.", icon: "location" },
      { title: "Make contact feel easy", description: "Offer a clear route to a first conversation without asking for too much information upfront.", icon: "message" }
    ],
    sitemapIntro: "Most accountancy firms benefit from focused pages for their core services and the types of clients they support.",
    sitemap: ["Home", "About the firm", "Services overview", "Accounts and tax", "Payroll and bookkeeping", "Business advice", "Who we help", "FAQs", "Insights", "Contact"],
    helpCopy: "Evolux turns your expertise into a website structure that feels clear to a busy business owner. The work starts with your strongest client relationships, the questions people ask before switching accountant and the services you most want to grow.",
    projectIntro: "These projects are from different sectors, but both show how a considered structure and a more credible first impression can support a higher-value enquiry.",
    projectSlugs: ["circular-branding", "manton-executives"],
    relatedInsights: [
      { slug: "how-to-write-a-web-design-brief-so-that-you-get-your-perfect-site", label: "How to write a useful web design brief" },
      { slug: "why-websites-dont-generate-business", label: "Why websites get traffic but no enquiries" }
    ],
    faqs: [
      ["Should accountants publish pricing on their website?", "It depends on the service. Fixed-fee packages can be useful for straightforward services such as company accounts or bookkeeping, especially if your clients value clarity. More complex advisory work is usually better explained through scope, outcomes and a simple route to a conversation. The aim is to reduce uncertainty without forcing every client into the same package; the <a href=\"/packages\">website packages</a> page shows how Evolux handles clear scope without oversimplifying complex work."],
      ["How many service pages should an accountancy website have?", "A firm should usually create a separate page for each important service or closely related group of services. This gives visitors a clearer route through the website and gives search engines a better understanding of what the firm offers. Start with the services that generate the most valuable client relationships rather than creating thin pages for every minor task. The <a href=\"/services/web-design\">web design service</a> explains how this structure is planned."],
      ["Do accountancy firms need pages for different industries?", "If your advice changes meaningfully by sector, industry pages can be useful. A landlord, trades business and limited company director may have different concerns. The page should contain genuine sector-specific guidance, not the same paragraph with a different heading. You can see the broader approach on the <a href=\"/industries\">industries hub</a>."],
      ["What trust signals matter most on an accountant's website?", "Use recognisable qualifications, real team photos, Google reviews, sector experience, helpful insights and a clear explanation of how the first conversation works. These signals reassure visitors that they will receive practical advice from a firm that understands their situation. The article on <a href=\"/insights/why-websites-dont-generate-business\">why websites do not generate business</a> explains why proof placement matters."]
    ]
  },
  {
    slug: "consultants",
    name: "Consultants",
    pluralName: "consultants",
    icon: "briefcase",
    title: "Website Design for Consultants Who Need to Turn Expertise Into Enquiries",
    metaDescription: "Website design for consultants that sharpens positioning, demonstrates expertise and turns the right visitors into qualified enquiries.",
    cardDescription: "Sharper positioning and stronger authority for specialists whose expertise is their most valuable asset.",
    intro: "A consultant is often selling judgement, experience and a way of thinking. That can be difficult to communicate online. Your website needs to make your specialism obvious, show the problems you are equipped to solve and give potential clients a reason to trust your perspective.",
    challengeIntro: "Consultancy websites often sound polished but vague. Visitors leave knowing the consultant is experienced without knowing whether that experience is relevant to them.",
    challenges: [
      { title: "A broad offer", description: "Trying to appeal to everyone makes it difficult for the right client to see why your expertise is valuable." },
      { title: "Authority without proof", description: "Claims about strategic thinking carry little weight without examples, outcomes or a point of view." },
      { title: "No clear starting point", description: "A list of capabilities does not tell a potential client which problem you can help them solve first." },
      { title: "Thin thought leadership", description: "Generic articles miss the opportunity to show how you think about the difficult questions in your field." }
    ],
    needsIntro: "A consultant's website should feel like a useful first conversation: focused, informed and confident without overselling.",
    needs: [
      { title: "State the niche clearly", description: "Make it obvious who you help, what changes and why your approach is different.", icon: "target" },
      { title: "Turn expertise into evidence", description: "Use case studies, outcomes and thoughtful articles to support your positioning.", icon: "document" },
      { title: "Explain the engagement", description: "Set expectations around workshops, retained advice or project-based support.", icon: "message" },
      { title: "Create a considered next step", description: "Guide suitable clients towards a focused initial conversation.", icon: "direct" }
    ],
    sitemapIntro: "Consultants usually need fewer pages than larger firms, but every page needs a clear job.",
    sitemap: ["Home", "About", "Who I help", "Consulting services", "Approach", "Case studies", "Insights", "FAQs", "Contact"],
    helpCopy: "Evolux helps consultants clarify what they should be known for and turns that position into a focused website. The page structure, proof and calls to action are shaped around the kind of client conversation you want more often.",
    projectIntro: "Manton Executives and Circular Branding Group both needed a website that made specialist expertise feel tangible rather than abstract.",
    projectSlugs: ["manton-executives", "circular-branding"],
    relatedInsights: [
      { slug: "brand-identity-and-web-design", label: "How brand identity shapes effective web design" },
      { slug: "questions-to-ask-web-design-agency", label: "Questions to ask before choosing a web design partner" }
    ],
    faqs: [
      ["How can a consultant demonstrate expertise online?", "Start by explaining the problems you solve in specific language. Add case studies, useful articles, workshop themes, client outcomes and a clear point of view. Potential clients do not need every detail of your methodology, but they do need enough evidence to feel that your experience is relevant to their situation. The <a href=\"/projects\">case studies</a> show how Evolux presents expertise through structure and proof."],
      ["Do consultants need case studies?", "Yes, particularly when the service is difficult to evaluate before buying. A good case study does not need to reveal confidential information. It can explain the starting point, the work undertaken, the decisions made and the result in a way that helps a potential client understand your value. The <a href=\"/services/web-design\">web design service</a> includes this kind of proof planning."],
      ["Should a consultant build a personal brand or a company brand?", "That depends on how the business is delivered and where it is heading. If clients are primarily buying your individual expertise, a personal presence is useful. If the consultancy is growing into a wider team, the brand should leave room for that growth while still showing the people behind the advice. The <a href=\"/services/branding\">brand identity service</a> can help shape that direction."],
      ["What should a consultancy homepage prioritise?", "A visitor should quickly understand who the consultancy helps, the problem it solves, the value of the work and the sensible next step. Lead with relevance, then support it with proof. Avoid opening with a long biography or a broad list of capabilities. If your current homepage feels unclear, start with a <a href=\"/free-review\">free website review</a>."]
    ]
  },
  {
    slug: "solicitors",
    name: "Solicitors",
    pluralName: "solicitors and law firms",
    icon: "shield",
    title: "Website Design for Solicitors Where Clarity and Credibility Matter",
    metaDescription: "Website design for solicitors and law firms that makes services easier to understand, builds confidence and reduces uncertainty before contact.",
    cardDescription: "Reassuring, well-structured websites that help people find the right legal support without unnecessary friction.",
    intro: "People often arrive at a solicitor's website at a stressful or uncertain moment. They may not know the right legal term for their situation. They need reassurance, a clear route to the relevant service and confidence that their enquiry will be handled properly.",
    challengeIntro: "Law firm websites can unintentionally make a difficult situation harder by organising pages around internal legal terminology rather than the questions clients are trying to answer.",
    challenges: [
      { title: "Legal language first", description: "Visitors struggle to identify the right service when pages assume knowledge they do not have." },
      { title: "Too many routes", description: "Large navigation menus can leave someone unsure whether to call, complete a form or keep searching." },
      { title: "Little reassurance", description: "Qualifications matter, but visitors also need to understand the people, process and likely next step." },
      { title: "Mobile friction", description: "A person searching on a phone needs clear contact options without navigating a dense desktop-led site." }
    ],
    needsIntro: "A useful legal website should make the next step feel calm and manageable while preserving the firm's professional authority.",
    needs: [
      { title: "Use plain English", description: "Explain legal services around the situations clients recognise, then introduce technical detail where it helps.", icon: "document" },
      { title: "Guide visitors carefully", description: "Use a clear service hierarchy and obvious contact routes for urgent and non-urgent enquiries.", icon: "layers" },
      { title: "Show the people involved", description: "Profiles, experience and accreditations make an unfamiliar process feel more personal.", icon: "user" },
      { title: "Reduce uncertainty", description: "Explain what happens after someone calls or submits an enquiry.", icon: "message" }
    ],
    sitemapIntro: "A law firm sitemap should reflect how clients search for help, with clear pages for major practice areas and individual services.",
    sitemap: ["Home", "About the firm", "Our people", "Services overview", "Individual legal service pages", "Fees where appropriate", "FAQs", "Insights", "Contact"],
    helpCopy: "Evolux structures legal websites around the questions people ask before contacting a solicitor. That means clearer service routes, stronger professional proof and a calmer experience on mobile.",
    projectIntro: "These projects are not legal-sector examples. They demonstrate a transferable approach: structure complex information clearly and make expertise easier to trust.",
    projectSlugs: ["circular-branding", "manton-executives"],
    relatedInsights: [
      { slug: "the-importance-of-responsive-webdesign-for-modern-business-growth", label: "Why responsive design matters for business growth" },
      { slug: "why-websites-dont-generate-business", label: "Why websites get traffic but no enquiries" }
    ],
    faqs: [
      ["Should law firms create separate pages for individual legal services?", "Yes. Separate service pages make it easier for clients to recognise the help they need and give the firm space to explain the process in plain English. They also create a stronger search foundation than one broad services page. Prioritise meaningful pages with useful guidance rather than producing a large number of thin pages. This is part of Evolux's <a href=\"/services/web-design\">web design planning process</a>."],
      ["How important are reviews for a solicitor's website?", "Reviews are valuable because legal services involve trust and uncertainty. Use reviews carefully, with appropriate permissions and professional rules in mind. Combine them with qualifications, accreditations, team profiles and clear explanations of what happens after an enquiry. The article on <a href=\"/insights/why-websites-dont-generate-business\">why websites do not generate business</a> explains how weak proof can stop otherwise interested visitors from enquiring."],
      ["Should solicitors show fees online?", "Where the service is predictable or where transparency is required, clear fee information can reduce hesitation. For more complex matters, explain what affects cost and what a potential client can expect from the initial conversation. The goal is clarity, not forcing every matter into a fixed price. Evolux uses the same principle on its <a href=\"/packages\">website pricing page</a>."],
      ["What should a law firm website do well on mobile?", "Make services easy to scan, keep phone and enquiry routes visible, avoid dense blocks of legal text and ensure key pages load quickly. Someone looking for legal support may be searching under pressure, so a calm mobile experience matters. The article on <a href=\"/insights/the-importance-of-responsive-webdesign-for-modern-business-growth\">responsive web design</a> explains why mobile structure affects enquiries."]
    ]
  },
  {
    slug: "financial-advisers",
    name: "Financial Advisers",
    pluralName: "financial advisers",
    icon: "growth",
    title: "Website Design for Financial Advisers Built Around Confidence and Trust",
    metaDescription: "Website design for financial advisers that builds confidence, explains the advice process and supports long-term client relationships.",
    cardDescription: "Professional, reassuring websites for advisers asking clients to place real confidence in their expertise.",
    intro: "Choosing a financial adviser is a high-trust decision. People want to understand who they are dealing with, how advice works and whether the adviser is a good fit for the decisions ahead. A polished website matters, but reassurance and clarity matter more.",
    challengeIntro: "Many adviser websites look professional at a glance but say very little about the relationship a client can expect.",
    challenges: [
      { title: "Generic reassurance", description: "Broad claims about peace of mind do not explain the specific value of the advice." },
      { title: "An unclear process", description: "Potential clients are unsure what happens in the first meeting or how an ongoing relationship works." },
      { title: "Hidden specialisms", description: "Experience with retirement planning, business owners or later-life advice can be difficult to find." },
      { title: "A distant tone", description: "Stock imagery and corporate copy can make a personal advisory service feel impersonal." }
    ],
    needsIntro: "A financial advice website should feel measured, credible and human. It should support trust without relying on sales language.",
    needs: [
      { title: "Explain who the advice is for", description: "Help visitors understand whether your specialisms match the decisions they are making.", icon: "target" },
      { title: "Make the process visible", description: "Outline the first meeting, advice stages and ongoing support in a reassuring way.", icon: "layers" },
      { title: "Use personal proof", description: "Real team photography, credentials and carefully chosen reviews build confidence.", icon: "user" },
      { title: "Balance clarity and compliance", description: "Present required information without letting it overwhelm the user journey.", icon: "shield" }
    ],
    sitemapIntro: "Advisers benefit from a simple structure that answers personal questions clearly and leaves room for useful educational content.",
    sitemap: ["Home", "About", "Who we help", "Advice services", "Our process", "FAQs", "Insights and guides", "Contact", "Regulatory information"],
    helpCopy: "Evolux plans financial advice websites around the trust-building journey: who the adviser helps, what the process feels like and what evidence reassures a potential client before they make contact.",
    projectIntro: "These projects show how a more considered presentation can make a specialist service feel established, personal and easier to trust.",
    projectSlugs: ["manton-executives", "circular-branding"],
    relatedInsights: [
      { slug: "brand-identity-and-web-design", label: "How brand identity shapes effective web design" },
      { slug: "website-backup-best-practices", label: "What businesses should know about website protection" }
    ],
    faqs: [
      ["What should a financial adviser website prioritise?", "Prioritise trust, personal credibility and a clear explanation of the advice relationship. Visitors should be able to understand who you help, the types of decisions you advise on and what happens after they make contact. Regulatory information is important, but it should support the journey rather than dominate it. The <a href=\"/services/web-design\">web design service</a> explains how Evolux plans that journey."],
      ["Should financial advisers use personal photography?", "Yes. Advice is a relationship-led service, so real photography helps potential clients picture who they will speak to. A small, high-quality set of natural images is usually more effective than generic financial stock photography. You can see how personal proof is used across Evolux <a href=\"/projects\">project examples</a>."],
      ["Do advisers need separate service pages?", "Usually. Retirement planning, investment advice, protection and advice for business owners may involve different questions. Separate pages allow you to explain those differences clearly and make the site more useful for both visitors and search engines. This is especially useful if you want your site to support long-term <a href=\"/insights\">insight content</a>."],
      ["How can an adviser website build confidence without sounding sales-focused?", "Use a calm tone, explain the process, show qualifications and provide useful guidance. Avoid exaggerated claims. The strongest message is often that the adviser understands the decisions the client is facing and can explain the next step clearly. If you are unsure where trust breaks down, request a <a href=\"/free-review\">free website review</a>."]
    ]
  },
  {
    slug: "recruitment",
    name: "Recruitment Agencies",
    pluralName: "recruitment agencies",
    icon: "user",
    title: "Website Design for Recruitment Agencies That Need to Win Trust Quickly",
    metaDescription: "Website design for recruitment agencies with clearer candidate and employer journeys, stronger sector positioning and more qualified enquiries.",
    cardDescription: "Separate journeys for employers and candidates, backed by clear sector expertise and a credible brand.",
    intro: "A recruitment website has to work for two audiences at once. Employers need confidence that you understand their market and can deliver. Candidates need to know that opportunities are relevant and that they will be treated properly. If those journeys blur together, both audiences lose confidence.",
    challengeIntro: "Recruitment sites often prioritise vacancy feeds while leaving the agency's real value, sector knowledge and approach difficult to understand.",
    challenges: [
      { title: "One journey for everyone", description: "Employers and candidates land on the same generic page without a clear route for their needs." },
      { title: "Weak sector positioning", description: "A broad list of industries makes the agency appear less knowledgeable than a focused competitor." },
      { title: "Vacancies without a story", description: "Job listings dominate the website while the agency's approach and employer value remain invisible." },
      { title: "Little proof", description: "Testimonials, placements and sector results are missing or buried." }
    ],
    needsIntro: "A strong recruitment website should split the journey early, then give each audience the confidence to take the next step.",
    needs: [
      { title: "Separate candidate and employer routes", description: "Make it immediately clear where each audience should go and what they can expect.", icon: "direct" },
      { title: "Show sector knowledge", description: "Give priority sectors enough space to demonstrate genuine understanding.", icon: "briefcase" },
      { title: "Use proof with purpose", description: "Show placements, client feedback and candidate experiences where they answer a real doubt.", icon: "star" },
      { title: "Make enquiry routes obvious", description: "Use distinct calls to action for hiring support, registration and current vacancies.", icon: "target" }
    ],
    sitemapIntro: "Recruitment agencies need two clear journeys with sector pages that support the areas they know best.",
    sitemap: ["Home", "Employers", "Candidates", "Sectors", "Individual sector pages", "Current vacancies", "About", "Insights", "Contact"],
    helpCopy: "Evolux plans recruitment websites around the two audiences that matter. The structure makes it easier for employers to understand your expertise and for candidates to find a relevant, credible route into the agency.",
    projectIntro: "These are not recruitment projects. They show transferable thinking: separate the decision journey, make proof easier to trust and turn a specialist service into a clearer enquiry route.",
    projectSlugs: ["pro-pest-manchester", "circular-branding"],
    relatedInsights: [
      { slug: "how-sunderland-businesses-can-stand-out-online-smarter-website-design", label: "How smarter website design helps a business stand out" },
      { slug: "brand-identity-and-web-design", label: "How brand identity shapes effective web design" }
    ],
    faqs: [
      ["Should candidates and employers have separate website journeys?", "Yes. They arrive with different goals and different questions. Employers need to understand your sector knowledge and hiring support. Candidates need access to relevant roles and confidence in the experience they will receive. Separate routes make both journeys clearer. Evolux handles this kind of journey planning through <a href=\"/services/web-design\">web design and development</a>."],
      ["What should a recruitment homepage prioritise?", "The homepage should establish the sectors you know, split employer and candidate journeys early and show why the agency is credible. Vacancy search can be important, but it should not be the only useful thing on the page. The article on <a href=\"/insights/why-websites-dont-generate-business\">why websites do not generate business</a> is useful if the current homepage is getting attention but not enquiries."],
      ["Do recruitment agencies need sector pages?", "If sector expertise is a genuine differentiator, yes. A useful sector page should explain the roles you recruit for, the market you understand and why clients or candidates should trust your team. Avoid creating generic pages for sectors you do not actively support. See the <a href=\"/industries\">industry website guides</a> for how sector pages should avoid thin SEO copy."],
      ["How should vacancies be integrated into the website?", "Vacancies should be easy to search and filter without overpowering the rest of the website. The best setup depends on your recruitment platform, but the experience should feel consistent with your brand and work properly on mobile. The <a href=\"/services/conversion-optimisation\">conversion optimisation service</a> can help identify friction in that journey."]
    ]
  },
  {
    slug: "architects",
    name: "Architects",
    pluralName: "architecture practices",
    icon: "design",
    title: "Website Design for Architects Who Need Their Portfolio to Do the Selling",
    metaDescription: "Website design for architects that presents projects with more impact, strengthens positioning and turns a portfolio into a source of enquiries.",
    cardDescription: "Editorial portfolio websites that give projects room to breathe while making the practice easier to understand.",
    intro: "For an architecture practice, the work itself carries enormous weight. But a strong portfolio is more than a grid of attractive images. Potential clients need to understand the brief, the thinking behind the work and the type of project the practice wants to win next.",
    challengeIntro: "Architecture websites can look impressive while still leaving a potential client unsure about the practice, its process and the relevance of its experience.",
    challenges: [
      { title: "Images without context", description: "A beautiful project gallery does not explain the brief, constraints or value of the work." },
      { title: "A hidden specialism", description: "Visitors cannot tell whether the practice is right for residential, commercial or developer-led work." },
      { title: "Weak project hierarchy", description: "Every project receives equal weight, so the strongest work does not guide the first impression." },
      { title: "No route into a conversation", description: "The portfolio ends without helping a potential client understand the next step." }
    ],
    needsIntro: "An architecture website should feel visual and editorial, but it still needs to guide a commercial decision.",
    needs: [
      { title: "Curate the portfolio", description: "Lead with the projects that best represent the work you want more often.", icon: "design" },
      { title: "Tell the project story", description: "Use concise case studies to explain the brief, response and result.", icon: "document" },
      { title: "Clarify the practice", description: "Show sectors, approach and location so visitors can quickly judge fit.", icon: "layers" },
      { title: "Preserve visual quality", description: "Use considered image treatment and fast-loading assets so the portfolio feels premium on every screen.", icon: "speed" }
    ],
    sitemapIntro: "An architecture website needs a carefully curated project structure rather than a large, undifferentiated archive.",
    sitemap: ["Home", "Practice", "Projects", "Individual project case studies", "Services", "Sectors", "Process", "Journal", "Contact"],
    helpCopy: "Evolux creates a clear editorial structure for architecture practices: flagship projects first, concise storytelling and a site experience that feels as considered as the work it presents.",
    projectIntro: "Circular Branding Group is a useful transferable example: a visual portfolio organised to support a serious B2B buying decision, not just to display attractive work.",
    projectSlugs: ["circular-branding", "ockerby-academy"],
    relatedInsights: [
      { slug: "brand-identity-and-web-design", label: "How brand identity shapes effective web design" },
      { slug: "the-importance-of-responsive-webdesign-for-modern-business-growth", label: "Why responsive web design matters" }
    ],
    faqs: [
      ["How many projects should an architecture website feature?", "There is no fixed number, but quality matters more than volume. Lead with the projects that best represent the work you want to win. A smaller set of thoughtful case studies is usually more persuasive than a large gallery with little context. The Evolux <a href=\"/projects\">project archive</a> uses the same principle: fewer examples, presented with clearer context."],
      ["What is the best way to showcase an architecture portfolio?", "Use strong imagery, but give each flagship project a concise story: the brief, context, constraints, approach and result. Make it easy to browse related projects by sector or type without turning the website into a complicated filter system. This can be planned as part of a <a href=\"/services/web-design\">custom website build</a>."],
      ["Should architects include their design process online?", "Yes. A clear overview helps potential clients understand what working with the practice will feel like. It can reduce uncertainty around early conversations, planning stages and the level of involvement required from the client. The <a href=\"/about\">Evolux process</a> is a useful example of making how you work visible."],
      ["How can a visual portfolio website still load quickly?", "Use responsive image sizes, modern formats and careful compression. Large files should not be sent to small screens unnecessarily. Performance matters because a slow portfolio weakens the quality impression the imagery is meant to create. The article on <a href=\"/insights/the-importance-of-responsive-webdesign-for-modern-business-growth\">responsive web design</a> explains why this affects business results."]
    ]
  },
  {
    slug: "engineers",
    name: "Engineers",
    pluralName: "engineering businesses",
    icon: "layers",
    title: "Website Design for Engineers That Makes Complex Expertise Easier to Trust",
    metaDescription: "Website design for engineering businesses that explains technical capability clearly, demonstrates experience and supports better B2B enquiries.",
    cardDescription: "Clearer technical communication for firms that need buyers to understand capability without reading a specification sheet.",
    intro: "Engineering buyers may understand the technical detail, but they still need a quick reason to trust a supplier. Your website should explain what you do, the sectors you support and the standards you work to without making visitors dig through dense copy.",
    challengeIntro: "Engineering websites often contain plenty of information but do not help a buyer judge capability, relevance or fit quickly enough.",
    challenges: [
      { title: "Capabilities without priorities", description: "A long list of equipment or processes leaves buyers unsure what the company is best known for." },
      { title: "Technical copy without context", description: "Specifications matter, but they need to connect to sectors, applications and outcomes." },
      { title: "Weak evidence", description: "Accreditations, project experience and quality standards are often difficult to find." },
      { title: "An outdated first impression", description: "A dated website can undermine confidence in an otherwise capable operation." }
    ],
    needsIntro: "An engineering website should respect technical detail while making the business easier to evaluate.",
    needs: [
      { title: "Lead with capability", description: "Make key services, sectors and applications obvious from the start.", icon: "layers" },
      { title: "Show operational proof", description: "Use standards, accreditations, facilities and case studies to support the claims.", icon: "shield" },
      { title: "Structure technical content", description: "Give detailed information a clear hierarchy so procurement teams can find what matters.", icon: "document" },
      { title: "Create better B2B enquiries", description: "Use relevant forms and contact routes that collect useful project context.", icon: "message" }
    ],
    sitemapIntro: "Engineering firms need a structured website that gives technical buyers a fast route to the right capability.",
    sitemap: ["Home", "Capabilities", "Individual service pages", "Sectors", "Projects", "Quality and accreditations", "About", "Insights", "Contact"],
    helpCopy: "Evolux helps engineering firms turn technical depth into a clearer commercial story. The result is a website that works for both an initial scan and a more detailed procurement review.",
    projectIntro: "Circular Branding Group is a relevant transferable B2B example: a specialist supplier website structured around capability, quality and trade enquiries.",
    projectSlugs: ["circular-branding", "ockerby-academy"],
    relatedInsights: [
      { slug: "how-to-write-a-web-design-brief-so-that-you-get-your-perfect-site", label: "How to write a useful web design brief" },
      { slug: "why-a-cheap-website-could-cost-you-more-than-you-think", label: "Why a cheap website can cost more in the long run" }
    ],
    faqs: [
      ["How should an engineering company organise its services online?", "Group services around the way buyers search and make decisions. If your capabilities serve distinct applications or sectors, give the important ones their own pages. Support technical detail with clear introductions so visitors can confirm relevance quickly before reading further. The <a href=\"/services/web-design\">web design service</a> covers this kind of service architecture."],
      ["Should engineering websites include accreditations?", "Yes. Standards, accreditations and quality processes can be decisive for procurement teams. Make them easy to find and explain where they are relevant rather than placing a row of logos on a page without context. This is part of the trust-building work covered in <a href=\"/insights/why-websites-dont-generate-business\">why websites do not generate business</a>."],
      ["Do engineering firms need case studies?", "Case studies are useful when they show how capability was applied to a real brief. You can protect confidential details while still explaining the problem, process, constraints and outcome. Browse Evolux <a href=\"/projects\">case studies</a> for examples of how project stories are structured."],
      ["What should an engineering enquiry form ask for?", "Keep the first form concise but useful. Ask for contact details, the relevant service or capability and a short project description. More detailed specifications can follow once the enquiry has reached the right person. If your current form is too heavy, a <a href=\"/services/conversion-optimisation\">conversion audit</a> can identify where people drop off."]
    ]
  },
  {
    slug: "private-clinics",
    name: "Private Clinics",
    pluralName: "private clinics",
    icon: "shield",
    title: "Website Design for Private Clinics That Helps Patients Feel Confident",
    metaDescription: "Website design for private clinics that builds patient confidence, explains treatments clearly and makes booking the next step feel straightforward.",
    cardDescription: "Reassuring treatment information, visible expertise and a simpler route from research to booking.",
    intro: "A private clinic website sits between research and a personal decision. Patients want to understand the treatment, the practitioner and the likely next step without feeling pressured. The experience needs to be clear, reassuring and easy to use on a phone.",
    challengeIntro: "Clinic websites often become crowded with treatment pages while the questions that matter most to patients remain difficult to answer.",
    challenges: [
      { title: "Treatments without guidance", description: "Patients are shown a menu of services without help understanding which route may be relevant." },
      { title: "Limited practitioner visibility", description: "Qualifications and experience are listed, but the person behind the treatment still feels distant." },
      { title: "Unclear expectations", description: "Visitors cannot easily understand consultations, pricing or what happens next." },
      { title: "Mobile booking friction", description: "A complicated booking or enquiry process loses patients who are researching on a phone." }
    ],
    needsIntro: "A clinic website should answer practical questions carefully and help patients take a comfortable next step.",
    needs: [
      { title: "Explain treatments clearly", description: "Use plain language, thoughtful FAQs and a clear distinction between related services.", icon: "document" },
      { title: "Make practitioners visible", description: "Show real people, relevant qualifications and the approach to patient care.", icon: "user" },
      { title: "Set expectations", description: "Explain consultations, pricing where appropriate and what happens after an enquiry.", icon: "message" },
      { title: "Make booking simple", description: "Keep calls to action clear and ensure the mobile journey feels effortless.", icon: "mobile" }
    ],
    sitemapIntro: "Private clinics benefit from focused treatment pages, clear practitioner profiles and practical patient information.",
    sitemap: ["Home", "About the clinic", "Practitioners", "Treatments", "Individual treatment pages", "Pricing", "FAQs", "Patient guides", "Book or contact"],
    helpCopy: "Evolux creates clinic websites that balance professionalism with warmth. Treatment information is structured around patient questions, trust signals appear where they matter and the route to a consultation remains clear.",
    projectIntro: "Skyn & Glo is represented through client feedback across the site. These available case studies show the same transferable principles: clearer presentation, stronger trust and a more considered journey.",
    projectSlugs: ["ockerby-academy", "marley-doulas"],
    relatedInsights: [
      { slug: "the-importance-of-responsive-webdesign-for-modern-business-growth", label: "Why mobile-friendly web design matters" },
      { slug: "5-signs-your-local-business-website-might-be-losing-you-customers", label: "Signs a local business website may be losing customers" }
    ],
    faqs: [
      ["How many treatment pages should a private clinic website have?", "Create a focused page for each important treatment or closely related treatment group. Patients need enough detail to understand the option and decide whether to ask a question. Avoid creating thin pages that repeat the same copy with minor changes. The <a href=\"/services/web-design\">web design service</a> explains how page structure is planned around user intent."],
      ["Should private clinics publish treatment prices?", "Where pricing is reasonably predictable, showing a clear starting point or range can reduce uncertainty. If treatment varies by consultation, explain that clearly and outline what the initial appointment covers. The same clarity principle is used on the Evolux <a href=\"/packages\">pricing page</a>."],
      ["What trust signals matter for a clinic website?", "Use practitioner profiles, qualifications, real clinic photography, reviews where appropriate, clear contact details and a straightforward explanation of the patient journey. The site should feel reassuring rather than promotional. Read <a href=\"/insights/why-websites-dont-generate-business\">why websites do not generate business</a> if your site feels credible offline but weaker online."],
      ["Should clinics use online booking?", "If the clinic process supports it, online booking can make the journey easier. For more complex treatments, a simple consultation request may be more appropriate. The website should make the right next step obvious for each treatment. A <a href=\"/services/conversion-optimisation\">conversion optimisation audit</a> can help choose the lower-friction route."]
    ]
  },
  {
    slug: "training-providers",
    name: "Training Providers",
    pluralName: "training providers",
    icon: "document",
    title: "Website Design for Training Providers That Makes Courses Easier to Choose",
    metaDescription: "Website design for training providers that organises courses clearly, builds credibility and helps learners or employers take the next step.",
    cardDescription: "Better course journeys for providers selling confidence, outcomes and a clear path to enrolment.",
    intro: "People choosing training want to understand the outcome, the format and whether the provider is credible. Employers may be comparing options for a team; individuals may be investing in a new direction. Your website needs to make the decision easier for both.",
    challengeIntro: "Training websites often contain all the information but make it hard to compare courses, understand outcomes or take the next step.",
    challenges: [
      { title: "A crowded course list", description: "Learners struggle to identify the right level, format or starting point." },
      { title: "Outcomes are unclear", description: "Course content is listed without explaining what the learner will be able to do afterwards." },
      { title: "Different audiences overlap", description: "Individuals and employers are given the same route despite having different questions." },
      { title: "Weak reassurance", description: "Accreditations, trainer expertise and learner feedback are not visible when decisions are made." }
    ],
    needsIntro: "A training website should make the offer easier to compare and the value easier to understand.",
    needs: [
      { title: "Organise courses clearly", description: "Group courses around learner goals, levels and delivery formats.", icon: "layers" },
      { title: "Explain the outcome", description: "Show what learners gain, who the course suits and any relevant accreditation.", icon: "growth" },
      { title: "Support two audiences", description: "Give employers and individual learners distinct routes where their needs differ.", icon: "direct" },
      { title: "Make enrolment straightforward", description: "Use clear dates, availability and calls to action without unnecessary steps.", icon: "launch" }
    ],
    sitemapIntro: "Training providers need a course structure that supports discovery, comparison and a clear route to enrolment.",
    sitemap: ["Home", "Courses", "Individual course pages", "For employers", "For learners", "About", "Accreditations", "FAQs", "Insights", "Contact or enrol"],
    helpCopy: "Evolux organises training websites around the questions learners and employers ask before committing. The result is a clearer offer, stronger proof and an easier route to a conversation or enrolment.",
    projectIntro: "Ockerby Academy is the most relevant example here: a training-led brand that needed a clearer, more professional online presence.",
    projectSlugs: ["ockerby-academy", "manton-executives"],
    relatedInsights: [
      { slug: "the-importance-of-responsive-webdesign-for-modern-business-growth", label: "Why responsive design matters for business growth" },
      { slug: "3-ways-improve-website", label: "Three practical ways to improve a website" }
    ],
    faqs: [
      ["Should every training course have its own page?", "Important courses should usually have a dedicated page with the audience, outcome, content, format, duration and next step. This makes comparison easier and gives search engines a clearer understanding of the training available. Evolux plans this kind of content structure through <a href=\"/services/web-design\">web design and development</a>."],
      ["How should a training provider separate employer and learner journeys?", "Use clear routes from the homepage and explain what changes for each audience. Employers may care about team delivery, reporting and custom programmes. Individual learners may care more about dates, qualifications, progression and payment. The <a href=\"/projects/ockerby-academy\">Ockerby Academy case study</a> shows how a training-led organisation can make its offer easier to understand."],
      ["What should a course page include?", "Include who the course is for, what it covers, what the learner will gain, format, duration, dates or availability, accreditation where relevant, frequently asked questions and a clear enrolment or enquiry route. The <a href=\"/insights/how-to-write-a-web-design-brief-so-that-you-get-your-perfect-site\">web design brief guide</a> can help gather that content before a build starts."],
      ["Can a training website integrate booking or payment?", "Yes. The right setup depends on the course model. Some providers need a simple enquiry process; others benefit from live dates, booking and payment. The website should use the least complicated route that supports the way the business actually works. Any extra functionality can be scoped through the <a href=\"/packages\">website packages</a>."]
    ]
  },
  {
    slug: "trades",
    name: "Trades",
    pluralName: "trades businesses",
    icon: "maintenance",
    title: "Website Design for Trades Businesses That Turns Local Searches Into Enquiries",
    metaDescription: "Website design for trades businesses with clearer services, local proof and a simple mobile journey from search to enquiry.",
    cardDescription: "Straightforward local websites that show quality work, build confidence and make it easy to request a quote.",
    intro: "When someone needs a trades business, the decision is often made quickly. They want to know whether you cover their area, whether your work looks reliable and how to get a quote. A good website removes doubt without getting in the way.",
    challengeIntro: "Many trades websites lose enquiries through basic friction: unclear coverage, weak proof and a contact route that is harder than it needs to be.",
    challenges: [
      { title: "The service area is unclear", description: "Visitors cannot confirm quickly whether the business covers their town or postcode." },
      { title: "Work is hard to judge", description: "A few unlabelled photos do not show the quality, range or finish of completed jobs." },
      { title: "Services are too broad", description: "One general page misses the specific work customers are searching for." },
      { title: "Mobile contact is awkward", description: "Phone numbers, quote requests and key details are difficult to reach on a small screen." }
    ],
    needsIntro: "A trades website should be quick to understand, easy to trust and effortless to use on mobile.",
    needs: [
      { title: "Make coverage obvious", description: "Show the locations you serve and connect them naturally to the services offered.", icon: "location" },
      { title: "Show real work", description: "Use clear project photography, reviews and short examples of completed jobs.", icon: "design" },
      { title: "Create focused service pages", description: "Help customers find the exact job they need rather than a broad list of everything you can do.", icon: "document" },
      { title: "Make quotes easy", description: "Use visible call and enquiry options with a short form that collects useful details.", icon: "message" }
    ],
    sitemapIntro: "Trades businesses usually need a focused structure built around core services, service areas and proof of completed work.",
    sitemap: ["Home", "About", "Services overview", "Individual service pages", "Areas covered", "Recent work", "Reviews", "FAQs", "Request a quote"],
    helpCopy: "Evolux builds trades websites around the way local customers actually search: service first, location second, proof close behind and a clear route to request a quote from a phone.",
    projectIntro: "These case studies are from other sectors, but the same principles transfer: show the quality clearly, make the offer easy to understand and keep the enquiry route obvious.",
    projectSlugs: ["ockerby-academy", "circular-branding"],
    relatedInsights: [
      { slug: "5-signs-your-local-business-website-might-be-losing-you-customers", label: "Signs a local website may be losing customers" },
      { slug: "how-sunderland-businesses-can-stand-out-online-smarter-website-design", label: "How local businesses can stand out online" }
    ],
    faqs: [
      ["What pages should a trades website include?", "Start with a homepage, a page for each important service, an areas-covered page or location pages where useful, an about page, examples of completed work, reviews and a clear quote route. Keep the structure focused on the jobs customers are actively looking for. The <a href=\"/locations\">location pages</a> show how local relevance can be handled without thin copy."],
      ["Do trades businesses need location pages?", "Location pages can help when you genuinely serve several areas and can provide useful local information. Avoid copying the same text across dozens of pages. A smaller set of relevant pages with clear service coverage is more useful for customers and more credible for search engines. The <a href=\"/services/web-design\">web design service</a> can include this structure where it makes sense."],
      ["What photos work best on a trades website?", "Use real completed work wherever possible. Include a mix of wider shots and detail images, label projects clearly and avoid relying on stock photography. Good photos are one of the quickest ways to build confidence in the quality of the work. The <a href=\"/projects/pro-pest-manchester\">Pro Pest Manchester case study</a> shows how authentic service imagery supports trust."],
      ["How can a trades website generate more quote requests?", "Make the core services and coverage obvious, place reviews near decision points and keep the quote form short. Ask for the job type, location, contact details and a brief description. Customers can share more detail once the conversation has started. If you want to find the quickest wins first, request a <a href=\"/free-review\">free website review</a>."]
    ]
  }
];
