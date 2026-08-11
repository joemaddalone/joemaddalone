import { getCollection, type CollectionEntry } from "astro:content";

export interface CourseDefinition {
  slug: string;
  title: string;
  description?: string;
}

/**
 * Extracts the course slug from a courses collection entry id.
 * Entry ids look like "local-ai/running-ollama-locally" — the first
 * path segment is the course directory name, which is the course slug.
 */
export function courseSlugFromEntry(entry: CollectionEntry<"courses">): string {
  return entry.id.split("/")[0];
}

/**
 * Returns all course definitions from the courseMeta collection.
 * Each definition comes from a _course.json file inside a course directory.
 */
export async function getAllCourseDefinitions(): Promise<CourseDefinition[]> {
  const entries = await getCollection("courseMeta");
  return entries.map((e) => e.data as CourseDefinition);
}

/**
 * Returns the course definition for a given slug, or undefined.
 */
export async function getCourseDefinition(
  slug: string
): Promise<CourseDefinition | undefined> {
  const all = await getAllCourseDefinitions();
  return all.find((c) => c.slug === slug);
}

/**
 * Returns all non-draft courses collection entries that belong to a given
 * course directory (identified by the leading path segment of the entry id),
 * sorted by courseOrder ascending, then by date as a tiebreaker.
 */
export async function getCoursePosts(
  courseSlug: string
): Promise<CollectionEntry<"courses">[]> {
  const entries = await getCollection("courses", ({ id, data }) => {
    return !data.draft && id.startsWith(`${courseSlug}/`);
  });

  return entries.sort((a, b) => {
    const orderA = a.data.courseOrder ?? Infinity;
    const orderB = b.data.courseOrder ?? Infinity;
    if (orderA !== orderB) return orderA - orderB;
    return new Date(a.data.date).getTime() - new Date(b.data.date).getTime();
  });
}
