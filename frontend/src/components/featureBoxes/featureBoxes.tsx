"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { SlidingText } from "focusflow-components";
import { useInView, motion, Variants } from "framer-motion";

interface BoxProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  boxColor: string;
  boxTextColor?: string;
}

const FeatureBox: React.FC<BoxProps> = ({
  src,
  alt,
  title,
  description,
  boxColor,
  boxTextColor,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 1 });

  const containerVariants: Variants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 7,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`w-[90vw] mx-auto p-4 mb-8 border border-black rounded-xl sm:w-[40vw] ${boxColor} max-w-[550px] ${
        boxTextColor || ""
      }`}
    >
      <motion.div
        variants={childVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 7,
          delay: 0.1,
        }}
        className="w-[30px] sm:w-[35px] md:h-[40px] mx-auto mb-4"
      >
        <Image src={src} alt={alt} width={600} height={1300} className="object-contain" />
      </motion.div>

      <motion.h3
        className={`text-lg font-semibold ${boxTextColor || ""}`}
        variants={childVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay: 0.2, type: "spring", stiffness: 500, damping: 7 }}
      >
        {title}
      </motion.h3>

      <motion.p
        variants={childVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay: 0.3, type: "spring", stiffness: 500, damping: 7 }}
        className={boxTextColor || ""}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

const FeatureBoxes = (): React.JSX.Element => {
  const boxData = [
    {
      src: "/nader.jpg",
      alt: "Kayaking on Lake Thomas in Fall River",
      title: "Lakes & Outdoor Lifestyle",
      description:
        "Surrounded by Lake Thomas, Miller Lake, and Fletcher Lake, Fall River offers endless opportunities for kayaking, boating, swimming, and waterfront relaxation.",
    },
    {
      src: "/nader.jpg",
      alt: "Family enjoying local park in Fall River",
      title: "Nature Trails & Parks",
      description:
        "Enjoy scenic walking trails and nearby provincial parks like Laurie and Oakfield for hiking, picnicking, and peaceful family outings.",
    },
    {
      src: "/nader.jpg",
      alt: "Children going to school in Fall River",
      title: "Great Schools & Family Life",
      description:
        "Fall River is home to top-rated schools like Lockview High and Ash Lee Jefferson, plus French Immersion options and a safe, quiet atmosphere ideal for families.",
    },
    {
      src: "/nader.jpg",
      alt: "Suburban home with a large backyard",
      title: "Spacious Lots & Privacy",
      description:
        "Many homes in Fall River feature large, tree-lined lots offering privacy, peace, and plenty of space for growing families.",
    },
    {
      src: "/nader.jpg",
      alt: "Highway connecting to Halifax",
      title: "Easy Commute & Airport Access",
      description:
        "Located just 20–30 minutes from Halifax and Dartmouth and only 15 minutes from the airport, Fall River offers quick access to major highways and travel routes.",
    },
    {
      src: "/nader.jpg",
      alt: "Local shops in Fall River",
      title: "Shops & Daily Essentials",
      description:
        "Convenient access to Sobeys, pharmacies, Tim Hortons, local cafes, and nearby shopping in Bedford and Dartmouth Crossing.",
    },
  ];
  

  return (
    <section className={`w-screen text-black
    bg-gradient-to-br from-[#cfe3f5] to-[#a5c8eb] pt-6`}>
      <SlidingText
        text="Discover Fall River Benefits"
        styles="text-center mx-auto text-4xl sm:text-5xl md:text-6xl mb-4 text-black"
        subText="Explore why Fall River is an ideal place to live, work, and play."
        slideColor=""
      />

      <section className="flex flex-col mx-auto justify-center items-center mt-6 sm:grid grid-cols-2 max-w-[1200px]">
        {boxData.map((box, index) => (
          <FeatureBox
            {...box}
            key={index}
            boxColor="bg-white"
            boxTextColor="text-black"
          />
        ))}
      </section>
    </section>
  );
};

export default FeatureBoxes;
