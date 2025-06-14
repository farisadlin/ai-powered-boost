
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Zap } from "lucide-react";

const About = () => {
  const achievements = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Award, number: "95%", label: "Success Rate" },
    { icon: Zap, number: "10M+", label: "Leads Generated" },
    { icon: CheckCircle, number: "24/7", label: "AI Support" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">Pioneering the Future of</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Marketing
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We're not just another marketing agency. We're AI specialists who understand that the future 
              of marketing lies in intelligent automation and data-driven decision making.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team combines deep marketing expertise with cutting-edge AI technology to deliver 
              results that traditional agencies simply can't match. Every campaign is optimized 
              in real-time, every lead is nurtured intelligently, and every decision is backed by data.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Advanced AI algorithms for predictive marketing",
                "Real-time campaign optimization and adjustment",
                "Personalized customer experiences at scale",
                "Comprehensive automation across all channels"
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4">
              Learn More About Our Process
            </Button>
          </div>

          {/* Achievements */}
          <div className="lg:pl-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{achievement.number}</div>
                    <div className="text-sm text-gray-600">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Highlight */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">🚀 Ready to Scale?</h3>
              <p className="mb-4 opacity-90">
                Join hundreds of businesses already using AI to automate their marketing and achieve unprecedented growth.
              </p>
              <Button variant="secondary" size="sm" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
