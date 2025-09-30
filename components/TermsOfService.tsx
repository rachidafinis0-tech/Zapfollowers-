import React from 'react';

const TermsOfService: React.FC = () => {
    return (
        <main className="pt-32 pb-20">
            <div className="container mx-auto px-6 prose prose-lg max-w-4xl">
                <h1 className="text-4xl font-extrabold text-light-text mb-8">Terms of Service</h1>
                <p className="text-medium-text">Last Updated: {new Date().toLocaleDateString()}</p>
                
                <p>
                    Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the ZapFollowers website (the "Service") operated by us.
                </p>

                <h2 className="text-2xl font-bold text-light-text mt-8">1. Agreement to Terms</h2>
                <p>
                    By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
                </p>

                <h2 className="text-2xl font-bold text-light-text mt-8">2. Services</h2>
                <p>
                    ZapFollowers provides social media marketing services. We are not affiliated with Instagram, Facebook, TikTok, or any third-party partners. It is your sole responsibility to comply with the social media platforms' rules and any legislation that you are subject to.
                </p>
                <ul>
                    <li>You agree that by purchasing our services, you understand what you are buying and will not file a fraudulent dispute via your payment processor.</li>
                    <li>We reserve the right to modify, suspend, or withdraw the whole or any part of our service or any of its content at any time without notice and without incurring any liability.</li>
                    <li>You shall not knowingly exploit the system.</li>
                </ul>

                <h2 className="text-2xl font-bold text-light-text mt-8">3. Registration</h2>
                <p>
                    You agree that you are at least 18 years of age. You agree to provide true, accurate, current, and complete information about yourself as prompted by the Service's registration form.
                </p>

                <h2 className="text-2xl font-bold text-light-text mt-8">4. Intellectual Property</h2>
                <p>
                    The Service and its original content, features, and functionality are and will remain the exclusive property of ZapFollowers and its licensors.
                </p>

                <h2 className="text-2xl font-bold text-light-text mt-8">5. Limitation Of Liability</h2>
                <p>
                    In no event shall ZapFollowers, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                </p>

                <h2 className="text-2xl font-bold text-light-text mt-8">6. Governing Law</h2>
                <p>
                    These Terms shall be governed and construed in accordance with the laws of our country, without regard to its conflict of law provisions.
                </p>

                <h2 className="text-2xl font-bold text-light-text mt-8">7. Changes</h2>
                <p>
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion. We will provide at least 30 days' notice prior to any new terms taking effect.
                </p>

                <h2 className="text-2xl font-bold text-light-text mt-8">Contact Us</h2>
                <p>
                    If you have any questions about these Terms, please contact us.
                </p>
            </div>
        </main>
    );
};

export default TermsOfService;