
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { initAnimateOnScroll } from "@/utils/animateOnScroll";

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations
    const cleanupAnimation = initAnimateOnScroll();
    
    // Update page title for SEO
    document.title = "WriterSure | AI Content & Digital Services Agency";
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content", 
        "Premium AI-powered content creation, ghostwriting, technical writing, chatbots, and digital services for businesses worldwide."
      );
    }
    
    return () => {
      cleanupAnimation();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
