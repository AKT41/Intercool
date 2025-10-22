/* eslint-disable @next/next/no-img-element */
import React, { useRef } from 'react'
import Carousel, { slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

function Recommended() {
    const carouselRef = useRef(null)
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

                <div className='carousel-container select-none'>
                    <Carousel
                        plugins={[
                            'infinite',
                            'arrows',
                            {
                                resolve: slidesToShowPlugin,
                                arrowsPlugin,
                                options: {
                                    numberOfSlides: 4,
                                    interval: 2000,
                                    arrowLeft: <FaArrowLeft />,
                                    arrowLeftDisabled: <FaArrowLeft />,
                                    arrowRight: <FaArrowRight />,
                                    arrowRightDisabled: <FaArrowRight />,
                                    addArrowClickHandler: true
                                }
                            }
                        ]}
                        breakpoints={{
                            640: {
                                plugins: [
                                    'infinite',
                                    'arrows',
                                    {
                                        resolve: slidesToShowPlugin,
                                        options: {
                                            numberOfSlides: 1,
                                            interval: 2000
                                        }
                                    }
                                ]
                            },
                            900: {
                                plugins: [
                                    'infinite',
                                    'arrows',
                                    {
                                        resolve: slidesToShowPlugin,
                                        options: {
                                            numberOfSlides: 2,
                                            interval: 2000
                                        }
                                    }
                                ]
                            }
                        }}
                        animationSpeed={1000}
                    >
                        {cards.map((card) => (
                            <div className='card p-4 m-0' key={card._id}>
                                <div className='bg-gray-100 p-6 rounded-lg'>
                                    <img
                                        className='h-40 rounded w-full object-cover object-center mb-6'
                                        src={card.imageUrl}
                                        alt='bakır boru'
                                    />
                                    <h3
                                        className='tracking-widest text-green-500 text-xs font-medium title-font cursor-pointer'
                                        title={card.title}
                                    >
                                        {card.id}
                                    </h3>
                                    <h2 className='text-lg text-gray-900 font-medium title-font mb-4 line-clamp-1'>
                                        {card.title}
                                    </h2>
                                    <p className='leading-relaxed text-base line-clamp-3'>
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                    <style>
                        {`
                            .BrainhubCarousel__arrows
                            {
                                background-color: #09a2e5;
                                border-radius: 50%;

                            }
                            .BrainhubCarousel__arrows:hover
                            {
                                background-color: #00b3ff!important;
                            }


                            `}
                    </style>
                </div>
            </div>
        </>
    )
}

export default Recommended
