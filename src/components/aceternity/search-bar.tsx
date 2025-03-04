"use client";
import { PlaceholdersAndVanishInput } from "@/components/UI/placeholders-and-vanish-input";

export function PlaceholdersAndVanish() {
const placeholders = [
  "Cari pakaian preloved di dekatmu",
  "Tukar baju lama dengan yang baru!",
  "Cari pakaian dari swap fashion ramah lingkungan",
  "Pakaian yang bisa ditukar untuk acara spesial",
  "Memilih pakaian preloved berkualitas",
];


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-[13rem] flex flex-col justify-center items-center px-4 -mt-20 ">
      <h2 className="mb-7  text-xl md:text-4xl font-semibold text-black">
        Temukan Pakaian yang Cocok untukmu
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
