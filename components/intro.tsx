"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Photo from "../public/photo.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  GithubIcon,
  LucideLinkedin,
} from "lucide-react";
import useSectionInView from "@/hooks/useSectionInView";
import useActiveSection from "@/hooks/useActiveSection";
export default function Intro() {
  const {ref} = useSectionInView("Home",0.1)
  const {setActiveSection,setLastClick} = useActiveSection()
  
  return (
    <section id="home" ref={ref} className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-100">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={Photo}
              alt="Atul Kumar Singh"
              width="192"
              height="192"
              priority={true}
              quality={95}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-3xl"
      >
        <span className="font-bold">Hello, I'm Atul Kumar Singh.</span> I'm a{" "}
        <span className="font-bold">full-stack Data Science developer</span>{" "}
        with <span className="font-bold">1.5 years</span> of experience. I enjoy
        building{" "}
        <span className="italic">
          sites & apps and solve real-world problems through machine learning
          and AI
        </span>
        . My focus is{" "}
        <span className="underline">
          React (Next.js), Generative AI and Machine Learning
        </span>
        ,<span>and eventually become a Fullstack Data Scientist</span>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-col sm:flex-row justify-center items-center gap-3 text-sm sm:text-lg font-medium"
      >
        <Link
          className="bg-gray-900 text-white px-5 py-2 sm:px-7 sm:py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 transition dark:border dark:border-white/20"
          href={"#contact"}
          onClick={()=>{
            setActiveSection("Contact")
            setLastClick(Date.now())
          }}
        >
          Contact me here
          <ArrowRight />
        </Link>
        <a
          href="/CV.pdf" download={true}
          className="bg-white px-5 py-2 sm:px-7 sm:py-3 flex text-black items-center gap-2 rounded-full border border-gray-200 outline-none hover:scale-110 transition dark:bg-white/10 dark:border-none dark:text-white"
        >
          Download Resume <Download className="text-black dark:text-white" />
        </a>
        <div className="flex flex-row justify-center items-center gap-2">
          <a
            className="bg-white p-3 flex text-gray-700 items-center gap-2 rounded-full border border-gray-200 outline-none hover:scale-110 transition dark:bg-white/10 dark:border-gray-600"
            href="https://www.linkedin.com/in/atulkumarsingh07/"
            target="blank"
          >
            <LucideLinkedin  className="opacity-70 hover:opacity-100 dark:text-white"/>
          </a>
          <a
            className="bg-white p-3 flex text-gray-700 items-center gap-2 rounded-full border border-gray-200 outline-none hover:scale-110 transition dark:bg-white/10 dark:border-gray-600"
            href="https://github.com/aksxy007"
            target="blank"
          >
            <GithubIcon className="opacity-70 hover:opacity-100 dark:text-white"/>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
