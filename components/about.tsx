"use client"

import React from "react";
import SectionHeading from "./section-heading";
import {motion} from "framer-motion"
import useSectionInView from "@/hooks/useSectionInView";



export default function About() {
  
  const {ref} = useSectionInView("About",0.75)
  
  return (
    <motion.section 
        id="about"
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}}
        ref={ref}
        className="flex flex-col justify-center items-center text-center mb-28 max-w-[45rem] sm:w-full leading-8 sm:mb-40 scroll-mt-28 space-y-4"
    >
      <SectionHeading>About Me</SectionHeading>
      <p>
        I am a computer science graduate from{" "}
        <span className="font-medium">National Institute of Technology Karnataka (NITK)</span>.I completed my{" "}
        <span className="font-medium">B.Tech Degree</span> in {" "}
        <span className="italic">Information Technology</span>.
        <span className="italic">Why favourite part about progamming?</span> It's is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          Python, Machine Learning, React, Node.js, and MongoDB.
        </span>
         I am also familiar with TypeScript. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a 
        <span className="font-medium"> Software Developer/ Data Scientist.</span>
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing football. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. 
        <span className="font-medium whitespace-pre-line"> Fun Fact: </span>I like
        playing football but i dont watch it. LOL
      </p>
    </motion.section>
  );
}
