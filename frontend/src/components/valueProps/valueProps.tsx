"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, BarChart3, MapPin } from "lucide-react";

interface ValueProp {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight: string;
}

const valueProps: ValueProp[] = [
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Trilingual Service",
    highlight: "English • French • Arabic",
    description:
      "Communicate comfortably in your preferred language throughout the entire buying process.",
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: "Data-Driven Search",
    highlight: "Smart Decisions",
    description:
      "I analyze market trends, pricing history, and neighborhood data to find homes with real value.",
  },
  {
    icon: <MapPin className="w-7 h-7" />,
    title: "Local Expert",
    highlight: "Fall River Specialist",
    description:
      "I live here. I know every street, school, and hidden gem. Get insights only a local can provide.",
  },
];

const ValueProps: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="w-full py-12 px-4 dark-bg-primary"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  {prop.icon}
                </div>

                {/* Highlight Badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
                  {prop.highlight}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {prop.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {prop.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
