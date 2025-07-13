"use client"

import Accordion from "@/components/accordion/accordion";
import AuroraHero from "@/components/aurora/auroraHero";
import HomeBuyingGuide from "@/components/buyerGuide/buyerGuide";
import ScrollCarousel from "@/components/scrollCarousel/scrollCarousel";
// import ServiceHerobanner from "@/components/serviceHero/serviceHero";
import { accordionData } from "@/data/buyingData";
// import { serviceHeroBannerData } from "@/data/data";
import React from "react";

import ClosingSection from "@/components/blogCloser/blogCloser";
import Navbar from "@/components/navbar/navbar";



const BuyingPage = () => {



    return (
        <>
        <main className="w-screen bg-blue-100">
                {/* <ServiceHerobanner
                {...serviceHeroBannerData}
                /> */}
                <Navbar
                excludedLink="buy-home-fall-river"
                />
                <AuroraHero/>
                <HomeBuyingGuide/>
                <ScrollCarousel/>
                <Accordion
                hasIntro={true}
                intro="Common questions"
                description="Here are some common questions when running buying real estate in the fall river area"
                text={accordionData}
                />
               
               <ClosingSection
  header="Your Dream Home Awaits in Fall River"
  description={`Let Nader Omar, your dedicated RE/MAX agent, guide you through Fall River’s competitive real estate market with expertise and care. From finding the perfect home to closing the deal, enjoy a stress-free, personalized experience that turns your vision into reality. Start today and take the first step toward homeownership.`}
/>


        </main>
        </>
    )
}

export default BuyingPage