"use client"

import { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

import agent from '../../../public/nader.jpg';
import logo from '../../../public/remax-nova-flag.webp'
import Image from "next/image";
const COLORS_TOP = ["#3B82F6", "#60A5FA", "#93C5FD", "#BFDBFE"];

const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #f0f9ff 50%, ${color})`;
  const border = useMotionTemplate`2px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 8px 32px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-blue-100 px-4 py-24 text-gray-900"
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center max-w-5xl mx-auto gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex flex-col items-center justify-center"
        >
            <Image
          width={600}
          height={1300}
          src={logo}
          alt="remax nova logo"
          className="w-[120px] scale-[2] mb-4 rounded-x  object-contain"
          />
          <div className="h-48 w-48 md:h-96 md:w-96 rounded-full overflow-hidden border-4 border-blue-200 shadow-xl">
            
            <Image
            priority
            width={600}
            height={1300}
              src={agent.src}
              alt="Agent Nader Omar"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-4 inline-block rounded-full bg-gradient-to-r from-blue-200 to-blue-300/50 px-3 py-1.5 text-base sm:text-lg font-semibold text-gray-900 [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]"
          >
            Buy a home in Fall River with Nader Omar
          </motion.span>
          <motion.h5
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-3xl bg-gradient-to-br from-gray-900 via-blue-600 to-blue-400 bg-clip-text text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight text-transparent [text-shadow:0_2px_4px_rgba(0,0,0,0.15)]"
          >
            Your Dream Home Awaits
          </motion.h5>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="my-6 max-w-xl text-lg sm:text-xl md:text-2xl leading-relaxed font-medium text-gray-800 [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]"
          >
            Partner with Nader Omar, your trusted RE/MAX agent, to navigate Fall River’s competitive market with ease. Enjoy personalized guidance, expert insights, and a stress-free journey to your perfect home.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
           
              <motion.button
               onClick={() => {
                const el = document.getElementById("contact");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
                style={{
                  border: border.get(),
                  boxShadow: boxShadow.get(),
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: boxShadow.get(),
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="group relative flex w-fit items-center gap-2 rounded-full bg-blue-200/30 px-8 py-4 text-xl sm:text-2xl font-bold transition-colors hover:bg-blue-200/50"
              >
                <span className="bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]">
                  Connect with Nader
                </span>
                <motion.span
                  className="inline-block"
                  transition={{ duration: 0.3 }}
                  whileHover={{ x: 5 }}
                >
                  →
                </motion.span>
              </motion.button>
        
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AuroraHero;