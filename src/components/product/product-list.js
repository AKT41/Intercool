    import React, { useState, useEffect } from 'react'
    import '../assets/style/product.css'
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
            <div className='app-container mt-20 w-full max-w-7xl mx-auto min-h-[100vh]'>
                <div className='app-content'>
                    <div className='app-content-header'>
                        <Fade top>
                            {/* <h1 className='app-content-headerText my-4'></h1> */}
                        </Fade>
                    </div>
                    <Fade left cascade>
                        <div
                            className={`products-area-wrapper ${
                                isGridActive ? 'gridView' : 'tableView'
                            }`}
                        >
                            {Array.from(uniqueItems.keys()).map((itemKey, index) => (
                                <div key={index} className='blog-card'>
                                    <div className='meta'>
                                        <a
                                            className='btn btn-primary'
                                            href={`/products/${
                                                itemKey === 'productType'
                                                    ? 'product-types'
                                                    : 'product-categoris'
                                            }/${itemKey}`}
                                        >
                                            <div
                                                className='photo'
                                                style={{
                                                    backgroundImage:
                                                        'url(' +
                                                        categoryData.find(
                                                            (category) => category.value === itemKey
                                                        )?.image +
                                                        ')'
                                                }}
                                            ></div>
                                        </a>
                                    </div>
                                    <div className='description'>
                                        <h1>
                                            {
                                                categoryData.find(
                                                    (category) => category.value === itemKey
                                                )?.title
                                            }
                                        </h1>
                                        <h2>&nbsp;</h2>
                                        <p>
                                            {' '}
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                                            eum dolorum architecto obcaecati enim dicta praesentium,
                                            quam nobis! Neque ad aliquam facilis numquam. Veritatis,
                                            sit.
                                        </p>
                                        <p className='read-more'>
                                            <a href='#' className='link-with-underline'>
                                                <a
                                                    className='btn btn-primary'
                                                    href={`/products/${
                                                        itemKey === 'productType'
                                                            ? 'product-types'
                                                            : 'product-categoris'
                                                    }/${itemKey}`}
                                                >
                                                    Ürünleri Gör
                                                </a>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Fade>
                </div>
            </div>
        )
    }
