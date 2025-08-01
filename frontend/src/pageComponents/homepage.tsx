"use client";

import { contactCloserData, newHeroData } from "@/data/data";
import React from "react";
import Head from "next/head";

import NewHeroBanner from "@/components/newHerobanner/newHerobanner";
import Footer from "@/components/footer/footer";
import FeatureBoxes from "@/components/featureBoxes/featureBoxes";
import Navbar from "@/components/navbar/navbar";
import IntroCard from "@/components/intoCard/introCard";
import TextAndList from "@/components/textAndList/textAndList";
import ContactCloser from "@/components/contactForm/contactForm";
import ProcessPreview from "@/components/processPreview/processPreview";
import NaderBanner from "@/components/naderBanner/naderBanner";
import MapSection from "@/components/mapSection/mapSection";

const Homepage = () => {
  return (
    <>
      <Head>
        <title>Omar Nader | Real Estate Agent Halifax and Fall River, Nova Scotia</title>
        <meta
          name="description"
          content="Omar Nader is your trusted real estate agent serving Halifax and Fall River. Expert guidance for buying and selling homes with personalized service and local knowledge."
        />
        <meta
          name="keywords"
          content="Omar Nader, real estate agent Halifax, Fall River real estate, Halifax homes for sale, buy home Fall River, sell home Halifax, Nova Scotia realtor"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://naderomarrealtor.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="Omar Nader | Real Estate Agent Halifax and Fall River, Nova Scotia" />
        <meta
          property="og:description"
          content="Expert real estate services by Omar Nader for buyers and sellers in Halifax and Fall River. Personalized support and local market expertise."
        />
        <meta property="og:url" content="https://naderomarrealtor.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Omar Nader Real Estate" />
        <meta
          property="og:image"
          content="https://naderomarrealtor.com/nader.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Omar Nader | Real Estate Agent Halifax Nova Scotia" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Omar Nader | Real Estate Agent Halifax and Fall River, Nova Scotia" />
        <meta
          name="twitter:description"
          content="Expert real estate services by Omar Nader for buyers and sellers in Halifax and Fall River."
        />
        <meta name="twitter:image" content="https://www.naderomarrealestate.ca/nader.png" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen bg-blue-100 space-y-6 overflow-x-hidden">
        <Navbar excludedLink="Home" />
        <NewHeroBanner {...newHeroData} />
        <IntroCard />
        <FeatureBoxes />
        <TextAndList />
        <ProcessPreview />
        <MapSection/>
        <NaderBanner />
        <ContactCloser {...contactCloserData} />
        <Footer />
      </main>
    </>
  );
};

export default Homepage;
