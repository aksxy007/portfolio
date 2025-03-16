"use client"

import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SectionHeading from './section-heading'
import useSectionInView from '@/hooks/useSectionInView'
import { experiencesData } from '@/lib/data'
import useTheme from '@/hooks/useTheme'
export default function Experience() {
    const {ref} = useSectionInView("Experience",0.4)
    const {theme} = useTheme()
  return (
    <section id='experience' ref={ref} className='mb-28 sm:mb-40 scroll-mt-28 text-center'>
        <SectionHeading>My Experiences</SectionHeading>
        <VerticalTimeline lineColor={""}>
            {experiencesData.map((item,index)=>(
                <React.Fragment key={index}>
                    <VerticalTimelineElement
                        contentStyle={{
                            background:theme === 'light'? "#f3f4f6": "rgba(255,255,255,0.05)",
                            boxShadow: 'none',
                            border:"1px solid rgba(0,0,0,0.05)",
                            textAlign:'left',
                            padding:"1.3rem 2rem"
                        }}
                        contentArrowStyle={{
                            borderRight:theme==="light"? "0.4rem solid #9ca3af": "0.4rem solid rgba(255, 255, 255, 0.5)"
                        }}
                        date={item.date}
                        icon={item.icon}
                        iconStyle={{
                            background: theme==="light" ? "#fff" : "rgba(255, 255, 255, 0.15)",
                            fontSize:'1.5rem'
                        }}
                        >
                        <h2 className='font-bold capitalize dark:!text-white'>
                            {item.company}
                        </h2>
                        <h3 className='text-gray-800 font-semibold dark:text-gray-400'>{item.title}</h3>
                        <p className='font-normal text-gray-800 !mt-0 dark:!text-gray-400'>{item.location}</p>
                        <p className='!mt-1 font-normal text-gray-700 dark:text-gray-300'>{item.description}</p>
                    </VerticalTimelineElement>
                </React.Fragment>
            ))}
        </VerticalTimeline>
       
    </section>
  )
}
