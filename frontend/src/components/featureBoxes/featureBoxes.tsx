"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";

interface BoxProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const FeatureBox: React.FC<BoxProps> = ({ src, alt, title, description }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 30, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 12,
        mass: 0.9,
      }}
      whileHover={{ scale: 1.015 }}
      className="bg-white/90 rounded-xl border border-blue-200 shadow-[0_4px_16px_rgba(96,165,250,0.1)] p-6 backdrop-blur-lg w-full max-w-[500px] mx-auto hover:shadow-blue-200 transition-shadow min-h-[400px] flex flex-col space-y-3"
    >
      <motion.div 
       animate={isInView ? { y: 0, opacity: 1,
      transition:{
        delay:0.6
      } } : 
      {
        opacity:0,
        y:-30,
        transition:{
          delay:0.6
        }
    }}
      
      className="w-12 mx-auto mb-4">
        <Image src={src} alt={alt} width={600} height={1300} className="object-contain" />
      </motion.div>
      <h3 className="text-lg font-semibold text-gray-900 text-center">{title}</h3>
      <p className="text-gray-700 text-sm md:text-base text-left flex-grow">{description}</p>
    </motion.div>
  );
};

const AuroraFeatureGrid = (): React.JSX.Element => {
  const boxData = [
    {
      src: "/anchor.png",
      alt: "Kayaking on Lake Thomas in Fall River",
      title: "Lakes & Outdoor Lifestyle",
      description:
        "Fall River is surrounded by Lake Thomas, Miller Lake, Fletcher Lake, and more, providing ample opportunities for water sports like kayaking, canoeing, swimming, boating, and jet skiing. Enjoy scenic nature trails and nearby provincial parks such as Laurie and Oakfield for hiking and picnicking. Golf enthusiasts can access premier courses like Ashburn and Oakfield Golf Clubs.",
    },
    {
      src: "/nature.svg",
      alt: "Family enjoying local park in Fall River",
      title: "Nature Trails & Parks",
      description:
        "Fall River offers access to scenic walking trails and provincial parks, including Laurie Provincial Park and Oakfield Provincial Park, perfect for hiking, picnicking, and enjoying the outdoors with family or friends. These natural spaces provide a serene escape just steps from your home.",
    },
    {
      src: "/school.svg",
      alt: "Children going to school in Fall River",
      title: "Great Schools & Family Life",
      description:
        "Fall River is home to excellent schools, including Ash Lee Jefferson Elementary, Georges P. Vanier Junior High, and Lockview High School, with French Immersion options available. The Gordon R. Snow Community Centre offers programs for all ages, including a gym and fitness centre. Known for its safe, quiet ambiance with low traffic noise, Fall River is perfect for family life.",
    },
    {
      src: "/spacious.png",
      alt: "Suburban home with a large backyard",
      title: "Spacious Lots & Privacy",
      description:
        "Many properties in Fall River come with spacious, tree-lined lots, offering privacy, peace, and ample room for growing families. Whether you’re looking for a large backyard or a secluded retreat, Fall River’s real estate provides the space and tranquility you desire.",
    },
    {
      src: "/airplane.png",
      alt: "Highway connecting to Halifax",
      title: "Easy Commute & Airport Access",
      description:
        "Fall River is just a 20–30 minute commute to Downtown Halifax and Dartmouth, ideal for city workers seeking a suburban lifestyle. It’s only 15 minutes from Halifax Stanfield International Airport, a major perk for travelers. With excellent access to highways 102, 118, 107, and the Aerotech Connector, commuting is seamless. Metro X bus service also connects to downtown Halifax.",
    },
    {
      src: "/food.png",
      alt: "Local shops in Fall River",
      title: "Shops & Daily Essentials",
      description:
        "Fall River offers essential amenities like Sobeys, pharmacies, dentists, a vet, and fast-food options including McDonald’s, Subway, Tim Hortons, and Dairy Queen. Enjoy local cafes and restaurants, such as those at Inn on the Lake. For larger shopping needs, Bedford, Sackville, and Dartmouth Crossing are a short drive away, and the area’s growing infrastructure supports a vibrant community.",
    },
  ];

  return (
    <section className="bg-blue-50 relative py-16 overflow-hidden">
      {/* Slim vertical gradient background centered */}
      <div className="absolute inset-y-0 left-1/2 w-[200px] -translate-x-1/2 z-[-10] pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-blue-100 via-blue-200 to-transparent opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 bg-clip-text bg-gradient-to-r from-blue-800 to-blue-400 text-transparent"
        >
          Why Fall River?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-xl text-gray-800"
        >
          Explore the lifestyle perks of living in one of Nova Scotia’s most desirable communities.
        </motion.p>
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
          {boxData.map((box, i) => (
            <FeatureBox
              key={i}
              src={box.src}
              alt={box.alt}
              title={box.title}
              description={box.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuroraFeatureGrid;
