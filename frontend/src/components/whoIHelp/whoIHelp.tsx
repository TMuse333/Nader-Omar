"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Home, Users, ArrowDownCircle, Plane } from "lucide-react";

interface ClientType {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const clientTypes: ClientType[] = [
  {
    icon: <Home className="w-8 h-8" />,
    title: "First-Time Buyers",
    description:
      "Navigating your first purchase can feel overwhelming. I break down every step so you feel confident and informed.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Growing Families",
    description:
      "Need more space? I help families find homes with the right schools, yards, and community feel.",
  },
  {
    icon: <ArrowDownCircle className="w-8 h-8" />,
    title: "Downsizers",
    description:
      "Ready for less maintenance and more freedom? I'll help you find the perfect fit for your next chapter.",
  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Relocators",
    description:
      "Moving to Nova Scotia? I provide local insights and virtual tours to make your transition seamless.",
  },
];

const WhoIHelp: React.FC = () => {
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
            Client-Focused Service
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Who I <span className="text-cyan-600">Help</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Every client has unique needs. I tailor my approach to meet you where you are in your journey.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientTypes.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-cyan-200"
            >
              <div className="w-14 h-14 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 mb-4 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                {client.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {client.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {client.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIHelp;
