import { defineCollection } from "astro:content";
import { z } from "zod";
import { glob } from "astro/loaders";
// Define a `loader` and `schema` for each collection

export const BLOG_PATH = "src/data/blog/";
export const NOTES_PATH = "src/data/notes/";
export const VISUALS_PATH = "src/data/images/";

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

/**
 * Field Notes — short-form blurbs with a tag + source link.
 * Lives in src/data/notes/. Body is a brief (1–5 sentence) blurb;
 * frontmatter carries the metadata and source.
 *
 * Required:  date, excerpt (short blurb fallback), source, tag
 * Optional:  title (if absent, derived from id), draft, timezone
 */
const notes = defineCollection({
  loader: glob({ pattern: "**/*.(md|mdx)", base: `./${NOTES_PATH}` }),
  schema: () =>
    z.object({
      title: z.string().optional(),
      date: z.date(),
      /** Short blurb — shown in listing; if body exists it takes precedence */
      excerpt: z.string().optional(),
      draft: z.boolean().optional(),
      tag: z.string().default("note"),
      /** Canonical source URL for this observation */
      source: z.string().url().optional(),
      sourceLabel: z.string().optional(),
      timezone: z.string().optional(),
    }),
});

/**
 * Visuals — diagrams, images, drawings with optional title + description.
 * Lives in src/data/images/. Each entry is a markdown file with frontmatter;
 * the image itself is a sibling file referenced via the `image` field.
 *
 * Required:  date, image
 * Optional:  title, description, alt, tag, draft, timezone
 *
 * Example file: src/data/images/2026-09-18-system-loop/index.md
 *   ---
 *   title: "System Loop — Local Inference"
 *   date: 2026-09-18
 *   description: "A small diagram of the local inference loop."
 *   image: "./diagram.svg"
 *   alt: "Diagram showing prompt → model → tool → observation loop"
 *   tag: "diagram"
 *   ---
 *
 *   Optional longer caption in the body is rendered below the image.
 */
const visuals = defineCollection({
  loader: glob({ pattern: "**/*.(md|mdx)", base: `./${VISUALS_PATH}` }),
  schema: ({ image }) =>
    z.object({
      title: z.string().optional(),
      date: z.date(),
      description: z.string().optional(),
      image: image(),
      alt: z.string().optional(),
      tag: z.string().default("visual"),
      draft: z.boolean().optional(),
      timezone: z.string().optional(),
    }),
});

// Export a single `collections` object to register your collection(s)
export const collections = { blog, notes, visuals };
