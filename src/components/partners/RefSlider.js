/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import '../assets/style/about.css'
import { getSanityReferences, getSanitySlider } from '../../../sanity/sanity-utils'

function RefSlider() {
    const [references, setReferences] = useState([])
    useEffect(() => {
        getSanityReferences().then((data) => setReferences(data))
    }, [])
    return (
        <>
            <div className='flex justify-center items-center gap-5'>
                <div className='h-1/2 flex flex-row items-center justify-center content-center gap-5 overflow-hidden '>
                    <div className='row justify-content-center'>
                        <div className='col-md-12'>
                            <div className='slider pt-4'>
                                <div className='slide-track'>
                                    {references.map((ref) => (
                                        <div className='slide' key={ref._id}>
                                            <div
                                                className='col-lg-3 col-md-4 col-6'
                                                data-aos='fade-up'
                                                data-aos-duration='1200'
                                            >
                                                <div className='img-box bx-a'>
                                                    <a href='#'>
                                                        <img
                                                            src={ref.referenceImage}
                                                            alt='intercool'
                                                            className='rounded-md grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer'
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RefSlider
