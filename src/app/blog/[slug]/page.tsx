import { BlogPost } from "@/components/blog-post";
import { POSTS } from "@/lib/posts";

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <BlogPost slug={slug} />;
}
