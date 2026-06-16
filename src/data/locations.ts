export interface LocationPage {
  slug: string;
  city: string;
  region: string;
  locationLine: string;
  archiveLabel: string;
  archiveDescription: string;
  heroDescription: string;
  localHeading: string;
  localParagraphs: string[];
  marketDescription: string;
  seoDescription: string;
  areas: string[];
  marketHeading: string;
  marketIntro: string;
  priorities: {
    title: string;
    description: string;
    icon: string;
  }[];
  localSeoSection: {
    kicker: string;
    heading: string;
    intro: string;
    points: {
      title: string;
      description: string;
    }[];
    note: string;
  };
  caseStudySlugs: string[];
  faqs: [string, string][];
  testimonial: {
    quote: string;
    name: string;
    company: string;
  };
}

export const LOCATION_PAGES: LocationPage[] = [
  {
    slug: "sunderland",
    city: "Sunderland",
    region: "Tyne & Wear",
    locationLine: "Sunderland, Tyne & Wear, SR1",
    archiveLabel: "Home base",
    archiveDescription: "Our home city. We know the Sunderland business landscape and have worked with local companies across professional services, trades, and retail.",
    heroDescription: "Evolux is a Sunderland-based web design studio. We build conversion-focused websites for local businesses that want to win more enquiries, not just more traffic.",
    localHeading: "We know Sunderland business.",
    localParagraphs: [
      "Evolux was founded in Sunderland by Joe in 2023. We've worked with businesses across the city and understand what the Sunderland market looks like from the inside.",
      "That local knowledge informs every project. We know how local customers search and what it takes to stand out in the North East market."
    ],
    marketDescription: "Every Sunderland project includes the same complete build: design, development, performance, SEO, and analytics.",
    seoDescription: "Conversion-focused web design for Sunderland businesses. Custom websites, local SEO foundations and clear pricing from Evolux Web Design.",
    areas: ["City centre", "Roker", "Seaburn", "Ashbrooke", "Ryhope", "Doxford Park", "Washington", "Houghton-le-Spring"],
    marketHeading: "A stronger website for a changing city.",
    marketIntro: "Sunderland businesses are competing for attention across the city, Wearside and the wider North East. The website has to support referrals, strengthen local search visibility and reassure customers who compare several local options before making contact.",
    priorities: [
      { title: "Local credibility", description: "Show clearly where you are based, the areas you cover and why Sunderland customers should trust your business.", icon: "location" },
      { title: "Referral confidence", description: "Give referred visitors the proof they need when they check your website before picking up the phone.", icon: "shield" },
      { title: "Service-led SEO", description: "Build a clear structure around the services and locations your Sunderland customers actually search for.", icon: "seo" }
    ],
    localSeoSection: {
      kicker: "Sunderland search intent",
      heading: "What Sunderland customers need to see before they enquire.",
      intro: "A Sunderland website has to work for people who already know the area, compare local options quickly and often arrive after a recommendation. The page structure should reinforce local trust without making the business feel small.",
      points: [
        { title: "Show your Sunderland relevance clearly", description: "Mention the parts of the city and Wearside you genuinely serve, but connect that local detail to useful service information rather than repeating place names for search engines." },
        { title: "Support referral traffic", description: "Many local customers arrive after hearing your name elsewhere. Your website should quickly confirm what you do, who you help and why you are credible enough to contact." },
        { title: "Build around local service searches", description: "Service pages, case studies and FAQs should answer the searches Sunderland customers actually make before they choose a supplier." }
      ],
      note: "For Sunderland businesses, the strongest local SEO usually comes from specific service pages, genuine proof and a website that makes the business feel established in the area."
    },
    caseStudySlugs: ["manton-executives", "circular-branding"],
    faqs: [
      ["Are you actually based in Sunderland?", "Yes. Evolux was founded in Sunderland and works with businesses across the city, Wearside and the wider North East. That local base helps when planning <a href=\"/services/web-design\">web design</a>, local SEO and messaging for Sunderland customers."],
      ["Can you help my Sunderland business rank for local searches?", "Local SEO foundations are included in each build: search-friendly structure, service relevance, location signals, metadata, performance and Google Business alignment. The article on <a href=\"/insights/how-a-sunderland-web-design-agency-helps-small-businesses-grow\">how a Sunderland web design agency helps small businesses grow</a> explains the wider approach."],
      ["Do you meet Sunderland clients in person?", "Yes, where it adds value. In-person meetings can be arranged for Sunderland and nearby clients, particularly for discovery or larger projects. Design reviews and handover sessions usually stay online so decisions remain clear and projects keep moving. You can <a href=\"/contact\">contact Joe</a> if a local meeting would help the project."],
      ["Do you work with businesses outside the city centre?", "Yes. Evolux works with businesses across Sunderland and nearby areas including Washington, Houghton-le-Spring and the wider Wearside area. The website strategy is shaped around the locations your customers use when searching, then connected back to clear <a href=\"/services/web-design\">web design</a> and service content."],
      ["Can I see a Sunderland website project?", "Yes. <a href=\"/projects/manton-executives\">Manton Executives</a> is a Sunderland-based virtual PA agency. Their website was redesigned to make the team, services and client feedback feel clearer, more distinctive and easier to enquire about."],
      ["What should I do before requesting a quote?", "Start with a <a href=\"/free-review\">free website review</a>. Joe will assess the current website against the factors that affect clarity, trust and conversion, then send a personalised video with practical priorities."]
    ],
    testimonial: {
      quote: "Joe was so patient and guided me through everything, making it all feel super easy. It's all those little touches that made the final site so perfect.",
      name: "Luke Manton",
      company: "Manton Executives, Sunderland"
    }
  },
  {
    slug: "newcastle-upon-tyne",
    city: "Newcastle upon Tyne",
    region: "Tyne & Wear",
    locationLine: "Newcastle upon Tyne, Tyne & Wear",
    archiveLabel: "Serving",
    archiveDescription: "Supporting Newcastle businesses with conversion-focused web design across Quayside, Jesmond, and the city centre.",
    heroDescription: "Evolux creates conversion-focused websites for Newcastle businesses that want a clearer position, stronger credibility, and more valuable enquiries.",
    localHeading: "Built for Newcastle business.",
    localParagraphs: [
      "Newcastle is one of the North East's most competitive business centres. A credible website needs to do more than look polished: it needs to make your value clear quickly.",
      "From established professional services to ambitious independent businesses, we design websites that help Newcastle companies stand apart and turn interest into enquiries."
    ],
    marketDescription: "Every Newcastle project includes a complete strategic build: design, development, performance, SEO, and analytics.",
    seoDescription: "Premium web design for Newcastle upon Tyne businesses. Conversion-focused websites with local SEO foundations, strategy and ongoing support.",
    areas: ["City centre", "Quayside", "Ouseburn", "Jesmond", "Gosforth", "Heaton", "Sandyford", "Newcastle Business Park"],
    marketHeading: "Stand out in a busy Newcastle market.",
    marketIntro: "Newcastle customers have plenty of choice, especially across professional services, hospitality and growing independent brands. A polished website is only the starting point: your positioning, proof and conversion path need to be clear within seconds.",
    priorities: [
      { title: "Sharper positioning", description: "Communicate why your business is the right choice when Newcastle customers compare several credible options.", icon: "target" },
      { title: "Premium first impression", description: "Match the quality of your service with a website that feels considered, confident and established.", icon: "design" },
      { title: "Local search structure", description: "Create useful service and location signals without filling the website with repetitive SEO copy.", icon: "search" }
    ],
    localSeoSection: {
      kicker: "Newcastle search intent",
      heading: "Competing in Newcastle means making your difference obvious.",
      intro: "Newcastle has a dense mix of agencies, consultants, professional services, independents and regional brands. A website needs to explain why your business is the right fit before a visitor drifts back to the search results.",
      points: [
        { title: "Position against credible alternatives", description: "Newcastle customers often compare several polished businesses. Your homepage and service pages should make the difference in your approach, audience and results easy to understand." },
        { title: "Use location without looking generic", description: "Local relevance should appear naturally through service areas, project examples, testimonials and useful page copy, not through repetitive city-name stuffing." },
        { title: "Make proof easy to scan", description: "Reviews, project outcomes and clear service detail help Newcastle visitors decide whether your business feels established enough to contact." }
      ],
      note: "For Newcastle businesses, SEO and conversion work best together: clear positioning helps search visitors understand why you are worth choosing."
    },
    caseStudySlugs: ["circular-branding", "manton-executives"],
    faqs: [
      ["Do you work with businesses across Newcastle upon Tyne?", "Yes. Evolux supports businesses across Newcastle city centre and surrounding areas such as Jesmond, Gosforth, Heaton, Ouseburn and the Quayside. The process can run remotely or include North East meetings where useful. You can see how projects are handled on the <a href=\"/about\">about page</a>."],
      ["How can a Newcastle business stand out in a competitive market?", "A stronger website combines clear positioning, specific service pages, credible proof and an easy route to enquiry. Design matters, but the commercial structure matters just as much. Explore the <a href=\"/projects\">web design projects</a> to see how those elements come together."],
      ["Can you help with Newcastle local SEO?", "Yes. Each build includes technical and on-page SEO foundations, performance work, metadata and a structure that supports the services and areas relevant to your business. For competitive searches, Evolux can also recommend a content plan and supporting <a href=\"/insights\">insight articles</a>."],
      ["Will we need to travel to Sunderland for meetings?", "No. Discovery, strategy, design reviews and handover can all be completed through video calls and shared design links. Newcastle meetings can also be discussed where an in-person session would be useful. If you are ready to talk through the project, <a href=\"/contact\">contact Evolux</a>."],
      ["Do you work with established companies as well as smaller businesses?", "Yes. The important factor is whether the website needs to improve trust, differentiation or enquiries. Evolux scopes the build around your goals, from a focused launch site to a broader strategic rebuild. Compare the <a href=\"/packages\">website packages</a> for a starting point."],
      ["Can you review our current website before we commit?", "Yes. Request a <a href=\"/free-review\">free website review</a> and Joe will send a personalised video outlining the most important opportunities for clarity, credibility and conversion."]
    ],
    testimonial: {
      quote: "Clear communication throughout, they were proactive, responsive and their attention to detail was second to none.",
      name: "Steven Dunn",
      company: "Circular Branding Group"
    }
  },
  {
    slug: "durham",
    city: "Durham",
    region: "County Durham",
    locationLine: "Durham, County Durham",
    archiveLabel: "Serving",
    archiveDescription: "Working with professional services, tourism, and retail businesses across the city and county.",
    heroDescription: "Evolux builds premium, conversion-focused websites for Durham businesses that need to earn trust quickly and generate more qualified enquiries.",
    localHeading: "Designed for Durham business.",
    localParagraphs: [
      "Durham has a distinctive mix of professional services, independent businesses, tourism, and growing regional companies. Each needs a website that feels credible and specific to its audience.",
      "We combine commercial clarity with premium design so your website gives customers a clear reason to choose your business."
    ],
    marketDescription: "Every Durham project includes the same complete build: design, development, performance, SEO, and analytics.",
    seoDescription: "Web design for Durham and County Durham businesses. Premium, conversion-focused websites with local SEO foundations and transparent pricing.",
    areas: ["Durham City", "Neville's Cross", "Elvet", "Framwellgate Moor", "Belmont", "Chester-le-Street", "Seaham", "County Durham"],
    marketHeading: "Build trust across city and county.",
    marketIntro: "Durham businesses often serve customers across a wider area than the city itself. The right website needs to feel locally relevant without becoming narrow, helping customers understand your expertise whether they find you through Google, recommendation or repeat business.",
    priorities: [
      { title: "County-wide clarity", description: "Explain the areas you serve without diluting the main message or overwhelming visitors with location pages.", icon: "location" },
      { title: "Trust-led design", description: "Use testimonials, case studies and a calm visual hierarchy to make the next step feel low risk.", icon: "shield" },
      { title: "Mobile enquiries", description: "Make it simple for customers to understand your service and get in touch while searching on a phone.", icon: "mobile" }
    ],
    localSeoSection: {
      kicker: "Durham search intent",
      heading: "Durham websites need to balance city trust with county-wide reach.",
      intro: "Many Durham businesses serve customers beyond the city centre. The website should feel locally grounded while making it clear which towns, services and customer types are genuinely relevant.",
      points: [
        { title: "Explain the real service area", description: "Durham, Chester-le-Street, Seaham and wider County Durham can be represented in a useful way when the copy explains how and why those areas matter to customers." },
        { title: "Reduce uncertainty for careful buyers", description: "Professional services and local owner-managed businesses benefit from clear process pages, FAQs and proof that make the enquiry feel lower risk." },
        { title: "Create useful local content", description: "Durham SEO improves when location content answers real questions about availability, service scope, experience and customer fit." }
      ],
      note: "A strong Durham location strategy should avoid duplicated town pages and focus on relevance, proof and genuinely useful local information."
    },
    caseStudySlugs: ["marley-doulas", "ockerby-academy"],
    faqs: [
      ["Do you work with businesses across County Durham?", "Yes. Evolux works with businesses in Durham City and across County Durham, including nearby towns and service areas. Your website can be structured around the places your customers search for without relying on thin or repetitive location copy. The wider <a href=\"/locations\">locations hub</a> shows the areas Evolux covers."],
      ["Can you help a Durham service business get more enquiries?", "Yes. The website is planned around the questions, trust signals and next steps that matter before a customer makes contact. That includes clear service pages, proof, mobile usability and a focused enquiry route. The <a href=\"/services/conversion-optimisation\">conversion optimisation service</a> explains the approach in more detail."],
      ["Is local SEO included in a Durham website build?", "Yes. Evolux includes the technical and on-page foundations needed for local visibility: page structure, metadata, performance, schema considerations and Google Business alignment. More competitive markets may benefit from ongoing content and case studies, which can be planned within the <a href=\"/services/web-design\">web design service</a>."],
      ["Can the site cover several County Durham areas?", "Yes. Where it is useful for customers, the site can explain the towns and areas you serve with a clear, sensible structure. The goal is to improve relevance and usability, not publish near-identical pages that add little value. The <a href=\"/packages\">website packages</a> give a starting point for how page count affects scope."],
      ["Do you design websites for tourism and hospitality businesses?", "Yes. Durham's visitor economy creates particular needs around first impressions, mobile journeys, bookings and location information. Evolux can also support professional services, healthcare, trades and owner-managed businesses."],
      ["How do we start?", "A <a href=\"/free-review\">free website review</a> is a useful first step. Joe will identify the biggest opportunities on your existing site and explain which changes are likely to make the most difference."]
    ],
    testimonial: {
      quote: "We absolutely LOVE our new website. Joe has a real eye for attention to detail and it shows within his work.",
      name: "Dannii Dunn",
      company: "Ockerby Academy"
    }
  },
  {
    slug: "gateshead",
    city: "Gateshead",
    region: "Tyne & Wear",
    locationLine: "Gateshead, Tyne & Wear",
    archiveLabel: "Serving",
    archiveDescription: "From the Quays to Team Valley, supporting Gateshead businesses that want websites that work harder.",
    heroDescription: "Evolux designs websites for Gateshead businesses that want to present themselves with more confidence, reduce conversion friction, and generate better enquiries.",
    localHeading: "Websites for Gateshead business.",
    localParagraphs: [
      "Gateshead businesses operate across a varied and competitive market, from Team Valley and the town centre to the wider Tyneside area.",
      "We build websites that make your offer easier to understand, strengthen the signals customers use to judge credibility, and give visitors a clear next step."
    ],
    marketDescription: "Every Gateshead project includes a complete build: design, development, performance, SEO, and analytics.",
    seoDescription: "Conversion-focused web design for Gateshead businesses. Bespoke websites, local SEO foundations and practical strategy from Evolux.",
    areas: ["Gateshead Quays", "Team Valley", "Low Fell", "Birtley", "Felling", "Whickham", "Blaydon", "Metrocentre"],
    marketHeading: "Make a clearer first impression.",
    marketIntro: "From Team Valley firms to businesses serving customers across Tyneside, Gateshead companies need websites that explain value quickly. Visitors should be able to understand what you do, see evidence that you are credible and know exactly how to take the next step.",
    priorities: [
      { title: "B2B clarity", description: "Turn complex services into a clear, commercially useful journey for decision-makers and local customers.", icon: "briefcase" },
      { title: "Fast mobile access", description: "Prioritise the pages, details and actions people need when searching locally on a phone.", icon: "speed" },
      { title: "Proof before enquiry", description: "Use relevant work, testimonials and strong service detail to reduce hesitation before contact.", icon: "star" }
    ],
    localSeoSection: {
      kicker: "Gateshead search intent",
      heading: "Gateshead businesses often need to speak to both local and Tyneside buyers.",
      intro: "A Gateshead website should make it clear whether you serve the town, Team Valley, Newcastle, wider Tyneside or a specialist B2B market. That clarity helps both search visibility and enquiry quality.",
      points: [
        { title: "Clarify the business footprint", description: "If your customers come from Gateshead, Newcastle and the wider region, your website should explain that coverage without scattering attention across thin location pages." },
        { title: "Make complex offers easier to buy", description: "Industrial, trade and B2B services often need clearer page structure so visitors can understand the offer before calling or sending a brief." },
        { title: "Use proof close to the decision", description: "Relevant testimonials, case studies and sector-specific examples should sit near key enquiry points, not hidden away at the bottom of the site." }
      ],
      note: "For Gateshead businesses, the website should help people understand whether you are local, regional or specialist within the first few seconds."
    },
    caseStudySlugs: ["circular-branding", "manton-executives"],
    faqs: [
      ["Do you work with businesses in Gateshead and Team Valley?", "Yes. Evolux supports businesses across Gateshead, Team Valley and the wider Tyneside area. Projects can run remotely, with North East meetings available where a face-to-face session would be useful. The <a href=\"/contact\">contact page</a> is the best place to start a conversation."],
      ["Can you improve a B2B website that feels unclear?", "Yes. Many B2B websites describe services without helping a buyer understand the value or next step. Evolux restructures the content around clearer positioning, credible proof and enquiry paths. The <a href=\"/projects/circular-branding\">Circular Branding Group case study</a> is a useful example."],
      ["Do you include local SEO for Gateshead businesses?", "Yes. Each build includes clean page structure, metadata, technical foundations, performance work and Google Business alignment. The site can also support nearby service areas where those locations are genuinely relevant to customers. The <a href=\"/services/web-design\">web design service</a> includes those foundations."],
      ["Can the website target both Gateshead and Newcastle customers?", "Yes. Many Gateshead businesses serve customers across Tyneside. The site architecture can reflect that wider footprint while keeping the main message focused and avoiding duplicated location content. The <a href=\"/locations/newcastle-upon-tyne\">Newcastle web design</a> page shows how nearby location intent can be handled separately."],
      ["Can you work with our existing branding?", "Yes. If the current identity is working, Evolux can apply it more consistently online. If it needs refinement, the <a href=\"/services/branding\">brand identity service</a> can be included within the wider website project."],
      ["Can you identify the most urgent issues first?", "Yes. Start with a <a href=\"/free-review\">free website review</a>. Joe will send a personalised video with practical priorities for your existing site."]
    ],
    testimonial: {
      quote: "Joe's patience, communication, attention to detail and flare for design combine perfectly to create the ideal online presence.",
      name: "Vicky Jones",
      company: "McClelland's Bathroom and Tile Studio"
    }
  },
  {
    slug: "middlesbrough",
    city: "Middlesbrough",
    region: "Teesside",
    locationLine: "Middlesbrough, Teesside",
    archiveLabel: "Serving",
    archiveDescription: "Web design and development for Teesside businesses ready to turn their site into a lead-generating asset.",
    heroDescription: "Evolux creates conversion-focused websites for Middlesbrough and Teesside businesses that want a stronger online position and a clearer path to enquiry.",
    localHeading: "Supporting Teesside business.",
    localParagraphs: [
      "Middlesbrough and the wider Teesside area are home to ambitious businesses across professional services, construction, industry, healthcare, and hospitality.",
      "We design websites that explain your value clearly, feel credible from the first visit, and support the way customers search and compare businesses locally."
    ],
    marketDescription: "Every Middlesbrough project includes the same complete build: design, development, performance, SEO, and analytics.",
    seoDescription: "Web design for Middlesbrough and Teesside businesses. Premium websites built around trust, performance, local search and enquiry conversion.",
    areas: ["Middlesbrough", "Teesside", "Stockton-on-Tees", "Yarm", "Redcar", "Billingham", "Thornaby", "Stokesley"],
    marketHeading: "A better digital position for Teesside.",
    marketIntro: "Middlesbrough businesses often serve customers across Teesside rather than one postcode. A successful website needs to communicate that reach clearly, present the business with confidence and make it easy for local customers to find the right service.",
    priorities: [
      { title: "Teesside reach", description: "Reflect the real service area clearly, from Middlesbrough to Stockton, Redcar and surrounding towns.", icon: "globe" },
      { title: "Service confidence", description: "Replace generic claims with clear service detail, strong proof and a more credible first impression.", icon: "shield" },
      { title: "Search foundations", description: "Build a scalable site structure that can support important services and local search intent over time.", icon: "seo" }
    ],
    localSeoSection: {
      kicker: "Teesside search intent",
      heading: "Middlesbrough websites need room for wider Teesside visibility.",
      intro: "Many Middlesbrough businesses serve customers across Teesside, so the website should support that wider search footprint while still feeling specific, credible and easy to understand.",
      points: [
        { title: "Plan around Teesside, not just one town", description: "Middlesbrough, Stockton, Redcar, Yarm and Billingham can all matter, but each area should be included because it helps customers understand your real coverage." },
        { title: "Strengthen service depth", description: "Detailed service pages help local visitors compare your business properly and give search engines clearer context about what you offer." },
        { title: "Make trust signals more visible", description: "For Teesside sectors such as construction, healthcare, hospitality and professional services, reviews and project evidence should be easy to find before enquiry." }
      ],
      note: "A Middlesbrough SEO strategy works best when service depth, local reach and proof are planned together rather than bolted on after launch."
    },
    caseStudySlugs: ["circular-branding", "ockerby-academy"],
    faqs: [
      ["Do you work with businesses across Teesside?", "Yes. Evolux works with businesses in Middlesbrough and across Teesside, including Stockton-on-Tees, Redcar, Yarm, Billingham and surrounding areas. The website can reflect your genuine service area in a clear, useful way. Browse the <a href=\"/locations\">locations hub</a> for wider coverage."],
      ["Can you help my Middlesbrough business appear more professional online?", "Yes. A premium website should make your offer easy to understand, support it with relevant proof and give visitors a clear route to contact. Evolux combines strategy, design and development so the finished site feels credible rather than template-led. You can see examples in the <a href=\"/projects\">project archive</a>."],
      ["Is local SEO included for Middlesbrough websites?", "Yes. Each project includes on-page and technical SEO foundations, performance work, metadata, location signals and Google Business alignment. The structure can be expanded later with useful service pages and <a href=\"/insights\">insight content</a>."],
      ["Can one website cover Middlesbrough, Stockton and Redcar?", "Yes, if those areas reflect how your business genuinely operates. The priority is a helpful structure for customers rather than repeating the same wording across multiple pages. Evolux can recommend which locations need dedicated content and which belong within a broader service-area section."],
      ["Do you work with industrial and professional service businesses?", "Yes. Evolux works with service-based businesses across several sectors, including professional services, construction, industry, healthcare and hospitality. The content and design are tailored around the buying decision in your market. The <a href=\"/industries\">industry website guides</a> explain how different sectors need different trust signals."],
      ["What is the best first step?", "Request a <a href=\"/free-review\">free website review</a>. Joe will assess your existing website and send a personalised video covering the most useful improvements."]
    ],
    testimonial: {
      quote: "Evolux were great throughout the process, from an initial call after my enquiry to working with me on the final design and implementing changes.",
      name: "Liam Walker",
      company: "VIW Projects"
    }
  },
  {
    slug: "nationwide",
    city: "Nationwide",
    region: "United Kingdom",
    locationLine: "Working with businesses across the UK",
    archiveLabel: "UK-wide",
    archiveDescription: "We work with clients across the UK via video call. Location has never been a barrier to great work.",
    heroDescription: "Evolux works with businesses across the UK. Our remote process keeps strategy, design reviews, and delivery clear wherever your team is based.",
    localHeading: "Good work travels well.",
    localParagraphs: [
      "Location should not limit the quality of your website. Evolux works with businesses throughout the UK using a clear, collaborative remote process.",
      "Discovery calls, design reviews, feedback, training, and handover are all handled online, making each stage easy to follow while keeping the project moving."
    ],
    marketDescription: "Every UK-wide project includes the same complete build: design, development, performance, SEO, and analytics.",
    seoDescription: "UK-wide web design for service businesses. Premium conversion-focused websites delivered through a clear, collaborative remote process.",
    areas: ["North East", "North West", "Yorkshire", "Midlands", "London", "South East", "South West", "Scotland"],
    marketHeading: "Remote delivery without the distance.",
    marketIntro: "Evolux works with UK businesses that value close collaboration but do not need an agency on the same street. A structured remote process keeps strategy, feedback and delivery clear while giving each business direct access to Joe throughout the project.",
    priorities: [
      { title: "Direct collaboration", description: "Work directly with Joe from discovery to launch, with clear decisions and no layers of account management.", icon: "message" },
      { title: "Shared design reviews", description: "Review layouts online, leave focused feedback and keep every design decision easy to follow.", icon: "design" },
      { title: "Reliable handover", description: "Launch with training, documentation and a clear support period wherever your team is based.", icon: "launch" }
    ],
    localSeoSection: {
      kicker: "UK-wide search intent",
      heading: "A nationwide website still needs a specific position.",
      intro: "When a business serves customers across the UK, the website has to do more than list locations. It needs a clear proposition, strong service pages and proof that reassures people who may never meet you in person.",
      points: [
        { title: "Avoid vague national messaging", description: "UK-wide service copy should still be specific about who the business helps, what problem it solves and why someone should enquire." },
        { title: "Build depth around services", description: "National visibility usually depends on strong service pages, useful insight content, case studies and technical foundations rather than dozens of shallow location pages." },
        { title: "Make remote trust explicit", description: "Process, communication, reviews and project examples matter more when visitors are deciding whether to work with a studio remotely." }
      ],
      note: "For UK-wide businesses, the strongest SEO strategy is usually topic depth and trust-building content, supported by location pages only where they genuinely help users."
    },
    caseStudySlugs: ["marley-doulas", "ockerby-academy"],
    faqs: [
      ["Do you work with businesses outside the North East?", "Yes. Evolux works with businesses throughout the UK. Discovery, strategy, design reviews, feedback and handover can all be handled remotely, so the quality of the project does not depend on location. The <a href=\"/projects\">case studies</a> include work delivered for clients outside Sunderland."],
      ["How does a remote website project work?", "Projects begin with a strategy call, followed by shared design reviews and regular progress updates. Feedback is kept clear and documented, while Joe remains your direct point of contact throughout. The <a href=\"/about\">about page</a> explains more about how Evolux works."],
      ["Will we still get a personal service?", "Yes. Evolux is intentionally small, so you work directly with Joe rather than passing through layers of account management. That makes communication clearer and keeps the work closely connected to your business goals. The <a href=\"/about\">about page</a> explains why the founder-led approach matters."],
      ["Can you support a website after launch?", "Yes. Each website includes a defined post-launch support period, and ongoing care can be arranged where needed. The <a href=\"/services/website-maintenance\">website maintenance service</a> covers updates, backups and ongoing support."],
      ["Can we see examples of remotely delivered projects?", "Yes. <a href=\"/projects/marley-doulas\">Marley Doulas</a> serves Surrey Hills and South London, while <a href=\"/projects/ockerby-academy\">Ockerby Academy</a> is based in West Yorkshire. Both demonstrate how a clear remote process can still produce highly personal work."],
      ["Can you review our current site before a call?", "Yes. Request a <a href=\"/free-review\">free website review</a> and Joe will send a personalised video with the most important opportunities for your website."]
    ],
    testimonial: {
      quote: "Joe's calm, kind, and supportive nature made the entire process stress-free. His level of expertise and professionalism is truly unmatched.",
      name: "Ian Bowman",
      company: "Bowman's Premium"
    }
  }
];
