// app/silabus/page.tsx
import React from 'react';
import Head from '@/components/Detail/head';
import SideNav from '@/components/Detail/sidenav';
import AboutSection from '@/components/Detail/about';
import Benefits from '@/components/Detail/benefit';
import Mentors from '@/components/Detail/mentor';
import CourseModules from '@/components/Detail/konten-modul';
import PriceSection from '@/components/Detail/detail-pricing';
import { IndonesiaMap } from '@/components/tukar/peta';
import FAQAccordion from '@/components/Detail/accordion';


export const metadata = {
  title: "Silabus Pembelajaran | e-Learning sustainable fashion",
  description: "This is Contact Page for Startup Nextjs Template",
};

export default function SilabusPage() {
  return (
    <div className="min-h-screen py-14 bg-[#F0F2F9]">
      <main className="container mx-auto px-4">
        <Head />
        
        <div className="flex flex-col lg:flex-row gap-8">
          <SideNav />
          
          <div className="flex-1">
            <AboutSection />
            <Benefits />
            <Mentors />
            <CourseModules />
            <PriceSection />
            <IndonesiaMap />
            <FAQAccordion />
          </div>
        </div>
      </main>
    </div>
  );
}