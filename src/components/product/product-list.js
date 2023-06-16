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
            <div class='app-container mt-20 w-full max-w-7xl'>
                <div class='app-content'>
                    <div class='app-content-header'>
                        <h1 class='app-content-headerText'>Ürünlerimiz</h1>
                    </div>
                    <div class='app-content-actions'>
                        <input class='search-bar' placeholder='Ürün Ara...' type='text' />
                        <div class='app-content-actions-wrapper'>
                            <div class='filter-button-wrapper'>
                                <button
                                    class='action-button filter jsFilter'
                                    onClick={handleFilterClick}
                                >
                                    <span>Filter</span>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='16'
                                        height='16'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='currentColor'
                                        stroke-width='2'
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                        class='feather feather-filter'
                                    >
                                        <polygon points='22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3' />
                                    </svg>
                                </button>
                                <div class={`filter-menu ${isFilterMenuActive ? 'active' : ''}`}>
                                    <label>Category</label>
                                    <select>
                                        <option>All Categories</option>
                                        <option>Furniture</option> <option>Decoration</option>
                                        <option>Kitchen</option>
                                        <option>Bathroom</option>
                                    </select>
                                    <label>Status</label>
                                    <select>
                                        <option>All Status</option>
                                        <option>Active</option>
                                        <option>Disabled</option>
                                    </select>
                                    <div class='filter-menu-buttons'>
                                        <button class='filter-button reset'>Reset</button>
                                        <button class='filter-button apply'>Apply</button>
                                    </div>
                                </div>
                            </div>
                            <button
                                class={`action-button list ${!isGridActive ? 'active' : ''}`}
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
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    class='feather feather-list'
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
                                class={`action-button grid ${isGridActive ? 'active' : ''}`}
                                title='Grid View'
                                onClick={handleGridClick}
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='16'
                                    height='16'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    class='feather feather-grid'
                                >
                                    <rect x='3' y='3' width='7' height='7' />
                                    <rect x='14' y='3' width='7' height='7' />
                                    <rect x='14' y='14' width='7' height='7' />
                                    <rect x='3' y='14' width='7' height='7' />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class={`products-area-wrapper ${isGridActive ? 'gridView' : 'tableView'}`}>
                        <div class='products-header'>
                            <div class='product-cell image'>
                                Ürünler
                                <button class='sort-button'>
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
                            <div class='product-cell category'>
                                Kategori
                                <button class='sort-button'>
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
                            <div class='product-cell status-cell'>
                                Stok
                                <button class='sort-button'>
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
                            <div class='product-cell sales'>
                                Yorumlar
                                <button class='sort-button'>
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
                            <div class='product-cell price'>
                                Fiyat
                                <button class='sort-button'>
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
                            <div class='products-row'>
                                <button class='cell-more-button'>Ürünü İncele</button>
                                <div class='product-cell image'>
                                    <img
                                        src='https://www.ottocool.com/uploads/product/ottocool_ciftli_izolasyonlu_platina_gri_bakir_boru.jpg'
                                        alt='product'
                                    />
                                    <span>Çiftli İzolasyonlu Platina Gri Bakır Boru</span>
                                </div>
                                <div class='product-cell category'>
                                    <span class='cell-label'>Kategori:</span>Klima
                                </div>
                                <div class='product-cell status-cell'>
                                    <span class='cell-label'>Stok:</span>
                                    <span class='status active'>Mevcut</span>
                                </div>
                                <div class='product-cell sales'>
                                    <span class='cell-label'>Sales:</span>11
                                </div>
                                <div class='product-cell price'>
                                    <span class='cell-label'>Fiyat:</span>₺1500
                                </div>
                            </div>
                            <div class='products-row'>
                                <button class='cell-more-button'>Ürünü İncele</button>
                                <div class='product-cell image'>
                                    <img
                                        src='https://www.ottocool.com/uploads/product/ottocool_ciftli_izolasyonlu_platina_gri_bakir_boru.jpg'
                                        alt='product'
                                    />
                                    <span>Çiftli İzolasyonlu Platina Gri Bakır Boru</span>
                                </div>
                                <div class='product-cell category'>
                                    <span class='cell-label'>Kategori:</span>Klima
                                </div>
                                <div class='product-cell status-cell'>
                                    <span class='cell-label'>Stok:</span>
                                    <span class='status active'>Mevcut</span>
                                </div>
                                <div class='product-cell sales'>
                                    <span class='cell-label'>Sales:</span>11
                                </div>
                                <div class='product-cell price'>
                                    <span class='cell-label'>Fiyat:</span>₺1500
                                </div>
                            </div>
                            <div class='products-row'>
                                <button class='cell-more-button'>Ürünü İncele</button>
                                <div class='product-cell image'>
                                    <img
                                        src='https://www.ottocool.com/uploads/product/ottocool_ciftli_izolasyonlu_platina_gri_bakir_boru.jpg'
                                        alt='product'
                                    />
                                    <span>Çiftli İzolasyonlu Platina Gri Bakır Boru</span>
                                </div>
                                <div class='product-cell category'>
                                    <span class='cell-label'>Kategori:</span>Klima
                                </div>
                                <div class='product-cell status-cell'>
                                    <span class='cell-label'>Stok:</span>
                                    <span class='status active'>Mevcut</span>
                                </div>
                                <div class='product-cell sales'>
                                    <span class='cell-label'>Sales:</span>11
                                </div>
                                <div class='product-cell price'>
                                    <span class='cell-label'>Fiyat:</span>₺1500
                                </div>
                            </div>
                            <div class='products-row'>
                                <button class='cell-more-button'>Ürünü İncele</button>
                                <div class='product-cell image'>
                                    <img
                                        src='https://www.ottocool.com/uploads/product/ottocool_ciftli_izolasyonlu_platina_gri_bakir_boru.jpg'
                                        alt='product'
                                    />
                                    <span>Çiftli İzolasyonlu Platina Gri Bakır Boru</span>
                                </div>
                                <div class='product-cell category'>
                                    <span class='cell-label'>Kategori:</span>Klima
                                </div>
                                <div class='product-cell status-cell'>
                                    <span class='cell-label'>Stok:</span>
                                    <span class='status active'>Mevcut</span>
                                </div>
                                <div class='product-cell sales'>
                                    <span class='cell-label'>Sales:</span>11
                                </div>
                                <div class='product-cell price'>
                                    <span class='cell-label'>Fiyat:</span>₺1500
                                </div>
                            </div>
                            <div class='products-row'>
                                <button class='cell-more-button'>Ürünü İncele</button>
                                <div class='product-cell image'>
                                    <img
                                        src='https://www.ottocool.com/uploads/product/ottocool_ciftli_izolasyonlu_platina_gri_bakir_boru.jpg'
                                        alt='product'
                                    />
                                    <span>Çiftli İzolasyonlu Platina Gri Bakır Boru</span>
                                </div>
                                <div class='product-cell category'>
                                    <span class='cell-label'>Kategori:</span>Klima
                                </div>
                                <div class='product-cell status-cell'>
                                    <span class='cell-label'>Stok:</span>
                                    <span class='status active'>Mevcut</span>
                                </div>
                                <div class='product-cell sales'>
                                    <span class='cell-label'>Sales:</span>11
                                </div>
                                <div class='product-cell price'>
                                    <span class='cell-label'>Fiyat:</span>₺1500
                                </div>
                            </div>
                            <div class='products-row'>
                                <button class='cell-more-button'>Ürünü İncele</button>
                                <div class='product-cell image'>
                                    <img
                                        src='https://www.ottocool.com/uploads/product/ottocool_ciftli_izolasyonlu_platina_gri_bakir_boru.jpg'
                                        alt='product'
                                    />
                                    <span>Çiftli İzolasyonlu Platina Gri Bakır Boru</span>
                                </div>
                                <div class='product-cell category'>
                                    <span class='cell-label'>Kategori:</span>Klima
                                </div>
                                <div class='product-cell status-cell'>
                                    <span class='cell-label'>Stok:</span>
                                    <span class='status active'>Mevcut</span>
                                </div>
                                <div class='product-cell sales'>
                                    <span class='cell-label'>Sales:</span>11
                                </div>
                                <div class='product-cell price'>
                                    <span class='cell-label'>Fiyat:</span>₺1500
                                </div>
                            </div>
                            <div class='products-row'>
                                <button class='cell-more-button'>Ürünü İncele</button>
                                <div class='product-cell image'>
                                    <img
                                        src='https://www.ottocool.com/uploads/product/ottocool_ciftli_izolasyonlu_platina_gri_bakir_boru.jpg'
                                        alt='product'
                                    />
                                    <span>Çiftli İzolasyonlu Platina Gri Bakır Boru</span>
                                </div>
                                <div class='product-cell category'>
                                    <span class='cell-label'>Kategori:</span>Klima
                                </div>
                                <div class='product-cell status-cell'>
                                    <span class='cell-label'>Stok:</span>
                                    <span class='status active'>Mevcut</span>
                                </div>
                                <div class='product-cell sales'>
                                    <span class='cell-label'>Sales:</span>11
                                </div>
                                <div class='product-cell price'>
                                    <span class='cell-label'>Fiyat:</span>₺1500
                                </div>
                            </div>
                            <div class='products-row'>
                                <button class='cell-more-button'>Ürünü İncele</button>
                                <div class='product-cell image'>
                                    <img
                                        src='https://www.ottocool.com/uploads/product/ottocool_ciftli_izolasyonlu_platina_gri_bakir_boru.jpg'
                                        alt='product'
                                    />
                                    <span>Çiftli İzolasyonlu Platina Gri Bakır Boru</span>
                                </div>
                                <div class='product-cell category'>
                                    <span class='cell-label'>Kategori:</span>Klima
                                </div>
                                <div class='product-cell status-cell'>
                                    <span class='cell-label'>Stok:</span>
                                    <span class='status active'>Mevcut</span>
                                </div>
                                <div class='product-cell sales'>
                                    <span class='cell-label'>Sales:</span>11
                                </div>
                                <div class='product-cell price'>
                                    <span class='cell-label'>Fiyat:</span>₺1500
                                </div>
                            </div>
                            <div class='products-row'>
                                <button class='cell-more-button'>Ürünü İncele</button>
                                <div class='product-cell image'>
                                    <img
                                        src='https://www.ottocool.com/uploads/product/ottocool_ciftli_izolasyonlu_platina_gri_bakir_boru.jpg'
                                        alt='product'
                                    />
                                    <span>Çiftli İzolasyonlu Platina Gri Bakır Boru</span>
                                </div>
                                <div class='product-cell category'>
                                    <span class='cell-label'>Kategori:</span>Klima
                                </div>
                                <div class='product-cell status-cell'>
                                    <span class='cell-label'>Stok:</span>
                                    <span class='status active'>Mevcut</span>
                                </div>
                                <div class='product-cell sales'>
                                    <span class='cell-label'>Sales:</span>11
                                </div>
                                <div class='product-cell price'>
                                    <span class='cell-label'>Fiyat:</span>₺1500
                                </div>
                            </div>
                            <div class='products-row'>
                                <button class='cell-more-button'>Ürünü İncele</button>
                                <div class='product-cell image'>
                                    <img
                                        src='https://www.ottocool.com/uploads/product/ottocool_ciftli_izolasyonlu_platina_gri_bakir_boru.jpg'
                                        alt='product'
                                    />
                                    <span>Çiftli İzolasyonlu Platina Gri Bakır Boru</span>
                                </div>
                                <div class='product-cell category'>
                                    <span class='cell-label'>Kategori:</span>Klima
                                </div>
                                <div class='product-cell status-cell'>
                                    <span class='cell-label'>Stok:</span>
                                    <span class='status active'>Mevcut</span>
                                </div>
                                <div class='product-cell sales'>
                                    <span class='cell-label'>Sales:</span>11
                                </div>
                                <div class='product-cell price'>
                                    <span class='cell-label'>Fiyat:</span>₺1500
                                </div>
                            </div>
                            <div class='products-row'>
                                <button class='cell-more-button'>Ürünü İncele</button>
                                <div class='product-cell image'>
                                    <img
                                        src='https://www.ottocool.com/uploads/product/ottocool_ciftli_izolasyonlu_platina_gri_bakir_boru.jpg'
                                        alt='product'
                                    />
                                    <span>Çiftli İzolasyonlu Platina Gri Bakır Boru</span>
                                </div>
                                <div class='product-cell category'>
                                    <span class='cell-label'>Kategori:</span>Klima
                                </div>
                                <div class='product-cell status-cell'>
                                    <span class='cell-label'>Stok:</span>
                                    <span class='status active'>Mevcut</span>
                                </div>
                                <div class='product-cell sales'>
                                    <span class='cell-label'>Sales:</span>11
                                </div>
                                <div class='product-cell price'>
                                    <span class='cell-label'>Fiyat:</span>₺1500
                                </div>
                            </div>
                            <div class='products-row'>
                                <button class='cell-more-button'>Ürünü İncele</button>
                                <div class='product-cell image'>
                                    <img
                                        src='https://www.ottocool.com/uploads/product/ottocool_ciftli_izolasyonlu_platina_gri_bakir_boru.jpg'
                                        alt='product'
                                    />
                                    <span>Çiftli İzolasyonlu Platina Gri Bakır Boru</span>
                                </div>
                                <div class='product-cell category'>
                                    <span class='cell-label'>Kategori:</span>Klima
                                </div>
                                <div class='product-cell status-cell'>
                                    <span class='cell-label'>Stok:</span>
                                    <span class='status active'>Mevcut</span>
                                </div>
                                <div class='product-cell sales'>
                                    <span class='cell-label'>Sales:</span>11
                                </div>
                                <div class='product-cell price'>
                                    <span class='cell-label'>Fiyat:</span>₺1500
                                </div>
                            </div>
                            <div class='products-row'>
                                <button class='cell-more-button'>Ürünü İncele</button>
                                <div class='product-cell image'>
                                    <img
                                        src='https://www.ottocool.com/uploads/product/ottocool_ciftli_izolasyonlu_platina_gri_bakir_boru.jpg'
                                        alt='product'
                                    />
                                    <span>Çiftli İzolasyonlu Platina Gri Bakır Boru</span>
                                </div>
                                <div class='product-cell category'>
                                    <span class='cell-label'>Kategori:</span>Klima
                                </div>
                                <div class='product-cell status-cell'>
                                    <span class='cell-label'>Stok:</span>
                                    <span class='status active'>Mevcut</span>
                                </div>
                                <div class='product-cell sales'>
                                    <span class='cell-label'>Sales:</span>11
                                </div>
                                <div class='product-cell price'>
                                    <span class='cell-label'>Fiyat:</span>₺1500
                                </div>
                            </div>
                            <div class='products-row'>
                                <button class='cell-more-button'>Ürünü İncele</button>
                                <div class='product-cell image'>
                                    <img
                                        src='https://www.ottocool.com/uploads/product/ottocool_ciftli_izolasyonlu_platina_gri_bakir_boru.jpg'
                                        alt='product'
                                    />
                                    <span>Çiftli İzolasyonlu Platina Gri Bakır Boru</span>
                                </div>
                                <div class='product-cell category'>
                                    <span class='cell-label'>Kategori:</span>Klima
                                </div>
                                <div class='product-cell status-cell'>
                                    <span class='cell-label'>Stok:</span>
                                    <span class='status active'>Mevcut</span>
                                </div>
                                <div class='product-cell sales'>
                                    <span class='cell-label'>Sales:</span>11
                                </div>
                                <div class='product-cell price'>
                                    <span class='cell-label'>Fiyat:</span>₺1500
                                </div>
                            </div>
                            <div class='products-row'>
                                <button class='cell-more-button'>Ürünü İncele</button>
                                <div class='product-cell image'>
                                    <img
                                        src='https://www.ottocool.com/uploads/product/ottocool_ciftli_izolasyonlu_platina_gri_bakir_boru.jpg'
                                        alt='product'
                                    />
                                    <span>Çiftli İzolasyonlu Platina Gri Bakır Boru</span>
                                </div>
                                <div class='product-cell category'>
                                    <span class='cell-label'>Kategori:</span>Klima
                                </div>
                                <div class='product-cell status-cell'>
                                    <span class='cell-label'>Stok:</span>
                                    <span class='status active'>Mevcut</span>
                                </div>
                                <div class='product-cell sales'>
                                    <span class='cell-label'>Sales:</span>11
                                </div>
                                <div class='product-cell price'>
                                    <span class='cell-label'>Fiyat:</span>₺1500
                                </div>
                            </div>
                            <div class='products-row'>
                                <button class='cell-more-button'>Ürünü İncele</button>
                                <div class='product-cell image'>
                                    <img
                                        src='https://www.ottocool.com/uploads/product/ottocool_ciftli_izolasyonlu_platina_gri_bakir_boru.jpg'
                                        alt='product'
                                    />
                                    <span>Çiftli İzolasyonlu Platina Gri Bakır Boru</span>
                                </div>
                                <div class='product-cell category'>
                                    <span class='cell-label'>Kategori:</span>Klima
                                </div>
                                <div class='product-cell status-cell'>
                                    <span class='cell-label'>Stok:</span>
                                    <span class='status active'>Mevcut</span>
                                </div>
                                <div class='product-cell sales'>
                                    <span class='cell-label'>Sales:</span>11
                                </div>
                                <div class='product-cell price'>
                                    <span class='cell-label'>Fiyat:</span>₺1500
                                </div>
                            </div>
                            <div class='products-row'>
                                <button class='cell-more-button'>Ürünü İncele</button>
                                <div class='product-cell image'>
                                    <img
                                        src='https://www.ottocool.com/uploads/product/ottocool_ciftli_izolasyonlu_platina_gri_bakir_boru.jpg'
                                        alt='product'
                                    />
                                    <span>Çiftli İzolasyonlu Platina Gri Bakır Boru</span>
                                </div>
                                <div class='product-cell category'>
                                    <span class='cell-label'>Kategori:</span>Klima
                                </div>
                                <div class='product-cell status-cell'>
                                    <span class='cell-label'>Stok:</span>
                                    <span class='status active'>Mevcut</span>
                                </div>
                                <div class='product-cell sales'>
                                    <span class='cell-label'>Sales:</span>11
                                </div>
                                <div class='product-cell price'>
                                    <span class='cell-label'>Fiyat:</span>₺1500
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </>
    )
}
