"use client";
import { useEffect } from "react";
import { CardHoverEffect } from "../aceternity/card-hover";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatedTooltipPreview } from "../aceternity/animated-tooltip";

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      once: false, // Animasi hanya berjalan sekali
    });
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[10px] xl:pt-[180px] 2xl:pb-[100px] 2xl:pt-[210px]"
      >
        <div className="container ">
          <div className="-mx-4 flex flex-wrap ">
            <div className="w-full md:-mt-24 -mt-32 md:max-h-screen  ">
              <div className="bg-gradient-to-b from-blue-100 to-teal-100  rounded-b-3xl w-full h-[500px]">
                <img src="/images/hero/baju.png" alt="" data-aos="flip-left" className="mx-auto pt-20 md:pt-0 " />

                <div className="absolute inset-0 flex items-center justify-center">
                  <AnimatedTooltipPreview />
                </div>
              </div>
              <div className="mx-auto -mt-32 text-center  ">
                <div className="font-bold">
                  <h1 className="relative md:top-8 text-[#262626] font-sans">
                    SustainaStyle Elearning fashion Designer <span className="bg-gradient-to-l from-primary to-teal-600  text-white px-1">Pertama Di Indonesia</span> 
                  </h1>
                </div>
                <CardHoverEffect />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
