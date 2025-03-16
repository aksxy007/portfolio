import React from "react";
import { BookText, BriefcaseBusiness, GraduationCap } from 'lucide-react';
import CoffeeShop from "../public/CoffeeShop.png"
import ContractBuddy from "../public/contractBuddy.png"
import Instagreet from "../public/SocialMedia.png"
import DataAnalystAssitant from "../public/data-analyst-dashboard.png"

export const links = [
    {
      name: "Home",
      hash: "#home",
    },
    {
      name: "About",
      hash: "#about",
    },
    {
      name: "Projects",
      hash: "#projects",
    },
    {
      name: "Skills",
      hash: "#skills",
    },
    {
      name: "Experience",
      hash: "#experience",
    },
    {
      name: "Contact",
      hash: "#contact",
    },
  ] as const;

  export const experiencesData = [
    {
      company: "Carelon Global Solutions",
      title: "Associate Software Engineer",
      location: "Bangalore, IN",
      description:
        "I am working here as an Associate Software Developer.Worked on multiple domains like Machine Learning, Banckend Development and Generative AI",
      icon: React.createElement(BriefcaseBusiness),
      date: "Aug 2023 - present",
    },
    {
      company:"Legato Health Technologies",
      title: "Data Science Intern",
      location: "Hyderabad, IN",
      description:
        "I worked here as a Data Science Intern on NLP project",
      icon: React.createElement(BookText),
      date: "May 2022 - July 2022",
    },
    {
      company:"National Institute of Technology, Karnataka",
      title: "Student",
      location: "Mangalore, IN",
      description:
        "Studied here, completed my B.Tech course in Information Technology",
      icon: React.createElement(GraduationCap),
      date: "Aug 2019 - May 2023",
    },
  ] as const;

  export const projectsData = [
    {
      title: "CocoBOT",
      description:
        "Designed and implemented a mobile applicaton for a multi-agent chatbot using React Native and LLMs to make a multi-agent chatbot which can describe products,take orders and recommend items.",
      tags: ["React Native", "Generative AI", "LLMs", "MongoDB"],
      imageUrl: CoffeeShop,
    },
    {
      title: "Data Analysis Assistant",
      description:
        "A Simple Data Analyst assistant - Get insights on CSVs through natural language.",
      tags: ["Python", "Streamlit", "LLMs", "Plotly", "Langchain","Langgraph"],
      imageUrl:DataAnalystAssitant ,
    },
    {
      title: "Contract Buddy",
      description:
        "A one stop SAAS to know about your contracts, upload your contracts and let the AI give you pros and cons and many more insights on it.If you like it subscribe to get more insights",
      tags: ["Next.js","Tailwind","Google Gemini","Redis"],
      imageUrl: ContractBuddy,
    },
    {
        title: "Instagreet",
        description:
          "Your minimal social media App, made with react and redux.",
        tags: ["React.js","Tailwind","Redux","Redux toolkit","Javascript"],
        imageUrl: Instagreet,
      },
  ] as const;

  export const skillsData = [
    "Machine Learning",
    "Natural Language Processing",
    "NLP",
    "Generative AI",
    "Langchain",
    "Langgraph",
    "LLMs",
    "FastAPI",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "MongoDB",
    "Express",
    "Python",
  ] as const;