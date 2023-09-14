/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { getSanityProduct, getSanityProducts } from '../../../sanity/sanity-utils'
import { Zoom, Fade } from 'react-reveal'
import { Helmet } from 'react-helmet'
import Navbar from '@/components/nav-footer/navbar'
import Footer from '@/components/nav-footer/footer'
import Loader from '@/components/loader'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import '../../components/assets/style/nav-product.css'
import Carousel, { slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import '@brainhubeu/react-carousel/lib/style.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import '../../app/globals.css'

export default function Product() {
    const [product, setProduct] = useState({})
    const [recommendedProducts, setRecommendedProducts] = useState([])
    const router = useRouter()
    const { slug } = router.query
    const [loading, setLoading] = React.useState(true)

    const carouselRef = useRef(null)

    useEffect(() => {
        async function fetchProduct() {
            if (slug) {
                const product = await getSanityProduct(slug)
                setProduct(product)

                // Get recommended products in the same category
                const recommended = await getSanityProducts(product.category)

                // Filter recommended products to keep only the ones with the same category as the current product
                const filteredRecommended = recommended.filter(
                    (item) => item.category === product.category
                )

                // Filter out the current product from the recommended products
                const filteredRecommendedWithoutCurrent = filteredRecommended.filter(
                    (item) => item._id !== product._id
                )

                setRecommendedProducts(filteredRecommendedWithoutCurrent)
            }
        }
        fetchProduct()
    }, [slug])

    useEffect(() => {
        document.title = product.name ? product.name : product.name
    }, [product.name])

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
    }, [])
    function capitalizeFirstLetter(str) {
        return str
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
    }

    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta name='description' content='İntercool Hakkımızda Sayfası' />
                <meta name='keywords' content='İntercool, Hakkımızda, İntercool Hakkımızda' />
                <meta name='author' content='İntercool' />
                <meta name='robots' content='index, follow' />
                <meta name='language' content='Turkish' />
                <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
                <meta name='revisit-after' content='1 days' />
                <meta name='google' content='notranslate' />
                <link rel='icon' href='https://i.hizliresim.com/e4o20gp.png' />
                <title>
                    {product.name ? capitalizeFirstLetter(product.name) : 'İntercool'} | İntercool
                </title>
                <script src='https://cdn.tailwindcss.com'></script>
            </Helmet>
            <Navbar />
            {loading ? (
                <Loader />
            ) : (
                <div className='max-w-7xl px-5 py-24 mx-auto mt-5 min-h-screen overflow-x-hidden overflow-y-hidden scroll-smooth'>
                    <nav className='my-2 md:block hidden'>
                        <ul className='flex gap-4 text-sm items-center text-gray-900'>
                            <li className='nav-items hover:text-gray-500 transition-all duration-200 before:py-0 before:pr-2'>
                                <a href='/'>Ana Sayfa</a>
                            </li>

                            <li className='nav-items hover:text-gray-500 transition-all duration-200'>
                                <a href='/products'>Ürünlerimiz</a>
                            </li>
                            <li className='nav-items hover:text-gray-500 transition-all duration-200 capitalize'>
                                <a href='#'>{product.name}</a>
                            </li>
                        </ul>
                    </nav>
                    <div className=' w-full mx-auto flex flex-wrap '>
                        <Slider>
                            {product.productImages?.map((image) => (
                                <img
                                    key={image._key}
                                    src={image.asset._imageUrl}
                                    alt={image.altText}
                                    className=' w-full object-cover object-center rounded select-none'
                                    // maybe w-1/2
                                />
                            ))}
                        </Slider>
                        <div className='lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
                            {/* maybe w-1/2 */}
                            <Fade top>
                                <h2 className='text-sm title-font text-gray-500 tracking-widest mb-2'>
                                    İNTERCOOL
                                </h2>
                            </Fade>
                            <Fade bottom>
                                <h1 className='text-gray-900 text-2xl title-font font-medium mb-2 capitalize'>
                                    {product.name}
                                </h1>
                                <p className='text-xs text-gray-400 mb-2'>
                                    <span className='text-gray-500'>Ürün Kodu: </span>
                                    {product.productCode}
                                </p>
                            </Fade>

                            <Fade right>
                                <p className='leading-relaxed border-b border-gray-500 border-opacity-20 border-solid pb-3 mb-3 '>
                                    {product.description}
                                </p>
                            </Fade>
                            <div className='flex flex-row items-center content-center mt-5 justify-between gap-5 scroll-smooth'>
                                <div className='flex gap-3 items-center'>
                                    <Fade left>
                                        {product.price === 0 || !product.price ? (
                                            <span className='text-lg'>
                                                Fiyat İçin Teklif Alınız
                                            </span>
                                        ) : (
                                            <span className='text-lg'>{product.price}₺</span>
                                        )}
                                    </Fade>
                                    <Fade right>
                                        <button className='flex justify-center items-center content-center gap-2 text-white bg-green-700 border-0 py-2 px-3 focus:outline-none hover:bg-green-800 rounded ml-3 transition-all duration-300'>
                                            <span className='text-lg'>
                                                <a
                                                    href={`https://api.whatsapp.com/send?phone=905522577940&text=Merhaba *${capitalizeFirstLetter(
                                                        product.name
                                                    )}*, Ürününüz ile ilgili bilgi almak istiyorum. Ürün Linki: ${
                                                        window.location.href
                                                    }`}
                                                    target='_blank'
                                                    className='text-xs md:text-base'
                                                >
                                                    WhatsApp ile Sipariş Ver
                                                </a>
                                            </span>
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
                                <h1 className='text-gray-900 w-max text-sm title-font font-medium rounded-md hover:bg-[#036aa1a2] bg-[#036aa15d] transition-all duration-300 cursor-pointer pl-4 py-2 pr-2'>
                                    <a
                                        href='#specifications'
                                        className='group flex items-center content-center gap-2 scroll-smooth'
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
                        </div>
                    </div>
                    <div className='max-w-7xl px-5 py-24 mx-auto mt-5 min-h-screen overflow-x-hidden overflow-y-hidden'>
                        <div className='flex flex-col text-center w-full mb-20'>
                            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
                                Önerilen Ürünler
                            </h1>
                            <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                                Çiğdem Soğutma olarak sizlere en iyi hizmeti verebilmek için
                                elimizden geleni yapıyoruz.
                            </p>
                        </div>
                        <div className='carousel-container select-none'>
                            <Carousel
                                plugins={[
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
                                {recommendedProducts.map((recommendedProduct) => (
                                    <a
                                        href={`/products/${recommendedProduct.slug}`}
                                        key={recommendedProduct._id}
                                        className='md:h-80 w-[350px] transition-all duration-300 hover:translate-y-2 hover:scale-105'
                                    >
                                        <div className='card px-4 h-full m-0'>
                                            <div className='bg-gray-100 h-full rounded-lg transition-all duration-300 shadow-sm shadow-gray-300 hover:shadow-ld'>
                                                <img
                                                    className='h-40 rounded w-full object-cover object-center'
                                                    src={recommendedProduct.smallImage}
                                                    alt={recommendedProduct.name}
                                                />
                                                <div className='pt-3 pl-3'>
                                                    <h3
                                                        className='tracking-widest text-green-500 text-xs font-medium title-font cursor-pointer'
                                                        title={recommendedProduct.category}
                                                    >
                                                        {recommendedProduct.category}
                                                    </h3>
                                                    <h2 className='text-lg text-gray-900 font-medium title-font mb-4 line-clamp-1'>
                                                        {recommendedProduct.name}
                                                    </h2>
                                                    <p className='leading-relaxed text-base mb-2 line-clamp-3'>
                                                        {recommendedProduct.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
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
                    <Fade bottom>
                        <div
                            className='relative flex flex-col min-w-0 w-full break-words bg-gray-400 mx-auto mb-6 shadow-lg rounded'
                            id='specifications'
                        >
                            <div className='rounded-t text-center mb-0 px-4 py-3 border-0'>
                                <div className='flex flex-wrap items-center'>
                                    <div className='relative w-full px-4 max-w-full flex-grow flex-1'>
                                        <h3 className='font-semibold text-base text-blueGray-700 capitalize'>
                                            {product.name} Teknik Özellikleri
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className='block w-full overflow-x-auto'>
                                <table className='items-center bg-transparent w-full border-collapse '>
                                    <tbody>
                                        {product.productFeatures?.map((feature) => (
                                            <tr
                                                className='hover:bg-gray-300 hov transition-all duration-150 odd:bg-gray-100 even:bg-gray-200'
                                                key={feature._key}
                                            >
                                                <th className='border-t- border-b border-solid border-gray-400 border-opacity-30 border-r align-middle border-l-0  text-sm whitespace-nowrap p-4 text-left text-blueGray-700 capitalize'>
                                                    {feature.featureName}
                                                </th>
                                                <td className='border-t-0 border-b border-solid border-gray-400 border-opacity-30 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 capitalize'>
                                                    {feature.value}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Fade>
                </div>
            )}
            <Footer />
        </>
    )
}
