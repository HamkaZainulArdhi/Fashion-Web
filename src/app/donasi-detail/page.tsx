import DonationCampaign from "@/components/donasi/detail";



// Page metadata
const pageMetadata = {
  title: 'Donasi Pakaianmu | SustainStyle',
  description: 'Bergabunglah dalam program Ramadhan bersama kami Salurkan donasi Anda untuk membantu mereka yang membutuhkan selama bulan suci Ramadhan 1446H.',

};

const detaildonasi: React.FC = () => {
  return (
      <div className="min-h-screen py-8 bg-whitebg">
        <DonationCampaign />
      </div>
  );
};

export default detaildonasi;