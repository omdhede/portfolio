"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[60rem] w-full text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      {/* <p className="mb-3">
        After I finished my <span className="font-bold">10 + 2</span>{" "}
        , I chose to pursue my <span className="font-bold">B. Tech</span> degree in{" "}
        <span className="underline">Artificial Intelligence and Data Science</span> from{" "}
        <span className="font-medium">Vishwakarma Institute of Information Technology, Pune.</span>{" "}
        I'm currently in my <span className="font-bold">Third Year</span> of college. I'm a{" "}
        <span className="font-medium">self-taught</span> developer. My current <span className="font-medium">CGPA</span> is <span className="font-bold">8.32</span>. I started learning to code when I was in my{" "}
        <span className="font-bold">Second Year</span> of college. I started
        with{" "}
        <span className="font-medium">
          HTML, CSS, and JavaScript
        </span>
        . I then started learning{" "}
        <span className="font-medium">React</span> and{" "}
        <span className="font-medium">Next.js</span>. I am currently learning{" "}
        <span className="font-medium">TypeScript</span>. I have also worked
        with <span className="font-medium">Flutter</span>, {" "}
        <span className="font-medium">Dart</span> and <span className="font-medium">Compose</span>.  I am also familiar with{" "}
        <span className="font-medium">Firebase</span>, {" "}
        <span className="font-medium">MongoDB</span> and <span className="font-medium">MySQL</span>. I haved also used {" "}
        <span className="font-medium">Python</span> to create a few <span className="font-bold">Machine Learning</span> models. I am also an expert in{" "}
        <span className="font-bold">Java</span> and I use it for <span className="font-medium">competitive programming</span> .
        <span className="font-medium"></span> {" "}
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and going out for a ride in nature and have a cup of <span className="font-bold">TEA</span>. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p> */}

      <div className="mb-3 ml-2 sm:ml-0 sm:items-start sm:justify-center sm:grid sm:grid-flow-col sm:grid-col-3 sm:gap-x-4  w-full flex flex-col items-start justify-start">
        <div className="flex flex-col items-start sm:pl-6 sm:mr-14 w-full mb-4 sm:mb-0">
          <span className="sm:text-lg text-base font-semibold">
            Let me tell you a bit more about myself
          </span>
          <ul className="flex flex-col items-start ml-4 list-disc text-xs sm:text-base gap-y-2 mt-2 sm:gap-y-1 sm:mt-1">
            <li>3x Hackathon Winner 🏆</li>
            <li>Final Year Bachelor of Technology Student 🎓</li>
            <li>Major: Artificial Intelligence and Data Science 🤖</li>
            <li>CGPA: 8.3/10</li>
            <li>Started coding in 2021 🚀</li>
            <li>High School, Major: Mathematics ➗, 93.80% </li>
          </ul>
        </div>
        <div className="bg-gray-200 h-full w-1 rounded-full hidden sm:block dark:bg-opacity-20">
          {" "}
        </div>
        <div className="flex flex-col items-start sm:ml-14 w-full">
          <span className="sm:text-lg text-base font-semibold">
            Leadership
          </span>
          <ul className="flex flex-col items-start ml-4 list-disc text-xs sm:text-base gap-y-2 mt-2 sm:gap-y-1 sm:mt-1">
            <li>Team Leader, DPBH, Department of Consumer Affairs</li>
            <li>Team Leader, IEEE Hack-This-Metaverse</li>
            <li>Joint Dept Head, Cisco Networking Academy</li>
            <li>Joint PR Head, Office of International Relations</li>
            <li>Class Representive, First Year</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
