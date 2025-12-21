import { portfolioConfig } from "@/lib/data";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-6 border-t border-gray-700 py-20">
      <div className="text-center">
        <p className="text-weak">
          © {new Date().getFullYear()} {portfolioConfig.name}
        </p>
      </div>
    </footer>
  );
};
