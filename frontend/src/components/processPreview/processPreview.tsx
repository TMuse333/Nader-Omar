"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import agent from "../../../public/nader-57.jpg";

const ProcessPreview = () => {
  return (
    <section className="relative bg-blue-100 py-12 px-4 sm:px-6 before:absolute before:inset-0 before:bg-blue-50/20 before:z-0">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row-reverse gap-10 items-center relative z-10">
        {/* Agent Image */}
        <div className="w-full h-full rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(96,165,250,0.1)]
        ">
          <Image
            src={agent}
            alt="Agent Nader"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300
            max-h-[600px]"
            
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-6 md:order-2">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight bg-gradient-to-br from-gray-900 to-blue-600 bg-clip-text text-transparent">
            Learn Nader’s step-by-step process for helping you reach your real estate goals
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            From your first call to closing the deal, Nader guides you every step of the way with clarity, confidence, and care.
          </p>

          {/* Step Preview */}
          <div className="space-y-4 mt-4 bg-blue-50/50 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <span className="text-blue-600 font-semibold">1.</span>
              <p className="text-gray-700">Personal discovery call to understand your unique goals.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 font-semibold">2.</span>
              <p className="text-gray-700">Tailored property matches and strategic planning.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 font-semibold">3.</span>
              <p className="text-gray-700">Guided negotiation and smooth closing with full support.</p>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="/buy-home-fall-river"
            className="mt-6 inline-block w-fit px-6 py-3 bg-blue-200/30 hover:bg-blue-200/50 text-gray-900 rounded-xl font-medium transition hover:shadow-[0_4px_16px_rgba(96,165,250,0.2)]"
          >
            Explore the Full Process
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessPreview;