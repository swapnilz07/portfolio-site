"use client";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ReactQueryIcon from "@/assets/icons/react-query.svg";
import Tailwind from "@/assets/icons/tailwind.svg";
import MUI from "@/assets/icons/material-ui.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import Next from "@/assets/icons/next.svg";
import ViteIcon from "@/assets/icons/vite.svg";
import ReduxIcon from "@/assets/icons/redux.svg";
import NodeJsIcon from "@/assets/icons/node-js.svg";
import MongoDbIcon from "@/assets/icons/mongodb.svg";
import RTLIcons from "@/assets/icons/react-testing-library.svg";
import JestIcons from "@/assets/icons/jest.svg";
import JwtIcon from "@/assets/icons/jsonwebtoken.svg";
import PostmanIcon from "@/assets/icons/postman.svg";
import SocketIoIcon from "@/assets/icons/socket-io.svg";
import GitIcon from "@/assets/icons/git.svg";
import VsCodeIcon from "@/assets/icons/visual-studio.svg";

import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import CrardHeader from "@/components/CrardHeader";
import ToolBoxItems from "@/components/ToolBoxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolBoxItems = [
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "Tailwind Css",
    iconType: Tailwind,
  },
  {
    title: "Material UI",
    iconType: MUI,
  },
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "TypeScript",
    iconType: TypeScriptIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Vite",
    iconType: ViteIcon,
  },
  {
    title: "Next.Js",
    iconType: Next,
  },
  {
    title: "React-Query",
    iconType: ReactQueryIcon,
  },
  {
    title: "React-Testing-Library",
    iconType: RTLIcons,
  },
  {
    title: "Node Js",
    iconType: NodeJsIcon,
  },
  {
    title: "MongoDB",
    iconType: MongoDbIcon,
  },
  {
    title: "jsonwebtoken",
    iconType: JwtIcon,
  },
  {
    title: "Socket.io",
    iconType: SocketIoIcon,
  },
  {
    title: "Visual Studio",
    iconType: VsCodeIcon,
  },
  {
    title: "Postman",
    iconType: PostmanIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Git",
    iconType: GitIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
];

const hobbies = [
  {
    title: "Cricket",
    emoji: "🏏",
    left: "5%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "50%",
    top: "5%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "5%",
    top: "60%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "50%",
    top: "60%",
  },
];

const experienceData = [
  {
    id: 1,
    role: "MERN Stack Developer",
    company: "Samaah Technologies Pvt Ltd (CarEasy)",
    duration: "Oct 2024 - Present",
    responsibilities: [
      "Engineered scalable full-stack applications using Next.js and Node.js, improving overall application performance and user experience.",
      "Optimized MongoDB queries and schema design, reducing API response time by 30%.",
      "Implemented Redis caching and BullMQ for background job processing, improving system throughput and handling high-load operations.",
      "Streamlined state management using Zustand, reducing unnecessary re-renders and enhancing frontend performance.",
      "Identified and resolved production issues through debugging and testing, improving application stability and reducing downtime.",
    ],
  },
  {
    id: 2,
    role: "MERN Stack Developer",
    company: "Capritech Global Services Pvt Ltd",
    duration: "Aug 2023 - Sep 2024",
    responsibilities: [
      "Developed responsive and reusable UI components using React.js, TypeScript, Material UI, and Bootstrap.",
      "Designed and built RESTful APIs using Node.js, Express.js, and MongoDB, improving backend performance by 25%.",
      "Implemented Redux for scalable state management in complex applications.",
      "Collaborated with cross-functional teams in Agile (SCRUM) environments to deliver high-quality features on time.",
      "Performed debugging and testing to proactively identify and resolve issues, improving application reliability.",
    ],
  },
  {
    id: 2,
    role: "MERN Stack Developer Intern",
    company: "Capritech Global Services Pvt Ltd",
    duration: "May 2023 - Jul 2023",
    responsibilities: [
      "Built responsive frontend components using React.js and Next.js, improving UI consistency and performance.",
      "Integrated frontend applications with backend APIs to ensure seamless data flow.",
      "Assisted in debugging and testing, contributing to improved application stability.",
    ],
  },
];
export default function About() {
  const constraintRef = useRef(null);

  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          {/* Beyond the Code Section */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CrardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
              />
              <div
                className="relative flex-1 min-h-44 lg:min-h-[100px] px-3"
                ref={constraintRef}
              >
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* My Toolbox Section */}
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CrardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional
                  digital experiences."
              />
              <ToolBoxItems
                items={toolBoxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolBoxItems
                items={toolBoxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>

          {/* My Experience Section */}
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CrardHeader
                title="My Experience"
                description="Discover my professional journey and key accomplishments."
              />
              <div className="px-6 md:px-10 overflow-y-auto">
                {experienceData.map((experience) => (
                  <div key={experience?.id} className="mb-4">
                    <h3 className="text-lg font-semibold">{experience.role}</h3>
                    <p className="text-gray-500">{experience.company}</p>
                    <p className="text-gray-400 text-sm">
                      {experience.duration}
                    </p>
                    <ul className="mt-2 list-disc pl-5 text-gray-300">
                      {experience.responsibilities.map((task, idx) => (
                        <li key={idx}>{task}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>

            {/* Map Section */}
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="smiling memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
