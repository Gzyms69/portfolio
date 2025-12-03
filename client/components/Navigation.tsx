import { Home, Palette, Linkedin, Github } from "lucide-react";

export const Navigation = () => {
  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="fixed left-5 top-1/2 hidden -translate-y-1/2 flex-col gap-3 rounded-[5rem] border border-white/10 bg-gradient-to-b from-white/5 via-white/2 to-white/0 p-1 backdrop-blur-[20px] sm:flex">
        {/* Home - Selected */}
        <div className="relative flex h-14 w-12 items-center justify-center">
          <div className="absolute inset-0 rounded-3xl bg-white/10"></div>
          <button className="relative z-10 flex h-14 w-12 items-center justify-center rounded-3xl transition-all hover:bg-white/20">
            <Home className="h-8 w-8 text-gray-500" strokeWidth={1} />
          </button>
          <div className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gray-500"></div>
        </div>

        {/* Palette */}
        <button className="flex h-12 w-12 items-center justify-center rounded-3xl transition-all hover:bg-white/10">
          <Palette className="h-6 w-6 text-gray-600" strokeWidth={1} />
        </button>

        {/* Separator */}
        <div className="mx-auto my-2 h-px w-8 bg-gray-600"></div>

        {/* LinkedIn */}
        <button className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gray-800 transition-all hover:bg-gray-700">
          <Linkedin className="h-6 w-6 text-gray-600" strokeWidth={1} />
        </button>

        {/* GitHub */}
        <button className="flex h-12 w-12 items-center justify-center rounded-3xl transition-all hover:bg-white/10">
          <Github className="h-6 w-6 text-gray-600" strokeWidth={1} />
        </button>
      </nav>

      {/* Mobile Top Navigation Bar */}
      <nav className="fixed inset-x-5 top-5 flex items-center gap-3 rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-2 backdrop-blur-[20px] sm:hidden">
        <button className="flex items-center justify-center rounded-2xl bg-white/10 p-2 transition-all hover:bg-white/20">
          <Home className="h-6 w-6 text-gray-400" strokeWidth={1} />
        </button>
        <button className="flex items-center justify-center rounded-2xl p-2 transition-all hover:bg-white/10">
          <Palette className="h-6 w-6 text-gray-600" strokeWidth={1} />
        </button>
        <div className="flex-1"></div>
        <button className="flex items-center justify-center rounded-2xl p-2 transition-all hover:bg-white/10">
          <Linkedin className="h-6 w-6 text-gray-600" strokeWidth={1} />
        </button>
        <button className="flex items-center justify-center rounded-2xl p-2 transition-all hover:bg-white/10">
          <Github className="h-6 w-6 text-gray-600" strokeWidth={1} />
        </button>
      </nav>
    </>
  );
};
