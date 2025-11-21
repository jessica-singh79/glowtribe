import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-sage-800 via-sage-600 to-earth-700"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-sage-900/40"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1
          className={`text-5xl md:text-7xl font-serif font-bold text-white mb-6 transition-all duration-1000 tracking-tight ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          FEEL LIKE YOURSELF, ONLY BETTER
        </h1>
        <p
          className={`text-xl md:text-2xl text-cream-100 mb-10 max-w-3xl mx-auto transition-all duration-1000 delay-200 font-light ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Expert aesthetic treatments that enhance your natural beauty
        </p>
        <button
          onClick={scrollToBooking}
          className={`bg-sage-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-sage-700 transition-all duration-300 shadow-xl ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          Book Your Consultation
        </button>
      </div>
      <button
        onClick={() => {
          const element = document.getElementById('about');
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}