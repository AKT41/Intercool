import { createClient, groq } from 'next-sanity'

const client = createClient({
    projectId: 'cvg7rp0h',
    dataset: 'production',
    apiVersion: '2023-07-21'
})

export async function getSanityProducts() {
    return client.fetch(
        groq`*[_type == "product"]{
      _id,
      _createdAt,
      name,
      category,
      productType,
      "slug": slug.current,
      "productImages": productImages[]{
        asset->{
            "_imageUrl": url
        }
    },
      "smallImage": smallImage.asset->url,
      
      inStock,
      price,
      description,
      productFeatures[]{
        featureName,
        value
      },
      productCode
    }`
    )
}

export async function getSanityProduct(slug) {
    return client.fetch(
        groq`*[_type == "product" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            category,
            productType,
            "slug": slug.current,
            "productImages": productImages[].asset->url,
            "smallImage": smallImage.asset->url,
            inStock,
            price,
            description,
            productFeatures[]{
                featureName,
                value
            },
            productCode
        }`,
        { slug }
    )
}

export async function getSanityReferences() {
    return client.fetch(
        groq`*[_type == "references"]{
      _id,
      _createdAt,
      referenceName,
      "referenceImage": referenceImage.asset->url,
      referenceLink
    }`
    )
}
export async function getSanitySlider() {
    return client.fetch(
        groq`*[_type == "homeSlider"]{
      _id,
      _createdAt,
      SliderName,
     "SliderImage": SliderImage.asset->url
    }`
    )
}
