"use client"


import { ActiveSectionContext } from '@/context/active-section-context'
import React, { useContext } from 'react'

export default function useActiveSection() {
  const context = useContext(ActiveSectionContext)

  if (context === null){
    throw new Error(
        "useActiveSectionContext must be within an ActiveSectionContextProvider"
    )
  }

  return context;
}
