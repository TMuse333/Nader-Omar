"use client"
import Footer from "@/components/footer/footer";
import HomeEvaluation from "@/components/homeEvaluation/homeEvaluation";
import NaderBanner from "@/components/naderBanner/naderBanner";
import Navbar from "@/components/navbar/navbar";
import React from "react";



const ContactPage = () => {


    return (
<>
<main className="bg-blue-100">
    <Navbar
    excludedLink="Free Market Evaluation"
    />
    <HomeEvaluation/>
    <NaderBanner/>
    <Footer
    marketPage
    />
</main>
</>
    )
}

export default ContactPage