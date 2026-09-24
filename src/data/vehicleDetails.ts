import type { Vehicle } from "../types/vehicle";

export interface VehicleDetailFeature {
  id: string;
  label: string;
  value: string;
}

export interface VehicleDetail {
  vehicleId: Vehicle["id"];
  features?: VehicleDetailFeature[];
  safety?: string[];
}

export const vehicleDetails: VehicleDetail[] = [
  {
    vehicleId: "toyota-fortuner",
    features: [
      {
        id: "power",
        label: "Potencia",
        value: "201 HP @ 3400 rpm",
      },
      {
        id: "gear-count",
        label: "Transmisión",
        value: "6 velocidades",
      },
      {
        id: "drivetrain",
        label: "Tracción",
        value: "4×4",
      },
      {
        id: "fuel-tank-capacity",
        label: "Capacidad de tanque",
        value: "80 L",
      },
      {
        id: "seat-rows",
        label: "Filas",
        value: "3 filas",
      },
    ],
    safety: [
      "Airbags",
      "Chasis reforzado",
      "ABS",
      "BA",
      "EBD",
      "VSC",
      "Advertencia de cinturón de seguridad",
    ],
  },
  {
    vehicleId: "toyota-hiace",
    features: [
      {
        id: "power",
        label: "Potencia",
        value: "174 HP",
      },
      {
        id: "gear-count",
        label: "Transmisión",
        value: "6 velocidades",
      },
      {
        id: "drivetrain",
        label: "Tracción",
        value: "RWD",
      },
      {
        id: "fuel-tank-capacity",
        label: "Capacidad de tanque",
        value: "70 L",
      },
    ],
    safety: [
      "Cinturones de seguridad",
      "VSC",
      "ABS",
      "EBD",
      "TRC",
      "Airbags SRS",
    ],
  },
  {
    vehicleId: "toyota-tundra",
    features: [
      {
        id: "power",
        label: "Potencia",
        value: "389 HP",
      },
      {
        id: "gear-count",
        label: "Transmisión",
        value: "10 velocidades",
      },
    ],
    safety: [
      "Cámara de reversa",
      "Sensores de proximidad",
      "VSC",
      "TRAC",
      "ABS",
      "EBD",
      "BA",
      "Auto LSD",
      "Bolsas de aire SRS",
    ],
  },
  {
    vehicleId: "toyota-land-cruiser",
    features: [
      {
        id: "power",
        label: "Potencia",
        value: "130 HP",
      },
      {
        id: "gear-count",
        label: "Transmisión",
        value: "5 velocidades",
      },
      {
        id: "drivetrain",
        label: "Tracción",
        value: "4x4 (4H-4L)",
      },
      {
        id: "fuel-tank-capacity",
        label: "Capacidad de tanque",
        value: "90 L",
      },
    ],
    safety: [
      "Airbags SRS dobles delanteros",
      "ABS",
      "Frenos de disco delanteros",
      "Carrocería reforzada",
    ],
  },
  {
    vehicleId: "toyota-hilux-2-4",
    features: [
      {
        id: "power",
        label: "Potencia",
        value: "148 HP",
      },
      {
        id: "gear-count",
        label: "Transmisión",
        value: "6 velocidades",
      },
      {
        id: "drivetrain",
        label: "Tracción",
        value: "4x4",
      },
      {
        id: "fuel-tank-capacity",
        label: "Capacidad de tanque",
        value: "80 L",
      },
    ],
    safety: [
      "ABS",
      "VSC",
      "HAC",
      "A-TRC",
      "Bolsas de aire frontales y de rodilla",
    ],
  },
  {
    vehicleId: "toyota-hilux-2-8",
    features: [
      {
        id: "power",
        label: "Potencia",
        value: "201 HP",
      },
      {
        id: "gear-count",
        label: "Transmisión",
        value: "6 velocidades",
      },
      {
        id: "drivetrain",
        label: "Tracción",
        value: "4x4",
      },
      {
        id: "fuel-tank-capacity",
        label: "Capacidad de tanque",
        value: "80 L",
      },
    ],
    safety: [
      "Bolsas de aire frontales y de rodilla",
      "Cinturones de seguridad de 3 puntos",
      "Chasís reforzado",
      "A-TRC",
    ],
  },
];
