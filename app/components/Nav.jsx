'use client';

import React from 'react';

export default function Nav({ navigate, selected }) {
  const sections = ['Home', 'About', 'Projects', 'Experience', 'Contact'];

  const selectedClass = (section) => {
    if(section === selected) {
      return ' bg-stone-500 text-stone-200'
    } else {
      return ' text-stone-950'
    }
  }

  return (
    <>
      <div className='h-[1.5rem] sm:h-[2.5rem] md:h-[4.2rem]'></div>
      <nav className=" opacity-[.9] drop-in flex justify-center pt-4  sm:bg-inherit bg-stone-400 w-screen fixed top-0 z-50">
        <div className='flex flex-row items-center justify-center bg-stone-400 content-center sm:w-min w-min rounded-full sm:px-3 px-1 md:px-2 py-1 scale-[.85]'>
          {sections.map((section) => (
            <h2 onClick={() => navigate(section)} className={"font-semibold md:text-lg sm:text-md text-sm sm:m-1 px-4 py-1 rounded-full cursor-pointer transition-all duration-200 ease-in-out" + selectedClass(section)} key={section}>
              {section}
            </h2>
          ))}
        </div>
      </nav>
    </>
  );
}
