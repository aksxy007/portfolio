"use client"

import React, { useState ,createContext, useEffect } from 'react'
import { links } from '@/lib/data'

type SectionTypes = (typeof links)[number]["name"]

type ActiveSectionContextProviderProps={
    children:React.ReactNode
}

type ActiveContextType ={
  activeSection: SectionTypes,
  setActiveSection: React.Dispatch<React.SetStateAction<SectionTypes>>
  lastClick:number
  setLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = createContext<ActiveContextType | null>(null)



export default function ActiveSectionContextProvider({children}:ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionTypes>("Home")
    // When the user clicks on the headers the in between inView sections will be disabled so that they are not highlighted in the animation.
    const [lastClick,setLastClick] = useState<number>(0)

    return (
    <ActiveSectionContext.Provider value={{activeSection,setActiveSection,lastClick,setLastClick}}>
        {children}
    </ActiveSectionContext.Provider>
  )
}
