import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

// import { SchemaTypeDefinition, DefineSchemaOptions, SchemaPluginOptions } from 'sanity'

export default defineConfig({
  name: 'default',
  title: 'JhayPhix Portfolio CMS',

  projectId: 'yzkgdxt8',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,

  },
})
