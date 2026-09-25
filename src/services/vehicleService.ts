import { vehicles } from "../data/vehicles";
import type { Vehicle } from "../types/vehicle";

export const getVehicles = (): Promise<Vehicle[]> => {
  return Promise.resolve(vehicles);
};

export const getVehicleById = (id: string): Promise<Vehicle | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(vehicles.find((vehicle) => vehicle.id === id));
    }, 300);
  });
};
