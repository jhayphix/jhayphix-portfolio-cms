// schemaTypes/project.ts

import {Rule} from 'sanity'

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  preview: {
    select: {
      title: 'title',
      type: 'type',
    },
    prepare(selection: {title?: string; type?: string}) {
      const {title, type} = selection
      return {
        title,
        subtitle: type ? `Type: ${type}` : 'No type set',
      }
    },
  },
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
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short summary of what the project does',
      placeholder: 'Write a brief description...',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'projectOverview',
      title: 'Project Overview',
      type: 'array',
      description:
        'Brief summary highlighting the project’s aims, objectives, and key focus areas. Use each block for a separate paragraph.',
      of: [{type: 'text'}],
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
      name: 'image',
      title: 'Image',
      type: 'url',
      description: 'Image URL representing the project',
      placeholder: 'e.g. https://example.com/image.jpg',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'demoUrl',
      title: 'Demo URL',
      type: 'string',
      description: 'URL to preview the live site or project demo (WebDev)',
      placeholder: 'e.g. https://example.com/demo',
    },
    {
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'string',
      description: 'Link to the project’s GitHub repository',
      placeholder: 'e.g. https://github.com/username/repo',
    },
    {
      name: 'reportUrl',
      title: 'Report URL',
      type: 'string',
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

    // Additional Details
    {
      name: 'details',
      title: 'Project Details',
      type: 'object',
      fields: [
        {
          name: 'status',
          title: 'Status',
          type: 'string',
          options: {
            list: [
              {title: 'In Progress', value: 'inProgress'},
              {title: 'Completed', value: 'completed'},
              {title: 'On Hold', value: 'onHold'},
              {title: 'Abandoned', value: 'abandoned'},
            ],
            layout: 'dropdown',
          },
          description: 'Current status of the project',
        },
        {
          name: 'tags',
          title: 'Tags',
          type: 'array',
          of: [{type: 'string'}],
          description: 'Searchable tags or keywords (e.g. dashboard, AI, CRUD)',
        },
        {
          name: 'duration',
          title: 'Duration',
          type: 'string',
          description: 'Time taken to complete the project (e.g. 2 weeks, 3 months)',
        },
        {
          name: 'collaborationType',
          title: 'Collaboration Type',
          type: 'string',
          options: {
            list: [
              {title: 'Solo Project', value: 'soloProject'},
              {title: 'Collaborative Work', value: 'collaborativeWork'},
              {title: 'Open Source Contribution', value: 'openSourceContribution'},
              {title: 'Client Work', value: 'clientWork'},
              {title: 'Academic/Capstone Project', value: 'academicOrCapstoneProject'},
              {title: 'Hackathon', value: 'hackathon'},
            ],
            layout: 'dropdown',
          },
          description: 'Nature of your involvement in the project',
        },
        {
          name: 'team',
          title: 'Team Members',
          type: 'array',
          of: [{type: 'string'}],
          description: 'Names or roles of team members involved (for collaborative work)',
          hidden: ({parent}: {parent: {collaborationType?: string}}) =>
            parent?.collaborationType === 'soloProject',
        },
        {
          name: 'challenges',
          title: 'Challenges',
          type: 'array',
          of: [{type: 'string'}],
          description: 'Challenges faced and how they were solved',
        },
        {
          name: 'solutions',
          title: 'Solutions',
          type: 'array',
          of: [{type: 'string'}],
          description: 'How the Challenges Were Solved',
        },
      ],
    },

    // Meta data
    {
      name: 'metadata',
      title: 'Metadata',
      type: 'object',
      fields: [
        {
          name: 'completedAt',
          title: 'Completed At',
          type: 'datetime',
          description: 'Date the project was completed',
        },
        {
          name: 'publishedAt',
          title: 'Published At',
          type: 'datetime',
          description: 'Date the project was first published',
        },
        {
          name: 'updatedAt',
          title: 'Updated At',
          type: 'datetime',
          initialValue: new Date().toISOString(),
          description: 'Date the project was last updated',
        },
      ],
    },
  ],
}
