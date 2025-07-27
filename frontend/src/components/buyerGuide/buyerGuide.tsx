"use client";

import { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import agent from '../../../public/nader-22.jpg';  // your image import
import Image from "next/image";

const COLORS_TOP = ["#3B82F6", "#60A5FA", "#93C5FD", "#BFDBFE"];

const HomeBuyingGuide = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      className="relative px-4 py-24 text-gray-900
        bg-gradient-to-b from-blue-200 to-white"
    >
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-12">
        {/* Left side: header + paragraph */}
        <motion.div className="md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2
            className="mb-8 bg-gradient-to-br from-gray-900 to-blue-600 bg-clip-text text-center md:text-left text-3xl font-medium leading-tight text-transparent sm:text-4xl md:text-5xl"
          >
            Why Choose Me as Your Real Estate Agent
          </motion.h2>
          <motion.p
            className="mb-12 max-w-lg mx-auto md:mx-0 text-center md:text-left text-base leading-relaxed text-gray-700 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Buying or selling a home is more than just a transaction — it’s a
            significant life event that requires strategic expertise and genuine
            understanding. I combine data-driven insights with compassionate
            support to guide you confidently through every step of your journey.
          </motion.p>
        </motion.div>

        {/* Right side: image */}
        <motion.div
          className="md:w-1/2 max-w-sm rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image
            src={agent}
            alt="Agent Nader Omar"
            className="w-full h-auto object-cover rounded-lg"
            priority
          />
        </motion.div>
      </div>

      {/* 3 points / aspects below */}
      <div className="mt-16 grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
        {[
          {
            title: "Precision Through Data",
            description:
              "I use the latest Fall River market data, absorption rates, and hyper-local trends to price properties strategically and identify homes with strong appreciation potential. Every decision is backed by solid market evidence, not guesswork.",
          },
          {
            title: "Strategic Marketing & Negotiations",
            description:
              "My data analysis allows me to showcase your property effectively to qualified buyers or find homes that truly match your criteria. When negotiating, I provide clear market stats so we can secure the best price and terms confidently.",
          },
          {
            title: "Empathy & Ongoing Advocacy",
            description:
              "I start by listening to your goals and concerns to tailor my guidance personally. I keep you informed with transparent communication and calmly solve any unexpected challenges. My support continues beyond closing, offering you a trusted resource in your Fall River community.",
          },
        ].map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
          >
            <div className="mb-4 rounded-full bg-blue-200/50 px-4 py-2 text-sm font-medium text-gray-900">
              {step.title}
            </div>
            <p className="text-base leading-relaxed text-gray-700">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Button scroll to #contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-12 text-center"
      >
        <motion.button
          onClick={() => {
            const el = document.getElementById("contact");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
          style={{ border, boxShadow }}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          className="group relative flex w-fit mx-auto items-center gap-1.5 rounded-full bg-blue-200/30 px-6 py-3 text-gray-900 transition-colors hover:bg-blue-200/50"
        >
          Let&apos;s find your dream home
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default HomeBuyingGuide;
