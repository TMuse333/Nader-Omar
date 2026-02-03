"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BarChart3,
  MessageCircle,
  Heart,
  Globe,
} from "lucide-react";

interface Differentiator {
  icon: React.ElementType;
  title: string;
  description: string;
  quote: string;
}

const differentiators: Differentiator[] = [
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    description:
      "I don't guess — I analyze. Every recommendation is backed by market data, comparable sales, and pricing trends so you can move forward with confidence.",
    quote: "Smart Decisions, Backed by Data",
  },
  {
    icon: Heart,
    title: "Emotional Support, Every Step",
    description:
      "Buying a home is one of the biggest decisions you'll make. I provide honest guidance and genuine care to keep you grounded through every milestone.",
    quote: "Your goals, my priority",
  },
  {
    icon: MessageCircle,
    title: "Proactive Communication",
    description:
      "You'll never wonder what's happening next. I keep you informed with transparent, timely updates — before you even have to ask.",
    quote: "No surprises, just clarity",
  },
  {
    icon: Globe,
    title: "Trilingual Advantage",
    description:
      "Fluent in English, French, and Arabic, I connect with a wider client base and bring cultural sensitivity to every transaction — locally and internationally.",
    quote: "Nothing lost in translation",
  },
];

const WhyChooseMe: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 md:py-20 px-6 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-3">
            What Sets Me Apart
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-cyan-600">Nader</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            I bring more than just market knowledge — I bring a commitment to making your experience clear, confident, and personal.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-cyan-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  <item.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <p className="text-cyan-600 text-sm font-medium italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
