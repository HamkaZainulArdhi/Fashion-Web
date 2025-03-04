import ExpandableCard from '@/components/aceternity/expandable-card-standard';
import { PlaceholdersAndVanish } from '@/components/aceternity/search-bar';
import { IndonesiaMap } from '@/components/tukar/peta';
import React from 'react';

const Detail: React.FC = () => {
  return (
    <div className="bg-whitebg">
        <IndonesiaMap />
        <PlaceholdersAndVanish />
        <ExpandableCard />
        
      </div>
  );
};

export default Detail;