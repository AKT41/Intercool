const productSchema = {
    name: 'product',
    title: 'Ürünler',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Ürün Adı',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 200
            }
        },
        {
            name: 'productCode',
            title: 'Ürün Kodu',
            type: 'string'
        },
        {
            name: 'smallImage',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },

        {
            name: 'productImages',
            title: 'Ürün Resimleri',
            type: 'array',
            of: [{ type: 'image' }]
        },
        {
            name: 'description',
            title: 'Ürün Açıklaması',
            type: 'text'
        },
        {
            name: 'productFeatures',
            title: 'Ürün Özellikleri',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            title: 'Özellik Adı',
                            name: 'featureName',
                            type: 'string'
                        },
                        {
                            title: 'Değer',
                            name: 'value',
                            type: 'string'
                        }
                    ]
                }
            ]
        },
        {
            name: 'category',
            title: 'Kategori',
            type: 'string',
            options: {
                list: [
                    { title: 'Klima', value: 'klima' },
                    { title: 'Endüstriyel', value: 'endüstriyel' },
                    { title: 'Medikal', value: 'medikal' },
                    { title: 'Sıhhi Tesisat', value: 'sihhitesisat' }
                ]
            },
            required: true
        },
        {
            name: 'productType',
            title: 'Ürün Çeşidi',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'PE Siyah Kauçuk İzolasyonlu Bakır Boru',
                        value: 'PE Siyah Kauçuk İzolasyonlu Bakır Boru'
                    },
                    {
                        title: 'Çiftli İzolasyonlu Bakır Boru',
                        value: 'Çiftli İzolasyonlu Bakır Boru'
                    },
                    {
                        title: 'Bakır Boy Boru',
                        value: 'Bakır Boy Boru'
                    }
                ]
            },
            required: true
        },
        {
            name: 'inStock',
            title: 'Stok Durumu',
            type: 'boolean'
        },
        {
            name: 'price',
            title: 'Fiyat',
            type: 'number'
        }
    ]
}

export default productSchema
