export default {
  name: 'skill',
  title: 'Skill',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Icon identifier',
      options: {
        list: [
          { title: 'Next.js', value: 'nextjs' },
          { title: 'React', value: 'react' },
          { title: 'Angular', value: 'angular' },
          { title: 'Tailwind', value: 'tailwind' },
          { title: 'Three.js', value: 'threejs' },
          { title: 'Redux', value: 'redux' },
          { title: 'Node.js', value: 'nodejs' },
          { title: 'Express.js', value: 'expressjs' },
          { title: 'FastAPI', value: 'fastapi' },
          { title: 'Nest.js', value: 'nestjs' },
          { title: 'Rest API', value: 'rest' },
          { title: 'vercel', value: 'vercel' },
          { title: 'AWS', value: 'aws' },
          { title: 'MongoDB', value: 'mongo' },
          { title: 'PostgreSQL', value: 'postgres' },
          { title: 'Redis', value: 'redis' },
          { title: 'Docker', value: 'docker' },
          { title: 'Git', value: 'git' },
          { title: 'C', value: 'c' },
          { title: 'C++', value: 'cpp' },
          { title: 'Java', value: 'java' },
          { title: 'JavaScript', value: 'javascript' },
          { title: 'TypeScript', value: 'typescript' },
          { title: 'Python', value: 'python' },
          { title: 'Code', value: 'code' },
          { title: 'Server', value: 'server' },
          { title: 'Layers', value: 'layers' },
        ]
      }
    }
  ]
}