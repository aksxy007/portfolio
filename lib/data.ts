import React from "react";
import { BookText, BriefcaseBusiness, GraduationCap } from 'lucide-react';
import CoffeeShop from "../public/coffee-shop.png"
import ContractBuddy from "../public/contractBuddy.png"
import Instagreet from "../public/SocialMedia.png"
import DataAnalystAssitant from "../public/Data-Analyst-bg.png"

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
      title: " Carelon Global Solutions",
      location: "Bangalore, IN",
      description:
        "I am working here as an Associate Software Developer.Worked on multiple domains like Machine Learning, Banckend Development and Generative AI",
      icon: BriefcaseBusiness,
      date: "Aug 2023 - present",
    },
    {
      title: "Data Science Intern",
      location: "Hyderabad, IN",
      description:
        "I worked here as a Data Science Intern on NLP project",
      icon: BookText,
      date: "May 2022 - July 2022",
    },
    {
      title: "National Institute of Technology, Karnataka",
      location: "Mangalore, IN",
      description:
        "Studied here, completed my B.Tech course in Information Technology",
      icon: GraduationCap,
      date: "Aug 2019 - May 2023",
    },
  ] as const;

  export const projectsData = [
    {
      title: "CocoBOT",
      description:
        "Designed and implemented a mobile applicaton for a multi-agent chatbot using React Native and open source LLMs to demonstrate the working of multiple agents coupled together. The chatbot has the ability to answer all relevent queries about the products in the coffee shop, take orders from the user and recommend products to go along with thier order, via a recommendation system.",
      tags: ["React Native", "Generative AI", "Large Language Models", "MongoDB"],
      imageUrl: CoffeeShop,
    },
    {
      title: "Data Analyst Assistant",
      description:
        "A Simple Data Analyst assistant for developing insights on your data for non-technical personals, upload your csv files and chat with the bot to get insights, complex queries and plot distributions via a Natural Language",
      tags: ["Python", "Streamlit", "Large Language Models", "Plotly", "Langchain","Langgraph"],
      imageUrl:DataAnalystAssitant ,
    },
    {
      title: "Contract Buddy",
      description:
        "A one stop place to know about your contracts, upload your contracts and let the AI give you pros and cons and many more insights on it.",
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
    "Large Language Models",
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