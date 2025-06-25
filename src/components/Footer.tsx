import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useServices } from "@/hooks/useServices";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { data: services = [] } = useServices();

  const footerLinks = {
    services: services.map(service => service.title),
    company: [
      "About Us",
      "Our Team",
      "Careers",
      "Case Studies",
      "Blog",
      "Contact",
    ],
    resources: [
      "AI Marketing Guide",
      "Free Tools",
      "Webinars",
      "Documentation",
      "Support Center",
      "ROI Calculator",
    ],
    legal: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "GDPR Compliance",
      "Security",
      "Refund Policy",
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="/lovable-uploads/6bdc31da-a4cc-406f-8454-af76f1f73dde.png"
                alt="Creative Nomads Logo"
                className="h-8 w-8 object-contain"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Creative Nomads
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We're pioneering the future of marketing with AI-powered
              automation that delivers exceptional results. Transform your
              business with intelligent marketing solutions that work 24/7.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-3" />
                <span>hello@creativenomads.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-4 w-4 mr-3" />
                <span>123 Innovation Drive, Tech City, TC 12345</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.length > 0 ? (
                services.slice(0, 6).map((service) => (
                  <li key={service._id}>
                    <a
                      href="#services"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {service.title}
                    </a>
                  </li>
                ))
              ) : (
                // Fallback untuk saat data belum dimuat
                [
                  "AI Chatbot Development",
                  "Predictive Analytics",
                  "Marketing Automation",
                  "Content Generation",
                  "Lead Qualification",
                  "Customer Segmentation",
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href="#services"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Stay Ahead with AI Marketing Insights
            </h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Get the latest AI marketing strategies, automation tips, and
              industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Creative Nomads. All rights reserved. Powered by
              cutting-edge AI technology.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
