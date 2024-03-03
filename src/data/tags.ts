import { getPublishedPosts } from "./posts";

export async function getUniqueTags(): Promise<string[]> {
  const posts = await getPublishedPosts();
  return [...new Set(posts.flatMap((post) => post.data.tags))].sort();
}
