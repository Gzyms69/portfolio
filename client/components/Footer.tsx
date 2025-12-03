export const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-6 border-t border-white/10 py-20">
      <div className="text-center">
        <p className="text-weak">
          Brought to you by{" "}
          <span className="text-strong">Once UI</span>
        </p>
      </div>
      <div className="text-center">
        <p className="text-sm text-weak">
          Created by{" "}
          <span className="text-strong">Lorant Toth</span>
        </p>
      </div>
    </footer>
  );
};
