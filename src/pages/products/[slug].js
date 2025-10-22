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
import Carousel, { slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export default function Product() {
    const [product, setProduct] = useState({})
    const [recommendedProducts, setRecommendedProducts] = useState([])
    const router = useRouter()
    const { slug } = router.query
    const [loading, setLoading] = React.useState(true)
    const [showFullDescription, setShowFullDescription] = useState(false)
    const [showFullTitle, setShowFullTitle] = useState(false)

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
        document.title = product?.name ? `${product.name} | İntercool` : 'İntercool'
    }, [product?.name])

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
            {loading || !product?.name ? (
                <Loader />
            ) : (
                <div className='max-w-7xl px-5 py-24 mx-auto mt-5'>
                    <nav className='mb-8 md:block hidden'>
                        <ul className='flex gap-4 text-sm items-center text-gray-600'>
                            <li className='hover:text-primary-600 transition-all duration-200'>
                                <a href='/'>Ana Sayfa</a>
                            </li>
                            <li className='text-gray-400'>/</li>
                            <li className='hover:text-primary-600 transition-all duration-200'>
                                <a href='/products'>Ürünlerimiz</a>
                            </li>
                            <li className='text-gray-400'>/</li>
                            <li className='text-gray-900 font-medium capitalize'>
                                {product?.name}
                            </li>
                        </ul>
                    </nav>
                    <div className='w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
                        {/* Product Images Slider */}
                        <div className='w-full'>
                            <div className='bg-white rounded-2xl shadow-medium overflow-hidden product-image-container'>
                                {(() => {
                                    // Gösterilecek resimleri belirle
                                    let imagesToShow = []

                                    if (
                                        product?.productImages &&
                                        product.productImages.length > 0
                                    ) {
                                        imagesToShow = product.productImages
                                    } else if (product?.smallImage) {
                                        imagesToShow = [product.smallImage]
                                    } else {
                                        imagesToShow = [
                                            'https://via.placeholder.com/400x400?text=Resim+Yok'
                                        ]
                                    }

                                    // Eğer birden fazla resim varsa Slider kullan
                                    if (imagesToShow.length > 1) {
                                        return (
                                            <div className='product-slider-wrapper'>
                                                <Slider autoplay={3000}>
                                                    {imagesToShow.map((imageUrl, index) => (
                                                        <div
                                                            key={index}
                                                            className='slider-content'
                                                            style={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                height: '500px',
                                                                background: '#f9fafb'
                                                            }}
                                                        >
                                                            <img
                                                                src={imageUrl}
                                                                alt={`${product?.name} - Resim ${
                                                                    index + 1
                                                                }`}
                                                                loading='eager'
                                                                style={{
                                                                    maxWidth: '100%',
                                                                    maxHeight: '100%',
                                                                    objectFit: 'contain',
                                                                    padding: '20px'
                                                                }}
                                                            />
                                                        </div>
                                                    ))}
                                                </Slider>
                                            </div>
                                        )
                                    } else {
                                        // Tek resim varsa direkt göster
                                        return (
                                            <div
                                                style={{
                                                    height: '500px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    background: '#f9fafb'
                                                }}
                                            >
                                                <img
                                                    src={imagesToShow[0]}
                                                    alt={product?.name}
                                                    loading='eager'
                                                    style={{
                                                        maxWidth: '100%',
                                                        maxHeight: '100%',
                                                        objectFit: 'contain',
                                                        padding: '20px'
                                                    }}
                                                />
                                            </div>
                                        )
                                    }
                                })()}
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className='w-full space-y-6'>
                            <Fade top>
                                <div className='inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold'>
                                    İNTERCOOL
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='space-y-3'>
                                    <div>
                                        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 capitalize leading-tight'>
                                            {(() => {
                                                const title = product?.name || ''
                                                const words = title.split(' ')

                                                if (words.length <= 6) {
                                                    return title
                                                }

                                                if (showFullTitle) {
                                                    return title
                                                }

                                                return words.slice(0, 6).join(' ') + '...'
                                            })()}
                                        </h1>
                                        {product?.name && product.name.split(' ').length > 6 && (
                                            <button
                                                onClick={() => setShowFullTitle(!showFullTitle)}
                                                className='mt-2 text-sm text-primary-600 font-medium hover:text-primary-700 transition-colors'
                                            >
                                                {showFullTitle ? 'Daha Az' : 'Devamı'}
                                            </button>
                                        )}
                                    </div>
                                    <div className='flex items-center gap-2 text-sm text-gray-600'>
                                        <span className='font-medium'>Ürün Kodu:</span>
                                        <span className='bg-gray-100 px-3 py-1 rounded-md font-mono'>
                                            {product?.productCode}
                                        </span>
                                    </div>
                                </div>
                            </Fade>

                            <Fade right>
                                <div className='border-l-4 border-primary-500 pl-4 py-3 space-y-3 bg-gray-50 rounded-r-lg'>
                                    <p className='text-gray-700 leading-relaxed text-base'>
                                        {(() => {
                                            const description = product?.description || ''
                                            const words = description.split(' ')

                                            if (words.length <= 60) {
                                                return description
                                            }

                                            if (showFullDescription) {
                                                return description
                                            }

                                            return words.slice(0, 60).join(' ') + '...'
                                        })()}
                                    </p>
                                    {product?.description &&
                                        product.description.split(' ').length > 60 && (
                                            <button
                                                onClick={() =>
                                                    setShowFullDescription(!showFullDescription)
                                                }
                                                className='inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors'
                                            >
                                                {showFullDescription ? (
                                                    <>
                                                        Daha Az Göster
                                                        <svg
                                                            className='w-4 h-4 transform rotate-180'
                                                            fill='none'
                                                            stroke='currentColor'
                                                            viewBox='0 0 24 24'
                                                        >
                                                            <path
                                                                strokeLinecap='round'
                                                                strokeLinejoin='round'
                                                                strokeWidth={2}
                                                                d='M19 9l-7 7-7-7'
                                                            />
                                                        </svg>
                                                    </>
                                                ) : (
                                                    <>
                                                        Devamını Oku
                                                        <svg
                                                            className='w-4 h-4'
                                                            fill='none'
                                                            stroke='currentColor'
                                                            viewBox='0 0 24 24'
                                                        >
                                                            <path
                                                                strokeLinecap='round'
                                                                strokeLinejoin='round'
                                                                strokeWidth={2}
                                                                d='M19 9l-7 7-7-7'
                                                            />
                                                        </svg>
                                                    </>
                                                )}
                                            </button>
                                        )}
                                </div>
                            </Fade>
                            <div className='space-y-4'>
                                <Fade left>
                                    <div className='bg-gray-50 rounded-lg p-4'>
                                        {product?.price === 0 || !product?.price ? (
                                            <p className='text-xl font-semibold text-gray-700'>
                                                💰 Fiyat İçin Teklif Alınız
                                            </p>
                                        ) : (
                                            <p className='text-3xl font-bold text-primary-600'>
                                                {product?.price}₺
                                            </p>
                                        )}
                                    </div>
                                </Fade>

                                <Fade right>
                                    <a
                                        href={`https://api.whatsapp.com/send?phone=905522577940&text=Merhaba *${
                                            product?.name ? capitalizeFirstLetter(product.name) : ''
                                        }*, Ürününüz ile ilgili bilgi almak istiyorum. Ürün Linki: ${
                                            typeof window !== 'undefined'
                                                ? window.location.href
                                                : ''
                                        }`}
                                        target='_blank'
                                        rel='noreferrer'
                                        className='flex items-center justify-center gap-3 w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-4 px-6 rounded-lg hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1'
                                    >
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='w-6 h-6'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                                            />
                                        </svg>
                                        <span>WhatsApp ile Sipariş Ver</span>
                                    </a>
                                </Fade>

                                <Fade bottom>
                                    <a
                                        href='#specifications'
                                        className='flex items-center justify-center gap-2 w-full bg-white border-2 border-primary-600 text-primary-600 font-semibold py-4 px-6 rounded-lg hover:bg-primary-50 transition-all duration-300'
                                    >
                                        <span>Teknik Özellikler</span>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='w-5 h-5 animate-bounce'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M19 9l-7 7-7-7'
                                            />
                                        </svg>
                                    </a>
                                </Fade>
                            </div>
                        </div>
                    </div>
                    {recommendedProducts && recommendedProducts.length > 0 && (
                        <div className='max-w-7xl px-5 py-16 mx-auto bg-gradient-to-b from-gray-50 to-white rounded-3xl mt-12'>
                            <Fade bottom>
                                <div className='text-center mb-12'>
                                    <h2 className='text-3xl md:text-4xl font-bold bg-gradient-blue bg-clip-text text-transparent mb-4'>
                                        Önerilen Ürünler
                                    </h2>
                                    <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
                                        Aynı kategorideki diğer kaliteli ürünlerimizi keşfedin
                                    </p>
                                    <div className='w-24 h-1 bg-gradient-blue mx-auto rounded-full mt-4'></div>
                                </div>
                            </Fade>

                            {recommendedProducts.length > 3 ? (
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
                                            <div key={recommendedProduct._id} className='px-3'>
                                                <Zoom>
                                                    <a
                                                        href={`/products/${recommendedProduct.slug}`}
                                                        className='block group'
                                                    >
                                                        <div className='bg-white rounded-2xl shadow-soft hover:shadow-strong transition-all duration-500 overflow-hidden h-full transform group-hover:-translate-y-2'>
                                                            <div className='relative overflow-hidden h-56'>
                                                                <img
                                                                    className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
                                                                    src={
                                                                        recommendedProduct.smallImage
                                                                    }
                                                                    alt={recommendedProduct.name}
                                                                    loading='lazy'
                                                                />
                                                                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                                            </div>
                                                            <div className='p-5'>
                                                                <span className='inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full mb-3 capitalize'>
                                                                    {recommendedProduct.category}
                                                                </span>
                                                                <h3 className='text-xl font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-primary-600 transition-colors'>
                                                                    {recommendedProduct.name}
                                                                </h3>
                                                                <p className='text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2'>
                                                                    {recommendedProduct.description}
                                                                </p>
                                                                <div className='flex items-center justify-between'>
                                                                    <span className='text-primary-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all'>
                                                                        İncele
                                                                        <svg
                                                                            className='w-4 h-4'
                                                                            fill='none'
                                                                            stroke='currentColor'
                                                                            viewBox='0 0 24 24'
                                                                        >
                                                                            <path
                                                                                strokeLinecap='round'
                                                                                strokeLinejoin='round'
                                                                                strokeWidth={2}
                                                                                d='M9 5l7 7-7 7'
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </Zoom>
                                            </div>
                                        ))}
                                    </Carousel>
                                    <style>
                                        {`
                                        .BrainhubCarousel__arrows {
                                            background: linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%);
                                            border-radius: 50%;
                                            width: 50px;
                                            height: 50px;
                                            display: flex;
                                            align-items: center;
                                            justify-content: center;
                                            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                                            transition: all 0.3s ease;
                                        }
                                        .BrainhubCarousel__arrows:hover {
                                            background: linear-gradient(135deg, #0369a1 0%, #075985 100%);
                                            transform: scale(1.1);
                                            box-shadow: 0 6px 12px rgba(14, 165, 233, 0.4);
                                        }
                                        .BrainhubCarousel__arrows svg {
                                            color: white;
                                        }
                                        `}
                                    </style>
                                </div>
                            ) : (
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                    {recommendedProducts.map((recommendedProduct) => (
                                        <Zoom key={recommendedProduct._id}>
                                            <a
                                                href={`/products/${recommendedProduct.slug}`}
                                                className='block group'
                                            >
                                                <div className='bg-white rounded-2xl shadow-soft hover:shadow-strong transition-all duration-500 overflow-hidden h-full transform group-hover:-translate-y-2'>
                                                    <div className='relative overflow-hidden h-56'>
                                                        <img
                                                            className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
                                                            src={recommendedProduct.smallImage}
                                                            alt={recommendedProduct.name}
                                                            loading='lazy'
                                                        />
                                                        <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                                    </div>
                                                    <div className='p-5'>
                                                        <span className='inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full mb-3 capitalize'>
                                                            {recommendedProduct.category}
                                                        </span>
                                                        <h3 className='text-xl font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-primary-600 transition-colors'>
                                                            {recommendedProduct.name}
                                                        </h3>
                                                        <p className='text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2'>
                                                            {recommendedProduct.description}
                                                        </p>
                                                        <div className='flex items-center justify-between'>
                                                            <span className='text-primary-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all'>
                                                                İncele
                                                                <svg
                                                                    className='w-4 h-4'
                                                                    fill='none'
                                                                    stroke='currentColor'
                                                                    viewBox='0 0 24 24'
                                                                >
                                                                    <path
                                                                        strokeLinecap='round'
                                                                        strokeLinejoin='round'
                                                                        strokeWidth={2}
                                                                        d='M9 5l7 7-7 7'
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </Zoom>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                    <div id='specifications' className='max-w-7xl px-5 py-16 mx-auto'>
                        <Fade bottom>
                            <div className='bg-white rounded-2xl shadow-medium overflow-hidden mb-6'>
                                <div className='bg-gradient-blue px-6 py-4'>
                                    <h3 className='text-2xl font-bold text-white capitalize'>
                                        {product?.name} - Teknik Özellikler
                                    </h3>
                                </div>

                                <div className='overflow-x-auto'>
                                    <table className='w-full'>
                                        <tbody>
                                            {product?.productFeatures?.map((feature, index) => (
                                                <tr
                                                    className='hover:bg-primary-50 transition-all duration-200 border-b border-gray-200 last:border-0'
                                                    key={feature._key}
                                                >
                                                    <th className='text-left p-4 font-semibold text-gray-700 capitalize bg-gray-50 w-1/3'>
                                                        {feature.featureName}
                                                    </th>
                                                    <td className='p-4 text-gray-600 capitalize'>
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
                </div>
            )}
            <Footer />
            <style jsx>{`
                .product-slider-wrapper {
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                }

                .product-slider-wrapper :global(.slider) {
                    width: 100%;
                    overflow: hidden;
                }

                .product-slider-wrapper :global(.slider-content) {
                    width: 100%;
                }

                .product-slider-wrapper :global(.previousButton),
                .product-slider-wrapper :global(.nextButton) {
                    background: linear-gradient(
                        135deg,
                        rgba(14, 165, 233, 0.95),
                        rgba(3, 105, 161, 0.95)
                    );
                    border-radius: 50%;
                    width: 50px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    border: 2px solid rgba(255, 255, 255, 0.2);
                }

                .product-slider-wrapper :global(.previousButton):hover,
                .product-slider-wrapper :global(.nextButton):hover {
                    background: linear-gradient(
                        135deg,
                        rgba(14, 165, 233, 1),
                        rgba(3, 105, 161, 1)
                    );
                    transform: scale(1.15);
                    box-shadow: 0 8px 16px rgba(14, 165, 233, 0.3);
                }

                .product-image-container {
                    height: 500px;
                    position: sticky;
                    top: 100px;
                }

                @media (max-width: 1024px) {
                    .product-image-container {
                        height: 450px;
                        position: relative;
                        top: 0;
                    }
                }

                @media (max-width: 768px) {
                    .product-image-container {
                        height: 400px;
                    }

                    .product-slider-wrapper :global(.previousButton),
                    .product-slider-wrapper :global(.nextButton) {
                        width: 40px;
                        height: 40px;
                    }
                }

                @media (max-width: 480px) {
                    .product-image-container {
                        height: 350px;
                    }

                    .product-slider-wrapper :global(.previousButton),
                    .product-slider-wrapper :global(.nextButton) {
                        width: 36px;
                        height: 36px;
                    }
                }
            `}</style>
        </>
    )
}
