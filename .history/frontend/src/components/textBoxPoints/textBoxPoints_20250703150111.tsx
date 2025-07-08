import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TextBoxPoints = () => {
  const gradientRef = useRef(null);
  const isInView = useInView(gradientRef, { once: true, margin: "-100px" });

  return (
    <section
      className="flex flex-col w-screen md:w-[98vw] mx-auto max-w-[1300px] text-black rounded-2xl"
    >
      {/* Main gradient section */}
      <motion.section
        ref={gradientRef}
        initial={{ scale: 0.8 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
        bg-gradient-to-br from-orange-100 to-blue-200
         md:h-[70vh] flex items-center justify-center rounded-2xl text-center pt-12"
      >
        <section className="flex flex-col md:flex-row items-center justify-center pt-1 gap-6 px-4">
          {/* Animated Text Block */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col max-w-2xl mx-auto px-4 relative"
          >
            <h2 className="text-2xl font-semibold mb-2">Hello, I am Nader</h2>
            <p>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate numquam, eaque nam amet nulla quis fugit reiciendis voluptatum alias. Cumque itaque, qui eius consequatur eaque velit quibusdam minima eveniet aperiam ipsam pariatur vero veritatis facilis sapiente in rem, aut dolorum quisquam ex, quidem ab tempora. Sunt ipsum quod ab temporibus!
            </p>
            <section className="flex flex-col md:flex-row justify-center items-center gap-10 py-10 px-6 text-center">
        {[1, 2, 3].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 + i * 0.2, duration: 0.5 }}
            className="flex flex-col items-center max-w-xs"
          >
            <Image
              src="/check-circle.svg"
              alt="Check"
              width={40}
              height={40}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              {i === 0 && "Trusted Experience"}
              {i === 1 && "Local Expertise"}
              {i === 2 && "Proven Results"}
            </h3>
            <p>
              {i === 0 &&
                "Over a decade helping buyers and sellers in the HRM area."}
              {i === 1 &&
                "Deep knowledge of Halifax, Lower Sackville, and surrounding areas."}
              {i === 2 &&
                "All of my clients have gotten great deals on their real estate"}
            </p>
          </motion.div>
        ))}
      </section>
          </motion.section>

          {/* Animated Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Image
              src={"/nader.jpg"}
              alt="Nader Omar"
              className="w-[95vw] max-w-[350px] md:h-[40vh] max-h-[400px] rounded-2xl mx-auto"
              height={1300}
              width={600}
            />
          </motion.div>
        </section>
      </motion.section>

      {/* Feature Points Section */}
    
    </section>
  );
};

export default TextBoxPoints;
