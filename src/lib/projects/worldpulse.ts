import type { Project } from "./types";

export const project: Project = {
  slug: "worldpulse",
  title: {
    fr: "WorldPulse",
    en: "WorldPulse",
  },
  tagline: {
    fr: "Carte du monde OSINT en temps réel : actualités géolocalisées depuis 16 rédactions, vols, satellites et séismes en flux SSE. Bun + Hono, sans base de données.",
    en: "Real-time OSINT world map: geolocated news from 16 newsrooms, flights, satellites and earthquakes over SSE. Bun + Hono, no database.",
  },
  year: "2026",
  stack: ["Bun", "Hono", "MapLibre", "SSE"],
  links: {
    source: "https://github.com/CLVwp/WorldPulse",
  },
};
