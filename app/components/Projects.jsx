import React from 'react'
import Image from 'next/image'

export default function Projects({ myRef }) {
  return (
    <div  ref={myRef} className='flex flex-col items-center justify-center scale-[.6] sm:scale-[.85] md:scale-[1] scroll-mt-[6rem]'>
      <h3 className='text-neutral-300 mb-[2rem] mt-[1.3rem] font-semibold scale-[1.7] sm:scale-[1.5] md:scale-[1] text-xl'>Projects</h3>

      <a href="https://github.com/connortoro/musical_connections" target="_blank" className='project shadow-2xl flex flex-col bg-gradient-to-r from-neutral-800 to-neutral-900 h-[20rem] w-[38rem] rounded-[1.5rem] -z-50'>
        <h2 className='text-left py-[1.5rem] pt-[2.5rem] pl-[2.5rem] text-4xl font-extrabold text-neutral-200'>Musical Connections <span className='text-white px-[.5rem]'> 🎸</span></h2>
        <h2 className='text-right gradient-n text-lg text-neutral-300 p-[1rem] pl-[7rem] pr-[2rem]'>Daily puzzles of a New York Times connections like game, using musical artists and their songs. User sign in and authentication with a puzzle archive and progress tracking </h2>
        <h2 className='text-left text-neutral-300 p-[1rem] mt-[0rem] ml-[1rem]'>
          <span className='bg-neutral-600 text-neutral-400 py-[.2rem] px-[.5rem] rounded-full mr-[.4rem]'>React</span>
          <span className='bg-neutral-600 text-neutral-400 py-[.2rem] px-[.5rem] rounded-full mr-[.4rem]'>MongoDB </span>
          <span className='bg-neutral-600 text-neutral-400 py-[.2rem] px-[.5rem] rounded-full mr-[.4rem]'>Node.js </span>
          <span className='bg-neutral-600 text-neutral-400 py-[.2rem] px-[.5rem] rounded-full mr-[.4rem]'>Express</span>
        </h2>
      </a>

      <div className="h-[4rem] my-[.86rem] w-[1px] bg-neutral-700 opacity-70"></div>

      <a href="https://github.com/connortoro/journal" target="_blank" className='project shadow-2xl flex flex-col bg-gradient-to-l from-neutral-800 to-neutral-900 h-[20rem] w-[38rem] rounded-[1.5rem]'>
        <h2 className='text-right py-[1.5rem] pt-[2.5rem] pr-[2.5rem] text-4xl font-extrabold text-neutral-200'>Journal-thing <span className='text-white px-[.5rem]'> 🗃️</span></h2>
        <h2 className='text-left gradient-n text-lg text-neutral-300 p-[1rem] pr-[7rem] pl-[2rem]'>Minimalist journaling web app, with user authentication and persisting and searchable entries</h2>
        <h2 className='text-right text-neutral-300 p-[1rem] mt-[2rem] ml-[1rem]'>
          <span className='bg-neutral-600 text-neutral-400 py-[.2rem] px-[.5rem] rounded-full mr-[.4rem]'>Next.js</span>
          <span className='bg-neutral-600 text-neutral-400 py-[.2rem] px-[.5rem] rounded-full mr-[.4rem]'>Prisma </span>
          <span className='bg-neutral-600 text-neutral-400 py-[.2rem] px-[.5rem] rounded-full mr-[.4rem]'>Clerk </span>
        </h2>
      </a>

      <div className="h-[4rem] my-[.86rem] w-[1px] bg-neutral-700 opacity-70"></div>

      <a href="https://github.com/Choshibear/CS370-2024-Team12-BrainBoost" target="_blank" className='project shadow-2xl flex flex-col bg-gradient-to-r from-neutral-800 to-neutral-900 h-[20rem] w-[38rem] rounded-[1.5rem]'>
        <h2 className='text-left py-[1.5rem] pt-[2.5rem] pl-[2.5rem] text-4xl font-extrabold text-neutral-200'>BrainBoost 🧠</h2>
        <h2 className='text-right gradient-n text-lg text-neutral-300 p-[1rem] pl-[7rem] pr-[2rem]'>Social quiz taking app including quizzes from many subjects including leaderboards and achievements for users</h2>
        <h2 className='text-left text-neutral-300 p-[1rem] mt-[0rem] ml-[1rem]'>
          <span className='bg-neutral-600 text-neutral-400 py-[.2rem] px-[.5rem] rounded-full mr-[.4rem]'>Java</span>
          <span className='bg-neutral-600 text-neutral-400 py-[.2rem] px-[.5rem] rounded-full mr-[.4rem]'>JSwing </span>
          <span className='bg-neutral-600 text-neutral-400 py-[.2rem] px-[.5rem] rounded-full mr-[.4rem]'>SQLite </span>
        </h2>
      </a>

    </div>
  )
}

