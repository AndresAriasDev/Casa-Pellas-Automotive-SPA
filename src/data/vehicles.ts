import type { Vehicle } from "../types/vehicle";
import { hiaceMedia, fortunerMedia } from "./vehicleMedia";
import hiaceCatalogImage from "../assets/vehicles/comercial/hiace/colors/hiace-portada.png";
import fortunerCatalogImage from "../assets/vehicles/suv/fortuner/colors/camioneta-fortuner-portada.png";
import { hilux24Media, hilux28Media, hiluxGrMedia, tundraMedia, landCruiserMedia } from "./vehicleMedia";
import tundraCatalogImage from "../assets/vehicles/pickup/tundra/colors/tundra-portada.png";
import landCruiserCatalogImage from "../assets/vehicles/pickup/land-cruiser/colors/land-cruiser-portada.png";
import hilux24CatalogImage from "../assets/vehicles/pickup/hilux-2-4/colors/camioneta-hilux-2-4-color-blanco-casa-pellas-nicaragua.webp";
import hilux28CatalogImage from "../assets/vehicles/pickup/hilux-2-8/colors/camioneta-hilux-2-8-color-blanco-casa-pellas-nicaragua.webp";
import hiluxGrCatalogImage from "../assets/vehicles/pickup/hilux-gr/colors/img-toyota-portada-gr.jpg";

export const vehicles: Vehicle[] = [
  {
    id: "toyota-hiace",
    brand: "Toyota",
    model: "Hiace",
    category: "Comercial",
    priceFrom: 1208602,
    transmissions: ["Mecánico"],
    description: "Consulta más información sobre la Toyota Hiace.",
    image: hiaceCatalogImage,
    media: hiaceMedia,
    featured: false,
  },
  {
    id: "toyota-fortuner",
    brand: "Toyota",
    model: "Fortuner",
    category: "SUV",
    priceFrom: 2563701,
    transmissions: ["Automático FULL"],
    description: "Consulta más información sobre la Toyota Fortuner.",
    image: fortunerCatalogImage,
    media: fortunerMedia,
    featured: false,
  },
  {
    id: "toyota-tundra",
    brand: "Toyota",
    model: "Tundra",
    category: "Pickup",
    priceFrom: 3076441,
    transmissions: ["Automática"],
    description: "Consulta más información sobre la Toyota Tundra.",
    image: tundraCatalogImage,
    media: tundraMedia,
    featured: false,
  },
  {
    id: "toyota-land-cruiser",
    brand: "Toyota",
    model: "Land Cruiser",
    category: "Pickup",
    priceFrom: 1739654,
    transmissions: ["Mecánico AMB 4x4", "Mecánico DC 4x4", "Mecánico CS 4x4"],
    description: "Consulta más información sobre la Toyota Land Cruiser.",
    image: landCruiserCatalogImage,
    media: landCruiserMedia,
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
    media: hilux28Media,
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
    media: hilux24Media,
    featured: true,
  },
  {
    id: "toyota-hilux-gr",
    brand: "Toyota",
    model: "Hilux GR",
    year: 2026,
    category: "Pickup",
    priceFrom: 2307331,
    fuelType: "Híbrido",
    transmissions: ["Automático GR SPORT"],
    seats: 5,
    engine: "2.0L Hybrid",
    description:
      "SUV híbrida que combina eficiencia, tecnología y confort para una conducción moderna.",
    image: hiluxGrCatalogImage,
    media: hiluxGrMedia,
    featured: true,
  },
];
