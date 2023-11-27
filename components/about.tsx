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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
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
      </p>
    </motion.section>
  );
}
