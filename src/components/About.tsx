import { useEffect, useRef, useState } from 'react';
import { Award, Heart, Sparkles, Users } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    { icon: Heart, title: 'Personalized Care', description: 'Tailored treatments for your unique beauty journey' },
    { icon: Award, title: 'Expert Team', description: 'Licensed professionals with years of experience' },
    { icon: Sparkles, title: 'Premium Results', description: 'Cutting-edge technology and proven techniques' },
    { icon: Users, title: 'Community Focus', description: 'Building confidence and lasting relationships' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Spa treatment"
                className="rounded-lg shadow-lg object-cover h-64 w-full"
              />
              <img
                src="https://images.pexels.com/photos/3997349/pexels-photo-3997349.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Facial treatment"
                className="rounded-lg shadow-lg object-cover h-64 w-full mt-8"
              />
              <img
                src="https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Relaxation"
                className="rounded-lg shadow-lg object-cover h-64 w-full -mt-8"
              />
              <img
                src="https://images.pexels.com/photos/3985347/pexels-photo-3985347.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Skincare"
                className="rounded-lg shadow-lg object-cover h-64 w-full"
              />
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-sage-900 mb-6">
              Welcome to Glow Tribe
            </h2>
            <p className="text-lg text-sage-700 mb-6 leading-relaxed">
              At Glow Tribe, we believe that true beauty radiates from within. Our medical spa combines the latest
              aesthetic treatments with a holistic approach to wellness, creating a sanctuary where you can relax,
              rejuvenate, and rediscover your natural glow.
            </p>
            <p className="text-lg text-sage-700 mb-8 leading-relaxed">
              Founded on the principles of authenticity and excellence, our team of licensed professionals is
              dedicated to helping you achieve your aesthetic goals with personalized care and proven results.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex flex-col items-start">
                  <value.icon className="h-8 w-8 text-sage-600 mb-2" />
                  <h3 className="font-semibold text-sage-900 mb-1">{value.title}</h3>
                  <p className="text-sm text-sage-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
