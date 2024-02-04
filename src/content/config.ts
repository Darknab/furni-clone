import { z, defineCollection } from 'astro:content';

// Here goes the testimonialsCollection
const testimonialsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    text: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    title: z.string(),
    subtitle: z.string()
  })
});

// Here goes the products collection

// Here goes the posts collection

export const collections = {
  testimonials: testimonialsCollection,
}