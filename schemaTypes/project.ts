// schemaTypes/project.ts

import {Rule} from 'sanity'

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Project title (e.g. TaskFlow - Project Management App)',
      placeholder: 'e.g. My Project Title',
      initialValue: 'Untitled Project',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Auto-generated from title',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short summary of what the project does',
      placeholder: 'Write a brief description...',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      description: 'Category of the project',
      options: {
        list: [
          {title: 'Frontend', value: 'frontend'},
          {title: 'Fullstack', value: 'fullstack'},
          {title: 'Data Analysis', value: 'dataAnalysis'},
        ],
      },
      placeholder: 'Select project type',
      validation: (Rule: Rule) => Rule.required(),
    },

    {
      name: 'image',
      title: 'Image',
      type: 'url',
      description: 'Image URL representing the project',
      placeholder: 'e.g. https://example.com/image.jpg',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      description: 'List of technologies used in the project',
      of: [{type: 'string'}],
      placeholder: 'e.g. React, Node.js, MongoDB',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'demoUrl',
      title: 'Demo URL',
      type: 'url',
      description: 'URL to preview the live site or project demo (WebDev)',
      placeholder: 'e.g. https://example.com/demo',
    },
    {
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
      description: 'Link to the project’s GitHub repository',
      placeholder: 'e.g. https://github.com/username/repo',
    },
    {
      name: 'reportUrl',
      title: 'Report URL',
      type: 'url',
      description: 'Link to project report (used for data analysis projects)',
      placeholder: 'e.g. https://example.com/report.pdf',
      hidden: ({parent}: {parent: {type?: string}}) => parent?.type !== 'dataAnalysis',
    },
    {
      name: 'insights',
      title: 'Insights',
      type: 'array',
      description: 'Key takeaways or outcomes from data analysis',
      of: [{type: 'string'}],
      hidden: ({parent}: {parent: {type?: string}}) => parent?.type !== 'dataAnalysis',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Mark this project as featured to highlight it',
      initialValue: false,
    },
  ],
}
