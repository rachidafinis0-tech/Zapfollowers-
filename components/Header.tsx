import React, { useState, useEffect } from 'react';
import { ZapIcon } from './IconComponents';
import { View } from '../App';

interface HeaderProps {
    onNavigate: (view: View, anchor?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    onNavigate('main', anchor);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-bg/80 backdrop-blur-lg border-b border-dark-border' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => onNavigate('main')} className="flex items-center space-x-2 cursor-pointer">
            <ZapIcon className="w-8 h-8 text-brand-primary" />
            <span className="text-2xl font-bold text-light-text">ZapFollowers</span>
          </button>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="text-medium-text hover:text-light-text transition-colors">Services</a>
            <a href="#how-it-works" onClick={(e) => handleLinkClick(e, 'how-it-works')} className="text-medium-text hover:text-light-text transition-colors">How It Works</a>
            <a href="#testimonials" onClick={(e) => handleLinkClick(e, 'testimonials')} className="text-medium-text hover:text-light-text transition-colors">Testimonials</a>
            <a href="#faq" onClick={(e) => handleLinkClick(e, 'faq')} className="text-medium-text hover:text-light-text transition-colors">FAQ</a>
          </nav>
          <button onClick={() => onNavigate('main', 'services')} className="hidden md:block bg-brand-primary text-white font-semibold px-5 py-2 rounded-lg hover:bg-brand-light transition-colors shadow-lg shadow-brand-primary/20">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;