import type { Experience } from "@/components/experience-card";

/**
 * Single source of truth for work experiences, shared by the homepage
 * and the about page. Edit here once, both pages update.
 */
export const EXPERIENCES: Experience[] = [
  {
    name: "Accenture · Industry X / SC&E",
    role: {
      fr: "Firmware and Embedded Engineer Associate",
      en: "Firmware and Embedded Engineer Associate",
    },
    period: "2026",
    duration: { fr: "6 mois", en: "6 months" },
    desc: {
      fr: "Stage à la croisée de l'IIoT, des produits connectés et de l'intelligence artificielle.",
      en: "Internship at the intersection of Industrial IoT, connected products and artificial intelligence.",
    },
    details: {
      fr: "Réalisation d'un benchmark du marché IIoT (plateformes industrielles majeures, tendances technologiques, positionnement) et d'une étude de marché sur l'IA appliquée à l'IoT et l'IIoT : IA, IA générative et cas d'usage de l'IA agentique en environnement industriel.\n\nContribution à des preuves de concept pour de grands clients industriels, dont un constructeur automobile majeur, en explorant et intégrant jumeaux numériques, LLM, VLM et solutions STT pour fluidifier les processus métier.\n\nConception d'outils d'analyse de processus basés sur un jumeau de données indépendant (architecture UNS) et une stack IA locale navigateur (Silero VAD, STT en WebAssembly/ONNX) : LLM fine-tunés (RAG, tool calling) et ingestion multimodale (audio, vidéo via VLM, flux capteurs) au service d'agents IA autonomes dédiés à des tâches métier.",
      en: "Ran an IIoT market benchmark (leading industrial platforms, technology trends, market positioning) and a market study on AI applied to IoT and IIoT: AI, Generative AI and Agentic AI use cases across industrial environments.\n\nContributed to Proofs of Concept for major industrial clients, including a major automotive OEM, exploring and integrating Digital Twins, LLMs, VLMs and STT solutions to streamline business processes.\n\nDesigned process-analysis tools based on an independent data digital twin (UNS architecture) and a local in-browser AI stack (Silero VAD, STT via WebAssembly/ONNX): fine-tuned LLMs (RAG, tool calling) and full multimodal ingestion (audio, video via VLM, sensor streams) powering autonomous AI agents on specific business tasks.",
    },
    logo: "accenture",
    span: "md:col-span-7",
  },
  {
    name: "JEECE · Head of IS & DPO",
    role: {
      fr: "Head of Information Systems & Data Protection Officer",
      en: "Head of Information Systems & Data Protection Officer",
    },
    period: "2025–2026",
    desc: {
      fr: "Direction du SI de la junior-entreprise d'ECE Paris.",
      en: "Led the IS of ECE Paris' junior enterprise.",
    },
    details: {
      fr: "Direction d'une équipe de 3 et supervision des projets de développement logiciel internes ainsi que des offres de services digitales pour les clients. Gestion de la stratégie du système d'information, de la conformité RGPD et de la livraison des projets en méthodes Agile.\n\nRefonte de l'infrastructure IT : mise en place de serveurs, pipeline de développement et de déploiement (VPS, GitHub, déploiement continu), gestion du DNS, et développement d'un ERP & CRM interne.",
      en: "Led a team of 3 and oversaw internal software development projects as well as client-facing digital service offerings. Managed information systems strategy, data protection compliance, and project delivery using Agile methods.\n\nRebuilt the IT infrastructure: server setup, development and deployment pipeline (VPS, GitHub, CI/CD), DNS management, and development of an in-house ERP & CRM.",
    },
    logo: "jeece",
    span: "md:col-span-5",
  },
  {
    name: "Immersion cybersécurité · CEA",
    role: {
      fr: "Stage, Direction de la sûreté nucléaire",
      en: "Internship, Nuclear Security and Safety Directorate",
    },
    period: "2024",
    duration: { fr: "2 mois", en: "2 months" },
    desc: {
      fr: "Immersion d'un mois au sein de la direction de la sûreté nucléaire.",
      en: "One-month immersion within the nuclear security and safety directorate.",
    },
    details: {
      fr: "Immersion de 7 jours dans l'équipe S3i cybersécurité : rédaction de rapports d'incidents, exposition au pentesting, gestion de crise. Le reste du temps partagé entre sécurité physique, sécurité économique et renseignement.",
      en: "7-day immersion in the S3i cybersecurity team: incident report writing, penetration testing exposure, crisis management. Remaining time split across physical security, economic security and intelligence.",
    },
    logo: "cea",
    span: "md:col-span-5",
  },
  {
    name: "Discovery Program · Microsoft",
    role: {
      fr: "Stage, Programme découverte (Commercial Executive)",
      en: "Internship, Discovery Program (Commercial Executive)",
    },
    period: "2019",
    duration: { fr: "2 mois", en: "2 months" },
    desc: {
      fr: "Contribution à un projet de groupe concevant et pitchant un concept produit tech.",
      en: "Contributed to a group project designing and pitching a tech product concept.",
    },
    details: {
      fr: "Stage de découverte chez Microsoft France (Issy-les-Moulineaux) : contribution à un projet de groupe consistant à concevoir et pitcher un concept de produit tech en une semaine, dans la filière Commercial Executive.",
      en: "Discovery internship at Microsoft France (Issy-les-Moulineaux): contributed to a group project designing and pitching a tech product concept within one week, Commercial Executive track.",
    },
    logo: "microsoft",
    span: "md:col-span-7",
  },
];
