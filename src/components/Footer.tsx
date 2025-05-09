
import { Instagram, Mail, Phone, Twitter, MessageSquare } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">      
      {/* Main Footer - Simplified */}
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Writer<span className="text-teal-400">Sure</span>
            </h3>
            <p className="text-gray-400 mb-4">
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
              <a href="https://wa.me/918297297307" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors" aria-label="WhatsApp">
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-3">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
                  </li>
                  <li>
                    <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
                  </li>
                  <li>
                    <a href="#process" className="text-gray-400 hover:text-white transition-colors">Process</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a>
                  </li>
                  <li>
                    <a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
                  </li>
                  <li>
                    <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} WriterSure. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
