"use client"

import React from 'react'
import { Moon, Sun } from 'lucide-react'
import useTheme from '@/hooks/useTheme'

export default function ThemeSwitch() {

    const {theme,setTheme} = useTheme()
    
    const toggleTheme = ()=>{
        if (theme == 'dark'){
            setTheme("light")
            localStorage.setItem("currentTheme","light")
        }
        else{
            setTheme("dark")
            localStorage.setItem("currentTheme","dark")
        }
    }

  return (
    <button onClick={toggleTheme} className='fixed right-2 bottom-5 z-20 bg-white rounded-full p-2 sm:p-3 shadow-2xl border border-gray-500/[0.2] backdrop-blur-[0.5rem] border-opacity-40 bg-opacity-80 hover:scale-110 transition-all flex items-center justify-center dark:bg-black dark:border dark:border-gray-500/[0.5]'>
        {theme === "dark" ?<Sun className='font-light h-4 w-4 text-white'/> : <Moon className='font-light h-4 w-4 text-gray-700'/>}
    </button>
  )
}
