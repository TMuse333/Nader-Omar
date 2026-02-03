import AboutPage from "@/pageComponents/aboutPage";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Nader Omar | Fall River Nova Scotia Real Estate Agent",
  description: "Meet Nader Omar, a trusted RE/MAX Nova real estate agent in Fall River, Nova Scotia. With 15+ years of experience and trilingual service, Nader helps buyers find their perfect home.",
  keywords: [
    "Nader Omar",
    "about Nader Omar",
    "Fall River Nova Scotia real estate",
    "RE/MAX agent",
    "real estate agent Fall River",
    "trilingual realtor"
  ],
  openGraph: {
    title: "About Nader Omar | Fall River Nova Scotia Real Estate Agent",
    description: "Meet Nader Omar, a trusted RE/MAX Nova real estate agent dedicated to exceptional service for home buyers in Fall River, Nova Scotia.",
    url: "https://www.naderomarrealtor.com/about",
    images: [
      {
        url: "https://www.naderomarrealtor.com/nader.jpg",
        width: 1200,
        height: 630,
        alt: "Nader Omar | RE/MAX Nova Real Estate Agent in Fall River, Nova Scotia"
      }
    ],
    type: "website",
    locale: "en_US",
    siteName: "Nader Omar Real Estate"
  },
};

const Page = () => {
  return <AboutPage />;
};

export default Page;
