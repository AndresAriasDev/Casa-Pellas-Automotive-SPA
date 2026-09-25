import type { VehicleDetailMedia } from "../../types/vehicle";
import fortunerVideo from "../../assets/vehicles/suv/fortuner/video/toyota-fortuner-video.mp4";
import fortunerGallery1 from "../../assets/vehicles/suv/fortuner/gallery/Fortuner-Toyota-CP-1.webp";
import fortunerGallery2 from "../../assets/vehicles/suv/fortuner/gallery/Fortuner-Toyota-CP-2.webp";
import fortunerGallery3 from "../../assets/vehicles/suv/fortuner/gallery/Fortuner-Toyota-CP-3.webp";
import fortunerGallery4 from "../../assets/vehicles/suv/fortuner/gallery/Fortuner-Toyota-CP-5.webp";
import fortunerGallery5 from "../../assets/vehicles/suv/fortuner/gallery/Fortuner-Toyota-CP-6.webp";
import fortunerGallery6 from "../../assets/vehicles/suv/fortuner/gallery/Fortuner-Toyota-CP-7.webp";
import fortunerGallery7 from "../../assets/vehicles/suv/fortuner/gallery/Fortuner-Toyota-CP-8-1.webp";
import fortunerGallery8 from "../../assets/vehicles/suv/fortuner/gallery/Fortuner-Toyota-CP-9.webp";
import fortunerGallery9 from "../../assets/vehicles/suv/fortuner/gallery/Fortuner-Toyota-CP-10.webp";
import fortunerGallery10 from "../../assets/vehicles/suv/fortuner/gallery/Fortuner-Toyota-CP-11-1.webp";
import fortunerGallery11 from "../../assets/vehicles/suv/fortuner/gallery/Fortuner-Toyota-CP-16.webp";
import fortunerGallery12 from "../../assets/vehicles/suv/fortuner/gallery/Fortuner-Toyota-CP-19.webp";
import fortunerColor1 from "../../assets/vehicles/suv/fortuner/colors/fortuner-toyota-super-blanco-color.webp";
import fortunerColor2 from "../../assets/vehicles/suv/fortuner/colors/fortuner-toyota-plata-me-color.webp";
import fortunerColor3 from "../../assets/vehicles/suv/fortuner/colors/fortuner-toyota-gris-me-color.webp";
import fortunerColor4 from "../../assets/vehicles/suv/fortuner/colors/fortuner-toyota-blanco-perla-color.webp";

export const detailMedia: VehicleDetailMedia = {
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
