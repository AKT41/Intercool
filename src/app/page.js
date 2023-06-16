'use client'
import React from 'react'
import Home from '@/pages/home'
import Navbar from '@/components/nav-footer/navbar'
import Footer from '@/components/nav-footer/footer'
import About from '@/components/about'
import ProductDetails from '@/components/product/product-details'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
    return (
        <>
            <Navbar />
            <Home />
            <Footer />
        </>
    )
}
