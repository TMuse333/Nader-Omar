import Image from "next/image";
import React from "react";
import banner from "../../../public/nader-banner.jpeg";

const NaderBanner = () => {
  return (
    <section className="w-full dark-bg py-8">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="relative h-[200px] md:h-[280px] rounded-2xl overflow-hidden border border-white/10">
          <Image
            src={banner}
            alt="Nader Omar personal banner"
            className="w-full h-full object-contain"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default NaderBanner;