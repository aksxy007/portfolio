"use client"

import { ThemeContext } from '@/context/theme-context'
import React, { useContext } from 'react'

export default function useTheme() {
  const context = useContext(ThemeContext)
  
  if (context === null){
    throw new Error(
        "useThemeContext must be within an ThemeContextProvider"
    )
  }

  return context;
}
