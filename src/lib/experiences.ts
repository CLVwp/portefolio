import type { Experience } from "@/components/experience-card";

/**
 * Single source of truth for work experiences, shared by the homepage
 * and the about page. Edit here once, both pages update.
 */
export const EXPERIENCES: Experience[] = [
  {
    name: "Digital Twin UNS + AI",
    role: {
      fr: "Firmware Embedded Engineer Associate / AI Engineer",
      en: "Firmware Embedded Engineer Associate / AI Engineer",
    },
    period: "2026",
    desc: {
      fr: "Développement de 3 prototypes d'applications métier industrielles.",
      en: "Development of 3 industrial business-application prototypes.",
    },
    details: {
      fr: "Conception d'outils d'analyse de processus basés sur un jumeau de données indépendant (architecture UNS) et une stack IA locale navigateur (Silero VAD, STT en WebAssembly/ONNX). Le système intègre des LLM fine-tunés (RAG, tool calling, harness) et s'étend à l'ingestion multimodale complète (audio, vidéo via VLM, flux capteurs) pour exécuter des agents IA autonomes dédiés à des tâches métier spécifiques.",
      en: "Design of process-analysis tools based on an independent data digital twin (UNS architecture) and a local, in-browser AI stack (Silero VAD, STT via WebAssembly/ONNX). The system integrates fine-tuned LLMs (RAG, tool calling, harness) and extends to full multimodal ingestion (audio, video via VLM, sensor streams) to run autonomous AI agents dedicated to specific business tasks.",
    },
    logo: "accenture",
    span: "md:col-span-7",
  },
  {
    name: "JEECE — Head of IS & DPO",
    role: {
      fr: "Head of Information Systems & Data Protection Officer",
      en: "Head of Information Systems & Data Protection Officer",
    },
    period: "2025 — 2026",
    desc: {
      fr: "Direction du SI de la junior-entreprise d'ECE Paris.",
      en: "Led the IS of ECE Paris' junior enterprise.",
    },
    details: {
      fr: "Direction d'une équipe de 3 et supervision des projets de développement logiciel internes ainsi que des offres de services digitales pour les clients. Gestion de la stratégie du système d'information, de la conformité RGPD et de la livraison des projets en méthodes Agile.",
      en: "Led a team of 3 and oversaw internal software development projects as well as client-facing digital service offerings. Managed information systems strategy, data protection compliance, and project delivery using Agile methods.",
    },
    logo: "jeece",
    span: "md:col-span-5",
  },
  {
    name: "Immersion cybersécurité — CEA",
    role: {
      fr: "Stage — Direction de la sûreté nucléaire",
      en: "Internship — Nuclear Security and Safety Directorate",
    },
    period: "2024",
    desc: {
      fr: "Immersion d'un mois au sein de la direction de la sûreté nucléaire.",
      en: "One-month immersion within the nuclear security and safety directorate.",
    },
    details: {
      fr: "Immersion de 7 jours dans l'équipe S3i cybersécurité : rédaction de rapports d'incidents, exposition au pentesting, gestion de crise. Exposition transverse aux autres équipes liées à la sécurité et à la sûreté.",
      en: "7-day immersion in the S3i cybersecurity team: incident report writing, penetration testing exposure, crisis management. Cross-functional exposure to other security- and safety-related teams.",
    },
    logo: "cea",
    span: "md:col-span-5",
  },
  {
    name: "Discovery Program — Microsoft",
    role: {
      fr: "Stage — Programme découverte (Commercial Executive)",
      en: "Internship — Discovery Program (Commercial Executive)",
    },
    period: "2019",
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
