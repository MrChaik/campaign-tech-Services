import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

const ADVANCE_MS = 3000;

export interface HeroCarouselImage {
  src: string;
  alt: string;
  href: string;
}

interface HeroCarouselProps {
  /**
   * Slides in order. Swap `src` for final hero photography in the
   * `HERO_SLIDES` list in `src/components/sections/Hero.tsx`.
   */
  images: readonly HeroCarouselImage[];
  className?: string;
}

export default function HeroCarousel({ images, className }: HeroCarouselProps) {
  const reduce = useReducedMotion() ?? false;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const count = images.length;
  const safeIndex = count === 0 ? 0 : index % count;
  const current = images[safeIndex];

  function showSlide(nextIndex: number, nextDirection: number) {
    setDirection(nextDirection);
    setIndex((nextIndex + count) % count);
  }

  useEffect(() => {
    if (paused || count < 2) return;

    const id = window.setInterval(() => {
      setDirection(1);
      setIndex((currentIndex) => (currentIndex + 1) % count);
    }, ADVANCE_MS);

    return () => window.clearInterval(id);
  }, [paused, count, index]);

  useEffect(() => {
    if (count < 2) return;
    const next = images[(safeIndex + 1) % count];
    const preload = new Image();
    preload.src = next.src;
  }, [count, images, safeIndex]);

  if (!current) return null;

  return (
    <div
      className={cn("w-full", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-navy shadow-[0_24px_50px_-24px_rgba(11,19,48,0.85)]">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={current.src}
            custom={direction}
            className="absolute inset-0"
            variants={{
              enter: (dir: number) =>
                reduce ? { opacity: 0 } : { x: dir > 0 ? "100%" : "-100%", opacity: 0 },
              center: { x: 0, opacity: 1 },
              exit: (dir: number) =>
                reduce ? { opacity: 0 } : { x: dir > 0 ? "-100%" : "100%", opacity: 0 },
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={
              reduce
                ? { duration: 0.2, ease: "easeOut" }
                : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
            }
          >
            <Link to={current.href} aria-label={current.alt} className="block size-full">
              <img src={current.src} alt="" className="size-full object-cover" />
            </Link>
          </motion.div>
        </AnimatePresence>

        {count > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => showSlide(safeIndex - 1, -1)}
              className="absolute top-1/2 left-3 z-10 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-navy/70 text-white backdrop-blur-sm transition-colors hover:border-cyan/50 hover:text-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => showSlide(safeIndex + 1, 1)}
              className="absolute top-1/2 right-3 z-10 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-navy/70 text-white backdrop-blur-sm transition-colors hover:border-cyan/50 hover:text-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      <div
        className="mt-4 flex items-center justify-center gap-1.5"
        role="group"
        aria-label="Hero image slides"
      >
        {images.map((image, dotIndex) => {
          const active = dotIndex === safeIndex;
          return (
            <button
              key={image.src}
              type="button"
              aria-label={`Show ${image.alt}`}
              aria-current={active ? "true" : undefined}
              onClick={() => showSlide(dotIndex, dotIndex > safeIndex ? 1 : -1)}
              className="font-body inline-flex size-6 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
            >
              <span
                className={cn(
                  "block size-2 rounded-full transition-colors duration-200",
                  active
                    ? "bg-cyan shadow-[0_0_10px_rgba(34,211,238,0.9)]"
                    : "bg-white/30 hover:bg-white/50",
                )}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
