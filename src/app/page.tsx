import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import FAQAccordion from "@/components/accordion";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | SustainStyles",
  description: "SustainStyles is a sustainable fashion platform that helps you to create a brand that is ethical and eco-friendly.",
  // other metadata
};

export default function Home() {
  return (
    <>
    <div className="bg-whitebg overflow-x-hidden">
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      {/* <Brands /> */}
      <AboutSectionTwo />
      <AboutSectionOne />
      {/* <Testimonials /> */}
      <Pricing />
      {/* <Blog /> */}
      <FAQAccordion />
    </div>
    </>
  );
}
