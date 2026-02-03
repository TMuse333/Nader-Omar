import OfferPage from "@/pageComponents/offerPage";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offer for Nader | Thomas Musial",
  description: "A personalized offer for Nader Omar — website redesign, new pages, and AI chatbot system at early supporter pricing.",
};

const Page = () => {
  return <OfferPage />;
};

export default Page;
