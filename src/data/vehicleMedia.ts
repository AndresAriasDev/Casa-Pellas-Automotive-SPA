import type { VehicleMedia } from "../types/vehicle";
import hiaceHero from "../assets/vehicles/comercial/hiace/hero/hiace-portada-banner.png";
import hiaceLogo from "../assets/vehicles/comercial/hiace/logo/logo-hiace.webp";
import hiaceVideo from "../assets/vehicles/comercial/hiace/video/HIACE-WEB.mp4";
import hiaceGallery1 from "../assets/vehicles/comercial/hiace/gallery/HIACE_BUS-ToyotaCP-1.webp";
import hiaceGallery2 from "../assets/vehicles/comercial/hiace/gallery/HIACE_BUS-ToyotaCP-2.webp";
import hiaceGallery3 from "../assets/vehicles/comercial/hiace/gallery/HIACE_BUS-ToyotaCP-5.webp";
import hiaceGallery4 from "../assets/vehicles/comercial/hiace/gallery/HIACE_BUS-ToyotaCP-8.webp";
import hiaceGallery5 from "../assets/vehicles/comercial/hiace/gallery/HIACE_BUS-ToyotaCP-10.webp";
import hiaceGallery6 from "../assets/vehicles/comercial/hiace/gallery/HIACE_BUS-ToyotaCP-13.webp";
import hiaceGallery7 from "../assets/vehicles/comercial/hiace/gallery/HIACE_BUS-ToyotaCP-14.webp";
import hiaceGallery8 from "../assets/vehicles/comercial/hiace/gallery/HIACE_BUS-ToyotaCP-16.webp";
import hiaceGallery9 from "../assets/vehicles/comercial/hiace/gallery/HIACE_BUS-ToyotaCP-18.webp";
import hiaceGallery10 from "../assets/vehicles/comercial/hiace/gallery/HIACE_BUS-ToyotaCP-21.webp";
import hiaceGallery11 from "../assets/vehicles/comercial/hiace/gallery/HIACE_BUS-ToyotaCP-24.webp";
import hiaceGallery12 from "../assets/vehicles/comercial/hiace/gallery/HIACE_BUS-ToyotaCP-25.webp";
import hiaceColor1 from "../assets/vehicles/comercial/hiace/colors/hiace-portada.png";
import fortunerHero from "../assets/vehicles/suv/fortuner/hero/camioneta-fortuner-portada-banner.png";
import fortunerLogo from "../assets/vehicles/suv/fortuner/logo/recurso-26@2x.webp";
import fortunerVideo from "../assets/vehicles/suv/fortuner/video/toyota-fortuner-video.mp4";
import fortunerGallery1 from "../assets/vehicles/suv/fortuner/gallery/Fortuner-Toyota-CP-1.webp";
import fortunerGallery2 from "../assets/vehicles/suv/fortuner/gallery/Fortuner-Toyota-CP-2.webp";
import fortunerGallery3 from "../assets/vehicles/suv/fortuner/gallery/Fortuner-Toyota-CP-3.webp";
import fortunerGallery4 from "../assets/vehicles/suv/fortuner/gallery/Fortuner-Toyota-CP-5.webp";
import fortunerGallery5 from "../assets/vehicles/suv/fortuner/gallery/Fortuner-Toyota-CP-6.webp";
import fortunerGallery6 from "../assets/vehicles/suv/fortuner/gallery/Fortuner-Toyota-CP-7.webp";
import fortunerGallery7 from "../assets/vehicles/suv/fortuner/gallery/Fortuner-Toyota-CP-8-1.webp";
import fortunerGallery8 from "../assets/vehicles/suv/fortuner/gallery/Fortuner-Toyota-CP-9.webp";
import fortunerGallery9 from "../assets/vehicles/suv/fortuner/gallery/Fortuner-Toyota-CP-10.webp";
import fortunerGallery10 from "../assets/vehicles/suv/fortuner/gallery/Fortuner-Toyota-CP-11-1.webp";
import fortunerGallery11 from "../assets/vehicles/suv/fortuner/gallery/Fortuner-Toyota-CP-16.webp";
import fortunerGallery12 from "../assets/vehicles/suv/fortuner/gallery/Fortuner-Toyota-CP-19.webp";
import fortunerColor1 from "../assets/vehicles/suv/fortuner/colors/fortuner-toyota-super-blanco-color.webp";
import fortunerColor2 from "../assets/vehicles/suv/fortuner/colors/fortuner-toyota-plata-me-color.webp";
import fortunerColor3 from "../assets/vehicles/suv/fortuner/colors/fortuner-toyota-gris-me-color.webp";
import fortunerColor4 from "../assets/vehicles/suv/fortuner/colors/fortuner-toyota-blanco-perla-color.webp";

export const hiaceMedia: VehicleMedia = {
  hero: { src: hiaceHero, alt: "Toyota Hiace, imagen principal" },
  logo: { src: hiaceLogo, alt: "Logo del modelo Toyota Hiace" },
  colors: [
    { id: "disponible", name: "Color disponible", image: { src: hiaceColor1, alt: "Toyota Hiace, color disponible" } },
  ],
  gallery: [
    { src: hiaceGallery1, alt: "Toyota Hiace, imagen 1 de la galería" },
    { src: hiaceGallery2, alt: "Toyota Hiace, imagen 2 de la galería" },
    { src: hiaceGallery3, alt: "Toyota Hiace, imagen 3 de la galería" },
    { src: hiaceGallery4, alt: "Toyota Hiace, imagen 4 de la galería" },
    { src: hiaceGallery5, alt: "Toyota Hiace, imagen 5 de la galería" },
    { src: hiaceGallery6, alt: "Toyota Hiace, imagen 6 de la galería" },
    { src: hiaceGallery7, alt: "Toyota Hiace, imagen 7 de la galería" },
    { src: hiaceGallery8, alt: "Toyota Hiace, imagen 8 de la galería" },
    { src: hiaceGallery9, alt: "Toyota Hiace, imagen 9 de la galería" },
    { src: hiaceGallery10, alt: "Toyota Hiace, imagen 10 de la galería" },
    { src: hiaceGallery11, alt: "Toyota Hiace, imagen 11 de la galería" },
    { src: hiaceGallery12, alt: "Toyota Hiace, imagen 12 de la galería" },
  ],
  video: { src: hiaceVideo, title: "Presentación de la Toyota Hiace" },
};

export const fortunerMedia: VehicleMedia = {
  hero: { src: fortunerHero, alt: "Toyota Fortuner, imagen principal" },
  logo: { src: fortunerLogo, alt: "Logo del modelo Toyota Fortuner" },
  colors: [
    { id: "super-blanco", name: "Súper blanco", image: { src: fortunerColor1, alt: "Toyota Fortuner, súper blanco" } },
    { id: "plata", name: "Plata", image: { src: fortunerColor2, alt: "Toyota Fortuner, plata" } },
    { id: "gris", name: "Gris", image: { src: fortunerColor3, alt: "Toyota Fortuner, gris" } },
    { id: "blanco-perla", name: "Blanco perla", image: { src: fortunerColor4, alt: "Toyota Fortuner, blanco perla" } },
  ],
  gallery: [
    { src: fortunerGallery1, alt: "Toyota Fortuner, imagen 1 de la galería" },
    { src: fortunerGallery2, alt: "Toyota Fortuner, imagen 2 de la galería" },
    { src: fortunerGallery3, alt: "Toyota Fortuner, imagen 3 de la galería" },
    { src: fortunerGallery4, alt: "Toyota Fortuner, imagen 4 de la galería" },
    { src: fortunerGallery5, alt: "Toyota Fortuner, imagen 5 de la galería" },
    { src: fortunerGallery6, alt: "Toyota Fortuner, imagen 6 de la galería" },
    { src: fortunerGallery7, alt: "Toyota Fortuner, imagen 7 de la galería" },
    { src: fortunerGallery8, alt: "Toyota Fortuner, imagen 8 de la galería" },
    { src: fortunerGallery9, alt: "Toyota Fortuner, imagen 9 de la galería" },
    { src: fortunerGallery10, alt: "Toyota Fortuner, imagen 10 de la galería" },
    { src: fortunerGallery11, alt: "Toyota Fortuner, imagen 11 de la galería" },
    { src: fortunerGallery12, alt: "Toyota Fortuner, imagen 12 de la galería" },
  ],
  video: { src: fortunerVideo, title: "Presentación de la Toyota Fortuner" },
};
import tundraHero from "../assets/vehicles/pickup/tundra/hero/toyota-tundra-portada-banner.webp";
import tundraLogo from "../assets/vehicles/pickup/tundra/logo/logo-tundra.webp";
import tundraVideo from "../assets/vehicles/pickup/tundra/video/tundra-toyota-hd_2_1.mp4";
import tundraGallery1 from "../assets/vehicles/pickup/tundra/gallery/tundra-toyota-cp-2.webp";
import tundraGallery2 from "../assets/vehicles/pickup/tundra/gallery/tundra-toyota-cp-6.webp";
import tundraGallery3 from "../assets/vehicles/pickup/tundra/gallery/tundra-toyota-cp-8.webp";
import tundraGallery4 from "../assets/vehicles/pickup/tundra/gallery/tundra-toyota-cp-9.webp";
import tundraGallery5 from "../assets/vehicles/pickup/tundra/gallery/tundra-toyota-cp-10.webp";
import tundraGallery6 from "../assets/vehicles/pickup/tundra/gallery/tundra-toyota-cp-12.webp";
import tundraGallery7 from "../assets/vehicles/pickup/tundra/gallery/tundra-toyota-cp-19.webp";
import tundraGallery8 from "../assets/vehicles/pickup/tundra/gallery/tundra-toyota-cp-22 (1).webp";
import tundraGallery9 from "../assets/vehicles/pickup/tundra/gallery/tundra-toyota-cp-24.webp";
import tundraGallery10 from "../assets/vehicles/pickup/tundra/gallery/tundra-toyota-cp-26.webp";
import landCruiserHero from "../assets/vehicles/pickup/land-cruiser/hero/land-cruiser-portada-banner.png";
import landCruiserLogo from "../assets/vehicles/pickup/land-cruiser/logo/logo-landcruiser.webp";
import landCruiserVideo from "../assets/vehicles/pickup/land-cruiser/video/LAND-CRUSER-PAEA-WEB.mp4";
import landCruiserGallery1 from "../assets/vehicles/pickup/land-cruiser/gallery/LC-CS-Toyota-CASAPELLAS-1.webp";
import landCruiserGallery2 from "../assets/vehicles/pickup/land-cruiser/gallery/LC-CS-Toyota-CASAPELLAS-4.webp";
import landCruiserGallery3 from "../assets/vehicles/pickup/land-cruiser/gallery/LC-CS-Toyota-CASAPELLAS-5.webp";
import landCruiserGallery4 from "../assets/vehicles/pickup/land-cruiser/gallery/LC-CS-Toyota-CASAPELLAS-6.webp";
import landCruiserGallery5 from "../assets/vehicles/pickup/land-cruiser/gallery/LC-CS-Toyota-CASAPELLAS-7.webp";
import landCruiserGallery6 from "../assets/vehicles/pickup/land-cruiser/gallery/LC-CS-Toyota-CASAPELLAS-8.webp";
import landCruiserGallery7 from "../assets/vehicles/pickup/land-cruiser/gallery/LC-CS-Toyota-CASAPELLAS-9.webp";
import landCruiserGallery8 from "../assets/vehicles/pickup/land-cruiser/gallery/LC-CS-Toyota-CASAPELLAS-13.webp";
import landCruiserGallery9 from "../assets/vehicles/pickup/land-cruiser/gallery/LC-CS-Toyota-CASAPELLAS-23.webp";
import landCruiserGallery10 from "../assets/vehicles/pickup/land-cruiser/gallery/lc-dc-jul25-1.webp";
import landCruiserGallery11 from "../assets/vehicles/pickup/land-cruiser/gallery/lc-dc-jul25-3.webp";
import landCruiserGallery12 from "../assets/vehicles/pickup/land-cruiser/gallery/lc-dc-jul25-5.webp";

export const tundraMedia: VehicleMedia = {
  hero: { src: tundraHero, alt: "Toyota Tundra, imagen principal" },
  logo: { src: tundraLogo, alt: "Logo del modelo Toyota Tundra" },
  gallery: [
    { src: tundraGallery1, alt: "Toyota Tundra, imagen 1 de la galería" },
    { src: tundraGallery2, alt: "Toyota Tundra, imagen 2 de la galería" },
    { src: tundraGallery3, alt: "Toyota Tundra, imagen 3 de la galería" },
    { src: tundraGallery4, alt: "Toyota Tundra, imagen 4 de la galería" },
    { src: tundraGallery5, alt: "Toyota Tundra, imagen 5 de la galería" },
    { src: tundraGallery6, alt: "Toyota Tundra, imagen 6 de la galería" },
    { src: tundraGallery7, alt: "Toyota Tundra, imagen 7 de la galería" },
    { src: tundraGallery8, alt: "Toyota Tundra, imagen 8 de la galería" },
    { src: tundraGallery9, alt: "Toyota Tundra, imagen 9 de la galería" },
    { src: tundraGallery10, alt: "Toyota Tundra, imagen 10 de la galería" },
  ],
  video: { src: tundraVideo, title: "Presentación de la Toyota Tundra" },
};

export const landCruiserMedia: VehicleMedia = {
  hero: { src: landCruiserHero, alt: "Toyota Land Cruiser, imagen principal" },
  logo: { src: landCruiserLogo, alt: "Logo del modelo Toyota Land Cruiser" },
  gallery: [
    { src: landCruiserGallery1, alt: "Toyota Land Cruiser, imagen 1 de la galería" },
    { src: landCruiserGallery2, alt: "Toyota Land Cruiser, imagen 2 de la galería" },
    { src: landCruiserGallery3, alt: "Toyota Land Cruiser, imagen 3 de la galería" },
    { src: landCruiserGallery4, alt: "Toyota Land Cruiser, imagen 4 de la galería" },
    { src: landCruiserGallery5, alt: "Toyota Land Cruiser, imagen 5 de la galería" },
    { src: landCruiserGallery6, alt: "Toyota Land Cruiser, imagen 6 de la galería" },
    { src: landCruiserGallery7, alt: "Toyota Land Cruiser, imagen 7 de la galería" },
    { src: landCruiserGallery8, alt: "Toyota Land Cruiser, imagen 8 de la galería" },
    { src: landCruiserGallery9, alt: "Toyota Land Cruiser, imagen 9 de la galería" },
    { src: landCruiserGallery10, alt: "Toyota Land Cruiser, imagen 10 de la galería" },
    { src: landCruiserGallery11, alt: "Toyota Land Cruiser, imagen 11 de la galería" },
    { src: landCruiserGallery12, alt: "Toyota Land Cruiser, imagen 12 de la galería" },
  ],
  video: { src: landCruiserVideo, title: "Presentación de la Toyota Land Cruiser" },
};

import hero from "../assets/vehicles/pickup/hilux-2-4/hero/img-toyota-portada-2-4.png";
import logo from "../assets/vehicles/pickup/hilux-2-4/logo/logo-hilux-2-4.webp";
import blanco from "../assets/vehicles/pickup/hilux-2-4/colors/camioneta-hilux-2-4-color-blanco-casa-pellas-nicaragua.webp";
import gris from "../assets/vehicles/pickup/hilux-2-4/colors/camioneta-hilux-2-4-color-gris-casa-pellas-nicaragua.webp";
import negro from "../assets/vehicles/pickup/hilux-2-4/colors/camioneta-hilux-2-4-color-negro-casa-pellas-nicaragua.webp";
import plata from "../assets/vehicles/pickup/hilux-2-4/colors/camioneta-hilux-2-4-color-plata-casa-pellas-nicaragua.webp";
import rojo from "../assets/vehicles/pickup/hilux-2-4/colors/camioneta-hilux-2-4-color-rojo-casa-pellas-nicaragua.webp";
import exterior1 from "../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-4x4-img-01.webp";
import exterior2 from "../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-4x4-img-02.webp";
import exterior3 from "../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-4x4-img-03.webp";
import exterior4 from "../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-4x4-img-04.webp";
import exterior5 from "../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-4x4-img-05.webp";
import exterior6 from "../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-4x4-img-06.webp";
import exterior7 from "../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-4x4-img-07.webp";
import exterior8 from "../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-4x4-img-08.webp";
import interior1 from "../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-interior-01.webp";
import interior2 from "../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-interior-02.webp";
import interior3 from "../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-interior-03.webp";
import interior4 from "../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-interior-04.webp";
import interior5 from "../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-interior-05.webp";
import interior6 from "../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-interior-06.webp";
import interior7 from "../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-interior-07.webp";
import interior8 from "../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-interior-08.webp";
import interior9 from "../assets/vehicles/pickup/hilux-2-4/gallery/camioneta-hilux-2-4-interior-09.webp";
import video from "../assets/vehicles/pickup/hilux-2-4/video/CASA-PELLAS_TOYOTA-HILUX-V1_1.mp4";

import hilux28Hero from "../assets/vehicles/pickup/hilux-2-8/hero/img-toyota-portada-2-8.png";
import hilux28Logo from "../assets/vehicles/pickup/hilux-2-8/logo/logo-hulux-2-8.webp";
import hilux28Video from "../assets/vehicles/pickup/hilux-2-8/video/hilux-2-8.mp4";
import hilux28blanco from "../assets/vehicles/pickup/hilux-2-8/colors/camioneta-hilux-2-8-color-blanco-casa-pellas-nicaragua.webp";
import hilux28gris from "../assets/vehicles/pickup/hilux-2-8/colors/camioneta-hilux-2-8-color-gris-casa-pellas-nicaragua.webp";
import hilux28negro from "../assets/vehicles/pickup/hilux-2-8/colors/camioneta-hilux-2-8-color-negro-casa-pellas-nicaragua.webp";
import hilux28plata from "../assets/vehicles/pickup/hilux-2-8/colors/camioneta-hilux-2-8-color-plata-casa-pellas-nicaragua.webp";
import hilux28rojo from "../assets/vehicles/pickup/hilux-2-8/colors/camioneta-hilux-2-8-color-rojo-casa-pellas-nicaragua.webp";
import hilux28Gallery1 from "../assets/vehicles/pickup/hilux-2-8/gallery/hilux-202013.webp";
import hilux28Gallery2 from "../assets/vehicles/pickup/hilux-2-8/gallery/HILUX-2_8-TOYOTACP-2.webp";
import hilux28Gallery3 from "../assets/vehicles/pickup/hilux-2-8/gallery/HILUX-2_8-TOYOTACP-6.webp";
import hilux28Gallery4 from "../assets/vehicles/pickup/hilux-2-8/gallery/HILUX-2_8-TOYOTACP-8.webp";
import hilux28Gallery5 from "../assets/vehicles/pickup/hilux-2-8/gallery/HILUX-2_8-TOYOTACP-12.webp";
import hilux28Gallery6 from "../assets/vehicles/pickup/hilux-2-8/gallery/HILUX-2_8-TOYOTACP-23.webp";
import hilux28Gallery7 from "../assets/vehicles/pickup/hilux-2-8/gallery/HILUX-2_8-TOYOTACP-24.webp";
import hilux28Gallery8 from "../assets/vehicles/pickup/hilux-2-8/gallery/HILUX-2_8-TOYOTACP-25.webp";
import hilux28Gallery9 from "../assets/vehicles/pickup/hilux-2-8/gallery/HILUX-2_8-TOYOTACP-29.webp";
import hiluxGrHero from "../assets/vehicles/pickup/hilux-gr/hero/img-toyota-portada-gr.png";
import hiluxGrLogo from "../assets/vehicles/pickup/hilux-gr/logo/logo-hilux-gr.webp";
import hiluxGrVideo from "../assets/vehicles/pickup/hilux-gr/video/toyota-gr-casapellas.mp4";
import hiluxGrdisponible from "../assets/vehicles/pickup/hilux-gr/colors/img-toyota-portada-gr.jpg";
import hiluxGrGallery1 from "../assets/vehicles/pickup/hilux-gr/gallery/hilux-gr-sport-360-5-img-02.webp";
import hiluxGrGallery2 from "../assets/vehicles/pickup/hilux-gr/gallery/hilux-gr-sport-360-5-img-03.webp";
import hiluxGrGallery3 from "../assets/vehicles/pickup/hilux-gr/gallery/hilux-gr-sport-360-5-img-04.webp";
import hiluxGrGallery4 from "../assets/vehicles/pickup/hilux-gr/gallery/hilux-gr-sport-360-7-copy-copia.webp";

export const hilux24Media: VehicleMedia = {
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
    { src: exterior1, alt: "Toyota Hilux 2.4 4x4, vista 1 de la galería" },
    { src: exterior2, alt: "Toyota Hilux 2.4 4x4, vista 2 de la galería" },
    { src: exterior3, alt: "Toyota Hilux 2.4 4x4, vista 3 de la galería" },
    { src: exterior4, alt: "Toyota Hilux 2.4 4x4, vista 4 de la galería" },
    { src: exterior5, alt: "Toyota Hilux 2.4 4x4, vista 5 de la galería" },
    { src: exterior6, alt: "Toyota Hilux 2.4 4x4, vista 6 de la galería" },
    { src: exterior7, alt: "Toyota Hilux 2.4 4x4, vista 7 de la galería" },
    { src: exterior8, alt: "Toyota Hilux 2.4 4x4, vista 8 de la galería" },
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
    title: "Presentación de la Toyota Hilux 2.4 de Casa Pellas",
  },
};

export const hilux28Media: VehicleMedia = {
  hero: { src: hilux28Hero, alt: "Toyota Hilux 2.8, imagen principal" },
  logo: { src: hilux28Logo, alt: "Logo del modelo Toyota Hilux 2.8" },
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
    { src: hilux28Gallery1, alt: "Toyota Hilux 2.8, vista 1 de la galería" },
    { src: hilux28Gallery2, alt: "Toyota Hilux 2.8, vista 2 de la galería" },
    { src: hilux28Gallery3, alt: "Toyota Hilux 2.8, vista 3 de la galería" },
    { src: hilux28Gallery4, alt: "Toyota Hilux 2.8, vista 4 de la galería" },
    { src: hilux28Gallery5, alt: "Toyota Hilux 2.8, vista 5 de la galería" },
    { src: hilux28Gallery6, alt: "Toyota Hilux 2.8, vista 6 de la galería" },
    { src: hilux28Gallery7, alt: "Toyota Hilux 2.8, vista 7 de la galería" },
    { src: hilux28Gallery8, alt: "Toyota Hilux 2.8, vista 8 de la galería" },
    { src: hilux28Gallery9, alt: "Toyota Hilux 2.8, vista 9 de la galería" },
  ],
  video: {
    src: hilux28Video,
    title: "Presentación de la Toyota Hilux 2.8 de Casa Pellas",
  },
};

export const hiluxGrMedia: VehicleMedia = {
  hero: { src: hiluxGrHero, alt: "Toyota Hilux GR, imagen principal" },
  logo: { src: hiluxGrLogo, alt: "Logo del modelo Toyota Hilux GR" },
  colors: [
    {
      id: "disponible",
      name: "Color disponible",
      image: {
        src: hiluxGrdisponible,
        alt: "Toyota Hilux GR en el color disponible",
      },
    },
  ],
  // La carpeta gallery contiene actualmente cuatro imágenes.
  gallery: [
    { src: hiluxGrGallery1, alt: "Toyota Hilux GR, vista 1 de la galería" },
    { src: hiluxGrGallery2, alt: "Toyota Hilux GR, vista 2 de la galería" },
    { src: hiluxGrGallery3, alt: "Toyota Hilux GR, vista 3 de la galería" },
    { src: hiluxGrGallery4, alt: "Toyota Hilux GR, vista 4 de la galería" },
  ],
  video: {
    src: hiluxGrVideo,
    title: "Presentación de la Toyota Hilux GR de Casa Pellas",
  },
};
