import { branches } from "../data/branches";
import type { Vehicle } from "../types/vehicle";
import type { ContactRequest } from "../types/contact";

export type ContactField = keyof Omit<ContactRequest, "message" | "phonePrefix">;
export type ContactErrors = Partial<Record<ContactField, string>>;

export function validateContactRequest(data: ContactRequest, vehicles: Vehicle[]): ContactErrors {
  const errors: ContactErrors = {};
  if (!branches.some((branch) => branch.id === data.branchId)) errors.branchId = "Selecciona una sucursal.";
  const vehicle = vehicles.find((item) => item.id === data.vehicleId);
  if (!vehicle) errors.vehicleId = "Selecciona un vehículo de interés.";
  else if (vehicle.transmissions.length > 0 && !vehicle.transmissions.includes(data.transmission as Vehicle["transmissions"][number])) errors.transmission = "Selecciona una transmisión.";

  for (const field of ["name", "lastName"] as const) {
    const value = data[field].trim().normalize("NFC");
    if (!value) errors[field] = field === "name" ? "Ingresa tus nombres." : "Ingresa tus apellidos.";
    else if (value.length < 2 || value.length > 80) errors[field] = "Usa entre 2 y 80 caracteres.";
    else if (!/^[\p{L}\p{M}]+(?:[ '\u2019-][\p{L}\p{M}]+)*$/u.test(value)) errors[field] = "Usa letras, espacios, apóstrofes o guiones, sin números.";
  }

  const email = data.email.trim();
  if (!email) errors.email = "Ingresa tu correo electrónico.";
  else if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Ingresa un correo válido.";

  const phone = data.phone.trim();
  const digits = phone.replace(/[\s()-]/g, "");
  const length = data.phonePrefix === "+505" ? 8 : 10;
  if (!phone) errors.phone = "Ingresa tu número de teléfono.";
  else if (!["+505", "+1"].includes(data.phonePrefix) || !/^\d+$/.test(digits) || digits.length !== length) errors.phone = `Ingresa ${length} dígitos, sin repetir el código de país.`;
  return errors;
}
