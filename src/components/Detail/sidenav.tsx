"use client";
import React, { useEffect, useState } from "react";

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: "tentang", label: "Tentang Bootcamp" },
  { id: "benefit", label: "Benefit" },
  { id: "mentor", label: "Mentor" },
  { id: "kurikulum", label: "Kurikulum" },
  { id: "biaya", label: "Biaya" },
  { id: "faq", label: "FAQ" },
];

const SideNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("tentang");

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = navItems.map((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          return {
            id: item.id,
            offset: section.getBoundingClientRect().top - 120, // Sesuaikan offset agar lebih smooth
          };
        }
        return null;
      }).filter(Boolean) as { id: string; offset: number }[];

      const nearestSection = sectionOffsets.find((section) => section.offset >= 0);
      if (nearestSection) {
        setActiveSection(nearestSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100, // Sesuaikan agar tidak tertutup header
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky top-24 px-4 py-4 bg-white rounded-lg shadow-md w-64 h-auto max-h-[60vh] overflow-y-auto hidden lg:block">
      <h3 className="font-semibold text-lg mb-4">Navigasi</h3>
      <nav>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={`w-full text-left block px-4 py-2 rounded-md transition-all duration-200 ${
                  activeSection === item.id
                    ? "bg-primary text-white font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
