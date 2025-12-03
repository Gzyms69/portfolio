import { Home, Palette, Github, Eye } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "@/hooks/use-theme";

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toggleTheme } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleProjectsScroll = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleHomeScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="fixed left-5 top-1/2 hidden -translate-y-1/2 flex-col gap-3 rounded-[5rem] border border-white/10 bg-gradient-to-b from-white/5 via-white/2 to-white/0 p-1 backdrop-blur-[20px] sm:flex">
        {/* Home */}
        <div className="relative flex h-14 w-12 items-center justify-center">
          {isActive('/') && <div className="absolute inset-0 rounded-3xl bg-white/10"></div>}
          <button
            onClick={handleHomeScroll}
            className="relative z-10 flex h-14 w-12 items-center justify-center rounded-3xl transition-all duration-200 hover:bg-white/20 hover:scale-110 active:scale-95"
          >
            <Home className={`h-8 w-8 transition-colors ${isActive('/') ? 'text-white' : 'text-medium'}`} strokeWidth={1} />
          </button>
          {isActive('/') && <div className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-white"></div>}
        </div>

        {/* Projects */}
        <button
          onClick={handleProjectsScroll}
          className="flex h-12 w-12 items-center justify-center rounded-3xl transition-all duration-200 hover:bg-white/10 hover:scale-110 active:scale-95 transform"
        >
          <Eye className="h-6 w-6 text-medium" strokeWidth={1} />
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="flex h-12 w-12 items-center justify-center rounded-3xl transition-all duration-200 hover:bg-white/10 hover:scale-110 active:scale-95 transform"
        >
          <Palette className="h-6 w-6 text-medium" strokeWidth={1} />
        </button>

        {/* Separator */}
        <div className="mx-auto my-2 h-px w-8 bg-medium opacity-60"></div>

        {/* GitHub */}
        <button
          onClick={() => handleExternalLink('https://github.com/Gzyms69')}
          className="flex h-12 w-12 items-center justify-center rounded-3xl transition-all duration-200 hover:bg-white/10 hover:scale-110 active:scale-95 transform group"
        >
          <Github className="h-6 w-6 text-medium transition-transform group-hover:rotate-12" strokeWidth={1} />
        </button>
      </nav>

      {/* Mobile Top Navigation Bar */}
      <nav className="fixed inset-x-5 top-5 flex items-center gap-3 rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-2 backdrop-blur-[20px] sm:hidden">
        <button
          onClick={handleHomeScroll}
          className={`flex items-center justify-center rounded-2xl p-2 transition-all duration-200 ${
            isActive('/') ? 'bg-white/20' : 'bg-white/10'
          } hover:bg-white/20 hover:scale-110 active:scale-95`}
        >
          <Home className={`h-6 w-6 transition-colors ${isActive('/') ? 'text-white' : 'text-medium'}`} strokeWidth={1} />
        </button>
        <button
          onClick={handleProjectsScroll}
          className="flex items-center justify-center rounded-2xl p-2 transition-all duration-200 hover:bg-white/10 hover:scale-110 active:scale-95"
        >
          <Eye className="h-6 w-6 text-medium" strokeWidth={1} />
        </button>
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center rounded-2xl p-2 transition-all duration-200 hover:bg-white/10 hover:scale-110 active:scale-95"
        >
          <Palette className="h-6 w-6 text-medium" strokeWidth={1} />
        </button>
        <div className="flex-1"></div>
        <button
          onClick={() => handleExternalLink('https://github.com/Gzyms69')}
          className="flex items-center justify-center rounded-2xl p-2 transition-all duration-200 hover:bg-white/10 hover:scale-110 active:scale-95"
        >
          <Github className="h-6 w-6 text-medium" strokeWidth={1} />
        </button>
      </nav>
    </>
  );
};
