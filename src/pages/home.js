import React, { useEffect } from 'react'
import Top from '@/components/home/top'
import CategoryCard from '@/components/home/categoryCard'
import BackToTop from '@/components/backtoTop'
import Loader from '@/components/loader'

export default function Home() {
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 1500)
    }, [])

    // useEffect (() => {
    //     document.title = 'Anasayfa - E-Commerce'
    // }, [])
    // loading screen 2000ms
    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div className='w-full h-full '>
                        <Top />
                        <CategoryCard />
                        <BackToTop />
                    </div>
                </>
            )}
        </>
    )
}
