"use client"
import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/UI/accordion"


const FAQAccordion: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6" >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Pertanyaan yang Sering Diajukan</h2>
        <p className="text-gray-600 mb-4">
          Dapatkan jawaban yang Anda butuhkan untuk menavigasi platform kami dengan percaya diri
        </p>
      </div>
        
        <div className="md:w-3/5 my-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Apakah pembelajaran dilakukan secara online?</AccordionTrigger>
              <AccordionContent>
                Ya, semua pembelajaran dilakukan secara online melalui platform kami. Anda dapat mengakses materi dari mana saja dan kapan saja.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Bagaimana proses pembelajarannya?</AccordionTrigger>
              <AccordionContent>
                Proses pembelajaran terdiri dari video pembelajaran, materi bacaan, kuis interaktif, dan proyek praktik. Setiap modul dirancang untuk memberikan pemahaman komprehensif.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Apakah materi pembelajaran dapat diunduh?</AccordionTrigger>
              <AccordionContent>
                Ya, sebagian besar materi pembelajaran dapat diunduh untuk dipelajari secara offline. Video dan dokumen PDF tersedia untuk diunduh melalui platform kami.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Bagaimana jika saya mengalami kesulitan selama proses pembelajaran?</AccordionTrigger>
              <AccordionContent>
                Kami menyediakan forum diskusi dan layanan bantuan yang dapat diakses 24/7. Anda juga dapat menghubungi mentor untuk mendapatkan bantuan lebih lanjut.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Apakah ada sesi tatap muka online dengan mentor?</AccordionTrigger>
              <AccordionContent>
                Ya, kami menyelenggarakan sesi tatap muka online mingguan dengan mentor. Anda dapat mengajukan pertanyaan dan mendiskusikan materi secara langsung.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
    </div>
  )
}

export default FAQAccordion;