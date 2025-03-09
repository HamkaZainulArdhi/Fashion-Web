import ExpandableCard from '@/components/aceternity/expandable-card-standard';
import ExpandableCard2 from '@/components/aceternity/expandable-card-standard-2';
import { PlaceholdersAndVanish } from '@/components/aceternity/search-bar';
import { IndonesiaMap } from '@/components/tukar/peta';
import React from 'react';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tukar Page | SustainStyles",
  description: "sustainables fashion",
  // other metadata
};


const Detail: React.FC = () => {
  return (
    <div className="bg-whitebg">
        <IndonesiaMap />
        <PlaceholdersAndVanish />
            <div className="mb-7 flex justify-center items-center text-center  text-xl md:text-4xl text-black">
                <h3>Berapa Pakaian yang cocok untukmu</h3>
            </div>
        <div className='flex flex-grow justify-center gap-4 bg-gradient-to-b from-blue-100 to-teal-100 rounded-t-[50px]' > 
        <ExpandableCard />
        <ExpandableCard2 />
        </div>
      </div>
  );
};

{/* <div className="relative  w-full h-[500px]"></div> */}
export default Detail;