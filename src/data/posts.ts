import { getCollection } from "astro:content";

export async function getPublishedPosts() {
  const posts = await getCollection("blog");

  return posts
    .filter((post) => !post.data.draft)
    .sort(
      (a, b) =>
        +(b.data.last_modified_at ?? b.data.published_at) -
        +(a.data.last_modified_at ?? a.data.published_at),
    );
}

export async function getTaggedPosts(tag: string) {
  const posts = await getPublishedPosts();
  return posts.filter((x) => x.data.tags.includes(tag));
}
