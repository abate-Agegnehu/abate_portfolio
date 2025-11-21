"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
const services = [
  {
    number: "01",
    title: "Prompt Engineer",
    description:
      "Specialist in crafting effective AI prompts to optimize LLM responses for various applications.",
    href: "",
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Experienced in building scalable and secure backend systems using Node.js, Express, and databases like MongoDB & PostgreSQL.",
    href: "",
  },
  {
    number: "03",
    title: "Front End Development",
    description:
      "Expertise in creating responsive and interactive UI using React.js, Next.js, and Tailwind CSS.",
    href: "",
  },
  {
    number: "04",
    title: "Full Stack Development",
    description:
      "Building complete applications from front to back with seamless integration and clean architecture.",
    href: "",
  },
  {
    number: "05",
    title: "DevOps",
    description:
      "Implementing CI/CD pipelines, containerization with Docker, orchestration with Kubernetes, and cloud deployment.",
    href: "",
  },
  {
    number: "06",
    title: "Social Media Management",
    description:
      "Strategizing and managing content across platforms to grow brand presence and drive user engagement.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.number}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
