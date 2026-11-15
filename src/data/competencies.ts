import { Zap, Users, Lightbulb, Target, BookOpen } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface CompetencyItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

/**
 * Competenties van Shift Innovatie.
 * Pas hier titels en beschrijvingen aan.
 */
export const competencies: CompetencyItem[] = [
  {
    icon: Zap,
    title: "Snel",
    description: "We passen ons snel aan verschillende vraagstukken, sectoren en klantbehoeften aan. Ook buiten kantoortijden.",
  },
  {
    icon: Target,
    title: "Flexibel Maatwerk",
    description: "Geen standaardoplossingen, elk project is afgestemd op de specifieke context en doelstelling.",
  },
  {
    icon: Users,
    title: "Frisse & Kritische blik",
    description: "We combineren jonge denkkracht met analytisch vermogen en durven bestaande aannames uit te dagen.",
  },
  {
    icon: BookOpen,
    title: "Leergierig",
    description: "Brede interesse en snel ingewerkt in uw sector. We brengen de nieuwste kennis mee en leren tegelijk van uw praktijk: daar worden beide kanten beter van.",
  },
  {
    icon: Lightbulb,
    title: "Dichtbij de wetenschap",
    description: "We werken vanuit de nieuwste academische inzichten en methodes, met een sterke link naar onderzoek en innovatie.",
  },
];
