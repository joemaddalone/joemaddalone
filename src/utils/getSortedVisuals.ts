import type { CollectionEntry } from "astro:content";

export default function getSortedVisuals(visuals: CollectionEntry<"visuals">[]) {
  return visuals
    .filter((v) => !v.data.draft)
    .sort(
      (a, b) =>
        Math.floor(new Date(b.data.date).getTime() / 1000) -
        Math.floor(new Date(a.data.date).getTime() / 1000)
    );
}
