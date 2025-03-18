"use client"

import { MessageCircleMore } from 'lucide-react'
import React from 'react'

type ChatbotBtnProps = {
  setOpen : (value:boolean) => void;
}

export default function ChatbotBtn({setOpen}:ChatbotBtnProps) {
  const toggleChat = ()=>{
    setOpen(true)
  }
 
  return (
    <button onClick={()=> setOpen(true)} className='fixed bottom-15 sm:bottom-18 right-2 shadow-2xl z-20 bg-white dark:bg-black dark:text-white rounded-full p-2 sm:p-3 border border-gray-500/[0.2] dark:border-gray-200/30 backdrop-blur-[0.5rem] border-opacity-40 opacity-80 hover:scale-110'>
      <MessageCircleMore className='font-light h-5 w-5'/>
    </button>
  )
}
