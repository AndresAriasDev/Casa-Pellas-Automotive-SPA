import type { VehicleDetailMedia } from "../../types/vehicle";
import landCruiserVideo from "../../assets/vehicles/pickup/land-cruiser/video/LAND-CRUSER-PAEA-WEB.mp4";
import landCruiserGallery1 from "../../assets/vehicles/pickup/land-cruiser/gallery/LC-CS-Toyota-CASAPELLAS-1.webp";
import landCruiserGallery2 from "../../assets/vehicles/pickup/land-cruiser/gallery/LC-CS-Toyota-CASAPELLAS-4.webp";
import landCruiserGallery3 from "../../assets/vehicles/pickup/land-cruiser/gallery/LC-CS-Toyota-CASAPELLAS-5.webp";
import landCruiserGallery4 from "../../assets/vehicles/pickup/land-cruiser/gallery/LC-CS-Toyota-CASAPELLAS-6.webp";
import landCruiserGallery5 from "../../assets/vehicles/pickup/land-cruiser/gallery/LC-CS-Toyota-CASAPELLAS-7.webp";
import landCruiserGallery6 from "../../assets/vehicles/pickup/land-cruiser/gallery/LC-CS-Toyota-CASAPELLAS-8.webp";
import landCruiserGallery7 from "../../assets/vehicles/pickup/land-cruiser/gallery/LC-CS-Toyota-CASAPELLAS-9.webp";
import landCruiserGallery8 from "../../assets/vehicles/pickup/land-cruiser/gallery/LC-CS-Toyota-CASAPELLAS-13.webp";
import landCruiserGallery9 from "../../assets/vehicles/pickup/land-cruiser/gallery/LC-CS-Toyota-CASAPELLAS-23.webp";
import landCruiserGallery10 from "../../assets/vehicles/pickup/land-cruiser/gallery/lc-dc-jul25-1.webp";
import landCruiserGallery11 from "../../assets/vehicles/pickup/land-cruiser/gallery/lc-dc-jul25-3.webp";
import landCruiserGallery12 from "../../assets/vehicles/pickup/land-cruiser/gallery/lc-dc-jul25-5.webp";

export const detailMedia: VehicleDetailMedia = {
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
