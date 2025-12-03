import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Users, Lightbulb, Target, BookOpen } from "lucide-react";

const competencies = [
  {
    icon: Zap,
    title: "Snel",
    description: "We passen ons snel aan verschillende vraagstukken, sectoren en klantbehoeften aan. Ook buiten kantoortijden.",
  },
  {
    icon: Target,
    title: "Flexibel Maatwerk",
    description: "Geen standaardoplossingen – elk project is afgestemd op de specifieke context en doelstelling.",
  },
  {
    icon: Users,
    title: "Frisse & Kritische blik",
    description: "We combineren jonge denkkracht met analytisch vermogen en durven bestaande aannames uit te dagen.",
  },
  {
    icon: BookOpen,
    title: "Leergierig",
    description: "Brede gedeelde interesse om de brug te slaan tussen organisatie en student en hier wederkerig van te leren.",
  },
  {
    icon: Lightbulb,
    title: "Dichtbij de wetenschap",
    description: "We werken vanuit de nieuwste academische inzichten en methodes, met een sterke link naar onderzoek en innovatie.",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Competenties sectie */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Competenties</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {competencies.map((competency, index) => (
            <motion.div
              key={competency.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl shadow-card-hover hover:shadow-elegant transition-all duration-300 border border-border group hover:border-primary"
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <competency.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">{competency.title}</h3>
              <p className="text-muted-foreground">{competency.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Over ons sectie */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Over ons</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img
              src="https://cdn.sanity.io/images/mwby6hwm/production/a2e99c31468353fdf8692019f046d35dddc13eb3-3923x2675.jpg"
              alt="Over Shift Innovatie"
              className="rounded-2xl shadow-card-hover w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Wij zijn een team van jonge adviseurs met een gedeelde achtergrond: we zijn allemaal opgeleid binnen de studie Natuurwetenschap en Innovatiemanagement aan de Universiteit Utrecht. Daarbij zijn wij opgeleid tot het doen van strategisch en toegepast onderzoek in uiteenlopende domeinen, van energie en transport tot life sciences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Shift bestaat sinds 2010 en is opgericht met als doel om de geleerde theorieën en verkregen inzichten nog tijdens de studie in de praktijk te brengen en hiermee ervaring op te doen als voorbereiding op een verdere carrière.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
