"use client"

import React from 'react'
import SectionHeading from './section-heading'
import useSectionInView from '@/hooks/useSectionInView'
import SubmitBtn from './submit-btn'
import {motion} from 'framer-motion'
import { sendEmail } from '@/actions/send-email'


export default function Contact() {

    const {ref} = useSectionInView("Contact",0.4)

  return (
    <motion.section 
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity: 1
    }}
    transition={{
        duration: 1
    }}
    id='contact' ref={ref} 
    className='mb-28 sm:mb-40 w-[min(100,38rem)] text-center scroll-mt-28'>
        <SectionHeading>Contact Me</SectionHeading>
        <p>
            Please contact me directly at{" "}<a className='underline' href='mailto:atul13062001@gmail.com' >
                atul13062001@gmail.com
            </a>
            {" "}or through this form.
        </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData)=>{
            const {data,error}= await sendEmail(formData)

            if(error){
                console.error("Failed to send email",error)
            }

            if(data){
                console.log("Email sent !!")
            }
        }}
      >
        <input
          className="h-14 px-4 rounded-lg border border-black/[0.1] dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg border border-black/[0.1] p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn/>
      </form>
    </motion.section>
  )
}
