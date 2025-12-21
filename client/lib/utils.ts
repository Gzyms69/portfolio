import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Tech tag color and icon mapping using Skill Icons slugs
export const techColors: Record<string, { bg: string; text: string; border: string; hover: string; icon: string; hex: string }> = {
  Python: { bg: "bg-yellow-500/20", text: "text-yellow-300", border: "border-yellow-500/40", hover: "hover:bg-yellow-500/30", icon: "python", hex: "fde047" },
  React: { bg: "bg-cyan-400/20", text: "text-cyan-300", border: "border-cyan-400/40", hover: "hover:bg-cyan-400/30", icon: "react", hex: "67e8f9" },
  TypeScript: { bg: "bg-blue-600/20", text: "text-blue-300", border: "border-blue-600/40", hover: "hover:bg-blue-600/30", icon: "ts", hex: "60a5fa" },
  FastAPI: { bg: "bg-emerald-500/20", text: "text-emerald-300", border: "border-emerald-500/40", hover: "hover:bg-emerald-500/30", icon: "fastapi", hex: "6ee7b7" },
  "Node.js": { bg: "bg-green-600/20", text: "text-green-300", border: "border-green-600/40", hover: "hover:bg-green-600/30", icon: "nodejs", hex: "86efac" },
  Docker: { bg: "bg-blue-500/20", text: "text-blue-300", border: "border-blue-500/40", hover: "hover:bg-blue-500/30", icon: "docker", hex: "60a5fa" },
  "Tailwind CSS": { bg: "bg-cyan-500/20", text: "text-cyan-300", border: "border-cyan-500/40", hover: "hover:bg-cyan-500/30", icon: "tailwind", hex: "67e8f9" },
  TailwindCSS: { bg: "bg-cyan-500/20", text: "text-cyan-300", border: "border-cyan-400/40", hover: "hover:bg-cyan-500/30", icon: "tailwind", hex: "67e8f9" },
  SQL: { bg: "bg-orange-500/20", text: "text-orange-300", border: "border-orange-500/40", hover: "hover:bg-orange-500/30", icon: "mysql", hex: "fdba74" },
  "MS SQL Server": { bg: "bg-orange-500/20", text: "text-orange-300", border: "border-orange-500/40", hover: "hover:bg-orange-500/30", icon: "mysql", hex: "fdba74" },
  Express: { bg: "bg-gray-400/20", text: "text-gray-300", border: "border-gray-400/40", hover: "hover:bg-gray-400/30", icon: "express", hex: "d1d5db" },
  Vite: { bg: "bg-purple-500/20", text: "text-purple-300", border: "border-purple-500/40", hover: "hover:bg-purple-500/30", icon: "vite", hex: "d8b4fe" },
  "VS Code API": { bg: "bg-blue-400/20", text: "text-blue-300", border: "border-blue-400/40", hover: "hover:bg-blue-400/30", icon: "vscode", hex: "93c5fd" },
  OpenRouter: { bg: "bg-indigo-500/20", text: "text-indigo-300", border: "border-indigo-500/40", hover: "hover:bg-indigo-500/30", icon: "ai", hex: "a5b4fc" },
  "Kimi K2": { bg: "bg-pink-500/20", text: "text-pink-300", border: "border-pink-500/40", hover: "hover:bg-pink-500/30", icon: "ai", hex: "f9a8d4" },
  "Radix UI": { bg: "bg-rose-500/20", text: "text-rose-300", border: "border-rose-500/40", hover: "hover:bg-rose-500/30", icon: "react", hex: "fda4af" },
  Rust: { bg: "bg-orange-700/20", text: "text-orange-400", border: "border-orange-700/40", hover: "hover:bg-orange-700/30", icon: "rust", hex: "fb923c" },
  CLI: { bg: "bg-zinc-500/20", text: "text-zinc-300", border: "border-zinc-500/40", hover: "hover:bg-zinc-500/30", icon: "powershell", hex: "d1d5db" },
  "Systems Programming": { bg: "bg-emerald-700/20", text: "text-emerald-400", border: "border-emerald-700/40", hover: "hover:bg-emerald-700/30", icon: "cpp", hex: "34d399" },
  "Binary Manipulation": { bg: "bg-rose-700/20", text: "text-rose-400", border: "border-rose-700/40", hover: "hover:bg-rose-700/30", icon: "c", hex: "fb7185" },
};

export const getTechColor = (tech: string) => techColors[tech] || { bg: "bg-white/10", text: "text-medium", border: "border-white/20", hover: "hover:bg-white/15", icon: "", hex: "ffffff" };
