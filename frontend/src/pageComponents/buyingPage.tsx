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
import Head from "next/head";


const BuyingPage = () => {



    return (
        <>
            <Head>
  <title>Top Realtor in Fall River | Buy Your Home with Nader</title>
  <meta name="description" content="Looking to buy a home in Fall River, Nova Scotia? Discover listings, schools, lifestyle info, and expert guidance from local realtor Nader." />
  <link rel="canonical" href="https://www.naderrealtor.ca/buy-home-fall-river" />
  
  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.naderrealtor.ca/buy-home-fall-river" />
  <meta property="og:title" content="Top Realtor in Fall River | Buy Your Home with Nader" />
  <meta property="og:description" content="Looking to buy a home in Fall River, Nova Scotia? Discover listings, schools, lifestyle info, and expert guidance from local realtor Nader." />
  <meta property="og:image" content="/images/fallriver-area.webp" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://www.naderrealtor.ca/buy-home-fall-river" />
  <meta name="twitter:title" content="Top Realtor in Fall River | Buy Your Home with Nader" />
  <meta name="twitter:description" content="Looking to buy a home in Fall River, Nova Scotia? Discover listings, schools, lifestyle info, and expert guidance from local realtor Nader." />
  <meta name="twitter:image" content="/images/fallriver-area.webp" />

  <link rel="icon" href="/favicon.ico" />

  {/* Structured Data */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "name": "Nader - Fall River Realtor",
        "url": "https://www.naderrealtor.ca",
        "image": "https://www.naderrealtor.ca/images/fallriver-area.webp",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Fall River",
          "addressRegion": "NS",
          "addressCountry": "Canada"
        },
        "description": "Helping home buyers find the perfect property in Fall River, Nova Scotia.",
        "areaServed": {
          "@type": "Place",
          "name": "Fall River"
        }
      })
    }}
  />
</Head>
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