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
          className={`bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="w-full" style={{ minHeight: '700px' }}>
            <iframe
              src="https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MThj4j0qcE7fo62PnbxQFt9fqlPvApNZxLc6AklxR6G+QVk0KBOJJuE7BiFGLO1nL8SXJQBFT8gPHM0fMcV0TWKMxHUYvZmcZT/vzYGwLl4="
              width="100%"
              height="700"
              frameBorder="0"
              title="Book Appointment"
              className="w-full"
            ></iframe>
          </div>
        </div>

        <p className="text-center text-sage-600 mt-6 text-sm">
          Powered by Vagaro booking system (can integrate with any booking platform)
        </p>
      </div>
    </section>
  );
}