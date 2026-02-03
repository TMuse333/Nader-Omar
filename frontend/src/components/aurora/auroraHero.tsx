"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import agent from "../../../public/nader.jpg";
import logo from "../../../public/remax-nova-flag.webp";
import Image from "next/image";

const AuroraHero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex items-center overflow-hidden dark-bg-primary px-4 py-24 pt-28"
    >
      {/* Subtle gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-500/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-cyan-500/10 to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center max-w-[1400px] mx-auto gap-12 md:gap-16 w-full">
        {/* Left - Agent Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, type: "spring", stiffness: 80, damping: 15 }}
          className="w-full md:w-2/5 flex flex-col items-center justify-center"
        >
          <Image
            width={100}
            height={100}
            src={logo}
            alt="remax nova logo"
            className="w-[80px] md:w-[100px] mb-6 rounded-lg bg-white p-2 object-contain"
          />
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 blur-3xl rounded-full scale-110" />
            <div className="relative h-56 w-56 md:h-80 md:w-80 rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
              <Image
                priority
                src={agent}
                alt="Agent Nader Omar"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Right - Text Content */}
        <div className="w-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 inline-block rounded-full bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-400"
          >
            Buy a home in Fall River with Nader Omar
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-6"
          >
            Your <span className="gradient-text-accent">Dream Home</span> Awaits
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-xl text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 mb-8"
          >
            Partner with Nader Omar, your trusted RE/MAX agent, to navigate Fall
            River&apos;s competitive market with ease. Enjoy personalized guidance,
            expert insights, and a stress-free journey to your perfect home.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex gap-4 flex-wrap justify-center md:justify-start"
          >
            <button
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white text-base font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Connect with Nader
            </button>
            <a
              href="tel:+17823213393"
              className="px-6 py-3 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 text-base font-semibold rounded-full transition-all duration-300"
            >
              Call Now
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AuroraHero;