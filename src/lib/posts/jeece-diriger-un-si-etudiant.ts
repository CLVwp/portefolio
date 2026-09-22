import type { Post } from "./types";

export const post: Post = {
  slug: "jeece-diriger-un-si-etudiant",
  title: {
    fr: "Diriger un SI étudiant : JEECE, RGPD et la réalité du terrain",
    en: "Leading a student IS: JEECE, GDPR and ground truth",
  },
  excerpt: {
    fr: "Head of Information Systems & DPO de la junior-entreprise d'ECE Paris : équipe de 3, refonte de l'infrastructure IT, ERP & CRM interne, conformité RGPD.",
    en: "Head of Information Systems & DPO of ECE Paris' junior enterprise: team of 3, IT infrastructure rebuild, in-house ERP & CRM, GDPR compliance.",
  },
  date: "2026-06-28",
  readTime: "8 min",
  tag: "Projet perso",
  content: {
    fr: `Un an comme Head of Information Systems & DPO à JEECE, la junior-entreprise d'ECE Paris. Une équipe de 3, des projets internes, des offres de services digitales pour des clients réels, et la conformité RGPD.

## Le RGPD, concrètement

Être DPO d'une petite structure, c'est apprendre que la conformité n'est pas un document, c'est une discipline de données :

- Cartographier **qui détient quoi** (souvent : personne ne sait)
- Minimiser : la donnée qu'on ne collecte pas n'a pas besoin d'être protégée
- Documenter les traitements au moment où on les conçoit, pas après

## Refonte de l'infrastructure IT

Le chantier le plus concret de l'année : l'infra partait d'un patchwork sans documentation. Refonte complète : mise en place de serveurs, pipeline de développement et de déploiement sur VPS (GitHub comme source de vérité, déploiement reproductible), reprise de la gestion du DNS, et développement d'un ERP & CRM interne pour suivre clients, offres et projets.

Leçon d'infra étudiante : l'outillage sophistiqué que personne ne maîtrise perd contre un pipeline simple et documenté. Le DNS, notamment, ne devient un sujet que le jour où il casse : documenter avant, pas après.

## Gérer 3 personnes, c'est déjà gérer

La tentation d'une petite équipe : tout faire soi-même. L'erreur. Ce qui a fonctionné : des périmètres clairs, des revues hebdo courtes, et accepter que le travail des autres ne ressemble pas au mien mais livre le même résultat.

## Agile à échelle humaine

Kanban sur un tableau simple, Scrum allégé sans les cérémonies qui n'apportent rien à 3 personnes. La méthodologie doit servir l'équipe, pas l'inverse : leçon valable pour n'importe quelle taille d'équipe.`,
    en: `One year as Head of Information Systems & DPO at JEECE, ECE Paris' junior enterprise. A team of 3, internal projects, digital service offerings for real clients, and GDPR compliance.

## GDPR, concretely

Being the DPO of a small structure teaches you that compliance isn't a document, it's a data discipline:

- Map **who holds what** (often: nobody knows)
- Minimize: data you don't collect doesn't need protecting
- Document processing when you design it, not after

## Rebuilding the IT infrastructure

The most concrete project of the year: the infra was an undocumented patchwork. Full rebuild: server setup, a development and deployment pipeline on a VPS (GitHub as the source of truth, reproducible deploys), taking over DNS management, and developing an in-house ERP & CRM to track clients, offers and projects.

Student-infra lesson: sophisticated tooling nobody masters loses to a simple, documented pipeline. DNS only becomes a topic the day it breaks: document before, not after.

## Managing 3 people is already managing

The temptation of a small team: do everything yourself. The mistake. What worked: clear perimeters, short weekly reviews, and accepting that other people's work doesn't look like mine but delivers the same result.

## Agile at human scale

Kanban on a simple board, lightweight Scrum without the ceremonies that add nothing to 3 people. Methodology must serve the team, not the other way around: a lesson valid at any team size.`,
  },
};
