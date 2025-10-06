"use client"

import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import PrivacyPolicy from "@/components/privacy/privacy";
import React from "react";



const PrivacyPage = () => {


    return (
        <>
        <main className="bg-blue-100">
            <Navbar
            excludedLink="Process"
            />

            <PrivacyPolicy/>

            <Footer/>
            
        </main>
        </>
    )
}

export default PrivacyPage