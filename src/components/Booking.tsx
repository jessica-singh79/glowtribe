import { useEffect, useRef, useState } from 'react';
import { Calendar, Phone, Mail } from 'lucide-react';

export default function Booking() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="booking" ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-sage-50 to-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-8 md:mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-sage-900 mb-3 md:mb-4">
            Book Your Consultation
          </h2>
          <p className="text-base md:text-lg text-sage-600 max-w-2xl mx-auto mb-6 md:mb-8 px-4">
            Take the first step towards your transformation. Schedule your personalized consultation today.
          </p>
          
          {/* Contact info - stacked on mobile, horizontal on desktop */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 sm:gap-8 mb-8 md:mb-12">
            <div className="flex items-center justify-center sm:justify-start space-x-3">
              <Phone className="h-5 w-5 md:h-6 md:w-6 text-sage-600" />
              <div className="text-left">
                <p className="text-xs md:text-sm text-sage-500">Call Us</p>
                <p className="text-base md:text-lg font-semibold text-sage-900">(555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-3">
              <Mail className="h-5 w-5 md:h-6 md:w-6 text-sage-600" />
              <div className="text-left">
                <p className="text-xs md:text-sm text-sage-500">Email Us</p>
                <p className="text-base md:text-lg font-semibold text-sage-900">hello@glowtribes.com</p>
              </div>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-3">
              <Calendar className="h-5 w-5 md:h-6 md:w-6 text-sage-600" />
              <div className="text-left">
                <p className="text-xs md:text-sm text-sage-500">Hours</p>
                <p className="text-base md:text-lg font-semibold text-sage-900">Mon-Sat: 9AM-7PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking integration notice */}
        <div
          className={`bg-sage-50 border border-sage-200 rounded-xl p-4 md:p-6 mb-6 md:mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h4 className="font-semibold text-sage-900 mb-2 md:mb-3 flex items-center text-sm md:text-base">
            <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            Booking System Integration
          </h4>
          <p className="text-sage-700 text-xs md:text-sm mb-2 md:mb-3">
            I seamlessly integrate with all major booking platforms your practice already uses:
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-white px-2.5 py-1 md:px-3 md:py-1.5 rounded-full text-xs font-medium text-sage-700 border border-sage-200">Vagaro</span>
            <span className="bg-white px-2.5 py-1 md:px-3 md:py-1.5 rounded-full text-xs font-medium text-sage-700 border border-sage-200">Jane App</span>
            <span className="bg-white px-2.5 py-1 md:px-3 md:py-1.5 rounded-full text-xs font-medium text-sage-700 border border-sage-200">Booksy</span>
            <span className="bg-white px-2.5 py-1 md:px-3 md:py-1.5 rounded-full text-xs font-medium text-sage-700 border border-sage-200">Acuity</span>
            <span className="bg-white px-2.5 py-1 md:px-3 md:py-1.5 rounded-full text-xs font-medium text-sage-700 border border-sage-200">Calendly</span>
          </div>
          <p className="text-xs text-sage-500 mt-2 md:mt-3">
            This demo uses Calendly for demonstration. Your site will integrate with your existing booking system.
          </p>
        </div>
        
        {/* Main CTA */}
        <div
          className={`bg-white rounded-2xl shadow-2xl p-6 md:p-12 text-center transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-xl md:text-2xl font-serif font-bold text-sage-900 mb-3 md:mb-4">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-sm md:text-base text-sage-600 mb-6 md:mb-8 max-w-xl mx-auto leading-relaxed">
            Click below to schedule your complimentary consultation. We'll discuss your goals and create a personalized treatment plan designed just for you.
          </p>
          <a
            href="https://calendly.com/jessicasingh7900/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sage-600 text-white px-8 py-3 md:px-12 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-sage-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Schedule Your Consultation
          </a>
          <p className="text-xs md:text-sm text-sage-500 mt-4 md:mt-6">
            Free 30-minute consultation • No obligation
          </p>
        </div>
      </div>
    </section>
  );
}