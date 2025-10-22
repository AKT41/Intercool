/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { getSanityReferences } from '../../../sanity/sanity-utils'
import { Zoom } from 'react-reveal'

function RefSlider() {
    const [references, setReferences] = useState([])

    useEffect(() => {
        getSanityReferences().then((data) => setReferences(data))
    }, [])

    if (!references || references.length === 0) {
        return (
            <div className='text-center py-12'>
                <p className='text-gray-500'>İş ortakları yükleniyor...</p>
            </div>
        )
    }

    return (
        <div className='w-full overflow-hidden py-8'>
            {/* Infinite scroll animation */}
            <div className='relative'>
                <div className='flex animate-scroll hover:pause-animation gap-8'>
                    {/* First set of logos */}
                    {references.map((ref) => (
                        <Zoom key={ref._id}>
                            <div className='flex-shrink-0 w-48 h-32 bg-white rounded-xl shadow-soft hover:shadow-strong transition-all duration-300 p-6 flex items-center justify-center group'>
                                <img
                                    src={ref.referenceImage}
                                    alt={ref.referenceName || 'Partner'}
                                    className='w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300'
                                />
                            </div>
                        </Zoom>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {references.map((ref) => (
                        <div
                            key={`dup-${ref._id}`}
                            className='flex-shrink-0 w-48 h-32 bg-white rounded-xl shadow-soft hover:shadow-strong transition-all duration-300 p-6 flex items-center justify-center group'
                        >
                            <img
                                src={ref.referenceImage}
                                alt={ref.referenceName || 'Partner'}
                                className='w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300'
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }

                .pause-animation:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    )
}

export default RefSlider
