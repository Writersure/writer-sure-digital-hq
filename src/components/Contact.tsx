
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Phone, WhatsApp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Premium Ghostwriting",
  "Virtual Assistance",
  "Email Marketing",
  "Chatbot Automation",
  "Technical Writing",
  "Social Media Marketing",
  "Blog Post / Article",
  "Ebook or Guide",
  "Website Copy",
  "LinkedIn Posts / Personal Branding",
  "Newsletter Copy",
  "Other / Not Sure",
];

const ContactForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Call success callback
    if (onSuccess) onSuccess();
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    });
  };

  return (
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
            className="w-full"
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
            className="w-full"
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
            className="w-full"
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
            className="w-full p-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-800 focus:border-transparent"
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
          className="w-full min-h-[150px]"
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
  );
};

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-16">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <p className="text-lg text-gray-700">
            Ready to elevate your digital presence? Reach out to discuss your project 
            and discover how our services can help you achieve your goals.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/5">
            <div className="bg-brand-800 text-white p-6 rounded-lg h-full">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-5 mb-8">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 mt-1 text-[#FFA726]" />
                  <div>
                    <h4 className="font-medium mb-1">Email Us</h4>
                    <p>writersure@outlook.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 mt-1 text-[#FFA726]" />
                  <div>
                    <h4 className="font-medium mb-1">Call Us</h4>
                    <p>+91 8297297307</p>
                    <p className="text-sm text-gray-300">Mon-Fri, 9am-5pm IST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <WhatsApp className="h-5 w-5 mr-3 mt-1 text-[#FFA726]" />
                  <div>
                    <h4 className="font-medium mb-1">WhatsApp</h4>
                    <p>+91 8297297307</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-medium mb-2">Schedule a Consultation</h4>
                <p className="text-sm mb-3">
                  Book a free 30-minute consultation to discuss your project needs.
                </p>
                <Button className="w-full bg-[#FF7043] hover:bg-[#F4511E] text-white">
                  Book a Call
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
