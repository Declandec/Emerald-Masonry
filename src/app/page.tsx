import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import AboutIntro from "@/components/sections/AboutIntro";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import WorkSection from "@/components/sections/WorkSection";
import EditorialBreak from "@/components/sections/EditorialBreak";
import GallerySection from "@/components/sections/GallerySection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import CtaBanner from "@/components/sections/CtaBanner";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import SeoKeywords from "@/components/sections/SeoKeywords";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <TrustBar />
      <AboutIntro />
      <AboutSection />
      <ServicesSection />
      <BenefitsSection />
      <WorkSection />
      <EditorialBreak />
      <GallerySection />
      <WhyChooseSection />
      <CtaBanner />
      <ContactSection />
      <Footer />
      <SeoKeywords />
    </>
  );
}
