import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Zap, ChevronDown, ChevronUp } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { clientProjects } from "@/data/clients";
import { strategischServices, energieServices } from "@/data/services";

const werkwijze = [
  {
    title: "Kennismaking",
    description: "In een vrijblijvend gesprek bespreken we uw vraagstuk, doelen en context.",
  },
  {
    title: "Voorstel",
    description: "U ontvangt een projectvoorstel op maat, met aanpak, planning en kosten.",
  },
  {
    title: "Onderzoek",
    description: "Ons team gaat aan de slag. Tussentijds houden we contact, zodat u weet waar we staan.",
  },
  {
    title: "Advies",
    description: "U ontvangt heldere resultaten en concrete aanbevelingen, toegelicht in een eindpresentatie.",
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [strategischOpen, setStrategischOpen] = useState(false);
  const [energieOpen, setEnergieOpen] = useState(false);

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Diensten</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Onze kracht ligt in het analyseren van complexe vraagstukken en het vertalen ervan naar heldere, onderbouwde adviezen. Dit doen we aan de hand van 2 pijlers waar onze achtergrond en ervaring het sterkst is:
          </p>
        </motion.div>

        {/* Two Pillars */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-start">
          {/* Strategisch Bedrijfsadvies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-elegant">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Strategisch Bedrijfsadvies</h3>
                <p className="text-sm text-primary font-medium">Innovatief vooruitdenken: strategieën voor een toekomstbestendige marktpositie.</p>
                <p className="text-muted-foreground leading-relaxed">
                  Al meer dan tien jaar ondersteunen we ondernemers met strategisch bedrijfsadvies: van businesscases en marktanalyses tot groeistrategieën.
                </p>
                <Button
                  variant="ghost"
                  onClick={() => setStrategischOpen((open) => !open)}
                  className="w-full justify-between mt-4"
                >
                  {strategischOpen ? "Verberg expertises" : "Bekijk onze expertises"}
                  {strategischOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </Button>
                
                {strategischOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-4 pt-4 border-t border-border"
                  >
                    {strategischServices.map((service) => (
                      <div key={service.title} className="flex gap-4 p-4 bg-muted/50 rounded-lg">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <service.icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{service.title}</h4>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Energie en Life-sciences */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-elegant">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Energie en Life Sciences</h3>
                <p className="text-sm text-primary font-medium">Slimme strategieën voor een duurzame energietoekomst en innovatieve zorg.</p>
                <p className="text-muted-foreground leading-relaxed">
                  Dankzij onze brede bètaopleiding en individuele specialismen schakelen we snel tussen thema's en sectoren, van netcongestie tot medische technologie.
                </p>
                <Button
                  variant="ghost"
                  onClick={() => setEnergieOpen((open) => !open)}
                  className="w-full justify-between mt-4"
                >
                  {energieOpen ? "Verberg expertises" : "Bekijk onze expertises"}
                  {energieOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </Button>
                
                {energieOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-4 pt-4 border-t border-border"
                  >
                    {energieServices.map((service) => (
                      <div key={service.title} className="flex gap-4 p-4 bg-muted/50 rounded-lg">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <service.icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{service.title}</h4>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Onze werkwijze */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-24 mb-12"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Onze werkwijze</h3>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Van eerste gesprek tot concreet advies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {werkwijze.map((stap, index) => (
            <motion.div
              key={stap.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 + index * 0.1 }}
              className="bg-card p-6 rounded-xl shadow-card-hover hover:shadow-elegant transition-all duration-300 border border-border group hover:border-primary text-center flex flex-col items-center"
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-primary-foreground font-bold text-xl">{index + 1}</span>
              </div>
              <h4 className="text-xl font-bold mb-2">{stap.title}</h4>
              <p className="text-muted-foreground">{stap.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-muted-foreground max-w-2xl mx-auto mb-16"
        >
          Benieuwd of we iets voor uw organisatie kunnen betekenen? Neem gerust contact op, we gaan graag het gesprek aan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-primary text-primary-foreground font-semibold rounded-lg shadow-elegant hover:opacity-90 transition-opacity"
          >
            Neem contact op
          </a>
        </motion.div>

        {/* Klanten sectie */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-hero p-8 md:p-12 rounded-2xl border border-primary/20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Klanten die u voorgingen
          </h3>
          <p className="text-center text-muted-foreground mb-8">
            Een kleine greep uit de bedrijven die wij hebben mogen helpen met hun
            innovatievraagstukken in de afgelopen tijd!
          </p>
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full min-w-0 flex-1"
            >
              <CarouselContent className="-ml-4">
                {clientProjects.map((project) => (
                  <CarouselItem key={project.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full bg-background/80 backdrop-blur border-primary/10 hover:border-primary/30 transition-all">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="h-24 flex items-center justify-center mb-4">
                          {project.logo ? (
                            <img
                              src={project.logo}
                              alt={`Logo ${project.name}`}
                              className="max-h-20 object-contain"
                            />
                          ) : (
                            <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
                              <span className="text-muted-foreground text-xs text-center px-2">Logo volgt</span>
                            </div>
                          )}
                        </div>
                        <h4 className="font-bold text-lg mb-2 text-center">{project.name}</h4>
                        <p className="text-sm text-muted-foreground flex-grow text-justify [hyphens:auto]">{project.description}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="flex justify-center gap-3 md:flex-col md:justify-center">
              <CarouselPrevious className="static translate-y-0" aria-label="Vorige klant" />
              <CarouselNext className="static translate-y-0" aria-label="Volgende klant" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
