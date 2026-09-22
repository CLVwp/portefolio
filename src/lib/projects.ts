/**
 * Single source of truth for the projects shown on /projects.
 *
 * A project links out, it never gets its own page:
 * - `links.post`   slug of a blog post (/blog/<slug>): the project's write-up.
 * - `links.demo`   external URL to a live demo (opens in a new tab).
 * - `links.source` external URL to the source code (opens in a new tab).
 * All three are optional; a card without links renders without a link row.
 */
export interface Project {
  slug: string;
  title: { fr: string; en: string };
  tagline: { fr: string; en: string };
  year: string;
  stack?: string[];
  links?: {
    demo?: string;
    source?: string;
    post?: string;
  };
}

/** Display order: most relevant first. Add an entry here, the page updates. */
export const PROJECTS: Project[] = [
  {
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
  },
  {
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
  },
  {
    slug: "erp-crm-jeece",
    title: {
      fr: "ERP & CRM JEECE",
      en: "JEECE ERP & CRM",
    },
    tagline: {
      fr: "ERP & CRM interne développé pour la junior-entreprise d'ECE Paris.",
      en: "In-house ERP & CRM built for ECE Paris' junior enterprise.",
    },
    year: "2025–2026",
  },
];
