import React from "react";

type Decoration = {
  position?: string;
  size?: string;
  opacity?: string;
  zIndex?: string; // Tambahkan zIndex agar tidak menimpa konten lain
};

const Decoration: React.FC<Decoration> = ({
  position = "top-20 right-0",
  size = "w-32 h-32",
  opacity = "opacity-90",
  zIndex = "z-0",
}) => {
  return (
    <img
      src="/images/detail/dekorasi.png"
      alt="Decoration"
      className={`absolute ${position} ${size} ${opacity} ${zIndex} pointer-events-none`}
    />
  );
};

export default Decoration;
