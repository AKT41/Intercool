import React from 'react'
import { Fade } from 'react-reveal'
import '../assets/style/contact.css'

export default function ContactForm() {
    return (
        <>
            <section className='contact-page-sec mt-12 max-w-7xl mx-auto'>
                <div className='container'>
                    <div className='row flex md:flex-row flex-col items-center justify-center gap-10'>
                        <Fade top>
                            <div className='col-md-4 md:w-1/3 w-3/4 rounded-full'>
                                <div className='contact-info'>
                                    <div className='contact-info-item'>
                                        <div className='contact-info-icon'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                class='icon icon-tabler icon-tabler-map'
                                                width='24'
                                                height='24'
                                                viewBox='0 0 24 24'
                                                stroke-width='1.25'
                                                stroke='currentColor'
                                                fill='none'
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                            >
                                                <path
                                                    stroke='none'
                                                    d='M0 0h24v24H0z'
                                                    fill='none'
                                                ></path>
                                                <path d='M3 7l6 -3l6 3l6 -3l0 13l-6 3l-6 -3l-6 3l0 -13'></path>
                                                <path d='M9 4l0 13'></path>
                                                <path d='M15 7l0 13'></path>
                                            </svg>
                                        </div>
                                        <div className='contact-info-text'>
                                            <h2>Adres</h2>
                                            <span>1215 Lorem Ipsum, Ch 176080 </span>
                                            <span>Antalya , Türkiye</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade top>
                            <div className='col-md-4 md:w-1/3 w-3/4'>
                                <div className='contact-info'>
                                    <div className='contact-info-item'>
                                        <div className='contact-info-icon'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                class='icon icon-tabler icon-tabler-mail'
                                                width='24'
                                                height='24'
                                                viewBox='0 0 24 24'
                                                stroke-width='1.25'
                                                stroke='currentColor'
                                                fill='none'
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                            >
                                                <path
                                                    stroke='none'
                                                    d='M0 0h24v24H0z'
                                                    fill='none'
                                                ></path>
                                                <path d='M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z'></path>
                                                <path d='M3 7l9 6l9 -6'></path>
                                            </svg>
                                        </div>
                                        <div className='contact-info-text'>
                                            <h2>E-mail</h2>
                                            <span>info@LoremIpsum.com</span>
                                            <span>yourmail@gmail.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade top>
                            <div className='col-md-4 md:w-1/3 w-3/4'>
                                <div className='contact-info'>
                                    <div className='contact-info-item'>
                                        <div className='contact-info-icon'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                class='icon icon-tabler icon-tabler-phone'
                                                width='24'
                                                height='24'
                                                viewBox='0 0 24 24'
                                                stroke-width='1.25'
                                                stroke='currentColor'
                                                fill='none'
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                            >
                                                <path
                                                    stroke='none'
                                                    d='M0 0h24v24H0z'
                                                    fill='none'
                                                ></path>
                                                <path d='M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2'></path>
                                            </svg>
                                        </div>
                                        <div className='contact-info-text'>
                                            <h2>Telefon Numaramız</h2>
                                            <span>0 212 548 78 69</span>
                                            <span className='text-opacity-0 select-none phone2'>
                                                0 212 548 78 69
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade top>
                            <div className='col-md-4 md:w-1/3 w-3/4'>
                                <div className='contact-info'>
                                    <div className='contact-info-item'>
                                        <div className='contact-info-icon'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                class='icon icon-tabler icon-tabler-brand-whatsapp'
                                                width='24'
                                                height='24'
                                                viewBox='0 0 24 24'
                                                stroke-width='1.25'
                                                stroke='currentColor'
                                                fill='none'
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                            >
                                                <path
                                                    stroke='none'
                                                    d='M0 0h24v24H0z'
                                                    fill='none'
                                                ></path>
                                                <path d='M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9'></path>
                                                <path d='M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1'></path>
                                            </svg>
                                        </div>
                                        <div className='contact-info-text'>
                                            <h2>Whatsapp iletişim Hattımız</h2>
                                            <span>0 212 548 78 69</span>
                                            <span className='text-opacity-0 select-none phone2'>
                                                0 212 548 78 69
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className='row'>
                        <div className='col-md-8'>
                            <div className='contact-page-form mx-auto' method='post'>
                                <Fade right>
                                    <h2 className='text-center text-3xl tracking-wider mb-5'>
                                        Bize buradan ulaşabilirsiniz
                                    </h2>
                                </Fade>
                                <Fade left cascade>
                                    <form action='contact-mail.php' method='post'>
                                        <div className='row'>
                                            <div className='col-md-6 col-sm-6 col-xs-12'>
                                                <div className='single-input-field'>
                                                    {/* <Fade left> */}
                                                    <input
                                                        type='text'
                                                        placeholder='Adınız'
                                                        name='name'
                                                    />
                                                    {/* </Fade> */}
                                                </div>
                                            </div>
                                            <div className='col-md-6 col-sm-6 col-xs-12'>
                                                <div className='single-input-field'>
                                                    {/* <Fade left> */}
                                                    <input
                                                        type='email'
                                                        placeholder='E-mail'
                                                        name='email'
                                                        required
                                                    />
                                                    {/* </Fade> */}
                                                </div>
                                            </div>
                                            <div className='col-md-6 col-sm-6 col-xs-12'>
                                                <div className='single-input-field'>
                                                    {/* <Fade left> */}{' '}
                                                    <input
                                                        type='text'
                                                        placeholder='Telefon Numaranız'
                                                        name='phone'
                                                    />
                                                    {/* </Fade> */}
                                                </div>
                                            </div>
                                            <div className='col-md-6 col-sm-6 col-xs-12'>
                                                <div className='single-input-field'>
                                                    {/* <Fade left> */}{' '}
                                                    <input
                                                        type='text'
                                                        placeholder='Konu'
                                                        name='subject'
                                                    />
                                                    {/* </Fade> */}
                                                </div>
                                            </div>
                                            <div className='col-md-12 message-input'>
                                                <div className='single-input-field'>
                                                    {/* <Fade left> */}
                                                    <textarea
                                                        placeholder='Mesajınızı buraya yazabilirsiniz'
                                                        name='message'
                                                    ></textarea>
                                                    {/* </Fade> */}
                                                </div>
                                            </div>
                                            <div className='single-input-fieldsbtn'>
                                                {/* <Fade left> */}
                                                <input type='submit' value='Gönder' />
                                                {/* </Fade> */}
                                            </div>
                                        </div>
                                    </form>
                                </Fade>
                            </div>
                        </div>
                        <Fade bottom>
                            <div className='col-md-4'>
                                <div className='contact-page-map'>
                                    <iframe
                                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102101.70178605654!2d30.63570465603187!3d36.898046384110806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39aaeddadadc1%3A0x95c69f73f9e32e33!2sAntalya!5e0!3m2!1str!2str!4v1687288341466!5m2!1str!2str'
                                        width='100%'
                                        height='450'
                                        frameborder='0'
                                        // style='border:0'
                                        allowfullscreen
                                    ></iframe>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </>
    )
}
