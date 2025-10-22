/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import { getSanityProducts } from '../../../sanity/sanity-utils'
import Link from 'next/link'
// import { useRouter } from 'next/router'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [isSearchDelete, setIsSearchDelete] = useState(false)
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        async function fetchProducts() {
            const products = await getSanityProducts()
            setProducts(products)
        }
        fetchProducts()
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleInputChange = (e) => {
        const query = e.target.value.toLowerCase()
        const filtered = products.filter((product) => product.name.toLowerCase().includes(query))
        setFilteredProducts(filtered)
        setInputValue(query)
    }

    const clearInput = () => {
        setInputValue('')
        setIsSearchDelete(false)
    }

    return (
        <>
            <Fade top>
                <nav
                    className='backdrop-blur-md border-b border-gray-200/50 fixed top-0 left-0 right-0 z-50 shadow-soft transition-all duration-300'
                    style={{
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)'
                    }}
                >
                    <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3'>
                        <Link href='/' className='flex items-center group'>
                            <div className='relative'>
                                <div className='absolute inset-0 bg-gradient-blue rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300'></div>
                                <span className='relative text-2xl md:text-3xl font-bold bg-gradient-blue bg-clip-text text-transparent select-none tracking-tight hover:tracking-normal transition-all duration-300'>
                                    İntercool
                                </span>
                            </div>
                        </Link>
                        <div className='flex items-center md:order-2'>
                            <button
                                data-collapse-toggle='mobile-menu-language-select'
                                type='button'
                                className='inline-flex items-center justify-center p-2.5 ml-1 text-sm text-gray-700 md:hidden focus:outline-none focus:ring-2 rounded-lg focus:ring-primary-500  hover:bg-gray-200/70 transition-all duration-300'
                                aria-controls='mobile-menu-language-select'
                                aria-expanded='false'
                                onClick={toggleMenu}
                            >
                                <span className='sr-only'>Open main menu</span>
                                {isMenuOpen ? (
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='w-6 h-6 text-gray-700 cursor-pointer transition-transform duration-300 rotate-90'
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                        strokeWidth='2'
                                        stroke='currentColor'
                                        fill='none'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    >
                                        <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                                        <path d='M18 6l-12 12'></path>
                                        <path d='M6 6l12 12'></path>
                                    </svg>
                                ) : (
                                    <svg
                                        className='w-6 h-6 transition-transform duration-300'
                                        fill='currentColor'
                                        aria-hidden='true'
                                        viewBox='0 0 20 20'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                                            clipRule='evenodd'
                                        ></path>
                                    </svg>
                                )}
                            </button>
                        </div>
                        <div
                            className={`${
                                isMenuOpen ? 'block animate-fade-in-down' : 'hidden'
                            } items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-300 ease-in-out`}
                            id='mobile-menu-language-select'
                        >
                            <ul className='flex flex-col md:flex-row  font-medium p-4 md:p-0 mt-4 md:mt-0 border border-gray-200 md:border-0 rounded-lg md:rounded-none bg-white/90 md:bg-transparent backdrop-blur-sm md:backdrop-blur-0 gap-1 md:gap-0 md:space-x-1'>
                                <li>
                                    <Link
                                        href='/'
                                        className='block py-2.5 px-4 text-gray-700 rounded-lg md:rounded-md hover:bg-primary-50 hover:text-primary-700 transition-all duration-200 font-medium relative group'
                                        aria-current='page'
                                    >
                                        <span className='relative z-10'>Ana Sayfa</span>
                                        <span className='absolute bottom-0 left-0 w-0 h-0.5  group-hover:w-full transition-all duration-300'></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/about'
                                        className='block py-2.5 px-4 text-gray-700 rounded-lg md:rounded-md hover:bg-primary-50 hover:text-primary-700 transition-all duration-200 font-medium relative group'
                                    >
                                        <span className='relative z-10'>Hakkımızda</span>
                                        <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-blue group-hover:w-full transition-all duration-300'></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/references'
                                        className='block py-2.5 px-4 text-gray-700 rounded-lg md:rounded-md hover:bg-primary-50 hover:text-primary-700 transition-all duration-200 font-medium relative group'
                                    >
                                        <span className='relative z-10'>Referanslarımız</span>
                                        <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-blue group-hover:w-full transition-all duration-300'></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/kullanimAlanlari'
                                        className='block py-2.5 px-4 text-gray-700 rounded-lg md:rounded-md hover:bg-primary-50 hover:text-primary-700 transition-all duration-200 font-medium relative group'
                                    >
                                        <span className='relative z-10'>Kullanım Alanlarımız</span>
                                        <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-blue group-hover:w-full transition-all duration-300'></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/products'
                                        className='block py-2.5 px-4 text-gray-700 rounded-lg md:rounded-md hover:bg-primary-50 hover:text-primary-700 transition-all duration-200 font-medium relative group'
                                    >
                                        <span className='relative z-10'>Ürünlerimiz</span>
                                        <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-blue group-hover:w-full transition-all duration-300'></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/contact'
                                        className='block py-2.5 px-4 text-white bg-gradient-blue rounded-lg md:rounded-md hover:shadow-glow transition-all duration-200 font-semibold'
                                    >
                                        İletişim
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* <div
                            className={`${
                                isMenuOpen ? 'block' : 'hidden'
                            } items-center relative search-box input-nav justify-between w-full md:flex md:w-auto md:order-1 transition duration-500 transform md:translate-y-0 md:opacity-100`}
                        >
                            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-40'>
                                <svg
                                    className='w-5 h-5 text-gray-700'
                                    aria-hidden='true'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                                        clipRule='evenodd'
                                    ></path>
                                </svg>
                            </div>

                            <input
                                type='text'
                                id='search-navbar'
                                className='block w-full transition-all duration-200 p-2  pl-10 border-solid text-gray-900 border rounded-lg bg-gray-300  outline-none'
                                placeholder='Ürün Ara...'
                                onChange={handleInputChange}
                                value={inputValue}
                                autcomplete='off'
                            />

                            <div
                                className='absolute inset-y-0 right-0 cursor-pointer flex items-center pr-3 '
                                onClick={clearInput}
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className={
                                        inputValue.length > 0
                                            ? 'w-5 h-5 text-gray-900 cursor-pointer icon icon-tabler icon-tabler-x opacity-100 transition-all duration-300'
                                            : 'opacity-0 transition-all duration-300'
                                    }
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    fill='none'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                >
                                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                                    <path d='M18 6l-12 12'></path>
                                    <path d='M6 6l12 12'></path>
                                </svg>
                            </div>
                            {inputValue.length > 0 ? (
                                <ul className='search-results absolute bg-gray-200 bg-opacity-60 p-3 overflow-auto top-9 w-full rounded-br-lg rounded-bl-lg flex flex-col gap-2 justify-center text-left'>
                                    {filteredProducts.length > 0 ? (
                                        filteredProducts.map((product) => (
                                            <li
                                                key={product.id}
                                                className='bg-gray-400 rounded-md share-btn'
                                            >
                                                <a
                                                    href={`/products/${product.slug}`}
                                                    className='flex justify-between items-center gap-2 hover:bg-gray-500 rounded-md transition-all duration-200'
                                                >
                                                    <img
                                                        className='w-14 h-14 rounded-md object-cover'
                                                        src={product.smallImage}
                                                    />

                                                    <p className='capitalize text-[15px] text-white'>
                                                        {product.name}
                                                    </p>
                                                    <p className='mr-2 go-link'>
                                                        <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            className='icon icon-tabler icon-tabler-share-3 text-white'
                                                            width='24'
                                                            height='24'
                                                            viewBox='0 0 24 24'
                                                            strokeWidth='1.5'
                                                            stroke='currentColor'
                                                            fill='none'
                                                            strokeLinecap='round'
                                                            strokeLinejoin='round'
                                                        >
                                                            <path
                                                                stroke='none'
                                                                d='M0 0h24v24H0z'
                                                                fill='none'
                                                            ></path>
                                                            <path d='M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z'></path>
                                                        </svg>
                                                    </p>
                                                </a>
                                            </li>
                                        ))
                                    ) : (
                                        <li className='bg-gray-400 text-red-600 font-semibold tracking-wide rounded-md py-2 text-center'>
                                            Ürün bulunamadı.
                                        </li>
                                    )}
                                </ul>
                            ) : null}
                        </div> */}
                    </div>
                </nav>
            </Fade>
        </>
    )
}
