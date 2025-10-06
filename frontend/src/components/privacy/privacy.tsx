import React from "react";

const PrivacyPolicy: React.FC = () => {
  const introText = "This Privacy Policy governs the manner in which Nader Omar Limited (referred to as 'we,' 'us,' or 'our') collects, uses, maintains, and discloses information collected from users (each, a 'User') of the naderomarrealto.com website ('Site'). This policy applies to the Site and all products and services offered by Nader Omar Limited.";
  const infoCollectText = "We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our Site, register on the Site, fill out a form, and in connection with other activities, services, features, or resources we make available.";
  const personalIdentifiersText = "A. Personal Identifiers (Information you directly provide):";
  const nonPersonalInfoText = "B. Non-Personal Information (Information collected automatically):";
  const useInfoText = "Nader Omar Limited collects and uses Users' personal information for the following purposes:";
  const shareInfoText = "We do not sell, trade, or rent Users' personal identification information to others. We may share your information with the following third parties:";
  const cookiesText = "Our Site may use 'cookies' to enhance User experience. Cookies are small text files placed on your computer's hard drive by your web browser for record-keeping purposes and sometimes to track information about them.";
  const cookiesUseText = "What we use them for: To remember your preferences, keep you logged in, and collect anonymized usage data for analytics.";
  const cookiesChoicesText = "Your Choices: You may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent. If you do so, note that some parts of the Site may not function properly.";
  const securityText = "Security: We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our Site.";
  const retentionText = "Retention: We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.";
  const rightsText = "Depending on where you live, you may have specific rights regarding your personal data. These may include:";
  const rightsContactText = "To exercise any of these rights, please contact us using the information below. We may need to verify your identity before fulfilling your request.";
  const changesText = "Nader Omar Limited has the discretion to update this Privacy Policy at any time. When we do, we will revise the 'Last Updated' date at the top of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this Privacy Policy periodically and become aware of modifications.";
  const acceptanceText = "By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.";

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
        <p className="text-gray-600 leading-relaxed">{introText}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{infoCollectText}</p>
        <h3 className="text-xl font-medium text-gray-700 mb-2">{personalIdentifiersText}</h3>
        <ul className="list-disc pl-6 text-gray-600 mb-4">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>{`Mailing address (when required for service)`}</li>
          <li>Property Preferences: Home features, desired locations, budget, buying/selling timeline, financing status.</li>
        </ul>
        <h3 className="text-xl font-medium text-gray-700 mb-2">{nonPersonalInfoText}</h3>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Device Information: IP address, operating system, browser type.</li>
          <li>{`Location: General geographical location (derived from IP address).`}</li>
          <li>{`Usage Data: Pages viewed, time spent on the Site, links clicked, property listings viewed and saved, and search history (e.g., IDX feed activity).`}</li>
          <li>Referral Data: The website you came from to reach our Site.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use the Collected Information</h2>
        <p className="text-gray-600 leading-relaxed">{useInfoText}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. How We Share Your Information</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{shareInfoText}</p>
        <ul className="list-disc pl-6 text-gray-600 mb-4">
          <li>Our Brokerage and Other Agents: To facilitate the delivery of real estate services and for internal administrative purposes.</li>
          <li>
            Service Providers/Partners: Trusted third-party vendors who assist us in operating our business and the Site, such as:
            <ul className="list-circle pl-6 mt-2">
              <li>{`CRM (Customer Relationship Management) system providers.`}</li>
              <li>Email marketing providers.</li>
              <li>Website hosting partners and developers.</li>
              <li>{`Analytics providers (e.g., Google Analytics).`}</li>
            </ul>
          </li>
          <li>{`Business Partners (with your consent): We may share data with trusted third parties to offer you related services, such as mortgage brokers, home inspectors, or title companies, but only with your explicit consent or direction.`}</li>
          <li>Legal Compliance: When required by law, such as to comply with a subpoena or similar legal process, or when we believe in good faith that disclosure is necessary to protect our rights or the safety of others.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Cookies and Tracking Technologies</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{cookiesText}</p>
        <ul className="list-disc pl-6 text-gray-600 mb-4">
          <li>{cookiesUseText}</li>
          <li>{cookiesChoicesText}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Data Security and Retention</h2>
        <ul className="list-disc pl-6 text-gray-600 mb-4">
          <li>{securityText}</li>
          <li>{retentionText}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Your Rights and Choices</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{rightsText}</p>
        <ul className="list-disc pl-6 text-gray-600 mb-4">
          <li>Right to Access: The right to request copies of your personal data we hold.</li>
          <li>Right to Correction/Rectification: The right to request that we correct any information you believe is inaccurate or incomplete.</li>
          <li>{`Right to Deletion ('Right to be Forgotten'): The right to request that we delete your personal data, under certain conditions.`}</li>
          <li>Opt-Out of Marketing: The right to opt-out of receiving future marketing communications from us by following the unsubscribe link at the bottom of each email or contacting us directly.</li>
          <li>{`Do Not Sell/Share: The right to opt-out of the 'sale' or 'sharing' of your personal information (as defined under laws like the CCPA/CPRA)`}.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed">{rightsContactText}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Changes to This Privacy Policy</h2>
        <p className="text-gray-600 leading-relaxed">{changesText}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Your Acceptance of These Terms</h2>
        <p className="text-gray-600 leading-relaxed">{acceptanceText}</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;