import PrivacyPage from "@/pageComponents/privacyPage";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nader Omar | Privacy Policy",
    description:
      "Read the Privacy Policy for Nader Omar, outlining how we collect, use, maintain, and disclose user information on the naderomarrealtor.com website.",
    keywords: [
      "Nader Omar Limited",
      "Privacy Policy",
      "Nader Omar Realtor Privacy",
      "Real Estate Privacy Policy",
      "Fall River Nova Scotia Privacy"
    ],
    openGraph: {
      title: "Nader Omar  | Privacy Policy",
      description:
        "Learn about Nader Omar Limited's Privacy Policy, detailing the collection, use, and protection of user data on naderomarrealtor.com.",
      url: "https://www.naderomarrealtor.com/privacy-policy",
      images: [
        {
          url: "https://naderomarrealtor.com/nader.png",
          width: 1200,
          height: 630,
          alt: "Nader Omar  | Privacy Policy"
        }
      ],
      type: "website",
      locale: "en_US",
      siteName: "Nader Omar  | Privacy Policy"
    },
    icons: {
      icon: ["/favicon.ico?v=4"]
    }
  };


const Page = () => {


    return (
        <PrivacyPage/>
    )
}

export default Page