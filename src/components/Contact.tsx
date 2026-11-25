import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Heeft u vragen of wilt u graag meer informatie? Neem gerust contact met ons op.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="mailto:info@shift-innovatie.nl"
            className="bg-card p-8 rounded-xl shadow-card-hover border border-border hover:border-primary transition-all duration-300 text-center block"
          >
            <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <span className="text-muted-foreground hover:text-primary transition-colors">
              info@shift-innovatie.nl
            </span>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            href="tel:+31623274997"
            className="bg-card p-8 rounded-xl shadow-card-hover border border-border hover:border-primary transition-all duration-300 text-center block"
            aria-label="Bel voor snel contact met +31 6 23274997"
          >
            <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
              Telefoon
            </h3>
            <span className="text-muted-foreground hover:text-primary transition-colors">
              +31 6 23274997
            </span>
            <p className="text-sm text-muted-foreground mt-1">Snel contact</p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card p-8 rounded-xl shadow-card-hover border border-border hover:border-primary transition-all duration-300 text-center"
          >
            <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">Locatie</h3>
            <p className="text-muted-foreground">Utrecht, Nederland</p>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            href="https://nl.linkedin.com/company/shift-innovatie"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card p-8 rounded-xl shadow-card-hover border border-border hover:border-primary transition-all duration-300 text-center block"
            aria-label="Bezoek de LinkedIn-pagina van Shift Innovatie"
          >
            <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Linkedin className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
              LinkedIn
            </h3>
            <span className="text-muted-foreground hover:text-primary transition-colors">
              Shift Innovatie
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};
