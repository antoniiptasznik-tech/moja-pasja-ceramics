import { defineCollection, z } from 'astro:content';

const products = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        category: z.string(),
        price: z.string(),
        description: z.string(),
        dimensions: z.string(),
        care: z.string(),
        images: z.array(z.string()),
        delay: z.string().optional(),
        isAvailable: z.boolean().default(true),
        sequence: z.number().default(0),
    }),
});

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.string(),
        excerpt: z.string(),
        coverImage: z.string().optional(),
    }),
});

export const collections = {
    'products': products,
    'blog': blog,
};
