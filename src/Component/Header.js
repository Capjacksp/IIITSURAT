import React from 'react'
import { FaEnvelope, FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";


export const Header = () => {
  return (
    <div className='mb-1'>
      <div className='h-10 w-100 bg-goldenrod flex justify-around'>
        <div className='my-auto'>
          <div className='my-auto flex flex-row space-x-3'>
            <FaEnvelope color='white' className='h-4 w-auto my-auto' />
            <a href="mailto:office@iiitsurat.ac.in" className='justify-self-center my-auto text-white'> office@iiitsurat.ac.in </a>
          </div>

        </div>
        <div className='my-auto flex flex-row space-x-2'>
          <div className='my-auto flex flex-row space-x-2'>
            <FaFacebookSquare color='white' className='h-6 w-auto' />
            <FaTwitterSquare color='white' className='h-6 w-auto' />
            <FaLinkedin color='white' className='h-6 w-auto' />
            <FaInstagramSquare color='white' className='h-6 w-auto' />
            <FaYoutubeSquare color='white' className='h-6 w-auto' />
          </div>
          <button className='bg-seagreen text-white font-bold py-2 px-4 '>Old website</button>
        </div>
      </div>
      <div className='h-32 w-100 bg-white-200 shadow-lg shadow-gray-300 flex justify-around'>
        <img
          src='/iiit_surat_logo.png'
          className='object-cover h-28 w-auto my-auto'
          alt='IIIT Surat Logo'
        />
        <img
          src='/g20.png'
          className='object-cover h-24 w-auto my-auto hidden md:block'
          alt='G20 Logo'
        />

      </div>
    </div>

  )
}
