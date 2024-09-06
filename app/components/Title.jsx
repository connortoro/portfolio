import React from 'react'
import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Title() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='md:text-3xl sm:text-2xl text-xl text-gray-400 sm:pt-20 pt-16 text-center sm:w-[40rem] font-normal px-7 md:px-0'>
        <b className='text-gray-200'>Hi 👋, I'm Connor. </b>
          I am a computer science student and a 
        <span className=' text-gray-100 italic'> seasoned </span> 
        software engineering intern ready to 
        <b className='text-gray-100 font-extrabold'> explode<span className='animate-pulse'>💥</span> </b>
        into the world of Full-Stack software development
      </h1>
      <Image className='my-[2rem] rounded-full outline outline-[6px] outline-gray-200'src={'/image.png'} width={75} height={75}/>
      <div className='flex flex-row items-center justify-center space-x-3'>
        <a href='https://docs.google.com/document/d/15oPpxZYwX8td3zWqUaPmrjZ3vVU2d78r/edit' className='rounded-full bg-gray-300 py-[.4rem] px-[.7rem] font-semibold text-gray-800'>Get Resume</a>
        <a href='https://github.com/connortoro' className='text-gray-800 bg-gray-300 text-2xl rounded-full p-[.45rem]'><FaGithub/></a>
        <a href='https://www.linkedin.com/in/connortoro' className='text-gray-800 bg-gray-300 text-2xl rounded-full p-[.45rem]'><FaLinkedin/></a>
        <a></a>
      </div>
    </div>
  )
}
