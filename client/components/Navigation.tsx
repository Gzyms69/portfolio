import { Home, Palette, Linkedin, Github } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="fixed left-5 top-1/2 hidden -translate-y-1/2 flex-col gap-3 rounded-[5rem] border border-white/10 bg-gradient-to-b from-white/5 via-white/2 to-white/0 p-1 backdrop-blur-[20px] sm:flex">
        {/* Home */}
        <div className="relative flex h-14 w-12 items-center justify-center">
          {isActive('/') && <div className="absolute inset-0 rounded-3xl bg-white/10"></div>}
          <button
            onClick={() => navigate('/')}
            className="relative z-10 flex h-14 w-12 items-center justify-center rounded-3xl transition-all hover:bg-white/20"
          >
            <Home className={`h-8 w-8 transition-colors ${isActive('/') ? 'text-white' : 'text-medium'}`} strokeWidth={1} />
          </button>
          {isActive('/') && <div className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-white"></div>}
        </div>

        {/* Portfolio/Projects */}
        <button
          onClick={() => navigate('/#projects')}
          className="flex h-12 w-12 items-center justify-center rounded-3xl transition-all hover:bg-white/10"
        >
          <Palette className="h-6 w-6 text-medium" strokeWidth={1} />
        </button>

        {/* Separator */}
        <div className="mx-auto my-2 h-px w-8 bg-medium opacity-60"></div>

        {/* LinkedIn */}
        <button
          onClick={() => handleExternalLink('https://linkedin.com/in/your-profile')}
          className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gray-800 transition-all hover:bg-gray-700"
        >
          <Linkedin className="h-6 w-6 text-medium" strokeWidth={1} />
        </button>

        {/* GitHub */}
        <button
          onClick={() => handleExternalLink('https://github.com/Gzyms69')}
          className="flex h-12 w-12 items-center justify-center rounded-3xl transition-all hover:bg-white/10"
        >
          <Github className="h-6 w-6 text-medium" strokeWidth={1} />
        </button>
      </nav>

      {/* Mobile Top Navigation Bar */}
      <nav className="fixed inset-x-5 top-5 flex items-center gap-3 rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-2 backdrop-blur-[20px] sm:hidden">
        <button
          onClick={() => navigate('/')}
          className={`flex items-center justify-center rounded-2xl p-2 transition-all ${
            isActive('/') ? 'bg-white/20' : 'bg-white/10'
          } hover:bg-white/20`}
        >
          <Home className={`h-6 w-6 transition-colors ${isActive('/') ? 'text-white' : 'text-medium'}`} strokeWidth={1} />
        </button>
        <button
          onClick={() => navigate('/#projects')}
          className="flex items-center justify-center rounded-2xl p-2 transition-all hover:bg-white/10"
        >
          <Palette className="h-6 w-6 text-medium" strokeWidth={1} />
        </button>
        <div className="flex-1"></div>
        <button
          onClick={() => handleExternalLink('https://linkedin.com/in/your-profile')}
          className="flex items-center justify-center rounded-2xl p-2 transition-all hover:bg-white/10"
        >
          <Linkedin className="h-6 w-6 text-medium" strokeWidth={1} />
        </button>
        <button
          onClick={() => handleExternalLink('https://github.com/Gzyms69')}
          className="flex items-center justify-center rounded-2xl p-2 transition-all hover:bg-white/10"
        >
          <Github className="h-6 w-6 text-medium" strokeWidth={1} />
        </button>
      </nav>
    </>
  );
};
