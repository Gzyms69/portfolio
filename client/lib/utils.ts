import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Tech tag color mapping
export const techColors: Record<string, { bg: string; text: string; border: string; hover: string }> = {
  Python: { bg: "bg-yellow-500/20", text: "text-yellow-300", border: "border-yellow-500/40", hover: "hover:bg-yellow-500/30" },
  React: { bg: "bg-cyan-400/20", text: "text-cyan-300", border: "border-cyan-400/40", hover: "hover:bg-cyan-400/30" },
  TypeScript: { bg: "bg-blue-600/20", text: "text-blue-300", border: "border-blue-600/40", hover: "hover:bg-blue-600/30" },
  FastAPI: { bg: "bg-emerald-500/20", text: "text-emerald-300", border: "border-emerald-500/40", hover: "hover:bg-emerald-500/30" },
  "Node.js": { bg: "bg-green-600/20", text: "text-green-300", border: "border-green-600/40", hover: "hover:bg-green-600/30" },
  Docker: { bg: "bg-blue-500/20", text: "text-blue-300", border: "border-blue-500/40", hover: "hover:bg-blue-500/30" },
  "Tailwind CSS": { bg: "bg-cyan-500/20", text: "text-cyan-300", border: "border-cyan-500/40", hover: "hover:bg-cyan-500/30" },
  TailwindCSS: { bg: "bg-cyan-500/20", text: "text-cyan-300", border: "border-cyan-500/40", hover: "hover:bg-cyan-500/30" },
  SQL: { bg: "bg-orange-500/20", text: "text-orange-300", border: "border-orange-500/40", hover: "hover:bg-orange-500/30" },
  "MS SQL Server": { bg: "bg-orange-500/20", text: "text-orange-300", border: "border-orange-500/40", hover: "hover:bg-orange-500/30" },
  Express: { bg: "bg-gray-400/20", text: "text-gray-300", border: "border-gray-400/40", hover: "hover:bg-gray-400/30" },
  Vite: { bg: "bg-purple-500/20", text: "text-purple-300", border: "border-purple-500/40", hover: "hover:bg-purple-500/30" },
  "VS Code API": { bg: "bg-blue-400/20", text: "text-blue-300", border: "border-blue-400/40", hover: "hover:bg-blue-400/30" },
  OpenRouter: { bg: "bg-indigo-500/20", text: "text-indigo-300", border: "border-indigo-500/40", hover: "hover:bg-indigo-500/30" },
  "Kimi K2": { bg: "bg-pink-500/20", text: "text-pink-300", border: "border-pink-500/40", hover: "hover:bg-pink-500/30" },
  "Radix UI": { bg: "bg-rose-500/20", text: "text-rose-300", border: "border-rose-500/40", hover: "hover:bg-rose-500/30" },
};

export const getTechColor = (tech: string) => techColors[tech] || { bg: "bg-white/10", text: "text-medium", border: "border-white/20", hover: "hover:bg-white/15" };
