import React from 'react';

const PrivacyPolicy: React.FC = () => {
    return (
        <main className="pt-32 pb-20">
            <div className="container mx-auto px-6 prose prose-lg max-w-4xl">
                <h1 className="text-4xl font-extrabold text-light-text mb-8">Privacy Policy</h1>
                <p className="text-medium-text">Last Updated: {new Date().toLocaleDateString()}</p>
                
                <p>
                    Welcome to ZapFollowers. We are committed to protecting your privacy and handling your data in an open and transparent manner. This privacy policy sets out how we collect, use, and safeguard your information when you visit our website and use our services.
                </p>

                <h2 className="text-2xl font-bold text-light-text mt-8">1. Information We Collect</h2>
                <p>
                    We may collect personal information that you voluntarily provide to us when you purchase our services or contact us. This information may include:
                </p>
                <ul>
                    <li><strong>Contact Information:</strong> Your name and email address.</li>
                    <li><strong>Service Information:</strong> Your social media username or profile/post URL that you provide for service delivery. We never ask for your password.</li>
                    <li><strong>Payment Information:</strong> Payment details are processed by our third-party payment processors (e.g., Stripe, PayPal). We do not store your full credit card information on our servers.</li>
                </ul>

                <h2 className="text-2xl font-bold text-light-text mt-8">2. How We Use Your Information</h2>
                <p>
                    We use the information we collect for the following purposes:
                </p>
                <ul>
                    <li>To process your transactions and deliver the services you have purchased.</li>
                    <li>To communicate with you regarding your order, including sending confirmations and service updates.</li>
                    <li>To respond to your inquiries and provide customer support.</li>
                    <li>To improve our website and services.</li>
                </ul>

                <h2 className="text-2xl font-bold text-light-text mt-8">3. Data Security</h2>
                <p>
                    We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems and are required to keep the information confidential.
                </p>

                <h2 className="text-2xl font-bold text-light-text mt-8">4. Third-Party Disclosure</h2>
                <p>
                    We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
                </p>

                <h2 className="text-2xl font-bold text-light-text mt-8">5. Your Consent</h2>
                <p>
                    By using our site, you consent to our website's privacy policy.
                </p>

                <h2 className="text-2xl font-bold text-light-text mt-8">6. Changes to Our Privacy Policy</h2>
                <p>
                    If we decide to change our privacy policy, we will post those changes on this page. We encourage you to periodically review this page for the latest information on our privacy practices.
                </p>

                <h2 className="text-2xl font-bold text-light-text mt-8">7. Contacting Us</h2>
                <p>
                    If there are any questions regarding this privacy policy, you may contact us using the information on our website.
                </p>
            </div>
        </main>
    );
};

export default PrivacyPolicy;