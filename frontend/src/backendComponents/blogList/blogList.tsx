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
    <div className="max-w-3xl mx-auto bg-gradient-to-b from-gray-50 to-white rounded-xl shadow-sm">
      <div className="flex flex-col justify-between items-start p-6 border-b border-gray-200">
        <h2 className="font-bold text-2xl text-gray-800 mb-3">Blog Ideas</h2>
        <p className="text-gray-600">
          Select a blog idea to start creating your post. You can choose to answer personalized questions to make your blog post unique and engaging.
        </p>
      </div>

      <div className="p-6 space-y-4">
        {sampleBlogIdeas.map((blog, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-lg p-5 bg-white hover:bg-gradient-to-r from-gray-50 to-gray-100 transition-all cursor-pointer shadow-sm hover:shadow-md"
            onClick={() => handleBlogContainerClick(blog)}
          >
            <h3 className="font-semibold text-lg text-gray-800 mb-2">{blog.title}</h3>
            <p className="text-gray-600 mb-3">{blog.description}</p>
            <div className="text-sm text-gray-700">
              <strong className="font-medium">Suggested personal notes:</strong>
              <ul className="list-disc list-inside mt-2 space-y-2">
                {blog.questions.map((note, nIdx) => (
                  <li key={nIdx} className="text-gray-600">{note}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {showModal && pendingBlog && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-8 w-96 text-center shadow-xl"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <h3 className="font-semibold text-xl text-gray-800 mb-4">Start this blog?</h3>
              <p className="mb-6 text-gray-600">Would you like to answer personal questions for the blog: <strong>{pendingBlog.title}</strong>?</p>
              <div className="flex justify-around gap-4">
                <button
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all"
                  onClick={() => handleBlogClick(pendingBlog)}
                >
                  Yes
                </button>
                <button
                  className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-all"
                  onClick={() => setShowModal(false)}
                >
                  No
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