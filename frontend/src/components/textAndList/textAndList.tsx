"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useMotionTemplate,
  animate,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";

const COLORS_TOP = ["#3B82F6", "#60A5FA", "#93C5FD", "#BFDBFE"];

const ReasonsWithAurora = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [page, setPage] = useState(0);
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.5 });

  const itemsPerPage = 3;
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #f0f9ff 50%, ${color})`;

  const data = {
    subTitle: "Buy a home in Fall River with Nader Omar",
    title: "Why Choose Nader Omar?",
    src: "/nader-87.jpg",
    alt: "Nader Omar - Real Estate Agent",
    description:
      "Partner with Nader Omar, your trusted RE/MAX agent, to navigate Fall River’s competitive market with ease. Enjoy personalized guidance, expert insights, and a stress-free journey to your perfect home.",
    listAspects: [
      {
        title: "Smart Decisions, Backed by Data",
        description:
          "Nader uses sharp market analysis to guide pricing, property selection, and negotiations—ensuring your choices are backed by facts, not guesswork.",
      },
      {
        title: "Empathetic, Personal Support",
        description:
          "He listens to your 'why,' understands your unique goals, and communicates clearly—so you're never left in the dark or overwhelmed.",
      },
      {
        title: "Calm, Strategic Problem-Solving",
        description:
          "When challenges arise, Nader finds grounded solutions quickly—absorbing stress and keeping your real estate journey smooth and satisfying.",
      },
      {
        title: "Multilingual Advantage",
        description:
          "Nader speaks English, French, and Arabic — giving your home exposure to a broader, multicultural buyer pool and ensuring smoother communication.",
      },
      {
        title: "Cultural Sensitivity & Global Network",
        description:
          "With lived experience across Egypt, Canada, and Dubai, Nader brings international insight, empathy, and expanded professional connections.",
      },
    ],
  };

  const totalPages = Math.ceil(data.listAspects.length / itemsPerPage);

  const currentItems = data.listAspects.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <motion.section
      ref={sectionRef}
      style={{ backgroundImage }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full py-20 px-6 text-gray-900"
    >
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="h-72 w-72 md:h-96 md:w-96 rounded-full overflow-hidden border-4 border-blue-200 shadow-xl">
            <Image
              src={data.src}
              alt={data.alt}
              width={384}
              height={384}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-4 inline-block rounded-full bg-blue-200/50 px-3 py-1.5 text-sm font-medium text-gray-900"
          >
            {data.subTitle}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-3xl sm:text-5xl font-semibold bg-gradient-to-br from-gray-900 to-blue-600 bg-clip-text text-transparent"
          >
            {data.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="my-6 text-base leading-relaxed max-w-lg"
          >
            {data.description}
          </motion.p>

          {/* CARDS */}
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full space-y-4 min-h-[300px]"
            >
              {currentItems.map((item, idx) => {
                const actualIndex = idx + page * itemsPerPage;

                return (
                  <motion.div
                    key={actualIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{
                      opacity: sectionInView ? 1 : 0,
                      x: sectionInView ? 0 : 50,
                    }}
                    transition={{ duration: 0.4, delay: 0.3 * idx }}
                    className="bg-white/50 border border-blue-300/40 rounded-2xl p-4 cursor-pointer "
                    onClick={() =>
                      setExpandedIndex(
                        expandedIndex === actualIndex ? null : actualIndex
                      )
                    }
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-lg text-blue-800">
                        {item.title}
                      </h3>
                      <span className="text-xl">
                        {expandedIndex === actualIndex ? "−" : "+"}
                      </span>
                    </div>
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={
                        expandedIndex === actualIndex
                          ? { height: "auto", opacity: 1 }
                          : { height: 0, opacity: 0 }
                      }
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-2 text-gray-700 text-sm md:text-base">
                        {item.description}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex mt-6 gap-4">
              <button
                onClick={() => {
                  if (page > 0) {
                    setPage((prev) => prev - 1);
                    setExpandedIndex(null);
                  }
                }}
                disabled={page === 0}
                className={`px-4 py-2 rounded-xl font-semibold shadow-sm transition ${
                  page === 0
                    ? "bg-gray-300 cursor-not-allowed text-gray-500"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Previous
              </button>
              <button
                onClick={() => {
                  if (page < totalPages - 1) {
                    setPage((prev) => prev + 1);
                    setExpandedIndex(null);
                  }
                }}
                disabled={page >= totalPages - 1}
                className={`px-4 py-2 rounded-xl font-semibold shadow-sm transition ${
                  page >= totalPages - 1
                    ? "bg-gray-300 cursor-not-allowed text-gray-500"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default ReasonsWithAurora;
