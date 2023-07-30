
const referenceSchema = {
    name: 'references',
    title: 'Referanslar',
    type: 'document',
    fields: [
        {
            name: 'referenceName',
            title: 'Referans Adı',
            type: 'string'
        },
        {
            name: 'referenceImage',
            title: 'Referans Resmi',
            type: 'image'
        },
        {
            name: 'referenceLink',
            title: 'URL',
            type: 'url'
        }
    ]
}

export default referenceSchema
