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
import floorDeJongImage from "@/assets/floor-de-jong.jpg";
import larsDonathImage from "@/assets/lars-donath.jpg";

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
    study: "Master Sustainable Development, track Energy & Materials",
    description:
      "Jeroen zit momenteel in het eerste jaar van de master Sustainable Development, gespecialiseerd in de track Energy & Materials. Binnen deze studie staat niet alleen het duurzaam ontwikkelen van energie en materiaalstromen centraal, maar ook het vaststellen van een rechtvaardige transitie naar een duurzame samenleving.",
    email: "j.bos@shift-innovatie.nl",
    phone: "06-81156020",
  },
  {
    name: "Tycho Sangers",
    image:
      "https://cdn.sanity.io/images/mwby6hwm/production/b550804eb359d56cec8d1e919d62ce56d1037a7c-5198x3462.png?rect=868,0,3462,3462&w=512&h=512",
    study: "Master Energy Science",
    description:
      "Tycho heeft zijn bachelor Natuurwetenschap & Innovatiemanagement afgerond en studeert nu de Master Energy Science. Zijn hoofdinteresse ligt bij het optimaliseren van de energietransitie, maar hij heeft een brede interesse in verschillende disciplines, zoals Innovatie, Duurzaamheid en Beleid.",
    email: "t.sangers@shift-innovatie.nl",
    phone: "06-22251850",
  },
  {
    name: "Fabian Tobben",
    image:
      "https://cdn.sanity.io/images/mwby6hwm/production/76e1d7bf341290d1b91526ee0bccf2a6839eba0a-4497x3456.jpg?rect=521,0,3456,3456&w=512&h=512",
    study: "Master Earth, Surface and Water",
    description:
      "Fabian is bachelor student Natuurwetenschap en Innovatiemanagement en volgt de energie en transport track. Hij is erg geïnteresseerd in het integreren van technologie in de maatschappij. Verder hoopt hij bij te kunnen dragen aan interessante vraagstukken met een creatieve blik.",
    email: "f.tobben@shift-innovatie.nl",
    phone: "+31 6 33041190",
  },
  {
    name: "Guust Bartels",
    image:
      "https://cdn.sanity.io/images/mwby6hwm/production/8a0b9a92d0147d4ea5ef0c265f56b472f5b289d6-834x1166.jpg?rect=0,166,834,834&w=512&h=512",
    study: "Natuurwetenschap & Innovatiemanagement",
    description:
      "Guust is een bachelor student Natuurwetenschap en Innovatiemanagement. Hij is breed geïnteresseerd in de energie en transport sector. Hiernaast heeft hij zich tijdens zijn studie extra verdiept in de wiskunde. Guust is geïnteresseerd in het implementeren van technische innovaties. Naast zijn studie is Guust een jaar lang fulltime actief geweest als penningmeester van een studievereniging. Hier heeft hij veel geleerd over het beheren van het vermogen van een vereniging.",
    email: "g.bartels@shift-innovatie.nl",
    phone: "06-23274997",
  },
  {
    name: "Philip Smids",
    image:
      "https://cdn.sanity.io/images/mwby6hwm/production/52c95902aad935c69957e4dee6248f4f798f2f62-1568x2088.jpg?rect=0,260,1568,1568&w=512&h=512",
    study: "Master Complex Systems Engineering and Management",
    description:
      "Philip is master student Complex Systems Engineering and Management aan de TU Delft, waarbinnen hij zich heeft gespecialiseerd in de transport en logistiek. Tijdens zijn bachelor heeft hij zich verder verdiept in het sociaal ondernemerschap, waarbij hij erg geïnteresseerd is in maatschappelijk verantwoord ondernemen en het opstellen van duurzame bedrijfsmodellen. Verder hoopt hij bij te dragen aan het vinden van creatieve oplossingen en uitdagende vraagstukken.",
    email: "p.smids@shift-innovatie.nl",
    phone: "+31 6 11451827",
  },
  {
    name: "Floor de Jong",
    image: floorDeJongImage,
    study: "Natuurwetenschap & Innovatiemanagement",
    description:
      "Floor is een bachelor student Natuurwetenschap & Innovatiemanagement. Hierbinnen volgt hij de track energie en transport en daarnaast volgt hij een minor in Economics and Business Economics. Hij is geïnteresseerd in het raakvlak van duurzaamheid, technologie en ondernemerschap. Verder kijkt hij ernaar uit om bij te dragen aan het helpen van bedrijven bij het oplossen van duurzame en innovatieve vraagstukken.",
    email: "f.dejong@shift-innovatie.nl",
    phone: "+31 6 80129607",
  },
  {
    name: "Lars Donath",
    image: larsDonathImage,
    study: "Natuurwetenschap & Innovatiemanagement",
    description:
      "Lars is bachelor student Natuurwetenschap & Innovatiemanagement en hij volgt de track energie en transport. Hij is geïnteresseerd in alles wat te maken heeft met innovatie, technologie en duurzaamheid. Verder hoopt hij hier nog meer over te leren en zo bij te kunnen dragen aan het maken van impact.",
    email: "l.donath@shift-innovatie.nl",
    phone: "+31 6 30068167",
  },
];

const advisors: ConsultantInfo[] = [
  {
    name: "Paul Tuinenberg",
    image:
      "https://cdn.sanity.io/images/mwby6hwm/production/07a3cfd224303d98ffbf34d6c55babc10dce5adb-286x286.jpg?w=512&h=512",
    description:
      "In 2010 was Paul tijdens zijn master Innovatiemanagement een van de oprichters van Shift Innovatie. De voornaamste drijfveer was de zoektocht naar de praktische toepasbaarheid van de geleerde innovatietheorieën. In zijn laatste jaar bij Shift Innovatie schreef hij het boek 'Innoveren kun je leren' met medevennoot Daniël Doorman. Na zijn afstuderen in 2012 besloot Paul om samen met een andere vennoot, Tijmen Altena, IDfuse op te richten. Dit bedrijf helpt wetenschappers om de vertaalslag te maken van hun onderzoekspraktijk naar de maatschappelijke praktijk. Inmiddels bedienen zij 11 van de 14 universiteiten en hebben zij meerdere producten ontwikkeld.",
  },
  {
    name: "Thomas van de Voort",
    image:
      "https://cdn.sanity.io/images/mwby6hwm/production/4d1a4d679713285da8010653648da1fbca2fc48c-800x800.jpg?w=512&h=512",
    description:
      "Thomas is een PhD kandidaat bij de Universiteit Utrecht. In het recente verleden was hij onderdeel van Shift Innovatie en heeft veel ondersteund bij zorg technische vraagstukken. Hij doet onderzoek naar de regulatie, vergoeding en het innovatiesysteem van op stamcellen gebaseerde gentherapieën voor zeldzame ziektes als onderdeel van het CURE4LIFE consortium. Zijn ervaringen in de zorgsector en universiteit helpt Shift Innovatie in deze sectoren goed advies in te winnen van Thomas.",
  },
  {
    name: "Oskar Meijerink",
    image:
      "https://cdn.sanity.io/images/mwby6hwm/production/387b61befb8613494e035df1be9bb3ee169bc7da-800x800.jpg?w=512&h=512",
    description:
      "Oskar is een Energy Science-alumnus, afgestudeerd op het gebied van bio-brandstoffen voor de luchtvaart. Tijdens zijn studie aan de Universiteit Utrecht, Imperial College Londen en Royal Melbourne Institute of Technology heeft hij zich gespecialiseerd in de ontwikkeling en stimulering van duurzame energie. Daarnaast was hij gedurende die periode ook consultant bij Shift Innovatie. Op dit moment is hij werkzaam bij SkyNRG als Head of Future Fuels, hier werkt hij aan de marktontwikkeling van bio-brandstoffen met een specialisatie op supply chain development. Naast zijn werk, is Oskar een fervent sporter en is hij vrijwilliger bij grote sportevenementen.",
  },
  {
    name: "Thijs van Hasselt",
    image:
      "https://cdn.sanity.io/images/mwby6hwm/production/2c4b624cecdd36a5a1a42c5f7848b73df2ba5ab6-800x800.jpg?w=512&h=512",
    description:
      "Thijs heeft een achtergrond in innovatie- en marketingmanagement en is met name geïnteresseerd in nieuwe technologieën en het vermarkten hiervan. Hij heeft meerdere ondernemingen en een stichting op zijn naam staan en is tevens mede-oprichter van Shift Innovatie. Tegenwoordig werkt hij als Head of Marketing bij LessonUp. Met zijn ondernemersgeest en kennis van marketing ondersteunt Thijs het team van Shift Innovatie waar nodig.",
  },
  {
    name: "Jan-Willem Potse",
    image:
      "https://cdn.sanity.io/images/mwby6hwm/production/8e12eb2a26bf40071cca1ad4abeb570e62fda7d1-775x775.jpg?w=512&h=512",
    description:
      "Jan-Willem is als adviseur Duurzame Leefomgeving en Mobiliteit bij AT Osborne actief bezig met complexe problemen in de leefomgeving en in het samenbrengen van betrokken partijen. Hierin is hij actief bij SmartWayz.NL en de Nationale Krachtenbundeling Automatisch Openbaar Vervoer. Zijn ervaring in mobiliteit en in combinatie met duurzaamheid is een belangrijke factor voor Shift Innovatie om hem als adviseur te hebben!",
  },
  {
    name: "Stijn Maatman",
    image:
      "https://cdn.sanity.io/images/mwby6hwm/production/9927ac5832090817ccb56bb15ff2f4f63c62d9e6-800x800.jpg?w=512&h=512",
    description:
      "Als energie-ontwikkelaar bij Nuna energy is Stijn bezig met het implementeren van data- en softwareoplossingen voor een toekomstbestendige leefwereld. Door zijn ervaringen in de energie sector bij ook o.a. Energiepartners en Arcadis | Over Morgen, kan hij ons adviseren op het gebied van energie transitie en duurzaamheid.",
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
  const consultantsRow2 = consultants.slice(4, 7);
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
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
