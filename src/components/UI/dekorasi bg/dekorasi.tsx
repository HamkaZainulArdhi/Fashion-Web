import React from "react";

type DecorationProps = {
  position?: string;
  size?: string;
  opacity?: string;
  zIndex?: string; // Tambahkan zIndex agar tidak menimpa konten lain
};

const Decoration: React.FC<DecorationProps> = ({
  position = "top-10 left-10",
  size = "w-32 h-32",
  opacity = "opacity-50",
  zIndex = "z-0",
}) => {
  return (
    <img
      src="/images/compo.png"
      alt="Decoration"
      className={`absolute ${position} ${size} ${opacity} ${zIndex} pointer-events-none`}
    />
  );
};

export default Decoration;
