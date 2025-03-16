"use client"

import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SectionHeading from './section-heading'
import useSectionInView from '@/hooks/useSectionInView'
import { experiencesData } from '@/lib/data'
export default function Experience() {
    const {ref} = useSectionInView("Experience",0.4)
  return (
    <section id='experience' ref={ref} className='mb-28 sm:mb-40 scroll-mt-28 text-center'>
        <SectionHeading>My Experiences</SectionHeading>
        <VerticalTimeline lineColor=''>
            {experiencesData.map((item,index)=>(
                <React.Fragment key={index}>
                    <VerticalTimelineElement
                        contentStyle={{
                            background: "#f3f4f6",
                            boxShadow: 'none',
                            border:"1px solid rgba(0,0,0,0.05)",
                            textAlign:'left',
                            padding:"1.3rem 2rem"
                        }}
                        contentArrowStyle={{
                            borderRight:"0.4rem solid #9ca3af"
                        }}
                        date={item.date}
                        icon={item.icon}
                        iconStyle={{
                            background:"#fff",
                            fontSize:'1.5rem'
                        }}
                        >
                        <h2 className='font-bold capitalize'>
                            {item.company}
                        </h2>
                        <h3 >{item.title}</h3>
                        <p className='font-normal !mt-0'>{item.location}</p>
                        <p className='!mt-1 font-normal text-gray-700'>{item.description}</p>
                    </VerticalTimelineElement>
                </React.Fragment>
            ))}
        </VerticalTimeline>
       
    </section>
  )
}
