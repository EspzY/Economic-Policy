import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const lectures = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/lectures' }),
  schema: z.object({
    title: z.string(),
    number: z.number(),
    topic: z.string(),
    summary: z.string(),
    status: z.enum(['scaffolded', 'in-progress', 'authored']),
    estimatedStudyHours: z.number(),
    sourceFiles: z.array(z.string()),
    learningObjectives: z.array(z.string()),
    examFocus: z.array(z.string()),
  }),
});

export const collections = {
  lectures,
};
