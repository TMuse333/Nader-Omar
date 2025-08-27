'use client';

import React from 'react';

const DashboardHelp: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Welcome, Nader</h2>

      <div className="text-gray-700">
        <p>
         Hello, Nader, welcome to your website dashboard! I have implemented some
         tools to help make better blog posts and keep track of statistics 
         on your website so it is easier for you to see. 
         Pulling the analytics accurately and displaying them here is still under works but
         there is a bit here.
        </p>

        <h2 className="text-xl font-bold mb-4 mt-4">This dashboard includes</h2>
        <ul className="list-disc ml-6 mt-2">

          <li>Blog topic ideas</li>
          <li>An input centre where you can put insights about your business</li>
          <li>A place to see all of your inputs into the database</li>
          {/* <li>Viewing top search queries and CTR with Search Console.</li>
          <li>Google analytics (still working on this to be more accurate)</li> */}
          <li>A feedback form for feedback and future ideas</li>
        </ul>

        <h2 className="text-xl font-bold mb-4 mt-4">Actionable steps</h2>
        <ul className="list-disc ml-6 mt-2">
          <li>Select which blog you want to post first</li>
          <li>Upload a bit of data to the database for personalization</li>
          <li>Optionally fill out the feedback form (useful for the future)</li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardHelp;
