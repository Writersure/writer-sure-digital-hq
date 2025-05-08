
import { Instagram, Mail, Phone, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Here you would typically integrate with your email service
    toast({
      title: "Subscription successful!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
  };
  
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-brand-800 py-16">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with Our Newsletter</h3>
              <p className="text-gray-200 mb-0">
                Get the latest insights, tips, and industry news delivered straight to your inbox.
              </p>
            </div>
            <div className="lg:w-1/2">
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-600 text-white font-medium px-6 py-3 rounded-lg"
                >
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-gray-300 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Writer<span className="text-teal-400">Sure</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Premium AI-powered content creation and digital services for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/writersure" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/writersure/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:writersure@outlook.com" className="text-gray-400 hover:text-teal-400 transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:+918297297307" className="text-gray-400 hover:text-teal-400 transition-colors" aria-label="Phone">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Premium Ghostwriting</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Technical Writing</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Email Marketing</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Chatbot Automation</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Virtual Assistance</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Social Media Marketing</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-teal-400 mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:writersure@outlook.com" className="text-white hover:text-teal-400 transition-colors">
                    writersure@outlook.com
                  </a>
                  <p className="text-sm text-gray-400 mt-1">For inquiries and support</p>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-teal-400 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+918297297307" className="text-white hover:text-teal-400 transition-colors">
                    +91 8297297307
                  </a>
                  <p className="text-sm text-gray-400 mt-1">Mon-Fri, 9am-5pm IST</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} WriterSure. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
