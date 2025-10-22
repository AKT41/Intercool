import React, { useState } from 'react'
import { Fade } from 'react-reveal'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null)

        try {
            // WhatsApp ile mesaj gönderme
            const whatsappMessage = `
🆕 *Yeni İletişim Formu Mesajı*

👤 *Ad:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Telefon:* ${formData.phone}
📋 *Konu:* ${formData.subject}

💬 *Mesaj:*
${formData.message}
            `.trim()

            const whatsappUrl = `https://api.whatsapp.com/send?phone=905522577940&text=${encodeURIComponent(
                whatsappMessage
            )}`

            // Form başarılı mesajı göster
            setSubmitStatus('success')

            // 2 saniye sonra WhatsApp'ı aç
            setTimeout(() => {
                window.open(whatsappUrl, '_blank')
            }, 1500)

            // Formu temizle
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            })
        } catch (error) {
            console.error('Form gönderme hatası:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
            // 5 saniye sonra mesajı kaldır
            setTimeout(() => setSubmitStatus(null), 5000)
        }
    }

    return (
        <>
            <section className='mt-20 py-16 bg-gradient-to-b from-gray-50 to-white'>
                <div className='max-w-7xl mx-auto px-4'>
                    {/* Header */}
                    <Fade top>
                        <div className='text-center mb-16'>
                            <h1 className='text-4xl md:text-5xl font-extrabold bg-gradient-blue bg-clip-text text-transparent mb-4'>
                                İletişime Geçin
                            </h1>
                            <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
                                Sorularınız için bize ulaşın, size yardımcı olmaktan mutluluk
                                duyarız
                            </p>
                        </div>
                    </Fade>

                    {/* Contact Cards */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
                        <Fade bottom cascade>
                            <div className='group bg-white rounded-2xl shadow-soft hover:shadow-medium p-6 transition-all duration-300 hover:-translate-y-1'>
                                <div className='flex flex-col items-center text-center space-y-4'>
                                    <div className='w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='w-8 h-8 text-white'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                                            />
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-bold text-gray-800 mb-2'>
                                            Adres
                                        </h3>
                                        <p className='text-gray-600 text-sm'>
                                            1215 Lorem Ipsum, Ch 176080
                                        </p>
                                        <p className='text-gray-600 text-sm'>Antalya, Türkiye</p>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom cascade>
                            <div className='group bg-white rounded-2xl shadow-soft hover:shadow-medium p-6 transition-all duration-300 hover:-translate-y-1'>
                                <div className='flex flex-col items-center text-center space-y-4'>
                                    <div className='w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='w-8 h-8 text-white'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-bold text-gray-800 mb-2'>
                                            E-mail
                                        </h3>
                                        <p className='text-gray-600 text-sm'>info@LoremIpsum.com</p>
                                        <p className='text-gray-600 text-sm'>yourmail@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom cascade>
                            <div className='group bg-white rounded-2xl shadow-soft hover:shadow-medium p-6 transition-all duration-300 hover:-translate-y-1'>
                                <div className='flex flex-col items-center text-center space-y-4'>
                                    <div className='w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='w-8 h-8 text-white'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-bold text-gray-800 mb-2'>
                                            Telefon
                                        </h3>
                                        <p className='text-gray-600 text-sm'>0 552 257 79 40</p>
                                        <p className='text-gray-600 text-sm opacity-0 select-none'>
                                            0 212 548 78 69
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom cascade>
                            <div className='group bg-white rounded-2xl shadow-soft hover:shadow-medium p-6 transition-all duration-300 hover:-translate-y-1'>
                                <div className='flex flex-col items-center text-center space-y-4'>
                                    <div className='w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='w-8 h-8 text-white'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-bold text-gray-800 mb-2'>
                                            WhatsApp
                                        </h3>
                                        <p className='text-gray-600 text-sm'>0 552 257 79 40</p>
                                        <p className='text-gray-600 text-sm opacity-0 select-none'>
                                            0 212 548 78 69
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    {/* Form & Map Section */}
                    <div className='grid grid-cols-1 lg:grid-cols-5 gap-8'>
                        {/* Contact Form */}
                        <div className='lg:col-span-3'>
                            <Fade left>
                                <div className='bg-white rounded-2xl shadow-medium p-8 relative'>
                                    <h2 className='text-3xl font-bold text-gray-800 mb-6 text-center'>
                                        Bize Mesaj Gönderin
                                    </h2>

                                    {/* Success/Error Messages */}
                                    {submitStatus === 'success' && (
                                        <div className='mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg animate-fade-in'>
                                            <div className='flex items-center gap-3'>
                                                <svg
                                                    className='w-6 h-6 text-green-500'
                                                    fill='none'
                                                    stroke='currentColor'
                                                    viewBox='0 0 24 24'
                                                >
                                                    <path
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        strokeWidth={2}
                                                        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                                                    />
                                                </svg>
                                                <div>
                                                    <p className='text-green-800 font-semibold'>
                                                        Mesajınız alındı!
                                                    </p>
                                                    <p className='text-green-600 text-sm'>
                                                        WhatsApp üzerinden iletişime geçiliyor...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {submitStatus === 'error' && (
                                        <div className='mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg animate-fade-in'>
                                            <div className='flex items-center gap-3'>
                                                <svg
                                                    className='w-6 h-6 text-red-500'
                                                    fill='none'
                                                    stroke='currentColor'
                                                    viewBox='0 0 24 24'
                                                >
                                                    <path
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        strokeWidth={2}
                                                        d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                                                    />
                                                </svg>
                                                <p className='text-red-800 font-semibold'>
                                                    Bir hata oluştu. Lütfen tekrar deneyin.
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit} className='space-y-6'>
                                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                            <div className='group'>
                                                <label className='block text-sm font-medium text-gray-700 mb-2'>
                                                    Adınız <span className='text-red-500'>*</span>
                                                </label>
                                                <input
                                                    type='text'
                                                    name='name'
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder='Adınızı girin'
                                                    className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 outline-none'
                                                />
                                            </div>
                                            <div className='group'>
                                                <label className='block text-sm font-medium text-gray-700 mb-2'>
                                                    E-mail <span className='text-red-500'>*</span>
                                                </label>
                                                <input
                                                    type='email'
                                                    name='email'
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder='ornek@email.com'
                                                    className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 outline-none'
                                                />
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                            <div className='group'>
                                                <label className='block text-sm font-medium text-gray-700 mb-2'>
                                                    Telefon <span className='text-red-500'>*</span>
                                                </label>
                                                <input
                                                    type='tel'
                                                    name='phone'
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder='0555 123 45 67'
                                                    className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 outline-none'
                                                />
                                            </div>
                                            <div className='group'>
                                                <label className='block text-sm font-medium text-gray-700 mb-2'>
                                                    Konu <span className='text-red-500'>*</span>
                                                </label>
                                                <input
                                                    type='text'
                                                    name='subject'
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder='Konu başlığı'
                                                    className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 outline-none'
                                                />
                                            </div>
                                        </div>
                                        <div className='group'>
                                            <label className='block text-sm font-medium text-gray-700 mb-2'>
                                                Mesajınız <span className='text-red-500'>*</span>
                                            </label>
                                            <textarea
                                                name='message'
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={6}
                                                placeholder='Mesajınızı buraya yazabilirsiniz...'
                                                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 outline-none resize-none'
                                            ></textarea>
                                        </div>
                                        <button
                                            type='submit'
                                            disabled={isSubmitting}
                                            className='w-full bg-gradient-blue text-white font-semibold py-4 rounded-lg hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2'
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg
                                                        className='animate-spin h-5 w-5'
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        fill='none'
                                                        viewBox='0 0 24 24'
                                                    >
                                                        <circle
                                                            className='opacity-25'
                                                            cx='12'
                                                            cy='12'
                                                            r='10'
                                                            stroke='currentColor'
                                                            strokeWidth='4'
                                                        ></circle>
                                                        <path
                                                            className='opacity-75'
                                                            fill='currentColor'
                                                            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                                                        ></path>
                                                    </svg>
                                                    <span>Gönderiliyor...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <svg
                                                        className='w-5 h-5'
                                                        fill='none'
                                                        stroke='currentColor'
                                                        viewBox='0 0 24 24'
                                                    >
                                                        <path
                                                            strokeLinecap='round'
                                                            strokeLinejoin='round'
                                                            strokeWidth={2}
                                                            d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                                                        />
                                                    </svg>
                                                    <span>Mesaj Gönder</span>
                                                </>
                                            )}
                                        </button>
                                        <p className='text-sm text-gray-500 text-center'>
                                            * Mesajınız WhatsApp üzerinden iletilecektir
                                        </p>
                                    </form>
                                </div>
                            </Fade>
                        </div>

                        {/* Map */}
                        <div className='lg:col-span-2'>
                            <Fade right>
                                <div className='bg-white rounded-2xl shadow-medium overflow-hidden h-full'>
                                    <iframe
                                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102101.70178605654!2d30.63570465603187!3d36.898046384110806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39aaeddadadc1%3A0x95c69f73f9e32e33!2sAntalya!5e0!3m2!1str!2str!4v1687288341466!5m2!1str!2str'
                                        width='100%'
                                        height='100%'
                                        style={{ border: 0, minHeight: '500px' }}
                                        allowFullScreen
                                        loading='lazy'
                                    ></iframe>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
