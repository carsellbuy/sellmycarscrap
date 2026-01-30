import { defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page Setup',
  type: 'document',
  fields: [
    // --- 1. Hero Section ---
    defineField({
      name: 'heroTitle',
      title: 'Hero Main Title',
      type: 'string',
      description: 'The big heading at the top (Default: Sell Your Car in Dubai)',
      initialValue: 'Sell Your Car in Dubai'
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 2,
      description: 'Small text under the title.',
    }),

    // --- 2. SEO Content Section (Bottom) ---
    defineField({
      name: 'seoHeading',
      title: 'SEO Section Heading',
      type: 'string',
      description: 'Heading for the SEO text area.',
    }),
    defineField({
      name: 'seoBody',
      title: 'SEO Section Body Text',
      type: 'text',
      rows: 6,
      description: 'The long paragraph for SEO.',
    }),

    // --- 3. Metadata (Google Search) ---
    defineField({
      name: 'metaTitle',
      title: 'Meta Title (Browser Tab)',
      type: 'string',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
    }),
  ],
})