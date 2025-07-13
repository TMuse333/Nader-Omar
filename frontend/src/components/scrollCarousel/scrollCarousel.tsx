"use client"

import { useEffect, useRef } from "react";
import {
  motion,
//   useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
  animate,
} from "framer-motion";


const COLORS_TOP = ["#3B82F6", "#60A5FA", "#93C5FD", "#BFDBFE"];

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
      "We’ll start with a personal consultation to explore your lifestyle goals, must-haves, and what drew you to Fall River. I’ll connect you with trusted mortgage experts to get pre-approved, helping you understand your budget and buying power. We’ll discuss family size, commute, amenities like schools or parks, and set realistic expectations based on your financial readiness.",
  },
  {
    number: 2,
    title: "Understand the Market & Costs",
    description:
      "You’ll receive a detailed overview of the Fall River real estate market, including current prices (around $930,900 as of May 2025), competition, and timelines (homes often sell within 30 days). We’ll break down all costs—down payment, closing fees, property taxes, and more—so you’re fully prepared and confident.",
  },
  {
    number: 3,
    title: "Start the Home Search",
    description:
      "I’ll set up a personalized MLS search with real-time listing alerts tailored to your criteria. We’ll review homes together, tour properties, and evaluate their fit based on neighborhood specifics and market value. I’ll help you spot hidden value or concerns, ensuring the home aligns with your vision.",
  },
  {
    number: 4,
    title: "Craft a Winning Offer",
    description:
      "When you find the right home, I’ll create a data-backed offer strategy using a comparative market analysis of recent Fall River sales. We’ll discuss conditions, closing dates, and terms to make your offer competitive yet protective, leveraging my negotiation experience to strengthen your position.",
  },
  {
    number: 5,
    title: "Negotiate & Secure the Deal",
    description:
      "I’ll be your advocate during negotiations and counter-offers, keeping you informed and calm. Post-acceptance, we’ll arrange inspections and appraisals, confirm financing, and ensure all conditions are met, guiding you smoothly through this critical phase.",
  },
  {
    number: 6,
    title: "Close & Celebrate",
    description:
      "Before closing, we’ll do a final walk-through and coordinate with your real estate lawyer for title searches and paperwork. On closing day, you’ll receive your keys, and I’ll be there to celebrate! My support continues post-sale for any future needs or questions.",
  },
];

const ScrollCarousel = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

//   const border = useMotionTemplate`1px solid ${color}`;
//   const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  const StepCard = ({ step }: { step: Step }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-[95vw] max-w-[600px] h-[600px] bg-blue-50 rounded-lg flex flex-col items-center justify-center p-8 shadow-lg"
    >
      <div className="relative w-[100px] h-[100px] flex items-center justify-center mb-6">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="#3B82F6"
            strokeWidth="4"
            fill="none"
            strokeDasharray="282.6"
            initial={{ strokeDashoffset: 282.6 }}
            whileInView={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-gray-900">
          {step.number}
        </div>
      </div>
      <h3 className="text-2xl font-semibold text-center text-gray-900 mb-4">
        {step.title}
      </h3>
      <p className="text-base text-left text-gray-700 leading-relaxed">
        {step.description}
      </p>
    </motion.div>
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-blue-100 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 bg-gradient-to-br from-gray-900 to-blue-600 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-4xl md:text-5xl"
        >
          Your Path to Homeownership in Fall River
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 max-w-2xl mx-auto text-center text-base leading-relaxed text-gray-700 md:text-lg"
        >
          Buying a home in Fall River, Nova Scotia, is a journey we’ll navigate together. Our detailed process ensures you’re informed, confident, and excited every step of the way.
        </motion.p>
        <div className="flex h-24 items-center justify-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-semibold uppercase text-gray-600"
          >
            Scroll to explore
          </motion.span>
        </div>
        <section ref={targetRef} className="relative h-[300vh]">
          <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-blue-100">
            <motion.div style={{ x }} className="flex gap-4">
              {buyerJourneySteps.map((step, index) => (
                <StepCard key={index} step={step} />
              ))}
            </motion.div>
          </div>
        </section>
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="w-full bg-blue-50 p-8 rounded-lg flex flex-col items-center my-12 mx-auto max-w-4xl shadow-lg"
        >
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-4 text-gray-900"
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg max-w-xl text-center text-gray-700"
          >
            Our RE/MAX agents are here to guide you through every step of buying your dream home in Fall River. Connect with us today to begin!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6"
          >
            <Link href="/contact-agent">
              <motion.button
                style={{ border, boxShadow }}
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                className="group relative flex w-fit items-center gap-1.5 rounded-full bg-blue-200/30 px-6 py-3 text-gray-900 transition-colors hover:bg-blue-200/50"
              >
                Contact an Agent
              </motion.button>
            </Link>
          </motion.div>
        </motion.div> */}
      </div>
    </motion.section>
  );
};

export default ScrollCarousel;