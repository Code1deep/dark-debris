import { defineCollection, z } from 'astro:content';


const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    author: z.string().default('A. Elbah'),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    series: z.string().nullable().optional(),
    seriesOrder: z.number().nullable().optional(),
    readingTime: z.number().optional(),
    niveau: z.enum(['initiation', 'expert']).default('expert'),
  }),
});

export const collections = { blog };

