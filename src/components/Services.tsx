import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Zap, ChevronDown, ChevronUp, FileText, BarChart3, Database, Battery, Leaf, Search, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const clientProjects = [
  {
    name: "ReMediZ",
    logo: "https://cdn.sanity.io/images/mwby6hwm/production/40809a42347474b47973d0b16ca21b071960456e-200x200.jpg",
    description: "Shift innovatie heeft voor ReMediZ een marktonderzoek gedaan voor uitbreidingsmogelijkheden in Europa. Hierbij is gebruikt gemaakt van een multicriteria-analyse om te bepalen welke aan welke criteria een nieuwe markt moet voldoen. Uiteindelijk is er een advies voor uitbreidingsmogelijkheden opgesteld inclusief contactgegevens om de juiste partijen te benaderen.",
    year: "2023",
  },
  {
    name: "Unie van Waterschappen",
    logo: "https://cdn.sanity.io/images/mwby6hwm/production/4e23a50b295fca1fe92cddab3d3a8c619ea22fc8-1300x500.png",
    description: "Shift Innovatie onderzoek gedaan naar het gebruik van scenario's in de waterschappen. In dit tweedelige onderzoek hebben wij onderzocht hoe de inhoud van de scenario's van waterschappen verschillen en hoe ze worden gebruikt. Aan de hand van dit onderzoek is een leergang opgezet vanuit de Unie van Waterschappen om de waterschappen beter te ondersteunen in het gebruik van scenario's.",
    year: "2021",
  },
  {
    name: "UU-DAB",
    logo: "https://cdn.sanity.io/images/mwby6hwm/production/cb49729f883a2ae41f071d6761b65a6e8d10f604-500x240.png",
    description: "Shift-Innovatie heeft, in opdracht van de Universiteit Utrecht, een marktanalyse uitgevoerd voor een taalontwikkelingstoornis- en een werkgeheugentest ontwikkeld door Utrecht University Developmental Assessment Battery. Met behulp van interviews is de interesse van verschillende partijen op de markt geanalyseerd en als afsluiting is er een rapport opgesteld voor de beste strategie voor marktimplementatie.",
    year: "",
  },
  {
    name: "UMC Ureka Mega Challenge",
    logo: "https://cdn.sanity.io/images/mwby6hwm/production/ec7198f837bc15dae2c8ef1e4163b2ecd584fc9b-472x261.png",
    description: "In samenwerking met het incubatordepartement van het UMC Utrecht geeft Shift Innovatie workshops aan beginnende ondernemers over het opzetten van een bedrijf en businessplan. Tevens heeft Shift al meer dan 20 finalisten begeleid bij het opzetten van hun businessplan over de jaren heen. Zij helpen hierbij bij het invullen van het businessplan of opzetten van financieel plan van de finalisten.",
    year: "sinds 2012 op jaarlijkse basis",
  },
  {
    name: "Klimaatbureau HIER",
    logo: "",
    description: "Shift Innovatie heeft het energieverbruik van elektronische apparaten in huishoudens in kaart gebracht. Hierbij is elk apparaat geanalyseerd en vergeleken met een zogenoemde 'Best Available Technology'. Het resulterende rapport gebruikt HIER Klimaatbureau voor hun energiebesparingstool.",
    year: "2016",
  },
  {
    name: "Palmsens",
    logo: "",
    description: "Shift Innovatie heeft voor Palmsens een kwantitatieve publicatie analyse uitgevoerd, om inzicht te krijgen van de state-of-the-art wetenschap in het veld van potentiostaten. Hierbij zijn de huidige en toekomstige kansen in de markt uitgelicht. Concreet werd hiervoor een full-text search gedaan naar deze producten in wetenschappelijke publicaties.",
    year: "2020",
  },
];

const strategischServices = [
  {
    icon: FileText,
    title: "Businesscase-ontwikkeling",
    description: "Wij ondersteunen bij het vertalen van een sterk idee naar een heldere en overtuigende businesscase. Daarbij ligt de focus op haalbaarheid, waardecreatie en strategische positionering. Of het nu gaat om een nieuw product, dienst of verdienmodel, wij zorgen dat uw plannen onderbouwd en professioneel gepresenteerd zijn richting klanten, partners en investeerders.",
  },
  {
    icon: BarChart3,
    title: "Marktonderzoek en Concurrentieanalyse",
    description: "In een markt die continu in beweging is, is inzicht essentieel. Wij brengen de marktstructuur, klantbehoeften en de concurrenten helder in kaart. Met een scherp oog voor trends helpen we u strategische keuzes te maken die passen bij uw ambities en u onderscheiden van de concurrentie.",
  },
  {
    icon: Database,
    title: "Data-analyse",
    description: "Wij zetten data om in bruikbare inzichten. Denk aan klantsegmentatie, procesoptimalisatie of risicobeoordeling. Door gegevens effectief te analyseren en te interpreteren, ondersteunen we onderbouwde besluitvorming en helpen we u kansen te identificeren en beter te benutten.",
  },
];

const energieServices = [
  {
    icon: Battery,
    title: "Netcongestiescan",
    description: "Het Nederlandse elektriciteitsnet raakt steeds voller. Bedrijven ervaren hierdoor beperkingen bij het afnemen of terugleveren van stroom. Wij analyseren uw huidige en toekomstige energiebehoefte, en verkennen slimme oplossingen zoals energiemanagementsystemen, lokale opslag (bijv. batterijen) en decentrale opwek (bijv. zonnepanelen of WKK's). Zo zorgen we ervoor dat uw bedrijfsvoering niet wordt beperkt door netproblemen.",
  },
  {
    icon: Leaf,
    title: "Duurzaamheidsadvies",
    description: "Duurzaam ondernemen is niet alleen maatschappelijk verantwoord, maar ook economisch slim. Wij helpen bedrijven om hun duurzaamheidsstrategie vorm te geven en te onderbouwen met harde data.",
  },
  {
    icon: Search,
    title: "Energiescan",
    description: "Met een energiescan brengen we het energieverbruik van een gebouw in kaart, met aandacht voor onder andere licht, warmte, isolatie, zonnepanelen en batterijen. U ontvangt een compact en helder advies met concrete kansen voor besparing en verduurzaming.",
  },
];

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
                        <p className="text-sm text-muted-foreground flex-grow">{project.description}</p>
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
