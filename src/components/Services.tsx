import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, FileText, TrendingUp, BarChart3, Leaf } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Innovatieadvies",
    description:
      "Wat maakt uw bedrijf innovatief, nu en in de toekomst? Wij helpen u deze vraag te beantwoorden. Daarnaast zijn onze consultants ook ervaren in het beoordelen van innovativiteit.",
  },
  {
    icon: FileText,
    title: "Businesscase",
    description:
      "Uitgebreide business cases die uw ideeën vertalen naar concrete, haalbare plannen met duidelijke ROI en implementatiestrategie.",
  },
  {
    icon: TrendingUp,
    title: "Marktonderzoek",
    description:
      "Diepgaand marktonderzoek om kansen te identificeren, concurrentie te analyseren en uw positie in de markt te versterken.",
  },
  {
    icon: BarChart3,
    title: "Data-analyse",
    description:
      "Data-gedreven inzichten om betere beslissingen te nemen en uw business processen te optimaliseren voor maximale resultaten.",
  },
  {
    icon: Leaf,
    title: "Duurzaamheidsadvies",
    description:
      "Strategisch advies om duurzaamheid te integreren in uw bedrijfsvoering en innovatieprojecten voor langetermijn impact.",
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Al meer dan tien jaar delen onze consultants de opgedane innovatiekennis uit hun studie
            met andere organisaties. Deze kennis kent vele vormen. Zo denken wij op verschillende
            niveaus graag met u mee; of dat nu is bij het opstellen van een businessplan, het
            uitwerken van het Business Model Canvas (BMC) of bij een marktonderzoek.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-primary transition-all duration-300 hover:shadow-elegant group">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-hero p-8 md:p-12 rounded-2xl border border-primary/20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Klanten die u voor gingen
          </h3>
          <p className="text-center text-muted-foreground mb-8">
            Een kleine greep uit de bedrijven die wij hebben mogen helpen met hun
            innovatievraagstukken in de afgelopen tijd!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <img
              src="https://cdn.sanity.io/images/mwby6hwm/production/40809a42347474b47973d0b16ca21b071960456e-200x200.jpg"
              alt="ReMediZ"
              className="h-20 object-contain hover:scale-110 transition-transform"
            />
            <img
              src="https://cdn.sanity.io/images/mwby6hwm/production/cb49729f883a2ae41f071d6761b65a6e8d10f604-500x240.png"
              alt="UU-DAB"
              className="h-20 object-contain hover:scale-110 transition-transform"
            />
            <img
              src="https://cdn.sanity.io/images/mwby6hwm/production/ec7198f837bc15dae2c8ef1e4163b2ecd584fc9b-472x261.png"
              alt="Eureka"
              className="h-20 object-contain hover:scale-110 transition-transform"
            />
            <img
              src="https://cdn.sanity.io/images/mwby6hwm/production/4e23a50b295fca1fe92cddab3d3a8c619ea22fc8-1300x500.png"
              alt="Unie van Waterschappen"
              className="h-20 object-contain hover:scale-110 transition-transform"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
