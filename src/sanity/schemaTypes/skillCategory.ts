export default {
    name: 'skillCategory',
    title: 'Skill Category',
    type: 'document',
    fields: [
        {
            name: 'key',
            title: 'Key',
            type: 'string',
            description: 'Unique identifier (e.g., frontend, backend)',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'string',
            description: 'Icon name (e.g., Code, Server, Cloud, Layers)',
            options: {
                list: [
                    { title: 'Code', value: 'code' },
                    { title: 'Server', value: 'server' },
                    { title: 'Cloud', value: 'cloud' },
                    { title: 'Layers', value: 'layers' },
                ]
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [{ type: 'skill' }]
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number',
            description: 'Display order'
        }
    ],
    orderings: [
        {
            title: 'Order',
            name: 'order',
            by: [{ field: 'order', direction: 'asc' }]
        }
    ]
}