"use client";
import { useState, useEffect } from "react";
import DraggableItem from "@/components/drag/drag";

const outfits = [
  { src: "/images/video/rok-1.png", size: 105, x: 120, y: 120 },  // Rok pink
  { src: "/images/video/rok-2.png", size: 100, x: 280, y: 120 },  // Rok biru
  { src: "/images/video/celana-1.png", size: 88, x: 80, y: 380 }, // Celana pink
  { src: "/images/video/celana-2.png", size: 88, x: 230, y: 380 }, // Celana krem
  { src: "/images/video/celana-3.png", size: 88, x: 380, y: 380 }, // Celana putih bermotif hijau
  { src: "/images/video/baju-1.png", size: 120, x: 800, y: 380 },  // Tank top bermotif mata
  { src: "/images/video/baju-2.png", size: 96, x: 1020, y: 120 },   // Tank top biru
  { src: "/images/video/baju-3.png", size: 77, x: 810, y: 120 },   // Crop top panjang motif
  { src: "/images/video/baju-4.png", size: 120, x: 1020, y: 380 },  // Dress motif religius
  { src: "/images/video/sepatu.png", size: 56, x: 830, y: 500 },   // Sepatu
];



export default function OutfitBuilder() {
  const [shadowPos, setShadowPos] = useState({ x: 0, y: 0 });
  const [targetShadow, setTargetShadow] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const smoothMove = () => {
      setShadowPos((prev) => ({
        x: prev.x + (targetShadow.x - prev.x) * 0.1,
        y: prev.y + (targetShadow.y - prev.y) * 0.1,
      }));
      requestAnimationFrame(smoothMove);
    };
    smoothMove();
  }, [targetShadow]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const offsetX = (e.clientX - window.innerWidth / 2) * 0.05;
    const offsetY = (e.clientY - window.innerHeight / 2) * 0.05;
    setTargetShadow({ x: offsetX, y: offsetY });
  };

  return (
    <div className="relative h-screen w-screen bg-blue-500 overflow-hidden" onMouseMove={handleMouseMove}>
      <img
        src="/images/video/model.png"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40"
        style={{
          filter: `drop-shadow(${shadowPos.x}px ${shadowPos.y}px 10px rgba(255, 255, 255, 0.7))`,
        }}
      />

      {outfits.map((item, index) => (
        <DraggableItem key={index} image={item.src} size={item.size} startX={item.x} startY={item.y} />
      ))}
    </div>
  );
}
