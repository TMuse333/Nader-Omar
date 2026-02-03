"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

const ClosingCTA: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 md:py-28 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home.jpeg"
          alt="Fall River Nova Scotia"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f]/95 via-[#0f0f0f]/90 to-[#0f0f0f]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-semibold mb-6"
        >
          Ready to Take the Next Step?
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
        >
          Your <span className="gradient-text-accent">Dream Home</span> in Fall River is Waiting
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Whether you&apos;re just starting to explore or ready to make an offer, I&apos;m here to guide you every step of the way. Let&apos;s have a conversation about what you&apos;re looking for — no pressure, just honest advice.
        </motion.p>

        {/* Trust Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mb-10"
        >
          <div className="flex items-center gap-2 text-white/70">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-sm">No obligation consultation</span>
          </div>
          <div className="flex items-center gap-2 text-white/70">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-sm">Available evenings & weekends</span>
          </div>
          <div className="flex items-center gap-2 text-white/70">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-sm">English, French & Arabic</span>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center gap-2 bg-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-cyan-400 transition-all duration-300 hover:shadow-cyan-500/25 group"
          >
            Start Your Search
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="tel:+17823213393"
            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            Call (782) 321-3393
          </a>
        </motion.div>

        {/* Personal Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-white/50 text-sm mt-10 italic"
        >
          &ldquo;I respond to every message personally — usually within a few hours.&rdquo; — Nader
        </motion.p>
      </div>
    </section>
  );
};

export default ClosingCTA;
