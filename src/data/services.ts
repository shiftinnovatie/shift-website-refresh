import { FileText, BarChart3, Database, Battery, Leaf, Search } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

/**
 * Strategisch Bedrijfsadvies expertises.
 * Pas hier titels en beschrijvingen aan.
 */
export const strategischServices: ServiceItem[] = [
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

/**
 * Energie en Life-sciences expertises.
 * Pas hier titels en beschrijvingen aan.
 */
export const energieServices: ServiceItem[] = [
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
