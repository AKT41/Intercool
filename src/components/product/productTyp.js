import React, { useState, useEffect } from 'react'
import '../assets/style/product.css'
import '../assets/style/product-list.css'
import { Fade } from 'react-reveal'
import { getSanityProducts } from '../../../sanity/sanity-utils'
import { useRouter } from 'next/router'

export default function ProductType() {
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

    const filteredProducts = products.filter((product) => product.productType)

    filteredProducts.forEach((product) => {
        if (!uniqueItems.has(product.productType)) {
            uniqueItems.set(product.productType, [])
        }
        uniqueItems.get(product.productType).push(product)
    })

    return (
        <div className='app-container mt-20 w-full max-w-7xl mx-auto min-h-[100vh] '>
            <div className='app-content'>
                <div className='app-content-header'>
                    <Fade top>
                        <h1 className='app-content-headerText my-4'>Kullanım Alanlarımız</h1>
                    </Fade>
                </div>
                <Fade left cascade>
                    <div
                        className={`products-area-wrapper ${
                            isGridActive ? 'gridView' : 'tableView'
                        }`}
                    >
                        {Array.from(uniqueItems).map(([productType, products]) => (
                            <div
                                key={productType}
                                className='products-row !p-0 relative shadow hover:shadow-gray-500 !h-80 !bg-cover'
                                style={{
                                    background: `url(${
                                        productType === 'PE Beyaz İzolasyonlu Bakır Boru'
                                            ? 'https://i.hizliresim.com/sv7ax5s.jpg'
                                            : productType === 'PE Siyah İzolasyonlu Bakır Boru'
                                            ? 'https://i.hizliresim.com/sv7ax5s.jpg'
                                            : productType === 'PE Platina İzolasyonlu Bakır Boru'
                                            ? 'https://i.hizliresim.com/czg12tz.jpg'
                                            : productType === 'Çiftli İzolasyonlu Beyaz Bakır Boru'
                                            ? 'https://i.hizliresim.com/sv7ax5s.jpg'
                                            : productType === 'Çiftli İzolasyonlu Siyah Bakır Boru'
                                            ? 'https://i.hizliresim.com/czg12tz.jpg'
                                            : productType === 'Çiftli İzolasyonlu Platina Bakır Boru'
                                            ? 'https://i.hizliresim.com/czg12tz.jpg'
                                            : ''
                                    })`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center'
                                }}
                            >
                                <a href={`/products/product-types/${productType}`}>
                                    <button className='cell-more-button'>Ürünleri Gör</button>
                                </a>
                                <a href={`/products/product-types/${productType}`}>
                                    <div className='product-cell image'>
                                        <p className='capitalize absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-full text-center bg-gray-400 bg-opacity-30 backdrop-blur-sm	p-2'>
                                            <span>{productType}</span>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </Fade>
            </div>
        </div>
    )
}
