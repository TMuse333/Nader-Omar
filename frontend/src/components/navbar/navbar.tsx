"use client";

import React, { useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import Link from "next/link";

interface NavbarProps {
  excludedLink: "Home" | "Process";
}

const COLORS_TOP = ["#3B82F6", "#60A5FA", "#93C5FD", "#BFDBFE"];

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
    { name: "Process", href: "/buy-home-fall-river" },
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
      className="fixed top-0 left-0 right-0 z-50 bg-blue-100/10 backdrop-blur-md"
    >
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-semibold text-gray-900"
          >
            Nader Omar | RE/MAX
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <motion.div
                whileHover={{ scale: 1.1, color: color.get() }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-900 font-medium hover:text-blue-600 transition-colors"
              >
                {item.name}
              </motion.div>
            </Link>
          ))}
          {/* Contact scroll link for desktop */}
          <motion.div
            onClick={scrollToContact}
            whileHover={{ scale: 1.1, color: color.get() }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-900 font-medium hover:text-blue-600 transition-colors cursor-pointer"
          >
            Contact
          </motion.div>
        </div>

        {/* Mobile Burger Button */}
        <motion.button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            className="bg-gray-900 h-0.5 w-6 mb-1.5"
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="bg-gray-900 h-0.5 w-6 mb-1.5"
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="bg-gray-900 h-0.5 w-6"
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
        className="md:hidden overflow-hidden bg-blue-100/90 backdrop-blur-md"
      >
        <div className="flex flex-col items-center py-4">
          {navItems.map((item, index) => (
            <Link key={item.name} href={item.href}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="py-2 text-gray-900 font-medium hover:text-blue-600 transition-colors"
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
            className="py-2 text-gray-900 font-medium hover:text-blue-600 transition-colors cursor-pointer"
          >
            Contact
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
