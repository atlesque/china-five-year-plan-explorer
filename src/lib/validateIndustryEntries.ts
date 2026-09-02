import type { CollectionEntry } from 'astro:content';

type IndustryEntry = CollectionEntry<'industries'>;

/** Validate invariants that span more than one content entry during a build. */
export function validateIndustryEntries(entries: IndustryEntry[]) {
  const entriesBySlug = new Map<string, IndustryEntry>();

  for (const entry of entries) {
    const previous = entriesBySlug.get(entry.data.slug);
    if (previous) {
      throw new Error(
        `[industries] Duplicate slug "${entry.data.slug}" in "${previous.id}" and "${entry.id}". Slugs must be unique.`,
      );
    }
    entriesBySlug.set(entry.data.slug, entry);
  }

  return entries;
}
