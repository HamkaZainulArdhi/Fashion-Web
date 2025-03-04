import React from 'react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title }) => {
  return (
    <div className="bg-primary text-white rounded-lg p-6 flex items-start gap-4">
      <div className="rounded-full bg-blue-400 p-2 flex-shrink-0">
        {icon}
      </div>
      <p className="font-medium">{title}</p>
    </div>
  );
};
export default BenefitCard;