import { motion, useInView } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FaqItem {
  question: string;
  answer: ReactNode;
}

/**
 * Veelgestelde vragen.
 * Pas hier vragen en antwoorden aan.
 */
const faqs: FaqItem[] = [
  {
    question: "Waarom kiezen voor studenten?",
    answer:
      "Onze consultants brengen de nieuwste academische kennis en een frisse, onafhankelijke blik mee. Omdat we geen belang hebben bij een bepaalde uitkomst, durven we de moeilijke vragen te stellen.",
  },
  {
    question: "Hoe wordt de kwaliteit bewaakt?",
    answer:
      "Elk project wordt uitgevoerd door een team van consultants met verschillende achtergronden. Door samen te werken en tussentijds met u af te stemmen, zorgen we dat het eindresultaat aansluit bij uw vraag.",
  },
  {
    question: "Wat kost een project?",
    answer:
      "Elk project is maatwerk. Na een vrijblijvend kennismakingsgesprek ontvangt u een voorstel met een heldere prijsopgave.",
  },
  {
    question: "Hoe lang duurt een project?",
    answer:
      "Dat hangt af van de omvang van het vraagstuk. In het projectvoorstel staat een duidelijke planning, zodat u vooraf weet waar u aan toe bent.",
  },
  {
    question: "Voor wat voor organisaties werken jullie?",
    answer:
      "Voor startups, gevestigde bedrijven, kennisinstellingen en overheidsorganisaties. Van ReMediZ en PalmSens tot de Unie van Waterschappen en de Universiteit Utrecht.",
  },
  {
    question: "Is een kennismaking vrijblijvend?",
    answer: (
      <>
        Ja. Neem contact op via{" "}
        <a href="mailto:info@shift-innovatie.nl" className="text-primary hover:underline">
          info@shift-innovatie.nl
        </a>
        , dan plannen we een gesprek.
      </>
    ),
  },
];

export const Faq = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((open) =>
      open.includes(index) ? open.filter((i) => i !== index) : [...open, index],
    );
  };

  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Veelgestelde vragen</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Antwoorden op de vragen die we het vaakst horen.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-card rounded-xl border border-border overflow-hidden"
              >
                <Button
                  variant="ghost"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  className="w-full h-auto justify-between p-6 text-left hover:bg-transparent"
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 flex-shrink-0 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 flex-shrink-0 text-primary" />
                  )}
                </Button>

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="px-6 pb-6"
                  >
                    <div className="pt-4 border-t border-border text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
