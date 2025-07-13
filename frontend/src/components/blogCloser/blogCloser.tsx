"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, animate, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ig from "../../../public/instagram.webp";
import tikTok from "../../../public/tik-tok-logo.webp";
import faceBook from "../../../public/facebook.webp";
import agent from "../../../public/nader.jpg";

const COLORS_TOP = ["#3B82F6", "#60A5FA", "#93C5FD", "#BFDBFE"];

interface Props {
  header: string;
  description: string;
}

const ClosingSection: React.FC<Props> = ({ header, description }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const border = useMotionTemplate`2px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  const backgroundImage = useMotionTemplate`linear-gradient(to bottom, #f0f9ff, #ffffff)`;

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerItem = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.5 + i * 0.2 },
    }),
  };

  const imageFade = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { delay: 1.5, duration: 0.6 } },
  };

  const iconPop = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 2 + i * 0.2, duration: 0.4 },
    }),
  };

  const contactItems = [
    { label: "Name", value: "Nader Omar" },
    { label: "Phone", value: "+1 (902) 123-4567" },
    { label: "Email", value: "nader@remaxnova.com" },
  ];

  const socials = [
    { src: ig, alt: "Instagram", href: "https://www.instagram.com/naderomarrealty" },
    { src: tikTok, alt: "TikTok", href: "https://www.tiktok.com/@naderomarrealty" },
    { src: faceBook, alt: "Facebook", href: "https://www.facebook.com/naderomarrealty" },
  ];

  return (
    <motion.section
      ref={sectionRef}
      style={{ backgroundImage }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col-reverse md:flex-row w-full max-w-5xl mx-auto my-8 text-gray-900 px-4 py-16 pb-24 overflow-hidden"
    >
      {/* Left Content */}
      <motion.div
        className="flex-1 my-auto pb-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold bg-gradient-to-br from-gray-900 to-blue-600 bg-clip-text text-transparent mb-4 px-4">
          {header}
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 whitespace-pre-line px-4">
          {description}
        </p>
        <div className="flex flex-row justify-center items-center px-4">
          <Link href="/contact-agent">
            <motion.button
              style={{ border: border.get(), boxShadow: boxShadow.get() }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-blue-200/30 hover:bg-blue-200/50 text-gray-900 font-semibold py-2 px-6 rounded-full transition-colors"
            >
              Contact Nader
            </motion.button>
          </Link>
          <a href="tel:+19021234567">
            <motion.button
              style={{ border: border.get(), boxShadow: boxShadow.get() }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 inline-block bg-blue-200/30 hover:bg-blue-200/50 text-gray-900 font-semibold py-2 px-6 rounded-full transition-colors"
            >
              Call Now
            </motion.button>
          </a>
        </div>
      </motion.div>

      {/* Right Content */}
      <motion.div
        className="flex-1 bg-blue-50 border border-blue-200/50 p-8 rounded-xl shadow-lg flex flex-col justify-start items-start"
        style={{ boxShadow: boxShadow.get() }}
      >
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Nader Omar</h3>
        <ul className="space-y-4 mb-6 w-full">
          {contactItems.map((item, index) => (
            <motion.li
              key={item.label}
              className="text-gray-700"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={staggerItem}
              custom={index}
            >
              <span className="font-semibold text-gray-900">{item.label}:</span>{" "}
              <span className="font-normal text-gray-700">{item.value}</span>
            </motion.li>
          ))}
        </ul>
        <motion.div
          className="w-full mb-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={imageFade}
        >
          <Image
            src={agent}
            alt="Nader Omar"
            className="rounded-lg shadow-md mx-auto"
            width={300}
            height={300}
            priority
          />
        </motion.div>
        <ul className="flex items-center justify-center gap-6 w-full">
          {socials.map((social, i) => (
            <motion.li
              key={social.alt}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={iconPop}
              custom={i}
            >
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                <Image
                  src={social.src}
                  alt={social.alt}
                  width={50}
                  height={50}
                  className="transition-transform duration-300 object-contain hover:scale-110"
                />
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </motion.section>
  );
};

export default ClosingSection;
