import React from 'react';
import { InstagramIcon, TikTokIcon, FacebookIcon } from './IconComponents';
import { View } from '../App';

interface HeroProps {
  onNavigate: (view: View, anchor?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="pt-32 pb-20 text-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-6">
        <div className="flex justify-center items-center space-x-4 mb-6">
          <div className="p-3 bg-dark-card rounded-full border border-dark-border">
            <InstagramIcon className="w-8 h-8 text-pink-500" />
          </div>
          <div className="p-3 bg-dark-card rounded-full border border-dark-border">
            <TikTokIcon className="w-8 h-8 text-cyan-400" />
          </div>
          <div className="p-3 bg-dark-card rounded-full border border-dark-border">
            <FacebookIcon className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-light-text mb-4 leading-tight">
          Elevate Your Social Presence, Instantly
        </h1>
        <p className="text-lg md:text-xl text-medium-text max-w-3xl mx-auto mb-8">
          The #1 platform to boost your social media accounts with high-quality followers, likes, and views. Fast, secure, and reliable growth.
        </p>
        <a
          href="#services"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('main', 'services');
          }}
          className="inline-block bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold text-lg px-8 py-4 rounded-lg hover:opacity-90 transition-opacity transform hover:scale-105 shadow-2xl shadow-brand-primary/30"
        >
          View Services
        </a>
      </div>
    </section>
  );
};

export default Hero;