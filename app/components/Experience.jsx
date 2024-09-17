'use client';

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { SiRubyonrails, SiDotnet} from "react-icons/si";
import { FaGraduationCap } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";

const stone_950 = '#0c0a09'
const stone_900 = '#1c1917'
const stone_800 = '#292524'
const stone_700 = '#44403c'
const stone_300 = '#d6d3d1'


export default function Experience({ myRef }) {
  return (
    <div ref={myRef} className='flex flex-col items-center justify-center content-center w-[95%] scroll-mt-[7rem] mb-0'>
      <h3 className='text-stone-300 mb-[2rem] mt-[1.3rem] font-semibold text-xl'>Experience</h3>
        <div className='scale-[.87] sm:w-[80%] w-[100%]'>
        <VerticalTimeline lineColor={stone_800}>
        <VerticalTimelineElement
          visible={true}
          contentStyle={{backgroundColor: stone_800, color: stone_300, boxShadow: 'none', borderRadius: '15px'}}
          icon={<FaGraduationCap/>}
          iconStyle={{color: 'white', backgroundColor: stone_800, fontSize: '100', border: 'none', boxShadow: 'none', outline: "none"}}
          contentArrowStyle={{color: stone_800, borderRight: '7px solid #292524'}}
          date="Expected  May 2025"
          >
            <h3 className='text-stone-100 font-medium text-xl'>Bachelor's of Computer Science</h3>
            <h4 className='text-stone-400'>California State University San Marcos</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
          visible={true}
          contentStyle={{backgroundColor: stone_800, color: stone_300, boxShadow: 'none', borderRadius: '15px'}}
          icon={<SiRubyonrails/>}
          iconStyle={{color: 'white', backgroundColor: stone_800, fontSize: '100', border: 'none', boxShadow: 'none', outline: "none"}}
          contentArrowStyle={{color: stone_700, borderRight: '7px solid #292524'}}
          date="Summer 2024"
          >
            <h3 className='text-stone-100 font-medium text-xl'>Software Engineering Intern</h3>
            <h4 className='text-stone-300'>Appfolio, remote</h4>
            <p className='text-stone-400'>I worked as a full-stack developer on multiple ruby on rails applications</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
          visible={true}
          contentStyle={{backgroundColor: stone_800, color: stone_300, boxShadow: 'none', borderRadius: '15px'}}
          icon={<SiRubyonrails/>}
          iconStyle={{color: 'white', backgroundColor: stone_800, fontSize: '100', border: 'none', boxShadow: 'none', outline: "none"}}
          contentArrowStyle={{color: stone_700, borderRight: '7px solid #292524'}}
          date='Summer 2023'
          >
            <h3 className='text-stone-100 font-medium text-xl'>Software Engineering Intern</h3>
            <h4 className='text-stone-300'>Appfolio, remote</h4>
            <p className='text-stone-400'>I worked as a full-stack developer using ruby on rails, terraform, and react</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
          visible={true}
          contentStyle={{backgroundColor: stone_800, color: stone_300, boxShadow: 'none', borderRadius: '15px'}}
          icon={<SiDotnet/>}
          iconStyle={{color: 'white', backgroundColor: stone_800, fontSize: '100', border: 'none', boxShadow: 'none', outline: "none"}}
          contentArrowStyle={{color: stone_700, borderRight: '7px solid #292524'}}
          date='2022 - 2023'
          >
            <h3 className='text-stone-100 font-medium text-xl'>Software Engineering Intern</h3>
            <h4 className='text-stone-300'>TruData, Carlsbad CA</h4>
            <p className='text-stone-400'>did some stuff it was real cool very smart yay</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  )
}
