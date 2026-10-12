import { project as erpCrmJeece } from "./erp-crm-jeece";
import { project as neuralNetworkVisualizer } from "./neural-network-visualizer";
import { project as particuleSimulation4d } from "./particule-simulation-4d";
import { project as pipelineCodingAgentique } from "./pipeline-coding-agentique";
import { project as portfolio } from "./portfolio";
import type { Project } from "./types";
import { project as vllmRocmWindows } from "./vllm-rocm-windows";
import { project as worldpulse } from "./worldpulse";

export type { Project } from "./types";

/** Display order: most relevant first. Add a new project file and list it here. */
export const PROJECTS: Project[] = [
  neuralNetworkVisualizer,
  vllmRocmWindows,
  particuleSimulation4d,
  pipelineCodingAgentique,
  portfolio,
  worldpulse,
  erpCrmJeece,
];
