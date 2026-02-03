"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FileText, ChevronDown, ChevronUp, Shield, Home, Scale, FileCheck } from "lucide-react";

interface Document {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

const documents: Document[] = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Working with a REALTOR® Form",
    description: "This form outlines the services I provide and establishes our working relationship.",
    details: [
      "Explains agency relationships in Nova Scotia",
      "Defines your rights and my obligations",
      "No commitment required to sign",
      "Ensures transparency from day one",
    ],
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Buyer Agency Agreement",
    description: "Formalizes my commitment to represent your best interests throughout the purchase.",
    details: [
      "I work exclusively for you, not the seller",
      "Your information stays confidential",
      "I negotiate on your behalf",
      "Fiduciary duty to get you the best deal",
    ],
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Agreement of Purchase & Sale",
    description: "The official offer document that outlines price, conditions, and terms.",
    details: [
      "Purchase price and deposit amount",
      "Closing date and possession details",
      "Conditions (financing, inspection, etc.)",
      "Inclusions and exclusions",
    ],
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Condition Clauses",
    description: "Protective clauses that let you back out if certain requirements aren't met.",
    details: [
      "Financing condition (mortgage approval)",
      "Home inspection condition",
      "Insurance condition",
      "Sale of existing home (if applicable)",
    ],
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: "Lawyer's Role",
    description: "Your lawyer handles the legal transfer and protects your interests at closing.",
    details: [
      "Title search to verify ownership",
      "Review of all documents",
      "Deed transfer and registration",
      "Disbursement of funds",
    ],
  },
];

const DocumentCard: React.FC<{
  doc: Document;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  isInView: boolean;
}> = ({ doc, index, isExpanded, onToggle, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`rounded-xl border transition-all duration-300 ${
        isExpanded
          ? "bg-cyan-500/10 border-cyan-500/40"
          : "bg-white/5 border-white/10 hover:border-white/20"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-5 text-left"
      >
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            isExpanded
              ? "bg-cyan-500 text-white"
              : "bg-white/10 text-cyan-400"
          }`}
        >
          {doc.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-white font-semibold text-base mb-1">{doc.title}</h3>
          <p className="text-gray-400 text-sm">{doc.description}</p>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-cyan-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-0">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {doc.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <span className="text-gray-300">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const DocumentsExplained: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 md:py-20 px-4 dark-bg"
    >
      <div className="max-w-[1000px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold mb-4">
            Know Before You Sign
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Key <span className="gradient-text-accent">Documents</span> Explained
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Understanding the paperwork is half the battle. Here&apos;s what you&apos;ll encounter during your home purchase in Nova Scotia.
          </p>
        </motion.div>

        {/* Document Cards */}
        <div className="space-y-4">
          {documents.map((doc, index) => (
            <DocumentCard
              key={index}
              doc={doc}
              index={index}
              isExpanded={expandedIndex === index}
              onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          Don&apos;t worry — I&apos;ll walk you through each document personally so you understand everything before signing.
        </motion.p>
      </div>
    </section>
  );
};

export default DocumentsExplained;
