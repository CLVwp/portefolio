import { post as accentureIaIndustrielle } from "./accenture-ia-industrielle";
import { post as ceaCybersecuriteS3i } from "./cea-cybersecurite-s3i";
import { post as codingAgentiqueClaudeCode } from "./coding-agentique-claude-code";
import { post as erasmusRuseBulgarie } from "./erasmus-ruse-bulgarie";
import { post as jeeceDirigerUnSiEtudiant } from "./jeece-diriger-un-si-etudiant";
import type { Post } from "./types";

export type { Post } from "./types";

/** Display order: newest first. Add a new post file and list it here. */
export const POSTS: Post[] = [
  accentureIaIndustrielle,
  codingAgentiqueClaudeCode,
  ceaCybersecuriteS3i,
  erasmusRuseBulgarie,
  jeeceDirigerUnSiEtudiant,
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((post) => post.slug === slug);
}
