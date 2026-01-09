'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, FileCode } from 'lucide-react';

interface CodeLine {
  number: number;
  content: string;
  indent?: number;
}

interface CodePreviewProps {
  title: string;
  language: string;
  code: CodeLine[];
}

const renderSyntax = (content: string) => {
  // Simple syntax highlighting
  const keywords = /\b(const|let|var|function|return|export|import|from|async|await|if|else|for|while|class|interface|type|extends|implements|new|this|try|catch|throw)\b/g;
  const strings = /(["'`])(?:(?!\1)[^\\]|\\.)*\1/g;
  const functions = /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g;
  const numbers = /\b(\d+\.?\d*)\b/g;
  const comments = /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm;
  const operators = /([=+\-*/<>!&|?:]+)/g;

  let result = content;
  
  // Apply highlighting (order matters)
  result = result.replace(comments, '<span class="syntax-comment">$1</span>');
  result = result.replace(strings, '<span class="syntax-string">$&</span>');
  result = result.replace(keywords, '<span class="syntax-keyword">$1</span>');
  result = result.replace(functions, '<span class="syntax-function">$1</span>');
  result = result.replace(numbers, '<span class="syntax-number">$1</span>');

  return <span dangerouslySetInnerHTML={{ __html: result }} />;
};

export default function CodePreview({ title, language, code }: CodePreviewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = code.map(line => '  '.repeat(line.indent || 0) + line.content).join('\n');
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="terminal-window overflow-hidden">
      {/* Editor Header */}
      <div className="terminal-header justify-between">
        <div className="flex items-center gap-2">
          <div className="terminal-dot terminal-dot-red" />
          <div className="terminal-dot terminal-dot-yellow" />
          <div className="terminal-dot terminal-dot-green" />
        </div>
        
        <div className="flex items-center gap-2 text-muted-foreground">
          <FileCode className="w-4 h-4" />
          <span className="font-mono text-sm">{title}</span>
          <span className="px-2 py-0.5 rounded text-xs bg-secondary text-secondary-foreground">
            {language}
          </span>
        </div>

        <motion.button
          onClick={handleCopy}
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-1.5 px-2 py-1 rounded text-xs text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          aria-label="Copy code"
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.span
                key="check"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="flex items-center gap-1 text-emerald-glow"
              >
                <Check className="w-3.5 h-3.5" />
                <span className='hidden sm:block'>
                Copied!</span>
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="flex items-center gap-1"
              >
                <Copy className="w-3.5 h-3.5" />
                <span className='hidden sm:block'>
                Copy
                </span>
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Code Content */}
      <div className="p-0 font-mono text-sm overflow-x-auto">
        <table className="w-full border-collapse">
          <tbody>
            {code.map((line, index) => (
              <motion.tr
                key={line.number}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.03 }}
                className="hover:bg-secondary/30 transition-colors"
              >
                <td className="px-4 py-0.5 text-right text-muted-foreground/50 select-none w-12 border-r border-steel">
                  {line.number}
                </td>
                <td className="px-4 py-0.5">
                  <span style={{ paddingLeft: `${(line.indent || 0) * 1.5}em` }}>
                    {renderSyntax(line.content)}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
