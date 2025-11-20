import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setIsServicesOpen(false);
    }
  };

  const services = [
    'Facials & Skin Treatments',
    'Injectables & Fillers',
    'Laser Treatments',
    'Body Contouring',
    'Professional Skincare'
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Sparkles className={`h-8 w-8 ${isScrolled ? 'text-sage-600' : 'text-white'}`} />
            <span className={`text-2xl font-serif font-bold ${isScrolled ? 'text-sage-900' : 'text-white'}`}>
              Glow Tribe
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className={`transition-colors ${isScrolled ? 'text-sage-900 hover:text-sage-600' : 'text-white hover:text-cream-200'}`}
            >
              About
            </button>

            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className={`flex items-center space-x-1 transition-colors ${
                  isScrolled ? 'text-sage-900 hover:text-sage-600' : 'text-white hover:text-cream-200'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {isServicesOpen && (
                <div
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToSection('services')}
                      className="block w-full text-left px-4 py-2 text-sage-900 hover:bg-sage-50 transition-colors"
                    >
                      {service}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className={`transition-colors ${isScrolled ? 'text-sage-900 hover:text-sage-600' : 'text-white hover:text-cream-200'}`}
            >
              Contact Us
            </button>

            <button
              onClick={() => scrollToSection('booking')}
              className="bg-sage-600 text-white px-6 py-2 rounded-full hover:bg-sage-700 transition-colors"
            >
              Book Now
            </button>
          </div>

          <button
            className={`md:hidden ${isScrolled ? 'text-sage-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-sage-900 hover:text-sage-600"
            >
              About
            </button>

            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full py-2 text-sage-900"
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToSection('services')}
                      className="block w-full text-left py-1 text-sage-700 text-sm"
                    >
                      {service}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-sage-900 hover:text-sage-600"
            >
              Contact Us
            </button>

            <button
              onClick={() => scrollToSection('booking')}
              className="block w-full text-center bg-sage-600 text-white px-6 py-2 rounded-full hover:bg-sage-700"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
