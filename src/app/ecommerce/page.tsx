
import OutfitBuilder from '@/components/drag/konten-drag';
import ProductCatalog from '@/components/ecommerce/katalog';
import type { NextPage } from 'next';
import { Metadata } from "next";

export const metadata: Metadata = {
 title: "SustainShop Page | SustainStyles",
  description: "sustainables fashion",
  // other metadata
};
const Home: NextPage = () => {
  return (
    <div>

      <main className='bg-whitebg '>
        <OutfitBuilder />
        <ProductCatalog />
      </main>
    </div>
  );
};

export default Home;