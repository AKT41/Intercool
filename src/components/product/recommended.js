/* eslint-disable @next/next/no-img-element */
'use strict'
import React from 'react'
import Flicking from '@egjs/react-flicking'
import '@egjs/react-flicking/dist/flicking.css'

function Recommended() {
    const cards = [
        {
            id: 1,
            title: 'BEYAZ İZOLASYONLU BAKIR BORU',
            description:
                '1/4-3/8 0,70mm beyaz izolasyonlu bakır boru, birçok farklı uygulama alanında kullanılan yüksek kaliteli bir malzemedir. Bu boru,',
            imageUrl:
                'https://www.cigdemsogutma.com/img/products/beyaz-iszalasyonlu_17.07.2021_8311014_04.03.2023_0913b3e.png'
        },
        {
            id: 2,
            title: 'BEYAZ İZOLASYONLU BAKIR BORU',
            description:
                '1/4-3/8 0,70mm beyaz izolasyonlu bakır boru, birçok farklı uygulama alanında kullanılan yüksek kaliteli bir malzemedir. Bu boru,',
            imageUrl:
                'https://www.cigdemsogutma.com/img/products/beyaz-iszalasyonlu_17.07.2021_8311014_04.03.2023_0913b3e.png'
        },
        {
            id: 3,
            title: 'BEYAZ İZOLASYONLU BAKIR BORU',
            description:
                '1/4-3/8 0,70mm beyaz izolasyonlu bakır boru, birçok farklı uygulama alanında kullanılan yüksek kaliteli bir malzemedir. Bu boru,',
            imageUrl:
                'https://www.cigdemsogutma.com/img/products/beyaz-iszalasyonlu_17.07.2021_8311014_04.03.2023_0913b3e.png'
        },
        {
            id: 4,
            title: 'BEYAZ İZOLASYONLU BAKIR BORU',
            description:
                '1/4-3/8 0,70mm beyaz izolasyonlu bakır boru, birçok farklı uygulama alanında kullanılan yüksek kaliteli bir malzemedir. Bu boru,',
            imageUrl:
                'https://www.cigdemsogutma.com/img/products/beyaz-iszalasyonlu_17.07.2021_8311014_04.03.2023_0913b3e.png'
        },
        {
            id: 5,
            title: 'BEYAZ İZOLASYONLU BAKIR BORU',
            description:
                '1/4-3/8 0,70mm beyaz izolasyonlu bakır boru, birçok farklı uygulama alanında kullanılan yüksek kaliteli bir malzemedir. Bu boru,',
            imageUrl:
                'https://www.cigdemsogutma.com/img/products/beyaz-iszalasyonlu_17.07.2021_8311014_04.03.2023_0913b3e.png'
        }
    ]
    return (
        <>
            <div className='max-w-7xl px-5 py-24 mx-auto mt-5 min-h-screen overflow-x-hidden overflow-y-hidden'>
                <div className='flex flex-col text-center w-full mb-20'>
                    <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
                        Önerilen Ürünler
                    </h1>
                    <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                        Çiğdem Soğutma olarak sizlere en iyi hizmeti verebilmek için elimizden
                        geleni yapıyoruz.
                    </p>
                </div>

                <Flicking
                    className='flicking'
                    circular={true}
                    gap={10}
                    renderOnlyVisible={true}
                    bound={true}
                    autoResize={true}
                    adaptive={true}
                    hanger={'50%'}
                    anchor={'50%'}
                    duration={500}
                    collectStatistics={true}
                >
                    {cards.map((card) => (
                        <div className='xl:w-1/4 md:w-1/2 p-4 m-0' key={card.id}>
                            <div className='bg-gray-100 p-6 rounded-lg'>
                                <img
                                    className='h-40 rounded w-full object-cover object-center mb-6'
                                    src={card.imageUrl}
                                    alt='bakır boru'
                                />
                                <h3 className='tracking-widest text-green-500 text-xs font-medium title-font'>
                                    {card.id}
                                </h3>
                                <h2 className='text-lg text-gray-900 font-medium title-font mb-4'>
                                    {card.title}
                                </h2>
                                <p className='leading-relaxed text-base line-clamp-3'>
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </Flicking>
            </div>
        </>
    )
}

export default Recommended
