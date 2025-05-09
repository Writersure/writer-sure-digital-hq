
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Elevating Brands Through <span className="text-gradient">Strategic Content</span>
          </h2>
          <p className="text-lg text-gray-700">
            WriterSure combines advanced AI technology with human expertise to deliver 
            exceptional digital solutions that help your business stand out.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">          
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4 text-brand-800">Our Mission</h3>
              <p className="text-gray-700">
                To empower businesses with premium AI-powered content and digital solutions that 
                drive meaningful results and establish lasting brand authority.
              </p>
            </div>
            
            <div className="bg-brand-800 p-8 rounded-lg text-white shadow-md">
              <h3 className="text-xl font-bold mb-4">Why Choose WriterSure?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-teal-300 flex-shrink-0 mt-0.5" />
                  <span>Expert team with diverse industry experience</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-teal-300 flex-shrink-0 mt-0.5" />
                  <span>Perfect blend of human expertise and AI capabilities</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-teal-300 flex-shrink-0 mt-0.5" />
                  <span>Customized solutions for your unique requirements</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-teal-300 flex-shrink-0 mt-0.5" />
                  <span>Proven track record of driving measurable results</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="lg:w-1/2">            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Our Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-brand-800">Content Strategy</h4>
                  <p className="text-sm text-gray-600">Data-driven approaches to content planning</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-brand-800">SEO Mastery</h4>
                  <p className="text-sm text-gray-600">Content that ranks and drives traffic</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-brand-800">Technical Excellence</h4>
                  <p className="text-sm text-gray-600">Complex concepts explained clearly</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-brand-800">AI Integration</h4>
                  <p className="text-sm text-gray-600">Cutting-edge AI solutions for growth</p>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 mb-6">
              Our team works closely with you to understand your brand voice, 
              business goals, and target audience to create solutions that deliver tangible results.
            </p>
            
            <Button className="btn-primary">Learn More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
