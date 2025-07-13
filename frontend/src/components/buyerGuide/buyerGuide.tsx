"use client"

import { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import Link from "next/link";

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
  // const backgroundImage = useMotionTemplate`linear-gradient(to bottom, #f0f9ff, #ffffff)`;

  return (
    <motion.section
    //  

      className="relative px-4 py-24 text-gray-900
  bg-gradient-to-b from-blue-200 to-white
      "
    >
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 bg-gradient-to-br from-gray-900 to-blue-600 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-4xl md:text-5xl"
        >
          Why Choose Us for Your Homeownership Journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 max-w-2xl mx-auto text-center text-base leading-relaxed text-gray-700 md:text-lg"
        >
          Buying a home in Fall River is more than a transaction—it’s a life-changing milestone. Our RE/MAX agents are your trusted partners, combining deep market expertise with genuine care to guide you every step of the way. With years of experience in Fall River’s fast-moving market (homes often sell in under 30 days), we’re here to make your journey seamless, informed, and exciting.
        </motion.p>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Personalized Guidance",
              description:
                "Your dreams matter. We start by understanding your unique goals—family needs, lifestyle, and what draws you to Fall River. From there, we tailor every step, connecting you with trusted mortgage experts to secure pre-approval and set a clear budget.",
            },
            {
              title: "Expert Market Insight",
              description:
                "With Fall River’s average home price around $930,900 (May 2025), our agents provide data-driven insights on pricing, competition, and trends. We’ll ensure you’re confident and prepared, with no surprises.",
            },
            {
              title: "Dedicated Support",
              description:
                "From touring homes to crafting winning offers and closing the deal, we’re by your side. Our commitment doesn’t end at closing—we’re here for ongoing support, from recommending local services to answering future questions.",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              className="flex flex-col items-center text-center"
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <Link href="/contact-agent">
            <motion.button
              style={{ border, boxShadow }}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              className="group relative flex w-fit mx-auto items-center gap-1.5 rounded-full bg-blue-200/30 px-6 py-3 text-gray-900 transition-colors hover:bg-blue-200/50"
            >
              Connect with Your Agent
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HomeBuyingGuide;