import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { LeadMagnet } from "@/components/sections/LeadMagnet";
import { Pricing } from "@/components/sections/Pricing";
import { Insights } from "@/components/sections/Insights";
import { VideoSection } from "@/components/sections/VideoSection";
import { Footer } from "@/components/sections/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { useSEO } from "@/lib/seo";

export default function Home() {
  useSEO({
    title: "Web Design Sunderland — Websites That Generate Enquiries",
    description:
      "Evolux is a Sunderland web design studio building conversion-focused websites for UK small businesses. Premium WordPress builds, transparent pricing, real results.",
    canonicalPath: "/",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Evolux Web Design",
      description: "Premium conversion-focused web design studio based in Sunderland, serving UK small businesses.",
      url: "https://evoluxwebdesign.co.uk",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sunderland",
        addressRegion: "Tyne & Wear",
        addressCountry: "GB",
      },
      areaServed: "United Kingdom",
      foundingDate: "2023",
      priceRange: "££",
    },
  });
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <FeaturedWork />
        <Intro />
        <VideoSection />
        <Services />
        <Process />
        <LeadMagnet />
        <Pricing />
        <Insights />
      </main>
      <Footer />
    </div>
  );
}
