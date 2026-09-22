import type { Post } from "./types";

export const post: Post = {
  slug: "cea-cybersecurite-s3i",
  title: {
    fr: "7 jours dans la cybersécurité nucléaire au CEA",
    en: "7 days inside nuclear cybersecurity at the CEA",
  },
  excerpt: {
    fr: "Immersion dans l'équipe S3i du CEA : rapports d'incidents, pentesting, gestion de crise, et le reste du mois entre sécurité physique, économique et renseignement.",
    en: "Immersion with the CEA's S3i team: incident reports, pentesting, crisis management, and the rest of the month across physical, economic and intelligence security.",
  },
  date: "2026-08-15",
  readTime: "7 min",
  tag: "Notebook",
  content: {
    fr: `Un mois au CEA, dont une semaine avec l'équipe S3i (cybersécurité des systèmes d'information industriels). Un contexte où "ça marchera probablement" n'est pas une réponse acceptable.

## La culture du rapport d'incident

Écrire un rapport d'incident, ce n'est pas raconter une histoire : c'est produire un document qui doit permettre à quelqu'un d'autre de comprendre, reproduire et corriger, sans toi, parfois des années plus tard.

Structure apprise sur place :
1. **Faits** : horodatés, sourcés, sans interprétation
2. **Analyse** : hypothèses explicitement marquées comme telles
3. **Recommandations** : hiérarchisées par criticité, avec coût estimé

## Pentesting : la partie émergée

L'exposition au pentesting m'a laissé une intuition durable : la surface d'attaque n'est presque jamais là où on la cherche. Les failles venaient des interfaces de maintenance oubliées, des mots de passe par défaut jamais changés, des flux inter-réseaux "temporaires" vieux de dix ans.

## Le reste du mois : sécurité physique, économique, renseignement

La cyber n'est qu'un quadrant. Le reste du temps passait avec trois autres mondes : sécurité physique (contrôle d'accès, zonage, protection des installations), sécurité économique (protéger le patrimoine informationnel) et renseignement. Trois cultures différentes, une même grille de lecture : penser en vulnérabilités, scénarios de menaces et conséquences, pas seulement en failles logicielles. Ça recalibre : une bonne partie de ce qu'on sécurise en IT se perd aussi par une porte mal fermée ou un document mal rangé.

## Ce que ça change dans mon code

Depuis, j'écris chaque système en me demandant : "quel est le mode de défaillance, et qui le détecte ?". La gestion de crise, c'est du design de système appliqué à l'avance.`,
    en: `One month at the CEA, including a week with the S3i team (cybersecurity for industrial information systems). A context where "it will probably work" is not an acceptable answer.

## The incident report culture

Writing an incident report isn't telling a story: it's producing a document that must let someone else understand, reproduce and fix, without you, sometimes years later.

Structure learned on site:
1. **Facts**: timestamped, sourced, no interpretation
2. **Analysis**: hypotheses explicitly marked as such
3. **Recommendations**: ranked by criticality, with estimated cost

## Pentesting: the visible part

The pentesting exposure left me with a lasting intuition: the attack surface is almost never where you look for it. The vulnerabilities came from forgotten maintenance interfaces, default passwords never changed, "temporary" cross-network flows ten years old.

## The rest of the month: physical, economic, intelligence

Cyber is only one quadrant. The rest of the time went to three other worlds: physical security (access control, zoning, facility protection), economic security (protecting the organization's information assets) and intelligence. Three different cultures, one shared lens: thinking in vulnerabilities, threat scenarios and consequences, not only in software flaws. It recalibrates you: much of what we secure in IT also leaks through a badly closed door or a misplaced document.

## What it changes in my code

Since then, I write every system asking: "what is the failure mode, and who detects it?". Crisis management is system design applied in advance.`,
  },
};
