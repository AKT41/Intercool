import React, { useState, useEffect } from 'react'
import { Fade } from 'react-reveal'
import { getSanityProducts } from '../../../sanity/sanity-utils'
import { useRouter } from 'next/router'

const categoryData = [
    { title: 'Klima', value: 'klima', image: 'https://i.hizliresim.com/1g7lr9o.png' },
    { title: 'Endüstriyel', value: 'endüstriyel', image: 'https://i.hizliresim.com/7wu2bhj.png' },
    { title: 'Medikal', value: 'medikal', image: 'https://i.hizliresim.com/cj1godb.jpg' },
    { title: 'Sıhhi Tesisat', value: 'sihhitesisat', image: 'https://i.hizliresim.com/czgac6m.jpg' }
]

export default function ProductList() {
    const [isGridActive, setGridActive] = useState(true)
    const router = useRouter()
    const [products, setProducts] = useState([])
    const uniqueItems = new Map()

    useEffect(() => {
        async function fetchProducts() {
            const products = await getSanityProducts()
            setProducts(products)
        }
        fetchProducts()
    }, [])

    products.forEach((product) => {
        if (product.category) {
            if (!uniqueItems.has(product.category)) {
                uniqueItems.set(product.category, [])
            }
            uniqueItems.get(product.category).push(product)
        }
    })

    return (
        <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16'>
            <div className='max-w-7xl mx-auto px-4'>
                {/* Header */}
                <Fade top>
                    <div className='text-center mb-16'>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-blue bg-clip-text text-transparent mb-4 pt-3'>
                            Ürünlerimiz
                        </h1>
                        <p className='text-gray-600 text-lg md:text-xl max-w-3xl mx-auto'>
                            Kaliteli ve güvenilir ürünlerimizle sizlere hizmet veriyoruz
                        </p>
                        <div className='w-24 h-1 bg-gradient-blue mx-auto rounded-full mt-6'></div>
                    </div>
                </Fade>

                {/* Product Categories Grid */}
                <Fade bottom cascade>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
                        {Array.from(uniqueItems.keys()).map((itemKey, index) => {
                            const category = categoryData.find((cat) => cat.value === itemKey)
                            return (
                                <a
                                    key={index}
                                    href={`/products/${
                                        itemKey === 'productType'
                                            ? 'product-types'
                                            : 'product-categoris'
                                    }/${itemKey}`}
                                    className='group block'
                                >
                                    <div className='bg-white rounded-2xl shadow-soft hover:shadow-strong transition-all duration-500 overflow-hidden transform hover:-translate-y-2'>
                                        {/* Image */}
                                        <div className='relative h-56 overflow-hidden'>
                                            <div
                                                className='absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500'
                                                style={{
                                                    backgroundImage: `url(${category?.image})`
                                                }}
                                            >
                                                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                                            </div>
                                            <div className='absolute bottom-4 left-4 right-4'>
                                                <h2 className='text-2xl font-bold text-white drop-shadow-lg'>
                                                    {category?.title}
                                                </h2>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className='p-6 space-y-4'>
                                            <p className='text-gray-600 text-sm leading-relaxed line-clamp-3'>
                                                Yüksek kaliteli {category?.title.toLowerCase()}{' '}
                                                ürünleri ile sizlere profesyonel çözümler sunuyoruz.
                                                Detaylı bilgi için tıklayınız.
                                            </p>

                                            <div className='flex items-center justify-between pt-2'>
                                                <span className='text-sm font-semibold text-primary-600'>
                                                    {uniqueItems.get(itemKey)?.length || 0} Ürün
                                                </span>
                                                <div className='flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all duration-300'>
                                                    <span>Görüntüle</span>
                                                    <svg
                                                        className='w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300'
                                                        fill='none'
                                                        stroke='currentColor'
                                                        viewBox='0 0 24 24'
                                                    >
                                                        <path
                                                            strokeLinecap='round'
                                                            strokeLinejoin='round'
                                                            strokeWidth={2}
                                                            d='M9 5l7 7-7 7'
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </Fade>
            </div>
        </div>
    )
}
