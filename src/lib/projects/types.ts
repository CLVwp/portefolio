/**
 * A project links out, it never gets its own page:
 * - `links.post`   slug of a blog post (/blog/<slug>): the project's write-up.
 * - `links.demo`   external URL to a live demo (opens in a new tab).
 * - `links.source` external URL to the source code (opens in a new tab).
 * All three are optional; a card without links renders without a link row.
 */
export interface Project {
  slug: string;
  title: { fr: string; en: string };
  tagline: { fr: string; en: string };
  year: string;
  stack?: string[];
  links?: {
    demo?: string;
    source?: string;
    post?: string;
  };
}
