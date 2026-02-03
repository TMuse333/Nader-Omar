"use client";

import React, { useState, useRef } from "react";
import { motion, Variants, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";

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
      className={`flex flex-col justify-start items-center py-16 px-4 dark-bg ${
        inContent ? "md:max-w-[350px]" : ""
      }`}
    >
      {hasIntro && (
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            <span className="gradient-text-accent">{intro}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base leading-relaxed"
          >
            {description}
          </motion.p>
        </div>
      )}

      <section
        className="rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-white/10 w-full max-w-4xl"
        ref={componentRef}
      >
        <div className="flex flex-col">
          {text.length > elementsPerPage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center items-center gap-4 p-4 border-b border-white/10"
            >
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                  currentPage === 1
                    ? "bg-white/5 text-gray-500 cursor-not-allowed"
                    : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20"
                }`}
              >
                Previous
              </button>
              <span className="text-gray-400 text-sm">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                  currentPage === totalPages
                    ? "bg-white/5 text-gray-500 cursor-not-allowed"
                    : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20"
                }`}
              >
                Next
              </button>
            </motion.div>
          )}

          <div className="p-4 space-y-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                {currentElements.map((item, index) => (
                  <motion.div
                    key={startIndex + index}
                    variants={listVariants}
                    initial="initial"
                    animate={inView ? "animate" : "initial"}
                    onClick={() => handleSectionClick(startIndex + index)}
                    className={`p-4 rounded-xl cursor-pointer relative transition-all ${
                      expandedIndex === startIndex + index
                        ? "bg-cyan-500/10 border border-cyan-500/30"
                        : "bg-white/5 border border-white/10 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-base sm:text-lg font-semibold text-white flex-1">
                        {item.title}
                      </h3>
                      <button className="text-cyan-400 shrink-0 mt-1">
                        {expandedIndex === startIndex + index ? (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 15l8-8 8 8" />
                          </svg>
                        ) : (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 9l8 8 8-8" />
                          </svg>
                        )}
                      </button>
                    </div>
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: expandedIndex === startIndex + index ? "auto" : 0,
                        opacity: expandedIndex === startIndex + index ? 1 : 0,
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 text-sm leading-relaxed pt-3">
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
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Accordion;