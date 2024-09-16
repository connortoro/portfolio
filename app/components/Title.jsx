import React from 'react'
import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Title({ myRef }) {
  return (
    <div ref={myRef} className='flex flex-col items-center justify-center scroll-mt-[4rem]'>
      <h1 className='md:text-3xl sm:text-2xl text-xl text-stone-400 sm:pt-20 pt-16 text-center sm:w-[40rem] font-normal px-7 md:px-0'>
        <b className='text-stone-200'>Hi 👋, I'm Connor. </b>
          I am a computer science student and a 
        <span className=' text-stone-100 italic'> seasoned </span> 
        software engineering intern ready to 
        <b className='text-stone-100 font-extrabold'> explode<span className='animate-pulse'><span className='text-white'> 💥</span></span> </b>
        into the world of Full-Stack software development
      </h1>
      <Image className='my-[2rem] rounded-full outline outline-[6px] outline-stone-200'src={'/image.png'} width={75} height={75}/>
      <div className='flex flex-row items-center justify-center space-x-3'>
        <a href='https://docs.google.com/document/d/15oPpxZYwX8td3zWqUaPmrjZ3vVU2d78r/edit' target="_blank" className='rounded-full bg-stone-300 py-[.3rem] px-[.7rem] font-medium text-stone-800'>Get Resume</a>
        <a href='https://github.com/connortoro' target="_blank" className='text-stone-800 bg-stone-300 text-2xl rounded-full p-[.3rem]'><FaGithub/></a>
        <a href='https://www.linkedin.com/in/connortoro' target="_blank" className='text-stone-800 bg-stone-300 text-2xl rounded-full p-[.3rem]'><FaLinkedin/></a>
        <a></a>
      </div>
    </div>
  )
}
