export type VehicleCategory = "SUV" | "Sedán" | "Pickup" | "Hatchback";

export type FuelType = "Gasolina" | "Diésel" | "Híbrido" | "Eléctrico";

export interface VehicleImage {
  src: string;
  alt: string;
}

export interface VehicleColor {
  id: string;
  name: string;
  image: VehicleImage;
}

export interface VehicleMedia {
  hero?: VehicleImage;
  logo?: VehicleImage;
  colors?: VehicleColor[];
  gallery?: VehicleImage[];
  video?: {
    src: string;
    poster?: string;
    title: string;
  };
}

export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  category: VehicleCategory;
  priceFrom: number;
  priceTo?: number;
  fuelType: FuelType;
  transmissions: ("Automática" | "Manual")[];
  seats: number;
  engine: string;
  description: string;
  image: string;
  featured: boolean;
  media?: VehicleMedia;
}
