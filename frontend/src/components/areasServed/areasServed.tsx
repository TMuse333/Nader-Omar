"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

interface Area {
  name: string;
  image: string;
  description: string;
  highlights: string[];
}

const areas: Area[] = [
  {
    name: "Fall River",
    image: "/home.jpeg",
    description: "A lakeside community perfect for families who love outdoor living.",
    highlights: ["Lake Thomas", "Top Schools", "20 min to Halifax"],
  },
  {
    name: "Waverley",
    image: "/home.jpeg",
    description: "Historic charm meets natural beauty in this tight-knit community.",
    highlights: ["Lake William", "Heritage Sites", "Scenic Trails"],
  },
  {
    name: "Wellington",
    image: "/home.jpeg",
    description: "Quiet rural living with easy access to urban amenities.",
    highlights: ["Spacious Lots", "Peace & Privacy", "Growing Community"],
  },
];

const AreasServed: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      ref={sectionRef}
      className="w-full bg-gray-50"
    >
      {/* "I Live Here" banner with background image */}
      <div className="relative w-full py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/home.jpeg"
            alt="Fall River Nova Scotia"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f]/95 via-[#0f0f0f]/85 to-[#0f0f0f]/70" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/40 mb-6"
          >
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 font-medium text-sm">Fall River, Waverley & Wellington</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            I Don&apos;t Just Work Here &mdash;{" "}
            <span className="gradient-text-accent">I Live Here</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            When you work with me, you&apos;re getting someone who knows every trail,
            every school, every neighborhood. I chose Fall River for my family &mdash;
            and I&apos;d love to help you discover why it might be perfect for yours.
          </motion.p>
        </div>
      </div>

      {/* Area cards */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-12"
        >
          <p className="text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Local Expertise
          </p>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Areas I <span className="text-cyan-600">Serve</span>
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            I specialize in these beautiful communities just north of Halifax &mdash; each with its own unique character and lifestyle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={area.image}
                  alt={`${area.name} Nova Scotia`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <h4 className="text-xl font-bold text-white">{area.name}</h4>
                </div>
              </div>

              <div className="p-5">
                <p className="text-gray-600 text-sm mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-cyan-50 text-cyan-700 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <Link href="/buy-home-fall-river">
            <button className="inline-flex items-center justify-center gap-2 bg-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-cyan-400 transition-all duration-300 group">
              Explore Fall River
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300"
          >
            Let&apos;s Talk
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AreasServed;
