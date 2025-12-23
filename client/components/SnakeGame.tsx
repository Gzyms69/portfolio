import { useState, useEffect, useCallback, useRef } from "react";
import { Terminal, RefreshCcw, LogOut } from "lucide-react";
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
  const [highScore, setHighScore] = useState(0);
  const gameLoopRef = useRef<number>(); // Use number for requestAnimationFrame ID
  const lastUpdateTimeRef = useRef<number>(0);
  const gameSpeedRef = useRef<number>(150); // Initial interval in ms

  const generateFood = useCallback((): Point => {
    let newFood: Point;
    do {
      newFood = {
        x: Math.floor(Math.random() * gridSize),
        y: Math.floor(Math.random() * gridSize)
      };
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y)); // Ensure food doesn't spawn on snake
    return newFood;
  }, [snake]);

  const resetGame = useCallback(() => {
    setSnake([{ x: 10, y: 10 }]);
    setFood(generateFood());
    setDirection({ x: 0, y: -1 });
    setGameOver(false);
    setScore(0);
    lastUpdateTimeRef.current = 0; // Reset last update time for rAF
  }, [generateFood]);

  const moveSnake = useCallback(() => {
    if (gameOver) return;

    setSnake((prev) => {
      const newHead = {
        x: (prev[0].x + direction.x + gridSize) % gridSize,
        y: (prev[0].y + direction.y + gridSize) % gridSize
      };

      // Check collision with self AFTER calculating new head
      if (prev.slice(1).some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
        setGameOver(true);
        return prev;
      }

      const newSnake = [newHead, ...prev];

      // Check if food eaten
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
        cancelAnimationFrame(gameLoopRef.current as number); // Ensure rAF loop stops
        return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent scrolling the page with arrow keys
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
      }

      if (!gameOver) { // Only allow movement input if game is not over
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
  }, [direction, gameOver, isOpen]); // Added isOpen to dependencies

  useEffect(() => {
    if (!isOpen) {
      cancelAnimationFrame(gameLoopRef.current as number);
      return;
    }

    if (!gameOver) {
      gameSpeedRef.current = 150 - Math.min(score / 2, 120); // Update speed
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

  // Reset game state when modal closes
  const handleExit = useCallback(() => {
    resetGame();
    onExit();
  }, [onExit, resetGame]);

  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ type: "spring", damping: 15, stiffness: 200 }}
      className="relative w-full max-w-2xl min-h-[600px] bg-[#030712] border-4 border-primary/30 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,255,65,0.2)] flex flex-col items-center p-8"
    >
        
        <main className="flex flex-col items-center gap-8 py-20 px-4 w-full max-w-2xl mt-10">
          {/* Header */}
          <div className="flex flex-col items-center gap-2 border-b-2 border-primary/20 pb-4 w-full relative">
            <button 
              onClick={handleExit}
              className="absolute left-0 top-0 flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 text-red-500 font-['VT323'] text-lg uppercase transition-all rounded"
            >
              <LogOut className="h-4 w-4" />
              <span>EXIT_SYSTEM</span>
            </button>

            <div className="flex items-center gap-2 text-primary/40 text-xs font-mono uppercase tracking-widest">
              <Terminal className="h-4 w-4" />
              <span>System_Subroutine: Snake.exe</span>
            </div>
            <h1 className="font-['Major_Mono_Display'] text-4xl sm:text-6xl text-primary drop-shadow-[0_0_15px_rgba(0,255,65,0.4)]">
              SNAKE
            </h1>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="bg-[#0a0f0a] border border-primary/20 p-4 rounded-xl flex items-center justify-between">
              <span className="font-['VT323'] text-xl text-primary/50">SCORE:</span>
              <span className="font-['VT323'] text-3xl text-primary">{score.toString().padStart(4, '0')}</span>
            </div>
            <div className="bg-[#0a0f0a] border border-primary/20 p-4 rounded-xl flex items-center justify-between">
              <span className="font-['VT323'] text-xl text-primary/50">HIGH:</span>
              <span className="font-['VT323'] text-3xl text-primary">{highScore.toString().padStart(4, '0')}</span>
            </div>
          </div>

                      {/* Game Board */}
                    <div 
                      className="relative aspect-square w-full max-w-[500px] bg-[#030712] border-4 border-primary/30 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,255,65,0.1)]"
                      style={{ contain: 'layout style paint' }}
                    >
                      {/* Pixel Grid Overlay - More defined */}
                      <div 
                        className="absolute inset-0 z-10 opacity-10" 
                        style={{
                          backgroundSize: `${100/gridSize}% ${100/gridSize}%`,
                          backgroundImage: `linear-gradient(to right, ${'rgba(0,255,65,0.15)'} 1px, transparent 1px), linear-gradient(to bottom, ${'rgba(0,255,65,0.15)'} 1px, transparent 1px)`,
                          contain: 'strict'
                        }}
                      />
          
                      {/* CRT Effect Overlay */}
                      <div className="absolute inset-0 z-20 pointer-events-none opacity-20">
                         <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />
                      </div>
          
                      {/* Render Snake */}
                      {snake.map((segment, i) => (
                        <motion.div 
                          key={`${segment.x}-${segment.y}-${i}`} // More unique key
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.1 }}
                          className="absolute bg-primary"
                          style={{
                            width: `${100/gridSize}%`,
                            height: `${100/gridSize}%`,
                            left: `${(segment.x * 100) / gridSize}%`,
                            top: `${(segment.y * 100) / gridSize}%`,
                            boxShadow: `0 0 5px rgba(0,255,65,${i === 0 ? 0.8 : 0.4})`,
                            zIndex: snake.length - i,
                            imageRendering: 'pixelated',
                            willChange: 'transform, opacity'
                          }}
                        >
                          {/* Snake Head with Eyes */}
                          {i === 0 && (
                            <>
                              <div className="absolute w-full h-full flex items-center justify-center">
                                <div className="w-1/3 h-1/3 bg-black rounded-full shadow-[0_0_5px_rgba(0,0,0,0.8)] animate-pulse" />
                              </div>
                              {/* Eye 1 */}
                              <div
                                className="absolute w-[10%] h-[10%] bg-white rounded-full"
                                style={{ 
                                  top: direction.y === -1 ? '20%' : direction.y === 1 ? '80%' : '50%', 
                                  left: direction.x === -1 ? '20%' : direction.x === 1 ? '80%' : '35%',
                                  transform: 'translate(-50%, -50%)',
                                  boxShadow: '0 0 2px white'
                                }}
                              />
                               {/* Eye 2 */}
                              <div
                                className="absolute w-[10%] h-[10%] bg-white rounded-full"
                                style={{ 
                                  top: direction.y === -1 ? '20%' : direction.y === 1 ? '80%' : '50%', 
                                  left: direction.x === -1 ? '80%' : direction.x === 1 ? '20%' : '65%',
                                  transform: 'translate(-50%, -50%)',
                                  boxShadow: '0 0 2px white'
                                }}
                              />
                            </>
                          )}
                        </motion.div>
                      ))}
          
                      {/* Render Food - Pixelated 'Byte' */}
                      <motion.div 
                        key={`${food.x}-${food.y}`}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: [1, 0.8, 1], scale: [1.2, 1, 1.2] }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                        className="absolute bg-[#ffaa00] shadow-[0_0_15px_#ffaa00]"
                        style={{
                          width: `${100/gridSize}%`,
                          height: `${100/gridSize}%`,
                          left: `${(food.x * 100) / gridSize}%`,
                          top: `${(food.y * 100) / gridSize}%`,
                          imageRendering: 'pixelated',
                          willChange: 'transform, scale, opacity'
                        }}
                      >              {/* Inner pixel for food */}
              <div className="absolute inset-1/4 w-1/2 h-1/2 bg-white/70 animate-pulse" />
            </motion.div>

            {/* Game Over Overlay */}
            {gameOver && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0.8, 1],
                  filter: ["blur(0px)", "blur(2px)", "blur(0px)"]
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 z-30 bg-black/80 flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm"
              >
                {/* Glitch effect on Game Over text */}
                <motion.h2 
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, -5, 0] }}
                  transition={{ duration: 0.2, repeat: 3, repeatType: "mirror" }}
                  className="font-['Major_Mono_Display'] text-5xl text-red-500 mb-4 drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]"
                >
                  FAILED
                </motion.h2>
                <p className="font-['VT323'] text-2xl text-red-500/60 mb-8 lowercase text-shadow-[0_0_5px_rgba(255,0,0,0.5)]">
                  {'> connection_interrupted\n> system_failure_detected'}
                </p>
                <button 
                  onClick={resetGame}
                  className="flex items-center gap-3 px-8 py-3 bg-red-500/10 border border-red-500/40 hover:bg-red-500/20 text-red-500 font-['VT323'] text-2xl uppercase transition-all shadow-[0_0_15px_rgba(255,0,0,0.2)]"
                >
                  <RefreshCcw className="h-5 w-5" />
                  RESTART_SYSTEM
                </button>
              </motion.div>
            )}
          </div>


          <div className="font-['VT323'] text-primary/40 text-lg uppercase tracking-widest text-center">
            [ use arrow keys to navigate system ]
          </div>
        </main>
      </motion.div>
  );
};
