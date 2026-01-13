import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Mail, Phone } from "lucide-react";

interface ConsultantInfo {
  name: string;
  image: string;
  study?: string;
  description?: string;
  email?: string;
  phone?: string;
}

const consultants: ConsultantInfo[] = [
  {
    name: "Jeroen Bos",
    image:
      "https://cdn.sanity.io/images/mwby6hwm/production/1490bfda1764f7681dbde1e40074b6747d738674-5208x3476.jpg?rect=866,0,3476,3476&w=512&h=512",
  },
  {
    name: "Marijn Valk",
    image:
      "https://cdn.sanity.io/images/mwby6hwm/production/f618e016c6178a8fd67220a5c95af92f4398c92d-804x804.jpg?w=512&h=512",
  },
  {
    name: "Tycho Sangers",
    image:
      "https://cdn.sanity.io/images/mwby6hwm/production/b550804eb359d56cec8d1e919d62ce56d1037a7c-5198x3462.png?rect=868,0,3462,3462&w=512&h=512",
    study: "Energy Science",
    description:
      "Tycho heeft zijn bachelor Natuurwetenschap & Innovatiemanagement afgerond en studeert nu de Master Energy Science. Zijn hoofdinteresse ligt bij het optimaliseren van de energietransitie, maar hij heeft een brede interesse in verschillende disciplines, zoals Innovatie, Duurzaamheid en Beleid.",
    email: "t.sangers@shift-innovatie.nl",
    phone: "06-22251850",
  },
  {
    name: "Fabian Tobben",
    image:
      "https://cdn.sanity.io/images/mwby6hwm/production/76e1d7bf341290d1b91526ee0bccf2a6839eba0a-4497x3456.jpg?rect=521,0,3456,3456&w=512&h=512",
  },
  {
    name: "Guust Bartels",
    image:
      "https://cdn.sanity.io/images/mwby6hwm/production/8a0b9a92d0147d4ea5ef0c265f56b472f5b289d6-834x1166.jpg?rect=0,166,834,834&w=512&h=512",
  },
  {
    name: "Philip Smids",
    image:
      "https://cdn.sanity.io/images/mwby6hwm/production/52c95902aad935c69957e4dee6248f4f798f2f62-1568x2088.jpg?rect=0,260,1568,1568&w=512&h=512",
  },
];

const advisors: ConsultantInfo[] = [
  {
    name: "Paul Tuinenberg",
    image:
      "https://cdn.sanity.io/images/mwby6hwm/production/07a3cfd224303d98ffbf34d6c55babc10dce5adb-286x286.jpg?w=512&h=512",
  },
  {
    name: "Thomas van de Voort",
    image:
      "https://cdn.sanity.io/images/mwby6hwm/production/4d1a4d679713285da8010653648da1fbca2fc48c-800x800.jpg?w=512&h=512",
  },
  {
    name: "Oskar Meijerink",
    image:
      "https://cdn.sanity.io/images/mwby6hwm/production/387b61befb8613494e035df1be9bb3ee169bc7da-800x800.jpg?w=512&h=512",
  },
  {
    name: "Thijs van Hasselt",
    image:
      "https://cdn.sanity.io/images/mwby6hwm/production/2c4b624cecdd36a5a1a42c5f7848b73df2ba5ab6-800x800.jpg?w=512&h=512",
  },
  {
    name: "Jan-Willem Potse",
    image:
      "https://cdn.sanity.io/images/mwby6hwm/production/8e12eb2a26bf40071cca1ad4abeb570e62fda7d1-775x775.jpg?w=512&h=512",
  },
  {
    name: "Stijn Maatman",
    image:
      "https://cdn.sanity.io/images/mwby6hwm/production/9927ac5832090817ccb56bb15ff2f4f63c62d9e6-800x800.jpg?w=512&h=512",
  },
];

const ConsultantCard = ({
  consultant,
  index,
  isInView,
  delay = 0,
  accentColor = "primary",
}: {
  consultant: ConsultantInfo;
  index: number;
  isInView: boolean;
  delay?: number;
  accentColor?: "primary" | "secondary";
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasInfo = consultant.description;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: delay + index * 0.1 }}
        className="flex flex-col items-center"
      >
        <div
          onClick={() => hasInfo && setIsOpen(true)}
          className={`relative group ${hasInfo ? "cursor-pointer" : ""}`}
        >
          <div
            className={`w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 transition-all duration-300 ${
              accentColor === "primary"
                ? "border-primary/20 group-hover:border-primary"
                : "border-secondary/20 group-hover:border-secondary"
            } ${hasInfo ? "group-hover:scale-105" : ""}`}
          >
            <img
              src={consultant.image}
              alt={consultant.name}
              className="w-full h-full object-cover"
            />
          </div>
          {hasInfo && (
            <div className="absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-medium px-3 py-1 bg-primary rounded-full">
                Klik voor meer info
              </span>
            </div>
          )}
        </div>
        <h3 className="text-lg font-bold mt-4 text-center">{consultant.name}</h3>
        {consultant.study && (
          <p className="text-sm text-muted-foreground">{consultant.study}</p>
        )}
      </motion.div>

      {hasInfo && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary mb-4">
                  <img
                    src={consultant.image}
                    alt={consultant.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <DialogTitle className="text-xl">{consultant.name}</DialogTitle>
                {consultant.study && (
                  <p className="text-sm text-muted-foreground">{consultant.study}</p>
                )}
              </div>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {consultant.description}
              </p>
              <div className="flex flex-col gap-2 pt-4 border-t">
                {consultant.email && (
                  <a
                    href={`mailto:${consultant.email}`}
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    {consultant.email}
                  </a>
                )}
                {consultant.phone && (
                  <a
                    href={`tel:${consultant.phone}`}
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    {consultant.phone}
                  </a>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export const Consultants = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const consultantsRow1 = consultants.slice(0, 4);
  const consultantsRow2 = consultants.slice(4, 6);
  const advisorsRow1 = advisors.slice(0, 4);
  const advisorsRow2 = advisors.slice(4, 6);

  return (
    <section id="consultants" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Consultants</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
        </motion.div>

        <div className="flex flex-col items-center gap-8 mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {consultantsRow1.map((consultant, index) => (
              <ConsultantCard
                key={consultant.name}
                consultant={consultant}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-8 md:gap-12">
            {consultantsRow2.map((consultant, index) => (
              <ConsultantCard
                key={consultant.name}
                consultant={consultant}
                index={index}
                isInView={isInView}
                delay={0.4}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Board of Advisors</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Onze consultants worden ondersteund door de 'Board of Advisors'. Dit orgaan bestaat uit
            ervaren ondernemers die werkzaam zijn geweest bij Shift Innovatie. Het doel van de Board
            of Advisors is het delen van kennis en netwerken, en het bewerkstelligen van een
            kwaliteitsgarantie binnen Shift Innovatie.
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {advisorsRow1.map((advisor, index) => (
              <ConsultantCard
                key={advisor.name}
                consultant={advisor}
                index={index}
                isInView={isInView}
                delay={1}
                accentColor="secondary"
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-8 md:gap-12">
            {advisorsRow2.map((advisor, index) => (
              <ConsultantCard
                key={advisor.name}
                consultant={advisor}
                index={index}
                isInView={isInView}
                delay={1.4}
                accentColor="secondary"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
