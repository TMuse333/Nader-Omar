import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const aspects = [
  {
    title: "Expert Guidance, Start to Finish",
    description:
      "From market analysis to closing day, I handle every step with strategy and precision.",
  },
  {
    title: "Expanded Buyer Reach",
    description:
      "Fluent in English, French, and Arabic — connecting your listing to more qualified buyers.",
  },
  {
    title: "Reliable Problem Solver",
    description:
      "When issues come up (and they will), I stay calm, proactive, and always in your corner.",
  },
];


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
        bg-gradient-to-br from-[#cfe3f5] to-[#a5c8eb]
          flex items-center justify-center rounded-2xl text-center pt-12"
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
            <p className="text-base leading-relaxed text-left">
              Hello, I&apos;m Nader — your <span className="font-bold">competitive edge</span> in the real estate market. From 
              <span className="font-bold"> pricing strategies</span> to <span className="font-bold"> negotiations</span> and 
              <span className="font-bold"> complex paperwork</span>, I handle the hard parts so you can focus on your next chapter. 
              Whether you&apos;re buying or selling, I bring <span className="font-bold"> clarity</span>, 
              <span className="font-bold"> speed</span>, and <span className="font-bold"> confidence</span> to every step — all while 
              ensuring you get the <span className="font-bold"> best possible deal</span>. With deep 
              <span className="font-bold"> local insight</span> and <span className="font-bold"> multilingual communication</span> in 
              English, French, and Arabic, I help you reach more buyers and navigate every situation with ease.
              <br /><br />
              I&apos;ve spent over <span className="font-bold">15 years</span> leading customer-facing teams, solving 
              <span className="font-bold"> high-pressure problems</span>, and guiding people through 
              <span className="font-bold"> life-changing decisions</span>. I&apos;ve lived in Halifax since 2015, own 
              <span className="font-bold"> rental properties</span> both here and overseas, and treat every client like family — 
              because I&apos;ve been in your shoes.
            </p>

            <section className="flex flex-col md:flex-row justify-center items-center gap-10 py-10 px-6 text-center">
              {aspects.map(({ title, description }, i) => (
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
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p>{description}</p>
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
              className="w-[95vw] max-w-[350px] md:h-[40vh] max-h-[400px] rounded-2xl mx-auto
              mb-auto"
              height={1300}
              width={600}
            />
          </motion.div>
        </section>
      </motion.section>
    </section>
  );
};

export default TextBoxPoints;
