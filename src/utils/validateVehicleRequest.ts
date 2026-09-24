import type { VehicleRequest } from "../types/lead";

export type VehicleRequestFormData = Omit<VehicleRequest, "requestType"> & {
  requestType: string;
  lastName: string;
  phonePrefix: string;
  identityDocument: string;
  purchaseTime: string;
  branch: string;
};

export const purchaseTimes = ["En los próximos 30 días", "Dentro de 1 a 3 meses", "Dentro de 3 a 6 meses", "Aún no estoy seguro de comprar"];
export const branches = ["Managua", "Jinotega", "Matagalpa", "Juigalpa", "Estelí", "León", "Chinandega", "Puerto Cabezas"];
export const requestFields = ["requestType", "name", "lastName", "phone", "email", "identityDocument", "purchaseTime", "branch"] as const;
export type RequestField = typeof requestFields[number];
export type RequestErrors = Partial<Record<RequestField, string>>;

export function validateVehicleRequest(data: VehicleRequestFormData): RequestErrors {
  const errors: RequestErrors = {};
  if (!["Cotización", "Prueba de manejo"].includes(data.requestType)) errors.requestType = "Selecciona el tipo de solicitud.";

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

  const document = data.identityDocument.trim().toUpperCase();
  const compact = document.replace(/[\s-]/g, "");
  // Recognize the Nicaraguan layout, without inferring nationality from the phone prefix.
  const nicaraguan = /^\d{13}[A-Z]$/.test(compact);
  const nicaraguanLayout = /^\d{3}[\s-]+\d{6}[\s-]+/.test(document) || /^\d{13}[A-Z]*$/.test(compact);
  if (!document) errors.identityDocument = "Ingresa tu documento de identidad.";
  else if (nicaraguanLayout && !nicaraguan) errors.identityDocument = "Revisa el formato de la cédula: 000-000000-0000A.";
  else if (!nicaraguan && (document.length < 5 || document.length > 30 || !/\d/.test(document) || !/^[A-Z0-9]+(?:[ ./-][A-Z0-9]+)*$/.test(document) || /^([A-Z0-9])\1+$/.test(document.replace(/[ ./-]/g, "")))) errors.identityDocument = "Usa entre 5 y 30 caracteres e incluye números. Se permiten letras y separadores comunes.";

  if (!purchaseTimes.includes(data.purchaseTime)) errors.purchaseTime = "Selecciona cuándo deseas comprar.";
  if (!branches.includes(data.branch)) errors.branch = "Selecciona una sucursal.";
  return errors;
}
