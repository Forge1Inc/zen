import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Gallery from "@/components/sections/Gallery";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import ServiceArea from "@/components/sections/ServiceArea";
import QuoteSection from "@/components/sections/QuoteSection";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <Gallery />
      <WhyUs />
      <Testimonials />
      <ServiceArea />
      <QuoteSection />
      <FinalCTA />
    </main>
  );
}
