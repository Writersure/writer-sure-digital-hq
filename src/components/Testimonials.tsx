
import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Alyze Sam",
    position: "Serial Co-Founder & Author",
    company: "TechAndAuthors.com",
    image: "/lovable-uploads/b6c87966-f2fb-4118-96b4-fd9db0e4e879.png",
    quote: "I've had the pleasure of working with Alex on several of my complex startups, and I am consistently impressed by his professionalism and skill. His editing and ghostwriting are so helpful, but what truly sets him apart is his collaborative approach. He listens attentively, provides thoughtful feedback, and always strives to elevate people and the work they do.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Founder & CEO",
    company: "StartupBoost",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "The chatbot automation service from WriterSure helped us qualify leads 24/7, increasing our conversion rate by 43%. Their technical expertise and attention to detail are unmatched.",
    rating: 5
  },
  {
    id: 3,
    name: "Jessica Rivera",
    position: "Content Manager",
    company: "Global Publishers",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote: "I've worked with many content agencies, but WriterSure stands out with their perfect blend of AI efficiency and human creativity. Their technical writing services have been invaluable for our product documentation.",
    rating: 5
  },
  {
    id: 4,
    name: "David Park",
    position: "E-Commerce Director",
    company: "ShopElite",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    quote: "The email marketing campaigns created by WriterSure drove a 28% increase in our customer retention rate. Their strategic approach and data-driven insights have been game-changing for our business.",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="bg-brand-800 text-white py-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our <span className="bg-gradient-to-r from-white to-teal-300 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-300">
            Don't take our word for it – hear from the businesses we've helped transform
            with our premium content and digital services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto animate-on-scroll">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12">
            <div className="mb-8">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg md:text-xl italic">"{testimonials[activeIndex].quote}"</p>
            </div>
            <div className="flex items-center">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-14 h-14 rounded-full mr-4 object-cover"
              />
              <div>
                <h4 className="font-bold">{testimonials[activeIndex].name}</h4>
                <p className="text-sm text-gray-300">
                  {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 right-10 flex gap-3">
            <button
              onClick={handlePrev}
              className="bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="bg-teal-500 hover:bg-teal-600 text-white rounded-full p-3 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-16 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === activeIndex ? "bg-teal-400 w-8" : "bg-white/30"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-12 text-center animate-on-scroll">
          <img 
            src="/lovable-uploads/56e1547c-0b2b-4115-a00b-f3a5968c6b7c.png" 
            alt="Email testimonial from Alyze Sam" 
            className="max-w-full md:max-w-3xl mx-auto rounded-lg shadow-xl hidden md:block" 
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
