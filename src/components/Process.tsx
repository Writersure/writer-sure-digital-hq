
import { ArrowRight } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by understanding your business, goals, audience, and specific requirements through in-depth consultation."
    },
    {
      number: "02",
      title: "Strategic Planning",
      description: "Based on the discovery insights, we develop a tailored strategy that aligns with your objectives and maximizes results."
    },
    {
      number: "03",
      title: "Creation & Implementation",
      description: "Our expert team creates high-quality content or implements technical solutions according to the approved strategy."
    },
    {
      number: "04",
      title: "Review & Refinement",
      description: "We review the deliverables with you, gather feedback, and make any necessary adjustments to ensure complete satisfaction."
    },
    {
      number: "05",
      title: "Deployment & Support",
      description: "Once approved, we deploy the solution and provide ongoing support to ensure continued success and optimal performance."
    }
  ];

  return (
    <section id="process" className="bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Proven <span className="text-gradient">Process</span>
          </h2>
          <p className="text-lg text-gray-700">
            We follow a systematic approach to ensure exceptional results for every project, 
            from initial concept to final delivery and beyond.
          </p>
        </div>

        <div className="relative">
          {/* Process Timeline */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-16 md:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className={`relative md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Number */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-brand-800 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>
                
                {/* Content */}
                <div className="md:w-5/12 md:pr-16 mb-8 md:mb-24">
                  <div className={`bg-white p-6 rounded-lg shadow-md border-t-4 ${index % 2 === 0 ? 'border-brand-800' : 'border-teal-500'}`}>
                    <div className="md:hidden bg-brand-800 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
                
                {/* Empty space for opposite side */}
                <div className="md:w-5/12 md:pl-16"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="inline-flex items-center text-lg font-medium text-brand-800 hover:text-brand-700 transition-colors cursor-pointer">
            View Our Case Studies <ArrowRight className="ml-2 h-4 w-4" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
