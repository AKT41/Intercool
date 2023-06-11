/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import RefSlider from '../partners/RefSlider'
import Image from 'next/image'
import '../assets/style/about.css'
import Fade from 'react-reveal/Fade'

export default function index() {
    return (
        <div className='w-full min-h-screen  mx-auto flex justify-between flex-col content-center items-center bg-slate-300 mt-5 overflow-hidden'>
            <div className='h-1'>{/*  */} </div>
            <div className='max-w-7xl h-full flex justify-between flex-col gap-5 bg-about'>
                <Fade top>
                    <h1 className='text-3xl font-bold text-center text-slate-600 about-title'>
                        Hakkımızda
                    </h1>
                </Fade>
                <div className='about-text text-justify flex flex-col flex-wrap  justify-evenly content-center gap-4'>
                    <Fade left>
                        <div className='md:w-2/5'>
                            <p>
                                <a
                                    href='https://www.cigdemsogutma.com/'
                                    className='text-sky-800'
                                    target='_blank'
                                >
                                    ÇİĞDEM SOĞUTMA ISITMA LTD.ŞTİ
                                </a>
                                , 1981 yılından bu yana işimizde her zaman dürüstlüğü ve müşteri
                                memnuniyetini öncelikli tutan bir kuruluş olmuştur. Müşterilerimize
                                her zaman ürün kalitesi ve fiyatı konusunda yardımcı olmayı
                                amaçladık ve birçok markaya ev sahipliği yaparak müşterilerimizin
                                alım gücünü güçlendirdik. 41 yıllık deneyimimizle işimizi temiz ve
                                güvenilir bir şekilde ilerletmek için çabaladık. Müşteri
                                memnuniyeti, kalite, uygun fiyatlar ve ödeme kolaylıklarıyla her
                                konuda müşterilerimize destek olmayı hedefledik.
                            </p>
                            <br />
                            <p>
                                Sizlere daha profesyonel hizmet sunabilmek amacıyla,{' '}
                                <span className='hover:scale-105 transition-all duration-200 font-medium hover:font-bold'>
                                    INTERCOOL{' '}
                                </span>
                                izolasyonlu bakır boruları hakkında daha fazla bilgi almak,
                                ürünlerimizi incelemek veya bayilik başvurusu yapmak için bizi
                                ziyaret edebilir veya iletişim bilgilerimizi kullanabilirsiniz.
                                Ekibimiz, uzun yıllara dayanan deneyim ve müşteri odaklı
                                yaklaşımıyla sizlere yardımcı olmaktan memnuniyet duyacaktır.
                            </p>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className='md:w-2/5'>
                            <p>
                                <span className='hover:scale-105 transition-all duration-200 font-medium hover:font-bold'>
                                    INTERCOOL
                                </span>
                                , öncü olduğumuz izolasyonlu bakır borularımızı sizlere sunmaktan
                                gurur duyar. 41 yıllık tecrübemizi bu borulara yansıtarak yüksek
                                kaliteli bir ürün elde ettik.{' '}
                                <span className='hover:scale-105 transition-all duration-200 font-medium hover:font-bold'>
                                    INTERCOOL
                                </span>{' '}
                                izolasyonlu bakır boruları, en uygun fiyatlarla sizlere
                                sunulmaktadır. Türkiye genelinde teslimat yapmakta ve bayilikler
                                dağıtmaktayız.
                            </p>
                            <img
                                className='w-full h-2/5 bg-contain object-cover object-top mt-3'
                                src='https://i.hizliresim.com/gygrtyn.jpg'
                                alt='about'
                            />
                        </div>
                    </Fade>
                </div>
            </div>

            <div className='referance mb-5 flex flex-col justify-center text-center'>
                <h1 className='text-4xl font-semibold mb-4 text-slate-600 hover:tracking-wider transition-all duration-300 we-partners'>
                    İş Ortaklarımız
                </h1>
                <RefSlider />
            </div>
        </div>
    )
}
