import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-lg shadow-lg" : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold text-gradient hover:scale-105 transition-transform"
          >
            memorae
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/assistant"
              className={`transition-colors ${
                isScrolled ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white"
              }`}
            >
              Assistant
            </Link>
            <button
              onClick={() => scrollToSection("features")}
              className={`transition-colors ${
                isScrolled ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white"
              }`}
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("stats")}
              className={`transition-colors ${
                isScrolled ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white"
              }`}
            >
              Stats
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className={`transition-colors ${
                isScrolled ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white"
              }`}
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className={`transition-colors ${
                isScrolled ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white"
              }`}
            >
              Pricing
            </button>
            <Button
              onClick={() => scrollToSection("pricing")}
              className="bg-gradient-to-r from-primary via-secondary to-accent hover:scale-105 transition-transform"
            >
              Try for Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-up">
            <Link
              to="/assistant"
              className={`block w-full text-left transition-colors ${
                isScrolled ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white"
              }`}
            >
              Assistant
            </Link>
            <button
              onClick={() => scrollToSection("features")}
              className={`block w-full text-left transition-colors ${
                isScrolled ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white"
              }`}
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("stats")}
              className={`block w-full text-left transition-colors ${
                isScrolled ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white"
              }`}
            >
              Stats
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className={`block w-full text-left transition-colors ${
                isScrolled ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white"
              }`}
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className={`block w-full text-left transition-colors ${
                isScrolled ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white"
              }`}
            >
              Pricing
            </button>
            <Button
              onClick={() => scrollToSection("pricing")}
              className="w-full bg-gradient-to-r from-primary via-secondary to-accent"
            >
              Try for Free
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
