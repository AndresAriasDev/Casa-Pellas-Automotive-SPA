import { useEffect } from "react";
import { useMatch } from "react-router-dom";

// The single splash is in index.html so it is visible before React boots.
export function AppLoader({ ready }: { ready: boolean }) {
  const catalogRoute = useMatch("/");
  const detailRoute = useMatch("/vehiculo/:id");
  const canPrepare = ready || (!catalogRoute && !detailRoute);
  useEffect(() => {
    if (!canPrepare) return;
    const splash = document.getElementById("app-loader");
    if (!splash) return;
    const controller = new AbortController();
    const { signal } = controller;
    let frame = 0;
    let exitTimer = 0;
    let resourceTimer = 0;

    const waitForImage = (image: HTMLImageElement) => new Promise<void>((resolve) => {
      const finish = () => {
        image.removeEventListener("load", finish);
        image.removeEventListener("error", finish);
        signal.removeEventListener("abort", finish);
        resolve();
      };
      if (image.complete || signal.aborted) return resolve();
      image.addEventListener("load", finish, { once: true });
      image.addEventListener("error", finish, { once: true });
      signal.addEventListener("abort", finish, { once: true });
    }).then(async () => {
      if (!signal.aborted) await image.decode().catch(() => {});
    });

    const prepare = async () => {
      const resources = async () => {
        await document.fonts.ready;
        if (signal.aborted) return;
        const images = Array.from(document.querySelectorAll<HTMLImageElement>("#root img, #app-loader img"))
          .filter((image) => {
            const rect = image.getBoundingClientRect();
            return rect.width > 0 && rect.height > 0 && rect.bottom > 0 && rect.right > 0 && rect.top < window.innerHeight && rect.left < window.innerWidth;
          });
        await Promise.all(images.map(waitForImage));
      };
      // A failed/stalled external resource must not permanently block the page.
      await Promise.race([
        resources(),
        new Promise<void>((resolve) => { resourceTimer = window.setTimeout(resolve, 12000); }),
      ]);
      if (signal.aborted) return;
      window.clearTimeout(resourceTimer);
      frame = requestAnimationFrame(() => {
        splash.classList.add("app-loader--leaving");
        const finish = () => {
          if (signal.aborted) return;
          splash.remove();
          document.documentElement.classList.remove("app-initializing");
          document.getElementById("root")?.removeAttribute("inert");
          controller.abort();
        };
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) finish();
        else exitTimer = window.setTimeout(finish, 220);
      });
    };
    void prepare();
    return () => {
      controller.abort();
      cancelAnimationFrame(frame);
      window.clearTimeout(resourceTimer);
      window.clearTimeout(exitTimer);
    };
  }, [canPrepare]);
  return null;
}
