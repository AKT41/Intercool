/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import NavProduct from '../nav-footer/navigation-product'
import { Zoom, Fade } from 'react-reveal'
import Table from './table'
import Recommended from './recommended'

export default function ProductDetails() {
    return (
        <>
            <div className='max-w-7xl px-5 py-24 mx-auto mt-5 min-h-screen overflow-x-hidden overflow-y-hidden'>
                <NavProduct />
                <div className=' w-full mx-auto flex flex-wrap '>
                    <Zoom clear>
                        <img
                            src='https://www.cigdemsogutma.com/img/products/beyaz-iszalasyonlu_17.07.2021_8311014_04.03.2023_0913b3e.png'
                            alt='bakır boru'
                            className='lg:w-1/3 my-auto  w-full  object-cover object-center rounded select-none'
                            // maybe w-1/2
                        />
                    </Zoom>
                    <div className='lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
                        {/* maybe w-1/2 */}
                        <Fade top>
                            <h2 className='text-sm title-font text-gray-500 tracking-widest mb-2'>
                                İNTERCOOL
                            </h2>
                        </Fade>
                        <Fade bottom>
                            <h1 className='text-gray-900 text-2xl title-font font-medium mb-2'>
                                BEYAZ İZOLASYONLU BAKIR BORU
                            </h1>
                            <p className='text-xs text-gray-400'>
                                <span className='text-gray-500'>Ürün Kodu: </span> Çiğdem - 2067
                            </p>
                        </Fade>

                        <Fade right>
                            <p className='leading-relaxed border-b border-gray-500 border-opacity-20 border-solid pb-3 mb-3 '>
                                1/4-3/8 0,70mm beyaz izolasyonlu bakır boru, birçok farklı uygulama
                                alanında kullanılan yüksek kaliteli bir malzemedir. Bu boru,
                                özellikle sıvı ve gaz akışı gerektiren sistemlerde güvenli ve etkili
                                bir şekilde kullanılabilir. Boru, yüksek kaliteli bakır
                                malzemesinden üretilmiştir ve dış yüzeyi beyaz renkli izolasyon
                                malzemesi ile kaplanmıştır. Bu sayede, borunun dış yüzeyi mekanik
                                hasarlara karşı korunurken aynı zamanda yalıtım özelliği de
                                sağlanmaktadır.
                            </p>
                            <div className='specifications flex justify-end'>
                                <h1 className='text-gray-900 text-sm title-font font-medium '>
                                    <a
                                        href='#specifications'
                                        className='group flex items-center content-center gap-2'
                                    >
                                        Teknik Özellikler
                                        <span>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                className='icon icon-tabler icon-tabler-arrow-down animate-bounce'
                                                width='20'
                                                height='20'
                                                viewBox='0 0 24 24'
                                                strokeWidth='1'
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
                                                <path d='M12 5l0 14'></path>
                                                <path d='M18 13l-6 6'></path>
                                                <path d='M6 13l6 6'></path>
                                            </svg>
                                        </span>
                                    </a>
                                </h1>
                            </div>
                        </Fade>
                        <div className='flex md:justify-between items-center content-center mt-5 justify-between gap-5'>
                            <div className='flex gap-3 items-center'>
                                <Fade left>
                                    <span className='text-lg'>96.00₺</span>
                                </Fade>
                                <Fade right>
                                    <button className='flex justify-center items-center content-center gap-2 text-white bg-green-700 border-0 py-2 px-3 focus:outline-none hover:bg-green-800 rounded ml-3 transition-all duration-300'>
                                        <span className='text-lg'> WhatsApp ile Sipariş Ver</span>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='icon icon-tabler icon-tabler-brand-whatsapp'
                                            width='24'
                                            height='24'
                                            viewBox='0 0 24 24'
                                            strokeWidth='1.25'
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
                                            <path d='M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9'></path>
                                            <path d='M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1'></path>
                                        </svg>
                                    </button>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
                <Recommended />
                <Table />
            </div>
        </>
    )
}
