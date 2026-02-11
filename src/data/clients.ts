import hierLogo from "@/assets/hier-klimaatbureau-logo.png";
import palmsensLogo from "@/assets/palmsens-logo.png";

export interface ClientProject {
  name: string;
  logo: string;
  description: string;
  year: string;
}

/**
 * Klantprojecten voor de carousel "Klanten die u voorgingen".
 * Pas hier klanten, beschrijvingen, logo's en jaren aan.
 */
export const clientProjects: ClientProject[] = [
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
    year: "2022",
  },
  {
    name: "UMC Ureka Mega Challenge",
    logo: "https://cdn.sanity.io/images/mwby6hwm/production/ec7198f837bc15dae2c8ef1e4163b2ecd584fc9b-472x261.png",
    description: "In samenwerking met het incubatordepartement van het UMC Utrecht geeft Shift Innovatie workshops aan beginnende ondernemers over het opzetten van een bedrijf en businessplan. Tevens heeft Shift al meer dan 20 finalisten begeleid bij het opzetten van hun businessplan over de jaren heen. Zij helpen hierbij bij het invullen van het businessplan of opzetten van financieel plan van de finalisten.",
    year: "sinds 2012 op jaarlijkse basis",
  },
  {
    name: "Klimaatbureau HIER",
    logo: hierLogo,
    description: "Shift Innovatie heeft het energieverbruik van elektronische apparaten in huishoudens in kaart gebracht. Hierbij is elk apparaat geanalyseerd en vergeleken met een zogenoemde 'Best Available Technology'. Het resulterende rapport gebruikt HIER Klimaatbureau voor hun energiebesparingstool.",
    year: "2016",
  },
  {
    name: "Palmsens",
    logo: palmsensLogo,
    description: "Shift Innovatie heeft voor Palmsens een kwantitatieve publicatie analyse uitgevoerd, om inzicht te krijgen van de state-of-the-art wetenschap in het veld van potentiostaten. Hierbij zijn de huidige en toekomstige kansen in de markt uitgelicht. Concreet werd hiervoor een full-text search gedaan naar deze producten in wetenschappelijke publicaties.",
    year: "2020",
  },
];
