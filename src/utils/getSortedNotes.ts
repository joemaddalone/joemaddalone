import type { CollectionEntry } from "astro:content";

export default function getSortedNotes(notes: CollectionEntry<"notes">[]) {
  return notes
    .filter((n) => !n.data.draft)
    .sort(
      (a, b) =>
        Math.floor(new Date(b.data.date).getTime() / 1000) -
        Math.floor(new Date(a.data.date).getTime() / 1000)
    );
}
