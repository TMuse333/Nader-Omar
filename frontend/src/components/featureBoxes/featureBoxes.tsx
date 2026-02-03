"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

interface FeatureItem {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const boxData: FeatureItem[] = [
  {
    src: "/anchor.png",
    alt: "Kayaking on Lake Thomas in Fall River",
    title: "Lakes & Outdoor Lifestyle",
    description:
      "Surrounded by Lake Thomas, Miller Lake, and Fletcher Lake with opportunities for kayaking, canoeing, swimming, and jet skiing. Perfect for families who love the outdoors.",
  },
  {
    src: "/nature.svg",
    alt: "Family enjoying local park in Fall River",
    title: "Nature Trails & Parks",
    description:
      "Access to Laurie and Oakfield Provincial Parks, perfect for hiking, picnicking, and enjoying the outdoors year-round.",
  },
  {
    src: "/school.svg",
    alt: "Children going to school in Fall River",
    title: "Great Schools",
    description:
      "Excellent schools including Ash Lee Jefferson Elementary and Lockview High, with French Immersion options available.",
  },
  {
    src: "/spacious.png",
    alt: "Suburban home with a large backyard",
    title: "Spacious Lots",
    description:
      "Tree-lined lots offering privacy, peace, and room for growing families in a quiet suburban setting.",
  },
  {
    src: "/airplane.png",
    alt: "Highway connecting to Halifax",
    title: "Easy Commute",
    description:
      "20-30 min to Halifax, 15 min to the airport. Great highway access via 102, 118, and 107.",
  },
  {
    src: "/food.png",
    alt: "Local shops in Fall River",
    title: "Local Amenities",
    description:
      "Sobeys, pharmacies, restaurants, and cafes nearby. Bedford and Dartmouth Crossing a short drive away.",
  },
];

interface ListElementProps {
  item: FeatureItem;
  index: number;
  isSelected: boolean;
  setExpandedIndex: React.Dispatch<React.SetStateAction<number | null>>;
  parentInView: boolean;
}

const ListElement: React.FC<ListElementProps> = ({
  item,
  index,
  isSelected,
  setExpandedIndex,
  parentInView,
}) => {
  const handleClick = () => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  const slideInVariants = (delay: number) => ({
    initial: { x: 40, y: 20, opacity: 0 },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { delay, duration: 0.3, ease: "easeOut" as const },
    },
  });

  return (
    <motion.div
      variants={slideInVariants(index * 0.1)}
      initial="initial"
      animate={parentInView ? "animate" : "initial"}
      className={`rounded-2xl overflow-hidden transition-all duration-300 border-2 shadow-lg ${
        isSelected
          ? "bg-gradient-to-br from-cyan-600 to-cyan-700 border-cyan-500 text-white shadow-2xl"
          : "bg-white/10 border-white/20 hover:border-cyan-400 text-white hover:shadow-xl backdrop-blur-sm"
      }`}
    >
      <button
        onClick={handleClick}
        className={`w-full flex justify-between items-center text-left p-5 font-semibold focus:outline-none ${
          isSelected ? "text-white" : "text-white"
        }`}
      >
        <span className="flex items-center gap-3 text-base md:text-lg">
          <motion.div
            animate={{ rotate: isSelected ? 360 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              isSelected ? "bg-white/20" : "bg-cyan-500/20"
            }`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={24}
              height={24}
              className="object-contain"
            />
          </motion.div>
          {item.title}
        </span>
        <motion.div
          animate={{ rotate: isSelected ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isSelected ? (
            <ChevronUp className="w-6 h-6 text-white" />
          ) : (
            <ChevronDown className="w-6 h-6 text-white/60" />
          )}
        </motion.div>
      </button>

      <AnimatePresence>
        {isSelected && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0">
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
                className="text-white/90 leading-relaxed"
              >
                {item.description}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FeatureBoxes = (): React.JSX.Element => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 md:py-20 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Title, Image, Description */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex flex-col space-y-6"
        >
          <div className="space-y-3">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
              className="text-cyan-400 font-semibold text-sm uppercase tracking-wider"
            >
              Discover Fall River
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            >
              Why <span className="gradient-text-accent">Fall River</span>?
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
            <div className="relative rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
              <Image
                width={600}
                height={400}
                src="/home.jpeg"
                alt="Fall River Nova Scotia home"
                className="w-full h-[35vh] md:h-[40vh] object-cover"
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
            className="text-white/80 text-base md:text-lg leading-relaxed"
          >
            Explore the lifestyle perks of living in one of Nova Scotia&apos;s most desirable communities — lakes, trails, great schools, and easy access to Halifax.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            className="flex flex-wrap gap-3"
          >
            <div className="px-4 py-2 rounded-lg bg-cyan-500/20 border border-cyan-500/40">
              <span className="text-cyan-300 font-bold">20-30 min</span>
              <span className="text-white/60 text-sm ml-2">to Halifax</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-cyan-500/20 border border-cyan-500/40">
              <span className="text-cyan-300 font-bold">15 min</span>
              <span className="text-white/60 text-sm ml-2">to Airport</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-cyan-500/20 border border-cyan-500/40">
              <span className="text-cyan-300 font-bold">5+</span>
              <span className="text-white/60 text-sm ml-2">Lakes nearby</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
          >
            <button
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-cyan-400 hover:shadow-xl transition-all duration-200"
            >
              Start Your Search
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column - Accordion Items */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
          className="space-y-4 my-auto"
        >
          {boxData.map((item, index) => (
            <ListElement
              key={index}
              item={item}
              index={index}
              isSelected={index === expandedIndex}
              setExpandedIndex={setExpandedIndex}
              parentInView={isInView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureBoxes;
