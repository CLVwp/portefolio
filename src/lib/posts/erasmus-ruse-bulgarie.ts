import type { Post } from "./types";

export const post: Post = {
  slug: "erasmus-ruse-bulgarie",
  title: {
    fr: "Erasmus à Ruse : étudier l'ingénierie dans une autre langue (et une autre rigueur)",
    en: "Erasmus in Ruse: studying engineering in another language (and another rigor)",
  },
  excerpt: {
    fr: "Un semestre à l'University of Ruse en Bulgarie. Microprocesseurs, ML, économie internationale, et une leçon sur ce que « apprendre » veut dire quand on change de système.",
    en: "One semester at the University of Ruse in Bulgaria. Microprocessors, ML, international economics, and a lesson on what 'learning' means when the system changes.",
  },
  date: "2026-07-20",
  readTime: "5 min",
  tag: "Notebook",
  content: {
    fr: `Un semestre d'échange à l'University of Ruse, en Bulgarie. Cours en anglais, camarades de dix nationalités, et un système académique différent du français.

## Le microprocesseur, autrement

Le cours de microprocesseurs à Ruse était plus pratique que ce que j'avais connu : on manipulait le hardware tôt, avec des TP sur cartes réelles dès les premières semaines. En France, on avait d'abord construit la théorie. Les deux approches se complètent, mais la manipulation directe ancre les concepts bien plus vite.

## Le ML sans la magie

Le cours de machine learning allait droit au but : descente de gradient à la main sur papier, matrices calculées au tableau, avant toute ligne de code. Quand tu as dérivé la rétropropagation à la main une fois, les frameworks perdent leur côté magique.

## Ce que l'échange m'a laissé

- L'anglais technique devient naturel quand il est le seul canal
- Chaque système académique optimise quelque chose de différent : profondeur théorique (France) vs. rapidité de mise en pratique (Ruse)
- L'économie internationale et le business management, que je n'aurais jamais choisis en France, se sont révélés utiles pour comprendre comment la tech se finance`,
    en: `One exchange semester at the University of Ruse, Bulgaria. Courses in English, classmates from ten nationalities, and an academic system different from the French one.

## The microprocessor, differently

The microprocessors course at Ruse was more hands-on than what I had known: we manipulated hardware early, with labs on real boards from the first weeks. In France, we had built the theory first. Both approaches complement each other, but direct manipulation anchors concepts much faster.

## ML without the magic

The machine learning course went straight to the point: gradient descent by hand on paper, matrices computed on the board, before any line of code. Once you've derived backpropagation by hand, frameworks lose their magical side.

## What the exchange left me

- Technical English becomes natural when it's the only channel
- Every academic system optimizes something different: theoretical depth (France) vs. speed to practice (Ruse)
- International economics and business management, which I would never have chosen in France, turned out useful to understand how tech gets funded`,
  },
};
