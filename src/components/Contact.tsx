
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    });
  };

  const services = [
    "Premium Ghostwriting",
    "Virtual Assistance",
    "Email Marketing",
    "Chatbot Automation",
    "Coding Services",
    "Technical Writing",
    "Freelance Writing",
    "Website Design",
    "AI Generalist Solutions",
    "Social Media Marketing",
    "Other / Not Sure",
  ];

  return (
    <section id="contact" className="bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-gray-700">
            Ready to elevate your digital presence? Reach out to discuss your project 
            and discover how our services can help you achieve your goals.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/5">
            <div className="bg-brand-800 text-white p-8 rounded-lg h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 mt-1 text-teal-300" />
                  <div>
                    <h4 className="font-medium mb-1">Email Us</h4>
                    <p>info@writersure.com</p>
                    <p className="text-sm text-gray-300 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 mt-1 text-teal-300" />
                  <div>
                    <h4 className="font-medium mb-1">Call Us</h4>
                    <p>(555) 123-4567</p>
                    <p className="text-sm text-gray-300 mt-1">Mon-Fri, 9am-5pm EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MessageSquare className="h-6 w-6 mr-4 mt-1 text-teal-300" />
                  <div>
                    <h4 className="font-medium mb-1">Live Chat</h4>
                    <p>Available on our website</p>
                    <p className="text-sm text-gray-300 mt-1">24/7 automated, business hours for live agents</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6">
                <h4 className="font-medium mb-3">Schedule a Consultation</h4>
                <p className="text-sm mb-4">
                  Book a free 30-minute consultation to discuss your project needs and how we can help.
                </p>
                <Button className="w-full bg-white hover:bg-gray-100 text-brand-800">
                  Book a Call
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-3"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service You're Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-800 focus:border-transparent"
                  >
                    <option value="" disabled>Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 min-h-[150px]"
                  placeholder="Tell us about your project and specific requirements..."
                />
              </div>
              
              <div className="flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-brand-800 focus:ring-brand-800 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  I agree to the <a href="#" className="text-brand-800 hover:underline">Terms & Conditions</a> and <a href="#" className="text-brand-800 hover:underline">Privacy Policy</a>
                </label>
              </div>
              
              <Button type="submit" className="btn-primary w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
