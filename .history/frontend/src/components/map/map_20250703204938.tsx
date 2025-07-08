"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Define a union type for the categories
type Category = "schools" | "restaurants" | "gyms";

const MAPS: Record<Category, string> = {
  schools: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d90793.70770016564!2d-63.710578258467905!3d44.67258280874493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbedford%20ns%20schools!5e0!3m2!1sen!2sca!4v1748217921054!5m2!1sen!2sca",
  restaurants: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d90793.80052068012!2d-63.71092171817445!3d44.672523560601434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbedford%20ns%20restaurants!5e0!3m2!1sen!2sca!4v1748218075712!5m2!1sen!2sca",
  gyms: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d90793.80052068012!2d-63.71092171817445!3d44.672523560601434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbedford%20ns%20gyms!5e0!3m2!1sen!2sca!4v1748218187835!5m2!1sen!2sca"
};

const categories: Category[] = ["schools", "restaurants", "gyms"];
const  InteractiveMap = () => {
  const [active, setActive] = useState<Category>("schools");

  return (
    <div className="flex flex-col items-center gap-4 text-black">
        <h2 className="text-3xl sm:text-4xl md:text-5xl">Amenities in Fall river</h2>
        <p className="text-md sm:text-lg md:text-xl
        px-4 max-w-[1200px]">From scenic parks to cozy cafes, Bedford offers a rich blend of outdoor activities, dining spots, and community amenities to explore.</p>

      {/* Buttons */}
      <div className="flex gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-white font-medium transition-all ${
              active === cat ? "bg-blue-600" : "bg-gray-400 hover:bg-blue-500"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Animated iframe map */}
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
            className="absolute inset-0 w-full h-full
          "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default InteractiveMap