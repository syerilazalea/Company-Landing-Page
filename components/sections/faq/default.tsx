import Link from "next/link";
import { ReactNode } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Section } from "../../ui/section";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "Questions and Answers",
  items = [
    {
      question: "Why does a high-quality website matter for my business?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Your website is often the first impression customers get. A
            professional, responsive, and well-designed site builds trust,
            communicates value, and helps convert visitors into clients.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            We focus on performance, usability, and modern design to ensure your
            business stands out in today’s digital landscape.
          </p>
        </>
      ),
    },
    {
      question: "What makes your AI services different from others?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            We don’t offer one-size-fits-all AI. Our solutions are tailored to
            your business—whether it’s automating workflows, enhancing user
            experiences, or making smarter decisions with data.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            Everything is built with scalability and ethical AI practices in
            mind, using the latest technologies and frameworks.
          </p>
        </>
      ),
    },
    {
      question: "How are your services different from using no-code tools?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            No-code tools can be fast but often come with
            limitations—performance issues, locked-in platforms, and reduced
            flexibility. They may be fine short-term, but they rarely scale
            well.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            We deliver custom-built solutions with full control, optimized code,
            and seamless integration with your existing systems.
          </p>
        </>
      ),
    },
    {
      question: "Do you provide both design and development?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Yes. We take care of both design and development to ensure
            consistency, performance, and a great user experience. From
            wireframes to final deployment—we’ve got you covered.
          </p>
        </>
      ),
    },
    {
      question: "Can you work with our existing team or product?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[580px]">
          Absolutely. We can integrate with your current workflow, extend
          existing products, or provide full development support based on your
          needs.
        </p>
      ),
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Yes, we provide flexible support plans—whether it's updates,
            optimizations, or new feature development. You won’t be left on your
            own once your product is launched.
          </p>
        </>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
