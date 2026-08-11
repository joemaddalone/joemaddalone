import { defineCollection } from "astro:content";
import { z } from "zod";
import { glob } from "astro/loaders";
// Define a `loader` and `schema` for each collection

export const BLOG_PATH = "src/data/blog/";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.(md|mdx|astro)", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      excerpt: z.string(),
      short: z.string().optional(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      coverImage: image().or(z.string()).optional(),
      coverImageInPost: z.boolean().optional().default(true),
      description: z.string().optional(),
      canonicalURL: z.string().optional(),
      timezone: z.string().optional(),
    }),
});

// Export a single `collections` object to register your collection(s)
export const collections = { blog };
