import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import WorkSection from "@/components/sections/WorkSection";
import EditorialBreak from "@/components/sections/EditorialBreak";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import Testimonials from "@/components/sections/Testimonials";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import SeoKeywords from "@/components/sections/SeoKeywords";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <WorkSection />
      <EditorialBreak />
      <AboutSection />
      <ServicesSection />
      <Testimonials />
      <ContactSection />
      <Footer />
      <SeoKeywords />
    </>
  );
}
