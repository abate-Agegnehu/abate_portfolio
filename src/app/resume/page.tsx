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
  SiSpringboot,
  SiGit,
} from "react-icons/si";
import { MdOutlinePsychology } from "react-icons/md";
const about = {
  title: "About me",
  description:
    "I’m Abate Agegnehu, a highly skilled Software Developer with strong expertise in building modern, scalable, and efficient web applications. I specialize in full-stack development using JavaScript/TypeScript and frameworks such as React, Node.js, Next.js, and Spring Boot. I focus on writing clean, maintainable code and delivering solutions that meet real business needs. I take time to fully understand client requirements and consistently deliver high-quality, industry-grade applications following best practices and modern development standards.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Abate Agegnehu",
    },
    {
      fieldName: "Phone",
      fieldValue: "+251-91-748-1145",
    },
    {
      fieldName: "Experience",
      fieldValue: "5 Year Software engineering student",
    },
    {
      fieldName: "Skype",
      fieldValue: "Abate",
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
    "Highly skilled Software Developer with strong expertise in designing, developing, and managing modern web applications across both front-end and back-end. Proficient in JavaScript and TypeScript, with hands-on experience using frameworks and technologies such as React, Node.js, Next.js, MongoDB, Express, and Spring Boot to build scalable and efficient applications. I follow clean architecture principles, use Git for version control, and focus on delivering reliable, high-quality solutions. I take time to fully understand client requirements and consistently deliver industry-grade applications using best practices and modern technologies. ",
  items: [
    {
      company: "INSA (Information Network Security Agency)",
      position: "Software Engineering Intern",
      duration: "Feb 2025 – June 2025", // update if needed
    },
    {
      company: "Fintech Investment Company",
      position: "Frontend Developer Intern",
      duration: "June 2024 – Sep 2024", // update if needed
    },
    {
      company: "Freelance / Personal Clients",
      position: "Full Stack Developer",
      duration: "2024 – Present",
    },
    {
      company: "Wolkite University",
      position: "Software Engineering Student",
      duration: "2021 – Present",
    },
  ],
};

const education = {
  icon: "/",
  title: "My Education",
  description:
    "My education combines formal university training with continuous self-learning in full-stack development, cloud technologies, and modern software engineering practices.",
  items: [
    {
      institution: "Wolkite University",
      url: "",
      degree: "Bachelor's Degree in Software Engineering",
      duration: "2021 – Present",
    },

    {
      institution: "Udemy",
      url: "",
      degree: "Front-End Development Certification",
      duration: "2023",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "A focused set of skills I use daily to build modern, scalable, and production-ready applications.",
  skillList: [
    {
      icon: <FaJs />,
      name: "JavaScript / TypeScript",
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
      icon: <FaNodeJs />,
      name: "Node.js (Express)",
    },
    {
      icon: <SiPrisma />,
      name: "Prisma / MongoDB",
    },
    {
      icon: <SiSpringboot />,
      name: "Spring Boot",
    },
    {
      icon: <SiGit />,
      name: "Git & GitHub",
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
