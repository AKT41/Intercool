/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import Fade from 'react-reveal/Fade'
import { getSanitySlider } from '../../../sanity/sanity-utils'

function SampleNextArrow(props) {
    const { onClick } = props
    return (
        <div
            className='absolute top-1/2 -translate-y-1/2 right-4 md:right-8 z-10 bg-white/20 backdrop-blur-md hover:bg-white/40 transition-all duration-300 rounded-full cursor-pointer p-3 shadow-medium hover:shadow-strong group'
            onClick={onClick}
        >
            <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-chevron-right text-white group-hover:text-primary-500 transition-colors duration-300'
                width='32'
                height='32'
                viewBox='0 0 24 24'
                strokeWidth='2.5'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
            >
                <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                <path d='M9 6l6 6l-6 6'></path>
            </svg>
        </div>
    )
}

function SamplePrevArrow(props) {
    const { onClick } = props
    return (
        <div
            className='absolute top-1/2 -translate-y-1/2 left-4 md:left-8 z-10 bg-white/20 backdrop-blur-md hover:bg-white/40 transition-all duration-300 rounded-full cursor-pointer p-3 shadow-medium hover:shadow-strong group'
            onClick={onClick}
        >
            <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-chevron-left text-white group-hover:text-primary-500 transition-colors duration-300'
                width='32'
                height='32'
                viewBox='0 0 24 24'
                strokeWidth='2.5'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
            >
                <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                <path d='M15 6l-6 6l6 6'></path>
            </svg>
        </div>
    )
}
export default function Top() {
    const [sliderData, setSliderData] = useState([])
    useEffect(() => {
        getSanitySlider().then((data) => setSliderData(data))
    }, [])

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 100000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        appendDots: (dots) => (
            <div
                style={{ padding: '10px' }}
                className='absolute bottom-5 left-1/2 transform -translate-x-1/2'
            >
                <style>
                    {`.slick-dots{
                    list-style: none;
                    display: flex !important;
                    justify-content: center;
                    position: absolute;
                    bottom: 0px;
                    left: 50%;
                    transform: translateX(-50%);
                    margin: 0px;
                    padding: 0px;
                }`}
                </style>
                <ul
                    className='hidden md:flex'
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '0px',
                        padding: '0px'
                    }}
                >
                    {dots}
                </ul>
            </div>
        )
    }
    return (
        <>
            <div className='min-h-screen relative scroll-smooth overflow-hidden'>
                <div className='relative h-screen'>
                    <Slider {...settings}>
                        {sliderData.map((slider) => (
                            <div className='top-left-slide relative h-screen' key={slider._id}>
                                <div className='relative w-full h-full'>
                                    <img
                                        src={slider.SliderImage}
                                        alt={slider.SliderName || 'Slider Image'}
                                        className='w-full h-full object-contain md:object-cover object-center'
                                        style={{ minHeight: '100vh' }}
                                    />
                                    {/* Dark overlay for better text visibility */}
                                    <div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60'></div>
                                </div>
                                {slider.SliderName && (
                                    <div className='absolute inset-0 flex items-end justify-center pb-16 md:pb-24 px-4'>
                                        <Fade bottom>
                                            <div className='w-full max-w-4xl mx-auto'>
                                                <div className='bg-white/10 backdrop-blur-md rounded-xl md:rounded-3xl p-5 md:p-8 shadow-strong border border-white/20'>
                                                    <h1 className='font-extrabold text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white text-center leading-tight tracking-tight drop-shadow-2xl'>
                                                        {slider.SliderName}
                                                    </h1>
                                                </div>
                                            </div>
                                        </Fade>
                                    </div>
                                )}
                            </div>
                        ))}
                    </Slider>
                </div>
                {/* Scroll Down Indicator */}
                <a
                    href='#cards'
                    className='scroll-smooth absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 group'
                >
                    <div className='flex flex-col items-center gap-2'>
                        <div className='w-6 h-10 md:w-8 md:h-12 rounded-full border-2 md:border-3 border-white/80 flex items-start justify-center p-2 animate-pulse-slow bg-black/20 backdrop-blur-sm'>
                            <div className='w-1.5 h-2 md:w-2 md:h-3 bg-white rounded-full animate-bounce'></div>
                        </div>
                        <span className='text-white text-xs md:text-sm font-semibold opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-lg'>
                            Kaydır
                        </span>
                    </div>
                </a>
            </div>

            {/* Mobile Optimization Styles */}
            <style jsx>{`
                @media (max-width: 768px) {
                    .slick-slider,
                    .slick-list,
                    .slick-track {
                        height: 100vh !important;
                    }

                    .slick-slide {
                        height: 100vh !important;
                    }

                    .slick-slide > div {
                        height: 100vh !important;
                    }

                    .top-left-slide {
                        height: 100vh !important;
                    }
                }

                .slick-slider {
                    height: 100vh;
                }

                .slick-list {
                    height: 100vh;
                }

                .slick-track {
                    height: 100vh;
                }
            `}</style>
        </>
    )
}
