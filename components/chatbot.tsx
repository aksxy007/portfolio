"use client"

import React, { useState } from 'react'
import ChatbotBtn from './chatbot-btn'
import { XIcon , MessageCircleMore, SendHorizonal } from 'lucide-react'
import clsx from 'clsx'


export default function Chatbot() {

  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className='fixed right-2 sm:right-3 bottom-15 sm:bottom-18 z-25 shadow-lg'>
      {!open && <ChatbotBtn setOpen={setOpen}/>}
      {
        open && (
          <div className='flex flex-col justify-around h-[29rem] w-[19rem] sm:h-[40rem] sm:w-[26rem] bg-white rounded-xl shadow-lg border border-gray-500/30 dark:bg-gray-950'>
            <div className='flex w-full sm:h-[5rem] h-[4rem] rounded-t-xl shadow-md justify-between items-center px-3 border-b-2 text-black border-gray-500/30 dark:bg-black/80 dark:border-gray-200/30 dark:text-white'>
                <div className='flex flex-row gap-2 items-center justify-center'>
                  <MessageCircleMore className='h-8 w-8'/>
                  <h2 className='text-lg sm:text-2xl font-semibold'>Chat with me</h2>
                </div>
                <div className='flex items-center justify-center w-fit hover:scale-105 hover:border hover:border-gray-500/30 rounded-full p-1'>
                    <XIcon onClick={()=>setOpen(false)} />
                </div>
            </div>
            <div className='flex h-full w-full flex-col space-y-3 overflow-y-scroll px-2 py-2'>
              {[1,1,1,1,11,1,1,1,11,1,1,11,1,1,1].map((item,idx)=>(
                <div key={idx} className={clsx('w-full h-fit rounded-full bg-gray-200/[0.5] py-2 px-3',{"justify-start":idx % 2 === 0},{"justify-end":idx % 2 !== 0})}>
                    <div className='w-[90%] h-fit'>
                        {item}
                    </div>
                </div>
              ))}
               
            </div>
            <div className='flex gap-1 items-center justify-between rounded-b-xl bottom-0 sm:h-[4rem] h-[3rem] w-full px-2 sm:px-3 py-2 border-t-2 border-gray-500/30 '>
              <input placeholder='Ask me anything..' className='sm:h-[3rem] h-[2.5rem] px-3 sm:px-4 py-2  rounded-3xl border w-full border-gray-500/30 outline-none shadow-2xl dark:bg-black/[0.5]'/>
              <button className='rounded-full shadow-2xl flex items-center justify-center bg-black text-white sm:p-3 p-2 hover:scale-105 dark:bg-white dark:text-black'>
                <SendHorizonal className='h-5 w-5 font-semibold '/>
              </button>
            </div>
            
          </div>
        )
      }
    </div>
  )
}
