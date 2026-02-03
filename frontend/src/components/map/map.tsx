"use client";

import { useState, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

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

const categoryIcons: Record<Category, React.ReactNode> = {
  lakes: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  ),
  schools: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  ),
  recreation: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  shopping: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  ),
  health: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  transport: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <div ref={sectionRef} className="dark-bg py-20 px-4">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Amenities in <span className="gradient-text-accent">Fall River</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            From scenic parks to cozy cafes, Fall River offers a rich blend of outdoor
            activities, dining spots, and community amenities to explore.
          </p>
        </motion.div>

        {/* Category buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-2 flex-wrap justify-center mb-8"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`capitalize px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2 transition-all ${
                active === cat
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:border-cyan-500/30"
              }`}
            >
              {categoryIcons[cat]}
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Map container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-4xl mx-auto h-[400px] md:h-[500px] relative overflow-hidden rounded-2xl border-2 border-white/10"
        >
          <AnimatePresence mode="wait">
            <motion.iframe
              key={active}
              src={MAPS[active]}
              width="100%"
              height="100%"
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
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveMap;
