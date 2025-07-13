"use client"

import { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import Link from "next/link";
import agent from '../../../public/nader.jpg';

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
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 h-24 w-24 rounded-full overflow-hidden border-2 border-blue-200 shadow-lg"
          style={{ boxShadow }}
        >
          <img
            src={agent.src}
            alt="Agent Nader Omar"
            className="h-full w-full object-cover"
          />
        </motion.div>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-1.5 inline-block rounded-full bg-blue-200/50 px-3 py-1.5 text-sm font-medium text-gray-900"
        >
          Buy a home in Fall River with Nader Omar
        </motion.span>
        <motion.h5
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl bg-gradient-to-br from-gray-900 to-blue-600 bg-clip-text text-center text-3xl font-semibold leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight"
        >
          Your Dream Home Awaits
        </motion.h5>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed"
        >
          Partner with Nader Omar, your trusted RE/MAX agent, to navigate Fall River’s competitive market with ease. Enjoy personalized guidance, expert insights, and a stress-free journey to your perfect home.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <Link href="/contact-agent">
            <motion.button
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
              className="group relative flex w-fit items-center gap-2 rounded-full bg-blue-200/30 px-8 py-4 text-lg sm:text-xl font-semibold text-gray-900 transition-colors hover:bg-blue-200/50"
            >
              Connect with Nader
              <motion.span
                className="inline-block"
                transition={{ duration: 0.3 }}
                whileHover={{ x: 5 }}
              >
                →
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AuroraHero;