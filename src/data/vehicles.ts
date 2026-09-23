import type { Vehicle } from "../types/vehicle";
import { hilux24Media, hilux28Media, hiluxGrMedia } from "./vehicleMedia";
import hilux24CatalogImage from "../assets/vehicles/pickup/hilux-2-4/colors/camioneta-hilux-2-4-color-blanco-casa-pellas-nicaragua.webp";
import hilux28CatalogImage from "../assets/vehicles/pickup/hilux-2-8/colors/camioneta-hilux-2-8-color-blanco-casa-pellas-nicaragua.webp";
import hiluxGrCatalogImage from "../assets/vehicles/pickup/hilux-gr/colors/hilux-gr-sport-360-5-img-01.webp";

export const vehicles: Vehicle[] = [
  {
    id: "toyota-hilux-2-8",
    brand: "Toyota",
    model: "Hilux 2.8",
    year: 2026,
    category: "Pickup",
    priceFrom: 2058286,
    fuelType: "Gasolina",
    transmissions: ["Automática"],
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
    id: "sedan-001",
    brand: "Nova",
    model: "S4",
    year: 2026,
    category: "Sedán",
    priceFrom: 27900,
    fuelType: "Gasolina",
    transmissions: ["Automática"],
    seats: 5,
    engine: "1.8L",
    description:
      "Sedán elegante y eficiente, con tecnología enfocada en una experiencia cómoda para el uso diario.",
    image:
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
  {
    id: "hatch-001",
    brand: "Urban",
    model: "U2",
    year: 2026,
    category: "Hatchback",
    priceFrom: 21900,
    fuelType: "Gasolina",
    transmissions: ["Manual"],
    seats: 5,
    engine: "1.5L",
    description:
      "Compacto, práctico y eficiente. Una alternativa ideal para moverse con facilidad por la ciudad.",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
  {
    id: "toyota-hilux-gr",
    brand: "Toyota",
    model: "Hilux GR",
    year: 2026,
    category: "Pickup",
    priceFrom: 2307331,
    fuelType: "Híbrido",
    transmissions: ["Automática"],
    seats: 5,
    engine: "2.0L Hybrid",
    description:
      "SUV híbrida que combina eficiencia, tecnología y confort para una conducción moderna.",
    image: hiluxGrCatalogImage,
    media: hiluxGrMedia,
    featured: true,
  },
  {
    id: "pickup-002",
    brand: "Terra",
    model: "T7",
    year: 2025,
    category: "Pickup",
    priceFrom: 36900,
    fuelType: "Diésel",
    transmissions: ["Manual"],
    seats: 5,
    engine: "2.4L Turbo Diésel",
    description:
      "Pickup funcional y resistente, pensada para quienes necesitan capacidad y confiabilidad todos los días.",
    image:
      "https://images.unsplash.com/photo-1592805723127-004c4f7b4a9d?auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
];
