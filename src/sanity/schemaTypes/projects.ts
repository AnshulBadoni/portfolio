export default {
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
        { name: 'number', title: 'Project Number', type: 'string' },
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
        },
        { name: 'category', title: 'Category', type: 'string' },
        { name: 'github', title: 'GitHub URL', type: 'url' },
        { name: 'live', title: 'Live URL', type: 'url' },
        { name: 'year', title: 'Year', type: 'string' },

        {
            name: 'metrics',
            title: 'Metrics',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'label', title: 'Label', type: 'string' },
                        { name: 'value', title: 'Value', type: 'string' },
                    ],
                },
            ],
        },

        {
            name: 'highlights',
            title: 'Highlights',
            type: 'array',
            of: [{ type: 'string' }],
        },

        {
            name: 'image',
            title: 'Project Image',
            type: 'image',
            options: { hotspot: true },
        },
    ],
};
