/* eslint-disable @next/next/no-sync-scripts */
'use client'
import React from 'react'
import Navbar from '../components/nav-footer/navbar'
import Footer from '../components/nav-footer/footer'
import BackToTop from '@/components/backtoTop'
import Home from './home'
import { Helmet } from 'react-helmet'

export default function IndexPage() {
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta name='description' content='İntercool - PE İzolasyonlu Bakır Boru Üretimi' />
                <meta
                    name='keywords'
                    content='İntercool, Bakır Boru, PE İzolasyon, Klima, Medikal, Endüstriyel, Sıhhi Tesisat'
                />
                <meta name='author' content='İntercool' />
                <meta name='robots' content='index, follow' />
                <meta name='language' content='Turkish' />
                <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
                <meta name='revisit-after' content='1 days' />
                <meta name='google' content='notranslate' />
                <link rel='icon' href='https://i.hizliresim.com/e4o20gp.png' />
                <title>İntercool - PE İzolasyonlu Bakır Boru</title>
                <script src='https://cdn.tailwindcss.com'></script>
            </Helmet>

            <Navbar />
            <Home />
            <BackToTop />
            <Footer />
        </>
    )
}
