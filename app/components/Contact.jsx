import React from 'react'
import { FaPaperPlane, FaCheck } from 'react-icons/fa'
import emailjs from 'emailjs-com';
import { useState } from 'react';


export default function Contact({ myRef }) {

  const [submitted, setsubmitted] = useState(false)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    if(submitted) {
      return;
    }
    e.preventDefault();
    emailjs.sendForm('service_gliml9u', 'template_dg6t05k', e.target, 'cMsdG3BwfSQVxqUHU');
    setsubmitted(true)
    setEmail('')
    setMessage('')
  }

  return (
    <div ref={myRef} className='flex flex-col items-center justify-center mb-[40rem] scroll-mt-[8rem] mt-[5rem]'>
        <h3 className='text-stone-300 mb-[.2rem] mt-[1.3rem] font-semibold text-xl'>Contact Me</h3>
        <p className='text-stone-400 text-sm'>Email me directly at <u>connor.toro@gmail.com</u>, or use this form</p>
        <form className='flex flex-col sm:w-[33rem]  mt-[2.5rem]' onSubmit={sendEmail}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='bg-stone-700 mb-[1rem] rounded-[.4rem] text-stone-200 pl-[.85rem] h-[3rem] focus:outline-none focus:ring-2 focus:ring-stone-200' name='from_name' placeholder='Your Email' type='email' required maxLength={500}/>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='bg-stone-700 mb-[1rem] rounded-[.4rem] text-stone-200 pl-[.85rem] h-[12rem] pt-[.4rem] resize-none focus:outline-none focus:ring-2 focus:ring-stone-200' name='message' placeholder='Your Message'/>
            <div className='flex flex-row items-center'>
              {!submitted && <button className='text-stone-700 bg-stone-100 mt-[.7rem] px-[.3rem] w-[7rem] h-[3rem] flex flex-row py-[.4rem] rounded-full items-center justify-center hover:scale-105 transition-all'  type='submit'>Submit  &nbsp;<FaPaperPlane/></button>}
              {submitted && <FaCheck className='text-3xl text-green-600 ml-[2rem] mt-[1rem] h-[3rem]'/>}
            </div>
        </form>
    </div>
  )
}

