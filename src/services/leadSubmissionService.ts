const endpoint = "https://script.google.com/macros/s/AKfycbzYkZG_ESlKGwJbpHS_Omzbcbt6UW-X7efYSRIe4IGqj7azuzJSJU0Zq9b_xsCnGM4udw/exec";

type SubmissionMetadata = {
  dispositivo: "Escritorio" | "Móvil" | "Tablet";
  navegador: string;
  sistemaOperativo: string;
  viewport: string;
  paginaOrigen: string;
};

type VehicleLead = {
  solicitud: string;
  vehiculo: string;
  transmision: string;
  nombres: string;
  apellidos: string;
  telefono: string;
  correo: string;
  cedula: string;
  intencionCompra: string;
  sucursal: string;
};

type ContactLead = {
  sucursal: string;
  vehiculo: string;
  transmision: string;
  nombres: string;
  apellidos: string;
  telefono: string;
  correo: string;
  mensaje: string;
};

function browserName(userAgent: string) {
  if (/edg/i.test(userAgent)) return "Edge";
  if (/opr|opera/i.test(userAgent)) return "Opera";
  if (/firefox/i.test(userAgent)) return "Firefox";
  if (/chrome|chromium/i.test(userAgent)) return "Chrome";
  if (/safari/i.test(userAgent)) return "Safari";
  return "Desconocido";
}

function operatingSystem(userAgent: string) {
  if (/android/i.test(userAgent)) return "Android";
  if (/iphone|ipad|ipod/i.test(userAgent)) return "iOS";
  if (/windows/i.test(userAgent)) return "Windows";
  if (/mac os/i.test(userAgent)) return "macOS";
  if (/linux/i.test(userAgent)) return "Linux";
  return "Desconocido";
}

function deviceType(userAgent: string): SubmissionMetadata["dispositivo"] {
  if (/ipad|tablet/i.test(userAgent) || (/android/i.test(userAgent) && !/mobile/i.test(userAgent))) return "Tablet";
  if (/mobi|iphone|ipod|android/i.test(userAgent) || window.innerWidth <= 760) return "Móvil";
  return "Escritorio";
}

function metadata(): SubmissionMetadata {
  const userAgent = navigator.userAgent;
  return {
    dispositivo: deviceType(userAgent),
    navegador: browserName(userAgent),
    sistemaOperativo: operatingSystem(userAgent),
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    paginaOrigen: window.location.pathname,
  };
}

async function submit(payload: Record<string, string>) {
  await fetch(endpoint, {
    method: "POST",
    mode: "no-cors",
    credentials: "omit",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(payload),
  });
}

export function submitVehicleLead(data: VehicleLead) {
  return submit({ requestType: "vehicle", ...data, ...metadata() });
}

export function submitContactLead(data: ContactLead) {
  return submit({ requestType: "contact", ...data, ...metadata() });
}
