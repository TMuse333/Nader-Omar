"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import agent from "../../../public/nader-57.jpg";

const ProcessPreview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const steps = [
    "Personal consultation to understand your goals",
    "Tailored property searches based on your needs",
    "Expert negotiation and guidance through closing",
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="w-[98vw] max-w-[1200px] mx-auto my-8 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#333333]"
    >
      {/* Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center w-full text-3xl sm:text-4xl md:text-5xl font-bold pt-10 md:pt-14 px-4 text-white"
      >
        Your <span className="gradient-text-accent">Journey</span> to Homeownership
      </motion.h2>

      {/* Main Content - Text + Image side by side (reversed) */}
      <section className="flex flex-col md:flex-row-reverse px-6 md:px-10 lg:px-14 mx-auto gap-8 md:gap-12 py-10 md:py-14">
        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-[45%] flex items-center justify-center"
        >
          <div className="relative w-[90vw] sm:w-[80vw] md:w-full max-w-[500px] rounded-2xl overflow-hidden shadow-xl border-4 border-white/20 backdrop-blur-sm">
            <Image
              src={agent}
              alt="Agent Nader Omar"
              className="w-full h-[50vh] md:h-[55vh] object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Description Container */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full md:w-[55%] flex flex-col justify-center"
        >
          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-white/90 mb-6">
            From your first call to getting the keys, I guide you through every step with clarity and care. My proven 3-step process ensures you&apos;re informed, confident, and never alone in your home buying journey.
          </p>

          {/* Quick Steps List */}
          <ul className="space-y-3 mb-8">
            {steps.map((step, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-white/90 font-medium">{step}</span>
              </motion.li>
            ))}
          </ul>

          <Link href="/buy-home-fall-river" className="inline-flex items-center gap-2 self-start">
            <button className="bg-cyan-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2 group">
              Explore Full Process
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </section>
    </motion.section>
  );
};

export default ProcessPreview;
