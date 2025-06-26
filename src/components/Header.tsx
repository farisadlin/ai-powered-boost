
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/">
              <img 
                src="/lovable-uploads/6bdc31da-a4cc-406f-8454-af76f1f73dde.png" 
                alt="Auto Growth Logo" 
                className="h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              About
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Testimonials
            </a>
            <Link to="/blog" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Blog
            </Link>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Contact
            </a>
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg animate-fade-in">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#services" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Services
              </a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                About
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Testimonials
              </a>
              <Link to="/blog" className="text-gray-700 hover:text-orange-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Contact
              </a>
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white w-full">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
