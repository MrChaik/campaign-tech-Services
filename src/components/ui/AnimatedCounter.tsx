import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
}

function decimalPlaces(value: number): number {
  const text = String(value);
  const dot = text.indexOf(".");
  return dot === -1 ? 0 : text.length - dot - 1;
}

export default function AnimatedCounter({ value, suffix = "" }: AnimatedCounterProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const decimals = decimalPlaces(value);

  const format = (n: number) => `${n.toFixed(decimals)}${suffix}`;

  useEffect(() => {
    if (!inView || !ref.current) return;

    if (reduce) {
      ref.current.textContent = format(value);
      return;
    }

    const controls = animate(0, value, {
      duration: 3,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        if (ref.current) ref.current.textContent = format(latest);
      },
    });

    return () => controls.stop();
  }, [inView, reduce, suffix, value]);

  return (
    <span
      ref={ref}
      className="inline-block font-display text-[2.025rem] md:text-[2.7rem] font-semibold tracking-tight tabular-nums bg-gradient-to-r from-electric to-violet bg-clip-text text-transparent"
    >
      {format(reduce ? value : 0)}
    </span>
  );
}
