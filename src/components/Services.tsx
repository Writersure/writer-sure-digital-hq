
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const servicesList = [
  {
    id: 1,
    title: "Premium Ghostwriting",
    description: "Expert content creation that captures your authentic voice while maintaining the highest writing standards.",
    features: [
      "Blog posts & articles", 
      "Ebooks & guides", 
      "Website copy", 
      "LinkedIn & personal branding"
    ],
    icon: "📝",
    category: "content"
  },
  {
    id: 2,
    title: "Virtual Assistance",
    description: "Comprehensive admin support powered by AI to handle your everyday tasks and business operations.",
    features: ["Email management", "Scheduling", "Customer support"],
    icon: "👩‍💼",
    category: "automation"
  },
  {
    id: 3,
    title: "Email Marketing",
    description: "Strategic email campaigns that nurture leads and convert prospects into loyal customers.",
    features: ["Newsletter copy", "Sequence creation", "A/B testing", "Performance analytics"],
    icon: "📧",
    category: "marketing"
  },
  {
    id: 4,
    title: "Chatbot Automation",
    description: "Intelligent chatbots that engage visitors, answer questions, and qualify leads 24/7.",
    features: ["Custom training", "Multi-platform", "Analytics dashboard"],
    icon: "🤖",
    category: "automation"
  },
  {
    id: 5,
    title: "Technical Services",
    description: "Technical development solutions from basic scripts to advanced application features.",
    features: ["Web development", "Automation scripts", "API integration"],
    icon: "💻",
    category: "technical"
  },
  {
    id: 6,
    title: "Technical Writing",
    description: "Clear, accurate documentation that explains complex concepts in accessible language.",
    features: ["API documentation", "User manuals", "Process guides"],
    icon: "📘",
    category: "technical"
  },
  {
    id: 7,
    title: "Social Media Marketing",
    description: "Strategic content and community management across all major social platforms.",
    features: ["Content calendar", "Engagement strategy", "Performance tracking"],
    icon: "📱",
    category: "marketing"
  },
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredServices = activeCategory === "all" 
    ? servicesList 
    : servicesList.filter(service => service.category === activeCategory);

  return (
    <section id="services" className="bg-white py-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comprehensive AI-Powered <span className="text-gradient">Digital Services</span>
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            From premium content creation to technical solutions, our services are designed to 
            elevate your brand and drive business growth in the digital landscape.
          </p>
          
          <div className="inline-flex flex-wrap justify-center gap-2 bg-brand-50 rounded-lg p-2">
            <button 
              className={`px-4 py-2 rounded-md ${activeCategory === "all" ? "bg-[#8E24AA] text-white" : "hover:bg-brand-100"}`}
              onClick={() => setActiveCategory("all")}
            >
              All Services
            </button>
            <button 
              className={`px-4 py-2 rounded-md ${activeCategory === "content" ? "bg-[#8E24AA] text-white" : "hover:bg-brand-100"}`}
              onClick={() => setActiveCategory("content")}
            >
              Content
            </button>
            <button 
              className={`px-4 py-2 rounded-md ${activeCategory === "technical" ? "bg-[#8E24AA] text-white" : "hover:bg-brand-100"}`}
              onClick={() => setActiveCategory("technical")}
            >
              Technical
            </button>
            <button 
              className={`px-4 py-2 rounded-md ${activeCategory === "marketing" ? "bg-[#8E24AA] text-white" : "hover:bg-brand-100"}`}
              onClick={() => setActiveCategory("marketing")}
            >
              Marketing
            </button>
            <button 
              className={`px-4 py-2 rounded-md ${activeCategory === "automation" ? "bg-[#8E24AA] text-white" : "hover:bg-brand-100"}`}
              onClick={() => setActiveCategory("automation")}
            >
              Automation
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="service-card flex flex-col h-full transform hover:-translate-y-1 hover:border-[#FF7043]/20">
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-[#8E24AA]">{service.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
              <div className="mb-6">
                <p className="font-medium text-[#8E24AA] mb-2">Key Features:</p>
                <ul className="space-y-1">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <span className="text-[#FF7043] font-bold mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button 
                className="flex items-center justify-center gap-2 w-full mt-auto bg-white hover:bg-[#FFA726]/10 text-[#8E24AA] border border-[#8E24AA]/20" 
                variant="outline"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg mb-6">
            Not sure which service is right for you? Let's discuss your specific needs.
          </p>
          <Button className="btn-primary inline-flex items-center gap-2 bg-[#8E24AA] hover:bg-[#6A1B9A]">
            Schedule a Consultation <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
