
import React from 'react';

const Step: React.FC<{ number: string; title: string; description: string }> = ({ number, title, description }) => (
    <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 mb-4 flex items-center justify-center bg-dark-card border-2 border-brand-primary rounded-full text-brand-primary text-2xl font-bold">
            {number}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-light-text">{title}</h3>
        <p className="text-medium-text max-w-xs">{description}</p>
    </div>
);

const HowItWorks: React.FC = () => {
    return (
        <section id="how-it-works" className="py-20 bg-dark-bg/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-light-text">Get Results in 3 Easy Steps</h2>
                    <p className="text-medium-text mt-2">Our process is simple, fast, and secure.</p>
                </div>
                <div className="relative">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-dark-border -translate-y-1/2"></div>
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary animate-gradient-x -translate-y-1/2" style={{ width: '66%', left: '17%' }}></div>
                    <div className="relative flex flex-col md:flex-row justify-between items-start space-y-12 md:space-y-0">
                        <Step number="1" title="Choose a Package" description="Select the social media platform and the service package that fits your needs." />
                        <Step number="2" title="Provide Details" description="Enter your username or post link. No password required, ever." />
                        <Step number="3" title="Watch The Magic" description="Complete the secure payment and see your social proof grow instantly." />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
