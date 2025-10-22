/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState, useEffect } from 'react'
import { getSanityReferences } from '../../../sanity/sanity-utils'

export default function ReferanceHome() {
    const [references, setReferences] = useState([])

    useEffect(() => {
        // Fetch data from Sanity when the component mounts
        async function fetchReferences() {
            try {
                const data = await getSanityReferences()
                setReferences(data)
            } catch (error) {
                console.error('Error fetching references:', error)
            }
        }

        fetchReferences()
    }, [])

    return (
        <>
            <div className='flex flex-col items-center w-full min-h-screen  md:max-w-7xl mx-auto'>
                <h1 className='font-bold text-center text-slate-600 about-title mt-24'>
                    Referanslarımız
                </h1>
                <div className='refCardsBox my-4 pt-4 flex flex-wrap justify-center items-left gap-5 w-full mx-auto border-t border-solid border-gray-200'>
                    {references.map((reference) => (
                        <div
                            key={reference._id}
                            className='relative group overflow-hidden refcard flex justify-center items-center content-center h-56 rounded-lg border border-solid hover:shadow-lg transition-all duration-300 hover:translate-x-1 hover:translate-y-1 cursor-pointer'
                        >
                            <a href={reference.referenceLink} target='_blank'>
                                <img
                                    src={reference.referenceImage}
                                    alt={reference.referenceName}
                                    className='object-cover scale-95 w-64'
                                />

                                <div className='absolute bottom-0 md:-bottom-16 md:group-hover:bottom-0 transition-all duration-300 left-1/2 transform -translate-x-1/2 bg-slate-500 md:bg-opacity-60 w-full flex justify-center items-center px-4 py-2'>
                                    <p
                                        className='leading-normal text-black font-normal tracking-wide line-clamp-1 text-sm md:text-lg capitalize'
                                        title={reference.referenceName}
                                    >
                                        {reference.referenceName}
                                    </p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
