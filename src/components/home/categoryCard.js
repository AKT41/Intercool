import React from 'react'
import '../assets/style/categoryCard.css'
import { Fade } from 'react-reveal'
import Link from 'next/link'

export default function categoryCard() {
    return (
        <span id='cards' className='scroll-smooth'>
            <div className=' flex flex-col justify-center items-center min-h-screen'>
                <div className='flex flex-col  items-center justify-center gap-6 md:gap-10 py-10 px-5'>
                    <h1 className='md:text-5xl text-3xl tracking-wide md:tracking-wider font-bold we-use-title'>
                        Kullanım Alanlarımız
                    </h1>
                    <div className='container flex flex-col md:flex-row justify-between'>
                        <Fade bottom>
                            <div className='card'>
                                <div className='face face1 medikal-iç'>
                                    <div className='content'>
                                        <h2 className='java'>Medikal</h2>
                                        <p className='java line-clamp-3'>
                                            Medikal Bakır Borular, dayanıklı ve uzun ömürlüdür.
                                            Yüksek kaliteli bakır malzemesi, korozyona karşı
                                            dirençli olup, uzun süreli kullanım için idealdir.
                                            Ayrıca, düşük içerikli diğer elementlerin varlığı da
                                            boruların mükemmel mekanik özelliklere sa olmasını
                                            sağlar.
                                        </p>
                                        <p className=' text-sm font-semibold hover:text-slate-800 bg-slate-500 p-2 w-max rounded-md'>
                                            <Link
                                                href='/products/product-categoris/medikal'
                                                className=' w-max'
                                            >
                                                Kategoriyi Göster
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                                <div className='face face2 medikal-ön'>
                                    <h2 className=''>Medikal</h2>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className='card'>
                                <div className='face face1 endüstriyel-iç'>
                                    <div className='content'>
                                        <span className='stars'></span>
                                        <h2 className='python'>Endüstriyel</h2>
                                        <p className='python'>
                                            Python is an interpreted, high-level and general-purpose
                                            programming language.
                                        </p>
                                        <p className=' text-sm font-semibold hover:text-slate-800 bg-slate-500 p-2 w-max rounded-md'>
                                            <Link
                                                href='/products/product-categoris/endüstriyel'
                                                className='text-white w-max'
                                            >
                                                Kategoriyi Göster
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                                <div className='face face2 endüstriyel-ön'>
                                    <h2>Endüstriyel</h2>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className='card'>
                                <div className='face face1 sıhhitesisat-iç'>
                                    <div className='content'>
                                        <h2 className='java'>Sıhhi Tesisat </h2>
                                        <p className='java line-clamp-3'>
                                            Sıhhi Tesisat Bakır Borular, dayanıklı ve uzun
                                            ömürlüdür. Yüksek kaliteli bakır malzemesi, korozyona
                                            karşı dirençli olup, uzun süreli kullanım için idealdir.
                                            Ayrıca, düşük içerikli diğer elementlerin varlığı da
                                            boruların mükemmel mekanik özelliklere sa olmasını
                                            sağlar.
                                        </p>
                                        <p className=' text-sm font-semibold hover:text-slate-800 bg-slate-500 p-2 w-max rounded-md'>
                                            <Link
                                                href='/products/product-categoris/sihhitesisat'
                                                className='text-white w-max'
                                            >
                                                Kategoriyi Göster
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                                <div className='face face2 sıhhitesisat-ön'>
                                    <h2 className=''>Sıhhi Tesisat </h2>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className='card'>
                                <div className='face face1 klima-iç'>
                                    <div className='content'>
                                        <span className='stars'></span>
                                        <h2 className='python'>Klima</h2>
                                        <p className='python'>
                                            Python is an interpreted, high-level and general-purpose
                                            programming language.
                                        </p>
                                        <p className=' text-sm font-semibold hover:text-slate-800 bg-slate-500 p-2 w-max rounded-md'>
                                            <Link
                                                href='/products/product-categoris/klima'
                                                className='text-white w-max'
                                            >
                                                Kategoriyi Göster
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                                <div className='face face2 klima-ön'>
                                    <h2>Klima</h2>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            <style>
                {`
                body{
                    scroll-behavior: smooth;
                }
                `}
            </style>
        </span>
    )
}
