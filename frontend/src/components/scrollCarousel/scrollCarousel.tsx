"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Step {
  number: number;
  title: string;
  description: string;
}

const buyerJourneySteps: Step[] = [
  {
    number: 1,
    title: "Define Your Vision & Budget",
    description:
      "We'll start with a personal consultation to explore your lifestyle goals, must-haves, and what drew you to Fall River. I'll connect you with trusted mortgage experts to get pre-approved, helping you understand your budget and buying power. We'll discuss family size, commute, amenities like schools or parks, and set realistic expectations based on your financial readiness.",
  },
  {
    number: 2,
    title: "Understand the Market & Costs",
    description:
      "You'll receive a detailed overview of the Fall River real estate market, including current prices (around $930,900 as of May 2025), competition, and timelines (homes often sell within 30 days). We'll break down all costs—down payment, closing fees, property taxes, and more—so you're fully prepared and confident.",
  },
  {
    number: 3,
    title: "Start the Home Search",
    description:
      "I'll set up a personalized MLS search with real-time listing alerts tailored to your criteria. We'll review homes together, tour properties, and evaluate their fit based on neighborhood specifics and market value. I'll help you spot hidden value or concerns, ensuring the home aligns with your vision.",
  },
  {
    number: 4,
    title: "Craft a Winning Offer",
    description:
      "When you find the right home, I'll create a data-backed offer strategy using a comparative market analysis of recent Fall River sales. We'll discuss conditions, closing dates, and terms to make your offer competitive yet protective, leveraging my negotiation experience to strengthen your position.",
  },
  {
    number: 5,
    title: "Negotiate & Secure the Deal",
    description:
      "I'll be your advocate during negotiations and counter-offers, keeping you informed and calm. Post-acceptance, we'll arrange inspections and appraisals, confirm financing, and ensure all conditions are met, guiding you smoothly through this critical phase.",
  },
  {
    number: 6,
    title: "Close & Celebrate",
    description:
      "Before closing, we'll do a final walk-through and coordinate with your real estate lawyer for title searches and paperwork. On closing day, you'll receive your keys, and I'll be there to celebrate! My support continues post-sale for any future needs or questions.",
  },
];

const ScrollCarousel = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollTo = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.9;
      const newScrollPosition =
        direction === "left"
          ? carouselRef.current.scrollLeft - scrollAmount
          : carouselRef.current.scrollLeft + scrollAmount;
      carouselRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  const StepCard = ({ step, index }: { step: Step; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative w-[90vw] max-w-[500px] min-h-[480px] rounded-2xl flex flex-col p-8 flex-shrink-0 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-white/10 hover:border-cyan-500/30 transition-colors"
    >
      {/* Step number */}
      <div className="relative w-16 h-16 flex items-center justify-center mb-6">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-500/30" />
        <span className="relative text-2xl font-bold gradient-text-accent">
          {step.number}
        </span>
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
        {step.title}
      </h3>
      <p className="text-gray-400 text-sm md:text-base leading-relaxed flex-1">
        {step.description}
      </p>

      {/* Progress indicator */}
      <div className="mt-6 flex items-center gap-2">
        <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"
            style={{ width: `${(step.number / 6) * 100}%` }}
          />
        </div>
        <span className="text-xs text-gray-500">{step.number}/6</span>
      </div>
    </motion.div>
  );

  return (
    <section ref={sectionRef} className="dark-bg-accent py-20 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Your <span className="gradient-text-accent">Path</span> to Homeownership
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base leading-relaxed">
            Buying a home in Fall River, Nova Scotia, is a journey we&apos;ll navigate
            together. Our detailed process ensures you&apos;re informed, confident, and
            excited every step of the way.
          </p>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <svg className="w-5 h-5 text-cyan-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span className="text-sm text-gray-500 uppercase tracking-wider">
            Scroll or use arrows
          </span>
          <svg className="w-5 h-5 text-cyan-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={carouselRef}
            onScroll={checkScrollPosition}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {buyerJourneySteps.map((step, index) => (
              <StepCard key={index} step={step} index={index} />
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={() => scrollTo("left")}
            disabled={!canScrollLeft}
            className={`absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white backdrop-blur-sm ${
              canScrollLeft
                ? "opacity-100 hover:bg-cyan-500/20 hover:border-cyan-500/50"
                : "opacity-30 cursor-not-allowed"
            } transition-all`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scrollTo("right")}
            disabled={!canScrollRight}
            className={`absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white backdrop-blur-sm ${
              canScrollRight
                ? "opacity-100 hover:bg-cyan-500/20 hover:border-cyan-500/50"
                : "opacity-30 cursor-not-allowed"
            } transition-all`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ScrollCarousel;