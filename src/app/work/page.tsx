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
  // ---------- CLIENT PROJECTS ----------
  {
    number: "01",
    category: "Client Project",
    title: "ALIKAB Import Export",
    describtion:
      "Developed a modern, responsive website for ALIKAB IMPORT EXPORT showcasing services in trade, transport, agriculture, and consulting with a clean and professional UI.",
    image: "/alikab.png",
    live: "https://alikab-import-export.vercel.app/",
    gitub: "",
  },
  {
    number: "02",
    category: "Client Project",
    title: "Aymax Trading",
    describtion:
      "Built a product-focused website for Aymax Trading highlighting high-quality wood products with an intuitive layout and strong branding.",
    image: "/aymax.png",
    live: "https://aymaxtrading.com/",
    gitub: "",
  },
  {
    number: "03",
    category: "Client Project",
    title: "Awura Tech PLC – Landing Page",
    describtion:
      "Created a clean, modern landing page for Awura Computing PLC to present their technology services and innovative solutions.",
    image: "/awura.png",
    live: "https://awuratech.netlify.app/",
    gitub: "",
  },

  // ---------- PERSONAL PROJECTS ----------
  {
    number: "04",
    category: "Personal Project",
    title: "Moviemonia – Movie Landing Page",
    describtion:
      "Designed an engaging movie-themed landing page with smooth animations, responsive layout, and an attractive design.",
    image: "/moviemonia.png",
    live: "https://moviemonia.netlify.app/",
    gitub: "",
  },
  {
    number: "05",
    category: "Personal Project",
    title: "Personal Portfolio",
    describtion:
      "Developed a fully responsive portfolio website showcasing my projects, skills, and experience with a modern UI.",
    image: "/personal.png",
    live: "https://abateprotfolio.netlify.app/",
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
                          alt={project.title}
                          fill
                          style={{ objectFit: "contain" }} // <-- make full image visible
                          className="rounded-md" // optional: rounded corners
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
