export type VehicleCategory = "SUV" | "Sedán" | "Pickup" | "Hatchback";

export type FuelType = "Gasolina" | "Diésel" | "Híbrido" | "Eléctrico";

export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  category: VehicleCategory;
  price: number;
  fuelType: FuelType;
  transmission: "Automática" | "Manual";
  seats: number;
  engine: string;
  description: string;
  image: string;
  featured: boolean;
}