"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface BlogCloserProps {
  header: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  link2?: string;
  text2?: string;
}

const BlogCloser: React.FC<BlogCloserProps> = ({
  header,
  description,
  buttonText = "Contact Me",
  buttonHref = "/contact",
  text2,
  link2,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.3,
  });

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
    { label: "Phone", value: "902-209-3919" },
    { label: "Email", value: "nader@realestate.com" },
  ];

  const socials = [
    { src: "/instagram.webp", alt: "Facebook", href: "https://www.facebook.com/chris.crowell.12" },
    { src: "/facebook.webp", alt: "TikTok", href: "https://www.tiktok.com/@chriscrowell3f" },

    { src: "/tik-tok-logo.webp", alt: "Instagram", href: "https://www.instagram.com/chris.yournetworkrealtor/" },
  ];

  return (
    <section
      ref={sectionRef}
      className="flex flex-col md:flex-row w-full max-w-[1200px] mx-auto my-8 text-black sm:px-4"
    >
      {/* Left: Custom Header and Description */}
      <motion.div
        className="flex-1 my-auto pb-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4 px-4">{header}</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 whitespace-pre-line px-4">
          {description}
        </p>

        {/* Mock Contact Form */}
        <form className="flex flex-col space-y-4 px-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
          <textarea
            placeholder="Your Message"
            className="border border-gray-300 rounded-lg px-4 py-2 min-h-[120px]"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            {buttonText}
          </button>
          {link2 && text2 && (
            <Link href={link2}>
              <p className="text-blue-600 hover:underline text-sm">{text2}</p>
            </Link>
          )}
        </form>
      </motion.div>

      {/* Right: Contact Info Card */}
      <div className="flex-1 bg-gradient-to-tr from-gray-50 to-white border border-gray-300 p-8 rounded-xl shadow-md flex flex-col justify-start items-start">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>

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

        {/* Agent image */}
        <motion.div
          className="w-full mb-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={imageFade}
        >
          <Image
            src="/nader.jpg"
            alt="Nader Omar"
            className="rounded-lg shadow-md mx-auto"
            width={300}
            height={300}
            priority
          />
        </motion.div>

        {/* Social Icons */}
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
                  width={600}
                  height={1300}
                  className={`transition-transform duration-300 object-contain ${
                    i === 0
                      ? "w-[100px] h-[100px] scale-[2] hover:scale-[2.5]"
                      : "w-[75px] h-[75px] hover:scale-110"
                  }`}
                />
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BlogCloser;
