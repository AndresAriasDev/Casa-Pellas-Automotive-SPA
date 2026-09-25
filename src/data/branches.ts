export interface Branch {
  id: string;
  name: string;
  address: string;
  phones: string[];
  latitude?: number;
  longitude?: number;
}

export const branches: Branch[] = [
  {
    id: "chinandega",
    name: "Sucursal Chinandega",
    address: "Esquina opuesta al supermercado La Colonia. Chinandega, Nic.",
    phones: ["2341-1431", "2341-2325"],
    latitude: 12.63108,
    longitude: -87.12189,
  },
  {
    id: "leon",
    name: "Sucursal León",
    address: "Antigua Shell Sn. Sebastián 50 mts. al sur. León, Nic.",
    phones: ["2311-6446", "2311-2174", "2311-0670"],
    latitude: 12.43124,
    longitude: -86.8782,
  },
  {
    id: "managua-acahualinca",
    name: "Sucursal Acahualinca",
    address: "De donde fue el edificio Gadala María 300m. al oeste. Managua, Nic.",
    phones: ["2255-8555"],
    latitude: 12.158601251580448,
    longitude: -86.30007607507896,
  },
  {
    id: "managua-plaza-espana",
    name: "Plaza España Autos Nuevos",
    address: "De la rotonda el Güegüense 350m. al sur. Managua, Nic.",
    phones: ["2255-4444"],
    latitude: 12.13002,
    longitude: -86.28116,
  },
  {
    id: "juigalpa",
    name: "Sucursal Juigalpa",
    address: "Del mercado viejo, 3 cuadras y media al norte.",
    phones: ["2512-1323"],
    latitude: 12.09054061860385,
    longitude: -85.34445343459352,
  },
  {
    id: "matagalpa",
    name: "Sucursal Matagalpa",
    address: "Claro central 1 C al sur. Matagalpa, Nic.",
    phones: ["2713-3060", "2713-3206"],
    latitude: 12.9278,
    longitude: -85.91733,
  },
  {
    id: "esteli",
    name: "Sucursal Estelí",
    address: "Km. 148 sobre carretera Panamericana. Estelí, Nic.",
    phones: ["2713-3060", "2713-3206"],
    latitude: 13.08964,
    longitude: -86.35131,
  },
  {
    id: "puerto-cabezas-bilwi",
    name: "Sucursal Puerto Cabezas",
    address: "Barrio Libertad, de Enel 1 c. al norte. Puerto Cabezas, Nic.",
    phones: ["2792-2677"],
    latitude: 14.02571,
    longitude: -83.38477,
  },
];
