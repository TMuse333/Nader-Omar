"use client";

import React, { useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import Link from "next/link";

interface NavbarProps {
  excludedLink: "Home" | "Process" | "Free Market Evaluation" | "About" | "Offer" | "";
}

const COLORS_TOP = ["#06b6d4", "#22d3ee", "#67e8f9", "#a5f3fc"];

const Navbar: React.FC<NavbarProps> = ({ excludedLink }) => {
  const [isOpen, setIsOpen] = useState(false);
  const color = useMotionValue(COLORS_TOP[0]);

  React.useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Process", href: "/buy-home-fall-river" },
    { name: "Free Market Evaluation", href: "/free-market-evaluation" },
    { name: "Offer", href: "/offer" },
  ].filter((item) => item.name !== excludedLink);

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-semibold text-white"
          >
            Nader Omar | <span className="text-cyan-400">RE/MAX</span>
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={
                  item.name === "Offer"
                    ? "text-cyan-400 font-medium px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/20 transition-colors"
                    : "text-gray-300 font-medium hover:text-cyan-400 transition-colors"
                }
              >
                {item.name}
              </motion.div>
            </Link>
          ))}
          {/* Contact button for desktop */}
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-white font-medium rounded-full transition-colors"
          >
            Contact
          </motion.button>
        </div>

        {/* Mobile Burger Button */}
        <motion.button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            className="bg-white h-0.5 w-6 mb-1.5"
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="bg-white h-0.5 w-6 mb-1.5"
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="bg-white h-0.5 w-6"
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-[#1a1a1a]/95 backdrop-blur-md"
      >
        <div className="flex flex-col items-center py-4">
          {navItems.map((item, index) => (
            <Link key={item.name} href={item.href}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className={
                  item.name === "Offer"
                    ? "py-2 px-4 my-1 text-cyan-400 font-medium rounded-full border border-cyan-500/40 bg-cyan-500/10"
                    : "py-2 text-gray-300 font-medium hover:text-cyan-400 transition-colors"
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </motion.div>
            </Link>
          ))}
          {/* Contact scroll link for mobile */}
          <motion.div
            onClick={scrollToContact}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="py-2 text-cyan-400 font-medium cursor-pointer"
          >
            Contact
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
