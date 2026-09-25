import type { VehicleDetailMedia } from "../../types/vehicle";
import tundraVideo from "../../assets/vehicles/pickup/tundra/video/tundra-toyota-hd_2_1.mp4";
import tundraGallery1 from "../../assets/vehicles/pickup/tundra/gallery/tundra-toyota-cp-2.webp";
import tundraGallery2 from "../../assets/vehicles/pickup/tundra/gallery/tundra-toyota-cp-6.webp";
import tundraGallery3 from "../../assets/vehicles/pickup/tundra/gallery/tundra-toyota-cp-8.webp";
import tundraGallery4 from "../../assets/vehicles/pickup/tundra/gallery/tundra-toyota-cp-9.webp";
import tundraGallery5 from "../../assets/vehicles/pickup/tundra/gallery/tundra-toyota-cp-10.webp";
import tundraGallery6 from "../../assets/vehicles/pickup/tundra/gallery/tundra-toyota-cp-12.webp";
import tundraGallery7 from "../../assets/vehicles/pickup/tundra/gallery/tundra-toyota-cp-19.webp";
import tundraGallery8 from "../../assets/vehicles/pickup/tundra/gallery/tundra-toyota-cp-22 (1).webp";
import tundraGallery9 from "../../assets/vehicles/pickup/tundra/gallery/tundra-toyota-cp-24.webp";
import tundraGallery10 from "../../assets/vehicles/pickup/tundra/gallery/tundra-toyota-cp-26.webp";

export const detailMedia: VehicleDetailMedia = {
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
