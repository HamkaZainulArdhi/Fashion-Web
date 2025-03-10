"use client"
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/UI/accordion";
import { HeadsetIcon } from "lucide-react";

const FAQAccordion: React.FC = () => {
  return (
    <div id="faq" className=" max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Punya pertanyaan seputar bootcamp
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Apakah pemula dapat mengikuti program ini?
              </AccordionTrigger>
              <AccordionContent>
                Ya, program ini dirancang untuk semua tingkat keahlian, termasuk pemula.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Bagaimana proses pembelajarannya?
              </AccordionTrigger>
              <AccordionContent>
                Pembelajaran terdiri dari materi online, sesi mentoring, dan tugas proyek.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Apakah pembelajaran dilakukan secara online?
              </AccordionTrigger>
              <AccordionContent>
                Ya, semua pembelajaran dilakukan secara online melalui platform kami.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Apakah materi dapat diakses selamanya?
              </AccordionTrigger>
              <AccordionContent>
                Ya, materi dapat diakses kapan saja setelah program selesai.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className=" p-6 rounded-lg text-center bg-blue-100">
        <h3 className="text-xl font-semibold text-primary mb-2">
          Konsultasi Program Gratis
        </h3>
        <p className="text-gray-700 mb-4">
          Apabila kamu memiliki pertanyaan dan ingin berkonsultasi langsung dengan kami jangan ragu untuk menghubungi kami.
        </p>
        <button className="bg-primary text-white px-6 py-3 gap-2 rounded-lg flex items-center justify-center mx-auto">
          <HeadsetIcon /> Konsultasi Sekarang
        </button>
      </div>
    </div>
  );
};

export default FAQAccordion;