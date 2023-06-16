/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react'
import '../assets/style/product.css'
import { Fade } from 'react-reveal'

export default function ProductList() {
    const [isActivated, setIsActivated] = React.useState(false)
    const [isFilterMenuActive, setFilterMenuActive] = useState(false)
    const [isGridActive, setGridActive] = useState(true)

    function handleFilterClick() {
        setFilterMenuActive((prev) => !prev)
    }

    function handleGridClick() {
        setGridActive(true)
    }

    function handleListClick() {
        setGridActive(false)
    }

    function handleModeSwitchClick() {
        let modeSwitch = document.querySelector('.mode-switch')
        setIsActivated((prev) => !prev)
        document.documentElement.classList.toggle('light')
        modeSwitch.classList.toggle('active')
    }

    return (
        <>
            <div className='app-container mt-20 w-full max-w-7xl'>
                <div className='app-content'>
                    <div className='app-content-header'>
                        <h1 className='app-content-headerText'>Ürünlerimiz</h1>
                    </div>
                    <div className='app-content-actions'>
                        <input
                            className='search-bar border border-solid'
                            placeholder='Ürün Ara...'
                            type='text'
                        />
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
                                        className='feather feather-filter'
                                    >
                                        <polygon points='22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3' />
                                    </svg>
                                </button>
                                <div
                                    className={`filter-menu ${isFilterMenuActive ? 'active' : ''}`}
                                >
                                    <label>Kategori</label>
                                    <select>
                                        <option>Bütün Kategoriler</option>
                                        <option>Klima</option>
                                        <option>Medikal</option>
                                        <option>Sıhhi Tesisat</option>
                                        <option>Endüstriyel</option>
                                    </select>
                                    <label>Stok Durumu</label>
                                    <select>
                                        <option>Hepsi</option>
                                        <option>Mevcut</option>
                                        <option>Stokda Yok</option>
                                    </select>
                                    <div className='filter-menu-buttons'>
                                        <button className='filter-button reset'>Sıfırla</button>
                                        <button className='filter-button apply'>Uygula</button>
                                    </div>
                                </div>
                            </div>
                            <button
                                className={`action-button list ${!isGridActive ? 'active' : ''}`}
                                title='List View'
                                onClick={handleListClick}
                            >
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
                                    className='feather feather-list'
                                >
                                    <line x1='8' y1='6' x2='21' y2='6' />
                                    <line x1='8' y1='12' x2='21' y2='12' />
                                    <line x1='8' y1='18' x2='21' y2='18' />
                                    <line x1='3' y1='6' x2='3.01' y2='6' />
                                    <line x1='3' y1='12' x2='3.01' y2='12' />
                                    <line x1='3' y1='18' x2='3.01' y2='18' />
                                </svg>
                            </button>
                            <button
                                className={`action-button grid ${isGridActive ? 'active' : ''}`}
                                title='Grid View'
                                onClick={handleGridClick}
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='feather feather-grid mb-3'
                                    width='16'
                                    height='16'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                >
                                    <rect x='3' y='3' width='7' height='7' />
                                    <rect x='14' y='3' width='7' height='7' />
                                    <rect x='14' y='14' width='7' height='7' />
                                    <rect x='3' y='14' width='7' height='7' />
                                </svg>
                            </button>
                        </div>
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
                                Kategori
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
                            <div className='product-cell sales'>
                                Yorumlar
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
                        <Fade left cascade>
                            <div className='products-row group'>
                                <button className='cell-more-button'>Ürünü İncele</button>
                                <div className='product-cell image'>
                                    <img
                                        src='https://www.ottocool.com/uploads/product/ottocool_ciftli_izolasyonlu_platina_gri_bakir_boru.jpg'
                                        alt='product'
                                        className='group-hover:scale-105 transition-all duration-500 ease-in-out'
                                    />
                                    <span>Çiftli İzolasyonlu Platina Gri Bakır Boru</span>
                                    <div className='product-cell category'>
                                        <span className='cell-label'>Kategori:</span>Klima
                                    </div>
                                    <div className='product-cell status-cell'>
                                        <span className='cell-label'>Stok:</span>
                                        <span className='status active'>Mevcut</span>
                                    </div>
                                    <div className='product-cell sales'>
                                        <span className='cell-label'>Yorumlar:</span>11
                                    </div>
                                    <div className='product-cell price'>
                                        <span className='cell-label'>Fiyat:</span>₺1500
                                    </div>
                                </div>
                            </div>
                            <div className='products-row'>
                                <button className='cell-more-button'>Ürünü İncele</button>
                                <div className='product-cell image'>
                                    <img
                                        src='https://www.ottocool.com/uploads/product/ottocool_ciftli_izolasyonlu_platina_gri_bakir_boru.jpg'
                                        alt='product'
                                    />
                                    <span>Çiftli İzolasyonlu Platina Gri Bakır Boru</span>
                                    <div className='product-cell category'>
                                        <span className='cell-label'>Kategori:</span>Klima
                                    </div>
                                    <div className='product-cell status-cell'>
                                        <span className='cell-label'>Stok:</span>
                                        <span className='status active'>Mevcut</span>
                                    </div>
                                    <div className='product-cell sales'>
                                        <span className='cell-label'>Sales:</span>11
                                    </div>
                                    <div className='product-cell price'>
                                        <span className='cell-label'>Fiyat:</span>₺1500
                                    </div>
                                </div>
                            </div>
                            <div className='products-row'>
                                <button className='cell-more-button'>Ürünü İncele</button>
                                <div className='product-cell image'>
                                    <img
                                        src='https://www.ottocool.com/uploads/product/ottocool_ciftli_izolasyonlu_platina_gri_bakir_boru.jpg'
                                        alt='product'
                                    />
                                    <span>Çiftli İzolasyonlu Platina Gri Bakır Boru</span>
                                    <div className='product-cell category'>
                                        <span className='cell-label'>Kategori:</span>Klima
                                    </div>
                                    <div className='product-cell status-cell'>
                                        <span className='cell-label'>Stok:</span>
                                        <span className='status active'>Mevcut</span>
                                    </div>
                                    <div className='product-cell sales'>
                                        <span className='cell-label'>Sales:</span>11
                                    </div>
                                    <div className='product-cell price'>
                                        <span className='cell-label'>Fiyat:</span>₺1500
                                    </div>
                                </div>
                            </div>
                            <div className='products-row'>
                                <button className='cell-more-button'>Ürünü İncele</button>
                                <div className='product-cell image'>
                                    <img
                                        src='https://www.ottocool.com/uploads/product/ottocool_ciftli_izolasyonlu_platina_gri_bakir_boru.jpg'
                                        alt='product'
                                    />
                                    <span>Çiftli İzolasyonlu Platina Gri Bakır Boru</span>
                                    <div className='product-cell category'>
                                        <span className='cell-label'>Kategori:</span>Klima
                                    </div>
                                    <div className='product-cell status-cell'>
                                        <span className='cell-label'>Stok:</span>
                                        <span className='status active'>Mevcut</span>
                                    </div>
                                    <div className='product-cell sales'>
                                        <span className='cell-label'>Sales:</span>11
                                    </div>
                                    <div className='product-cell price'>
                                        <span className='cell-label'>Fiyat:</span>₺1500
                                    </div>
                                </div>
                            </div>
                            <div className='products-row'>
                                <button className='cell-more-button'>Ürünü İncele</button>
                                <div className='product-cell image'>
                                    <img
                                        src='https://www.ottocool.com/uploads/product/ottocool_ciftli_izolasyonlu_platina_gri_bakir_boru.jpg'
                                        alt='product'
                                    />
                                    <span>Çiftli İzolasyonlu Platina Gri Bakır Boru</span>
                                    <div className='product-cell category'>
                                        <span className='cell-label'>Kategori:</span>Klima
                                    </div>
                                    <div className='product-cell status-cell'>
                                        <span className='cell-label'>Stok:</span>
                                        <span className='status active'>Mevcut</span>
                                    </div>
                                    <div className='product-cell sales'>
                                        <span className='cell-label'>Sales:</span>11
                                    </div>
                                    <div className='product-cell price'>
                                        <span className='cell-label'>Fiyat:</span>₺1500
                                    </div>
                                </div>
                            </div>
                            <div className='products-row'>
                                <button className='cell-more-button'>Ürünü İncele</button>
                                <div className='product-cell image'>
                                    <img
                                        src='https://www.ottocool.com/uploads/product/ottocool_ciftli_izolasyonlu_platina_gri_bakir_boru.jpg'
                                        alt='product'
                                    />
                                    <span>Çiftli İzolasyonlu Platina Gri Bakır Boru</span>
                                    <div className='product-cell category'>
                                        <span className='cell-label'>Kategori:</span>Klima
                                    </div>
                                    <div className='product-cell status-cell'>
                                        <span className='cell-label'>Stok:</span>
                                        <span className='status active'>Mevcut</span>
                                    </div>
                                    <div className='product-cell sales'>
                                        <span className='cell-label'>Sales:</span>11
                                    </div>
                                    <div className='product-cell price'>
                                        <span className='cell-label'>Fiyat:</span>₺1500
                                    </div>
                                </div>
                            </div>
                            <div className='products-row'>
                                <button className='cell-more-button'>Ürünü İncele</button>
                                <div className='product-cell image'>
                                    <img
                                        src='https://www.ottocool.com/uploads/product/ottocool_ciftli_izolasyonlu_platina_gri_bakir_boru.jpg'
                                        alt='product'
                                    />
                                    <span>Çiftli İzolasyonlu Platina Gri Bakır Boru</span>
                                    <div className='product-cell category'>
                                        <span className='cell-label'>Kategori:</span>Klima
                                    </div>
                                    <div className='product-cell status-cell'>
                                        <span className='cell-label'>Stok:</span>
                                        <span className='status active'>Mevcut</span>
                                    </div>
                                    <div className='product-cell sales'>
                                        <span className='cell-label'>Sales:</span>11
                                    </div>
                                    <div className='product-cell price'>
                                        <span className='cell-label'>Fiyat:</span>₺1500
                                    </div>
                                </div>
                            </div>
                            <div className='products-row'>
                                <button className='cell-more-button'>Ürünü İncele</button>
                                <div className='product-cell image'>
                                    <img
                                        src='https://www.ottocool.com/uploads/product/ottocool_ciftli_izolasyonlu_platina_gri_bakir_boru.jpg'
                                        alt='product'
                                    />
                                    <span>Çiftli İzolasyonlu Platina Gri Bakır Boru</span>
                                    <div className='product-cell category'>
                                        <span className='cell-label'>Kategori:</span>Klima
                                    </div>
                                    <div className='product-cell status-cell'>
                                        <span className='cell-label'>Stok:</span>
                                        <span className='status disabled'>Stokta Yok</span>
                                    </div>
                                    <div className='product-cell sales'>
                                        <span className='cell-label'>Sales:</span>11
                                    </div>
                                    <div className='product-cell price'>
                                        <span className='cell-label'>Fiyat:</span>₺1500
                                    </div>
                                </div>
                            </div>
                            <div className='products-row'>
                                <button className='cell-more-button'>Ürünü İncele</button>
                                <div className='product-cell image'>
                                    <img
                                        src='https://www.ottocool.com/uploads/product/ottocool_ciftli_izolasyonlu_platina_gri_bakir_boru.jpg'
                                        alt='product'
                                    />
                                    <span>Çiftli İzolasyonlu Platina Gri Bakır Boru</span>
                                    <div className='product-cell category'>
                                        <span className='cell-label'>Kategori:</span>Klima
                                    </div>
                                    <div className='product-cell status-cell'>
                                        <span className='cell-label'>Stok:</span>
                                        <span className='status active'>Mevcut</span>
                                    </div>
                                    <div className='product-cell sales'>
                                        <span className='cell-label'>Sales:</span>11
                                    </div>
                                    <div className='product-cell price'>
                                        <span className='cell-label'>Fiyat:</span>₺1500
                                    </div>
                                </div>
                            </div>
                            <div className='products-row'>
                                <button className='cell-more-button'>Ürünü İncele</button>
                                <div className='product-cell image'>
                                    <img
                                        src='https://www.ottocool.com/uploads/product/ottocool_ciftli_izolasyonlu_platina_gri_bakir_boru.jpg'
                                        alt='product'
                                    />
                                    <span>Çiftli İzolasyonlu Platina Gri Bakır Boru</span>
                                    <div className='product-cell category'>
                                        <span className='cell-label'>Kategori:</span>Klima
                                    </div>
                                    <div className='product-cell status-cell'>
                                        <span className='cell-label'>Stok:</span>
                                        <span className='status active'>Mevcut</span>
                                    </div>
                                    <div className='product-cell sales'>
                                        <span className='cell-label'>Sales:</span>11
                                    </div>
                                    <div className='product-cell price'>
                                        <span className='cell-label'>Fiyat:</span>₺1500
                                    </div>
                                </div>
                            </div>
                            <div className='products-row'>
                                <button className='cell-more-button'>Ürünü İncele</button>
                                <div className='product-cell image'>
                                    <img
                                        src='https://www.ottocool.com/uploads/product/ottocool_ciftli_izolasyonlu_platina_gri_bakir_boru.jpg'
                                        alt='product'
                                    />
                                    <span>Çiftli İzolasyonlu Platina Gri Bakır Boru</span>
                                    <div className='product-cell category'>
                                        <span className='cell-label'>Kategori:</span>Klima
                                    </div>
                                    <div className='product-cell status-cell'>
                                        <span className='cell-label'>Stok:</span>
                                        <span className='status active'>Mevcut</span>
                                    </div>
                                    <div className='product-cell sales'>
                                        <span className='cell-label'>Sales:</span>11
                                    </div>
                                    <div className='product-cell price'>
                                        <span className='cell-label'>Fiyat:</span>₺1500
                                    </div>
                                </div>
                            </div>
                            <div className='products-row'>
                                <button className='cell-more-button'>Ürünü İncele</button>
                                <div className='product-cell image'>
                                    <img
                                        src='https://www.ottocool.com/uploads/product/ottocool_ciftli_izolasyonlu_platina_gri_bakir_boru.jpg'
                                        alt='product'
                                    />
                                    <span>Çiftli İzolasyonlu Platina Gri Bakır Boru</span>
                                    <div className='product-cell category'>
                                        <span className='cell-label'>Kategori:</span>Klima
                                    </div>
                                    <div className='product-cell status-cell'>
                                        <span className='cell-label'>Stok:</span>
                                        <span className='status active'>Mevcut</span>
                                    </div>
                                    <div className='product-cell sales'>
                                        <span className='cell-label'>Sales:</span>11
                                    </div>
                                    <div className='product-cell price'>
                                        <span className='cell-label'>Fiyat:</span>₺1500
                                    </div>
                                </div>
                            </div>
                            <div className='products-row'>
                                <button className='cell-more-button'>Ürünü İncele</button>
                                <div className='product-cell image'>
                                    <img
                                        src='https://www.ottocool.com/uploads/product/ottocool_ciftli_izolasyonlu_platina_gri_bakir_boru.jpg'
                                        alt='product'
                                    />
                                    <span>Çiftli İzolasyonlu Platina Gri Bakır Boru</span>
                                    <div className='product-cell category'>
                                        <span className='cell-label'>Kategori:</span>Klima
                                    </div>
                                    <div className='product-cell status-cell'>
                                        <span className='cell-label'>Stok:</span>
                                        <span className='status active'>Mevcut</span>
                                    </div>
                                    <div className='product-cell sales'>
                                        <span className='cell-label'>Sales:</span>11
                                    </div>
                                    <div className='product-cell price'>
                                        <span className='cell-label'>Fiyat:</span>₺1500
                                    </div>
                                </div>
                            </div>
                            <div className='products-row'>
                                <button className='cell-more-button'>Ürünü İncele</button>
                                <div className='product-cell image'>
                                    <img
                                        src='https://www.ottocool.com/uploads/product/ottocool_ciftli_izolasyonlu_platina_gri_bakir_boru.jpg'
                                        alt='product'
                                    />
                                    <span>Çiftli İzolasyonlu Platina Gri Bakır Boru</span>
                                    <div className='product-cell category'>
                                        <span className='cell-label'>Kategori:</span>Klima
                                    </div>
                                    <div className='product-cell status-cell'>
                                        <span className='cell-label'>Stok:</span>
                                        <span className='status active'>Mevcut</span>
                                    </div>
                                    <div className='product-cell sales'>
                                        <span className='cell-label'>Sales:</span>11
                                    </div>
                                    <div className='product-cell price'>
                                        <span className='cell-label'>Fiyat:</span>₺1500
                                    </div>
                                </div>
                            </div>
                            <div className='products-row'>
                                <button className='cell-more-button'>Ürünü İncele</button>
                                <div className='product-cell image'>
                                    <img
                                        src='https://www.ottocool.com/uploads/product/ottocool_ciftli_izolasyonlu_platina_gri_bakir_boru.jpg'
                                        alt='product'
                                    />
                                    <span>Çiftli İzolasyonlu Platina Gri Bakır Boru</span>
                                    <div className='product-cell category'>
                                        <span className='cell-label'>Kategori:</span>Klima
                                    </div>
                                    <div className='product-cell status-cell'>
                                        <span className='cell-label'>Stok:</span>
                                        <span className='status active'>Mevcut</span>
                                    </div>
                                    <div className='product-cell sales'>
                                        <span className='cell-label'>Sales:</span>11
                                    </div>
                                    <div className='product-cell price'>
                                        <span className='cell-label'>Fiyat:</span>₺1500
                                    </div>
                                </div>
                            </div>
                            <div className='products-row'>
                                <button className='cell-more-button'>Ürünü İncele</button>
                                <div className='product-cell image'>
                                    <img
                                        src='https://www.ottocool.com/uploads/product/ottocool_ciftli_izolasyonlu_platina_gri_bakir_boru.jpg'
                                        alt='product'
                                    />
                                    <span>Çiftli İzolasyonlu Platina Gri Bakır Boru</span>
                                    <div className='product-cell category'>
                                        <span className='cell-label'>Kategori:</span>Klima
                                    </div>
                                    <div className='product-cell status-cell'>
                                        <span className='cell-label'>Stok:</span>
                                        <span className='status active'>Mevcut</span>
                                    </div>
                                    <div className='product-cell sales'>
                                        <span className='cell-label'>Sales:</span>11
                                    </div>
                                    <div className='product-cell price'>
                                        <span className='cell-label'>Fiyat:</span>₺1500
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </>
    )
}
