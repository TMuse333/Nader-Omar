"use client"

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export interface FullBodyHeroProps {
  bgImage?: string;
  logoImage: string;
  fullBodyImage: string;
  titleText: string;
  typeAlongText: string;
  typeAlongKeywords: string[];
  descriptionText: string;
  altTextSkyline?: string;
  altTextLogo?: string;
  altTextFullBody?: string;
  fullBodyStyles?: string;
  logoStyles?: string;
  typeWriterExamples?: string[];
  bgColor?: string;
}

const NewHeroBanner = ({
  bgImage,
  logoImage,
  fullBodyImage,
  titleText,
  typeAlongText,
  typeAlongKeywords,
  descriptionText,
  altTextSkyline = "background skyline",
  altTextLogo = "logo",
  altTextFullBody = "Yasser Khalaf portrait",
  fullBodyStyles = "",
  logoStyles = "",

  bgColor,
}: FullBodyHeroProps): React.JSX.Element => {
  // Function to highlight keywords in typeAlongText
  const highlightKeywords = (text: string, keywords: string[]) => {
    let formattedText = text;
    keywords.forEach((keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, "gi");
      formattedText = formattedText.replace(regex, `<span class="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">${keyword}</span>`);
    });
    return formattedText;
  };

  return (
    <header
      className={`w-full min-h-[80vh] md:min-h-screen relative flex items-center justify-center overflow-hidden z-[3] light-bg2 text-black ${bgColor || ""}`}
    >
      {/* Background Image with Gradient Overlay */}
      {bgImage && (
        <div className="absolute inset-0 z-[1]">
          <Image
            src={bgImage}
            alt={altTextSkyline}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            priority
          />
          <div className="absolute inset-0" />
        </div>
      )}

      <section className="w-full max-w-[1200px] mx-auto px-4 py-12 md:py-0 relative z-[2] text-black">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="flex flex-col items-center md:items-start max-w-[600px] text-center md:text-left">
            {/* Logo */}
            <div className="flex space-x-4 mb-6 items-center justify-center mx-auto">
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
                <Image
                  src={logoImage}
                  alt={altTextLogo}
                  width={600}
                  height={1300}
                  className={`object-contain w-[40vw]  sm:max-w-[125px] scale-[3] p-3 mx-auto ${logoStyles}`}
                />
              </motion.div>
            </div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-md  font-extrabold leading-tight tracking-tight bg-gradient-to-br from-gray-900 via-blue-600 to-blue-400 bg-clip-text text-transparent mb-4 [text-shadow:0_2px_4px_rgba(0,0,0,0.15)]"
            >
              {titleText}
            </motion.h1>

            {/* Highlighted Text (replacing TypeAlongText) */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-6 [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]"
              dangerouslySetInnerHTML={{ __html: highlightKeywords(typeAlongText, typeAlongKeywords) }}
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-md sm:text-lg md:text-xl leading-relaxed font-medium text-gray-800 max-w-[500px] [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]"
            >
              {descriptionText}
              <br />
              <button 
               onClick={() => {
                const el = document.getElementById("contact");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-blue-200 rounded-2xl p-2 mt-4 border mr-2 border-blue-400 border-2">
                <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]">
                  Contact
                </span>
              </button>
              <button className="bg-blue-200 rounded-2xl p-2 mt-4 border border-blue-400 border-2">
                <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]">
                  Call now
                </span>
              </button>
            </motion.p>
          </div>

          {/* Full Body Image */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80, damping: 15 }}
            className="mt-12 md:mt-0 md:w-[40vw] max-w-[500px]"
          >
            <Image
              src={fullBodyImage}
              alt={altTextFullBody}
              width={500}
              height={700}
              priority
              className={`w-full h-auto object-contain rounded-full shadow-2xl border border-blue-300 bg-gray-300 transform md:-rotate-3 ${fullBodyStyles}`}
            />
          </motion.div>
        </div>
      </section>
    </header>
  );
};

export default NewHeroBanner;