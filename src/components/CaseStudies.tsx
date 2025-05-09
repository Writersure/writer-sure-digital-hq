
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Brand Growth",
    category: "Content Strategy",
    description: "How our premium ghostwriting service helped an e-commerce brand increase organic traffic by 156% and boost conversions with strategic blog content.",
    image: "/placeholder.svg",
    results: ["156% increase in organic traffic", "43% higher conversion rate", "68% increase in time-on-page"]
  },
  {
    id: 2,
    title: "Tech Startup Recognition",
    category: "Technical Writing",
    description: "Transforming complex technical content into accessible documentation that helped a SaaS startup secure additional funding and customer trust.",
    image: "/placeholder.svg", 
    results: ["Documentation clarity score improved by 87%", "Customer onboarding time reduced by 34%", "Helped secure $1.2M in additional funding"]
  },
  {
    id: 3,
    title: "Professional Service Firm",
    category: "Email Marketing",
    description: "Strategic email marketing campaign that revitalized client relationships and generated new business opportunities for a professional services firm.",
    image: "/placeholder.svg",
    results: ["42% open rate (industry avg: 18%)", "22% response rate to cold outreach", "16 new client acquisitions"]
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="bg-gray-50 py-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Explore how our services have helped businesses like yours achieve their goals through
            strategic content creation and digital services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500 font-medium">Case Study Image</span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-[#FF7043] mb-2">{study.category}</div>
                <h3 className="text-xl font-bold mb-3 text-[#8E24AA]">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <div className="mb-5">
                  <p className="font-medium text-gray-700 mb-2">Key Results:</p>
                  <ul className="space-y-1">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <span className="text-teal-500 font-bold mr-2">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button 
                  className="flex items-center justify-center gap-2 w-full mt-auto bg-white hover:bg-[#FFA726]/10 text-[#8E24AA] border border-[#8E24AA]/20" 
                  variant="outline"
                >
                  Read Full Case Study <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="inline-flex items-center gap-2 bg-[#8E24AA] hover:bg-[#6A1B9A] text-white" asChild>
            <a href="#contact">
              Discuss Your Project <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
