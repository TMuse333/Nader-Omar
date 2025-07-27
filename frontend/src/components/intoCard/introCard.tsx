"use client";

import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
  useInView,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";
import agent from '../../../public/nader-82.jpg';
import Image from "next/image";

const COLORS_TOP = ["#3B82F6", "#60A5FA", "#93C5FD", "#BFDBFE"];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.6 + i * 0.2, ease: "easeOut" },
  }),
};

const IntroCard: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9]);
  const color = useMotionValue(COLORS_TOP[0]);
  const border = useMotionTemplate`2px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 8px 32px ${color}`;

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const headline = "Hello, I'm Nader — Your Fall River Real Estate Specialist";

  const paragraph = `
  Born in Egypt, I've spent the last 15 years in customer support — training, coaching, and leading teams to success. I now bring that same dedication to real estate, combining deep people skills with local market expertise. Since moving to Halifax in 2015 and raising my family here, I've built a strong portfolio of rental properties across Nova Scotia and Egypt. I know what it means to buy, sell, and invest with confidence — and I’m here to help you do the same. Whether you're relocating, upgrading, or diving into your first purchase, I’ll guide you with patience, clarity, and hustle.
  `;
  
  const valueProps = [
    "15+ Years of Service & Coaching — Bringing empathy, clarity, and responsiveness to every real estate journey.",
    "Global Perspective, Local Insight — Having lived in Egypt, Montreal, Dubai, and now Halifax, I understand diverse client needs.",
    "Fluent in English, French & Arabic — Ensuring clear, comfortable communication for you and your entire family.",
    "Investor-Minded — I own properties in Nova Scotia and abroad. Whether you're buying your first home or growing a portfolio, I’ve been there.",
  ];

  return (
    <motion.section
      ref={sectionRef}
      style={{ scale }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full max-w-5xl mx-auto my-12 px-4 py-36 text-gray-900 overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 to-white"
    >
      <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="h-48 w-48 md:h-96 md:w-96 rounded-xl overflow-hidden border-4 border-blue-200 shadow-xl"
            // style={{ boxShadow }}
          >
            <Image
            width={600}
            height={1300}
              src={agent.src}
              alt="Agent Nader Omar"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.h2
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold bg-gradient-to-br from-gray-900 to-blue-600 bg-clip-text text-transparent mb-6"
          >
            {headline}
          </motion.h2>
          <motion.p
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg max-w-2xl leading-relaxed text-gray-700 mb-8 whitespace-pre-line"
          >
            {paragraph}
          </motion.p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 max-w-3xl mx-auto mb-8">
        {valueProps.map((prop, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerItem}
            custom={index}
            className="flex items-center gap-3 bg-blue-100/50 rounded-lg p-3 text-gray-900"
            style={{ boxShadow: boxShadow.get() }}
          >
            <span className="text-blue-600 font-bold">✅</span>
            <span className="text-sm md:text-base font-medium">{prop}</span>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ delay: 1.0 }}
        className="relative z-[4] text-center"
      >
        <motion.a
          href="#contact"
          style={{ border: border.get(), boxShadow: boxShadow.get() }}
          whileHover={{ scale: 1.05, backgroundColor: "#bfdbfe" }}
          whileTap={{ scale: 0.95 }}
          className="relative inline-flex items-center gap-2 rounded-full bg-blue-200 px-8 py-4 text-lg font-semibold text-gray-900 transition-colors z-[3]"
        >
          Let&apos;s Talk
          <motion.span
            className="inline-block"
            transition={{ duration: 0.3 }}
            whileHover={{ x: 5 }}
          >
            →
          </motion.span>
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default IntroCard;