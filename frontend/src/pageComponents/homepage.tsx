"use client"

// import CarouselHero from "@/components/tempHero/hero";

import {   contactCloserData, newHeroData } from "@/data/data";
import React from "react";


import NewHeroBanner from "@/components/newHerobanner/newHerobanner";
import Footer from "@/components/footer/footer";
import FeatureBoxes from "@/components/featureBoxes/featureBoxes";
import Navbar from "@/components/navbar/navbar";
import IntroCard from "@/components/intoCard/introCard";
import TextAndList from "@/components/textAndList/textAndList";
// import ChatBox from "@/chatbotFiles/chatbot/chatbot";
import ContactCloser from "@/components/contactForm/contactForm";
import ProcessPreview from "@/components/processPreview/processPreview";
import NaderBanner from "@/components/naderBanner/naderBanner";

const Homepage = () => {


    return (
        <main className="w-screen bg-blue-100
        space-y-6">
          <Navbar
          excludedLink="Home"
          />
            {/* <CarouselHero
            {...heroData}
            /> */}
            <NewHeroBanner
            {...newHeroData}
            />
            {/* <TextBoxPoints/> */}
            <IntroCard/>

 
            {/* <InteractiveMap/> */}
            {/* <h2 className="text-center text-3xl  sm:text-4xl md:text-5xl font-semibold text-black mb-2">
  Discover Fall River
</h2> */}
{/* <p className="text-sm sm:text-base md:text-lg text-black mb-6
px-4 max-w-[1200px]">
  Fall River, Nova Scotia blends scenic lakeside living with excellent schools, family-friendly amenities, and a convenient commute to Halifax.
  Here&apos;s why it&apos;s one of HRM&apos;s most desirable communities.
</p> */}

            {/* <Carousel
            {...aboutFallRiver}
            /> */}
          <FeatureBoxes
         
          />


          
                        {/* <h2 className="text-center text-3xl  sm:text-4xl md:text-5xl font-semibold text-black mb-2">
  Discover Fall River
</h2> */}

{/* <ChatBox/> */}
<TextAndList
         
            />

            <ProcessPreview/>
            {/* <CarouselGrid
            {...areaImages}
            /> */}
          


{/* <BlogCloser
  header="Let’s Find Your Perfect Home Together"
  description={`Whether you're buying your first home, upgrading to your dream space, or looking for a smart investment, I'm here to guide you every step of the way. 

Reach out today and let’s make your real estate goals a reality.`}
/> */}
<NaderBanner/>
<ContactCloser
{...contactCloserData}
/>

<Footer/>
        </main>
    )
}

export default Homepage