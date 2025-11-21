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
    <section id="booking" ref={sectionRef} className="py-24 bg-gradient-to-b from-sage-50 to-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-sage-900 mb-4">
            Book Your Consultation
          </h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto mb-8">
            Take the first step towards your transformation. Schedule your personalized consultation today.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center space-x-3">
              <Phone className="h-6 w-6 text-sage-600" />
              <div className="text-left">
                <p className="text-sm text-sage-500">Call Us</p>
                <p className="text-lg font-semibold text-sage-900">(555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-6 w-6 text-sage-600" />
              <div className="text-left">
                <p className="text-sm text-sage-500">Email Us</p>
                <p className="text-lg font-semibold text-sage-900">hello@glowtribes.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="h-6 w-6 text-sage-600" />
              <div className="text-left">
                <p className="text-sm text-sage-500">Hours</p>
                <p className="text-lg font-semibold text-sage-900">Mon-Sat: 9AM-7PM</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`bg-sage-50 border border-sage-200 rounded-xl p-6 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h4 className="font-semibold text-sage-900 mb-3 flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Booking System Integration
          </h4>
          <p className="text-sage-700 text-sm mb-3">
            I seamlessly integrate with all major booking platforms your practice already uses:
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-white px-3 py-1.5 rounded-full text-xs font-medium text-sage-700 border border-sage-200">Vagaro</span>
            <span className="bg-white px-3 py-1.5 rounded-full text-xs font-medium text-sage-700 border border-sage-200">Jane App</span>
            <span className="bg-white px-3 py-1.5 rounded-full text-xs font-medium text-sage-700 border border-sage-200">Booksy</span>
            <span className="bg-white px-3 py-1.5 rounded-full text-xs font-medium text-sage-700 border border-sage-200">Acuity</span>
            <span className="bg-white px-3 py-1.5 rounded-full text-xs font-medium text-sage-700 border border-sage-200">Calendly</span>
          </div>
          <p className="text-xs text-sage-500 mt-3">
            This demo uses Calendly for demonstration. Your site will integrate with your existing booking system.
          </p>
        </div>
        
        <div
          className={`bg-white rounded-2xl shadow-2xl p-12 text-center transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-2xl font-serif font-bold text-sage-900 mb-4">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-sage-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Click below to schedule your complimentary consultation. We'll discuss your goals and create a personalized treatment plan designed just for you.
          </p>
          <a
            href="https://calendly.com/jessicasingh7900/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sage-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-sage-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Schedule Your Consultation
          </a>
          <p className="text-sm text-sage-500 mt-6">
            Free 30-minute consultation • No obligation
          </p>
        </div>
      </div>
    </section>
  );
}