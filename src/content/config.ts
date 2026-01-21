import { defineCollection, z } from 'astro:content';

const updatesCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		updatedDate: z.date().optional(),
		heroImage: z.string().optional(),
		language: z.enum(['en', 'ja']),
	}),
});

export const collections = {
	'updates': updatesCollection,
};
