/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import RefSlider from '../partners/RefSlider'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'

export default function index() {
    return (
        <div className='w-full min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 pt-24 pb-16 overflow-hidden'>
            <div className='max-w-7xl mx-auto px-4'>
                {/* Header */}
                <Fade top>
                    <div className='text-center mb-16'>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-blue bg-clip-text text-transparent mb-4'>
                            Hakkımızda
                        </h1>
                        <div className='w-24 h-1 bg-gradient-blue mx-auto rounded-full'></div>
                    </div>
                </Fade>

                {/* Content Section */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-20'>
                    <Fade left>
                        <div className='space-y-6'>
                            <div className='bg-white rounded-2xl shadow-soft p-6 md:p-8 hover:shadow-medium transition-all duration-300'>
                                <div className='flex items-start gap-4 mb-4'>
                                    <div className='w-12 h-12 bg-gradient-blue rounded-full flex items-center justify-center flex-shrink-0'>
                                        <svg
                                            className='w-6 h-6 text-white'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                                            Kurumsal Kimlik
                                        </h2>
                                    </div>
                                </div>
                                <p className='text-gray-700 leading-relaxed text-justify'>
                                    <a
                                        href='https://www.cigdemsogutma.com/'
                                        className='text-primary-600 font-semibold hover:text-primary-700 transition-colors'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        ÇİĞDEM SOĞUTMA ISITMA LTD.ŞTİ
                                    </a>
                                    , 1981 yılından bu yana işimizde her zaman dürüstlüğü ve müşteri
                                    memnuniyetini öncelikli tutan bir kuruluş olmuştur.
                                    Müşterilerimize her zaman ürün kalitesi ve fiyatı konusunda
                                    yardımcı olmayı amaçladık. 41 yıllık deneyimimizle işimizi temiz
                                    ve güvenilir bir şekilde ilerletmek için çabaladık.
                                </p>
                            </div>

                            <div className='bg-white rounded-2xl shadow-soft p-6 md:p-8 hover:shadow-medium transition-all duration-300 flex-1 flex flex-col min-h-[280px]'>
                                <div className='flex items-start gap-4 mb-4'>
                                    <div className='w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0'>
                                        <svg
                                            className='w-6 h-6 text-white'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                                            Profesyonel Hizmet
                                        </h2>
                                    </div>
                                </div>
                                <p className='text-gray-700 leading-relaxed text-justify'>
                                    Sizlere daha profesyonel hizmet sunabilmek amacıyla,{' '}
                                    <span className='font-bold text-primary-600'>INTERCOOL</span>{' '}
                                    izolasyonlu bakır boruları hakkında daha fazla bilgi almak,
                                    ürünlerimizi incelemek veya bayilik başvurusu yapmak için bizi
                                    ziyaret edebilirsiniz. Ekibimiz, uzun yıllara dayanan deneyim ve
                                    müşteri odaklı yaklaşımıyla sizlere yardımcı olmaktan memnuniyet
                                    duyacaktır.
                                </p>
                            </div>
                        </div>
                    </Fade>

                    <Fade right>
                        <div className='flex flex-col gap-6'>
                            <div className='bg-white rounded-2xl shadow-soft p-6 md:p-8 hover:shadow-medium transition-all duration-300 flex-1 flex flex-col min-h-[280px]'>
                                <div className='flex items-start gap-4 mb-4'>
                                    <div className='w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0'>
                                        <svg
                                            className='w-6 h-6 text-white'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                                            Kalite ve Güvenilirlik
                                        </h2>
                                    </div>
                                </div>
                                <p className='text-gray-700 leading-relaxed text-justify'>
                                    <span className='font-bold text-primary-600'>INTERCOOL</span>,
                                    öncü olduğumuz izolasyonlu bakır borularımızı sizlere sunmaktan
                                    gurur duyar. 41 yıllık tecrübemizi bu borulara yansıtarak yüksek
                                    kaliteli bir ürün elde ettik.{' '}
                                    <span className='font-bold text-primary-600'>INTERCOOL</span>{' '}
                                    izolasyonlu bakır boruları, en uygun fiyatlarla sizlere
                                    sunulmaktadır. Türkiye genelinde teslimat yapmakta ve bayilikler
                                    dağıtmaktayız.
                                </p>
                            </div>
                            <div className='rounded-2xl overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300'>
                                <img
                                    className='w-full h-full object-cover'
                                    src='https://i.hizliresim.com/gygrtyn.jpg'
                                    alt='about'
                                />
                            </div>
                        </div>
                    </Fade>
                </div>

                {/* Partners Section */}
                <div className='mt-16'>
                    <Fade top>
                        <div className='text-center mb-12'>
                            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-blue bg-clip-text text-transparent mb-4'>
                                İş Ortaklarımız
                            </h2>
                            <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
                                Güvenilir iş ortaklarımız ile birlikte büyüyoruz
                            </p>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <RefSlider />
                    </Fade>
                </div>
            </div>
        </div>
    )
}
