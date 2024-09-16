import React from 'react'
import Image from 'next/image'

export default function Projects({ myRef }) {
  return (
    <div  ref={myRef} className='flex flex-col items-center justify-center scale-[.6] sm:scale-[.85] md:scale-[1] scroll-mt-[6rem]'>
      <h3 className='text-stone-300 mb-[2rem] mt-[1.3rem] font-semibold'>Projects</h3>

      <a href="https://musical-connections.vercel.app" target="_blank" className='project shadow-2xl flex flex-col bg-gradient-to-r from-stone-800 to-stone-900 h-[20rem] w-[38rem] rounded-[1.5rem] -z-50'>
        <h2 className='text-left gradient py-[1.5rem] pt-[2.5rem] pl-[2.5rem] text-4xl font-extrabold'>Musical Connections <span className='text-white px-[.5rem]'> 🎸</span></h2>
        <h2 className='text-right gradient-n text-lg text-stone-300 p-[1rem] pl-[7rem] pr-[2rem]'>Daily puzzles of a New York Times connections like game, using musical artists and their songs. User sign in and authentication with a puzzle archive and progress tracking </h2>
        <h2 className='text-left text-stone-300 p-[1rem] mt-[0rem] ml-[1rem]'>
          <span className='bg-stone-600 text-stone-400 py-[.2rem] px-[.5rem] rounded-full mr-[.4rem]'>React</span>
          <span className='bg-stone-600 text-stone-400 py-[.2rem] px-[.5rem] rounded-full mr-[.4rem]'>MongoDB </span>
          <span className='bg-stone-600 text-stone-400 py-[.2rem] px-[.5rem] rounded-full mr-[.4rem]'>Node.js </span>
          <span className='bg-stone-600 text-stone-400 py-[.2rem] px-[.5rem] rounded-full mr-[.4rem]'>Express</span>
        </h2>
      </a>

      <div className="h-[4rem] my-[.86rem] w-[1px] bg-stone-700 opacity-70"></div>

      <a href="https://musical-connections.vercel.app" target="_blank" className='project shadow-2xl flex flex-col bg-gradient-to-l from-stone-800 to-stone-900 h-[20rem] w-[38rem] rounded-[1.5rem]'>
        <h2 className='text-right gradient-2 py-[1.5rem] pt-[2.5rem] pr-[2.5rem] text-4xl font-extrabold'>Portfolio <span className='text-white px-[.5rem]'> 📄</span></h2>
        <h2 className='text-left gradient-n text-lg text-stone-300 p-[1rem] pr-[7rem] pl-[2rem]'>Daily puzzles of a New York Times connections like game, using musical artists and their songs. User sign in and authentication with a puzzle archive and progress tracking </h2>
        <h2 className='text-right text-stone-300 p-[1rem] mt-[0rem] ml-[1rem]'>
          <span className='bg-stone-600 text-stone-400 py-[.2rem] px-[.5rem] rounded-full mr-[.4rem]'>Next.js</span>
          <span className='bg-stone-600 text-stone-400 py-[.2rem] px-[.5rem] rounded-full mr-[.4rem]'>TailwindCSS </span>
          <span className='bg-stone-600 text-stone-400 py-[.2rem] px-[.5rem] rounded-full mr-[.4rem]'>Node.js </span>
        </h2>
      </a>

      <div className="h-[4rem] my-[.86rem] w-[1px] bg-stone-700 opacity-70"></div>

      <a href="https://musical-connections.vercel.app" target="_blank" className='project shadow-2xl flex flex-col bg-gradient-to-r from-stone-800 to-stone-900 h-[20rem] w-[38rem] rounded-[1.5rem]'>
        <h2 className='text-left gradient-3 py-[1.5rem] pt-[2.5rem] pl-[2.5rem] text-4xl font-extrabold'>Todo</h2>
        <h2 className='text-right gradient-n text-lg text-stone-300 p-[1rem] pl-[7rem] pr-[2rem]'>Daily puzzles of a New York Times connections like game, using musical artists and their songs. User sign in and authentication with a puzzle archive and progress tracking </h2>
        <h2 className='text-left text-stone-300 p-[1rem] mt-[0rem] ml-[1rem]'>
          <span className='bg-stone-600 text-stone-400 py-[.2rem] px-[.5rem] rounded-full mr-[.4rem]'>React</span>
          <span className='bg-stone-600 text-stone-400 py-[.2rem] px-[.5rem] rounded-full mr-[.4rem]'>MongoDB </span>
          <span className='bg-stone-600 text-stone-400 py-[.2rem] px-[.5rem] rounded-full mr-[.4rem]'>Node.js </span>
          <span className='bg-stone-600 text-stone-400 py-[.2rem] px-[.5rem] rounded-full mr-[.4rem]'>Express</span>
        </h2>
      </a>

    </div>
  )
}

