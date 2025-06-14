
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, BarChart3, Target, Megaphone, Brain, Rocket } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Chatbot Development",
      description: "Deploy intelligent chatbots that engage customers 24/7, qualify leads, and boost conversions with human-like conversations.",
      features: ["Natural Language Processing", "Lead Qualification", "Multi-platform Integration"]
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Leverage AI to predict customer behavior, optimize campaigns, and make data-driven decisions that maximize ROI.",
      features: ["Customer Lifetime Value", "Churn Prediction", "Campaign Optimization"]
    },
    {
      icon: Target,
      title: "Hyper-Targeted Advertising",
      description: "AI-powered audience segmentation and targeting that reaches the right people at the right time with personalized messages.",
      features: ["Dynamic Audience Creation", "Real-time Optimization", "Cross-platform Campaigns"]
    },
    {
      icon: Megaphone,
      title: "Content Automation",
      description: "Generate high-quality, SEO-optimized content at scale using advanced AI while maintaining your brand voice.",
      features: ["SEO-Optimized Copy", "Multi-format Content", "Brand Voice Training"]
    },
    {
      icon: Brain,
      title: "Marketing Intelligence",
      description: "Transform raw data into actionable insights with AI-powered analytics and competitive intelligence.",
      features: ["Competitor Analysis", "Market Trends", "Performance Insights"]
    },
    {
      icon: Rocket,
      title: "Growth Automation",
      description: "Automate your entire marketing funnel from lead generation to customer retention with intelligent workflows.",
      features: ["Lead Nurturing", "Email Sequences", "Customer Journey Mapping"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI-Powered Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionize your marketing with our cutting-edge AI solutions that work around the clock to grow your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
