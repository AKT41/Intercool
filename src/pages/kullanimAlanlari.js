/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-sync-scripts */
'use client'
import Navbar from '../components/nav-footer/navbar'
import Footer from '../components/nav-footer/footer'
import ProductType from '@/components/product/productTyp'
import BackToTop from '@/components/backtoTop'
import { Helmet } from 'react-helmet'

export default function about() {
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
                <title>Ürünlerimiz | İntercool</title>
                <script src='https://cdn.tailwindcss.com'></script>
            </Helmet>

            <Navbar />
            <ProductType />
            <BackToTop />
            <Footer />
        </>
    )
}
