// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `loader` and `schema` for each collection
const blog = defineCollection({
  loader: glob({ pattern: '**/*.(md|mdx|astro)', base: "./src/pages/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    tags: z.array(z.string()),
    short: z.string().optional()
  })
});

// Export a single `collections` object to register your collection(s)
export const collections = { blog };
