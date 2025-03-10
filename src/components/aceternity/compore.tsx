import React from "react";
import { Compare } from "@/components/UI/compore";

export function CompareDemo() {
  return (
    <div className="p-4 rounded-3xl md:w-[530px] bg-blue-100  border-neutral-200 px-4">
      <Compare
        firstImage="images/eco/ecosa.jpg"
        secondImage="images/eco/model.jpg"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="w-full md:h-[500px] md:w-[500px]"
        slideMode="hover"
      />
    </div>
  );
}
