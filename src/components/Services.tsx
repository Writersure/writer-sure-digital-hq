
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

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
    icon: "✍️",
    category: "content",
    details: "Our Premium Ghostwriting service delivers high-quality, SEO-optimized content that sounds exactly like you wrote it. We handle everything from blog posts and articles to comprehensive ebooks, engaging website copy, and professional LinkedIn content. Each piece is thoroughly researched, expertly crafted, and carefully edited to ensure it meets your exact specifications and business goals."
  },
  {
    id: 2,
    title: "Virtual Assistance",
    description: "Comprehensive admin support powered by AI to handle your everyday tasks and business operations.",
    features: ["Email management", "Scheduling", "Customer support"],
    icon: "🤝",
    category: "automation",
    details: "Our Virtual Assistance service provides you with dedicated support for administrative tasks, email management, scheduling, and customer support. Leverage AI-powered assistance combined with human oversight to streamline your operations, save time, and ensure important matters are handled promptly and professionally."
  },
  {
    id: 3,
    title: "Email Marketing",
    description: "Strategic email campaigns that nurture leads and convert prospects into loyal customers.",
    features: ["Newsletter copy", "Sequence creation", "A/B testing", "Performance analytics"],
    icon: "📧",
    category: "marketing",
    details: "Our Email Marketing service creates compelling campaigns that engage your audience and drive conversions. We craft persuasive newsletter copy, design effective email sequences, implement A/B testing to optimize performance, and provide detailed analytics to track results. Each campaign is strategically planned to nurture leads and build lasting customer relationships."
  },
  {
    id: 4,
    title: "Chatbot Automation",
    description: "Intelligent chatbots that engage visitors, answer questions, and qualify leads 24/7.",
    features: ["Custom training", "Multi-platform", "Analytics dashboard"],
    icon: "💬",
    category: "automation",
    details: "Our Chatbot Automation service creates intelligent, conversational bots that provide instant responses to customer inquiries around the clock. We customize each chatbot with your brand voice, train it on your specific products or services, integrate it across multiple platforms, and provide comprehensive analytics so you can continuously improve performance and customer satisfaction."
  },
  {
    id: 6,
    title: "Technical Writing",
    description: "Clear, accurate documentation that explains complex concepts in accessible language.",
    features: ["API documentation", "User manuals", "Process guides"],
    icon: "📚",
    category: "technical",
    details: "Our Technical Writing service transforms complex information into clear, user-friendly documentation. We specialize in creating comprehensive API documentation, intuitive user manuals, and detailed process guides. Our technical writers have expertise across various industries and can communicate sophisticated concepts in accessible language that your audience will understand."
  },
  {
    id: 7,
    title: "Social Media Marketing",
    description: "Strategic content and community management across all major social platforms.",
    features: ["Content calendar", "Engagement strategy", "Performance tracking"],
    icon: "📱",
    category: "marketing",
    details: "Our Social Media Marketing service builds your brand presence across key platforms with strategic content creation and community management. We develop a comprehensive content calendar, implement targeted engagement strategies, and track performance metrics to continuously optimize your social media presence. Our approach focuses on creating meaningful connections with your audience while driving measurable business results."
  },
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedService, setSelectedService] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const filteredServices = activeCategory === "all" 
    ? servicesList 
    : servicesList.filter(service => service.category === activeCategory);

  const handleServiceDetails = (service) => {
    setSelectedService(service);
    setIsDialogOpen(true);
  };

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
                onClick={() => handleServiceDetails(service)}
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
          <Button className="btn-primary inline-flex items-center gap-2 bg-[#8E24AA] hover:bg-[#6A1B9A]" asChild>
            <a href="#contact">
              Schedule a Consultation <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* Service Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#8E24AA]">
              {selectedService?.title}
            </DialogTitle>
          </DialogHeader>
          <DialogDescription>
            <p className="text-gray-700 my-4">
              {selectedService?.details}
            </p>
            <div className="my-4">
              <p className="font-medium text-[#8E24AA] mb-2">Key Features:</p>
              <ul className="space-y-2">
                {selectedService?.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#FF7043] font-bold mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button 
              className="w-full mt-4 bg-[#8E24AA] hover:bg-[#6A1B9A] text-white"
              onClick={() => setIsDialogOpen(false)}
              asChild
            >
              <a href="#contact">Request This Service</a>
            </Button>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
