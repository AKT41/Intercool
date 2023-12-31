/* eslint-disable @next/next/no-sync-scripts */
'use client'
import React from 'react'
import About from '../components/about'
import Navbar from '../components/nav-footer/navbar'
import Footer from '../components/nav-footer/footer'
import '../components/assets/style/navbar.css'
import '../app/globals.css'
import BackToTop from '@/components/backtoTop'
import { Helmet } from 'react-helmet'
import './style.css'

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
                <title>Hakkımızda | İntercool</title>
                <script src='https://cdn.tailwindcss.com'></script>
            </Helmet>

            <Navbar />
            <About />
            <BackToTop />
            <Footer />
        </>
    )
}
