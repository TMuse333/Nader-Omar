import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CarouselHeroProps {
  mainHeader: string;
  titleText: string;
  descriptionText: string;
  images: {
    src: string;
    alt: string;
  }[];
}

interface CarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [tabProgress, setTabProgress] = useState<number>(0);
  const [slideInProgress, setSlideInProgress] = useState(true);
  const [paused, setPaused] = useState<boolean>(false);

  React.useEffect(() => {
    setTabProgress(0);
    setSlideInProgress(false);
  }, [currentIndex]);

  React.useEffect(() => {
    if (tabProgress === 100) {
      setSlideInProgress(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  }, [tabProgress, images.length]);

  React.useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      if (tabProgress < 100) {
        setTabProgress((prev) => prev + 0.5);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [tabProgress, paused]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePauseResume = () => {
    setPaused((prev) => !prev);
  };

  return (
    <section
      className="relative w-[98vw] md:w-[60vw] rounded-2xl object-contain mx-auto md:block h-[80vh] mt-auto mb-auto border border-white border-4 text-center bg-black"
    >
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-4xl z-10 hover:scale-110 transition sm:text-5xl"
        aria-label="Previous slide"
      >
        &lt;
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute sm:text-5xl right-0 top-1/2 transform -translate-y-1/2 text-white text-4xl z-10 hover:scale-110 transition"
        aria-label="Next slide"
      >
        &gt;
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-[80%]"
        >
          <Image
            src={images[currentIndex].src}
            height={600}
            width={1300}
            alt={images[currentIndex].alt}
            className="w-full rounded-2xl object-contain mx-auto h-full"
          />
        </motion.div>
      </AnimatePresence>

      <div
        className="absolute flex bottom-[5%] left-1/2 -translate-x-1/2 z-[10]"
      >
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-[8px] relative w-[25px] sm:w-[35px] md:w-[50px] bg-gray-600 mr-3 hover:scale-[1.2] transition-all cursor-pointer`}
            onClick={() => setCurrentIndex(index)}
          >
            {index === currentIndex && (
              <div
                className="bg-white h-full"
                style={{
                  width: `${tabProgress}%`,
                  transition: slideInProgress ? "width 0.3s ease-in" : "none",
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Pause/Go Button */}
      <button
        onClick={handlePauseResume}
        className="absolute bottom-[8%] left-1/2 transform -translate-x-1/2 text-white text-xl px-4 py-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
        aria-label={paused ? "Resume slideshow" : "Pause slideshow"}
      >
        {paused ? "Resume" : "Pause"}
      </button>
    </section>
  );
};

const CarouselHero: React.FC<CarouselHeroProps> = ({
  mainHeader,
  titleText,
  descriptionText,
  images,
}) => {
  // State to control animation sequence
  const [showDescription, setShowDescription] = useState(false);

  return (
    <header
      className="flex flex-col md:flex-row md:h-screen relative items-center mx-auto max-w-[2200px] text-black md:mt-[-4rem] bg-transparent"
    >
      <section className="flex flex-col md:w-[40vw] justify-center items-center py-4">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onAnimationComplete={() => setShowDescription(true)}
          className="mx-auto p-3 text-center text-lg mt-4 font-semibold"
        >
          {titleText}
        </motion.h1>

        {/* Main Header */}
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: showDescription ? 1 : 0, x: showDescription ? 0 : -40 }}
          transition={{ duration: 1.2 }}
          className="mx-auto py-3 break-words max-w-full px-2 font-semibold whitespace-pre-line overflow-wrap text-3xl sm:text-4xl md:text-5xl"
        >
          {mainHeader}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: showDescription ? 1 : 0, x: showDescription ? 0 : -40 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="pt-4 mx-3"
        >
          {descriptionText}
        </motion.p>

        <section className="flex items-center mr-auto ml-4 mt-6">
          <button className="rounded-full border border-neutral-950 p-3 text-sm font-medium transition-colors hover:bg-neutral-950 hover:text-neutral-100 mr-4">
            Contact
          </button>
          <button className="rounded-full border border-neutral-950 p-3 text-sm font-medium transition-colors hover:bg-neutral-950 hover:text-neutral-100">
            Free e-book
          </button>
        </section>
      </section>

      <Carousel images={images} />
    </header>
  );
};

export default CarouselHero;
