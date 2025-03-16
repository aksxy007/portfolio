"use client"

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import useSectionInView from "@/hooks/useSectionInView";



export default function Projects() {
  
  const {ref} = useSectionInView("Projects",0.3)

  return (
    <section id="projects" ref={ref} className="flex flex-col justify-center items-center scroll-mt-28">
      <SectionHeading>Recent Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
