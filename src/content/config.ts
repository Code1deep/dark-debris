import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    author: z.string().default("A. Elbah"),

    // catégories & tags
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),

    // séries d’articles
    series: z.string().optional(),
    seriesOrder: z.number().optional(),

    // métadonnées lecture
    readingTime: z.number().optional(),

    // niveau article
    niveau: z.enum(["initiation", "expert"]).default("expert"),
  }),
});

export const collections = { blog };

