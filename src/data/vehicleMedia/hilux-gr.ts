import type { VehicleDetailMedia } from "../../types/vehicle";
import hiluxGrVideo from "../../assets/vehicles/pickup/hilux-gr/video/toyota-gr-casapellas.mp4";
import hiluxGrdisponible from "../../assets/vehicles/pickup/hilux-gr/colors/img-toyota-portada-gr.jpg";
import hiluxGrGallery1 from "../../assets/vehicles/pickup/hilux-gr/gallery/hilux-gr-sport-360-5-img-02.webp";
import hiluxGrGallery2 from "../../assets/vehicles/pickup/hilux-gr/gallery/hilux-gr-sport-360-5-img-03.webp";
import hiluxGrGallery3 from "../../assets/vehicles/pickup/hilux-gr/gallery/hilux-gr-sport-360-5-img-04.webp";
import hiluxGrGallery4 from "../../assets/vehicles/pickup/hilux-gr/gallery/hilux-gr-sport-360-7-copy-copia.webp";

export const detailMedia: VehicleDetailMedia = {
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
