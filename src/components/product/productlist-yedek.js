/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState, useEffect } from 'react'
import '../assets/style/product-list.css'
import { Fade } from 'react-reveal'
import { getSanityProducts } from '../../../sanity/sanity-utils'
import { useRouter } from 'next/router'

export default function ProductList() {
    const [isFilterMenuActive, setFilterMenuActive] = useState(false)
    const [isGridActive, setGridActive] = useState(true)
    const router = useRouter()
    const [products, setProducts] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [selectedStockStatus, setSelectedStockStatus] = useState('All')
    const [selectedPrice, setSelectedPrice] = useState('')
    const [sortByPrice, setSortByPrice] = useState('None')

    useEffect(() => {
        async function fetchProducts() {
            const products = await getSanityProducts()
            setProducts(products)
        }
        fetchProducts()
    }, [])

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

    return (
        <>
            <div className='app-container mt-20 w-full mx-auto max-w-7xl min-h-[100vh]'>
                <div className='app-content'>
                    <div className='app-content-header'>
                        <Fade top>
                            <h1 className='app-content-headerText'>Ürünlerimiz</h1>
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
                                        {/* category */}
                                        <label>Kullanım Alanı</label>
                                        <select
                                            onChange={(e) => setSelectedCategory(e.target.value)}
                                        >
                                            <option value='All'>Bütün Kullanım Alanları</option>
                                            <option value='klima'>Klima</option>
                                            <option value='endüstriyel'>Endüstriyel</option>
                                            <option value='medikal'>Medikal</option>
                                            <option value='sihhitesisat'>Sıhhi Tesisat</option>
                                        </select>
                                        {/* stock status */}
                                        <label>Stok Durumu</label>
                                        <select
                                            onChange={(e) => setSelectedStockStatus(e.target.value)}
                                        >
                                            <option value='All'>Hepsi</option>
                                            <option value='true'>Mevcut</option>
                                            <option value='false'>Stokda Yok</option>
                                        </select>
                                        {/* price */}
                                        <label>Fiyat Aralığı</label>
                                        <select onChange={handleSortByPrice}>
                                            <option value='None'>Fiyata Göre Sırala</option>
                                            <option value='LowToHigh'>Düşükten Yükseğe</option>
                                            <option value='HighToLow'>Yüksekten Düşüğe</option>
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
                        {sortedProducts
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
                            .map((product) => (
                                <div
                                    key={product._id}
                                    className='products-row'
                                    style={{
                                        animationName: 'none!important'
                                    }}
                                >
                                    <a href={`/products/${product.slug}`}>
                                        <button className='cell-more-button'>Ürünü İncele</button>
                                    </a>
                                    <a href={`/products/${product.slug}`}>
                                        <div className='product-cell image'>
                                            <img
                                                src={product.smallImage}
                                                alt={product.name}
                                                className='transition-all duration-500 ease-in-out select-none'
                                            />

                                            <span className='capitalize'>{product.name}</span>
                                            <div className='product-cell status-cell'>
                                                <span className='cell-label'>Stok:</span>
                                                <span
                                                    className={`status ${
                                                        product.inStock ? 'active' : 'disabled'
                                                    }`}
                                                >
                                                    {product.inStock ? 'Mevcut' : 'Stokda Yok'}
                                                </span>
                                            </div>
                                            <div className='product-cell category'>
                                                <span className='cell-label'>Kategori:</span>
                                                {product.category}
                                            </div>
                                            <div className='product-cell price'>
                                                <span className='cell-label'>Fiyat:</span>
                                                {product.price === 0 || !product.price ? (
                                                    <span className='!text-sm text-gray-600'>
                                                        Fiyat İçin Teklif Alınız
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
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}
