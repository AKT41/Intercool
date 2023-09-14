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
            <div
                className='fixed bottom-8 right-8 bg-slate-800 p-4 shadow-lg rounded-full transition-all duration-300 md:bg-opacity-60 md:hover:bg-opacity-90 cursor-pointer'
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })
                }}
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-chevron-up text-white animate-bounce'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    strokeWidth='1.25'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path
                        d='M10.586 3l-6.586 6.586a2 2 0 0 0 -.434 2.18l.068 .145a2 2 0 0 0 1.78 1.089h2.586v7a2 2 0 0 0 2 2h4l.15 -.005a2 2 0 0 0 1.85 -1.995l-.001 -7h2.587a2 2 0 0 0 1.414 -3.414l-6.586 -6.586a2 2 0 0 0 -2.828 0z'
                        strokeWidth='0'
                        fill='currentColor'
                    ></path>
                </svg>
            </div>
        </>
    )
}
