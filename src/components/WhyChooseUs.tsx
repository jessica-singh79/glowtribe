import { useEffect, useRef, useState } from 'react';
import { Shield, Award, Heart, Clock } from 'lucide-react';

export default function WhyChooseUs() {
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

  const reasons = [
    {
      icon: Shield,
      title: 'Board-Certified Experts',
      description: 'Our medical team brings 15+ years of experience with proven safety records in aesthetic medicine.',
    },
    {
      icon: Award,
      title: 'Premium Products Only',
      description: 'We exclusively use FDA-approved, medical-grade products and the latest proven technology.',
    },
    {
      icon: Heart,
      title: 'Personalized Approach',
      description: 'Every treatment is customized to your unique goals, skin type, and lifestyle for natural results.',
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Evening and weekend appointments available to fit your busy life without compromise.',
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-sage-900 mb-4">
            Why Choose Glow Tribe
          </h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            Experience the difference of expert care in a welcoming, professional environment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className={`text-center transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border border-sage-100">
                  <Icon className="w-10 h-10 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-sage-900 mb-3">{reason.title}</h3>
                <p className="text-sage-600 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}