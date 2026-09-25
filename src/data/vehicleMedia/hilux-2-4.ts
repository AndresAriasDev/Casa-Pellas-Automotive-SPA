import type { VehicleDetailMedia } from "../../types/vehicle";
import hero from "../../assets/vehicles/pickup/hilux-2-4/hero/img-toyota-portada-2-4.png";
import logo from "../../assets/vehicles/pickup/hilux-2-4/logo/logo-hilux-2-4.webp";
import blanco from "../../assets/vehicles/pickup/hilux-2-4/colors/camioneta-hilux-2-4-color-blanco-casa-pellas-nicaragua.webp";
import gris from "../../assets/vehicles/pickup/hilux-2-4/colors/camioneta-hilux-2-4-color-gris-casa-pellas-nicaragua.webp";
import negro from "../../assets/vehicles/pickup/hilux-2-4/colors/camioneta-hilux-2-4-color-negro-casa-pellas-nicaragua.webp";
import plata from "../../assets/vehicles/pickup/hilux-2-4/colors/camioneta-hilux-2-4-color-plata-casa-pellas-nicaragua.webp";
import rojo from "../../assets/vehicles/pickup/hilux-2-4/colors/camioneta-hilux-2-4-color-rojo-casa-pellas-nicaragua.webp";
import exterior1 from "../../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-4x4-img-01.webp";
import exterior2 from "../../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-4x4-img-02.webp";
import exterior3 from "../../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-4x4-img-03.webp";
import exterior4 from "../../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-4x4-img-04.webp";
import exterior5 from "../../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-4x4-img-05.webp";
import exterior6 from "../../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-4x4-img-06.webp";
import exterior7 from "../../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-4x4-img-07.webp";
import exterior8 from "../../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-4x4-img-08.webp";
import interior1 from "../../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-interior-01.webp";
import interior2 from "../../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-interior-02.webp";
import interior3 from "../../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-interior-03.webp";
import interior4 from "../../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-interior-04.webp";
import interior5 from "../../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-interior-05.webp";
import interior6 from "../../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-interior-06.webp";
import interior7 from "../../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-interior-07.webp";
import interior8 from "../../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-interior-08.webp";
import interior9 from "../../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-interior-09.webp";
import video from "../../assets/vehicles/pickup/hilux-2-4/video/CASA-PELLAS_TOYOTA-HILUX-V1_1.mp4";

export const detailMedia: VehicleDetailMedia = {
  hero: {
    src: hero,
    alt: "Toyota Hilux 2.4 en color blanco",
  },
  logo: {
    src: logo,
    alt: "Logo del modelo Toyota Hilux 2.4",
  },
  colors: [
    {
      id: "blanco",
      name: "Blanco",
      image: {
        src: blanco,
        alt: "Toyota Hilux 2.4 en color blanco",
      },
    },
    {
      id: "gris",
      name: "Gris",
      image: {
        src: gris,
        alt: "Toyota Hilux 2.4 en color gris",
      },
    },
    {
      id: "negro",
      name: "Negro",
      image: {
        src: negro,
        alt: "Toyota Hilux 2.4 en color negro",
      },
    },
    {
      id: "plata",
      name: "Plata",
      image: {
        src: plata,
        alt: "Toyota Hilux 2.4 en color plata",
      },
    },
    {
      id: "rojo",
      name: "Rojo",
      image: {
        src: rojo,
        alt: "Toyota Hilux 2.4 en color rojo",
      },
    },
  ],
  gallery: [
    { src: exterior1, alt: "Toyota Hilux 2.4 4x4, vista 1 de la galerÃ­a" },
    { src: exterior2, alt: "Toyota Hilux 2.4 4x4, vista 2 de la galerÃ­a" },
    { src: exterior3, alt: "Toyota Hilux 2.4 4x4, vista 3 de la galerÃ­a" },
    { src: exterior4, alt: "Toyota Hilux 2.4 4x4, vista 4 de la galerÃ­a" },
    { src: exterior5, alt: "Toyota Hilux 2.4 4x4, vista 5 de la galerÃ­a" },
    { src: exterior6, alt: "Toyota Hilux 2.4 4x4, vista 6 de la galerÃ­a" },
    { src: exterior7, alt: "Toyota Hilux 2.4 4x4, vista 7 de la galerÃ­a" },
    { src: exterior8, alt: "Toyota Hilux 2.4 4x4, vista 8 de la galerÃ­a" },
    { src: interior1, alt: "Interior de la Toyota Hilux 2.4, vista 1" },
    { src: interior2, alt: "Interior de la Toyota Hilux 2.4, vista 2" },
    { src: interior3, alt: "Interior de la Toyota Hilux 2.4, vista 3" },
    { src: interior4, alt: "Interior de la Toyota Hilux 2.4, vista 4" },
    { src: interior5, alt: "Interior de la Toyota Hilux 2.4, vista 5" },
    { src: interior6, alt: "Interior de la Toyota Hilux 2.4, vista 6" },
    { src: interior7, alt: "Interior de la Toyota Hilux 2.4, vista 7" },
    { src: interior8, alt: "Interior de la Toyota Hilux 2.4, vista 8" },
    { src: interior9, alt: "Interior de la Toyota Hilux 2.4, vista 9" },
  ],
  video: {
    src: video,
    title: "PresentaciÃ³n de la Toyota Hilux 2.4 de Casa Pellas",
  },
};
