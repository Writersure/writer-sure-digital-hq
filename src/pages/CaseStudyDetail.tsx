
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { caseStudies } from "@/components/CaseStudies";

const CaseStudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [caseStudy, setCaseStudy] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const studyId = parseInt(id || "0");
    const study = caseStudies.find(cs => cs.id === studyId);
    
    if (study) {
      setCaseStudy(study);
      // Update page title for SEO
      document.title = `${study.title} - WriterSure Case Study`;
    } else {
      navigate("/not-found", { replace: true });
    }
    
    setLoading(false);
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8E24AA]"></div>
      </div>
    );
  }

  if (!caseStudy) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container-custom py-12 md:py-20">
          <Button 
            variant="outline" 
            className="mb-8 flex items-center gap-2 border-[#8E24AA]/20 text-[#8E24AA]"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4" /> Back to Case Studies
          </Button>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-2">
              <div className="mb-4 text-sm font-medium text-[#FF7043]">{caseStudy.category}</div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#8E24AA]">{caseStudy.title}</h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">{caseStudy.description}</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-[#8E24AA]">Challenge</h2>
                <p className="text-gray-700">
                  Our client faced significant challenges in their market sector, with increasing competition 
                  and changing customer expectations. They needed a comprehensive content strategy that would 
                  position them as industry leaders while driving measurable business results.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-[#8E24AA]">Solution</h2>
                <p className="text-gray-700">
                  We developed a tailored content approach that addressed their specific business goals. 
                  This included in-depth audience research, competitive analysis, and the creation of 
                  a multi-channel content calendar designed to engage their target audience at every 
                  stage of the customer journey.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-[#8E24AA]">Results</h2>
                <ul className="space-y-3 mt-4 mb-8">
                  {caseStudy.results.map((result: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-500 font-bold mr-2 text-xl">✓</span>
                      <span className="text-gray-700">{result}</span>
                    </li>
                  ))}
                </ul>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-[#8E24AA]">Client Feedback</h2>
                <blockquote className="border-l-4 border-[#8E24AA] pl-4 italic text-gray-700 my-6">
                  "The WriterSure team exceeded our expectations in every way. Not only did they deliver 
                  exceptional content that resonated with our audience, but they were also strategic partners 
                  who truly understood our business goals."
                </blockquote>
                
                <div className="mt-12">
                  <Button 
                    className="bg-[#8E24AA] hover:bg-[#6A1B9A] text-white" 
                    onClick={() => navigate('/#contact')}
                  >
                    Discuss Your Project
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img 
                    src={caseStudy.image}
                    alt={caseStudy.title} 
                    className="w-full h-64 object-cover"
                  />
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-4 text-[#8E24AA]">Project Details</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Category</p>
                      <p className="font-medium">{caseStudy.category}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Services Provided</p>
                      <p className="font-medium">Content Strategy, Ghostwriting, SEO Optimization</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Industry</p>
                      <p className="font-medium">E-commerce / Retail</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Project Duration</p>
                      <p className="font-medium">3 Months</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
