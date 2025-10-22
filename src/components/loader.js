import React from 'react'

export default function Loader() {
    return (
        <div className='fixed inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center z-50'>
            <div className='text-center space-y-8'>
                {/* Modern Logo Animation */}
                <div className='relative'>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='w-24 h-24 bg-gradient-blue rounded-full opacity-20 animate-ping'></div>
                    </div>
                    <div className='relative'>
                        <h1 className='text-5xl md:text-6xl font-extrabold bg-gradient-blue bg-clip-text text-transparent animate-pulse-slow tracking-tight pt-3'>
                            İntercool
                        </h1>
                    </div>
                </div>

                {/* Modern Loading Spinner */}
                <div className='flex items-center justify-center space-x-2'>
                    <div
                        className='w-3 h-3 bg-primary-500 rounded-full animate-bounce'
                        style={{ animationDelay: '0ms' }}
                    ></div>
                    <div
                        className='w-3 h-3 bg-primary-600 rounded-full animate-bounce'
                        style={{ animationDelay: '150ms' }}
                    ></div>
                    <div
                        className='w-3 h-3 bg-primary-700 rounded-full animate-bounce'
                        style={{ animationDelay: '300ms' }}
                    ></div>
                </div>

                {/* Loading Text */}
                <p className='text-gray-600 text-lg font-medium animate-fade-in'>Yükleniyor...</p>
            </div>
        </div>
    )
}
