
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
    
    // Update page metadata for SEO
    document.title = "WriterSure | Premium AI-Powered Content Creation & Digital Services";
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content", 
        "Transform your digital presence with WriterSure's premium AI-powered content creation, ghostwriting, technical writing, and digital services. Expert solutions for businesses worldwide."
      );
    }
    
    // Add additional meta tags for SEO
    const head = document.querySelector('head');
    
    // Add keywords meta tag
    const metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'AI content creation, ghostwriting, technical writing, email marketing, virtual assistance, digital services, content strategy, SEO content, professional writing, blog posts');
    head?.appendChild(metaKeywords);
    
    // Add canonical URL
    const canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', window.location.href);
    head?.appendChild(canonicalLink);
    
    // Add social media meta tags
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'WriterSure | Premium AI-Powered Content Creation & Digital Services');
    head?.appendChild(ogTitle);
    
    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Transform your digital presence with WriterSure\'s premium AI-powered content creation and digital services.');
    head?.appendChild(ogDescription);
    
    const ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.setAttribute('content', 'website');
    head?.appendChild(ogType);
    
    const ogUrl = document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', window.location.href);
    head?.appendChild(ogUrl);
    
    return () => {
      cleanupAnimation();
      // Clean up added meta tags
      if (head) {
        head.removeChild(metaKeywords);
        head.removeChild(canonicalLink);
        head.removeChild(ogTitle);
        head.removeChild(ogDescription);
        head.removeChild(ogType);
        head.removeChild(ogUrl);
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="space-y-0">
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
