"use client"
import InteractiveMap from "@/components/map/map";
import CarouselHero from "@/components/tempHero/hero";
import TextBoxPoints from "@/components/textBoxPoints/textBoxPoints";
import { aboutFallRiver, areaImages, bedfordFeatureBoxes, closingStatement, heroData, newHeroData, whyNader } from "@/data/data";
import React from "react";
import { Carousel, CarouselGrid, FeatureBoxes, FullBodyHero, TextAndList, VerticalImageTextBox } from "focusflow-components";
import BlogCloser from "@/components/blogCloser/blogCloser";
import NewHeroBanner from "@/components/newHerobanner/newHerobanner";


const Homepage = () => {


    return (
        <main className="w-screen bg-blue-100
        space-y-6">
            {/* <CarouselHero
            {...heroData}
            /> */}
            <NewHeroBanner
            {...newHeroData}
            />
            <TextBoxPoints/>
            {/* <InteractiveMap/> */}
            <h2></h2>
            <Carousel
            {...aboutFallRiver}
            />
            <FeatureBoxes
            {...bedfordFeatureBoxes}
            />
            <TextAndList
            {...whyNader}
            />
            <CarouselGrid
            {...areaImages}
            />

<BlogCloser
  header="Let’s Find Your Perfect Home Together"
  description={`Whether you're buying your first home, upgrading to your dream space, or looking for a smart investment, I'm here to guide you every step of the way. 

Reach out today and let’s make your real estate goals a reality.`}
/>
{/* <VerticalImageTextBox
  {...closingStatement}
  button={
    <a
      href="#contact"
      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-blue-700 transition-all duration-300"
    >
      Schedule a Viewing
    </a>
  }
/> */}
        </main>
    )
}

export default Homepage