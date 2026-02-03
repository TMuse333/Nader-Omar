"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Globe, Award, Users, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: <Globe className="w-6 h-6" />,
    value: "110+",
    label: "Countries",
  },
  {
    icon: <Users className="w-6 h-6" />,
    value: "140K+",
    label: "Agents Worldwide",
  },
  {
    icon: <Award className="w-6 h-6" />,
    value: "#1",
    label: "Real Estate Brand",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    value: "50+",
    label: "Years of Excellence",
  },
];

const RemaxCredibility: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 md:py-20 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left - Logo and Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
              <Image
                src="/remax-nova-flag.webp"
                alt="RE/MAX Nova Logo"
                width={80}
                height={80}
                className="w-[70px] md:w-[80px] bg-white rounded-lg p-2"
              />
              <div>
                <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
                  Proudly With
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  RE/MAX Nova
                </h2>
              </div>
            </div>

            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6 max-w-xl">
              When you work with me, you get the personal attention of a dedicated local agent backed by the global resources and reputation of RE/MAX — the world&apos;s most recognized real estate brand.
            </p>

            <p className="text-white/60 text-sm leading-relaxed">
              RE/MAX agents consistently outsell and outperform the competition. That expertise, combined with my local knowledge, means you&apos;re in good hands.
            </p>
          </motion.div>

          {/* Right - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                    {stat.icon}
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RemaxCredibility;
