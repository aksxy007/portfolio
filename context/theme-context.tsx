"use client"

import React, { createContext,useEffect,useState } from 'react'

type Theme = "light"| "dark"

type ThemeContextProviderProps ={
    children:React.ReactNode,
}

type ThemeContextProps = {
    theme:string,
    setTheme : React.Dispatch<React.SetStateAction<Theme>>
}

export const ThemeContext = createContext<ThemeContextProps | null>(null)


export default function ThemeContextProvider({children}:ThemeContextProviderProps) {
    const [theme, setTheme] = useState<Theme>("light")

    useEffect(()=>{
        const localTheme = localStorage.getItem("currentTheme") as Theme | null
        if(localTheme){
            setTheme(localTheme)
            if(localTheme === 'dark'){
                document.documentElement.classList.add("dark")
            }else{
                document.documentElement.classList.remove("dark")
            }
        }else if (window.matchMedia("(prefers-color-scheme: dark)").matches){
            setTheme("dark")
            document.documentElement.classList.add("dark")
        }
    },[theme,setTheme])
  
    return (
    <ThemeContext.Provider value={{theme,setTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}
