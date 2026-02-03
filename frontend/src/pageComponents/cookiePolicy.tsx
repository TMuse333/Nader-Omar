"use client";

import React from "react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const CookiePolicy = () => {
  return (
    <main className="w-screen bg-white">
      <Navbar excludedLink="" />

      <section className="pt-[120px] pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Cookie Policy
        </h1>
        <p className="text-gray-600 mb-8">Last updated February 2, 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-6">
            This Cookie Policy explains how Nader Omar Real Estate (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; and &quot;our&quot;) uses cookies and similar technologies to recognize you when you visit our website at{" "}
            <a href="https://www.naderomarrealtor.com" className="text-cyan-600 hover:underline">
              https://www.naderomarrealtor.com
            </a>{" "}
            (&quot;Website&quot;). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>

          <p className="mb-6">
            In some cases we may use cookies to collect personal information, or that becomes personal information if we combine it with other information.
          </p>

          {/* What are cookies? */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What are cookies?
          </h2>
          <p className="mb-6">
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>
          <p className="mb-6">
            Cookies set by the website owner (in this case, Nader Omar Real Estate) are called &quot;first-party cookies.&quot; Cookies set by parties other than the website owner are called &quot;third-party cookies.&quot; Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
          </p>

          {/* Why do we use cookies? */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Why do we use cookies?
          </h2>
          <p className="mb-6">
            We use first- and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as &quot;essential&quot; or &quot;strictly necessary&quot; cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Website for advertising, analytics, and other purposes. This is described in more detail below.
          </p>

          {/* How can I control cookies? */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How can I control cookies?
          </h2>
          <p className="mb-4">
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
          </p>
          <p className="mb-6">
            The Cookie Consent Manager can be found in the notification banner and on our Website. If you choose to reject cookies, you may still use our Website though your access to some functionality and areas of our Website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies.
          </p>

          {/* Cookie Types */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Types of Cookies We Use
          </h2>

          {/* Analytics cookies */}
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Analytics and customization cookies
          </h3>
          <p className="mb-4">
            These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Provider</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Expires</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">_ga_#</td>
                  <td className="border border-gray-300 px-4 py-2">Used to distinguish individual users by means of designation of a randomly generated number as client identifier</td>
                  <td className="border border-gray-300 px-4 py-2">.naderomarrealtor.com (Google Analytics)</td>
                  <td className="border border-gray-300 px-4 py-2">1 year 1 month 4 days</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">_ga</td>
                  <td className="border border-gray-300 px-4 py-2">Records a particular ID used to come up with data about website usage by the user</td>
                  <td className="border border-gray-300 px-4 py-2">.naderomarrealtor.com (Google Analytics)</td>
                  <td className="border border-gray-300 px-4 py-2">1 year 1 month 4 days</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Essential cookies */}
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Essential cookies
          </h3>
          <p className="mb-4">
            These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Provider</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Expires</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">cookieConsent</td>
                  <td className="border border-gray-300 px-4 py-2">Stores the user&apos;s cookie consent state for the current domain</td>
                  <td className="border border-gray-300 px-4 py-2">naderomarrealtor.com</td>
                  <td className="border border-gray-300 px-4 py-2">Persistent</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Browser controls */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How can I control cookies on my browser?
          </h2>
          <p className="mb-4">
            As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser&apos;s help menu for more information. The following is information about how to manage cookies on the most popular browsers:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Chrome</li>
            <li>Internet Explorer</li>
            <li>Firefox</li>
            <li>Safari</li>
            <li>Edge</li>
            <li>Opera</li>
          </ul>
          <p className="mb-4">
            In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>
              <a href="http://www.aboutads.info/choices/" className="text-cyan-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Digital Advertising Alliance
              </a>
            </li>
            <li>
              <a href="https://youradchoices.ca/" className="text-cyan-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Digital Advertising Alliance of Canada
              </a>
            </li>
            <li>
              <a href="http://www.youronlinechoices.com/" className="text-cyan-600 hover:underline" target="_blank" rel="noopener noreferrer">
                European Interactive Digital Advertising Alliance
              </a>
            </li>
          </ul>

          {/* Web beacons */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What about other tracking technologies, like web beacons?
          </h2>
          <p className="mb-6">
            Cookies are not the only way to recognize or track visitors to a website. We may use other, similar technologies from time to time, like web beacons (sometimes called &quot;tracking pixels&quot; or &quot;clear gifs&quot;). These are tiny graphics files that contain a unique identifier that enables us to recognize when someone has visited our Website or opened an email including them. This allows us, for example, to monitor the traffic patterns of users from one page within a website to another, to deliver or communicate with cookies, to understand whether you have come to the website from an online advertisement displayed on a third-party website, to improve site performance, and to measure the success of email marketing campaigns. In many instances, these technologies are reliant on cookies to function properly, and so declining cookies will impair their functioning.
          </p>

          {/* Updates */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How often will you update this Cookie Policy?
          </h2>
          <p className="mb-6">
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
          </p>
          <p className="mb-6">
            The date at the top of this Cookie Policy indicates when it was last updated.
          </p>

          {/* Contact */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Where can I get further information?
          </h2>
          <p className="mb-4">
            If you have any questions about our use of cookies or other technologies, please email us at{" "}
            <a href="mailto:naderomar@remax.ca" className="text-cyan-600 hover:underline">
              naderomar@remax.ca
            </a>{" "}
            or by phone:
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
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CookiePolicy;
