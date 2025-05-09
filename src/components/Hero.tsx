
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Premium AI-Powered <span className="text-gradient">Content Creation</span> & Digital Services
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 md:pr-10">
              Transform your digital presence with expert ghostwriting, content creation, 
              and AI solutions tailored to elevate your brand and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary flex items-center gap-2 text-base" asChild>
                <a href="#contact">
                  Get Started <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" className="btn-secondary text-base" asChild>
                <a href="#services">
                  View Our Services
                </a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 relative z-10">
              <div className="absolute -top-4 -right-4 bg-teal-500 text-white text-sm font-medium px-4 py-1 rounded-full">
                Featured Service
              </div>
              <h3 className="text-xl font-bold mb-4">Premium Ghostwriting</h3>
              <p className="text-gray-600 mb-6">
                Expert content creation that captures your authentic voice while maintaining the highest writing standards.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-teal-500 font-bold mr-2">✓</span>
                  <span>Blog posts & articles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 font-bold mr-2">✓</span>
                  <span>Ebooks & guides</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 font-bold mr-2">✓</span>
                  <span>Website copy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 font-bold mr-2">✓</span>
                  <span>LinkedIn & personal branding</span>
                </li>
              </ul>
              <Button className="w-full bg-brand-800 hover:bg-brand-700 text-white" asChild>
                <a href="#services">
                  Learn More
                </a>
              </Button>
            </div>
            <div className="hidden md:block absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-brand-800/20 to-teal-500/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
        
        <div className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-8 text-center">
          <p className="text-gray-500 font-medium w-full mb-4">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            <a href="https://techandauthors.com/about-us/" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-semibold text-lg hover:text-[#8E24AA]">TECH AND AUTHORS</a>
            <a href="https://www.laue-consulting.de/" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-semibold text-lg hover:text-[#8E24AA]">LAUE CONSULTING</a>
            <a href="https://www.flow-frankfurt.de/" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-semibold text-lg hover:text-[#8E24AA]">FLOW FAMILY</a>
            <a href="https://www.coinresearch.ai/" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-semibold text-lg hover:text-[#8E24AA]">COIN RESEARCH</a>
            <a href="https://app.lifeprotocol.io/" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-semibold text-lg hover:text-[#8E24AA]">LIFE PROTOCOL</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
