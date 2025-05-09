
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  
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
    <section className="bg-gradient-to-r from-brand-800 to-[#6A1B9A] py-16 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Mail className="h-10 w-10 text-teal-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Industry Insights</h2>
          <p className="text-lg mb-8 text-gray-100">
            Subscribe to our newsletter for the latest content marketing trends, AI advancements, and exclusive tips to grow your business.
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30"
              required
            />
            <Button 
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white font-medium px-6 py-3 rounded-lg"
            >
              Subscribe
            </Button>
          </form>
          
          <p className="mt-4 text-sm text-gray-300">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
