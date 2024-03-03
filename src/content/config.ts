import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z
    .object({
      title: z.string().min(1),
      description: z.string().min(1),
      author: z.string().optional(),
      tags: z
        .string()
        .min(1)
        .regex(/^[a-z0-9_\- ]+$/)
        .array(),
      searchTerms: z.string().min(1).array().optional(),
      published_at: z.union([z.date(), z.string()]),
      last_modified_at: z.union([z.date(), z.string()]),
      draft: z.boolean().optional(),
      featured: z.boolean().optional(),
      image: z.string().optional(),
    })
    .strict(),
});

export const collections = {
  blog: blogCollection,
};
