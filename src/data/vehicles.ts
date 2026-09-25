import type { Vehicle } from "../types/vehicle";
import hiaceCatalogImage from "../assets/vehicles/comercial/hiace/colors/hiace-portada.png";
import fortunerCatalogImage from "../assets/vehicles/suv/fortuner/colors/camioneta-fortuner-portada.png";
import tundraCatalogImage from "../assets/vehicles/pickup/tundra/colors/tundra-portada.png";
import landCruiserCatalogImage from "../assets/vehicles/pickup/land-cruiser/colors/land-cruiser-portada.png";
import hilux24CatalogImage from "../assets/vehicles/pickup/hilux-2-4/colors/camioneta-hilux-2-4-color-blanco-casa-pellas-nicaragua.webp";
import hilux28CatalogImage from "../assets/vehicles/pickup/hilux-2-8/colors/camioneta-hilux-2-8-color-blanco-casa-pellas-nicaragua.webp";
import hiluxGrCatalogImage from "../assets/vehicles/pickup/hilux-gr/colors/img-toyota-portada-gr.jpg";
import hiaceHero from "../assets/vehicles/comercial/hiace/hero/hiace-portada-banner.png";
import hiaceLogo from "../assets/vehicles/comercial/hiace/logo/logo-hiace.webp";
import fortunerHero from "../assets/vehicles/suv/fortuner/hero/camioneta-fortuner-portada-banner.png";
import fortunerLogo from "../assets/vehicles/suv/fortuner/logo/recurso-26@2x.webp";
import tundraHero from "../assets/vehicles/pickup/tundra/hero/toyota-tundra-portada-banner.webp";
import tundraLogo from "../assets/vehicles/pickup/tundra/logo/logo-tundra.webp";
import landCruiserHero from "../assets/vehicles/pickup/land-cruiser/hero/land-cruiser-portada-banner.png";
import landCruiserLogo from "../assets/vehicles/pickup/land-cruiser/logo/logo-landcruiser.webp";
import hilux24Hero from "../assets/vehicles/pickup/hilux-2-4/hero/img-toyota-portada-2-4.png";
import hilux24Logo from "../assets/vehicles/pickup/hilux-2-4/logo/logo-hilux-2-4.webp";
import hilux28Hero from "../assets/vehicles/pickup/hilux-2-8/hero/img-toyota-portada-2-8.png";
import hilux28Logo from "../assets/vehicles/pickup/hilux-2-8/logo/logo-hulux-2-8.webp";
import hiluxGrHero from "../assets/vehicles/pickup/hilux-gr/hero/img-toyota-portada-gr.png";
import hiluxGrLogo from "../assets/vehicles/pickup/hilux-gr/logo/logo-hilux-gr.webp";

export const vehicles: Vehicle[] = [
  {
    id: "toyota-hiace",
    brand: "Toyota",
    model: "Hiace",
    category: "Comercial",
    priceFrom: 1208602,
    fuelType: "Diésel",
    seats: 16,
    engine: "2.8 Turbo Diesel",
    transmissions: ["Mecánico"],
    description: "Consulta más información sobre la Toyota Hiace.",
    image: hiaceCatalogImage,
    media: {
      hero: { src: hiaceHero, alt: "Toyota Hiace, imagen principal" },
      logo: { src: hiaceLogo, alt: "Logo del modelo Toyota Hiace" },
    },
    featured: false,
  },
  {
    id: "toyota-fortuner",
    brand: "Toyota",
    model: "Fortuner",
    category: "SUV",
    priceFrom: 2563701,
    seats: 7,
    engine: "2.8 Turbo Intercooler",
    transmissions: ["Automático FULL"],
    description: "Consulta más información sobre la Toyota Fortuner.",
    image: fortunerCatalogImage,
    media: {
      hero: { src: fortunerHero, alt: "Toyota Fortuner, imagen principal" },
      logo: { src: fortunerLogo, alt: "Logo del modelo Toyota Fortuner" },
    },
    featured: false,
  },
  {
    id: "toyota-tundra",
    brand: "Toyota",
    model: "Tundra",
    category: "Pickup",
    priceFrom: 3076441,
    fuelType: "Gasolina",
    seats: 5,
    engine: "V6 i-FORCE Twin Turbo 3,445 cc, 24V DOHC",
    transmissions: ["Automática"],
    description: "Consulta más información sobre la Toyota Tundra.",
    image: tundraCatalogImage,
    media: {
      hero: { src: tundraHero, alt: "Toyota Tundra, imagen principal" },
      logo: { src: tundraLogo, alt: "Logo del modelo Toyota Tundra" },
    },
    featured: false,
  },
  {
    id: "toyota-land-cruiser",
    brand: "Toyota",
    model: "Land Cruiser",
    category: "Pickup",
    priceFrom: 1739654,
    fuelType: "Diésel",
    seats: 3,
    engine: "6 cilindros, OHC",
    transmissions: ["Mecánico AMB 4x4", "Mecánico DC 4x4", "Mecánico CS 4x4"],
    description: "Consulta más información sobre la Toyota Land Cruiser.",
    image: landCruiserCatalogImage,
    media: {
      hero: { src: landCruiserHero, alt: "Toyota Land Cruiser, imagen principal" },
      logo: { src: landCruiserLogo, alt: "Logo del modelo Toyota Land Cruiser" },
    },
    featured: false,
  },
  {
    id: "toyota-hilux-2-8",
    brand: "Toyota",
    model: "Hilux 2.8",
    year: 2026,
    category: "Pickup",
    priceFrom: 2058286,
    fuelType: "Gasolina",
    transmissions: ["Automático WIDE TREAD", "Automático DC FULL"],
    seats: 5,
    engine: "2.0L Turbo",
    description:
      "SUV moderna y versátil, diseñada para ofrecer comodidad, tecnología y seguridad tanto en ciudad como en carretera.",
    image: hilux28CatalogImage,
    media: {
      hero: { src: hilux28Hero, alt: "Toyota Hilux 2.8, imagen principal" },
      logo: { src: hilux28Logo, alt: "Logo del modelo Toyota Hilux 2.8" },
    },
    featured: true,
  },
  {
    id: "toyota-hilux-2-4",
    brand: "Toyota",
    model: "Hilux 2.4",
    year: 2026,
    category: "Pickup",
    priceFrom: 1300163,
    fuelType: "Diésel",
    transmissions: ["Automática"],
    seats: 5,
    engine: "2.8L Turbo Diésel",
    description:
      "Pickup robusta con gran capacidad de carga, preparada para el trabajo y las aventuras fuera de la ciudad.",
    image: hilux24CatalogImage,
    media: {
      hero: { src: hilux24Hero, alt: "Toyota Hilux 2.4 en color blanco" },
      logo: { src: hilux24Logo, alt: "Logo del modelo Toyota Hilux 2.4" },
    },
    featured: true,
  },
  {
    id: "toyota-hilux-gr",
    brand: "Toyota",
    model: "Hilux GR",
    year: 2026,
    category: "Pickup",
    priceFrom: 2307331,
    fuelType: "Diésel",
    transmissions: ["Automático GR SPORT"],
    seats: 5,
    engine: "2.8 Turbo Diesel",
    description:
      "SUV híbrida que combina eficiencia, tecnología y confort para una conducción moderna.",
    image: hiluxGrCatalogImage,
    media: {
      hero: { src: hiluxGrHero, alt: "Toyota Hilux GR, imagen principal" },
      logo: { src: hiluxGrLogo, alt: "Logo del modelo Toyota Hilux GR" },
    },
    featured: true,
  },
];
