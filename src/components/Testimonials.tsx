
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStartup Inc",
      content: "AI Marketing Pro transformed our entire marketing strategy. Their AI-powered campaigns increased our lead generation by 400% in just 3 months. The automation tools save us 20+ hours per week.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b704?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, E-commerce Plus",
      content: "The predictive analytics and automated customer segmentation have been game-changers. We now know exactly when and how to reach our customers. ROI increased by 250% since we started working with them.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emma Rodriguez",
      role: "Founder, Digital Solutions",
      content: "Their AI chatbots qualify leads 24/7 and the conversation quality is incredible. We've closed deals while sleeping! The team's expertise in AI automation is unmatched in the industry.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "David Park",
      role: "VP Marketing, Growth Corp",
      content: "What impressed us most was how quickly they understood our business and implemented AI solutions. The results speak for themselves - 300% increase in qualified leads and 60% reduction in customer acquisition costs.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Lisa Thompson",
      role: "CMO, InnovateTech",
      content: "The level of personalization we can now achieve with their AI tools is incredible. Every customer feels like they're getting a tailored experience. Our conversion rates have never been higher.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Robert Kim",
      role: "Director, ScaleUp Ventures",
      content: "They don't just implement AI tools - they create intelligent marketing ecosystems. The automation workflows they built for us handle everything from lead capture to customer retention. Absolutely revolutionary.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900">What Our</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business leaders are saying about our AI-powered marketing solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="h-12 w-12 text-blue-500" />
              </div>
              
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-lg opacity-90 mb-6">
              Let's discuss how AI-powered marketing can transform your business and deliver exceptional results.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Your Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
