
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, TrendingUp, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-2 mb-8 animate-fade-in">
          <Sparkles className="h-4 w-4 text-blue-600" />
          <span className="text-sm font-medium text-gray-700">AI-Powered Marketing Solutions</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Transform Your Marketing
          </span>
          <br />
          <span className="text-gray-900">with AI Automation</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          We combine cutting-edge AI technology with proven marketing strategies to deliver 
          <span className="text-blue-600 font-semibold"> 10x better results</span> for your business.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-fade-in">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Start Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-blue-600 px-8 py-4 text-lg font-semibold hover:bg-blue-50 transition-all duration-300">
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="h-6 w-6 text-green-500 mr-2" />
              <span className="text-3xl font-bold text-gray-900">300%</span>
            </div>
            <p className="text-gray-600">Average ROI Increase</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Zap className="h-6 w-6 text-blue-500 mr-2" />
              <span className="text-3xl font-bold text-gray-900">24/7</span>
            </div>
            <p className="text-gray-600">AI-Powered Automation</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Sparkles className="h-6 w-6 text-purple-500 mr-2" />
              <span className="text-3xl font-bold text-gray-900">500+</span>
            </div>
            <p className="text-gray-600">Successful Campaigns</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
