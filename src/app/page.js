'use client'
import React from 'react'
import Home from '@/pages/home'
import Navbar from '@/components/nav-footer/navbar'
import Footer from '@/components/nav-footer/footer'
import BackToTop from '@/components/backtoTop'

export default function App() {
    return (
        <>
            <Navbar />
            <Home />
            <Footer />
            <BackToTop />
        </>
    )
}
