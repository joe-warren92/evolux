import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Pricing } from "@/components/sections/Pricing";
import { Footer } from "@/components/sections/Footer";
import { Navigation } from "@/components/layout/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navigation />
      <main>
        <Hero />
        <Intro />
        <FeaturedWork />
        <Services />
        <Process />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
