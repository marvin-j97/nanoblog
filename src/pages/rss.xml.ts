import rss from "@astrojs/rss";

import config from "../config";
import { getPublishedPosts } from "../data/posts";

export async function GET() {
  const blog = await getPublishedPosts();
  return rss({
    title: config.site.title,
    description: config.site.description,
    site: config.site.url,
    items: blog.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.last_modified_at ?? post.data.published_at),
      link: `/post/${post.slug}/`,
    })),
  });
}
