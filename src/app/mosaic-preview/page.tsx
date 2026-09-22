"use client";

import { type MosaicVariant, PixelMosaic } from "@/components/pixel-mosaic";

const VARIANTS: MosaicVariant[] = ["square", "diamond", "triangle", "hex"];
const MOTIONS = ["pulse", "wave"] as const;

export default function MosaicPreview() {
  return (
    <main className="min-h-screen bg-bg p-8">
      <h1 className="font-mono text-xs uppercase tracking-[0.25em] text-fg/50">
        Mosaic variants
      </h1>
      {VARIANTS.map((variant) =>
        MOTIONS.map((motion) => (
          <section className="mt-10" key={`${variant}-${motion}`}>
            <h2 className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-fg/40">
              {variant} · {motion}
            </h2>
            <PixelMosaic
              cell={24}
              cols={16}
              motion={motion}
              rows={6}
              variant={variant}
            />
          </section>
        )),
      )}
    </main>
  );
}
