"use client";

import { contactCloserData } from "@/data/data";
import React from "react";
import Head from "next/head";

import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import ContactCloser from "@/components/contactForm/contactForm";
import TestimonialHero from "@/components/testimonials/testimonialHero";
import ByTheNumbers from "@/components/byTheNumbers/byTheNumbers";
import MeetNader from "@/components/meetNader/meetNader";
import WhyChooseMe from "@/components/whyChooseMe/whyChooseMe";
import RemaxCredibility from "@/components/remaxCredibility/remaxCredibility";
import AreasServed from "@/components/areasServed/areasServed";
import IntakeSection from "@/components/intakeSection/intakeSection";

const Homepage = () => {
  const heroData = {
    logoImage: "/remax-nova-flag.webp",
    fullBodyImage: "/nader.jpg",
    titleText: "Fall River, Waverley & Wellington, Nova Scotia",
    descriptionText:
      "I'm Nader Omar, a RE/MAX Nova agent who brings 15+ years of experience, three languages, and a data-driven approach to every transaction. Whether you're buying your first home or making your next move, I'm here to make it clear, confident, and stress-free.",
  };

  return (
    <>
      <Head>
        <title>Nader Omar | Real Estate Agent Halifax and Fall River, Nova Scotia</title>
        <meta
          name="description"
          content="Nader Omar is your trusted real estate agent serving Halifax and Fall River. Expert guidance for buying and selling homes with personalized service and local knowledge."
        />
        <meta
          name="keywords"
          content="Nader Omar, real estate agent Halifax, Fall River real estate, Halifax homes for sale, buy home Fall River, sell home Halifax, Nova Scotia realtor"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://naderomarrealtor.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="Nader Omar | Real Estate Agent Halifax and Fall River, Nova Scotia" />
        <meta
          property="og:description"
          content="Expert real estate services by Nader Omar for buyers and sellers in Halifax and Fall River. Personalized support and local market expertise."
        />
        <meta property="og:url" content="https://naderomarrealtor.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Nader Omar Real Estate" />
        <meta
          property="og:image"
          content="https://naderomarrealtor.com/nader.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Nader Omar | Real Estate Agent Halifax Nova Scotia" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nader Omar | Real Estate Agent Halifax and Fall River, Nova Scotia" />
        <meta
          name="twitter:description"
          content="Expert real estate services by Nader Omar for buyers and sellers in Halifax and Fall River."
        />
        <meta name="twitter:image" content="https://www.naderomarrealestate.ca/nader.png" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen overflow-x-hidden">
        <Navbar excludedLink="Home" />

        {/* Hero + Testimonials */}
        <TestimonialHero {...heroData} />

        {/* Dark section - Meet Nader + By The Numbers */}
        <section className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] py-8">
          <MeetNader />
          <ByTheNumbers />
        </section>

        {/* Light section - Why Choose Me */}
        <WhyChooseMe />

        {/* Dark section - RE/MAX Credibility */}
        <RemaxCredibility />

        {/* Areas Served (merged with Local Expert - includes bg image banner + area cards) */}
        <AreasServed />

        {/* Chatbot Intake Section */}
        <IntakeSection />

        {/* Contact section */}
        <ContactCloser {...contactCloserData} />

        <Footer />
      </main>
    </>
  );
};

export default Homepage;
