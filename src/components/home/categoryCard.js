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
                                            Medikal, İntercool Medikal alanda bir çok kesime hitap
                                            eden ürünleri ile bir çok müşterinin gönlünü kazanmış
                                            bütçe dostu bir firmadır.
                                        </p>
                                        <p className=' text-xs font-medium bg-slate-500 p-2 w-max rounded-md'>
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
                                            Endüstriyel, İntercool PE İzolasyonlu Bakır Boru üretimi
                                            ve ihracatı yapmaktadır endüstriyel alanda yaptığı
                                            ürünler ile birlikte sizlere hizmet vermektedir.
                                        </p>
                                        <p className=' text-xs font-medium  bg-slate-500 p-2 w-max rounded-md'>
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
                                            Sıhhi Tesisat, Pe İzolasyonlu Bakır Boruları Sıhhi
                                            Tesisat alanında sıkça kullanılmaktadır. Sıhhi Tesisat
                                            sektöründe İntercool markası adını duyurmuştur.
                                        </p>
                                        <p className=' text-xs font-medium  bg-slate-500 p-2 w-max rounded-md'>
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
                                            Klima, İntercool markası olarak klima sektöründe oldukça
                                            tanınan, sektörün lider markalarından birisidir.
                                            İntercool Bakır Boru Sektörünün lider markası.
                                        </p>
                                        <p className=' text-xs font-medium  bg-slate-500 p-2 w-max rounded-md'>
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
