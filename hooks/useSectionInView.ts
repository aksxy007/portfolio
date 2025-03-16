import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import useActiveSection from './useActiveSection'

import { links } from '@/lib/data'

type SectionTypes = (typeof links)[number]["name"]


export default function useSectionInView(sectionName:SectionTypes, threshold=0.75) {
    
    const { ref, inView } = useInView({threshold})
    const {setActiveSection,lastClick} = useActiveSection()
  
  
    useEffect(()=>{
      if (inView && Date.now()- lastClick > 1000){
        setActiveSection(sectionName)
      }
    },[inView,setActiveSection,lastClick,sectionName])

    return {ref}
}
