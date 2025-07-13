import React from 'react';
import Image from 'next/image';
import { motion, easeIn } from 'framer-motion';

interface Props {
  src: string;
  alt: string;
  title: string;
  description: string;
  buttonText: string;
  destination: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeIn } },
};

const ServiceHerobanner: React.FC<Props> = ({
  src,
  alt,
  title,
  description,
//   buttonText,
//   destination,
}) => {
  return (
    <header
      className="w-screen min-h-[500px] h-[75vh] text-center text-gray-200 relative flex flex-col items-center justify-center transition-colors duration-1000"
      role="banner"
    >
      <Image
        className="w-full h-full object-cover absolute z-[1] brightness-[0.5]"
        src={src}
        priority
        width={600}
        height={1300}
        alt={alt}
      />

      <motion.section
        className="text-left w-4/5 relative z-[2]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl"
          variants={itemVariants}
        >
          {title}
        </motion.h1>

        <motion.h2
          className="text-xl mt-4 sm:text-2xl md:text-3xl"
          variants={itemVariants}
        >
          {description}
        </motion.h2>

        {/* <motion.a
          href={destination}
          className="inline-block mt-8 bg-gray-300 p-4 text-black rounded-md hover:scale-[1.1] hover:bg-slate-900 hover:text-white transition-all"
          variants={itemVariants}
        >
          {buttonText}
        </motion.a> */}
      </motion.section>
    </header>
  );
};

export default ServiceHerobanner;