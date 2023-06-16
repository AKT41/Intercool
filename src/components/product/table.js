import React from 'react'
import { Fade } from 'react-reveal'

function Table() {
    return (
        <>
            <Fade bottom>
                <div
                    className='relative flex flex-col min-w-0 w-full break-words bg-gray-400 mx-auto mb-6 shadow-lg rounded'
                    id='specifications'
                >
                    <div className='rounded-t text-center mb-0 px-4 py-3 border-0'>
                        <div className='flex flex-wrap items-center'>
                            <div className='relative w-full px-4 max-w-full flex-grow flex-1'>
                                <h3 className='font-semibold text-base text-blueGray-700'>
                                    BEYAZ İZOLASYONLU BAKIR BORU
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='block w-full overflow-x-auto'>
                        <table className='items-center bg-transparent w-full border-collapse '>
                            <tbody>
                                <tr className='hover:bg-gray-300 hov transition-all duration-150 odd:bg-gray-100 even:bg-gray-200'>
                                    <th className='border-t- border-b border-solid border-gray-400 border-opacity-30 border-r align-middle border-l-0  text-sm whitespace-nowrap p-4 text-left text-blueGray-700 '>
                                        Boru Çapı ( inç.)
                                    </th>
                                    <td className='border-t-0 border-b border-solid border-gray-400 border-opacity-30 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 '>
                                        4,569
                                    </td>
                                </tr>
                                <tr className='hover:bg-gray-300 hov transition-all duration-150 odd:bg-gray-100 even:bg-gray-200'>
                                    <th className='border-t- border-b border-solid border-gray-400 border-opacity-30 border-r align-middle border-l-0  text-sm whitespace-nowrap p-4 text-left text-blueGray-700 '>
                                        Boru Çapı ( inç.)
                                    </th>
                                    <td className='border-t-0 border-b border-solid border-gray-400 border-opacity-30 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 '>
                                        4,569
                                    </td>
                                </tr>
                                <tr className='hover:bg-gray-300 hov transition-all duration-150 odd:bg-gray-100 even:bg-gray-200'>
                                    <th className='border-t- border-b border-solid border-gray-400 border-opacity-30 border-r align-middle border-l-0  text-sm whitespace-nowrap p-4 text-left text-blueGray-700 '>
                                        Boru Çapı ( inç.)
                                    </th>
                                    <td className='border-t-0 border-b border-solid border-gray-400 border-opacity-30 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 '>
                                        4,569
                                    </td>
                                </tr>
                                <tr className='hover:bg-gray-300 hov transition-all duration-150 odd:bg-gray-100 even:bg-gray-200'>
                                    <th className='border-t- border-b border-solid border-gray-400 border-opacity-30 border-r align-middle border-l-0  text-sm whitespace-nowrap p-4 text-left text-blueGray-700 '>
                                        Boru Çapı ( inç.)
                                    </th>
                                    <td className='border-t-0 border-b border-solid border-gray-400 border-opacity-30 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 '>
                                        4,569
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Fade>
        </>
    )
}
export default Table
