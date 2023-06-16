'use client'
import React from 'react'
import '../assets/style/nav-product.css'

export default function NavProduct() {
    return (
        <>
            <nav className='my-2 md:block hidden'>
                <ul className='flex gap-4 text-sm items-center text-gray-900'>
                    <li className='nav-items hover:text-gray-500 transition-all duration-200 before:py-0 before:pr-2'>
                        <a href='#'>Ana Sayfa</a>
                    </li>

                    <li className='nav-items hover:text-gray-500 transition-all duration-200'>
                        <a href='#'>Ürünlerimiz</a>
                    </li>
                    <li className='nav-items hover:text-gray-500 transition-all duration-200'>
                        <a href='#'>Çiftli İzolasyonlu Beyaz Bakır Boru</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
