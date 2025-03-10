import React from 'react';

const LogoSlider = () => {
  // Logo data - replace with your actual logo URLs
  const logos = [
    { id: 1, url: '/images/logo/logo-1.png'},
    { id: 2, url: '/images/logo/logo-2.png'},
    { id: 3, url: '/images/logo/logo-3.png'},
    { id: 4, url: '/images/logo/logo-4.png'},
    { id: 5, url: '/images/logo/logo-5.png'},
    { id: 6, url: '/images/logo/logo-6.png'},
  ];

  return (
    <div className="w-full mt-7 bg-gradient-to-r from-primary bg-cyan-600/50 py-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-white text-lg md:text-2xl font-semibold text-center mb-6">
          Berkolaborasi Dengan Berbagai Komunitas Peduli Sesama
        </h2>
        
        <div className="relative overflow-hidden bg-cyan-400/60 rounded-lg py-6 px-4">
          <div className="flex  animate-marquee">
            {logos.map((logo) => (
              <div key={logo.id} className="mx-6 flex items-center justify-center">
                <img src={logo.url} alt="logo" className="object-contain" />
              </div>
            ))}
            
            {/* Duplicate logos for seamless looping */}
            {logos.map((logo) => (
              <div key={`dup-${logo.id}`} className="mx-6 w-28 flex items-center justify-center">
                <img src={logo.url} alt="logo" className="max-h-32 max-w-32 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Define the animation in the style tag
const styles = `
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  .animate-marquee {
    animation: marquee 10s linear infinite;
  }
`;

const LogoSliderWithStyles = () => (
  <>
    <style dangerouslySetInnerHTML={{ __html: styles }} />
    <LogoSlider />
  </>
);

export default LogoSliderWithStyles;