export const projectsQuery = `
  *[_type == "project"] | order(year desc) {
    _id,
    title,
    description,
    tags,
    category,
    github,
    live,
    year,
    metrics[],
    highlights[]
  }
`

export const skillsQuery = `
  *[_type == "skillCategory"] | order(order asc) {
    _id,
    key,
    title,
    icon,
    description,
    order,
    skills[] {
      _key,
      name,
      icon
    }
  }
`;

export const experiencesQuery = `
  *[_type == "experience"] | order(order asc) {
    _id,
    company,
    position,
    location,
    period,
    current,
    description,
    technologies,
    order
  }
`;