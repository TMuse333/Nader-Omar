"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    text: "Nader made buying our first home stress-free. His knowledge of Fall River was invaluable!",
    rating: 5,
  },
  {
    name: "James & Lisa",
    text: "Professional, responsive, and truly cares about his clients. Highly recommend!",
    rating: 5,
  },
  {
    name: "Michael T.",
    text: "Nader's data-driven approach helped us make a smart investment decision.",
    rating: 5,
  },
];

const ReviewCard: React.FC<Testimonial & { index: number }> = ({
  name,
  text,
  rating,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl flex flex-col h-full transition-shadow duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-white rounded-lg shadow-md flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 24 24" className="w-5 h-5">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
        </div>
        <div className="flex gap-0.5">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">
        &ldquo;{text}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-white font-bold flex-shrink-0">
          {name.charAt(0)}
        </div>
        <span className="font-semibold text-gray-900">{name}</span>
      </div>
    </motion.div>
  );
};

interface TestimonialHeroProps {
  logoImage: string;
  fullBodyImage: string;
  titleText: string;
  descriptionText: string;
}

const TestimonialHero: React.FC<TestimonialHeroProps> = ({
  logoImage,
  fullBodyImage,
  titleText,
  descriptionText,
}) => {
  return (
    <div className="relative w-full mt-[72px] md:mt-[56px]">
      {/* Hero Section with Background */}
      <section className="relative min-h-[80vh] md:min-h-[70vh] overflow-hidden">
        {/* Full-width background image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f]/95 via-[#0f0f0f]/80 to-[#0f0f0f]/60 z-10" />
          <Image
            src="/home.jpeg"
            alt="Fall River Nova Scotia Home"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content container */}
        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 py-12 md:py-20 flex flex-col justify-center min-h-[80vh] md:min-h-[70vh]">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 max-w-2xl text-center md:text-left"
            >
              {/* Logo + Location */}
              <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
                <Image
                  src={logoImage}
                  alt="RE/MAX Nova Logo"
                  width={80}
                  height={80}
                  className="w-[60px] md:w-[70px] bg-white rounded-lg p-1.5"
                />
                <p className="text-sm md:text-base font-medium text-cyan-400 tracking-wide uppercase">
                  {titleText}
                </p>
              </div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Your <span className="gradient-text-accent">Trusted Partner</span> in Nova Scotia Real Estate
              </motion.h1>

              {/* Unique Value Props */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-6"
              >
                <span className="px-3 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-sm font-medium">
                  15+ Years Experience
                </span>
                <span className="px-3 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-sm font-medium">
                  English • French • Arabic
                </span>
                <span className="px-3 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-sm font-medium">
                  Data-Driven Approach
                </span>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed"
              >
                {descriptionText}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 items-center md:items-start"
              >
                <button
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center gap-2 bg-cyan-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-cyan-400 transition-all duration-300 hover:shadow-cyan-500/25"
                >
                  Get in Touch
                  <ChevronRight className="w-5 h-5" />
                </button>
                <a
                  href="tel:+17823213393"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300"
                >
                  Call Now
                  <ChevronRight className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right side - Agent image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden md:block flex-shrink-0"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 blur-3xl rounded-2xl scale-110" />
                <Image
                  src={fullBodyImage}
                  alt="Nader Omar - Real Estate Agent"
                  width={450}
                  height={550}
                  priority
                  className="relative w-[350px] lg:w-[420px] h-auto rounded-2xl border-2 border-white/20 shadow-2xl object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - White background for contrast */}
      <section className="bg-white py-12 md:py-16 relative z-30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10"
          >
            Client Experiences
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <ReviewCard key={index} {...testimonial} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-10"
          >
            <button
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 text-cyan-600 font-semibold text-lg hover:gap-3 transition-all duration-300"
            >
              Ready to Start Your Journey?
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialHero;
