"use client"

import React, { useState, useRef } from "react";
import { motion, Variants, useInView, AnimatePresence, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import Link from "next/link";

const COLORS_TOP = ["#3B82F6", "#60A5FA", "#93C5FD", "#BFDBFE"];

interface Props {
  text: {
    title: string;
    description: string;
  }[];
  hasIntro: boolean;
  intro?: string;
  description?: string;
  link?: string;
  margin?: string;
  inContent?: boolean;
}

const Accordion: React.FC<Props> = ({
  text,
  hasIntro,
  intro,
  description,
  link,
  margin,
  inContent,
}) => {
  const componentRef = useRef(null);
  const inView = useInView(componentRef, { once: true, amount: 0.3 });
  const [expandedIndex, setExpandedIndex] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const elementsPerPage = 5;

  const totalPages = Math.ceil(text.length / elementsPerPage);
  const startIndex = (currentPage - 1) * elementsPerPage;
  const currentElements = text.slice(startIndex, startIndex + elementsPerPage);

  const color = useMotionValue(COLORS_TOP[0]);
  React.useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setExpandedIndex(-1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setExpandedIndex(-1);
    }
  };

  const handleSectionClick = (index: number) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const listVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`flex flex-col justify-start items-center py-12 text-gray-900 ${
        inContent ? "md:max-w-[350px]" : ""
      }`}
    >
      {hasIntro && (
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold bg-gradient-to-br from-gray-900 to-blue-600 bg-clip-text text-transparent"
          >
            {intro}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 max-w-2xl mx-auto text-base leading-relaxed text-gray-700 md:text-lg"
          >
            {description}
          </motion.p>
        </div>
      )}
      <section
        className={`rounded-xl bg-blue-50 shadow-lg ${margin ? `md:${margin}` : ""}`}
        ref={componentRef}
      >
        <div className="flex flex-col">
          {text.length > elementsPerPage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center space-x-4 mb-4 p-4"
            >
              <motion.button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                style={currentPage !== 1 ? { border: border.get(), boxShadow: boxShadow.get() } : {}}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  currentPage === 1
                    ? "bg-blue-200/50 text-gray-500 cursor-not-allowed"
                    : "bg-blue-200/30 text-gray-900 hover:bg-blue-200/50"
                }`}
              >
                Previous
              </motion.button>
              <span className="text-gray-700 font-medium flex items-center">
                Page {currentPage} of {totalPages}
              </span>
              <motion.button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                style={currentPage !== totalPages ? { border: border.get(), boxShadow: boxShadow.get() } : {}}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  currentPage === totalPages
                    ? "bg-blue-200/50 text-gray-500 cursor-not-allowed"
                    : "bg-blue-200/30 text-gray-900 hover:bg-blue-200/50"
                }`}
              >
                Next
              </motion.button>
            </motion.div>
          )}
          <div className="space-y-4 p-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {currentElements.map((item, index) => (
                  <motion.div
                    key={startIndex + index}
                    variants={listVariants}
                    initial="initial"
                    animate={inView ? "animate" : "initial"}
                    onClick={() => handleSectionClick(startIndex + index)}
                    className="border-b border-blue-200/50 p-4 rounded-lg bg-blue-100/50 hover:bg-blue-100 transition-colors cursor-pointer relative max-w-4xl mx-auto"
                    style={{ boxShadow: boxShadow.get() }}
                  >
                    <button className="absolute top-4 right-4 text-gray-700">
                      {expandedIndex === startIndex + index ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 15l8-8 8 8" />
                        </svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 9l8 8 8-8" />
                        </svg>
                      )}
                    </button>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 pr-12">
                      {item.title}
                    </h2>
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: expandedIndex === startIndex + index ? "auto" : 0,
                        opacity: expandedIndex === startIndex + index ? 1 : 0,
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-base text-gray-700 leading-relaxed pt-2">
                        {item.description}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
      {link && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: text.length * 0.1 + 0.8 }}
          className="mt-8"
        >
          <Link href={link}>
            <motion.button
              style={{ border: border.get(), boxShadow: boxShadow.get() }}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              className="group relative flex w-fit mx-auto items-center gap-1.5 rounded-full bg-blue-200/30 px-6 py-3 text-gray-900 transition-colors hover:bg-blue-200/50 font-semibold"
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Accordion;