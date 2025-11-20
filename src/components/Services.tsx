import { useEffect, useRef, useState } from 'react';
import { Sparkles, Syringe, Zap, Activity, ShoppingBag } from 'lucide-react';

export default function Services() {
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

  const services = [
    {
      icon: Sparkles,
      title: 'Facials & Skin Treatments',
      description: 'Customized facials, chemical peels, and advanced skin rejuvenation therapies to reveal your natural glow.',
      image: 'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Syringe,
      title: 'Injectables & Fillers',
      description: 'Expert Botox, dermal fillers, and neurotoxin treatments for natural-looking wrinkle reduction and volume restoration.',
      image: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Zap,
      title: 'Laser Treatments',
      description: 'Advanced laser therapies for hair removal, skin resurfacing, pigmentation correction, and vascular treatments.',
      image: 'https://images.pexels.com/photos/3997392/pexels-photo-3997392.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Activity,
      title: 'Body Contouring',
      description: 'Non-invasive body sculpting and fat reduction treatments to enhance your natural contours.',
      image: 'https://images.pexels.com/photos/6663329/pexels-photo-6663329.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: ShoppingBag,
      title: 'Professional Skincare',
      description: 'Medical-grade skincare products and personalized regimens designed by our expert aestheticians.',
      image: 'https://images.pexels.com/photos/3997392/pexels-photo-3997392.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-sage-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            Experience transformative treatments tailored to your unique needs, delivered by our expert team
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-sage-900 via-sage-900/80 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <service.icon className="h-8 w-8 mb-3" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-cream-100 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
