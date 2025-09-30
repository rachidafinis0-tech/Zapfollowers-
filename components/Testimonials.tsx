
import React from 'react';
import { TESTIMONIALS_DATA } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-light-text">Trusted by Thousands of Creators</h2>
          <p className="text-medium-text mt-2">Don't just take our word for it. Here's what our customers say.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map(testimonial => (
            <div key={testimonial.id} className="bg-dark-card border border-dark-border rounded-xl p-6 flex flex-col">
              <p className="text-medium-text mb-6 flex-grow">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 border-2 border-brand-primary" />
                <div>
                  <p className="font-bold text-light-text">{testimonial.name}</p>
                  <p className="text-sm text-brand-light">{testimonial.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
