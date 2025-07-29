import BuyingPage from "@/pageComponents/buyingPage";
import React from "react";

import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Buy a Home in Fall River | Nader Omar Real Estate",
  description:
    "Looking to buy a home in Fall River, Nova Scotia? Realtor Nader Omar guides you through the process with local expertise and market insights.",
  keywords: [
    "Buy home Fall River",
    "Fall River real estate",
    "Homes for sale Fall River",
    "Fall River realtor",
    "Nader Omar real estate agent"
  ],
  openGraph: {
    title: "Buy a Home in Fall River | Nader Omar Real Estate",
    description:
      "Explore homes for sale in Fall River, NS with trusted real estate agent Nader Omar. Get expert guidance and personalized service.",
    url: "https://naderomarrealtor.com/buy-home-fall-river",
    images: [
      {
        url: "https://naderomarrealtor.com/nader.png",
        width: 1200,
        height: 630,
        alt: "Buy a Home in Fall River | Nader Omar Real Estate"
      }
    ],
    type: "website",
    locale: "en_US",
    siteName: "Buy a Home in Fall River | Nader Omar Real Estate"
  },
  icons: {
    icon: ["/favicon.ico?v=4"]
  },
  
  // manifest: "/site.webmanifest"
};


const Page = () => {


    return (
        <>
        <BuyingPage/>
        </>
    )
}

export default Page