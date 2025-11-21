"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { useState } from "react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { Swiper as SwiperType } from "swiper/types";

const projects = [
  {
    number: "01",
    category: " ",
    title: "FetroAder ",
    describtion:
      "Led backend development for a freelance, job, and affiliate platform. Built scalable APIs, managed authentication, and created an internal admin dashboard.",
    // stack: [
    //   { name: "Next.js" },
    //   { name: "TypeScript" },
    //   { name: "Tailwind CSS" },
    // ],

    image: "/thumbnail.jpg",
    live: "https://fetroader.com/",
    gitub: "",
  },
  {
    number: "02",
    category: " ",
    title: "Sewasew Multimedia",
    describtion:
      "Developed a subscription-based service including CRBT, a rewards program, and an agent system. Built backend logic for digital content delivery and payment workflows.",
    // stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/thumbnail.jpg",
    live: "https://subscription.sewasewmusic.com/",
    gitub: "",
  },
  {
    number: "03",
    category: " ",
    title: "Qegnet",
    describtion:
      "Delivered a contest platform supporting user registration, talent submission, and real-time result tracking. Designed backend logic and frontend modules to create an interactive user experience.",
    // stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/thumbnail.jpg",
    live: "https://qegnet.et/home-page",
    gitub: "",
  },
  {
    number: "04",
    category: " ",
    title: "Ride Host App",
    describtion:
      "Engineered a backend system to enable ride scheduling and payment processing for clients, including RidePlus and Telebirr integrations. Implemented real-time tracking and notifications using Socket.io.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/thumbnail.jpg",
    live: "",
    gitub: "",
  },
  {
    number: "05",
    category: " ",
    title: "CNCM",
    describtion:
      "Designed the backend for a copyright and neighboring rights management system. Implemented user permissions, work registration, and royalty distribution logic.",
    // stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/thumbnail.jpg",
    live: "https://cncmethiopia.com/",
    gitub: "",
  },
  {
    number: "06",
    category: " ",
    title: "MPSS Client",
    describtion:
      "Built and maintained core frontend modules for a hospital management system handling attendance, scheduling, HR, and payroll workflows. Designed interactive dashboards and integrated with backend HR services.",
    // stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/thumbnail.jpg",
    live: " ",
    gitub: "",
  },
  {
    number: "07",
    category: " ",
    title: "ALERT Comprehensive Specialized Hospital ",
    describtion:
      " Developed a dynamic public-facing website for hospital news, announcements, and online appointment bookings.",
    // stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/thumbnail.jpg",
    live: "https://alerthospital.gov.et/",
    gitub: "",
  },
  {
    number: "08",
    category: " ",
    title: "HypsooPharma",
    describtion:
      "Developed core functionalities for a medicine delivery platform connecting users to nearby pharmacies. Contributed to both UI and backend logic for order management and pharmacy lookup features.",
    // stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/thumbnail.jpg",
    live: "",
    gitub: "",
  },
  {
    number: "09",
    category: " ",
    title: "Marketing & UI/UX Design",
    describtion:
      " Delivered visual assets and design systems for internal and client projects. Created interactive wireframes and prototypes for web and mobile applications.",
    // stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/thumbnail.jpg",
    live: "",
    gitub: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.number}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <p className=" text-white/60">{project.describtion}</p>
              {/* <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul> */}
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link> */}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt="thumbinail"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[28px] h-[28px] xl:w-[44px] xl:h-[44px] flex justify-center items-center transition-all"
                iconsStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
