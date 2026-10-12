import type { Project } from "./types";

export const project: Project = {
  slug: "neural-network-visualizer",
  title: {
    fr: "Visualiseur de réseaux de neurones",
    en: "Neural Network Visualizer",
  },
  tagline: {
    fr: "Explorer n'importe quel réseau de neurones (CNN, Transformers, LLM, VLM) comme un graphe 3D interactif dans le navigateur. Import en un clic avec détection automatique du format : PyTorch, ONNX, HuggingFace, Keras. Une IR unifiée, un viewer WebGL (Three.js).",
    en: "Explore any neural network (CNN, Transformers, LLM, VLM) as an interactive 3D graph in your browser. One-click import with format auto-detection: PyTorch, ONNX, HuggingFace, Keras. One unified IR, a WebGL viewer (Three.js).",
  },
  year: "2026",
  stack: ["Python", "Three.js", "WebGL", "ONNX"],
  links: {
    source: "https://github.com/CLVwp/Neural_Network_Visualizer",
  },
};
