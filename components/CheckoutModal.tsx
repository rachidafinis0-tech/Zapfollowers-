import React, { useState, useEffect } from 'react';
import { Service, Platform } from '../types';
import { XIcon, PayPalIcon, CheckCircleIcon, CreditCardIcon } from './IconComponents';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
  platform: Platform | null;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, service, platform }) => {
  const [status, setStatus] = useState<'idle' | 'processing' | 'success'>('idle');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Reset state when modal is opened for a new service
    if (isOpen) {
      setStatus('idle');
      setFullName('');
      setEmail('');
      setPaymentMethod('card');
    }
  }, [isOpen, service]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) {
      // Basic validation
      alert('Please fill in your full name and email.');
      return;
    }
    setStatus('processing');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        onClose();
      }, 2500); // Close modal after success message
    }, 2000); // Simulate network request
  };

  if (!isOpen || !service || !platform) {
    return null;
  }
  
  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 animate-[fade-in_0.3s_ease-out]"
      style={{ animationName: isOpen ? 'fade-in' : 'fade-out' }}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative bg-dark-card border border-dark-border rounded-xl w-full max-w-md transform transition-all duration-300"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-medium-text hover:text-light-text"
          aria-label="Close"
        >
          <XIcon className="w-6 h-6" />
        </button>

        <div className="p-8">
            {status === 'success' ? (
                <div className="text-center py-12">
                    <CheckCircleIcon className="w-20 h-20 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-light-text mb-2">Payment Successful!</h3>
                    <p className="text-medium-text">Your order for {service.name} is being processed. Thank you!</p>
                </div>
            ) : (
                <>
                    <div className="text-center mb-6">
                        <h2 id="modal-title" className="text-2xl font-bold text-light-text">{service.name}</h2>
                        <p className="text-medium-text">for {platform}</p>
                        <p className="text-3xl font-extrabold text-brand-primary mt-2">${service.price} <span className="text-lg text-medium-text">/ {service.unit}</span></p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-medium-text mb-1">Your Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    className="w-full bg-dark-bg border border-dark-border rounded-lg px-3 py-2 text-light-text focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none"
                                    placeholder="e.g., John Doe"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-medium-text mb-1">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-dark-bg border border-dark-border rounded-lg px-3 py-2 text-light-text focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mt-8">
                            <label className="block text-sm font-medium text-medium-text mb-2">Payment Method</label>
                            <div className="grid grid-cols-2 gap-2 bg-dark-bg p-1 rounded-lg border border-dark-border">
                                <button type="button" onClick={() => setPaymentMethod('card')} className={`px-4 py-2 rounded-md text-sm font-semibold flex items-center justify-center transition-colors ${paymentMethod === 'card' ? 'bg-brand-primary text-white' : 'text-medium-text hover:bg-dark-border'}`}>
                                    <CreditCardIcon className="w-5 h-5 mr-2" />
                                    Credit Card
                                </button>
                                <button type="button" onClick={() => setPaymentMethod('paypal')} className={`px-4 py-2 rounded-md text-sm font-semibold flex items-center justify-center transition-colors ${paymentMethod === 'paypal' ? 'bg-brand-primary text-white' : 'text-medium-text hover:bg-dark-border'}`}>
                                    <PayPalIcon className="w-5 h-5 mr-2" />
                                    PayPal
                                </button>
                            </div>
                        </div>
                        
                        {paymentMethod === 'card' && (
                           <div className="mt-4">
                                <label htmlFor="card-number" className="block text-sm font-medium text-medium-text mb-1">Card Information</label>
                                <div className="relative">
                                    <CreditCardIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-medium-text" />
                                    <input type="text" id="card-number" className="w-full bg-dark-bg border border-dark-border rounded-lg pl-10 pr-3 py-2 text-light-text focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none" placeholder="Card Number" required />
                                </div>
                                <div className="grid grid-cols-2 gap-2 mt-2">
                                    <input type="text" className="w-full bg-dark-bg border border-dark-border rounded-lg px-3 py-2 text-light-text focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none" placeholder="MM / YY" required />
                                    <input type="text" className="w-full bg-dark-bg border border-dark-border rounded-lg px-3 py-2 text-light-text focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none" placeholder="CVC" required />
                                </div>
                            </div>
                        )}

                        <div className="mt-8">
                            <button
                                type="submit"
                                disabled={status === 'processing'}
                                className={`w-full text-white font-semibold py-3 rounded-lg transition-colors shadow-lg disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center justify-center ${paymentMethod === 'paypal' ? 'bg-[#0070BA] hover:bg-[#005ea6]' : 'bg-brand-primary hover:bg-brand-light'}`}
                            >
                                {status === 'processing' ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </>
                                ) : (
                                    paymentMethod === 'paypal' ? (
                                        <>
                                            <PayPalIcon className="w-6 h-6 mr-2" />
                                            Pay with PayPal
                                        </>
                                    ) : `Pay $${service.price}`
                                )}
                            </button>
                            {paymentMethod === 'paypal' && <p className="text-xs text-medium-text mt-2 text-center">You will be redirected to PayPal to complete your purchase.</p>}
                        </div>
                    </form>
                </>
            )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;