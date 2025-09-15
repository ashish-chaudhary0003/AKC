import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function GameSection() {
  // Binary representation of "TECH"
  const solution = [
    0,1,0,1,0,1,0,0, // T
    0,1,0,0,0,1,0,1, // E
    0,1,0,0,0,0,1,1, // C
    0,1,0,0,1,0,0,0  // H
  ];
  
  const [currentState, setCurrentState] = useState<number[]>(new Array(32).fill(0));
  const [isComplete, setIsComplete] = useState(false);

  const toggleCell = (index: number) => {
    const newState = [...currentState];
    newState[index] = newState[index] === 0 ? 1 : 0;
    setCurrentState(newState);
  };

  const resetPuzzle = () => {
    setCurrentState(new Array(32).fill(0));
    setIsComplete(false);
  };

  useEffect(() => {
    const isCorrect = JSON.stringify(currentState) === JSON.stringify(solution);
    setIsComplete(isCorrect);
  }, [currentState, solution]);

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Code Challenge</h2>
          <p className="text-xl text-muted-foreground">Test your tech knowledge while learning about my skills</p>
        </motion.div>
        
        <motion.div 
          className="bg-card rounded-2xl p-8 shadow-lg border border-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Binary Puzzle</h3>
              <p className="text-muted-foreground mb-6">Click the cells to spell "TECH" in binary code. Each letter uses 4 bits:</p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li><strong>T:</strong> 0101 0100</li>
                <li><strong>E:</strong> 0100 0101</li>
                <li><strong>C:</strong> 0100 0011</li>
                <li><strong>H:</strong> 0100 1000</li>
              </ul>
              <Button 
                onClick={resetPuzzle}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                data-testid="button-reset-puzzle"
              >
                Reset Puzzle
              </Button>
            </div>
            
            <div>
              <div className="game-grid mb-4">
                {currentState.map((value, index) => (
                  <motion.div
                    key={index}
                    className={`puzzle-cell ${isComplete ? 'correct' : ''}`}
                    onClick={() => toggleCell(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    data-testid={`puzzle-cell-${index}`}
                  >
                    {value}
                  </motion.div>
                ))}
              </div>
              <div className="text-center text-lg font-semibold" data-testid="puzzle-status">
                {isComplete ? (
                  <span className="text-green-600">
                    🎉 Congratulations! You spelled TECH in binary!
                  </span>
                ) : (
                  <span className="text-muted-foreground">
                    Keep trying! Click cells to toggle between 0 and 1
                  </span>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
