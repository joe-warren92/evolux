import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { LeadMagnet } from "@/components/sections/LeadMagnet";
import { Pricing } from "@/components/sections/Pricing";
import { Footer } from "@/components/sections/Footer";
import { Navigation } from "@/components/layout/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <FeaturedWork />
        <Intro />
        <Services />
        <Process />
        <LeadMagnet />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
