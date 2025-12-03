import { Grid3x3, Palette, Camera } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-dots-pattern">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="flex w-full justify-center px-4 sm:px-8 md:px-16 lg:px-20">
        <div className="w-full max-w-7xl py-8 sm:py-16 md:py-24 lg:py-32">
          {/* Hero/About Section */}
          <section className="mb-20 sm:mb-32 md:mb-40 flex flex-col gap-8 sm:gap-10">
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-700 flex max-w-2xl flex-col gap-8 sm:gap-10 p-8 sm:p-10 md:p-14">
              <h1 className="text-3xl font-semibold text-strong sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                Your name
              </h1>
              <p className="text-weak text-base leading-relaxed sm:text-lg md:text-xl">
                Welcome to the extraordinary world of{" "}
                <span className="text-strong">Your name</span>, a versatile
                and imaginative artist who skillfully navigates the realms of{" "}
                <span className="text-strong">product design</span>,{" "}
                <span className="text-strong">photography</span> and{" "}
                <span className="text-strong">digital art</span>. With a keen
                eye for detail and a relentless pursuit of innovation,{" "}
                <span className="text-strong">Your name</span> crafts
                captivating <span className="text-strong">visual narratives</span>
                , immersive <span className="text-strong">digital realms</span>,
                and functional yet{" "}
                <span className="text-strong">aesthetically pleasing products</span>.
              </p>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="flex flex-col gap-10 sm:gap-12">
            {/* Section Title */}
            <div className="px-8 sm:px-10 md:px-14">
              <h2 className="text-3xl font-semibold text-strong sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                Projects
              </h2>
            </div>

            {/* Project Cards Grid */}
            <div className="flex flex-col gap-8 sm:gap-10 xl:grid xl:grid-cols-3">
              {/* Design Card */}
              <ProjectCard
                title="Design"
                description="My design projects"
                variant="design"
                icon={
                  <Grid3x3 className="h-8 w-8 text-gray-600 flex-shrink-0" />
                }
              />

              {/* Art Card */}
              <ProjectCard
                title="Art"
                description="My art projects"
                variant="art"
                icon={
                  <Palette className="h-8 w-8 text-gray-600 flex-shrink-0" />
                }
              />

              {/* Photography Card */}
              <ProjectCard
                title="Photography"
                description="My photos"
                variant="photography"
                icon={
                  <Camera className="h-8 w-8 text-gray-600 flex-shrink-0" />
                }
              />
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </div>
  );
}
