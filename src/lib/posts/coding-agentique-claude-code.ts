import type { Post } from "./types";

export const post: Post = {
  slug: "coding-agentique-claude-code",
  title: {
    fr: "Coding agentique : la boucle Plan → Execute → Check → Validate",
    en: "Agentic coding: the Plan → Execute → Check → Validate loop",
  },
  excerpt: {
    fr: "Un fichier = une story, critères Given / When / Then, mémoire persistante, hooks déterministes. Chez Accenture, la validation d'une fonctionnalité est passée de trois jours à six heures.",
    en: "One file = one story, Given / When / Then criteria, persistent memory, deterministic hooks. At Accenture, feature validation went from three days to six hours.",
  },
  date: "2026-09-15",
  readTime: "7 min",
  tag: "Analyse",
  content: {
    fr: `Chez Accenture, une grande partie des prototypes a été produite en coding agentique : Claude Code orchestré en boucles, où l'IA est traitée comme une équipe logicielle structurée, pas comme un assistant de complétion.

## La boucle

Plan → Execute → Check → Validate, déclinée à deux échelles : une boucle macro par fonctionnalité, des boucles micro par story. L'humain intervient en entrée avec une fiche de fonctionnalité, puis reprend la main à chaque fin de boucle : relecture du plan, du code produit et du rapport d'inspection avant validation.

## Trois règles de discipline

1. **Un fichier = une story.** Une story qui déborde de son fichier était mal découpée.
2. **Des critères Given / When / Then avant tout code.** Ça déplace l'effort de réflexion en amont, là où il coûte le moins cher.
3. **Un point de contrôle humain systématique.** Non négociable, même quand la boucle tourne la nuit.

## L'environnement

- **Mémoire persistante** : un CLAUDE.md global (mes conventions), un CLAUDE.md par projet (versionné, partagé avec l'équipe), et un serveur MCP connecté à Obsidian pour capitaliser décisions d'architecture et retours d'expérience d'une session à l'autre.
- **Hooks déterministes** : blocage d'actions destructives, normalisation de formats, déclenchés avant ou après chaque appel d'outil. La différence entre une consigne et une garantie : une instruction en langage naturel reste probabiliste, un hook ne l'est pas.
- **Sous-agents** : revue de sécurité, rédaction de tests, documentation, isolés dans des contextes dédiés pour ne pas polluer la session principale.

## Les gains, chiffrés

- Validation d'une fonctionnalité : de trois jours en scénario classique à environ six heures, avec un agent configuré en effort maximal et des runs de nuit ; le matin, il restait à arbitrer et valider.
- MVP : de 4 à 6 mois à environ 1 mois.
- Prototype léger fonctionnel : de 2 mois à 2 semaines.

La condition : l'architecture est validée en amont. Les agents exécutent un plan, ils ne le remplacent pas.

## Les limites, honnêtes

Le risque principal n'est pas le code manifestement faux, les tests le détectent : c'est le **code plausible**, conforme en apparence aux critères d'acceptation mais bâti sur une hypothèse implicite erronée. Le second risque est la dette de compréhension : produire vite du code qu'on n'a pas construit soi-même expose à ne plus savoir le faire évoluer. Les critères explicites et la revue de fin de boucle sont les garde-fous ; ils coûtent du temps, et c'est précisément ce coût qui rend le gain net défendable.`,
    en: `At Accenture, a large part of the prototypes was produced through agentic coding: Claude Code orchestrated in loops, treating AI as a structured software team, not as a completion assistant.

## The loop

Plan → Execute → Check → Validate, at two scales: a macro loop per feature, micro loops per story. The human steps in with a feature brief, then takes back control at the end of each loop: reviewing the plan, the produced code and the inspection report before validation.

## Three rules of discipline

1. **One file = one story.** A story that outgrows its file was badly cut.
2. **Given / When / Then criteria before any code.** It moves the thinking effort upstream, where it costs the least.
3. **A systematic human checkpoint.** Non-negotiable, even when the loop runs overnight.

## The environment

- **Persistent memory**: a global CLAUDE.md (my conventions), a per-project CLAUDE.md (versioned, shared with the team), and an MCP server connected to Obsidian to accumulate architecture decisions and lessons learned across sessions.
- **Deterministic hooks**: blocking destructive actions, normalizing formats, triggered before or after each tool call. The difference between an instruction and a guarantee: a natural-language instruction stays probabilistic, a hook doesn't.
- **Sub-agents**: security review, test writing, documentation, isolated in dedicated contexts so they don't pollute the main session.

## The gains, in numbers

- Feature validation: from three days in a classic scenario to about six hours, with an agent configured at maximum effort and overnight runs; in the morning, all that remained was to arbitrate and validate.
- MVPs: from 4-6 months down to about 1 month.
- Light functional prototypes: from 2 months to 2 weeks.

The condition: the architecture is validated upfront. Agents execute a plan, they don't replace it.

## The honest limits

The main risk is not obviously wrong code, tests catch that: it's **plausible code**, seemingly compliant with acceptance criteria but built on a wrong implicit assumption. The second risk is comprehension debt: quickly producing code you didn't build means you may no longer know how to evolve it. Explicit criteria and end-of-loop review are the guardrails; they cost time, and that very cost is what makes the net gain defensible.`,
  },
};
