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
    description:
      "Shift Innovatie heeft voor ReMediZ onderzocht welke Europese markten interessant zijn voor uitbreiding. Met een multicriteria-analyse hebben we bepaald aan welke criteria een nieuwe markt moet voldoen. Het resultaat: een concreet uitbreidingsadvies, inclusief de contactgegevens van de juiste partijen om te benaderen.",
    year: "2023",
  },
  {
    name: "Unie van Waterschappen",
    logo: "https://cdn.sanity.io/images/mwby6hwm/production/4e23a50b295fca1fe92cddab3d3a8c619ea22fc8-1300x500.png",
    description:
      "Shift Innovatie heeft onderzocht hoe waterschappen scenario's gebruiken. In een tweedelig onderzoek hebben we in kaart gebracht hoe de inhoud van deze scenario's verschilt en hoe ze in de praktijk worden ingezet. Op basis hiervan heeft de Unie van Waterschappen een leergang opgezet om waterschappen beter te ondersteunen bij het werken met scenario's.",
    year: "2021",
  },
  {
    name: "UU-DAB",
    logo: "https://cdn.sanity.io/images/mwby6hwm/production/cb49729f883a2ae41f071d6761b65a6e8d10f604-500x240.png",
    description:
      "In opdracht van de Universiteit Utrecht heeft Shift Innovatie een marktanalyse uitgevoerd voor de Utrecht University Developmental Assessment Battery (UU-DAB): een test voor taalontwikkelingsstoornissen en een werkgeheugentest. Via interviews hebben we de interesse van verschillende partijen in de markt onderzocht. Dit resulteerde in een rapport met de beste strategie voor marktintroductie.",
    year: "2022",
  },
  {
    name: "UMC Ureka Mega Challenge",
    logo: "https://cdn.sanity.io/images/mwby6hwm/production/ec7198f837bc15dae2c8ef1e4163b2ecd584fc9b-472x261.png",
    description:
      "In samenwerking met de incubator van het UMC Utrecht geeft Shift Innovatie workshops aan beginnende ondernemers over het opzetten van een bedrijf. Daarnaast hebben we in de loop der jaren meer dan 20 finalisten begeleid bij het schrijven van hun businessplan en het opstellen van een financieel plan.",
    year: "sinds 2012 op jaarlijkse basis",
  },
  {
    name: "Klimaatbureau HIER",
    logo: hierLogo,
    description:
      "Shift Innovatie heeft het energieverbruik van elektrische apparaten in huishoudens in kaart gebracht. Elk apparaat is geanalyseerd en vergeleken met de 'Best Available Technology'. HIER Klimaatbureau gebruikt het rapport nu in zijn energiebesparingstool.",
    year: "2016",
  },
  {
    name: "PalmSens",
    logo: palmsensLogo,
    description:
      "Shift Innovatie heeft voor PalmSens een kwantitatieve publicatieanalyse uitgevoerd om inzicht te krijgen in de stand van de wetenschap rond potentiostaten. Met een full-text search in wetenschappelijke publicaties hebben we de huidige en toekomstige marktkansen voor hun producten in kaart gebracht.",
    year: "2020",
  },
];
