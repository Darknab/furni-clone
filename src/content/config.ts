import { string } from 'astro/zod';
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

const productsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    title: z.string(),
    price: z.string()
  })
})

// Here goes the posts collection
const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    })
  })
})

// Here goes the services collection
const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    svg: z.string(),
    title: z.string(),
    description: z.string()
  })
})

export const collections = {
  testimonials: testimonialsCollection,
  posts: postsCollection,
  products: productsCollection,
  services: servicesCollection,
}