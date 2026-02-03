"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Step {
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    title: "Initial Consultation",
    description:
      "We start with a conversation about your goals, budget, timeline, and what matters most to you in a home. No pressure — just honest guidance.",
  },
  {
    title: "Get Pre-Approved",
    description:
      "I connect you with trusted mortgage professionals to determine your buying power and get you pre-approved, so you're ready to move quickly.",
  },
  {
    title: "Property Search",
    description:
      "Using data-driven insights and my local expertise, I curate listings that match your criteria — saving you time and focusing on real opportunities.",
  },
  {
    title: "Viewings & Evaluation",
    description:
      "We tour properties together. I point out details others miss, discuss neighborhood factors, and help you evaluate each home objectively.",
  },
  {
    title: "Offer & Negotiation",
    description:
      "When you find the one, I craft a competitive offer and negotiate on your behalf — protecting your interests while positioning you to win.",
  },
  {
    title: "Closing & Keys",
    description:
      "I guide you through inspections, conditions, and paperwork. On closing day, you get your keys — and I'm still here if you need anything after.",
  },
];

const JourneyOverview: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <motion.section
      ref={sectionRef}
      id="value-props"
      className="w-full py-20 px-6 dark-bg-primary"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold uppercase tracking-wider mb-3 text-cyan-400"
          >
            The Buying Process
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 gradient-text-accent"
          >
            Your Path to Homeownership
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto text-gray-400"
          >
            A clear, step-by-step journey from first conversation to getting your keys. Here&apos;s exactly what to expect when you work with me.
          </motion.p>
        </div>

        {/* Timeline Steps */}
        <div className="relative">
          {/* Connecting Line - hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-cyan-500 to-cyan-600 rounded-full" />

          {/* Steps */}
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      isEven ? "md:text-right" : "md:text-left"
                    } text-center`}
                  >
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/10 hover:border-cyan-500/30 transition-colors">
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base leading-relaxed text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Step Number Circle */}
                  <div className="relative flex items-center justify-center md:w-2/12 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 + 0.2 }}
                      className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-xl border-4 border-[#0f0f0f] bg-gradient-to-br from-cyan-400 to-cyan-600"
                    >
                      <span className="text-white text-xl md:text-2xl font-bold">
                        {idx + 1}
                      </span>
                    </motion.div>
                  </div>

                  {/* Empty space for layout balance on desktop */}
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 mb-4">Ready to start your journey?</p>
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 bg-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-cyan-400 transition-all duration-300 hover:shadow-cyan-500/25"
          >
            Let&apos;s Talk
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default JourneyOverview;
