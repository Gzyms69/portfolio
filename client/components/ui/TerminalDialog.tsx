import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

interface TerminalDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText: string;
  cancelText: string;
}

export const TerminalDialog = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText,
  cancelText,
}: TerminalDialogProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
          {/* Dialog Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 15, stiffness: 200 }}
            className="relative w-full max-w-md bg-[#0a0f0a] border-2 border-primary/40 rounded-xl shadow-[0_0_30px_rgba(0,255,65,0.3)] overflow-hidden"
          >
            {/* CRT Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px]" />
            </div>

            {/* Corner Brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary m-2" />
            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-primary m-2" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-primary m-2" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary m-2" />

            {/* Header */}
            <div className="relative z-10 flex items-center gap-2 border-b border-primary/20 px-6 py-3 font-['VT323'] text-primary text-xl uppercase tracking-wider">
              <Terminal className="h-5 w-5" />
              <span>{title}</span>
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 text-primary/80 font-['VT323'] text-lg leading-relaxed whitespace-pre-wrap">
              <p>{message}</p>
            </div>

            {/* Buttons */}
            <div className="relative z-10 flex justify-end gap-4 border-t border-primary/20 px-6 py-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onConfirm}
                className="bg-primary/10 border border-primary/40 hover:bg-primary/20 text-primary font-['VT323'] text-lg uppercase px-5 py-2 rounded shadow-[0_0_10px_rgba(0,255,65,0.2)]"
              >
                {confirmText}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="bg-red-500/10 border border-red-500/40 hover:bg-red-500/20 text-red-500 font-['VT323'] text-lg uppercase px-5 py-2 rounded shadow-[0_0_10px_rgba(255,0,0,0.2)]"
              >
                {cancelText}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
