"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/UI/animated-tooltip";

const people = [
  { id: 1, name: "John Doe", designation: "Software Engineer", image: "/images/hero/baju.png", position: "top-10 left-4/3 transform -translate-x-1/2 sm:-top-4" },
  { id: 2, name: "Robert Johnson", designation: "Product Manager", image: "/images/hero/baju.png", position: "top-24 left-32 sm:top-40 sm:left-64" },
  { id: 3, name: "Jane Smith", designation: "Data Scientist", image: "/images/hero/baju.png", position: "top-40 right-10 sm:top-60 sm:right-20" },
  { id: 4, name: "Tyler Durden", designation: "Soap Developer", image: "/images/hero/baju.png", position: "bottom-20 right-20 sm:bottom-32 sm:right-60" },
];

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
