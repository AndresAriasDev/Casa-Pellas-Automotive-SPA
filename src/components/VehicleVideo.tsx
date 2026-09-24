import { useEffect, useRef, useState } from "react";
import type { VehicleMedia } from "../types/vehicle";

export function VehicleVideo({ video }: { video: NonNullable<VehicleMedia["video"]> }) {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const volumeRef = useRef<HTMLDivElement>(null);
  const volumeButtonRef = useRef<HTMLButtonElement>(null);
  const [volumeOpen, setVolumeOpen] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [controlsVisible, setControlsVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const formatTime = (seconds: number) => `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;
  const togglePlayback = () => {
    const player = videoRef.current;
    if (!player) return;
    if (player.paused) void player.play().catch(() => setPlaying(false));
    else player.pause();
  };

  useEffect(() => {
    if (!volumeOpen) return;
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !volumeRef.current?.contains(event.target)) setVolumeOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setVolumeOpen(false);
        volumeButtonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [volumeOpen]);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const player = videoRef.current;
    if (!section || !stage || !player) return;
    player.volume = 0.3;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let nearby = true;
    let visible = false;
    let disposed = false;

    const updateSize = () => {
      frame = 0;
      const width = document.documentElement.clientWidth;
      const height = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (height - stage.getBoundingClientRect().top) / (height * 0.85)));
      const initial = width <= 760 ? 0.9 : 0.6;
      const scale = reducedMotion.matches ? 1 : initial + (1 - initial) * progress;
      section.style.setProperty("--video-viewport-width", `${width}px`);
      section.style.setProperty("--video-width", `${scale * 100}%`);
      section.style.setProperty("--video-radius", `${reducedMotion.matches ? 0 : 1 - progress}rem`);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(updateSize);
    };
    const onScroll = () => {
      if (nearby && !reducedMotion.matches) schedule();
    };
    const syncPlayback = () => {
      if (!visible || document.hidden) {
        player.pause();
        return;
      }
      // Every automatic resume is silent; sound requires a user gesture.
      player.muted = true;
      void player.play().then(() => {
        if (disposed || !visible || document.hidden) player.pause();
      }).catch(() => {
        // The user can start playback through the custom controls.
      });
    };
    const proximityObserver = new IntersectionObserver(([entry]) => {
      nearby = entry.isIntersecting;
      if (nearby) schedule();
    }, { rootMargin: "200px" });
    const playbackObserver = new IntersectionObserver(([entry]) => {
      const nextVisible = entry.isIntersecting && entry.intersectionRatio >= 0.35;
      if (nextVisible !== visible) {
        visible = nextVisible;
        syncPlayback();
      }
    }, { threshold: [0, 0.35] });

    updateSize();
    proximityObserver.observe(section);
    playbackObserver.observe(player);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", schedule);
    reducedMotion.addEventListener("change", schedule);
    document.addEventListener("visibilitychange", syncPlayback);
    return () => {
      disposed = true;
      window.cancelAnimationFrame(frame);
      proximityObserver.disconnect();
      playbackObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", schedule);
      reducedMotion.removeEventListener("change", schedule);
      document.removeEventListener("visibilitychange", syncPlayback);
      player.pause();
    };
  }, [video.src]);

  if (!video.src) return null;
  return (
    <section ref={sectionRef} className="vehicle-video" aria-labelledby="vehicle-video-title">
      <h2 id="vehicle-video-title">{video.title}</h2>
      <div ref={stageRef} className="vehicle-video__stage">
      <div className="vehicle-video__player">
      <video ref={videoRef} key={video.src} loop muted playsInline preload="metadata" poster={video.poster} aria-label={video.title} src={video.src}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onVolumeChange={(event) => {
          setMuted(event.currentTarget.muted || event.currentTarget.volume === 0);
          setVolume(event.currentTarget.volume);
        }}
        onTimeUpdate={(event) => setPosition(event.currentTarget.currentTime)}
        onDurationChange={(event) => setDuration(Number.isFinite(event.currentTarget.duration) ? event.currentTarget.duration : 0)}
      >
        Tu navegador no permite reproducir este video. <a href={video.src}>Abrir video</a>
      </video>
      <button type="button" className="vehicle-video__reveal"
        aria-label={controlsVisible ? playing ? "Pausar video" : "Reproducir video" : "Mostrar controles del video"}
        aria-expanded={controlsVisible} aria-controls="vehicle-video-controls"
        onClick={() => {
          if (controlsVisible) togglePlayback();
          else setControlsVisible(true);
          setVolumeOpen(false);
        }} />
      <div id="vehicle-video-controls" className="vehicle-video__controls" hidden={!controlsVisible}>
        <button type="button" onClick={togglePlayback} aria-label={playing ? "Pausar video" : "Reproducir video"}>
          <svg viewBox="0 0 24 24" aria-hidden="true">{playing ? <path d="M6 4h4v16H6zM14 4h4v16h-4z" /> : <path d="m7 4 13 8-13 8z" />}</svg>
        </button>
        <div className="vehicle-video__timeline">
          <input type="range" min={0} max={duration || 1} step={0.1} value={Math.min(position, duration)} disabled={!duration}
            aria-label="Posición del video" aria-valuetext={`${formatTime(position)} de ${formatTime(duration)}`}
            onChange={(event) => {
              const next = Number(event.currentTarget.value);
              if (videoRef.current) videoRef.current.currentTime = next;
              setPosition(next);
            }} />
          <span aria-hidden="true">{formatTime(position)} / {formatTime(duration)}</span>
        </div>
        <div ref={volumeRef} className="vehicle-video__volume" onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setVolumeOpen(false);
        }}>
        <button ref={volumeButtonRef} type="button" aria-label={muted ? "Activar sonido y ajustar volumen" : volumeOpen ? "Silenciar video" : "Ajustar volumen"}
          aria-expanded={volumeOpen} aria-controls="vehicle-video-volume" onClick={() => {
          const player = videoRef.current;
          if (!player) return;
          if (muted) {
            if (player.volume === 0) player.volume = 0.3;
            player.muted = false;
          } else if (volumeOpen) player.muted = true;
          setVolumeOpen(true);
        }}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9h4l5-5v16l-5-5H3z" />
            <path d={muted ? "m16 9 6 6m0-6-6 6" : "M16 8q4 4 0 8M19 4q8 8 0 16"} fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
        <div id="vehicle-video-volume" className="vehicle-video__volume-panel" hidden={!volumeOpen}>
          <span aria-hidden="true">{muted ? 0 : Math.round(volume * 100)}%</span>
          <input type="range" min="0" max="100" step="1" value={muted ? 0 : Math.round(volume * 100)}
            aria-label="Volumen" aria-orientation="vertical" aria-valuetext={`${muted ? 0 : Math.round(volume * 100)} por ciento`}
            onChange={(event) => {
              const player = videoRef.current;
              if (!player) return;
              const next = Number(event.currentTarget.value) / 100;
              player.volume = next;
              player.muted = next === 0;
            }} />
        </div>
        </div>
      </div>
      </div>
      </div>
    </section>
  );
}
