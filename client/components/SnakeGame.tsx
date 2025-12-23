import { useState, useEffect, useCallback, useRef } from "react";
import { Terminal, RefreshCcw, LogOut, ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

type Point = { x: number; y: number };

interface SnakeGameProps {
    isOpen: boolean;
    onExit: () => void;
}

export const SnakeGame = ({ isOpen, onExit }: SnakeGameProps) => {
  const gridSize = 20;
  const [snake, setSnake] = useState<Point[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Point>({ x: 5, y: 5 });
  const [direction, setDirection] = useState<Point>({ x: 0, y: -1 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("vault_snake_highscore");
      return saved ? parseInt(saved, 10) : 0;
    }
    return 0;
  });

  const gameLoopRef = useRef<number>(); 
  const lastUpdateTimeRef = useRef<number>(0);
  const gameSpeedRef = useRef<number>(150); 

  // Save High Score whenever it changes
  useEffect(() => {
    if (highScore > 0) {
      localStorage.setItem("vault_snake_highscore", highScore.toString());
    }
  }, [highScore]);

  const generateFood = useCallback((): Point => {
    let newFood: Point;
    do {
      newFood = {
        x: Math.floor(Math.random() * gridSize),
        y: Math.floor(Math.random() * gridSize)
      };
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  }, [snake]);

  const resetGame = useCallback(() => {
    setSnake([{ x: 10, y: 10 }]);
    setFood(generateFood());
    setDirection({ x: 0, y: -1 });
    setGameOver(false);
    setScore(0);
    lastUpdateTimeRef.current = 0;
  }, [generateFood]);

  const moveSnake = useCallback(() => {
    if (gameOver) return;

    setSnake((prev) => {
      const newHead = {
        x: (prev[0].x + direction.x + gridSize) % gridSize,
        y: (prev[0].y + direction.y + gridSize) % gridSize
      };

      if (prev.slice(1).some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
        setGameOver(true);
        return prev;
      }

      const newSnake = [newHead, ...prev];

      if (newHead.x === food.x && newHead.y === food.y) {
        setScore(s => {
          const newScore = s + 10;
          setHighScore(prev => Math.max(prev, newScore));
          return newScore;
        });
        setFood(generateFood());
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, gameOver, generateFood]);

  useEffect(() => {
    if (!isOpen) {
        cancelAnimationFrame(gameLoopRef.current as number);
        return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
      }

      if (!gameOver) {
        switch (e.key) {
          case "ArrowUp": if (direction.y !== 1) setDirection({ x: 0, y: -1 }); break;
          case "ArrowDown": if (direction.y !== -1) setDirection({ x: 0, y: 1 }); break;
          case "ArrowLeft": if (direction.x !== 1) setDirection({ x: -1, y: 0 }); break;
          case "ArrowRight": if (direction.x !== -1) setDirection({ x: 1, y: 0 }); break;
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction, gameOver, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      cancelAnimationFrame(gameLoopRef.current as number);
      return;
    }

    if (!gameOver) {
      gameSpeedRef.current = 150 - Math.min(score / 2, 120);
      const animate = (currentTime: number) => {
        if (!lastUpdateTimeRef.current) lastUpdateTimeRef.current = currentTime;
        const deltaTime = currentTime - lastUpdateTimeRef.current;

        if (deltaTime > gameSpeedRef.current) {
          lastUpdateTimeRef.current = currentTime - (deltaTime % gameSpeedRef.current);
          moveSnake();
        }
        gameLoopRef.current = requestAnimationFrame(animate);
      };

      gameLoopRef.current = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(gameLoopRef.current as number);
    }

    return () => {
      cancelAnimationFrame(gameLoopRef.current as number);
    };
  }, [moveSnake, gameOver, score, isOpen]);

  const handleExit = useCallback(() => {
    resetGame();
    onExit();
  }, [onExit, resetGame]);

  const handleControl = (newDir: Point) => {
    if (gameOver) return;
    // Prevent reverse direction
    if (newDir.x !== 0 && newDir.x === -direction.x) return;
    if (newDir.y !== 0 && newDir.y === -direction.y) return;
    setDirection(newDir);
  };

  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ type: "spring", damping: 15, stiffness: 200 }}
      className="relative w-full max-w-2xl min-h-[85vh] sm:min-h-[600px] bg-[#030712] border-4 border-primary/30 rounded-xl overflow-y-auto shadow-[0_0_50px_rgba(0,255,65,0.2)] flex flex-col items-center p-4 sm:p-8"
    >
        <main className="flex flex-col items-center gap-6 py-10 px-2 w-full max-w-2xl mt-4">
          {/* Header */}
          <div className="flex flex-col items-center gap-2 border-b-2 border-primary/20 pb-4 w-full relative">
            <button 
              onClick={handleExit}
              className="absolute left-0 top-0 flex items-center gap-2 px-2 py-1 bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 text-red-500 font-mono text-sm uppercase transition-all rounded"
            >
              <LogOut className="h-3 w-3" />
              <span className="hidden sm:inline">EXIT_SYSTEM</span>
              <span className="sm:hidden">EXIT</span>
            </button>

            <div className="flex items-center gap-2 text-primary/40 text-[10px] font-mono uppercase tracking-widest">
              <Terminal className="h-3 w-3" />
              <span>Subroutine: Snake.exe</span>
            </div>
            <h1 className="font-mono text-3xl sm:text-5xl text-primary drop-shadow-[0_0_15px_rgba(0,255,65,0.4)] tracking-tighter">
              SNAKE_V4.0
            </h1>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="bg-[#0a0f0a] border border-primary/20 p-3 rounded-lg flex items-center justify-between">
              <span className="font-mono text-sm text-primary/50">SCORE:</span>
              <span className="font-mono text-2xl text-primary">{score.toString().padStart(4, '0')}</span>
            </div>
            <div className="bg-[#0a0f0a] border border-primary/20 p-3 rounded-lg flex items-center justify-between">
              <span className="font-mono text-sm text-primary/50">HIGH:</span>
              <span className="font-mono text-2xl text-primary">{highScore.toString().padStart(4, '0')}</span>
            </div>
          </div>

          {/* Game Board Container */}
          <div className="relative w-full max-w-[400px] aspect-square">
            <div 
              className="relative w-full h-full bg-[#030712] border-4 border-primary/30 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,255,65,0.1)]"
              style={{ contain: 'layout style paint' }}
            >
              <div 
                className="absolute inset-0 z-10 opacity-10" 
                style={{
                  backgroundSize: `${100/gridSize}% ${100/gridSize}%`,
                  backgroundImage: `linear-gradient(to right, ${'rgba(0,255,65,0.15)'} 1px, transparent 1px), linear-gradient(to bottom, ${'rgba(0,255,65,0.15)'} 1px, transparent 1px)`,
                  contain: 'strict'
                }}
              />
  
              <div className="absolute inset-0 z-20 pointer-events-none opacity-20">
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />
              </div>
  
              {snake.map((segment, i) => (
                <motion.div 
                  key={`${segment.x}-${segment.y}-${i}`}
                  className="absolute bg-primary"
                  style={{
                    width: `${100/gridSize}%`,
                    height: `${100/gridSize}%`,
                    left: `${(segment.x * 100) / gridSize}%`,
                    top: `${(segment.y * 100) / gridSize}%`,
                    boxShadow: `0 0 5px rgba(0,255,65,${i === 0 ? 0.8 : 0.4})`,
                    zIndex: snake.length - i,
                    imageRendering: 'pixelated',
                  }}
                >
                  {i === 0 && (
                    <>
                      <div className="absolute w-full h-full flex items-center justify-center">
                        <div className="w-1/3 h-1/3 bg-black rounded-full shadow-[0_0_5px_rgba(0,0,0,0.8)] animate-pulse" />
                      </div>
                      <div
                        className="absolute w-[10%] h-[10%] bg-white rounded-full"
                        style={{ 
                          top: direction.y === -1 ? '20%' : direction.y === 1 ? '80%' : '50%', 
                          left: direction.x === -1 ? '20%' : direction.x === 1 ? '80%' : '35%',
                          transform: 'translate(-50%, -50%)',
                          boxShadow: '0 0 2px white'
                        }}
                      />
                      <div
                        className="absolute w-[10%] h-[10%] bg-white rounded-full"
                        style={{ 
                          top: direction.y === -1 ? '20%' : direction.y === 1 ? '80%' : '50%', 
                          left: direction.x === 1 ? '80%' : direction.x === -1 ? '20%' : '65%',
                          transform: 'translate(-50%, -50%)',
                          boxShadow: '0 0 2px white'
                        }}
                      />
                    </>
                  )}
                </motion.div>
              ))}
  
              <motion.div 
                key={`${food.x}-${food.y}`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: [1, 0.8, 1], scale: [1.2, 1, 1.2] }}
                transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                className="absolute bg-[#ffaa00] shadow-[0_0_15px_#ffaa00]"
                style={{
                  width: `${100/gridSize}%`,
                  height: `${100/gridSize}%`,
                  left: `${(food.x * 100) / gridSize}%`,
                  top: `${(food.y * 100) / gridSize}%`,
                  imageRendering: 'pixelated',
                }}
              >
                <div className="absolute inset-1/4 w-1/2 h-1/2 bg-white/70 animate-pulse" />
              </motion.div>

              {gameOver && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 z-30 bg-black/90 flex flex-col items-center justify-center p-4 text-center backdrop-blur-sm"
                >
                  <motion.h2 
                    animate={{ x: [0, 5, -5, 0] }}
                    transition={{ duration: 0.2, repeat: 3 }}
                    className="font-mono text-4xl text-red-500 mb-2 drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]"
                  >
                    SYSTEM_FAILURE
                  </motion.h2>
                  <p className="font-mono text-sm text-red-500/60 mb-6 uppercase">
                    Interrupted_Session
                  </p>
                  <button 
                    onClick={resetGame}
                    className="flex items-center gap-3 px-6 py-2 bg-red-500/10 border border-red-500/40 hover:bg-red-500/20 text-red-500 font-mono text-xl uppercase transition-all"
                  >
                    <RefreshCcw className="h-4 w-4" />
                    REBOOT
                  </button>
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile Controls (D-pad) */}
          <div className="grid grid-cols-3 gap-2 sm:hidden mt-4">
            <div />
            <button 
              onClick={() => handleControl({ x: 0, y: -1 })}
              className="w-14 h-14 bg-primary/10 border-2 border-primary/30 rounded-lg flex items-center justify-center text-primary active:bg-primary active:text-black transition-all"
            >
              <ChevronUp className="w-8 h-8" />
            </button>
            <div />
            
            <button 
              onClick={() => handleControl({ x: -1, y: 0 })}
              className="w-14 h-14 bg-primary/10 border-2 border-primary/30 rounded-lg flex items-center justify-center text-primary active:bg-primary active:text-black transition-all"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button 
              onClick={() => handleControl({ x: 0, y: 1 })}
              className="w-14 h-14 bg-primary/10 border-2 border-primary/30 rounded-lg flex items-center justify-center text-primary active:bg-primary active:text-black transition-all"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
            <button 
              onClick={() => handleControl({ x: 1, y: 0 })}
              className="w-14 h-14 bg-primary/10 border-2 border-primary/30 rounded-lg flex items-center justify-center text-primary active:bg-primary active:text-black transition-all"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          <div className="font-mono text-primary/30 text-[10px] uppercase tracking-[0.2em] text-center hidden sm:block">
            [ USE_ARROW_KEYS_TO_NAVIGATE ]
          </div>
        </main>
      </motion.div>
  );
};