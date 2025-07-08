import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeWriter, TypeAlongText, FadeInFromLeftText } from 'focusflow-components';


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
  altTextSkyline = 'background skyline',
  altTextLogo = 'logo',
  altTextFullBody = 'Yasser Khalaf portrait',
  fullBodyStyles = '',
  logoStyles = '',
  typeWriterExamples,

  bgColor,
}: FullBodyHeroProps): React.JSX.Element => {
  const [startTypeAlong, setStartTypeAlong] = useState(false);
  const [startFadeIn, setStartFadeIn] = useState(false);

  // Trigger animations sequentially
  const handleTitleComplete = () => {
    setStartTypeAlong(true);
  };
  const handleTypeAlongComplete = () => {
    setTimeout(() => {
      setStartFadeIn(true);
    }, 500);
  };

  // Animation variants for logo and award
  const badgeVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    hover: { scale: 1.1, transition: { duration: 0.2 } },
  };

  return (
    <header
      className={`w-full min-h-[80vh] md:min-h-screen relative flex items-center justify-center  overflow-hidden z-[3]
      bg-gradient-to-br from-orange-100 to-blue-200
      text-black`}
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
          <div className="absolute inset-0 t" />
        </div>
      )}

      <section className="w-full max-w-[1200px] mx-auto px-4 py-12 md:py-0 relative z-[2]
      text-black">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="flex flex-col items-center md:items-start max-w-[600px] text-center md:text-left">
            {/* Logo and Award Badges */}
            <div className="flex space-x-4 mb-6 items-center justify-center
         mx-auto">
              <motion.div  initial="initial" animate="animate" whileHover="hover">
                <Image
                  src={logoImage}
                  alt={altTextLogo}
                  width={60}
                  height={60}
                  className={`object-contain 
                  w-[15vw] mx-auto
                  ${logoStyles}`}
                />
              </motion.div>
              {/* <motion.div variants={badgeVariants} initial="initial" animate="animate" whileHover="hover">
                <Image
                  src={award}
                  alt="Platinum Award"
                  width={60}
                  height={60}
                  className={`rounded-full object-contain 
                  w-[15vw]
                  ${logoStyles}`}
                />
              </motion.div> */}
            </div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              onAnimationComplete={handleTitleComplete}
              className=" md:text-md text-red-200 font-bold text-black mb-4"
            >
              {titleText}
            </motion.h1>

            {/* TypeAlongText */}
            <TypeAlongText
              styles="text-2xl sm:text-3xl md:text-4xl font-semibold  mb-6"
              text={typeAlongText}
              keywords={typeAlongKeywords}
              startAnimation={startTypeAlong}
              setAnimationComplete={handleTypeAlongComplete}
              highlightColor={"#069e2c"}
            />

            {/* TypeWriter (if provided) */}
            {typeWriterExamples && (
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black mb-6 px-4 py-2 border border-[#00bfff]/50 rounded-xl">
                <TypeWriter examples={typeWriterExamples} />
              </h3>
            )}

            {/* Description */}
            <motion.p
              className="text-lg sm:text-xl md:text-lg text-black max-w-[500px]"
         
              
            >
                    {descriptionText}
                    <br/>
                    <button className=''>
                        Contact
                    </button>
                    <button>
                        Call now
                    </button>
            </motion.p>
          </div>

          {/* Full Body Image */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 80, damping: 15 }}
            className="mt-12 md:mt-0 md:w-[40vw] max-w-[500px]"
          >
            <Image
              src={fullBodyImage}
              alt={altTextFullBody}
              width={500}
              height={700}
              priority
              className={`w-full h-auto object-contain rounded-2xl shadow-2xl
              border border-green-200 bg-gray-300 transform md:-rotate-3 ${fullBodyStyles}`}
            />
          </motion.div>
        </div>
      </section>
    </header>
  );
};

export default NewHeroBanner;