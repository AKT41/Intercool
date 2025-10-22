import React from 'react'
import { Fade } from 'react-reveal'
import Link from 'next/link'
import Image from 'next/image'

export default function categoryCard() {
    return (
        <span id='cards' className='scroll-smooth'>
            <div className='flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 md:py-24'>
                <div className='flex flex-col items-center justify-center gap-8 md:gap-12 px-5 max-w-7xl mx-auto w-full'>
                    <div className='text-center space-y-4 animate-fade-in-down'>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold bg-gradient-blue bg-clip-text text-transparent'>
                            Kullanım Alanlarımız
                        </h1>
                        <p className='text-gray-600 text-lg md:text-xl max-w-2xl mx-auto'>
                            Farklı sektörlerde kaliteli çözümler sunuyoruz
                        </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full'>
                        <Fade bottom cascade>
                            <div className='group relative bg-white rounded-2xl shadow-soft hover:shadow-strong transition-all duration-500 overflow-hidden transform hover:-translate-y-2'>
                                <div className='relative h-64 overflow-hidden'>
                                    <div className='absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 opacity-90'></div>
                                    <div className='absolute inset-0 flex items-center justify-center'>
                                        <Image
                                            src='https://i.hizliresim.com/cj1godb.jpg'
                                            alt='Medikal'
                                            width={256}
                                            height={256}
                                            className='object-cover w-full h-full'
                                        />
                                    </div>
                                </div>
                                <div className='p-6 space-y-4'>
                                    <h2 className='text-2xl font-bold text-gray-800'>Medikal</h2>
                                    <p className='text-gray-600 text-sm leading-relaxed'>
                                        Medikal alanda bir çok kesime hitap eden ürünleri ile
                                        müşterilerimizin gönlünü kazanmış bütçe dostu çözümler.
                                    </p>
                                    <Link
                                        href='/products/product-categoris/medikal'
                                        className='inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group-hover:gap-3'
                                    >
                                        Kategoriyi Göster
                                        <svg
                                            className='w-5 h-5'
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
                                    </Link>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom cascade>
                            <div className='group relative bg-white rounded-2xl shadow-soft hover:shadow-strong transition-all duration-500 overflow-hidden transform hover:-translate-y-2'>
                                <div className='relative h-64 overflow-hidden'>
                                    <div className='absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-90'></div>
                                    <div className='absolute inset-0 flex items-center justify-center'>
                                        <Image
                                            src='https://i.hizliresim.com/7wu2bhj.png'
                                            alt='Endüstriyel'
                                            width={256}
                                            height={256}
                                            className='object-cover w-full h-full'
                                        />
                                    </div>
                                </div>
                                <div className='p-6 space-y-4'>
                                    <h2 className='text-2xl font-bold text-gray-800'>
                                        Endüstriyel
                                    </h2>
                                    <p className='text-gray-600 text-sm leading-relaxed'>
                                        PE İzolasyonlu Bakır Boru üretimi ve ihracatı. Endüstriyel
                                        alanda kaliteli ürünler ile sizlere hizmet vermekteyiz.
                                    </p>
                                    <Link
                                        href='/products/product-categoris/endüstriyel'
                                        className='inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group-hover:gap-3'
                                    >
                                        Kategoriyi Göster
                                        <svg
                                            className='w-5 h-5'
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
                                    </Link>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom cascade>
                            <div className='group relative bg-white rounded-2xl shadow-soft hover:shadow-strong transition-all duration-500 overflow-hidden transform hover:-translate-y-2'>
                                <div className='relative h-64 overflow-hidden'>
                                    <div className='absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 opacity-90'></div>
                                    <div className='absolute inset-0 flex items-center justify-center'>
                                        <Image
                                            src='https://i.hizliresim.com/czgac6m.jpg'
                                            alt='Sıhhi Tesisat'
                                            width={256}
                                            height={256}
                                            className='object-cover w-full h-full'
                                        />
                                    </div>
                                </div>
                                <div className='p-6 space-y-4'>
                                    <h2 className='text-2xl font-bold text-gray-800'>
                                        Sıhhi Tesisat
                                    </h2>
                                    <p className='text-gray-600 text-sm leading-relaxed'>
                                        PE İzolasyonlu Bakır Boruları sıhhi tesisat alanında sıkça
                                        kullanılır. Sektörde güvenilir çözümler sunuyoruz.
                                    </p>
                                    <Link
                                        href='/products/product-categoris/sihhitesisat'
                                        className='inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group-hover:gap-3'
                                    >
                                        Kategoriyi Göster
                                        <svg
                                            className='w-5 h-5'
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
                                    </Link>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom cascade>
                            <div className='group relative bg-white rounded-2xl shadow-soft hover:shadow-strong transition-all duration-500 overflow-hidden transform hover:-translate-y-2'>
                                <div className='relative h-64 overflow-hidden'>
                                    <div className='absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 opacity-90'></div>
                                    <div className='absolute inset-0 flex items-center justify-center'>
                                        <Image
                                            src='https://i.hizliresim.com/1g7lr9o.png'
                                            alt='Klima'
                                            width={256}
                                            height={256}
                                            className='object-cover w-full h-full'
                                        />
                                    </div>
                                </div>
                                <div className='p-6 space-y-4'>
                                    <h2 className='text-2xl font-bold text-gray-800'>Klima</h2>
                                    <p className='text-gray-600 text-sm leading-relaxed'>
                                        Klima sektöründe oldukça tanınan, lider markalardan biri.
                                        İntercool Bakır Boru sektörünün güvenilir markası.
                                    </p>
                                    <Link
                                        href='/products/product-categoris/klima'
                                        className='inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group-hover:gap-3'
                                    >
                                        Kategoriyi Göster
                                        <svg
                                            className='w-5 h-5'
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
                                    </Link>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </span>
    )
}
