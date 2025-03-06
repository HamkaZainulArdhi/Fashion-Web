import ExpandableCard from '@/components/aceternity/expandable-card-standard';
import ExpandableCard2 from '@/components/aceternity/expandable-card-standard-2';
import { PlaceholdersAndVanish } from '@/components/aceternity/search-bar';
import { IndonesiaMap } from '@/components/tukar/peta';
import React from 'react';

const Detail: React.FC = () => {
  return (
    <div className="bg-whitebg">
        <IndonesiaMap />
        <PlaceholdersAndVanish />
            <div className="mb-7 flex justify-center items-center text-center  text-xl md:text-4xl text-black">
                <h3>Berapa Pakaian yang cocok untukmu</h3>
            </div>
        <div className='flex flex-grow justify-center gap-4'>
        <ExpandableCard />
        <ExpandableCard2 />
        </div>
      </div>
  );
};

export default Detail;