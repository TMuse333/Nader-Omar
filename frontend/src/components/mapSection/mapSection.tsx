"use client"

import React, { useRef, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, animate, useInView } from "framer-motion";

const MapSection = (): React.JSX.Element => {
  const COLORS = ["#3B82F6", "#60A5FA", "#93C5FD", "#BFDBFE"];
  const color = useMotionValue(COLORS[0]);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 12,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const background = useMotionTemplate`radial-gradient(80% 200% at 50% 50%, ${color}, transparent)`;

  return (
    <section className="bg-blue-50 relative py-12">
      <motion.div className="absolute inset-0 z-[-10]" style={{ background }} />
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight bg-gradient-to-br from-gray-900 via-blue-600 to-blue-400 bg-clip-text text-transparent [text-shadow:0_2px_4px_rgba(0,0,0,0.15)]"
        >
          Visit Us in Fall River
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-xl text-lg sm:text-xl md:text-2xl leading-relaxed font-medium text-gray-800 [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]"
        >
          Find Nader Omar’s RE/MAX Nova office conveniently located in Fall River, ready to assist with your real estate needs.
        </motion.p>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 80, damping: 15 }}
          className="mt-8 w-full max-w-[600px] h-[450px] md:h-[500px] mx-auto border-2 border-blue-200 rounded-xl shadow-[0_4px_16px_rgba(96,165,250,0.1)] overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2874925.3243252155!2d-65.67287446945885!3d45.27722254932829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x81b45d7471948c8b%3A0xd412dd7215b2e5dc!2sNader%20Omar%20Remax%20Nova!5e0!3m2!1sen!2sca!4v1753798436064!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;