"use client"

import React from 'react'
import {motion} from 'framer-motion'
export default function Divider() {
  return (
    <motion.div 
    initial={{opacity:0, y:100}}
    animate={{opacity:1, y:0}}
    transition={{delay: 0.1}}
    className='bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-gray-500'>
    </motion.div>
  )
}
