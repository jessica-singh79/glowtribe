import { Mail, Phone } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-sage-900 text-cream-100 py-2 px-4 fixed top-0 w-full z-[60]">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
        <a 
          href="mailto:hello@glowtribe.com" 
          className="flex items-center space-x-2 hover:text-white transition-colors"
        >
          <Mail className="w-4 h-4" />
          <span className="hidden sm:inline">hello@glowtribe.com</span>
        </a>
        <a 
          href="tel:5551234567" 
          className="flex items-center space-x-2 hover:text-white transition-colors"
        >
          <Phone className="w-4 h-4" />
          <span>(555) 123-4567</span>
        </a>
      </div>
    </div>
  );
}