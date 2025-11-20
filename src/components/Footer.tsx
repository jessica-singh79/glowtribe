import { useState } from 'react';
import { Sparkles, MapPin, Phone, Mail, Facebook, Instagram, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email, subscribed_at: new Date().toISOString() }]);

      if (error) throw error;

      setMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setMessage('This email is already subscribed or there was an error.');
    } finally {
      setLoading(false);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-sage-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-8 w-8" />
              <span className="text-2xl font-serif font-bold">Glow Tribe</span>
            </div>
            <p className="text-cream-200 mb-4">
              Where beauty meets wellness and science. Discover your natural radiance with us.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream-200 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream-200 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('about')} className="text-cream-200 hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-cream-200 hover:text-white transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('booking')} className="text-cream-200 hover:text-white transition-colors">
                  Book Now
                </button>
              </li>
              <li>
                <button className="text-cream-200 hover:text-white transition-colors">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-cream-200">
                  123 Wellness Avenue
                  <br />
                  Beauty District, CA 90210
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-cream-200">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-cream-200">hello@glowtribe.com</span>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Hours of Operation</h4>
              <p className="text-cream-200 text-sm">Monday - Friday: 9:00 AM - 7:00 PM</p>
              <p className="text-cream-200 text-sm">Saturday: 10:00 AM - 6:00 PM</p>
              <p className="text-cream-200 text-sm">Sunday: Closed</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-cream-200 mb-4">
              Subscribe to receive exclusive offers and beauty tips.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="w-full px-4 py-2 rounded-lg bg-sage-800 text-white placeholder-cream-300 focus:outline-none focus:ring-2 focus:ring-cream-400"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-cream-500 text-sage-900 px-4 py-2 rounded-lg hover:bg-cream-400 transition-colors font-semibold flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <span>{loading ? 'Subscribing...' : 'Subscribe'}</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
            {message && (
              <p className={`mt-2 text-sm ${message.includes('Thank you') ? 'text-cream-200' : 'text-red-300'}`}>
                {message}
              </p>
            )}
          </div>
        </div>

        <div className="border-t border-sage-700 pt-8 text-center">
          <p className="text-cream-200 text-sm">
            &copy; {new Date().getFullYear()} Glow Tribe Medspa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
