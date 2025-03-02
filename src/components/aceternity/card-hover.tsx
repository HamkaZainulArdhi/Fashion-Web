import { HoverEffect } from "@/components/UI/card-hover-effect";

export function CardHoverEffect() {
  return (
    <div className="max-w-1xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Desain kreatif berprinsip ramah lingkungan.",
    link: "#",
    image: "/images/hero/gantungan (2).png",
  },
  {
    title: "Bangun koneksi fashion melalui kelas interaktif.",
    link: "#",
    image: "/images/hero/video.png",
  },
  {
    title: "Kuasai tren dan teknik sustainable fashion.",
    link: "#",
    image: "/images/hero/pencil.png",
  },
  {
    title: "Telah banyak terpercaya di industri fashion .",
    link: "#",
    image: "/images/hero/layar.png",
  },
  {
    title: "Mari ciptakan brand etis ramah lingkungan.",
    link: "#",
    image: "/images/hero/thrift-shop.png",
  },
];
