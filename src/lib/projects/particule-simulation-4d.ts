import type { Project } from "./types";

export const project: Project = {
  slug: "particule-simulation-4d",
  title: {
    fr: "Simulation de particules 4D",
    en: "4D Particle Simulation",
  },
  tagline: {
    fr: "Simulation de particules temps réel en 3D (x, y, z + temps) en Rust, rendue par wgpu. Physique sur CPU (rayon) ou GPU (compute shaders), un seul draw call instancié, LOD et culling réglables en direct depuis le panneau debug.",
    en: "Real-time 3D particle simulation (x, y, z + time) in Rust, rendered by wgpu. CPU physics (rayon) or GPU compute shaders, a single instanced draw call, LOD and culling tuned live from the in-game debug panel.",
  },
  year: "2026",
  stack: ["Rust", "wgpu", "egui", "winit"],
  links: {
    source: "https://github.com/CLVwp/Particule_Simulation_4D",
  },
};
