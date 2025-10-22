/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Navbar from '@/components/nav-footer/navbar'
import Footer from '@/components/nav-footer/footer'
import { getSanityProducts } from '../../../../sanity/sanity-utils'
import Loader from '@/components/loader'
import { Fade } from 'react-reveal'
import { Helmet } from 'react-helmet'
import Link from 'next/link'

export default function ProductDetails() {
    const router = useRouter()
    const { slug } = router.query // Extract the slug from the route parameters
    const [isFilterMenuActive, setFilterMenuActive] = useState(false)
    const [isGridActive, setGridActive] = useState(true)
    const [products, setProducts] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [selectedStockStatus, setSelectedStockStatus] = useState('All')
    const [selectedPrice, setSelectedPrice] = useState('')
    const [sortByPrice, setSortByPrice] = useState('None')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchProducts() {
            const allProducts = await getSanityProducts() // Replace with your data fetching logic
            const filteredProducts = allProducts.filter((prod) => prod.category === slug)
            setProducts(filteredProducts)
            setIsLoading(false)

            // Eğer ürün yoksa ana ürünler sayfasına yönlendir
            if (filteredProducts.length === 0) {
                setTimeout(() => {
                    router.push('/products')
                }, 1500)
            }
        }
        if (slug) {
            fetchProducts()
        }
    }, [slug, router])

    if (isLoading) {
        return <Loader />
    }

    if (products.length === 0) {
        return (
            <>
                <Navbar />
                <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-white'>
                    <div className='text-center p-8'>
                        <div className='mb-6'>
                            <svg
                                className='w-24 h-24 mx-auto text-gray-400'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={1.5}
                                    d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4'
                                />
                            </svg>
                        </div>
                        <h1 className='text-3xl font-bold text-gray-800 mb-4 capitalize'>
                            {slug} kategorisinde ürün bulunamadı
                        </h1>
                        <p className='text-gray-600 mb-8'>
                            Ürünler sayfasına yönlendiriliyorsunuz...
                        </p>
                        <div className='flex gap-2 justify-center'>
                            <div className='w-3 h-3 bg-primary-600 rounded-full animate-bounce'></div>
                            <div
                                className='w-3 h-3 bg-primary-600 rounded-full animate-bounce'
                                style={{ animationDelay: '0.1s' }}
                            ></div>
                            <div
                                className='w-3 h-3 bg-primary-600 rounded-full animate-bounce'
                                style={{ animationDelay: '0.2s' }}
                            ></div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
    function capitalizeFirstLetter(str) {
        return str
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
    }

    function handleFilterClick() {
        setFilterMenuActive((prev) => !prev)
    }

    function handleSearch(event) {
        setSearchQuery(event.target.value)
    }

    function handleSortByPrice(event) {
        setSortByPrice(event.target.value)
    }

    const sortedProducts = products.slice().sort((a, b) => {
        if (sortByPrice === 'LowToHigh') {
            return parseFloat(a.price) - parseFloat(b.price)
        } else if (sortByPrice === 'HighToLow') {
            return parseFloat(b.price) - parseFloat(a.price)
        }
        return 0
    })
    console.log(products)
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta name='description' content='İntercool Hakkımızda Sayfası' />
                <meta name='keywords' content='İntercool, Hakkımızda, İntercool Hakkımızda' />
                <meta name='author' content='İntercool' />
                <meta name='robots' content='index, follow' />
                <meta name='language' content='Turkish' />
                <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
                <meta name='revisit-after' content='1 days' />
                <meta name='google' content='notranslate' />
                <link rel='icon' href='https://i.hizliresim.com/e4o20gp.png' />
                <title>{capitalizeFirstLetter(slug)} | İntercool</title>
                <script src='https://cdn.tailwindcss.com'></script>
            </Helmet>
            <Navbar />
            {/* <h1>
                Products of Category:{' '}
                <span
                    style={{
                        textTransform: 'capitalize'
                    }}
                >
                    {slug}
                </span>
            </h1> */}

            {isLoading ? (
                <Loader />
            ) : (
                <>
                    {' '}
                    <div className='app-container mt-14 pt-5 w-full max-w-7xl min-h-[100vh]'>
                        <div className='app-content'>
                            <div className='app-content-header'>
                                <Fade top>
                                    <h1 className='app-content-headerText'>
                                        <Link href='/products'>Ürünlerimiz</Link>
                                        <span className='capitalize text-2xl font-medium text-gray-500'>
                                            {' '}
                                            / {slug}
                                        </span>
                                    </h1>
                                </Fade>
                            </div>
                            <div className='app-content-actions'>
                                <Fade left>
                                    <input
                                        className='search-bar border border-solid'
                                        placeholder='Ürün Ara...'
                                        type='text'
                                        value={searchQuery}
                                        onChange={handleSearch}
                                    />
                                </Fade>
                                <Fade top>
                                    <div className='app-content-actions-wrapper'>
                                        <div className='filter-button-wrapper'>
                                            <button
                                                className='action-button filter jsFilter'
                                                onClick={handleFilterClick}
                                            >
                                                <span>Filtrele</span>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    width='16'
                                                    height='16'
                                                    viewBox='0 0 24 24'
                                                    fill='none'
                                                    stroke='currentColor'
                                                    strokeWidth='2'
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    className='feather feather-filter text-black'
                                                >
                                                    <polygon points='22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3' />
                                                </svg>
                                            </button>
                                            <div
                                                className={`filter-menu absolute z-[9999] md: right-0 ${
                                                    isFilterMenuActive ? 'active' : ''
                                                }`}
                                            >
                                                <label>Stok Durumu</label>
                                                <select
                                                    onChange={(e) =>
                                                        setSelectedStockStatus(e.target.value)
                                                    }
                                                >
                                                    <option value='All'>Hepsi</option>
                                                    <option value='true'>Mevcut</option>
                                                    <option value='false'>Stokda Yok</option>
                                                </select>
                                                {/* price */}
                                                <label>Fiyat Aralığı</label>
                                                <select onChange={handleSortByPrice}>
                                                    <option value='None'>Fiyata Göre Sırala</option>
                                                    <option value='LowToHigh'>
                                                        Düşükten Yükseğe
                                                    </option>
                                                    <option value='HighToLow'>
                                                        Yüksekten Düşüğe
                                                    </option>
                                                </select>
                                                {/* reset */}
                                                <div className='filter-menu-buttons'>
                                                    <button
                                                        className='filter-button reset'
                                                        onClick={() => {
                                                            setSelectedCategory('All')
                                                            setSelectedStockStatus('All')
                                                            setSelectedPrice('')
                                                            setSortByPrice('None')
                                                        }}
                                                    >
                                                        Sıfırla
                                                    </button>
                                                    {/* apply */}
                                                    <button
                                                        className='filter-button apply'
                                                        onClick={handleFilterClick}
                                                    >
                                                        Uygula
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                            <div
                                className={`products-area-wrapper ${
                                    isGridActive ? 'gridView' : 'tableView'
                                }`}
                            >
                                <div className='products-header'>
                                    <div className='product-cell image'>
                                        Ürünler
                                        <button className='sort-button'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width='16'
                                                height='16'
                                                viewBox='0 0 512 512'
                                            >
                                                <path
                                                    fill='currentColor'
                                                    d='M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z'
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className='product-cell category'>
                                        Kullanım Alanı
                                        <button className='sort-button'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width='16'
                                                height='16'
                                                viewBox='0 0 512 512'
                                            >
                                                <path
                                                    fill='currentColor'
                                                    d='M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z'
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className='product-cell status-cell'>
                                        Stok
                                        <button className='sort-button'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width='16'
                                                height='16'
                                                viewBox='0 0 512 512'
                                            >
                                                <path
                                                    fill='currentColor'
                                                    d='M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z'
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className='product-cell price'>
                                        Fiyat
                                        <button className='sort-button'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width='16'
                                                height='16'
                                                viewBox='0 0 512 512'
                                            >
                                                <path
                                                    fill='currentColor'
                                                    d='M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z'
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                {
                                    sortedProducts
                                        .filter((product) => {
                                            const nameIncludesQuery = product.name
                                                .toLowerCase()
                                                .includes(searchQuery.toLowerCase())
                                            const categoryMatches =
                                                selectedCategory === 'All' ||
                                                product.category === selectedCategory
                                            const stockStatusMatches =
                                                selectedStockStatus === 'All' ||
                                                product.inStock === (selectedStockStatus === 'true')
                                            const priceMatches =
                                                selectedPrice === '' ||
                                                product.price === parseFloat(selectedPrice)

                                            return (
                                                nameIncludesQuery &&
                                                categoryMatches &&
                                                stockStatusMatches &&
                                                priceMatches
                                            )
                                        })
                                        .reduce(
                                            (accumulator, product) => {
                                                if (product.productType) {
                                                    if (!accumulator[product.productType]) {
                                                        accumulator[product.productType] = true
                                                        accumulator.content.unshift(
                                                            <div
                                                                key={product.productType}
                                                                className='products-row !p-0 relative shadow hover:shadow-gray-500 !h-80 !bg-cover'
                                                                style={{
                                                                    background: `url(${
                                                                        product.productType ===
                                                                        'Çiftli İzolasyonlu Bakır Boru'
                                                                            ? 'https://i.hizliresim.com/pho4058.png'
                                                                            : product.productType ===
                                                                              'PE Siyah Kauçuk İzolasyonlu Bakır Boru'
                                                                            ? 'https://i.hizliresim.com/czg12tz.jpg'
                                                                            : product.productType ===
                                                                              'Bakır Boy Boru'
                                                                            ? 'https://i.hizliresim.com/sv7ax5s.jpg' //kauçuk
                                                                            : ''
                                                                    })`,
                                                                    backgroundRepeat: 'no-repeat',
                                                                    backgroundPosition: 'center'
                                                                }}
                                                            >
                                                                <a
                                                                    href={`/products/product-types/${product.productType}`}
                                                                >
                                                                    <button className='cell-more-button'>
                                                                        Ürünleri Gör
                                                                    </button>
                                                                </a>
                                                                <a
                                                                    href={`/products/product-types/${product.productType}`}
                                                                >
                                                                    <div className='product-cell image'>
                                                                        <p className='capitalize absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-full text-center bg-gray-400 bg-opacity-30 backdrop-blur-sm	p-2'>
                                                                            <span>
                                                                                {
                                                                                    product.productType
                                                                                }
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        )
                                                    }
                                                } else {
                                                    accumulator.content.push(
                                                        <div
                                                            key={product._id}
                                                            className='products-row'
                                                            style={{
                                                                animationName: 'none!important'
                                                            }}
                                                        >
                                                            <a href={`/products/${product.slug}`}>
                                                                <button className='cell-more-button'>
                                                                    Ürünü İncele
                                                                </button>
                                                            </a>
                                                            <a href={`/products/${product.slug}`}>
                                                                <div className='product-cell image'>
                                                                    <img
                                                                        src={product.smallImage}
                                                                        alt={product.name}
                                                                        className='transition-all duration-500 ease-in-out select-none'
                                                                    />

                                                                    <span className='capitalize'>
                                                                        {product.name}
                                                                    </span>
                                                                    <div className='product-cell status-cell'>
                                                                        <span className='cell-label'>
                                                                            Stok:
                                                                        </span>
                                                                        <span
                                                                            className={`status ${
                                                                                product.inStock
                                                                                    ? 'active'
                                                                                    : 'disabled'
                                                                            }`}
                                                                        >
                                                                            {product.inStock
                                                                                ? 'Mevcut'
                                                                                : 'Stokda Yok'}
                                                                        </span>
                                                                    </div>
                                                                    <div className='product-cell category capitalize'>
                                                                        <span className='cell-label'>
                                                                            Kullanım Alanı:
                                                                        </span>
                                                                        {product.category}
                                                                    </div>
                                                                    <div className='product-cell category capitalize'>
                                                                        <span className='cell-label'>
                                                                            Ürün Tipi:
                                                                        </span>
                                                                        {product.productType}
                                                                    </div>
                                                                    <div className='product-cell price'>
                                                                        <span className='cell-label'>
                                                                            Fiyat:
                                                                        </span>
                                                                        {product.price === 0 ||
                                                                        !product.price ? (
                                                                            <span className='!text-sm text-gray-600'>
                                                                                Fiyat İçin Teklif
                                                                                Alınız
                                                                            </span>
                                                                        ) : (
                                                                            <span className='!text-sm'>
                                                                                {product.price} ₺
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    )
                                                }
                                                return accumulator
                                            },
                                            { content: [] }
                                        ).content
                                }
                            </div>
                        </div>
                    </div>
                </>
            )}
            <Footer />
        </>
    )
}
