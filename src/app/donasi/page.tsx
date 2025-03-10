import DonationArticle from "@/components/donasi/artikel";
import BannerFooter from "@/components/donasi/benner-footer";
import Header from "@/components/donasi/header";
import KatalogDonasi from "@/components/donasi/katalog-donasi";
import LogoSlider from "@/components/donasi/logo-slider";

// Page metadata
const pageMetadata = {
  title: 'Donasi Pakaianmu | SustainStyle',
  description: 'Bergabunglah dalam program Ramadhan bersama kami Salurkan donasi Anda untuk membantu mereka yang membutuhkan selama bulan suci Ramadhan 1446H.',

};

const DonasiPage: React.FC = () => {
  return (
      <div className="min-h-screen py-8 bg-whitebg">
        <Header />
        <LogoSlider />
        <main>
          <KatalogDonasi />
          <DonationArticle />
        </main>
        <footer>
          <BannerFooter />
        </footer>
      </div>
  );
};

export default DonasiPage;