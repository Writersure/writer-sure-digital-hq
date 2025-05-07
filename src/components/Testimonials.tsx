
import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Alyze Sam",
    position: "Survivor, Serial Co-Founder, Multi Award-Winning Author",
    company: "Serving the Blockchain Community",
    image: "/lovable-uploads/37e28530-96db-470c-8204-de0bb0c4ef81.png",
    quote: "I've had the pleasure of working with Alex on several of my complex startups, and I am consistently impressed by his professionalism and skill. His editing and ghostwriting are so helpful, but what truly sets him apart is his collaborative approach. He listens attentively, provides thoughtful feedback, and always strives to elevate people and the work they do. Alex's empathy and communication skills made launches seamless and enjoyable. I wholeheartedly recommend him.",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="bg-brand-800 text-white py-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our <span className="bg-gradient-to-r from-white to-teal-300 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-300">
            Don't take our word for it – hear from the professionals we've helped transform
            with our premium content and digital services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12">
            <div className="mb-8">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg md:text-xl italic mb-8">"{testimonials[activeIndex].quote}"</p>
              
              <div className="flex items-center">
                <Avatar className="h-14 w-14 mr-4 border-2 border-teal-500">
                  <AvatarImage src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} className="object-cover" />
                  <AvatarFallback>{testimonials[activeIndex].name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold text-lg">{testimonials[activeIndex].name}</h4>
                  <p className="text-sm text-gray-300">
                    {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
