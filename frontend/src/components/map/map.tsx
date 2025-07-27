"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Category =
  | "lakes"
  | "schools"
  | "recreation"
  | "shopping"
  | "health"
  | "transport";

const MAPS: Record<Category, string> = {
  lakes:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90592.90276179707!2d-63.75289395664059!3d44.8006137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5987bb14d4f24d%3A0x1665532e7f9fe464!2sLake%20Thomas!5e0!3m2!1sen!2sca!4v1753648225568!5m2!1sen!2sca",
  schools:
    "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d90593.08883061357!2d-63.753580926747794!3d44.80049519813844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sschools%20in%20Fall%20River%2C%20Nova%20Scotia!5e0!3m2!1sen!2sca!4v1753648264391!5m2!1sen!2sca",
  recreation:
    "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d90591.69732642286!2d-63.73604951750841!3d44.801381401037084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srecreation%20in%20fall%20river%20nova%20scotia!5e0!3m2!1sen!2sca!4v1753648161489!5m2!1sen!2sca",
  shopping:
    "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d90593.1818648745!2d-63.753924411801655!3d44.80043594720893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sshopping%20in%20Fall%20River%2C%20Nova%20Scotia!5e0!3m2!1sen!2sca!4v1753648296183!5m2!1sen!2sca",
  health:
    "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d22644.287517299006!2d-63.638641155896906!3d44.81064524078065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shealth%20in%20Fall%20River%2C%20Nova%20Scotia!5e0!3m2!1sen!2sca!4v1753648342666!5m2!1sen!2sca",
  transport:
    "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d22644.28897115053!2d-63.63872699673636!3d44.81064153777259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stransport%20in%20Fall%20River%2C%20Nova%20Scotia!5e0!3m2!1sen!2sca!4v1753648367620!5m2!1sen!2sca",
};

const categories: Category[] = [
  "lakes",
  "schools",
  "recreation",
  "shopping",
  "health",
  "transport",
];

const InteractiveMap = () => {
  const [active, setActive] = useState<Category>("lakes");

  return (
    <div className="flex flex-col items-center gap-6 text-black px-4 py-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
        Amenities in Fall River
      </h2>
      <p className="text-md sm:text-lg md:text-xl text-center max-w-3xl">
        From scenic parks to cozy cafes, Fall River offers a rich blend of outdoor
        activities, dining spots, and community amenities to explore.
      </p>

      {/* Category buttons */}
      <div className="flex gap-2 flex-wrap justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`capitalize px-4 py-2 rounded-full text-white font-medium transition-colors ${
              active === cat ? "bg-blue-600" : "bg-gray-400 hover:bg-blue-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Animated map */}
      <div className="w-full max-w-4xl h-[450px] relative overflow-hidden rounded-xl shadow-lg">
        <AnimatePresence mode="wait">
          <motion.iframe
            key={active}
            src={MAPS[active]}
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default InteractiveMap;
