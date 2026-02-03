import PrivacyPolicy from "@/pageComponents/privacyPolicy";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Nader Omar Real Estate",
  description: "Privacy Policy for Nader Omar Real Estate - Learn how we collect, use, and protect your personal information.",
};

const Page = () => {
  return <PrivacyPolicy />;
};

export default Page;
