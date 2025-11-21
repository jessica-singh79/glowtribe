import { useEffect, useRef, useState } from 'react';

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
      title: 'Injectables & Fillers',
      image: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Expert Botox, dermal fillers, and neurotoxin treatments for natural-looking wrinkle reduction and volume restoration.',
      pricing: 'Botox from $12/unit • Fillers from $650',
    },
    {
      title: 'Advanced Facials',
      image: 'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Customized medical-grade facials, chemical peels, and HydraFacial treatments for glowing, rejuvenated skin.',
      pricing: 'Facials from $150 • Peels from $200',
    },
    {
      title: 'Laser Treatments',
      image: 'https://images.pexels.com/photos/3997392/pexels-photo-3997392.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'State-of-the-art laser hair removal, skin resurfacing, and pigmentation correction for lasting results.',
      pricing: 'Hair Removal from $200 • Resurfacing from $500',
    },
    {
      title: 'Microneedling & RF',
      image: 'https://images.pexels.com/photos/3985333/pexels-photo-3985333.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Collagen-boosting microneedling and radiofrequency treatments to improve texture, tone, and firmness.',
      pricing: 'Starting at $350 per session',
    },
    {
      title: 'Body Contouring',
      image: 'https://raw.githubusercontent.com/jessica-singh79/glowtribe/main/body.jpg',
      description: 'Non-invasive body sculpting and fat reduction treatments to enhance your natural contours without surgery.',
      pricing: 'Packages from $1,200',
    },
    {
      title: 'Medical Skincare',
      image: 'https://images.pexels.com/photos/3997990/pexels-photo-3997990.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Prescription-strength skincare products and personalized regimens designed by our medical aestheticians.',
      pricing: 'Consultations complimentary',
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-sage-900 mb-3 md:mb-4">
            Our Services
          </h2>
          <p className="text-base md:text-lg text-sage-600 max-w-2xl mx-auto">
            Medical-grade treatments tailored to your unique beauty goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-sage-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 md:h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900 via-sage-900/60 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-2">
                    {service.title}
                  </h3>
                </div>
              </div>

              <div className="p-4 md:p-6">
                <p className="text-sm md:text-base text-sage-700 mb-3 md:mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="border-t border-sage-100 pt-3 md:pt-4">
                  <p className="text-sage-900 font-semibold text-xs md:text-sm">
                    {service.pricing}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <button
            onClick={() => {
              const element = document.getElementById('booking');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-sage-600 text-white px-8 py-3 rounded-full hover:bg-sage-700 transition-colors font-semibold text-sm md:text-base"
          >
            View All Treatments
          </button>
        </div>
      </div>
    </section>
  );
}