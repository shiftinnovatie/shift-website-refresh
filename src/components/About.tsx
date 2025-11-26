import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Users, Lightbulb, Target, Leaf, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Flexibel",
    description: "Geen kantoortijden, wij werken wanneer het u uitkomt",
  },
  {
    icon: TrendingUp,
    title: "Agile",
    description: "We spelen in op verandering",
  },
  {
    icon: Lightbulb,
    title: "Dichtbij de wetenschap",
    description: "Wetenschappelijk onderbouwd",
  },
  {
    icon: Target,
    title: "Maatwerk",
    description: "Altijd op maat, uw maat",
  },
  {
    icon: Users,
    title: "Frisse & kritische blik",
    description: "Jong en innovatief",
  },
  {
    icon: Leaf,
    title: "Lean startup",
    description: "Nieuwste werkwijze",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Over ons</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://cdn.sanity.io/images/mwby6hwm/production/a2e99c31468353fdf8692019f046d35dddc13eb3-3923x2675.jpg"
              alt="About Shift Innovatie"
              className="rounded-2xl shadow-card-hover w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Shift Innovatie is een consultancybedrijf, opgericht en gerund door studenten van de
              studie Natuurwetenschap en innovatiemanagement aan de Universiteit Utrecht. Shift
              bestaat sinds 2010 en is opgericht met als doel om de geleerde theorieën en verkregen
              inzichten nog tijdens de studie in de praktijk te brengen en hiermee ervaring op te doen
              als voorbereiding op een verdere carrière.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Shift Innovatie heeft zich gespecialiseerd in het begeleiden en uitwerken van business
              cases voor zowel product- als organisatie uitdagingen. Hierbij kan gedacht worden aan het
              op de markt brengen van nieuwe producten of processen. De multidisciplinariteit van de
              academische achtergrond en de reeds opgedane ervaring in verscheidene markten zorgen voor
              flexibiliteit en een snelle, overzichtelijke oplevering van informatie.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-card p-6 rounded-xl shadow-card-hover hover:shadow-elegant transition-all duration-300 border border-border group hover:border-primary"
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
