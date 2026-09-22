import type { Project } from "./types";

export const project: Project = {
  slug: "portfolio",
  title: {
    fr: "Ce portfolio",
    en: "This portfolio",
  },
  tagline: {
    fr: "Next.js, Motion et mosaïques de pixels, déployé sur Cloudflare Workers. Une seule ligne horizontale traverse chaque page.",
    en: "Next.js, Motion and pixel mosaics, deployed on Cloudflare Workers. A single horizontal line runs through every page.",
  },
  year: "2026",
  stack: ["Next.js", "Tailwind", "Motion", "Cloudflare"],
  links: {
    source: "https://github.com/CLVwp/portefolio",
  },
};
