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
      alt: "Lake view in Fall River",
      title: "Lakes & Outdoor Living",
      description:
        "Surrounded by lakes and parks, Fall River is perfect for kayaking, hiking, and weekend picnics.",
    },
    {
      src: "/nader.jpg",
      alt: "Family-friendly neighborhood",
      title: "Top-Rated Schools & Community",
      description:
        "Fall River features excellent schools, French immersion options, and a vibrant community center.",
    },
    {
      src: "/nader.jpg",
      alt: "Large residential property in Fall River",
      title: "Spacious Lots & Privacy",
      description:
        "Enjoy large, tree-lined lots and a quiet suburban atmosphere, perfect for families.",
    },
    {
      src: "/nader.jpg",
      alt: "Highway sign to Halifax",
      title: "Easy Commute",
      description:
        "Just 20–30 minutes to Halifax or Dartmouth and 15 minutes to the airport with great highway access.",
    },
    {
      src: "/nader.jpg",
      alt: "Fall River shopping plaza",
      title: "Essential Amenities Nearby",
      description:
        "Grocery, pharmacy, cafes, fast food, and services—all close to home.",
    },
    {
      src: "/nader.jpg",
      alt: "Modern house in Fall River",
      title: "Diverse Housing Options",
      description:
        "From lakefront homes to new builds, Fall River offers a wide range of housing types.",
    },
  ];

  return (
    <section className={`w-screen text-black`}>
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
