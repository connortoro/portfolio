'use client';

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { SiRubyonrails, SiDotnet} from "react-icons/si";
import { FaGraduationCap } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";

const neutral_950 = '#0c0a09'
const neutral_900 = '#1c1917'
const neutral_800 = '#292524'
const neutral_700 = '#44403c'
const neutral_300 = '#d6d3d1'


export default function Experience({ myRef }) {
  return (
    <div ref={myRef} className='flex flex-col items-center justify-center content-center w-[95%] scroll-mt-[7rem] mb-0'>
      <h3 className='text-neutral-300 mb-[2rem] mt-[1.3rem] font-semibold text-xl'>Experience</h3>
        <div className='scale-[.87] sm:w-[80%] w-[100%]'>
        <VerticalTimeline lineColor={neutral_800}>
        <VerticalTimelineElement
          visible={true}
          contentStyle={{backgroundColor: neutral_800, color: neutral_300, boxShadow: 'none', borderRadius: '15px'}}
          icon={<FaGraduationCap/>}
          iconStyle={{color: 'white', backgroundColor: neutral_800, fontSize: '100', border: 'none', boxShadow: 'none', outline: "none"}}
          contentArrowStyle={{color: neutral_800, borderRight: '7px solid #292524'}}
          date="Expected  May 2025"
          >
            <h3 className='text-neutral-100 font-medium text-xl'>Bachelor&apos;s of Computer Science</h3>
            <h4 className='text-neutral-400'>California State University San Marcos</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
          visible={true}
          contentStyle={{backgroundColor: neutral_800, color: neutral_300, boxShadow: 'none', borderRadius: '15px'}}
          icon={<SiRubyonrails/>}
          iconStyle={{color: 'white', backgroundColor: neutral_800, fontSize: '100', border: 'none', boxShadow: 'none', outline: "none"}}
          contentArrowStyle={{color: neutral_700, borderRight: '7px solid #292524'}}
          date="Summer 2024"
          >
            <h3 className='text-neutral-100 font-medium text-xl'>Software Engineering Intern</h3>
            <h4 className='text-neutral-300'>Appfolio, remote</h4>
            <p className='text-neutral-400'>Worked as a full-stack developer on multiple ruby on rails applications</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
          visible={true}
          contentStyle={{backgroundColor: neutral_800, color: neutral_300, boxShadow: 'none', borderRadius: '15px'}}
          icon={<SiRubyonrails/>}
          iconStyle={{color: 'white', backgroundColor: neutral_800, fontSize: '100', border: 'none', boxShadow: 'none', outline: "none"}}
          contentArrowStyle={{color: neutral_700, borderRight: '7px solid #292524'}}
          date='Summer 2023'
          >
            <h3 className='text-neutral-100 font-medium text-xl'>Software Engineering Intern</h3>
            <h4 className='text-neutral-300'>Appfolio, remote</h4>
            <p className='text-neutral-400'>Worked as a full-stack developer using ruby on rails, terraform, and react</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
          visible={true}
          contentStyle={{backgroundColor: neutral_800, color: neutral_300, boxShadow: 'none', borderRadius: '15px'}}
          icon={<SiDotnet/>}
          iconStyle={{color: 'white', backgroundColor: neutral_800, fontSize: '100', border: 'none', boxShadow: 'none', outline: "none"}}
          contentArrowStyle={{color: neutral_700, borderRight: '7px solid #292524'}}
          date='2022 - 2023'
          >
            <h3 className='text-neutral-100 font-medium text-xl'>Software Engineering Intern</h3>
            <h4 className='text-neutral-300'>TruData, Carlsbad CA</h4>
            <p className='text-neutral-400'></p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  )
}
