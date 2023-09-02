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
        },
        {
            title: "Blog Image",
            name: "blogimage",
            type: "image",
            options: {
                hotspot: true, // <-- Defaults to false
            },
            fields: [
                {
                    name: "caption",
                    type: "string",
                    title: "Caption",
                    options: {
                        isHighlighted: true, // <-- make this field easily accessible
                    },
                },
                {
                    // Editing this field will be hidden behind an "Edit"-button
                    name: "attribution",
                    type: "string",
                    title: "Attribution",
                },
            ],
        }
    ]
}