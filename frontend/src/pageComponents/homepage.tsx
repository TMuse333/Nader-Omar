"use client"
import InteractiveMap from "@/components/map/map";
// import CarouselHero from "@/components/tempHero/hero";
import TextBoxPoints from "@/components/textBoxPoints/textBoxPoints";
import {  areaImages, closingStatement, newHeroData, whyNader } from "@/data/data";
import React from "react";
import {  CarouselGrid, TextAndList, VerticalImageTextBox } from "focusflow-components";
import BlogCloser from "@/components/blogCloser/blogCloser";
import NewHeroBanner from "@/components/newHerobanner/newHerobanner";
import Footer from "@/components/footer/footer";
import FeatureBoxes from "@/components/featureBoxes/featureBoxes";
import Navbar from "@/components/navbar/navbar";


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
            <TextBoxPoints/>
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
          
                        <h2 className="text-center text-3xl  sm:text-4xl md:text-5xl font-semibold text-black mb-2">
  Discover Fall River
</h2>
<p className="text-sm sm:text-base md:text-lg text-black mb-6
px-4 max-w-[1200px]">
 Here are some more images of fall river
</p>
<TextAndList
            {...whyNader}
            />
            <CarouselGrid
            {...areaImages}
            />
            <InteractiveMap/>
            <VerticalImageTextBox
  {...closingStatement}
  // button={
  //   <a
  //     href="#contact"
  //     className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-blue-700 transition-all duration-300"
  //   >
  //     Schedule a Viewing
  //   </a>
  // }
/>

<BlogCloser
  header="Let’s Find Your Perfect Home Together"
  description={`Whether you're buying your first home, upgrading to your dream space, or looking for a smart investment, I'm here to guide you every step of the way. 

Reach out today and let’s make your real estate goals a reality.`}
/>
<Footer/>
        </main>
    )
}

export default Homepage