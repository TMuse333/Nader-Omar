"use client";

import React from "react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const PrivacyPolicy = () => {
  return (
    <main className="w-screen bg-white">
      <Navbar excludedLink="" />

      <section className="pt-[120px] pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-8">Last updated February 2, 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-6">
            This Privacy Notice for Nader Omar Real Estate (&apos;we&apos;, &apos;us&apos;, or &apos;our&apos;), describes how and why we might access, collect, store, use, and/or share (&apos;process&apos;) your personal information when you use our services (&apos;Services&apos;), including when you:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              Visit our website at{" "}
              <a href="https://www.naderomarrealtor.com" className="text-cyan-600 hover:underline">
                https://www.naderomarrealtor.com
              </a>{" "}
              or any website of ours that links to this Privacy Notice
            </li>
            <li>
              Use Real Estate Service. Nader Omar is a real estate agent based in Fall River, Nova Scotia, affiliated with RE/MAX Nova. He helps clients with both buying and selling residential properties, providing local market expertise, personalized guidance, negotiation support, and a seamless process from start to closing.
            </li>
            <li>Engage with us in other related ways, including any marketing or events</li>
          </ul>

          <p className="mb-6">
            <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at{" "}
            <a href="mailto:naderomar@remax.ca" className="text-cyan-600 hover:underline">
              naderomar@remax.ca
            </a>.
          </p>

          {/* Summary of Key Points */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Summary of Key Points
          </h2>
          <p className="mb-4 italic">
            This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by using our table of contents below to find the section you are looking for.
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-4">
            <li>
              <strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.
            </li>
            <li>
              <strong>Do we process any sensitive personal information?</strong> Some of the information may be considered &apos;special&apos; or &apos;sensitive&apos; in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law.
            </li>
            <li>
              <strong>Do we collect any information from third parties?</strong> We may collect information from public databases, marketing partners, social media platforms, and other outside sources.
            </li>
            <li>
              <strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
            </li>
            <li>
              <strong>In what situations and with which types of parties do we share personal information?</strong> We may share information in specific situations and with specific categories of third parties.
            </li>
            <li>
              <strong>How do we keep your information safe?</strong> We have adequate organisational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
            </li>
            <li>
              <strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.
            </li>
            <li>
              <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us.
            </li>
          </ul>

          {/* Table of Contents */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Table of Contents
          </h2>
          <ol className="list-decimal pl-6 mb-6 space-y-1">
            <li><a href="#section1" className="text-cyan-600 hover:underline">What Information Do We Collect?</a></li>
            <li><a href="#section2" className="text-cyan-600 hover:underline">How Do We Process Your Information?</a></li>
            <li><a href="#section3" className="text-cyan-600 hover:underline">What Legal Bases Do We Rely On To Process Your Personal Information?</a></li>
            <li><a href="#section4" className="text-cyan-600 hover:underline">When And With Whom Do We Share Your Personal Information?</a></li>
            <li><a href="#section5" className="text-cyan-600 hover:underline">Do We Use Cookies And Other Tracking Technologies?</a></li>
            <li><a href="#section6" className="text-cyan-600 hover:underline">Do We Offer Artificial Intelligence-Based Products?</a></li>
            <li><a href="#section7" className="text-cyan-600 hover:underline">How Long Do We Keep Your Information?</a></li>
            <li><a href="#section8" className="text-cyan-600 hover:underline">How Do We Keep Your Information Safe?</a></li>
            <li><a href="#section9" className="text-cyan-600 hover:underline">Do We Collect Information From Minors?</a></li>
            <li><a href="#section10" className="text-cyan-600 hover:underline">What Are Your Privacy Rights?</a></li>
            <li><a href="#section11" className="text-cyan-600 hover:underline">Controls For Do-Not-Track Features</a></li>
            <li><a href="#section12" className="text-cyan-600 hover:underline">Do We Make Updates To This Notice?</a></li>
            <li><a href="#section13" className="text-cyan-600 hover:underline">How Can You Contact Us About This Notice?</a></li>
            <li><a href="#section14" className="text-cyan-600 hover:underline">How Can You Review, Update, Or Delete The Data We Collect From You?</a></li>
          </ol>

          {/* Section 1 */}
          <h2 id="section1" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            1. What Information Do We Collect?
          </h2>
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Personal information you disclose to us
          </h3>
          <p className="mb-4">
            <strong>In Short:</strong> We collect personal information that you provide to us.
          </p>
          <p className="mb-4">
            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
          </p>
          <p className="mb-4">
            <strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Phone numbers</li>
            <li>Email addresses</li>
            <li>Names</li>
            <li>Contact preferences</li>
          </ul>
          <p className="mb-6">
            All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Information automatically collected
          </h3>
          <p className="mb-4">
            <strong>In Short:</strong> Some information - such as your Internet Protocol (IP) address and/or browser and device characteristics - is collected automatically when you visit our Services.
          </p>
          <p className="mb-4">
            We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information.
          </p>
          <p className="mb-4">
            Like many businesses, we also collect information through cookies and similar technologies. You can find out more about this in our Cookie Notice:{" "}
            <a href="https://www.naderomarrealtor.com/cookie-policy" className="text-cyan-600 hover:underline">
              https://www.naderomarrealtor.com/cookie-policy
            </a>.
          </p>

          {/* Section 2 */}
          <h2 id="section2" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            2. How Do We Process Your Information?
          </h2>
          <p className="mb-4">
            <strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.
          </p>
          <p className="mb-4">We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>To deliver and facilitate delivery of services to the user.</strong></li>
            <li><strong>To respond to user inquiries/offer support to users.</strong></li>
            <li><strong>To send administrative information to you.</strong></li>
            <li><strong>To request feedback.</strong></li>
            <li><strong>To send you marketing and promotional communications.</strong> You can opt out of our marketing emails at any time.</li>
            <li><strong>To protect our Services.</strong></li>
            <li><strong>To evaluate and improve our Services, products, marketing, and your experience.</strong></li>
          </ul>

          {/* Section 3 */}
          <h2 id="section3" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            3. What Legal Bases Do We Rely On To Process Your Personal Information?
          </h2>
          <p className="mb-4">
            <strong>In Short:</strong> We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e. legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfil our contractual obligations, to protect your rights, or to fulfil our legitimate business interests.
          </p>
          <p className="mb-6">
            We may process your information if you have given us specific permission (i.e. express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e. implied consent). You can withdraw your consent at any time.
          </p>

          {/* Section 4 */}
          <h2 id="section4" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            4. When And With Whom Do We Share Your Personal Information?
          </h2>
          <p className="mb-4">
            <strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following categories of third parties.
          </p>
          <p className="mb-4">
            <strong>Vendors, Consultants, and Other Third-Party Service Providers.</strong> We may share your data with third-party vendors, service providers, contractors, or agents (&apos;third parties&apos;) who perform services for us or on our behalf and require access to such information to do that work.
          </p>
          <p className="mb-4">The categories of third parties we may share personal information with are as follows:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Data Analytics Services</li>
            <li>Website Hosting Service Providers</li>
            <li>Cloud Computing Services</li>
            <li>Communication & Collaboration Tools</li>
          </ul>

          {/* Section 5 */}
          <h2 id="section5" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            5. Do We Use Cookies And Other Tracking Technologies?
          </h2>
          <p className="mb-4">
            <strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your information.
          </p>
          <p className="mb-4">
            We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.
          </p>
          <p className="mb-6">
            Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice:{" "}
            <a href="https://www.naderomarrealtor.com/cookie-policy" className="text-cyan-600 hover:underline">
              https://www.naderomarrealtor.com/cookie-policy
            </a>.
          </p>

          {/* Section 6 */}
          <h2 id="section6" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            6. Do We Offer Artificial Intelligence-Based Products?
          </h2>
          <p className="mb-4">
            <strong>In Short:</strong> We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.
          </p>
          <p className="mb-4">
            As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, &apos;AI Products&apos;). These tools are designed to enhance your experience and provide you with innovative solutions.
          </p>
          <p className="mb-4">Our AI Products are designed for the following functions:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>AI chatbots for customer service</li>
            <li>AI insights for real estate guidance</li>
          </ul>

          {/* Section 7 */}
          <h2 id="section7" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            7. How Long Do We Keep Your Information?
          </h2>
          <p className="mb-4">
            <strong>In Short:</strong> We keep your information for as long as necessary to fulfil the purposes outlined in this Privacy Notice unless otherwise required by law.
          </p>
          <p className="mb-6">
            We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
          </p>

          {/* Section 8 */}
          <h2 id="section8" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            8. How Do We Keep Your Information Safe?
          </h2>
          <p className="mb-4">
            <strong>In Short:</strong> We aim to protect your personal information through a system of organisational and technical security measures.
          </p>
          <p className="mb-6">
            We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
          </p>

          {/* Section 9 */}
          <h2 id="section9" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            9. Do We Collect Information From Minors?
          </h2>
          <p className="mb-4">
            <strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years of age.
          </p>
          <p className="mb-6">
            We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. If you become aware of any data we may have collected from children under age 18, please contact us at{" "}
            <a href="mailto:naderomar@remax.ca" className="text-cyan-600 hover:underline">
              naderomar@remax.ca
            </a>.
          </p>

          {/* Section 10 */}
          <h2 id="section10" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            10. What Are Your Privacy Rights?
          </h2>
          <p className="mb-4">
            <strong>In Short:</strong> In some regions, such as Canada, you have rights that allow you greater access to and control over your personal information.
          </p>
          <p className="mb-4">
            In some regions (like Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making.
          </p>
          <p className="mb-4">
            <strong>Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us using the contact details provided below.
          </p>
          <p className="mb-6">
            <strong>Cookies and similar technologies:</strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. For further information, please see our Cookie Notice:{" "}
            <a href="https://www.naderomarrealtor.com/cookie-policy" className="text-cyan-600 hover:underline">
              https://www.naderomarrealtor.com/cookie-policy
            </a>.
          </p>

          {/* Section 11 */}
          <h2 id="section11" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            11. Controls For Do-Not-Track Features
          </h2>
          <p className="mb-6">
            Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (&apos;DNT&apos;) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.
          </p>

          {/* Section 12 */}
          <h2 id="section12" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            12. Do We Make Updates To This Notice?
          </h2>
          <p className="mb-4">
            <strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.
          </p>
          <p className="mb-6">
            We may update this Privacy Notice from time to time. The updated version will be indicated by an updated &apos;Revised&apos; date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
          </p>

          {/* Section 13 */}
          <h2 id="section13" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            13. How Can You Contact Us About This Notice?
          </h2>
          <p className="mb-4">
            If you have questions or comments about this notice, you may email us at{" "}
            <a href="mailto:naderomar@remax.ca" className="text-cyan-600 hover:underline">
              naderomar@remax.ca
            </a>{" "}
            or contact us by phone at:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-semibold text-gray-900 mb-2">Nader Omar</p>
            <p className="text-gray-700 mb-1">RE/MAX Nova</p>
            <p className="text-gray-700 mb-1">Fall River, Nova Scotia</p>
            <p className="text-gray-700 mb-4">Canada</p>
            <p className="text-gray-700">
              <strong>Phone:</strong>{" "}
              <a href="tel:+17823213393" className="text-cyan-600 hover:underline">
                (782) 321-3393
              </a>
            </p>
          </div>

          {/* Section 14 */}
          <h2 id="section14" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            14. How Can You Review, Update, Or Delete The Data We Collect From You?
          </h2>
          <p className="mb-6">
            Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please contact us at{" "}
            <a href="mailto:naderomar@remax.ca" className="text-cyan-600 hover:underline">
              naderomar@remax.ca
            </a>.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PrivacyPolicy;
