"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Do I need coding skills to us Receptify?",
    answer:
      "No! Our platform is designed to be user-friendly. You can set up your AI receptionist by simply typing instructions and uploading documents.",
  },
  {
    question: "How much does it cost?",
    answer:
      "We offer a free trial plan to get you started. Our Pro plan starts at $10/month and includes more features and call minutes.",
  },
  {
    question: "Can I use my own number?",
    answer:
      "Yes, you can bring your own Twilio number or purchase one directly through our dashboard.",
  },
  {
    question: "What languages does it support?",
    answer:
      "Currently, we specialize in English and Urdu, with seamless switching between the two during conversations.",
  },
  {
    question: "Can I customize the voice?",
    answer:
      "Absolutely! We integrate with ElevenLabs to provide a wide range of high-quality, realistic voices.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-8 mx-auto md:min-w-[800px] md:max-w-[800px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions? We're here to help.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left cursor-pointer ">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="flex-wrap">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
