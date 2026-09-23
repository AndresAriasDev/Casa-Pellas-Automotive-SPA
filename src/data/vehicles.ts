import type { Vehicle } from "../types/vehicle";

export const vehicles: Vehicle[] = [
  {
    id: "suv-001",
    brand: "Nova",
    model: "X5",
    year: 2026,
    category: "SUV",
    price: 38900,
    fuelType: "Gasolina",
    transmission: "Automática",
    seats: 5,
    engine: "2.0L Turbo",
    description:
      "SUV moderna y versátil, diseñada para ofrecer comodidad, tecnología y seguridad tanto en ciudad como en carretera.",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "pickup-001",
    brand: "Terra",
    model: "T9",
    year: 2026,
    category: "Pickup",
    price: 45900,
    fuelType: "Diésel",
    transmission: "Automática",
    seats: 5,
    engine: "2.8L Turbo Diésel",
    description:
      "Pickup robusta con gran capacidad de carga, preparada para el trabajo y las aventuras fuera de la ciudad.",
    image:
      "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "sedan-001",
    brand: "Nova",
    model: "S4",
    year: 2026,
    category: "Sedán",
    price: 27900,
    fuelType: "Gasolina",
    transmission: "Automática",
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
    price: 21900,
    fuelType: "Gasolina",
    transmission: "Manual",
    seats: 5,
    engine: "1.5L",
    description:
      "Compacto, práctico y eficiente. Una alternativa ideal para moverse con facilidad por la ciudad.",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
  {
    id: "hybrid-001",
    brand: "Nova",
    model: "E7 Hybrid",
    year: 2026,
    category: "SUV",
    price: 42500,
    fuelType: "Híbrido",
    transmission: "Automática",
    seats: 5,
    engine: "2.0L Hybrid",
    description:
      "SUV híbrida que combina eficiencia, tecnología y confort para una conducción moderna.",
    image:
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "pickup-002",
    brand: "Terra",
    model: "T7",
    year: 2025,
    category: "Pickup",
    price: 36900,
    fuelType: "Diésel",
    transmission: "Manual",
    seats: 5,
    engine: "2.4L Turbo Diésel",
    description:
      "Pickup funcional y resistente, pensada para quienes necesitan capacidad y confiabilidad todos los días.",
    image:
      "https://images.unsplash.com/photo-1592805723127-004c4f7b4a9d?auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
];