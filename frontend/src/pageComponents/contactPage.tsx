"use client"
import Footer from "@/components/footer/footer";
import HomeEvaluation from "@/components/homeEvaluation/homeEvaluation";
import Navbar from "@/components/navbar/navbar";
import React from "react";

const ContactPage = () => {
    return (
        <>
            <main className="w-screen bg-[#0f0f0f] overflow-x-hidden">
                <Navbar excludedLink="Free Market Evaluation" />
                <HomeEvaluation />
                <Footer marketPage />
            </main>
        </>
    )
}

export default ContactPage
