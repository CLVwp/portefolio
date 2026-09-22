import type { Project } from "./types";

export const project: Project = {
  slug: "pipeline-coding-agentique",
  title: {
    fr: "Pipeline de coding agentique",
    en: "Agentic coding pipeline",
  },
  tagline: {
    fr: "Claude Code orchestré en boucles Plan → Execute → Check → Validate : la validation d'une fonctionnalité est passée de trois jours à six heures.",
    en: "Claude Code orchestrated in Plan → Execute → Check → Validate loops: feature validation went from three days to six hours.",
  },
  year: "2026",
  stack: ["Claude Code", "MCP", "Hooks"],
  links: {
    post: "coding-agentique-claude-code",
  },
};
