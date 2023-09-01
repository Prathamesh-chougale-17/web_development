// schemas/pet.js
export default {
    name: 'Blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    type: 'block'
                },
                {
                    type: 'image'
                }
            ]
        }
    ]
}