import React from 'react'

export default function About({ myRef }) {
  return (
    <div ref={myRef} className='flex flex-col justify-center items-center content-center scroll-mt-[6rem]'>
      <h3 className='text-stone-300 my-[1.3rem] font-semibold text-xl'>About</h3>
      <p className='text-stone-400 text-center sm:w-[43rem] font-normal px-7 md:px-0'>As a computer science student I am driven to become a software engineer and make an impact
        in the tech industry. With a strong passion for problem-solving and a commitment to continuous
        learning, I am eager to bring my skills and knowledge to a dynamic and innovative industry.
        In my free time, I also enjoy rock climbing and playing guitar, which has helped me develop
        a well-rounded perspective and the ability to work well under pressure. I am excited to see
        where my career takes me and make meaningful contributions to the field of software engineering.
      </p>
    </div>
  )
}
