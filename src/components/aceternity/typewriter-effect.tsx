"use client";
import { TypewriterEffectSmooth } from "@/components/UI/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Fitur",
    },
    {
      text: "&",
    },
    {
      text: "Menu",
    },
    {
      text: "SustainaStyle",
      className: "text-teal-500 dark:text-teal-500",
      //bg-gradient-to-r from-[#3B82F6] via-[#22C55E] to-[#008080]
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center   ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <p className="text-gray-600 text-center">
          Kami menyediakan fitur praktis untuk meningkatkan produktivitasmu di bidang Sustainable Fashion.
        </p>
      </div>
    </div>
  );
}
