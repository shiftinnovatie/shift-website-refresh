import { motion } from "framer-motion";
import shiftLogo from "@/assets/shift-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <img src={shiftLogo} alt="Shift Innovatie" className="h-10" />
            </div>
            <p className="text-background/70">
              Turn your ideas into capital met onze innovatieve consultancy diensten.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Over ons
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Diensten
                </a>
              </li>
              <li>
                <a
                  href="#consultants"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Consultants
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-background/70">
              <li>Utrecht, Nederland</li>
              <li>info@shift-innovatie.nl</li>
              <li>+31 6 1234 5678</li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/70">
          <p>
            &copy; {new Date().getFullYear()} Shift Innovatie. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
};
