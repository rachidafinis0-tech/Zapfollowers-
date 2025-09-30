
import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onOrderNow: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onOrderNow }) => {
  const { name, description, price, unit, icon: Icon } = service;

  return (
    <div className="bg-dark-card border border-dark-border rounded-xl p-6 flex flex-col hover:border-brand-primary hover:shadow-2xl hover:shadow-brand-primary/20 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 bg-brand-primary/10 rounded-lg">
            <Icon className="w-8 h-8 text-brand-primary" />
        </div>
        <h3 className="text-2xl font-bold text-light-text">{name}</h3>
      </div>
      <p className="text-medium-text mb-6 flex-grow">{description}</p>
      <div className="flex items-baseline justify-between mb-6">
        <div>
            <span className="text-4xl font-extrabold text-light-text">${price}</span>
            <span className="text-medium-text ml-1">/ {unit}</span>
        </div>
      </div>
      <button 
        onClick={onOrderNow}
        className="w-full bg-brand-primary text-white font-semibold py-3 rounded-lg hover:bg-brand-light transition-colors shadow-lg shadow-brand-primary/20">
        Order Now
      </button>
    </div>
  );
};

export default ServiceCard;