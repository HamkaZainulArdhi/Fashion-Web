"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/UI/animated-tooltip";

const people = [
  { id: 1, name: "100% Bahan Alami", designation: "Belajar Dengan Bahan Ramah Lingkungan", image: "/images/hero/eye.png", position: "top-20 left-1/3 sm:top-24 sm:left-1/2 md:top-28 md:left-[24rem] lg:top-20 lg:left-[32rem]" },
  { id: 2, name: "Fashion Kekinian", designation: "Dengan Pemanfaatan Tekstil Hijau ", image: "/images/hero/eye.png", position: "bottom-40 left-3 sm:bottom-36 sm:left-8 md:bottom-44 md:left-[16rem] lg:bottom-48 lg:left-[20rem]" },
  { id: 3, name: "Menjadi Fashion Designer", designation: "Yang Peduli Akan Lingkungan", image: "/images/hero/eye.png", position: "top-36 right-16 sm:top-40 sm:right-10 md:top-44 md:right-[20rem] lg:top-52 lg:right-[24rem]" },
  { id: 4, name: "Styel Sustainable", designation: "Mencintai Lingkungan Dengan Fashion", image: "/images/hero/eye.png", position: "bottom-28 right-15 sm:bottom-32 sm:right-12 md:bottom-32 md:right-[28rem] lg:bottom-28 lg:right-[36rem]" }
];


//cek cek aja
export function AnimatedTooltipPreview() {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] flex items-center justify-center">
      {people.map((person) => (
        <div
          key={person.id}
          className={`absolute ${person.position} transform scale-75 sm:scale-100`}
        >
          <AnimatedTooltip items={[person]} />
        </div>
      ))}
    </div>
  );
}
