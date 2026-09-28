import type { Project } from "./types";

export const project: Project = {
  slug: "vllm-rocm-windows",
  title: {
    fr: "vLLM sur Windows natif + ROCm",
    en: "vLLM on native Windows + ROCm",
  },
  tagline: {
    fr: "Faire tourner vLLM sur Windows natif avec AMD ROCm (RDNA3). Contributeur majeur du projet upstream : vllm serve fonctionnel, noyaux natifs GPTQ/AWQ, cache KV fp8, RX 7800 XT validée à 81,9 tok/s.",
    en: "Running vLLM on native Windows with AMD ROCm (RDNA3). Major contributor upstream: working vllm serve, native GPTQ/AWQ kernels, fp8 KV cache, RX 7800 XT validated at 81.9 tok/s.",
  },
  year: "2026",
  stack: ["Python", "Triton", "HIP", "ROCm"],
  links: {
    source: "https://github.com/CLVwp/vLLM-ROCm-Windows",
  },
};
