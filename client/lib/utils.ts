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
  Git: { bg: "bg-orange-600/20", text: "text-orange-400", border: "border-orange-600/40", hover: "hover:bg-orange-600/30", icon: "git", hex: "f05032" },
  Linux: { bg: "bg-yellow-600/20", text: "text-yellow-400", border: "border-yellow-600/40", hover: "hover:bg-yellow-600/30", icon: "linux", hex: "fcc624" },
  Bash: { bg: "bg-zinc-700/20", text: "text-zinc-300", border: "border-zinc-700/40", hover: "hover:bg-zinc-700/30", icon: "bash", hex: "4eaa25" },
  JavaScript: { bg: "bg-yellow-400/20", text: "text-yellow-300", border: "border-yellow-400/40", hover: "hover:bg-yellow-400/30", icon: "js", hex: "f7df1e" },
  Tampermonkey: { bg: "bg-emerald-900/20", text: "text-emerald-400", border: "border-emerald-900/40", hover: "hover:bg-emerald-900/30", icon: "tampermonkey", hex: "004838" },
  "DOM Manipulation": { bg: "bg-purple-600/20", text: "text-purple-300", border: "border-purple-600/40", hover: "hover:bg-purple-600/30", icon: "html", hex: "e34f26" },
  Automation: { bg: "bg-orange-600/20", text: "text-orange-300", border: "border-orange-600/40", hover: "hover:bg-orange-600/30", icon: "githubactions", hex: "2088ff" },
  "Reverse Engineering": { bg: "bg-red-600/20", text: "text-red-300", border: "border-red-600/40", hover: "hover:bg-red-600/30", icon: "c", hex: "a8b9cc" },
  Emulation: { bg: "bg-fuchsia-600/20", text: "text-fuchsia-300", border: "border-fuchsia-600/40", hover: "hover:bg-fuchsia-600/30", icon: "wasm", hex: "654ff0" },
  "Client-side": { bg: "bg-blue-400/20", text: "text-blue-300", border: "border-blue-400/40", hover: "hover:bg-blue-400/30", icon: "html", hex: "e34f26" },
  "Local Storage": { bg: "bg-amber-600/20", text: "text-amber-300", border: "border-amber-600/40", hover: "hover:bg-amber-600/30", icon: "sqlite", hex: "003b57" },
  "AI-Augmented Workflow": { bg: "bg-indigo-600/20", text: "text-indigo-300", border: "border-indigo-600/40", hover: "hover:bg-indigo-600/30", icon: "copilot", hex: "ffffff" },
  ETL: { bg: "bg-green-600/20", text: "text-green-300", border: "border-green-600/40", hover: "hover:bg-green-600/30", icon: "kafka", hex: "231f20" },
  Neo4j: { bg: "bg-indigo-500/20", text: "text-indigo-300", border: "border-indigo-500/40", hover: "hover:bg-indigo-500/30", icon: "neo4j", hex: "008cc1" },
  Jira: { bg: "bg-blue-600/20", text: "text-blue-300", border: "border-blue-600/40", hover: "hover:bg-blue-600/30", icon: "jira", hex: "0052cc" },
  Excel: { bg: "bg-green-700/20", text: "text-green-400", border: "border-green-700/40", hover: "hover:bg-green-700/30", icon: "microsoftexcel", hex: "217346" },
  "API Integration": { bg: "bg-gray-500/20", text: "text-gray-300", border: "border-gray-500/40", hover: "hover:bg-gray-500/30", icon: "postman", hex: "ff6c37" },
  "Three.js": { bg: "bg-white/20", text: "text-white", border: "border-white/40", hover: "hover:bg-white/30", icon: "threejs", hex: "ffffff" },
};

export const getTechColor = (tech: string) => techColors[tech] || { bg: "bg-white/10", text: "text-medium", border: "border-white/20", hover: "hover:bg-white/15", icon: "", hex: "ffffff" };