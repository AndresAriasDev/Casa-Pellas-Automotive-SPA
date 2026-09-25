import type { VehicleDetailMedia } from "../types/vehicle";

type DetailMediaModule = {
  detailMedia: VehicleDetailMedia;
};

const vehicleDetailMediaLoaders: Record<string, () => Promise<DetailMediaModule>> = {
  "toyota-hiace": () => import("./vehicleMedia/hiace"),
  "toyota-fortuner": () => import("./vehicleMedia/fortuner"),
  "toyota-tundra": () => import("./vehicleMedia/tundra"),
  "toyota-land-cruiser": () => import("./vehicleMedia/land-cruiser"),
  "toyota-hilux-2-8": () => import("./vehicleMedia/hilux-2-8"),
  "toyota-hilux-2-4": () => import("./vehicleMedia/hilux-2-4"),
  "toyota-hilux-gr": () => import("./vehicleMedia/hilux-gr"),
};

export async function getVehicleDetailMedia(vehicleId: string): Promise<VehicleDetailMedia | undefined> {
  const loadMedia = vehicleDetailMediaLoaders[vehicleId];
  if (!loadMedia) return undefined;
  return (await loadMedia()).detailMedia;
}
