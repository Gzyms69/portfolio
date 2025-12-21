import { useState, useEffect, useCallback, useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { PageTransition } from "@/components/PageTransition";
import { useLanguage } from "@/hooks/use-language";
import { Terminal, Trophy, RefreshCcw, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Point = { x: number; y: number };

export default function Snake() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const gridSize = 20;
  const [snake, setSnake] = useState<Point[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Point>({ x: 5, y: 5 });
  const [direction, setDirection] = useState<Point>({ x: 0, y: -1 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const gameLoopRef = useRef<NodeJS.Timeout>();

  const generateFood = useCallback((): Point => {
    return {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize)
    };
  }, []);

  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood(generateFood());
    setDirection({ x: 0, y: -1 });
    setGameOver(false);
    setScore(0);
  };

  const moveSnake = useCallback(() => {
    if (gameOver) return;

    setSnake((prev) => {
      const newHead = {
        x: (prev[0].x + direction.x + gridSize) % gridSize,
        y: (prev[0].y + direction.y + gridSize) % gridSize
      };

      // Check collision with self
      if (prev.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
        setGameOver(true);
        return prev;
      }

      const newSnake = [newHead, ...prev];

      // Check if food eaten
      if (newHead.x === food.x && newHead.y === food.y) {
        setScore(s => s + 10);
        setFood(generateFood());
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, gameOver, generateFood]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp": if (direction.y !== 1) setDirection({ x: 0, y: -1 }); break;
        case "ArrowDown": if (direction.y !== -1) setDirection({ x: 0, y: 1 }); break;
        case "ArrowLeft": if (direction.x !== 1) setDirection({ x: -1, y: 0 }); break;
        case "ArrowRight": if (direction.x !== -1) setDirection({ x: 1, y: 0 }); break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction]);

  useEffect(() => {
    gameLoopRef.current = setInterval(moveSnake, 100);
    return () => clearInterval(gameLoopRef.current);
  }, [moveSnake]);

  useEffect(() => {
    if (score > highScore) setHighScore(score);
  }, [score, highScore]);

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#030712] flex flex-col items-center">
        <Navigation />
        
        <main className="flex flex-col items-center gap-8 py-20 px-4 w-full max-w-2xl mt-10">
          {/* Header */}
          <div className="flex flex-col items-center gap-2 border-b-2 border-primary/20 pb-4 w-full relative">
            <button 
              onClick={() => navigate('/')}
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
          <div className="relative aspect-square w-full max-w-[500px] bg-[#030712] border-4 border-primary/30 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,255,65,0.1)]">
            {/* CRT Effect Overlay */}
            <div className="absolute inset-0 z-20 pointer-events-none opacity-20">
               <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />
            </div>

            {/* Render Snake */}
            {snake.map((segment, i) => (
              <div 
                key={i}
                className="absolute bg-primary shadow-[0_0_10px_rgba(0,255,65,0.8)]"
                style={{
                  width: `${100/gridSize}%`,
                  height: `${100/gridSize}%`,
                  left: `${(segment.x * 100) / gridSize}%`,
                  top: `${(segment.y * 100) / gridSize}%`,
                  opacity: 1 - (i / snake.length) * 0.5
                }}
              />
            ))}

            {/* Render Food */}
            <div 
              className="absolute bg-[#ffaa00] animate-pulse shadow-[0_0_15px_#ffaa00]"
              style={{
                width: `${100/gridSize}%`,
                height: `${100/gridSize}%`,
                left: `${(food.x * 100) / gridSize}%`,
                top: `${(food.y * 100) / gridSize}%`,
                borderRadius: '50%'
              }}
            />

            {/* Game Over Overlay */}
            {gameOver && (
              <div className="absolute inset-0 z-30 bg-black/80 flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm">
                <h2 className="font-['Major_Mono_Display'] text-5xl text-red-500 mb-4">FAILED</h2>
                <p className="font-['VT323'] text-2xl text-primary/60 mb-8 lowercase">
                  {'> connection_interrupted\n> system_failure_detected'}
                </p>
                <button 
                  onClick={resetGame}
                  className="flex items-center gap-3 px-8 py-3 bg-primary/10 border border-primary/40 hover:bg-primary/20 text-primary font-['VT323'] text-2xl uppercase transition-all"
                >
                  <RefreshCcw className="h-5 w-5" />
                  RESTART_SYSTEM
                </button>
              </div>
            )}
          </div>

          <div className="font-['VT323'] text-primary/40 text-lg uppercase tracking-widest text-center">
            [ use arrow keys to navigate system ]
          </div>
        </main>
      </div>
    </PageTransition>
  );
}
