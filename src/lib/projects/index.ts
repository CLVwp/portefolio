import { project as erpCrmJeece } from "./erp-crm-jeece";
import { project as pipelineCodingAgentique } from "./pipeline-coding-agentique";
import { project as portfolio } from "./portfolio";
import type { Project } from "./types";
import { project as worldpulse } from "./worldpulse";

export type { Project } from "./types";

/** Display order: most relevant first. Add a new project file and list it here. */
export const PROJECTS: Project[] = [
  pipelineCodingAgentique,
  portfolio,
  worldpulse,
  erpCrmJeece,
];
