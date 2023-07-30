/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react'
import '../assets/style/navbar.css'
import Fade from 'react-reveal/Fade'
import Link from 'next/link'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [isSearchDelete, setIsSearchDelete] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleInputChange = (e) => {
        if (e.target.value.length > 0) {
            setIsSearchDelete(true)
        } else {
            setIsSearchDelete(false)
        }
        setInputValue(e.target.value)
    }

    const clearInput = () => {
        setInputValue('')
        setIsSearchDelete(false)
    }

    return (
        <>
            <Fade top>
                <nav
                    className='bg-white border-gray-200 dark:bg-sky-700 fixed top-0 left-0 right-0 z-50 opac dark:bg-opacity-70'
                    style={{
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                        <Link href='/' className='flex items-center'>
                            {/* <img 
        src="https://cdn.discordapp.com/attachments/1113207949616218275/1116493113142288444/WhatsApp_Gorsel_2023-06-08_saat_16.56.05.jpg" 
        className="h-8 w-8 mr-3 rounded-full cover" 
        alt="Flowbite Logo" 
      /> */}
                            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white select-none'>
                                İntercool
                            </span>
                        </Link>
                        <div className='flex items-center md:order-2'>
                            <button
                                data-collapse-toggle='mobile-menu-language-select'
                                type='button'
                                className='inline-flex items-center p-2 ml-1 text-sm text-gray-100 md:hidden focus:outline-none focus:ring-2 rounded-full focus:ring-gray-200 dark:text-gray-40 dark:focus:ring-gray-200'
                                aria-controls='mobile-menu-language-select'
                                aria-expanded='false'
                                onClick={toggleMenu}
                            >
                                <span className='sr-only'>Open main menu</span>
                                {isMenuOpen ? (
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='w-5 h-5 text-gray-300 cursor-pointer icon icon-tabler icon-tabler-x  mr-1 mb-1'
                                        width='20'
                                        height='20'
                                        viewBox='0 0 20 20'
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
                                        className='w-6 h-6'
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
                                isMenuOpen ? 'block' : 'hidden'
                            } items-center justify-between  w-full md:flex md:w-auto md:order-1 transition duration-500 transform md:translate-y-0 md:opacity-100`}
                            id='mobile-menu-language-select'
                        >
                            <ul
                                className='flex flex-col font-medium p-4 md:p-0  mt-4 border border-gray-100 rounded-lg bg-skt-50 md:flex-row  md:mt-0 md:border-0 md:bg-white dark:bg-sky-800  md:dark:bg-transparent md:dark:bg-opacity-70 dark:border-gray-700'
                                // style={{ backdropFilter: "blur(10px)" }}
                            >
                                <li>
                                    <Link
                                        href='/'
                                        className='block py-2 pl-3 pr-4 text-gray-900 rounded transition-all duration-200 nav-item bg-opacity-70  dark:text-white dark:hover:text-white dark:border-gray-700 '
                                        aria-current='page'
                                    >
                                        Ana Sayfa
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/about'
                                        className='block py-2 pl-3 pr-4 text-gray-900 rounded transition-all duration-200 nav-item bg-opacity-70  dark:text-white dark:hover:text-white dark:border-gray-700'
                                    >
                                        Hakkımızda
                                    </Link>
                                </li>
                                <li className=''>
                                    <Link
                                        href='/references'
                                        className='block py-2 pl-3 pr-4 text-gray-900 rounded transition-all duration-200 nav-item bg-opacity-70  dark:text-white dark:hover:text-white dark:border-gray-700'
                                    >
                                        Referanslarımız
                                    </Link>
                                </li>
                                <li className='relative'>
                                    <Link
                                        href='/products'
                                        className='py-2 pl-3 pr-4 group peer flex md:justify-center items-center content-center gap-1 text-gray-900 rounded transition-all duration-200 nav-item bg-opacity-70  dark:text-white dark:hover:text-white dark:border-gray-700'
                                    >
                                        Ürünlerimiz
                                        {/* <span>   */}
                                    </Link>
                                    {/* <ul
                                        className='md:absolute w-[98%] relative md:w-64 hidden dark:bg-opacity-70 peer-focus:flex flex-wrap hover:flex left-1 rounded-md bg-white border border-gray-200 dark:bg-gray-600 dark:border-gray-700'
                                        style={{ backdropFilter: 'blur(10px)' }}
                                    >
                                        <li className='w-1/2'>
                                            <Link
                                                href='#'
                                                className='block px-4 py-2 text-gray-900 rounded-tr-none dark:text-whit rounded-md transition-all duration-150 dark:hover:text-white dark:border-gray-700'
                                            >
                                                Kategori 1
                                            </Link>
                                        </li>
                                        <li className='w-1/2'>
                                            <Link
                                                href='#'
                                                className='block px-4 py-2 text-gray-900 dark:text-white rounded-tl-non rounded-md transition-all duration-150 dark:hover:text-white dark:border-gray-700'
                                            >
                                                Kategori 2
                                            </Link>
                                        </li>
                                        <li className='w-1/2'>
                                            <Link
                                                href='#'
                                                className='block px-4 py-2 text-gray-900 dark:text-white rounded-br-non rounded-md transition-all duration-150 dark:hover:text-white dark:border-gray-700'
                                            >
                                                Kategori 3
                                            </Link>
                                        </li>
                                        <li className='w-1/2'>
                                            <Link
                                                href='#'
                                                className='block px-4 py-2 text-gray-900 dark:text-white rounded-bl-non rounded-md transition-all duration-150 dark:hover:text-white dark:border-gray-700'
                                            >
                                                Kategori 4
                                            </Link>
                                        </li>
                                    </ul> */}
                                </li>
                                <li>
                                    <Link
                                        href='/contact'
                                        className='block py-2 pl-3 pr-4 text-gray-900 rounded transition-all duration-200 nav-item bg-opacity-70  dark:text-white dark:hover:text-white dark:border-gray-700'
                                    >
                                        İletişim
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div
                            className={`${
                                isMenuOpen ? 'block' : 'hidden'
                            } items-center search-box justify-between w-full md:flex md:w-auto md:order-1 transition duration-500 transform md:translate-y-0 md:opacity-100`}
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
                                className='block w-full transition-all duration-200 p-2 pl-10 hover:border-sky-950 border-solid focus:bg-gray-200 text-gray-900 border border-gray-300 rounded-lg bg-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-500 outline-none'
                                placeholder='Ürün Ara...'
                                onChange={handleInputChange}
                                value={inputValue}
                            />

                            <div
                                className='absolute inset-y-0 right-0 cursor-pointer flex items-center pr-3 '
                                onClick={clearInput}
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className={
                                        isSearchDelete && inputValue.length > 0
                                            ? 'w-5 h-5 text-gray-900 cursor-pointer icon icon-tabler icon-tabler-x opacity-100 transition-all duration-300'
                                            : 'opacity-0 transition-all duration-300'
                                    }
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1'
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
                        </div>
                    </div>
                </nav>
            </Fade>
        </>
    )
}
