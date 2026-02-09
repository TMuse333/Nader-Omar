"use client";

import { useGeneralContext } from "@/context/context";
import React, { useState } from "react";
import { Blog } from "@/context/context";
import { AnimatePresence, motion } from "framer-motion";

const sampleBlogIdeas: Blog[] = [
  {
    title: "Why Fall River, Nova Scotia Is Perfect for First-Time Homebuyers in 2025",
    description: "Highlight the unique reasons why Fall River is a great choice for first-time buyers, including affordability, community features, and growth potential.",
    questions: [
      "What makes Fall River more affordable compared to nearby areas?",
      "What are the most attractive features for first-time buyers?",
      "Do you have examples of starter homes in Fall River?",
      "What financing or incentive programs are available for new buyers?"
    ],
    tags: ['fall river real estate', 'first-time buyers fall river']
  },
  {
    title: "Lakefront Living in Fall River, NS: Affordable Waterfront Homes to Watch in 2025",
    description: "Explore the charm of lakefront properties in Fall River, including affordability, lifestyle benefits, and upcoming opportunities.",
    questions: [
      "What are the most popular lakes to live on in Fall River?",
      "What makes lakefront living special in this community?",
      "Do you have examples of affordable waterfront listings?",
      "What lifestyle benefits do homeowners enjoy by the water?"
    ],
    tags: ['lakefront fall river', 'affordable waterfront homes']
  },
  {
    title: "Living in Fall River, NS: A 2025 Guide to Schools, Parks, and Community Events",
    description: "Provide a full guide to living in Fall River with insights into schools, parks, and community activities for families and newcomers.",
    questions: [
      "What are the top-rated schools in Fall River?",
      "What parks or outdoor spaces are popular with locals?",
      "What are some notable community events in 2025?",
      "What personal experiences do you have living or working in Fall River?"
    ],
    tags: ['living in fall river', 'fall river community']
  },
  {
    title: "Previous client stories if applicable",
    description: "Feature testimonials or case studies that show your real estate expertise and client satisfaction in Fall River.",
    questions: [
      "Client names or initials (with permission)",
      "Challenges faced and solutions provided",
      "Unique aspects of the properties purchased",
      "How the client benefited from your service"
    ],
    tags: ['fall river real estate client stories']
  },
];


const BlogList: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [pendingBlog, setPendingBlog] = useState<Blog | null>(null);
  const { setSelectedBlog } = useGeneralContext();

  const handleBlogClick = (blog: Blog) => {
    setSelectedBlog(blog);
    setShowModal(false);
    setPendingBlog(null);
  };

  const handleBlogContainerClick = (blog: Blog) => {
    setPendingBlog(blog);
    setShowModal(true);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h2 className="font-bold text-2xl text-white mb-2">✍️ Blog Ideas</h2>
        <p className="text-gray-400">
          Select a blog idea to start creating your post. You can choose to answer personalized questions to make your blog post unique and engaging.
        </p>
      </div>

      <div className="space-y-4">
        {sampleBlogIdeas.map((blog, idx) => (
          <div
            key={idx}
            className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5 hover:border-cyan-500/30 transition-all cursor-pointer group"
            onClick={() => handleBlogContainerClick(blog)}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{blog.description}</p>
                <div className="text-sm">
                  <p className="text-gray-500 font-medium mb-2">Questions to personalize:</p>
                  <ul className="space-y-1">
                    {blog.questions.slice(0, 2).map((note, nIdx) => (
                      <li key={nIdx} className="text-gray-500 text-xs flex items-start gap-2">
                        <span className="text-cyan-500">•</span>
                        {note}
                      </li>
                    ))}
                    {blog.questions.length > 2 && (
                      <li className="text-gray-600 text-xs">
                        +{blog.questions.length - 2} more questions...
                      </li>
                    )}
                  </ul>
                </div>
                <div className="flex gap-2 mt-3">
                  {blog.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-gray-500 group-hover:text-cyan-400 transition-colors">→</span>
            </div>
          </div>
        ))}
      </div>

      {/* Coming Soon Section */}
      <div className="mt-8 bg-gradient-to-r from-[#1a1a1a] to-[#1a2a2a] rounded-xl p-6 border border-cyan-500/20">
        <h3 className="font-bold text-lg text-white mb-2">🚀 Coming Soon</h3>
        <p className="text-gray-400 text-sm">
          Blog scheduling, automatic publishing, and AI-powered topic suggestions based on your local market trends.
        </p>
      </div>

      <AnimatePresence>
        {showModal && pendingBlog && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] p-8 w-full max-w-md text-center"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-semibold text-xl text-white mb-4">Start this blog?</h3>
              <p className="mb-6 text-gray-400">
                Would you like to answer personal questions for: <span className="text-cyan-400 font-medium">{pendingBlog.title}</span>?
              </p>
              <div className="flex justify-around gap-4">
                <button
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition-all shadow-lg shadow-cyan-500/20"
                  onClick={() => handleBlogClick(pendingBlog)}
                >
                  Yes, let&apos;s go
                </button>
                <button
                  className="flex-1 bg-[#2a2a2a] text-gray-300 px-4 py-2 rounded-lg hover:bg-[#3a3a3a] transition-all"
                  onClick={() => setShowModal(false)}
                >
                  Not now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlogList;
