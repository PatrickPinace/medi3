import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pozycja = z.object({
  name: z.string(),
  price: z.number(),
  nfz: z.boolean().optional(),
  note: z.string().optional(),
});

const cennik = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/cennik' }),
  schema: z.object({
    kategorie: z.array(
      z.object({
        nazwa: z.string(),
        pozycje: z.array(pozycja),
      })
    ),
  }),
});

export const collections = { cennik };
