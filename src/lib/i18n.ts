export type Lang = "fr" | "en";

export const dict = {
  fr: {
    // Nav
    nav: {
      home: "Accueil",
      about: "À propos",
      blog: "Blog",
      contact: "Contact",
      menu: "Menu",
      close: "Fermer",
      footer: "Disponible pour un stage · 2027",
    },
    // Home
    home: {
      eyebrow: "Ingénieur embarqué & IA · Paris",
      title1: "Clément Viellard.",
      title2: "Du silicium au produit.",
      subtitle:
        "Étudiant ingénieur à ECE Paris, systèmes embarqués & IA. À la recherche d'un stage de 6 mois à partir de janvier 2027.",
      cta: "Voir le parcours",
      workEyebrow: "Expériences",
      workTitle: "Là où j'ai construit.",
      projectsEyebrow: "Projets",
      projectsTitle: "Ce que j'ai livré.",
      contactEyebrow: "Contact",
      contactTitle: "Un projet à construire ?",
      footer: "© 2026 · Construit avec Next.js, Motion & Bklit",
    },
    // About
    about: {
      eyebrow: "À propos",
      title1: "Ingénieur par formation,",
      title2: "curieux par obsession.",
      subtitle:
        "Je m'appelle Clément Viellard. Étudiant ingénieur à ECE Paris, spécialisé en systèmes embarqués (aéronautique & espace).\nCe qui me motive : comprendre comment les systèmes tiennent debout, du microprocesseur au produit, puis les rendre agréables à utiliser.",
      timelineEyebrow: "Parcours académique",
      certEyebrow: "Certifications",
      subjectsEyebrow: "Matières & compétences",
      subjectsLabel: "Matières fortes",
      skillsLabel: "Stack technique",
      projectsEyebrow: "Expériences & projets",
      cvEyebrow: "CV & réseaux",
      cvTitle: "Le parcours complet, en un PDF.",
      cvCta: "Télécharger le CV",
      linkedin: "LinkedIn",
    },
    // Blog
    blog: {
      eyebrow: "Blog",
      title1: "Notes, analyses",
      title2: "& projets perso.",
      subtitle:
        "Ce que j'apprends, ce qui casse, et ce que j'en déduis. Publié quand ça mérite de l'être.",
      readMore: "Lire l'article",
      next: "À lire ensuite",
      back: "← Tous les articles",
      readTime: "de lecture",
      tags: {
        "Projet perso": "Projet perso",
        Analyse: "Analyse",
        Notebook: "Notebook",
      } as Record<string, string>,
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      blog: "Blog",
      contact: "Contact",
      menu: "Menu",
      close: "Close",
      footer: "Available for an internship · 2027",
    },
    home: {
      eyebrow: "Embedded & AI Engineer · Paris",
      title1: "Clément Viellard.",
      title2: "From silicon to product.",
      subtitle:
        "Engineering student at ECE Paris, embedded systems & AI. Looking for a 6-month internship starting January 2027.",
      cta: "See the journey",
      workEyebrow: "Experience",
      workTitle: "Where I've built.",
      projectsEyebrow: "Projects",
      projectsTitle: "What I've shipped.",
      contactEyebrow: "Contact",
      contactTitle: "Something worth building?",
      footer: "© 2026 · Built with Next.js, Motion & Bklit",
    },
    about: {
      eyebrow: "About",
      title1: "Engineer by training,",
      title2: "curious by obsession.",
      subtitle:
        "I'm Clément Viellard. Engineering student at ECE Paris, specialized in embedded systems (aeronautics & space).\nWhat drives me: understanding how systems hold together, from the microprocessor to the product, then making them pleasant to use.",
      timelineEyebrow: "Academic journey",
      certEyebrow: "Certifications",
      subjectsEyebrow: "Subjects & skills",
      subjectsLabel: "Strong subjects",
      skillsLabel: "Technical stack",
      projectsEyebrow: "Experience & projects",
      cvEyebrow: "CV & networks",
      cvTitle: "The full journey, in one PDF.",
      cvCta: "Download CV",
      linkedin: "LinkedIn",
    },
    blog: {
      eyebrow: "Blog",
      title1: "Notes, analyses",
      title2: "& personal projects.",
      subtitle:
        "What I learn, what breaks, and what I conclude. Published when it deserves to be.",
      readMore: "Read article",
      next: "Read next",
      back: "← All articles",
      readTime: "read",
      tags: {
        "Projet perso": "Personal project",
        Analyse: "Analysis",
        Notebook: "Notebook",
      } as Record<string, string>,
    },
  },
} as const;

type DeepString<T> = {
  [K in keyof T]: T[K] extends string ? string : DeepString<T[K]>;
};

export type Dict = DeepString<typeof dict.fr>;
