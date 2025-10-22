import React from 'react'

export default function BackToTop() {
    const [showArrow, setshowArrow] = React.useState(false)

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setshowArrow(true)
            } else {
                setshowArrow(false)
            }
        })
    }, [])

    if (!showArrow) {
        return null
    }

    return (
        <>
            <button
                className='fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 bg-gradient-blue p-4 shadow-strong rounded-full transition-all duration-300 hover:shadow-glow-lg hover:scale-110 cursor-pointer group animate-fade-in'
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })
                }}
                aria-label='Back to top'
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6 text-white group-hover:animate-bounce'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2.5}
                        d='M5 10l7-7m0 0l7 7m-7-7v18'
                    />
                </svg>
            </button>
        </>
    )
}
