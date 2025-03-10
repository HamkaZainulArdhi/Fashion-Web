"use client";
import { TypewriterEffectSmooth } from "@/components/UI/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Pilih",
    },
    {
      text: "dan",
    },
    {
      text: "Sesuikan",
    },
    {
      text: "Outfit Mu",
    },
    // {
    //   text: "SustainaStyle",
    //   className: "text-teal-500 dark:text-teal-500",
    //   //bg-gradient-to-r from-[#3B82F6] via-[#22C55E] to-[#008080]
    // },
  ];
  return (
    <div className=" hidden md:flex flex-col  items-center justify-center   ">
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row -mt-6 space-x-0 md:space-x-4">
          <p className="text-gray-600 text-center">
          Drag and drop outfitmu ke model ini
        </p>
      </div>
    </div>
  );
}
