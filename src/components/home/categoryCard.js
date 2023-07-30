import React from 'react'
import '../assets/style/categoryCard.css'
import { Fade } from 'react-reveal'

export default function categoryCard() {
    return (
        <span id='cards' className='scroll-smooth'>
            <div className=' flex flex-col justify-center items-center min-h-screen'>
                <div className='flex flex-col  items-center justify-center gap-6 md:gap-10 py-10 px-5'>
                    <h1 className='md:text-5xl text-3xl tracking-wide md:tracking-wider font-bold'>
                        Kullanım Alanlarımız
                    </h1>
                    <div className='container flex flex-col justify-between'>
                        <Fade bottom>   
                            <div className='card'>
                                <div className='face face1'>
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
                                            <a href='#' className=' w-max'>
                                                Kategoriyi Göster
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className='face face2'>
                                    <h2 className=''>Medikal</h2>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className='card'>
                                <div className='face face1'>
                                    <div className='content'>
                                        <span className='stars'></span>
                                        <h2 className='python'>Python</h2>
                                        <p className='python'>
                                            Python is an interpreted, high-level and general-purpose
                                            programming language.
                                        </p>
                                    </div>
                                </div>
                                <div className='face face2'>
                                    <h2>Endüstriyel</h2>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className='card'>
                                <div className='face face1'>
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
                                            <a href='#' className='text-white w-max'>
                                                Kategoriyi Göster
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className='face face2'>
                                    <h2 className=''>Medikal</h2>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className='card'>
                                <div className='face face1'>
                                    <div className='content'>
                                        <span className='stars'></span>
                                        <h2 className='python'>Python</h2>
                                        <p className='python'>
                                            Python is an interpreted, high-level and general-purpose
                                            programming language.
                                        </p>
                                    </div>
                                </div>
                                <div className='face face2'>
                                    <h2>Endüstriyel</h2>
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
