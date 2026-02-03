"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import NaderNetworkMini from "@/components/svg/NaderNetworkMini";

const MeetNader: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={sectionRef}
      className="w-full max-w-[1200px] mx-auto py-12 px-4"
    >
      {/* Main content - flex row on md+ */}
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Left: Image + Network SVG */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="shrink-0 flex flex-col items-center gap-4"
        >
          <div className="relative">
            {/* Decorative background */}
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-3xl blur-xl" />

            {/* Image container */}
            <div className="relative w-[280px] h-[350px] md:w-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
              <Image
                src="/nader-82.jpg"
                alt="Nader Omar - Real Estate Agent"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-4 -right-4 bg-cyan-500 text-white px-4 py-2 rounded-xl shadow-lg"
            >
              <span className="font-bold">15+ Years</span>
              <span className="text-cyan-100 text-sm block">Experience</span>
            </motion.div>
          </div>

          {/* Network SVG below photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <NaderNetworkMini />
          </motion.div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 space-y-5"
        >
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-2"
            >
              Meet Your Agent
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            >
              Hi, I&apos;m <span className="gradient-text-accent">Nader</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-white/80 text-lg leading-relaxed"
          >
            I grew up in Egypt, studied tourism in Montreal, spent a year in Dubai, and eventually found my home in <strong className="text-white">Halifax</strong> in 2015. Along the way, I picked up three languages &mdash; English, French, and Arabic &mdash; and over <strong className="text-white">15 years of experience</strong> helping people navigate big decisions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="text-white/80 text-lg leading-relaxed"
          >
            Today, I&apos;m a proud husband and father of two boys, and I chose <strong className="text-white">Fall River</strong> for my family because of the lakes, trails, and tight-knit community. When I&apos;m not helping clients, you&apos;ll find me on a trail, riding my motorcycle, or exploring on my 4-wheeler.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-white/70 text-base leading-relaxed"
          >
            I don&apos;t guess &mdash; I analyze. My approach is <strong className="text-white">data-driven</strong> and <strong className="text-white">client-first</strong>, with proactive, transparent communication every step of the way. I own rental properties in Nova Scotia and Egypt, so I understand real estate from both sides of the table.
          </motion.p>

          {/* Language badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-wrap gap-2"
          >
            <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
              English
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
              Fran&ccedil;ais
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
              &#1575;&#1604;&#1593;&#1585;&#1576;&#1610;&#1577;
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <Link href="/about">
              <button className="bg-cyan-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group">
                More About Me
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/buy-home-fall-river">
              <button className="bg-white/10 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20">
                See My Process
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MeetNader;
