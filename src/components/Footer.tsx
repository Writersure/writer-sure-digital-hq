import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Writer<span className="text-teal-400">Sure</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Premium AI-powered content creation and digital services for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/writersure" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/writersure/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Premium Ghostwriting</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Technical Writing</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Email Marketing</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Chatbot Automation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">AI Solutions</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">View All Services</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe for the latest insights, tips, and industry news.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded-r-md transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} WriterSure. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
