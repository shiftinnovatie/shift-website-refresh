import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const consultants = [
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

const advisors = [
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

export const Consultants = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {consultants.map((consultant, index) => (
            <motion.div
              key={consultant.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300 group border-2 hover:border-primary">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={consultant.image}
                      alt={consultant.name}
                      className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold">{consultant.name}</h3>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
            Onze consultants worden ondersteund door de 'Board of Advisors'. Dit orgaan bestaat uit
            ervaren ondernemers die werkzaam zijn geweest bij Shift Innovatie. Het doel van de Board
            of Advisors is het delen van kennis en netwerken, en het bewerkstelligen van een
            kwaliteitsgarantie binnen Shift Innovatie.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advisors.map((advisor, index) => (
            <motion.div
              key={advisor.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300 group border-2 hover:border-secondary">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={advisor.image}
                      alt={advisor.name}
                      className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold">{advisor.name}</h3>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
