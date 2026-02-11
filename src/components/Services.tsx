import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Zap, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { clientProjects } from "@/data/clients";
import { strategischServices, energieServices } from "@/data/services";

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedPillar, setExpandedPillar] = useState<string | null>(null);

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
            Onze kracht ligt in het analyseren van complexe vraagstukken en het vertalen ervan naar heldere, onderbouwde adviezen. Dit doen we aan de hand van 2 pijlers:
          </p>
        </motion.div>

        {/* Two Pillars */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Strategisch Bedrijfsadvies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="h-full border-2 hover:border-primary transition-all duration-300 hover:shadow-elegant">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Strategisch Bedrijfsadvies</h3>
                <p className="text-sm text-primary font-medium">Innovatief vooruitdenken: strategieën voor een toekomstbestendige marktpositie.</p>
                <p className="text-muted-foreground leading-relaxed">
                  Specialisme in Strategisch Bedrijfsadvies, waarmee we ondernemers al meer dan een decennia ondersteunen bij businesscases, marktanalyses en groeistrategieën.
                </p>
                <Button
                  variant="ghost"
                  onClick={() => setExpandedPillar(expandedPillar === "strategisch" ? null : "strategisch")}
                  className="w-full justify-between mt-4"
                >
                  {expandedPillar === "strategisch" ? "Verberg expertises" : "Bekijk onze expertises"}
                  {expandedPillar === "strategisch" ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </Button>
                
                {expandedPillar === "strategisch" && (
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
            <Card className="h-full border-2 hover:border-primary transition-all duration-300 hover:shadow-elegant">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Energie en Life-sciences</h3>
                <p className="text-sm text-primary font-medium">Slimme strategieën voor een toekomstbestendige energiehuishouding.</p>
                <p className="text-muted-foreground leading-relaxed">
                  Brede expertise in Energie en Life-sciences, dankzij onze brede opleiding en individuele specialismes kunnen we snel schakelen tussen thema's en sectoren.
                </p>
                <Button
                  variant="ghost"
                  onClick={() => setExpandedPillar(expandedPillar === "energie" ? null : "energie")}
                  className="w-full justify-between mt-4"
                >
                  {expandedPillar === "energie" ? "Verberg expertises" : "Bekijk onze expertises"}
                  {expandedPillar === "energie" ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </Button>
                
                {expandedPillar === "energie" && (
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

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-muted-foreground max-w-2xl mx-auto mb-16"
        >
          Benieuwd of we iets voor uw organisatie kunnen betekenen? Neem gerust contact op, we gaan graag het gesprek aan.
        </motion.p>

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
          <div className="px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
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
                              alt={project.name}
                              className="max-h-20 object-contain"
                            />
                          ) : (
                            <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
                              <span className="text-muted-foreground text-xs text-center px-2">Logo volgt</span>
                            </div>
                          )}
                        </div>
                        <h4 className="font-bold text-lg mb-2 text-center">{project.name}</h4>
                        <p className="text-sm text-muted-foreground flex-grow text-justify">{project.description}</p>
                        {project.year && (
                          <p className="text-xs text-primary font-medium mt-4">
                            Uitgevoerd: {project.year}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
