"use client"

import Accordion from "@/components/accordion/accordion";
import AuroraHero from "@/components/aurora/auroraHero";
import HomeBuyingGuide from "@/components/buyerGuide/buyerGuide";
import ScrollCarousel from "@/components/scrollCarousel/scrollCarousel";
// import ServiceHerobanner from "@/components/serviceHero/serviceHero";
import { accordionData, buyingCloser } from "@/data/buyingData";
// import { serviceHeroBannerData } from "@/data/data";
import React from "react";


import Navbar from "@/components/navbar/navbar";
import ContactCloser from "@/components/contactForm/contactForm";
import NaderBanner from "@/components/naderBanner/naderBanner";
import Footer from "@/components/footer/footer";
import InteractiveMap from "@/components/map/map";



const BuyingPage = () => {



    return (
        <>
        <main className="w-screen bg-blue-100">
                {/* <ServiceHerobanner
                {...serviceHeroBannerData}
                /> */}
                <Navbar
                excludedLink="Process"
                />
                <AuroraHero/>
                <HomeBuyingGuide/>
                <InteractiveMap/>
                <ScrollCarousel/>
                <Accordion
                hasIntro={true}
                intro="Common questions"
                description="Here are some common questions when running buying real estate in the fall river area"
                text={accordionData}
                />
               
<ContactCloser
{...buyingCloser}
/>
<NaderBanner/>

<Footer
/>


        </main>
        </>
    )
}

export default BuyingPage