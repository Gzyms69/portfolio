import { BookOpen, Bot } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";

// Project data
const projects = [
  {
    title: "BookShop Library",
    description: "Full-stack library management system with Python FastAPI, React TypeScript, and MS SQL Server in Docker",
    fullDescription: "A comprehensive full-stack portfolio project demonstrating modern web development with Python FastAPI, React TypeScript, and MS SQL Server in a Dockerized environment. Implements a hybrid bookshop/library system with inventory management, e-commerce capabilities, and real-time analytics. Features include: real-time inventory tracking, multi-type item support (books, movies, board games, magazines), admin dashboard with full CRUD operations, REST API with automatic OpenAPI documentation, type-safe full-stack development, and session-based caching with request deduplication.",
    githubUrl: "https://github.com/Gzyms69/bookshop-library",
    techStack: ["Python", "FastAPI", "React", "TypeScript", "MS SQL Server", "Docker", "Tailwind CSS"],
    variant: "design" as const,
    icon: <BookOpen className="h-8 w-8 text-gray-600 flex-shrink-0" />
  },
  {
    title: "Kimi K2 Agent",
    description: "AI-powered VS Code extension for automation - execute tasks through natural language and manage files",
    fullDescription: "AI-powered automation extension for VS Code using Kimi K2 model. Execute tasks through natural language, manage files and run terminal commands, getting AI-formatted results. Features include: natural language task execution, advanced file operations, terminal integration with intelligent output formatting, chat interface for code questions, error recovery with comprehensive debugging, and support for multiple AI models (Kimi K2, Claude, GPT-4o, Gemini) via OpenRouter API.",
    githubUrl: "https://github.com/Gzyms69/kimi-k2-agent",
    techStack: ["TypeScript", "VS Code API", "OpenRouter", "Kimi K2", "Node.js"],
    variant: "photography" as const,
    icon: <Bot className="h-8 w-8 text-gray-600 flex-shrink-0" />
  }
];

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
            <div className="glass-card flex max-w-2xl flex-col gap-8 sm:gap-10 p-8 sm:p-10 md:p-14 cursor-pointer transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-2xl">
              <h1 className="text-3xl font-semibold text-strong sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                Dawid Czerwiński
              </h1>
              <p className="text-weak text-base leading-relaxed sm:text-lg md:text-xl">
                Welcome to my digital universe as a{" "}
                <span className="text-strong">full-stack developer</span> specializing in
                modern web technologies and AI integration. I craft{" "}
                <span className="text-strong">innovative software solutions</span>,{" "}
                <span className="text-strong">scalable architectures</span>, and{" "}
                <span className="text-strong">intelligent automation systems</span> that push
                the boundaries of what's possible. With expertise in Python, React, and cloud
                technologies, I transform complex problems into elegant, performant applications
                that deliver real value to users and businesses.
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
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  fullDescription={project.fullDescription}
                  githubUrl={project.githubUrl}
                  techStack={project.techStack}
                  variant={project.variant}
                  icon={project.icon}
                />
              ))}
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </div>
  );
}
