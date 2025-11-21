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
    { icon: Award, title: 'Expert Team', description: 'Board-certified professionals with proven results' },
    { icon: Sparkles, title: 'Premium Products', description: 'FDA-approved treatments and medical-grade care' },
    { icon: Users, title: 'Client-Centered', description: 'Your comfort, safety, and satisfaction come first' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
         <div className="grid grid-cols-2 gap-4">
  <img
    src="https://images.pexels.com/photos/3985363/pexels-photo-3985363.jpeg?auto=compress&cs=tinysrgb&w=800"
    alt="Facial treatment consultation"
    className="rounded-lg shadow-lg object-cover h-64 w-full"
  />
  <img
    src="https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=800"
    alt="Injectable treatment"
    className="rounded-lg shadow-lg object-cover h-64 w-full mt-8"
  />
  <img
    src="https://images.pexels.com/photos/3997990/pexels-photo-3997990.jpeg?auto=compress&cs=tinysrgb&w=800"
    alt="Aesthetic skincare treatment"
    className="rounded-lg shadow-lg object-cover h-64 w-full -mt-8"
  />
  <img
    src="https://images.pexels.com/photos/3985321/pexels-photo-3985321.jpeg?auto=compress&cs=tinysrgb&w=800"
    alt="Medical spa therapy"
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
              Where Expertise Meets Artistry
            </h2>
            <p className="text-lg text-sage-700 mb-6 leading-relaxed">
              At Glow Tribe, we believe beauty is personal. Our board-certified team brings over 15 years of experience in aesthetic medicine, combining clinical expertise with an artist's eye to deliver natural, confidence-boosting results.
            </p>
            <p className="text-lg text-sage-700 mb-8 leading-relaxed">
              Every treatment is customized to your unique goals, skin type, and lifestyle. We use only FDA-approved products and the latest technology to ensure your safety, comfort, and satisfaction.
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