import React from 'react';

export const meta = () => {
  return [
    { title: "Privacy Policy | Arco Melody LLC" },
    { name: "description", content: "Privacy Policy for Arco Melody LLC - Learn how we collect, use, and protect your personal information." },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: "Privacy Policy | Arco Melody LLC" },
    { property: "og:description", content: "Privacy Policy for Arco Melody LLC - Learn how we collect, use, and protect your personal information." },
    { property: "og:type", content: "website" },
    { rel: "canonical", href: "https://arcomelody.com/privacy-policy" }
  ];
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-base-100 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg opacity-80">
            At Arco Melody LLC, your privacy is important to us.
          </p>
          <p className="text-sm opacity-60 mt-2">
            Effective Date: Oct. 13th, 2025
          </p>
        </div>

        {/* Privacy Policy Content */}
        <div className="bg-base-200 rounded-lg p-8 shadow-lg">
          <div className="prose prose-lg max-w-none">
            <p className="text-base leading-relaxed mb-6">
              At Arco Melody LLC, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you interact with our website, forms, and services.
            </p>

            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p className="mb-4">When you use our website, book lessons, or sign up for communications, we may collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal details:</strong> Name, email address, phone number, instrument interest</li>
                <li><strong>Usage data:</strong> How you use our website (e.g., pages visited, form submissions)</li>
                <li><strong>Communication preferences:</strong> Your consent choices for receiving marketing and updates</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Manage your account and schedule lessons</li>
                <li>Respond to inquiries and requests</li>
                <li>Provide relevant products, services, and updates</li>
                <li>Improve our website and offerings</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Marketing Communications</h2>
              <p className="mb-4">With your consent, we may contact you about:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Lesson packages, promotions, and events</li>
                <li>Updates, newsletters, or music education content</li>
              </ul>
              <p className="bg-accent/20 p-4 rounded-lg">
                <strong>Your Control:</strong> You can withdraw consent at any time by clicking "unsubscribe" in emails or contacting us directly at <a href="mailto:info@arcomelody.com" className="underline">info@arcomelody.com</a>. 
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Sharing Your Information</h2>
              <p className="mb-4">We do not sell or rent your personal information. We may share data with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service providers who assist in delivering our services (e.g., Formspree, HubSpot, email platforms)</li>
                <li>Legal authorities if required by law</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Data Storage and Security</h2>
              <p>
                We store your data securely and take reasonable measures to protect it from unauthorized access or disclosure.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
              <p className="mb-4">Depending on your location, you may have rights to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Withdraw consent for marketing communications</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Third-Party Services</h2>
              <p>
                We may use third-party tools for booking, analytics, and communication (e.g., Formspree, HubSpot, Gmail, Acuity Scheduling). These services follow their own privacy policies.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
              <p>
                Our services are not intended for children under 18. We do not knowingly collect information from children.
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy occasionally. Updates will be posted here with a new effective date.
              </p>
            </section>

            {/* Section 10 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
              <div className="bg-base-300 p-6 rounded-lg">
                <p className="mb-4">For questions or concerns about your information or this policy:</p>
                <div className="space-y-2">
                  <p><strong>Arco Melody LLC</strong></p>
                  <p>Email: <a href="mailto:info@arcomelody.com" className="underline">info@arcomelody.com</a></p>
                  <p>Phone: <a href="tel:+15125551234" className="underline">(512) 222-9644</a></p>
                  <p>Address: 5900 Balcones Drive #24859, Austin, TX, 78731, USA</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <a href="/" className="btn btn-primary btn-lg">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}