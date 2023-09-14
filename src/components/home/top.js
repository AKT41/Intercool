/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Fade from 'react-reveal/Fade'
import { getSanitySlider } from '../../../sanity/sanity-utils'

function SampleNextArrow(props) {
    const { onClick } = props
    return (
        <div
            className='absolute top-1/2 right-5 z-10 bg-gray-50 bg-opacity-30 hover:bg-opacity-80 transition-all duration-300 rounded-full cursor-pointer'
            onClick={onClick}
        >
            <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-caret-right text-slate-600'
                width='48'
                height='48'
                viewBox='0 0 24 24'
                strokeWidth='1'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
            >
                <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                <path d='M10 18l6 -6l-6 -6v12'></path>
            </svg>
        </div>
    )
}

function SamplePrevArrow(props) {
    const { onClick } = props
    return (
        <div
            className='absolute top-1/2 left-5 z-10 bg-gray-50 bg-opacity-30 hover:bg-opacity-80 transition-all duration-300 rounded-full cursor-pointer'
            onClick={onClick}
        >
            <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-caret-left text-slate-600'
                width='48'
                height='48'
                viewBox='0 0 24 24'
                strokeWidth='1'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
            >
                <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                <path d='M14 6l-6 6l6 6v-12'></path>
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
            <div className='min-h-screen relative scroll-smooth'>
                <div className=''>
                    <Slider {...settings}>
                        {sliderData.map((slider) => (
                            <div className='top-left-slide relative' key={slider._id}>
                                <img
                                    src={slider.SliderImage}
                                    alt=''
                                    className='h-screen object-cover w-full after:bg-black after:z-10'
                                />
                                {slider.SliderName && (
                                    <div className='absolute top-0 left-0 md:bg-gray-600 md:bg-opacity-0 md:hover:bg-opacity-30 md:hover:backdrop-blur-[2px]  md:backdrop-blur-0 transition-all duration-300 tracking-widest w-full h-full text-center flex items-center justify-between flex-col'>
                                        <p></p>
                                        <p></p>
                                        <Fade bottom>
                                            <div className=' bg-slate-600 bg-opacity-90 w-full py-5'>
                                                <h1
                                                    className='font-extrabold text-transparent after:bg-gray-600 after:bg-opacity-40 
                                                    after:absolute after:inset-0 after:z-[-1] after:blur-3xl after:rounded-3xl after:opacity-5  0 after:backdrop-filter after:backdrop-blur-[3px] after:transition-all after:duration-300 after:tracking-widest after:text-7xl 
                                                     md:text-6xl text-3xl bg-clip-text bg-gradient-to-r z-10 drop-shadow-lg'
                                                    style={{
                                                        background:
                                                            'linear-gradient(45deg, rgb(59 130 246 ) 11.8%, rgb(124, 143, 161) 83.8%)',
                                                        WebkitBackgroundClip: 'text'
                                                    }}
                                                >
                                                    {slider.SliderName}
                                                </h1>
                                            </div>
                                        </Fade>
                                    </div>
                                )}
                            </div>
                        ))}
                    </Slider>
                </div>
                <a href='#cards' className='scroll-smooth'>
                    <img
                        src='https://i.hizliresim.com/8acjhwd.gif'
                        alt=''
                        className='object-cover md:w-16 w-12 md:h-16 h-12
                        absolute md:bottom-7 bottom-4 right-3 select-none md:right-8 z-10'
                    />
                </a>
            </div>
        </>
    )
}
