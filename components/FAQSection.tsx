"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { marketingFaqs } from "@/lib/marketing-faqs";

export default function FAQSection() {
  return (
    <section id="sss" className="py-24 bg-[#F8FAFC] relative scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-4 tracking-tight">Sıkça sorulan sorular</h2>
          <p className="text-[#64748B] leading-relaxed">Merak ettiklerinizin kısa cevapları.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-2">
            {marketingFaqs.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-[#E2E8F0] bg-white px-4 data-[state=open]:border-[#15803D]/35 data-[state=open]:shadow-md shadow-[0_1px_3px_rgba(15,23,42,0.06)]"
              >
                <AccordionTrigger className="text-left text-[#0F172A] hover:text-[#15803D] py-5 hover:no-underline [&[data-state=open]]:text-[#15803D]">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#64748B] pb-5 pr-8 leading-relaxed">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
