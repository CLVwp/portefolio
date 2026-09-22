export interface Post {
  slug: string;
  title: { fr: string; en: string };
  excerpt: { fr: string; en: string };
  date: string;
  readTime: string;
  tag: "Projet perso" | "Analyse" | "Notebook";
  content: { fr: string; en: string };
}
