"use client"

import React from 'react'
import { skillsData } from '@/lib/data'
import SectionHeading from './section-heading'
import useSectionInView from '@/hooks/useSectionInView'
import {motion} from "framer-motion"

const fadeInAnimationVariants = {
    initial:{
        opacity:0,
        y:100
    },
    animate:(index:number)=>({
        y:0,
        opacity:1,
        transition:{
            delay:0.05 * index
        }}
    )
}

export default function Skills() {

  const {ref}=useSectionInView("Skills",0)

  return (
    <section id="skills" ref={ref} className='mb-28 sm:mb-40 max-w-[53rem] scroll-mt-28 text-center '>
        <SectionHeading>Skills</SectionHeading>
        <ul className='flex flex-wrap justify-center items-center gap-2'>
            {skillsData.map((skill,index)=>(
                <motion.li key={index} 
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    // viewport={{
                    //     once:true,
                    // }}
                    custom={index}
                    className='bg-white text-gray-700 border border-black/[0.1] rounded-xl px-5 py-2'
                >
                    {skill}
                </motion.li>
            ))}
        </ul>
    </section>
  )
}
