"use client";
import { useState, useRef } from "react";

export default function DraggableItem({
  image,
  size,
  startX,
  startY,
}: {
  image: string;
  size: number;
  startX: number;
  startY: number;
}) {
  const [position, setPosition] = useState({ x: startX, y: startY });
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      className="absolute cursor-pointer select-none"
      style={{
        left: position.x,
        top: position.y,
        width: `${size}px`,
        transition: dragging ? "none" : "transform 0.1s ease-out",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <img src={image} className="w-full" draggable={false} />
    </div>
  );
}
