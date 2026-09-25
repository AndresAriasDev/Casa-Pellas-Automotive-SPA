import type { VehicleDetailMedia } from "../../types/vehicle";
import hilux28Video from "../../assets/vehicles/pickup/hilux-2-8/video/hilux-2-8.mp4";
import hilux28blanco from "../../assets/vehicles/pickup/hilux-2-8/colors/camioneta-hilux-2-8-color-blanco-casa-pellas-nicaragua.webp";
import hilux28gris from "../../assets/vehicles/pickup/hilux-2-8/colors/camioneta-hilux-2-8-color-gris-casa-pellas-nicaragua.webp";
import hilux28negro from "../../assets/vehicles/pickup/hilux-2-8/colors/camioneta-hilux-2-8-color-negro-casa-pellas-nicaragua.webp";
import hilux28plata from "../../assets/vehicles/pickup/hilux-2-8/colors/camioneta-hilux-2-8-color-plata-casa-pellas-nicaragua.webp";
import hilux28rojo from "../../assets/vehicles/pickup/hilux-2-8/colors/camioneta-hilux-2-8-color-rojo-casa-pellas-nicaragua.webp";
import hilux28Gallery1 from "../../assets/vehicles/pickup/hilux-2-8/gallery/hilux-202013.webp";
import hilux28Gallery2 from "../../assets/vehicles/pickup/hilux-2-8/gallery/HILUX-2_8-TOYOTACP-2.webp";
import hilux28Gallery3 from "../../assets/vehicles/pickup/hilux-2-8/gallery/HILUX-2_8-TOYOTACP-6.webp";
import hilux28Gallery4 from "../../assets/vehicles/pickup/hilux-2-8/gallery/HILUX-2_8-TOYOTACP-8.webp";
import hilux28Gallery5 from "../../assets/vehicles/pickup/hilux-2-8/gallery/HILUX-2_8-TOYOTACP-12.webp";
import hilux28Gallery6 from "../../assets/vehicles/pickup/hilux-2-8/gallery/HILUX-2_8-TOYOTACP-23.webp";
import hilux28Gallery7 from "../../assets/vehicles/pickup/hilux-2-8/gallery/HILUX-2_8-TOYOTACP-24.webp";
import hilux28Gallery8 from "../../assets/vehicles/pickup/hilux-2-8/gallery/HILUX-2_8-TOYOTACP-25.webp";
import hilux28Gallery9 from "../../assets/vehicles/pickup/hilux-2-8/gallery/HILUX-2_8-TOYOTACP-29.webp";

export const detailMedia: VehicleDetailMedia = {
  colors: [
    {
      id: "blanco",
      name: "Blanco",
      image: {
        src: hilux28blanco,
        alt: "Toyota Hilux 2.8 en color blanco",
      },
    },
    {
      id: "gris",
      name: "Gris",
      image: {
        src: hilux28gris,
        alt: "Toyota Hilux 2.8 en color gris",
      },
    },
    {
      id: "negro",
      name: "Negro",
      image: {
        src: hilux28negro,
        alt: "Toyota Hilux 2.8 en color negro",
      },
    },
    {
      id: "plata",
      name: "Plata",
      image: {
        src: hilux28plata,
        alt: "Toyota Hilux 2.8 en color plata",
      },
    },
    {
      id: "rojo",
      name: "Rojo",
      image: {
        src: hilux28rojo,
        alt: "Toyota Hilux 2.8 en color rojo",
      },
    },
  ],
  gallery: [
    { src: hilux28Gallery1, alt: "Toyota Hilux 2.8, vista 1 de la galerÃ­a" },
    { src: hilux28Gallery2, alt: "Toyota Hilux 2.8, vista 2 de la galerÃ­a" },
    { src: hilux28Gallery3, alt: "Toyota Hilux 2.8, vista 3 de la galerÃ­a" },
    { src: hilux28Gallery4, alt: "Toyota Hilux 2.8, vista 4 de la galerÃ­a" },
    { src: hilux28Gallery5, alt: "Toyota Hilux 2.8, vista 5 de la galerÃ­a" },
    { src: hilux28Gallery6, alt: "Toyota Hilux 2.8, vista 6 de la galerÃ­a" },
    { src: hilux28Gallery7, alt: "Toyota Hilux 2.8, vista 7 de la galerÃ­a" },
    { src: hilux28Gallery8, alt: "Toyota Hilux 2.8, vista 8 de la galerÃ­a" },
    { src: hilux28Gallery9, alt: "Toyota Hilux 2.8, vista 9 de la galerÃ­a" },
  ],
  video: {
    src: hilux28Video,
    title: "PresentaciÃ³n de la Toyota Hilux 2.8 de Casa Pellas",
  },
};
