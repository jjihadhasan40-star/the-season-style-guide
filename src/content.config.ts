import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	// The file name becomes the article's slug, e.g.
	// `src/content/blog/my-post.md` -> `/blog/my-post/`.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema.
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Accepts "2026-09-16" or any date string; stored as a real Date.
		date: z.coerce.date(),
		// Category names map to the existing main or topic archive routes.
		category: z.string().trim().min(1),
		subcategory: z.string().trim().min(1).optional(),
		// Path or URL to the article's featured image, e.g. "/images/foo.jpg".
		image: z.string(),
		author: z.string().optional(),
		featured: z.boolean().optional().default(false),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { blog };
