import React from 'react';
import { InstagramIcon, TikTokIcon, FacebookIcon, ZapIcon, WhatsAppIcon } from './IconComponents';
import { View } from '../App';

interface FooterProps {
    onNavigate: (view: View, anchor?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    onNavigate('main', anchor);
  };
  
  return (
    <footer className="bg-dark-card border-t border-dark-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <button onClick={() => onNavigate('main')} className="flex items-center space-x-2 mb-4">
              <ZapIcon className="w-8 h-8 text-brand-primary" />
              <span className="text-2xl font-bold text-light-text">ZapFollowers</span>
            </button>
            <p className="text-medium-text">
              The ultimate solution for social media growth.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-light-text mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="text-medium-text hover:text-brand-light transition-colors">Services</a></li>
              <li><a href="#how-it-works" onClick={(e) => handleLinkClick(e, 'how-it-works')} className="text-medium-text hover:text-brand-light transition-colors">How It Works</a></li>
              <li><a href="#testimonials" onClick={(e) => handleLinkClick(e, 'testimonials')} className="text-medium-text hover:text-brand-light transition-colors">Testimonials</a></li>
              <li><a href="#faq" onClick={(e) => handleLinkClick(e, 'faq')} className="text-medium-text hover:text-brand-light transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-light-text mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('terms')} className="text-medium-text hover:text-brand-light transition-colors text-left">Terms of Service</button></li>
              <li><button onClick={() => onNavigate('privacy')} className="text-medium-text hover:text-brand-light transition-colors text-left">Privacy Policy</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-light-text mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-medium-text hover:text-brand-light transition-colors">
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-medium-text hover:text-brand-light transition-colors">
                <TikTokIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-medium-text hover:text-brand-light transition-colors">
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a href="https://wa.me/212651577493" target="_blank" rel="noopener noreferrer" className="text-medium-text hover:text-brand-light transition-colors">
                <WhatsAppIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-dark-border pt-8 text-center text-medium-text">
          <p>&copy; {new Date().getFullYear()} ZapFollowers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;