import { type SchemaTypeDefinition } from 'sanity'
import projects from './projects'
import skills from './skills'
import skillCategory from './skillCategory'
import experience from './experience'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projects, skills, skillCategory, experience],
}
