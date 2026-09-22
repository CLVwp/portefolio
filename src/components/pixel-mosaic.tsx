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

export type MosaicVariant = "square" | "diamond" | "triangle" | "hex";

const CLIP_PATHS: Record<MosaicVariant, string | undefined> = {
  square: undefined,
  diamond: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
  triangle: "polygon(50% 0%, 100% 100%, 0% 100%)",
  hex: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
};

/** Fraction of the cell each shape fills (hex does its own geometry) */
const SHAPE_SCALE: Record<MosaicVariant, number> = {
  square: 1,
  diamond: 0.8,
  triangle: 0.9,
  hex: 1,
};

interface PixelMosaicProps {
  /** Grid columns */
  cols?: number;
  /** Grid rows */
  rows?: number;
  /** Cell size in px */
  cell?: number;
  /** Cell shape */
  variant?: MosaicVariant;
  /** pulse: random per-cell rhythm · wave: diagonal sweep */
  motion?: "pulse" | "wave";
  /** Word blocks pinned to the grid: one word = one opaque block spanning
      as many cells as the text needs (auto-computed from char count) */
  words?: {
    text: string;
    col: number;
    row: number;
    /** ghost: bg-bg + hairline border · solid: inverted block */
    style?: "ghost" | "solid";
  }[];
  className?: string;
}

/**
 * Mistral-style pixel mosaic: a grid of cells pulsing between accent colors
 * and transparency. Pure CSS animations, GPU-safe (opacity only).
 */
export function PixelMosaic({
  cols = 24,
  rows = 8,
  cell = 24,
  variant = "square",
  motion = "pulse",
  words = [],
  className,
}: PixelMosaicProps) {
  const hex = variant === "hex";
  const hexW = cell * 0.866;

  const cells = useMemo(
    () =>
      Array.from({ length: cols * rows }, (_, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const seed = hashFract(i * 12.9898 + 1);
        const color = COLORS[Math.floor(seed * COLORS.length)];
        const delay =
          motion === "wave"
            ? ((col + row) / (cols + rows - 2)) * 3
            : hashFract(i * 78.233) * 6;
        const duration = motion === "wave" ? 4 : 4 + hashFract(i * 39.425) * 4;

        return {
          i,
          color,
          delay: `${delay.toFixed(2)}s`,
          duration: `${duration.toFixed(2)}s`,
          // weave: alternate triangles point up/down
          flip: variant === "triangle" && (col + row) % 2 === 1,
          // hex rows pack at 75% height, odd rows shift half a tile
          left: hex ? col * hexW + (row % 2 ? hexW / 2 : 0) : undefined,
          top: hex ? row * cell * 0.75 : undefined,
          width: hex ? hexW : cell * SHAPE_SCALE[variant],
          height: hex ? cell : cell * SHAPE_SCALE[variant],
        };
      }),
    [cols, rows, cell, variant, motion, hex, hexW],
  );

  return (
    <div
      aria-hidden
      className={`relative select-none overflow-hidden ${className ?? ""}`}
      style={
        hex
          ? {
              width: cols * hexW + hexW / 2,
              height: cell + (rows - 1) * cell * 0.75,
            }
          : {
              display: "grid",
              gridTemplateColumns: `repeat(${cols}, ${cell}px)`,
              gridTemplateRows: `repeat(${rows}, ${cell}px)`,
            }
      }
    >
      {cells.map(
        ({ color, delay, duration, flip, left, top, width, height, i }) => (
          <div
            className="mosaic-cell"
            key={i}
            style={
              {
                position: hex ? "absolute" : "relative",
                left,
                top,
                width,
                height,
                justifySelf: "center",
                alignSelf: "center",
                backgroundColor: color,
                clipPath: CLIP_PATHS[variant],
                transform: flip ? "rotate(180deg)" : undefined,
                animationDelay: delay,
                animationDuration: duration,
              } as React.CSSProperties
            }
          />
        ),
      )}
      {/* Word blocks: opaque blocks masking the cells underneath.
          Width = text length * ~8.5px (10px mono + 0.25em tracking) + padding,
          rounded up to whole cells so blocks stay aligned on the grid. */}
      {words.map((word) => {
        const cw = hex ? hexW : cell;
        const span = Math.max(1, Math.ceil((word.text.length * 8.5 + 16) / cw));
        return (
          <span
            className={`pointer-events-none absolute flex items-center justify-center font-mono text-[10px] tracking-[0.25em] uppercase ${
              word.style === "solid"
                ? "bg-fg text-bg"
                : "border border-hairline bg-bg text-fg/70"
            }`}
            key={word.text}
            style={{
              left: word.col * cw,
              top: word.row * (hex ? cell * 0.75 : cell),
              width: span * cw,
              height: cell,
            }}
          >
            {word.text}
          </span>
        );
      })}
    </div>
  );
}
