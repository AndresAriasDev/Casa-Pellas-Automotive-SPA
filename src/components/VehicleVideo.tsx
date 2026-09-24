import type { VehicleMedia } from "../types/vehicle";

export function VehicleVideo({ video }: { video: NonNullable<VehicleMedia["video"]> }) {
  if (!video.src) return null;
  return (
    <section className="vehicle-video" aria-labelledby="vehicle-video-title">
      <div><p className="vehicle-detail__eyebrow">Una mirada más cerca</p><h2 id="vehicle-video-title">{video.title}</h2></div>
      <video key={video.src} controls playsInline preload="none" poster={video.poster} aria-label={video.title} src={video.src}>
        Tu navegador no permite reproducir este video. <a href={video.src}>Abrir video</a>
      </video>
    </section>
  );
}
