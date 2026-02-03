"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  isInView: boolean;
}

const AnimatedCounter: React.FC<{ target: number; suffix: string; isInView: boolean }> = ({
  target,
  suffix,
  isInView,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
      {count}
      {suffix}
    </span>
  );
};

const StatCard: React.FC<StatProps> = ({ value, suffix, label, isInView }) => {
  return (
    <div className="flex flex-col items-center text-center px-6 py-4">
      <AnimatedCounter target={value} suffix={suffix} isInView={isInView} />
      <p className="mt-2 text-gray-400 font-medium text-sm md:text-base">{label}</p>
    </div>
  );
};

const ByTheNumbers: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });

  const stats = [
    { value: 15, suffix: "+", label: "Years Experience" },
    { value: 3, suffix: "", label: "Languages Spoken" },
    { value: 5, suffix: "", label: "Star Google Rating" },
    { value: 100, suffix: "%", label: "Client Focused" },
  ];

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="w-[98vw] max-w-[1200px] mx-auto my-4"
    >
      <div className="bg-gradient-to-r from-cyan-500/10 via-cyan-500/5 to-cyan-500/10 rounded-2xl border border-white/10 py-8 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} isInView={isInView} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ByTheNumbers;
