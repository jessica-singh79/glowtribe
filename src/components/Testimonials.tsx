import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
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

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-cream-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-sage-900 mb-4">
            Client Love
          </h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            Real results from real people who have experienced the Glow Tribe difference
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
}