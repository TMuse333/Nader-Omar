import CookiePolicy from "@/pageComponents/cookiePolicy";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Nader Omar Real Estate",
  description: "Cookie Policy for Nader Omar Real Estate - Learn about our use of cookies and tracking technologies.",
};

const Page = () => {
  return <CookiePolicy />;
};

export default Page;
