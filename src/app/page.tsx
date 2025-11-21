import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software developer</span>
            <h2 className="h2 mb-6">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Leliso Agegnehu</span>
            </h2>
            <p className="max-w-[500px] mb-9 text-white/80">
              Results-driven software engineer with 5 years of experience in
              backend-heavy full-stack development. Highly skilled in designing
              and implementing scalable, secure, and efficient backend systems
              using modern frameworks like Node.js, Remix, and Next.js.
              Demonstrated ability to lead complex projects from concept to
              deployment, with deep proficiency in TypeScript, PostgreSQL,
              Prisma, and BDD methodologies. Known for clean architecture,
              API-first design, and mentoring teams on best practices.
              Passionate about building robust solutions that drive business
              outcomes.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="https://drive.google.com/file/d/1dy_pDpt-O_NB4GdJ-wpUs9c0I6nXzEDS/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>

                  <FiDownload className="text-xl" />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-center text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
};

export default Home;
