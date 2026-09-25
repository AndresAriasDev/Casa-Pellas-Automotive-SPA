import type { VehicleDetailMedia } from "../../types/vehicle";
import hiaceVideo from "../../assets/vehicles/comercial/hiace/video/HIACE-WEB.mp4";
import hiaceGallery1 from "../../assets/vehicles/comercial/hiace/gallery/HIACE_BUS-ToyotaCP-1.webp";
import hiaceGallery2 from "../../assets/vehicles/comercial/hiace/gallery/HIACE_BUS-ToyotaCP-2.webp";
import hiaceGallery3 from "../../assets/vehicles/comercial/hiace/gallery/HIACE_BUS-ToyotaCP-5.webp";
import hiaceGallery4 from "../../assets/vehicles/comercial/hiace/gallery/HIACE_BUS-ToyotaCP-8.webp";
import hiaceGallery5 from "../../assets/vehicles/comercial/hiace/gallery/HIACE_BUS-ToyotaCP-10.webp";
import hiaceGallery6 from "../../assets/vehicles/comercial/hiace/gallery/HIACE_BUS-ToyotaCP-13.webp";
import hiaceGallery7 from "../../assets/vehicles/comercial/hiace/gallery/HIACE_BUS-ToyotaCP-14.webp";
import hiaceGallery8 from "../../assets/vehicles/comercial/hiace/gallery/HIACE_BUS-ToyotaCP-16.webp";
import hiaceGallery9 from "../../assets/vehicles/comercial/hiace/gallery/HIACE_BUS-ToyotaCP-18.webp";
import hiaceGallery10 from "../../assets/vehicles/comercial/hiace/gallery/HIACE_BUS-ToyotaCP-21.webp";
import hiaceGallery11 from "../../assets/vehicles/comercial/hiace/gallery/HIACE_BUS-ToyotaCP-24.webp";
import hiaceGallery12 from "../../assets/vehicles/comercial/hiace/gallery/HIACE_BUS-ToyotaCP-25.webp";
import hiaceColor1 from "../../assets/vehicles/comercial/hiace/colors/hiace-portada.png";

export const detailMedia: VehicleDetailMedia = {
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
