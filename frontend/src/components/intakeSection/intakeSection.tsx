"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Phone, Mail, MapPin } from "lucide-react";
import InlineChatbot from "@/components/chatbotWidget/inlineChatbot";
import ChatToHomeMatch from "@/components/svg/ChatToHomeMatch";

const IntakeSection: React.FC = () => {

  return (
    <section
      id="intake"
      className="w-full py-16 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Make Your Move?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Tell me about your real estate goals and I&apos;ll get back to you personally
            with a tailored plan for buying or selling in Fall River.
          </p>
        </motion.div>

        {/* SVG Visual - How It Works */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-10"
        >
          <ChatToHomeMatch />
        </motion.div>

        {/* Inline Chatbot */}
        <div id="chatbot-section" className="mb-10">
          <InlineChatbot
            title="Chat with Nader"
            subtitle="Get personalized guidance for your real estate journey"
          />
        </div>

        {/* Let's Connect Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left: Contact Info */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Let&apos;s Connect
                </h3>
                <p className="text-gray-600">
                  Whether you&apos;re ready to start today or just exploring your options,
                  I&apos;m here to help. Reach out and let&apos;s talk about your goals.
                </p>

                <div className="space-y-4">
                  <a
                    href="tel:+17823213393"
                    className="flex items-center gap-3 text-gray-700 hover:text-cyan-500 transition-colors"
                  >
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="font-medium">(782) 321-3393</span>
                  </a>

                  <a
                    href="mailto:naderomar@remax.ca"
                    className="flex items-center gap-3 text-gray-700 hover:text-cyan-500 transition-colors"
                  >
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="font-medium">naderomar@remax.ca</span>
                  </a>

                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="font-medium">Fall River, NS</span>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">5-Star Google Rating</span>
                  </div>
                  <p className="text-sm text-gray-500">RE/MAX Nova | 15+ Years Experience</p>
                </div>
              </div>

              {/* Right: CTA Buttons */}
              <div className="flex flex-col justify-center space-y-4">
                <a href="/free-market-evaluation">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-cyan-500 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:bg-cyan-400 transition-colors"
                  >
                    Get Your Free Market Evaluation
                  </motion.button>
                </a>

                <a href="tel:+17823213393">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gray-100 text-gray-800 py-4 px-6 rounded-xl font-bold text-lg hover:bg-gray-200 transition-colors"
                  >
                    Call Now: (782) 321-3393
                  </motion.button>
                </a>

                <p className="text-center text-sm text-gray-500 pt-2">
                  No pressure, just honest guidance.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom trust reminder */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-400 text-sm mt-6"
        >
          Serving Fall River, Waverley, Wellington, and surrounding areas
        </motion.p>
      </div>
    </section>
  );
};

export default IntakeSection;
