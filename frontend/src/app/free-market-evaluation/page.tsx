import ContactPage from "@/pageComponents/contactPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Nader Omar | Free Market Evaluation in Fall River Nova Scotia",
    description:
      "Nader Omar offers a free market evaluation for homes in Fall River, Nova Scotia, utilizing over 15 years of experience and data-driven insights to provide accurate property assessments.",
    keywords: [
      "Nader Omar",
      "Free market evaluation Fall River",
      "Market evaluation Nova Scotia",
      "Remax market evaluation Fall River",
      "Fall River property assessment"
    ],
    openGraph: {
      title: "Nader Omar | Free Market Evaluation in Fall River Nova Scotia",
      description:
        "Nader Omar, a trusted Remax Nova real estate agent, provides a free market evaluation in Fall River, Nova Scotia, with expert, personalized property analysis.",
      url: "https://www.naderomarrealtor.com/free-market-evaluation",
      images: [
        {
          url: "https://naderomarrealtor.com/nader.png",
          width: 1200,
          height: 630,
          alt: "Nader Omar | Free Market Evaluation Remax Nova Real Estate Agent Fall River Nova Scotia"
        }
      ],
      type: "website",
      locale: "en_US",
      siteName: "Nader Omar | Free Market Evaluation Fall River Nova Scotia"
    },
    icons: {
      icon: ["/favicon.ico?v=4"]
    },
    // manifest: "/site.webmanifest"
  };


const Page = ()=> {



    return (
       <>
       <ContactPage/>
       </>
    )
}

export default Page




