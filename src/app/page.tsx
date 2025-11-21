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
              <span className="text-accent">Abate Agegnehu</span>
            </h2>
            <p className="max-w-[500px] mb-9 text-white/80">
              Results-driven full-stack developer specializing in MERN, Next.js,
              and Spring Boot. Skilled in designing and building scalable,
              secure, and efficient backend systems, with a strong focus on
              clean architecture and API-first development. Experienced in
              developing end-to-end solutions using TypeScript, Node.js, React,
              PostgreSQL, MongoDB, and Prisma. Adept at transforming complex
              requirements into high-quality products, collaborating across
              teams, and applying best engineering practices. Passionate about
              creating reliable software that delivers real business value.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="https://drive.google.com/file/d/1ujLkesPYfWa-wvIvjijhzSNMAJMuNIFB/view?usp=drive_link"
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
