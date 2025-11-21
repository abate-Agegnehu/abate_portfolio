"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaFigma, FaTwitter, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiRemix,
  SiExpress,
  SiNestjs,
  SiPrisma,
  SiDocker,
  SiAzuredevops,
} from "react-icons/si";
import { MdOutlinePsychology } from "react-icons/md";
const about = {
  title: "About me",
  description:
    "I’m Leliso Agegnehu, Highly skilled Software Developer with over 5 years of experience designing, developing, and managing complex web applications and good front-end and back-end technologies knowledge. Proficient in JavaScript/TypeScript programming language, Demonstrated expertise in leveraging frameworks such as React, Node.js, Remix, and NextJs. to build scalable and efficient applications. I take the time to deeply understand my client's requirements and always deliver projects on time. I strive to provide a fair price, high-quality, and industry-grade web applications with best practices and state-of-the-art technologies.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Leliso Ag",
    },
    {
      fieldName: "Phone",
      fieldValue: "+251-92-842-5097",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "Leliso",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Ethiopia",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Amharic",
    },
  ],
};

const experience = {
  icon: "/",
  title: "My Experience",
  description:
    "Highly skilled Software Developer with over 5 years of experience designing, developing, and managing complex web applications and good front-end and back-end technologies knowledge. Proficient in JavaScript/TypeScript programming language, Demonstrated expertise in leveraging frameworks such as React, Node.js, Remix, and NextJs. to build scalable and efficient applications. I take the time to deeply understand my client's requirements and always deliver projects on time. I strive to provide a fair price, high-quality, and industry-grade web applications with best practices and state-of-the-art technologies. ",
  items: [
    {
      company: "Two F Capital",
      position: "Team Lead Full Stack Developer",
      duration: "Oct 2024-Jun 2025",
    },
    {
      company: "Two F Capital",
      position: "Full Stack Developer",
      duration: "May 2023-Oct 2024",
    },
    {
      company: "Two F Capital",
      position: "Back End Developer",
      duration: "May 2022-Apr 2023",
    },
    {
      company: "Medket technology solutions",
      position: "Frontend Developer",
      duration: "Jun 2022-Feb 2024",
    },
    {
      company: "Junior Software Developer",
      position: "Qemer Software Technology PLC",
      duration: "Nov 2021-Apr 2022",
    },
    {
      company: "Internship",
      position: "Bahir Dar ICT Business incubation center",
      duration: "Sep 2020- Feb 2021",
    },
  ],
};

const education = {
  icon: "/",
  title: "My Education",
  description:
    "I have pursued formal education and self-directed learning in frontend, backend, full-stack development, DevOps, social media management, and prompt engineering. These experiences have equipped me with a diverse skill set to build and manage modern applications and digital presence effectively.",
  items: [
    {
      institution: "Mizan Tepi University",
      url: "https://mtu.edu.et/",
      degree: "Bachelor's Degree in Computer Science",
      duration: "Sep 2017 - Aug 2021",
    },
    {
      institution: "FreeCodeCamp",
      url: "https://www.freecodecamp.org/certification/fcc141e5b95-4161-417c-ab72-5dd660bd1dd7/javascript-algorithms-and-data-structures",
      degree: "Front End Development Certification",
      duration: "2019-2021",
    },

    {
      institution: "Udemy",
      url: "https://www.udemy.com/certificate/UC-3e78a185-fa62-40fe-b8af-ed38d5930752/",
      degree: "DevOps Fundamentals",
      duration: "2022",
    },
    {
      institution: "SoloLearn",
      url: "",
      degree: "Full Stack Web Development",
      duration: "2019-2021",
    },
    {
      institution: "Coursera",
      url: "",
      degree: "Social Media Management",
      duration: "2023",
    },
    {
      institution: "OpenAI Academy",
      url: "",
      degree: "Prompt Engineering",
      duration: "2024",
    },
  ],
};

const skills = {
  title: "My Skill",
  description:
    "I am proficient in a wide range of technologies including frontend, backend, DevOps, prompt engineering, social media management, and UI/UX design with Figma.",
  skillList: [
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiRemix />,
      name: "Remix.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <SiNestjs />,
      name: "Nest.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiPrisma />,
      name: "Prisma",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiDocker />,
      name: "DevOps (Docker)",
    },
    {
      icon: <SiAzuredevops />,
      name: "Azure DevOps",
    },
    {
      icon: <MdOutlinePsychology />,
      name: "Prompt Engineering",
    },
    {
      icon: <FaTwitter />,
      name: "Social Media Management",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <a href={item.url}>
                              <p className="text-white/60">
                                {item.institution}
                              </p>
                            </a>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
