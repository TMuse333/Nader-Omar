"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import agent from "../../../public/nader-22.jpg";
import Image from "next/image";

const HomeBuyingGuide = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const valuePillars = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Precision Through Data",
      description:
        "I use the latest Fall River market data, absorption rates, and hyper-local trends to price properties strategically and identify homes with strong appreciation potential.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      title: "Strategic Negotiations",
      description:
        "My data analysis allows me to showcase your property effectively to qualified buyers or find homes that truly match your criteria with clear market stats.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Empathy & Advocacy",
      description:
        "I listen to your goals and concerns to tailor my guidance personally. My support continues beyond closing as a trusted resource in your community.",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="relative px-4 py-20 dark-bg overflow-hidden"
    >
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-cyan-500/5 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-[1400px] relative z-10">
        {/* Flex row layout */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Left side: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full md:w-2/5 shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 blur-2xl rounded-2xl" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 max-w-[400px] mx-auto">
                <Image
                  src={agent}
                  alt="Agent Nader Omar"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Right side: Text + Cards */}
          <div className="w-full md:w-3/5 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              Why Choose <span className="gradient-text-accent">Me</span> as Your Agent
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto md:mx-0"
            >
              Buying or selling a home is more than just a transaction — it&apos;s a
              significant life event that requires strategic expertise and genuine
              understanding. I combine data-driven insights with compassionate
              support to guide you confidently.
            </motion.p>

            {/* Value pillars grid */}
            <div className="grid gap-4 sm:grid-cols-3">
              {valuePillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                    {pillar.icon}
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2">{pillar.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{pillar.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8"
            >
              <button
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Let&apos;s find your dream home
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeBuyingGuide;
