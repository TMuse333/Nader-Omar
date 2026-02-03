"use client"

import Accordion from "@/components/accordion/accordion";
import ProcessHero from "@/components/processHero/processHero";
import JourneyOverview from "@/components/journeyOverview/journeyOverview";
import { accordionData, buyingCloser } from "@/data/buyingData";
import React from "react";

import Navbar from "@/components/navbar/navbar";
import ContactCloser from "@/components/contactForm/contactForm";
import Footer from "@/components/footer/footer";
import InteractiveMap from "@/components/map/map";
import FeatureBoxes from "@/components/featureBoxes/featureBoxes";
import ValueProps from "@/components/valueProps/valueProps";
import DocumentsExplained from "@/components/documentsExplained/documentsExplained";
import ClosingCTA from "@/components/closingCTA/closingCTA";
import Head from "next/head";


const BuyingPage = () => {
    return (
        <>
            <Head>
                <title>Top Realtor in Fall River | Buy Your Home with Nader</title>
                <meta name="description" content="Looking to buy a home in Fall River, Nova Scotia? Discover listings, schools, lifestyle info, and expert guidance from local realtor Nader." />
                <link rel="canonical" href="https://naderomarrealtor.com/buy-home-fall-river" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://naderomarrealtor.com/buy-home-fall-river" />
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
                            "url": "naderomarrealtor.com",
                            "image": "naderomarrealtor.com/nader.png",
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

            <main className="w-screen bg-[#0f0f0f] overflow-x-hidden">
                <Navbar excludedLink="Process" />

                {/* Hero Section - Content focused */}
                <ProcessHero />

                {/* Journey Overview - 3 phases */}
                <JourneyOverview />

                {/* Value Propositions - Nader's strengths */}
                <ValueProps />

                {/* Why Fall River - Area Benefits */}
                <FeatureBoxes />

                {/* Interactive Map */}
                <InteractiveMap />

                {/* Key Documents Explained */}
                <DocumentsExplained />

                {/* Common Questions FAQ */}
                <Accordion
                    hasIntro={true}
                    intro="Common Questions"
                    description="Answers to frequently asked questions about buying real estate in the Fall River area"
                    text={accordionData}
                />

                {/* Strong Closing CTA */}
                <ClosingCTA />

                {/* Contact Form */}
                <ContactCloser {...buyingCloser} />

                <Footer />
            </main>
        </>
    )
}

export default BuyingPage
