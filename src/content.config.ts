import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('A. Elbah'),

    // Taxonomie
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),

    // Série
    series: z.string().nullable().optional(),
    seriesOrder: z.number().nullable().optional(),

    // Métadonnées
    readingTime: z.number().optional(),
    niveau: z.enum(['initiation', 'expert']).default('expert'),
    keywords: z.string().optional(),
  }),
});

export const collections = { blog };
