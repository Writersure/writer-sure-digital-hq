
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { caseStudies } from "@/components/CaseStudies";
import { useNavigate } from "react-router-dom";

const CaseStudiesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="container-custom py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Success <span className="text-gradient">Stories</span>
            </h1>
            <p className="text-xl text-gray-700">
              Explore how our services have helped businesses achieve their goals through
              strategic content creation and digital services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm font-medium text-[#FF7043] mb-2">{study.category}</div>
                  <h2 className="text-xl font-bold mb-3 text-[#8E24AA]">{study.title}</h2>
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
                    onClick={() => navigate(`/case-study/${study.id}`)}
                  >
                    Read Full Case Study <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button className="inline-flex items-center gap-2 bg-[#8E24AA] hover:bg-[#6A1B9A] text-white" onClick={() => navigate('/#contact')}>
              Discuss Your Project <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
