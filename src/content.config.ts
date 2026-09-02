import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
import { sourceIds } from './data/sources';

const sourceRefSchema = z.object({
  sourceId: z.enum(sourceIds),
  locator: z
    .string()
    .trim()
    .min(1, 'A source reference locator is required.')
    .refine(
      (locator) => /\b(?:part|chapter|section|box|item|article|appendix|annex)s?\b/i.test(locator),
      'Use a structural locator such as a part, chapter, section, box, or item.',
    ),
  page: z.string().optional(),
  note: z.string().optional(),
});

const industries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/industries' }),
  schema: z.object({
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    title: z.string(),
    eyebrow: z.enum([
      'Strategic emerging industry',
      'Industry of the future',
      'Cross-cutting capability',
    ]),
    shortDescription: z.string(),
    deck: z.string(),
    order: z.number().int().positive(),
    theme: z.enum(['cyan', 'violet', 'jade', 'amber']),
    status: z.literal('mvp'),
    sourceRefs: z.array(sourceRefSchema).min(1),
    comingNext: z.array(z.string()).min(3).max(5),
  }),
});

export const collections = { industries };
