"use client";

import { useMemo } from "react";

const COLORS = [
  "transparent",
  "transparent",
  "transparent",
  "#7c3aed",
  "#a78bfa",
  "#10b981",
  "#34d399",
];

function hashFract(n: number): number {
  const x = Math.sin(n) * 43_758.5453;
  return x - Math.floor(x);
}

interface PixelMosaicProps {
  /** Grid columns */
  cols?: number;
  /** Grid rows */
  rows?: number;
  /** Cell size in px */
  cell?: number;
  /** Monospace labels pinned on the grid */
  labels?: { text: string; col: number; row: number }[];
  className?: string;
}

/**
 * Mistral-style pixel mosaic: a grid of squares pulsing between accent
 * colors and transparency. Pure CSS animations, GPU-safe (opacity only).
 */
export function PixelMosaic({
  cols = 24,
  rows = 8,
  cell = 24,
  labels = [],
  className,
}: PixelMosaicProps) {
  const cells = useMemo(
    () =>
      Array.from({ length: cols * rows }, (_, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const seed = hashFract(i * 12.9898 + 1);
        const color = COLORS[Math.floor(seed * COLORS.length)];
        const delay = (hashFract(i * 78.233) * 6).toFixed(2);
        const duration = (4 + hashFract(i * 39.425) * 4).toFixed(2);
        return { col, row, color, delay, duration, i };
      }),
    [cols, rows],
  );

  return (
    <div
      aria-hidden
      className={`relative select-none overflow-hidden ${className ?? ""}`}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, ${cell}px)`,
        gridTemplateRows: `repeat(${rows}, ${cell}px)`,
      }}
    >
      {cells.map(({ color, delay, duration, i }) => (
        <div
          className="mosaic-cell"
          key={i}
          style={
            {
              backgroundColor: color,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            } as React.CSSProperties
          }
        />
      ))}
      {labels.map((label) => (
        <span
          className="pointer-events-none absolute font-mono text-[10px] tracking-[0.25em] text-fg/70 uppercase"
          key={label.text}
          style={{
            left: label.col * cell + 4,
            top: label.row * cell + 4,
          }}
        >
          {label.text}
        </span>
      ))}
    </div>
  );
}
