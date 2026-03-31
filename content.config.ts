import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const schema = z.object({
  title: z.string(),
  descriptionn: z.string(),
  tag: z.string(),
  source: z.string(),
  demo: z.string(),
  img: z.string(),
  date: z.date(), 
})


export default defineContentConfig({
  collections: {
    projects_uk: defineCollection({
      type: 'data',
      source: 'projects/uk/**.yml',
      schema: schema
    }),
    projects_en: defineCollection({
      type: 'data',
      source: 'projects/en/**.yml',
      schema: schema
    })
  }
})