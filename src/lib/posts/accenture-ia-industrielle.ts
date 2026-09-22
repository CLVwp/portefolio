import type { Post } from "./types";

export const post: Post = {
  slug: "accenture-ia-industrielle",
  title: {
    fr: "Accenture : de l'étude de marché aux jumeaux numériques industriels",
    en: "Accenture: from market study to industrial digital twins",
  },
  excerpt: {
    fr: "Six mois sur l'IA industrielle : une étude de marché, trois prototypes de jumeaux numériques pour de grands comptes (anonymisés ici), un salon professionnel. Leçon centrale : la valeur vient du système, pas du modèle.",
    en: "Six months on industrial AI: a market study, three digital-twin prototypes for major accounts (anonymized here), a trade show. Central lesson: value comes from the system, not the model.",
  },
  date: "2026-09-22",
  readTime: "8 min",
  tag: "Projet perso",
  content: {
    fr: `Six mois chez Accenture, dans l'équipe des solutions connectées pour l'industrie (l'ex-Industry X, rattachée à Supply Chain & Engineering). Deux phases complémentaires : une étude de marché sur l'IA appliquée aux produits connectés, puis des prototypes de jumeaux numériques pour de grands comptes. Les clients sont anonymisés ici ; les leçons, non.

## Le fil conducteur

Toute la mission tient dans une conclusion : la valeur d'un système d'IA industrielle ne vient pas du modèle, mais du système qui l'entoure. Données fiables, workflow structuré, indicateurs mesurables, gouvernance explicite. Une IA performante branchée sur un processus chaotique amplifie le chaos.

## Trois prototypes, un même socle

Le terrain d'entraînement : une ligne de production IIoT simulée (capteurs, passerelle edge, cloud, MES) sur laquelle j'ai produit la chaîne complète des livrables d'ingénierie système. Architecture device → edge → cloud → MES, télémétrie MQTT, un premier agent qui construit le jumeau de la ligne à partir des données remontées (goulots d'étranglement, sur-qualité), un second qui l'interroge en langage naturel.

Ensuite, trois cas clients :

- **Un constructeur automobile majeur** : un simulateur temps réel de leur jumeau numérique d'usine, animé par WebSocket, avec trois agents LLM : interaction en langage naturel, contrôle du jumeau, création de nouveaux éléments à partir d'une simple description. Les appels de modèles passent côté serveur via Google Vertex (des modèles Anthropic derrière) : clés jamais exposées, appels journalisés, coût par session maîtrisé. Le démonstrateur a été présenté sur le stand Accenture au salon Tech For Industry.
- **Un autre OEM automobile** : un jumeau de supervision multi-sites, consolidant production, stock et indicateurs en quasi-temps réel à partir de sites aux référentiels hétérogènes. L'enseignement clé : la difficulté du multi-sites n'est pas technologique, elle est sémantique. Tant que deux sites ne nomment pas de la même manière un arrêt de ligne, aucune consolidation n'est possible.
- **Un motoriste aéronautique** : un outil d'audit qui transforme une vidéo du terrain en transcript (STT exécuté en local), puis en jumeau des processus observés : flowchart, Gantt, temps par étape. Là où un auditeur passait plusieurs heures à chronométrer et saisir sous Excel, le traitement tombe à une quinzaine de minutes. La règle de conception : séparer strictement transcription et interprétation, pour que chaque chiffre du rapport remonte à la seconde de vidéo qui le justifie.

## Ce que ça m'a appris

- **Contraindre les agents aux données structurées.** Nos agents ne raisonnent que sur le jumeau, jamais sur leurs connaissances générales. Dans l'industrie, une réponse « je ne sais pas » vaut mieux qu'une réponse plausible et fausse.
- **Le cadrage décide de tout.** ConOps, traçabilité du besoin métier à la user story, critères de validation : c'est ce qui rend un livrable défendable devant un directeur d'usine.
- **Le coding agentique change l'échelle de livraison** : c'est le sujet du deuxième article.`,
    en: `Six months at Accenture, in the industry connected-solutions team (the former Industry X, now part of Supply Chain & Engineering). Two complementary phases: a market study on AI applied to connected products, then digital-twin prototypes for major accounts. Clients are anonymized here; the lessons are not.

## The common thread

The whole mission fits in one conclusion: the value of an industrial AI system doesn't come from the model, it comes from the system around it. Reliable data, structured workflows, measurable indicators, explicit governance. A powerful AI plugged into a chaotic process amplifies the chaos.

## Three prototypes, one foundation

The training ground: a simulated IIoT production line (sensors, edge gateway, cloud, MES) on which I produced the full systems-engineering deliverable chain. Device → edge → cloud → MES architecture, MQTT telemetry, one agent that builds the line's twin from incoming data (bottlenecks, over-quality), and one that queries it in natural language.

Then three client cases:

- **A major automotive manufacturer**: a real-time simulator of their factory digital twin, animated over WebSocket, with three LLM agents: natural-language interaction, twin control, and generating new twin elements from a plain description. Model calls run server-side through Google Vertex (Anthropic models behind it): keys never exposed, calls logged, cost per session under control. The demo was shown on Accenture's stand at the Tech For Industry trade show.
- **Another automotive OEM**: a multi-site supervision twin consolidating production, inventory and KPIs in near real time across sites with heterogeneous data standards. Key lesson: the multi-site challenge is not technological, it is semantic. Until two sites name a line stop the same way, no consolidation is possible.
- **An aerospace engine manufacturer**: an audit tool that turns shop-floor video into a transcript (STT running locally), then into a twin of the observed processes: flowchart, Gantt chart, time per step. Where an auditor spent hours timing operations and typing into Excel, processing drops to about fifteen minutes. The design rule: strictly separate transcription from interpretation, so every figure in the report traces back to the second of video that justifies it.

## What it taught me

- **Constrain agents to structured data.** Our agents only reason over the twin, never over their general knowledge. In industry, an "I don't know" beats a plausible wrong answer.
- **Framing decides everything.** ConOps, business-need-to-user-story traceability, validation criteria: that is what makes a deliverable defensible in front of a plant director.
- **Agentic coding changes the delivery scale**: that's the second article's topic.`,
  },
};
