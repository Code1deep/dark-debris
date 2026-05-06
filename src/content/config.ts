import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),

    /* 🔥 LE CHAMP QUI MANQUE */
    categories: z.array(z.string()),

    /* champs optionnels */
    tags: z.array(z.string()).optional(),
    series: z.string().nullable().optional(),
    seriesOrder: z.number().nullable().optional(),
    readingTime: z.number().optional(),
    niveau: z.string().optional(),
  }),
});

export const collections = { blog };

