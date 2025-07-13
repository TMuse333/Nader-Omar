"use client"

import React, { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import Link from "next/link";

const COLORS_TOP = ["#3B82F6", "#60A5FA", "#93C5FD", "#BFDBFE"];

const ClosingSection: React.FC = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const border = useMotionTemplate`2px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  const backgroundImage = useMotionTemplate`linear-gradient(to bottom, #f0f9ff, #ffffff)`;

  return (
    <motion.section
      style={{ backgroundImage }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative py-16 pb-24 text-gray-900 overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl font-semibold bg-gradient-to-br from-gray-900 to-blue-600 bg-clip-text text-transparent mb-6"
        >
          Start Your Fall River Home Journey Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg max-w-2xl mx-auto leading-relaxed text-gray-700"
        >
          With Nader Omar and RE/MAX, your dream home is within reach.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 max-w-3xl mx-auto"
        >
          <p className="text-base leading-relaxed text-gray-700">
            Partner with Nader Omar, your trusted RE/MAX agent, to navigate Fall River’s competitive
            market with confidence. Benefit from personalized guidance, expert market insights, and a
            stress-free process tailored to your needs. Whether it’s securing your dream home or
            maximizing your investment, we’re here to make it happen—starting today.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8"
        >
          <Link href="/contact-agent">
            <motion.button
              style={{ border: border.get(), boxShadow: boxShadow.get() }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-2 rounded-full bg-blue-200/30 px-6 py-3 text-lg font-semibold text-gray-900 transition-colors hover:bg-blue-200/50"
            >
              Get Started with Nader
              <motion.span
                className="inline-block"
                transition={{ duration: 0.3 }}
                whileHover={{ x: 5 }}
              >
                →
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
      </div>
    </motion.section>
  );
};

export default ClosingSection;