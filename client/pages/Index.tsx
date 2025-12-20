import { BookOpen, Bot, Zap } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";
import { getTechColor } from "@/lib/utils";
import { AnimatedText, AnimatedCharacters } from "@/components/AnimatedText";
import { StaggerContainer, StaggerItem } from "@/components/Reveal";

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
    variant: "design" as const,
    icon: <Bot className="h-8 w-8 text-gray-600 flex-shrink-0" />
  },
  {
    title: "Portfolio Website",
    description: "Modern, professional portfolio showcasing projects with glassmorphism design, smooth animations, and theme switching",
    fullDescription: "A modern, professional portfolio website built on the Fusion starter template featuring interactive project cards with expandable details. Built with React 18, TypeScript, and Vite for optimal performance. Includes a fully-developed backend with Express for server-side logic, comprehensive dark mode with glassmorphism styling, smooth animations throughout, light/dark theme switching, and responsive design. Features include: interactive project showcase, smooth scroll navigation, type-safe full-stack development, Tailwind CSS 3 styling system with custom design tokens, Radix UI component library, and seamless theme persistence.",
    githubUrl: "https://github.com/Gzyms69/portfolio",
    techStack: ["React", "TypeScript", "Vite", "TailwindCSS", "Express", "Node.js", "Radix UI"],
    variant: "design" as const,
    icon: <Zap className="h-8 w-8 text-gray-600 flex-shrink-0" />
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
              <AnimatedCharacters
                text="Dawid Czerwiński"
                className="text-3xl font-semibold animated-title sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
              />
              <AnimatedText
                text="Full-stack developer building web applications and automation tools. This portfolio showcases my projects, from a library management system to VS Code extensions. I enjoy working with Python, React, and TypeScript to create functional applications."
                className="text-weak text-base leading-relaxed sm:text-lg md:text-xl"
              />
              
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2">
                {["Python", "React", "TypeScript", "FastAPI", "Node.js", "Docker", "Tailwind CSS", "SQL"].map((tech, index) => {
                  const colors = getTechColor(tech);
                  return (
                    <span
                      key={index}
                      className={`px-3 py-1.5 text-sm rounded-full border transition-all duration-200 ${colors.bg} ${colors.text} ${colors.border} ${colors.hover}`}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="flex flex-col gap-10 sm:gap-12 relative">
            {/* Section Title */}
            <div className="px-8 sm:px-10 md:px-14 sticky top-24 z-20 backdrop-blur-sm py-4 rounded-2xl bg-background/50">
              <AnimatedCharacters
                text="Projects"
                className="text-3xl font-semibold text-strong sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
              />
            </div>

            {/* Project Cards Grid */}
            <div className="flex flex-col gap-20 sm:gap-32">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="sticky top-40 sm:top-48 md:top-56"
                  style={{ paddingTop: `${index * 20}px` }}
                >
                  <StaggerItem>
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      fullDescription={project.fullDescription}
                      githubUrl={project.githubUrl}
                      techStack={project.techStack}
                      variant={project.variant}
                      icon={project.icon}
                    />
                  </StaggerItem>
                </div>
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
