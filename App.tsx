import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CheckoutModal from './components/CheckoutModal';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import { Service, Platform } from './types';

export type View = 'main' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [view, setView] = useState<View>('main');
  
  // State for the checkout modal
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    service: Service | null;
    platform: Platform | null;
  }>({ isOpen: false, service: null, platform: null });

  // Handler to open the modal
  const handleOrderNow = (service: Service, platform: Platform) => {
    setModalState({ isOpen: true, service, platform });
  };

  // Handler to close the modal
  const handleCloseModal = () => {
    setModalState({ isOpen: false, service: null, platform: null });
  };

  // Handler for navigation
  const handleNavigate = (targetView: View, anchor?: string) => {
    const scrollToAction = () => {
      if (anchor) {
        document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo(0, 0);
      }
    };

    if (view !== targetView) {
      setView(targetView);
      // After view changes, wait for render, then scroll.
      requestAnimationFrame(scrollToAction);
    } else {
      // Same view, just scroll.
      scrollToAction();
    }
  };
  
  const renderView = () => {
    switch(view) {
      case 'main':
        return (
          <main>
            <Hero onNavigate={handleNavigate} />
            <Services onOrderNow={handleOrderNow} />
            <HowItWorks />
            <Testimonials />
            <FAQ />
          </main>
        );
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsOfService />;
      default:
        return null;
    }
  }

  return (
    <div className="min-h-screen bg-dark-bg font-sans leading-normal tracking-tight">
      <div className="relative z-10">
        <Header onNavigate={handleNavigate} />
        {renderView()}
        <Footer onNavigate={handleNavigate} />
      </div>
      
      <CheckoutModal 
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        service={modalState.service}
        platform={modalState.platform}
      />
    </div>
  );
};

export default App;