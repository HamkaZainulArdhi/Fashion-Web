import React from "react";
import { Cover } from "@/components/UI/cover";

export function Covertext() {
  return (
    <div>
      <h1 className="text-2xl md:text-xl lg:text-4xl font-semibold max-w-7xl mx-auto text-center  relative z-20 py-6 bg-clip-text">
        Fitur & Menu <Cover><span className="hover:text-white bg-gradient-to-r from-primary to-teal-400 text-transparent bg-clip-text font-extrabold">SustainaStyle</span></Cover>
      </h1>
    </div>
  );
}
