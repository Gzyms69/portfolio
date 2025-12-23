import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#030712] font-['VT323'] text-primary">
      <div className="text-center p-8 border-2 border-primary/20 bg-primary/5 rounded-lg shadow-[0_0_30px_rgba(0,255,65,0.1)]">
        <h1 className="text-6xl font-bold mb-4 animate-pulse">404</h1>
        <p className="text-2xl mb-8 uppercase tracking-widest text-primary/60">{'>'} SECTOR_NOT_FOUND</p>
        <Link 
          to="/" 
          className="px-6 py-3 bg-primary/10 border border-primary/40 hover:bg-primary/20 text-primary text-xl uppercase transition-all inline-block"
        >
          [ RETURN_TO_BASE ]
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
