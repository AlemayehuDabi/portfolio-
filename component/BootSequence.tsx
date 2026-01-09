import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const bootSequence = [
  { text: 'Initializing kernel...', delay: 200 },
  { text: 'Loading system modules...', delay: 400 },
  { text: 'Mounting file systems...', delay: 300 },
  { text: 'Starting network services...', delay: 350 },
  { text: 'Loading user profile...', delay: 250 },
  { text: 'Initializing UI components...', delay: 400 },
  { text: 'Starting portfolio.service...', delay: 300 },
  { text: 'All systems operational.', delay: 200 },
];

interface BootSequenceProps {
  onComplete: () => void;
}

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (currentLine >= bootSequence.length) {
      const timeout = setTimeout(onComplete, 800);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setDisplayedLines(prev => [...prev, bootSequence[currentLine].text]);
      setProgress(((currentLine + 1) / bootSequence.length) * 100);
      setCurrentLine(prev => prev + 1);
    }, bootSequence[currentLine].delay);

    return () => clearTimeout(timeout);
  }, [currentLine, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-obsidian flex items-center justify-center"
    >
      <div className="w-full max-w-2xl px-8">
        {/* ASCII Art Header */}
        <pre className="text-terminal-green text-[5px] md:text-sm font-mono mb-8 text-center leading-tight">
{`
 ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
 ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
 ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
 ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
 ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
 ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 
`}
        </pre>

        {/* Boot Lines */}
        <div className="font-mono text-sm space-y-1 mb-8 h-48 overflow-hidden">
          <AnimatePresence>
            {displayedLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`flex items-center gap-2 ${
                  i === displayedLines.length - 1 ? 'text-terminal-green' : 'text-terminal-green/60'
                }`}
              >
                <span className="text-terminal-green/40">[{String(i).padStart(2, '0')}]</span>
                <span>{line}</span>
                {i === displayedLines.length - 1 && currentLine < bootSequence.length && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    ▌
                  </motion.span>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Progress Bar */}
        <div className="relative">
          <div className="h-2 bg-steel/30 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-terminal-green rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="flex items-center justify-between mt-2 text-xs font-mono text-terminal-green/60">
            <span>Loading Portfolio</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Loading Indicator */}
        <div className="flex items-center justify-center gap-3 mt-8 text-terminal-green/60">
          <Loader2 className="w-4 h-4 animate-spin" />
          <span className="text-sm font-mono">
            {currentLine >= bootSequence.length ? 'Ready' : 'Initializing...'}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
