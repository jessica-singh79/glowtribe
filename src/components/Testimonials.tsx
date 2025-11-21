import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: 'Sarah M.',
      treatment: 'Botox & Dermal Fillers',
      text: 'I was nervous about injectables, but the team made me feel so comfortable. The results are exactly what I wanted—natural and subtle. I look like myself, just refreshed!',
      rating: 5,
    },
    {
      name: 'Jennifer K.',
      treatment: 'HydraFacial Series',
      text: 'My skin has never looked better! After just three treatments, my complexion is glowing and my fine lines have softened. The staff is incredibly knowledgeable and caring.',
      rating: 5,
    },
    {
      name: 'Amanda R.',
      treatment: 'Laser Hair Removal',
      text: 'Finally saying goodbye to razors and waxing! The treatments were quick and way less painful than I expected. Best investment in myself I have made.',
      rating: 5,
    },
  ];

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

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-cream-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-10 md:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-sage-900 mb-3 md:mb-4">
            Client Love
          </h2>
          <p className="text-base md:text-lg text-sage-600 max-w-2xl mx-auto">
            Real results from real people who have experienced the Glow Tribe difference
          </p>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg border border-sage-100 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-sage-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="border-t border-sage-100 pt-4">
                <p className="font-semibold text-sage-900">{testimonial.name}</p>
                <p className="text-sm text-sage-600">{testimonial.treatment}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-sage-100">
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-sage-700 mb-4 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    <div className="border-t border-sage-100 pt-3">
                      <p className="font-semibold text-sage-900 text-sm">{testimonial.name}</p>
                      <p className="text-xs text-sage-600">{testimonial.treatment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-sage-600 w-8' : 'bg-sage-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}