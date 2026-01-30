import { defineField, defineType } from 'sanity'

export const landingPage = defineType({
  name: 'landingPage',
  title: 'Landing Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title (For Admin)',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Page URL (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Section Title',
      type: 'string',
      description: 'The main big heading of the page',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'locationName',
      title: 'Location Name',
      type: 'string',
      description: 'e.g. Dubai, Abu Dhabi (Used for SEO)',
    }),

    defineField({
      name: 'contentHeading',
      title: 'Body Content Heading',
      type: 'string',
      description: 'The heading above the long text (e.g., Sell Your Used Car in Ajman)',
    }),
    defineField({
      name: 'contentBody',
      title: 'Body Content Text',
      type: 'text',
      rows: 6,
      description: 'The main SEO text paragraph for this specific location.',
    }),
    
    defineField({
      name: 'metaTitle',
      title: 'SEO Meta Title',
      type: 'string',
    }),
    defineField({
      name: 'metaDescription',
      title: 'SEO Meta Description',
      type: 'text',
      rows: 3,
    }),
  ],
})