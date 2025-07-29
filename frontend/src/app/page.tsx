import Homepage from "@/pageComponents/homepage";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nader Omar | Real Estate Agent Fall River Nova Scotia",
  description:
    "With over 15 years of experience, Nader Omar helps home buyers in Fall River, Nova Scotia using local knowledge and data-driven insights to find their ideal home.",
  keywords: [
    "Nader Omar",
    "Real estate agent Fall River",
    "Real estate agent Nova Scotia",
    "Remax agent Fall River",
    "Fall River homes for sale"
  ],
  openGraph: {
    title: "Nader Omar | Real Estate Agent Fall River Nova Scotia",
    description:
      "Nader Omar is a trusted Remax Nova real estate agent in Fall River, Nova Scotia, helping clients find the perfect home with expert guidance.",
    url: "https://naderomarrealtor.com",
    images: [
      {
        url: "https://naderomarrealtor.com/nader.png",
        width: 1200,
        height: 630,
        alt: "Nader Omar | Remax Nova Real Estate Agent Fall River Nova Scotia"
      }
    ],
    type: "website",
    locale: "en_US",
    siteName: "Nader Omar | Real Estate Agent Fall River Nova Scotia"
  },
  icons: {
    icon: ["/favicon.ico?v=4"]
  },
  // manifest: "/site.webmanifest"
};


export default function Home() {
  return (
   <Homepage/>
  );
}
