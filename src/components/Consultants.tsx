import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Mail, Phone, Linkedin } from "lucide-react";
import { consultants, advisors, type ConsultantInfo } from "@/data/consultants";

const ConsultantCard = ({
  consultant,
  index,
  isInView,
  delay = 0,
  accentColor = "primary",
  roleLabel = "consultant",
}: {
  consultant: ConsultantInfo;
  index: number;
  isInView: boolean;
  delay?: number;
  accentColor?: "primary" | "secondary";
  roleLabel?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasInfo = true;

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
              alt={`${consultant.name}, ${roleLabel} bij Shift Innovatie`}
              className="w-full h-full object-cover"
              style={{ objectPosition: consultant.imagePosition, transform: consultant.imageScale ? `scale(${consultant.imageScale})` : undefined }}
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
        <div className="flex items-center justify-center gap-2 mt-4">
          <h3 className="text-lg font-bold text-center">{consultant.name}</h3>
          {consultant.linkedin && (
            <a
              href={consultant.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn-profiel van ${consultant.name}`}
              className="w-6 h-6 rounded-full bg-linkedin flex items-center justify-center flex-shrink-0 hover:opacity-80 transition-opacity"
            >
              <Linkedin className="w-3.5 h-3.5 text-linkedin-foreground" />
            </a>
          )}
        </div>
        {consultant.study && (
          <p className="text-sm text-muted-foreground text-center">{consultant.study}</p>
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
                    alt={`${consultant.name}, ${roleLabel} bij Shift Innovatie`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-center gap-2">
                  <DialogTitle className="text-xl">{consultant.name}</DialogTitle>
                  {consultant.linkedin && (
                    <a
                      href={consultant.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn-profiel van ${consultant.name}`}
                      className="w-6 h-6 rounded-full bg-linkedin flex items-center justify-center flex-shrink-0 hover:opacity-80 transition-opacity"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-linkedin-foreground" />
                    </a>
                  )}
                </div>
                {consultant.study && (
                  <p className="text-sm text-muted-foreground">{consultant.study}</p>
                )}
              </div>
            </DialogHeader>
            <div className="space-y-4">
              {consultant.description && (
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {consultant.description}
                </p>
              )}
              {(consultant.email || consultant.phone) && (
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
              )}
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

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-10 md:gap-x-12 mb-24 max-w-5xl mx-auto">
          {consultants.map((consultant, index) => (
            <div key={consultant.name} className="w-[calc(50%-1rem)] md:w-[calc(25%-2.25rem)]">
              <ConsultantCard consultant={consultant} index={index} isInView={isInView} />
            </div>
          ))}
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
            Onze consultants worden ondersteund door de Board of Advisors. Dit orgaan bestaat uit
            ervaren ondernemers die eerder werkzaam zijn geweest bij Shift Innovatie. Jaarlijks komen
            we samen om kennis te delen en ons netwerk te versterken.
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
                roleLabel="adviseur"
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
                roleLabel="adviseur"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
