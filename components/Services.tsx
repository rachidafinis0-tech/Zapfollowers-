
import React, { useState } from 'react';
import { PLATFORMS_DATA } from '../constants';
import { Platform, Service } from '../types';
import ServiceCard from './ServiceCard';

interface ServicesProps {
  onOrderNow: (service: Service, platform: Platform) => void;
}

const Services: React.FC<ServicesProps> = ({ onOrderNow }) => {
  const [activePlatform, setActivePlatform] = useState<Platform>(Platform.Instagram);

  const activePlatformData = PLATFORMS_DATA.find(p => p.name === activePlatform);

  return (
    <section id="services" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-light-text">Our Services</h2>
          <p className="text-medium-text mt-2">Choose your platform and watch your influence grow.</p>
        </div>
        <div className="flex justify-center mb-10 bg-dark-card p-2 rounded-lg max-w-md mx-auto border border-dark-border">
          {PLATFORMS_DATA.map(({ name, icon: Icon }) => (
            <button
              key={name}
              onClick={() => setActivePlatform(name)}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-md transition-colors text-lg font-semibold ${
                activePlatform === name
                  ? 'bg-brand-primary text-white shadow-md'
                  : 'text-medium-text hover:bg-dark-border'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span>{name}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activePlatformData?.services.map(service => (
            <ServiceCard 
                key={service.id} 
                service={service} 
                onOrderNow={() => onOrderNow(service, activePlatform)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;