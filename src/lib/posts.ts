export interface Post {
  slug: string;
  title: { fr: string; en: string };
  excerpt: { fr: string; en: string };
  date: string;
  readTime: string;
  tag: "Projet perso" | "Analyse" | "Notebook";
  content: { fr: string; en: string };
}

export const POSTS: Post[] = [
  {
    slug: "digital-twin-uns-ai-embarquee",
    title: {
      fr: "Jumeau de données UNS + IA embarquée : ce que j'ai appris chez Accenture",
      en: "UNS data twin + embedded AI: what I learned at Accenture",
    },
    excerpt: {
      fr: "Trois prototypes industriels, une architecture UNS et une stack IA qui tourne entièrement dans le navigateur. Retour sur un stage où le WebAssembly a changé la donne.",
      en: "Three industrial prototypes, an UNS architecture and an AI stack running entirely in the browser. Reflections on an internship where WebAssembly changed the game.",
    },
    date: "2026-09-01",
    readTime: "8 min",
    tag: "Projet perso",
    content: {
      fr: `Chez Accenture, j'ai travaillé sur des prototypes d'applications métier industrielles. Le cœur technique : un jumeau de données indépendant basé sur une architecture UNS (Unified Namespace), et une stack IA qui tourne **localement, dans le navigateur**.

## Pourquoi l'IA dans le navigateur ?

Dans l'industrie, les données ne sortent pas toujours de l'usine. Contraintes de confidentialité, latence, réseaux cloisonnés. La solution : exécuter l'IA côté client avec WebAssembly et ONNX.

Concrètement :
- **Silero VAD** pour la détection d'activité vocale
- **STT (speech-to-text)** en WebAssembly/ONNX
- Des **LLM fine-tunés** avec RAG et tool calling, orchestrés en agents autonomes dédiés à des tâches métier précises

## Ce que l'UNS m'a appris

L'Unified Namespace, c'est une architecture où chaque donnée a une adresse hiérarchique unique et publie son état en temps réel. L'intuition : un arbre MQTT où \`usine/ligne3/four1/température\` est une vérité unique, partagée par tous les consommateurs.

Le bénéfice est énorme : plus de "qui a la bonne version de cette donnée ?". Le jumeau de données devient une source de vérité, et les agents IA s'y branchent sans logique d'intégration ad hoc.

## Le piège des agents autonomes

Un agent LLM avec tool calling, ça part vite en vrille si les outils sont mal bornés. La leçon : chaque outil doit avoir un contrat strict (entrées typées, sorties vérifiables), et l'agent doit être évaluable — sinon impossible de savoir s'il dégrade ou améliore le processus.`,
      en: `At Accenture, I worked on industrial business-application prototypes. The technical core: an independent data twin based on an UNS (Unified Namespace) architecture, and an AI stack running **locally, in the browser**.

## Why AI in the browser?

In industry, data doesn't always leave the factory. Privacy constraints, latency, segmented networks. The solution: run AI client-side with WebAssembly and ONNX.

Concretely:
- **Silero VAD** for voice activity detection
- **STT (speech-to-text)** via WebAssembly/ONNX
- **Fine-tuned LLMs** with RAG and tool calling, orchestrated as autonomous agents dedicated to specific business tasks

## What UNS taught me

The Unified Namespace is an architecture where every piece of data has a unique hierarchical address and publishes its state in real time. The intuition: an MQTT tree where \`factory/line3/oven1/temperature\` is a single truth, shared by all consumers.

The benefit is huge: no more "who has the right version of this data?". The data twin becomes a source of truth, and AI agents plug into it without ad-hoc integration logic.

## The trap of autonomous agents

An LLM agent with tool calling goes off the rails fast if the tools are poorly bounded. The lesson: every tool needs a strict contract (typed inputs, verifiable outputs), and the agent must be evaluable — otherwise you can't tell whether it degrades or improves the process.`,
    },
  },
  {
    slug: "cea-cybersecurite-s3i",
    title: {
      fr: "7 jours dans la cybersécurité nucléaire au CEA",
      en: "7 days inside nuclear cybersecurity at the CEA",
    },
    excerpt: {
      fr: "Immersion dans l'équipe S3i du CEA : rapports d'incidents, pentesting, gestion de crise. Ce que la sûreté nucléaire m'a appris sur la rigueur technique.",
      en: "Immersion with the CEA's S3i team: incident reports, pentesting, crisis management. What nuclear safety taught me about technical rigor.",
    },
    date: "2026-08-15",
    readTime: "6 min",
    tag: "Notebook",
    content: {
      fr: `Un mois au CEA, dont une semaine avec l'équipe S3i (cybersécurité des systèmes d'information industriels). Un contexte où "ça marchera probablement" n'est pas une réponse acceptable.

## La culture du rapport d'incident

Écrire un rapport d'incident, ce n'est pas raconter une histoire : c'est produire un document qui doit permettre à quelqu'un d'autre de comprendre, reproduire et corriger — sans toi, parfois des années plus tard.

Structure apprise sur place :
1. **Faits** — horodatés, sourcés, sans interprétation
2. **Analyse** — hypothèses explicitement marquées comme telles
3. **Recommandations** — hiérarchisées par criticité, avec coût estimé

## Pentesting : la partie émergée

L'exposition au pentesting m'a laissé une intuition durable : la surface d'attaque n'est presque jamais là où on la cherche. Les failles venaient des interfaces de maintenance oubliées, des mots de passe par défaut jamais changés, des flux inter-réseaux "temporaires" vieux de dix ans.

## Ce que ça change dans mon code

Depuis, j'écris chaque système en me demandant : "quel est le mode de défaillance, et qui le détecte ?". La gestion de crise, c'est du design de système appliqué à l'avance.`,
      en: `One month at the CEA, including a week with the S3i team (cybersecurity for industrial information systems). A context where "it will probably work" is not an acceptable answer.

## The incident report culture

Writing an incident report isn't telling a story: it's producing a document that must let someone else understand, reproduce and fix — without you, sometimes years later.

Structure learned on site:
1. **Facts** — timestamped, sourced, no interpretation
2. **Analysis** — hypotheses explicitly marked as such
3. **Recommendations** — ranked by criticality, with estimated cost

## Pentesting: the visible part

The pentesting exposure left me with a lasting intuition: the attack surface is almost never where you look for it. The vulnerabilities came from forgotten maintenance interfaces, default passwords never changed, "temporary" cross-network flows ten years old.

## What it changes in my code

Since then, I write every system asking: "what is the failure mode, and who detects it?". Crisis management is system design applied in advance.`,
    },
  },
  {
    slug: "erasmus-ruse-bulgarie",
    title: {
      fr: "Erasmus à Ruse : étudier l'ingénierie dans une autre langue (et une autre rigueur)",
      en: "Erasmus in Ruse: studying engineering in another language (and another rigor)",
    },
    excerpt: {
      fr: "Un semestre à l'University of Ruse en Bulgarie. Microprocesseurs, ML, économie internationale — et une leçon sur ce que « apprendre » veut dire quand on change de système.",
      en: "One semester at the University of Ruse in Bulgaria. Microprocessors, ML, international economics — and a lesson on what 'learning' means when the system changes.",
    },
    date: "2026-07-20",
    readTime: "5 min",
    tag: "Notebook",
    content: {
      fr: `Un semestre d'échange à l'University of Ruse, en Bulgarie. Cours en anglais, camarades de dix nationalités, et un système académique différent du français.

## Le microprocesseur, autrement

Le cours de microprocesseurs à Ruse était plus pratique que ce que j'avais connu : on manipulait le hardware tôt, avec des TP sur cartes réelles dès les premières semaines. En France, on avait d'abord construit la théorie. Les deux approches se complètent — mais la manipulation directe ancre les concepts bien plus vite.

## Le ML sans la magie

Le cours de machine learning allait droit au but : descente de gradient à la main sur papier, matrices calculées au tableau, avant toute ligne de code. Quand tu as dérivé la rétropropagation à la main une fois, les frameworks perdent leur côté magique.

## Ce que l'échange m'a laissé

- L'anglais technique devient naturel quand il est le seul canal
- Chaque système académique optimise quelque chose de différent : profondeur théorique (France) vs. rapidité de mise en pratique (Ruse)
- L'économie internationale et le business management, que je n'aurais jamais choisis en France, se sont révélés utiles pour comprendre comment la tech se finance`,
      en: `One exchange semester at the University of Ruse, Bulgaria. Courses in English, classmates from ten nationalities, and an academic system different from the French one.

## The microprocessor, differently

The microprocessors course at Ruse was more hands-on than what I had known: we manipulated hardware early, with labs on real boards from the first weeks. In France, we had built the theory first. Both approaches complement each other — but direct manipulation anchors concepts much faster.

## ML without the magic

The machine learning course went straight to the point: gradient descent by hand on paper, matrices computed on the board, before any line of code. Once you've derived backpropagation by hand, frameworks lose their magical side.

## What the exchange left me

- Technical English becomes natural when it's the only channel
- Every academic system optimizes something different: theoretical depth (France) vs. speed to practice (Ruse)
- International economics and business management, which I would never have chosen in France, turned out useful to understand how tech gets funded`,
    },
  },
  {
    slug: "jeece-diriger-un-si-etudiant",
    title: {
      fr: "Diriger un SI étudiant : JEECE, RGPD et la réalité du terrain",
      en: "Leading a student IS: JEECE, GDPR and ground truth",
    },
    excerpt: {
      fr: "Head of Information Systems & DPO de la junior-entreprise d'ECE Paris : équipe de 3, projets internes, offres clients, conformité RGPD. Ce que gérer veut dire avant d'avoir un diplôme.",
      en: "Head of Information Systems & DPO of ECE Paris' junior enterprise: team of 3, internal projects, client offerings, GDPR compliance. What managing means before you have a degree.",
    },
    date: "2026-06-28",
    readTime: "7 min",
    tag: "Projet perso",
    content: {
      fr: `Un an comme Head of Information Systems & DPO à JEECE, la junior-entreprise d'ECE Paris. Une équipe de 3, des projets internes, des offres de services digitales pour des clients réels, et la conformité RGPD.

## Le RGPD, concrètement

Être DPO d'une petite structure, c'est apprendre que la conformité n'est pas un document, c'est une discipline de données :

- Cartographier **qui détient quoi** (souvent : personne ne sait)
- Minimiser : la donnée qu'on ne collecte pas n'a pas besoin d'être protégée
- Documenter les traitements au moment où on les conçoit, pas après

## Gérer 3 personnes, c'est déjà gérer

La tentation d'une petite équipe : tout faire soi-même. L'erreur. Ce qui a fonctionné : des périmètres clairs, des revues hebdo courtes, et accepter que le travail des autres ne ressemble pas au mien mais livre le même résultat.

## Agile à échelle humaine

Kanban sur un tableau simple, Scrum allégé sans les cérémonies qui n'apportent rien à 3 personnes. La méthodologie doit servir l'équipe, pas l'inverse — leçon valable pour n'importe quelle taille d'équipe.`,
      en: `One year as Head of Information Systems & DPO at JEECE, ECE Paris' junior enterprise. A team of 3, internal projects, digital service offerings for real clients, and GDPR compliance.

## GDPR, concretely

Being the DPO of a small structure teaches you that compliance isn't a document, it's a data discipline:

- Map **who holds what** (often: nobody knows)
- Minimize: data you don't collect doesn't need protecting
- Document processing when you design it, not after

## Managing 3 people is already managing

The temptation of a small team: do everything yourself. The mistake. What worked: clear perimeters, short weekly reviews, and accepting that other people's work doesn't look like mine but delivers the same result.

## Agile at human scale

Kanban on a simple board, lightweight Scrum without the ceremonies that add nothing to 3 people. Methodology must serve the team, not the other way around — a lesson valid at any team size.`,
    },
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((post) => post.slug === slug);
}
