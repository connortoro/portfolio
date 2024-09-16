import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'

export default function Contact({ myRef }) {

  const sendEmail = async (formData) => {
    console.log;(formData.get('senderEmail'))
    console.log(formData.get('message'))
  }

  return (
    <div ref={myRef} className='flex flex-col items-center justify-center mb-[20rem] scroll-mt-[6rem] mt-[5rem]'>
        <h3 className='text-stone-300 mb-[.2rem] mt-[1.3rem] font-semibold'>Contact Me</h3>
        <p className='text-stone-400 text-sm'>Email me directly at <u>connor.toro@gmail.com</u>, or use this form</p>
        <form className='flex flex-col sm:w-[33rem]  mt-[2.5rem]' action={(formData) => sendEmail(formData)}>
            <input className='bg-stone-700 mb-[1rem] rounded-[.4rem] text-stone-200 pl-[.85rem] h-[3rem] focus:outline-none focus:ring-2 focus:ring-stone-200' name='senderEmail' placeholder='Your Email' type='email' required maxLength={500}/>
            <textarea className='bg-stone-700 mb-[1rem] rounded-[.4rem] text-stone-200 pl-[.85rem] h-[12rem] pt-[.4rem] resize-none focus:outline-none focus:ring-2 focus:ring-stone-200' name='message' placeholder='Your Message'/>
            <button className='text-stone-700 bg-stone-100 mt-[.7rem] px-[.3rem] w-[7rem] h-[3rem] flex flex-row py-[.4rem] rounded-full items-center justify-center hover:scale-105 transition-all'  type='submit'>Submit  &nbsp;<FaPaperPlane/></button>
        </form>
    </div>
  )
}

