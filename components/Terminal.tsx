'use client'

import { useState } from "react";
import { allPosts } from "content-collections";
import { formatDate } from "@/utils/helpers";
import { Terminal as TerminalIcon } from "lucide-react";
import Link from "next/link";

interface TerminalProps {
  initialMessage?: string;
}

export default function Terminal({ initialMessage = "Welcome to my terminal! Type 'help' to see available commands." }: TerminalProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [output, setOutput] = useState<JSX.Element[]>([]);

  const handleCommand = (command: string) => {
    setHistory(prev => [...prev, command]);
    setHistoryIndex(-1);

    const commandOutput = (
      <div key={`command-${history.length}`} className="mb-2">
        <TerminalIcon className="w-3 h-3 text-gray-400" />
      </div>
    );

    let commandResponse: JSX.Element;
    
    switch(command.toLowerCase()) {
      case "about":
        commandResponse = (
          <div key={`response-${history.length}`} className="text-white mb-4">
            <p className="leading-relaxed text-sm">
              Self-driven and detail-oriented Software Engineer with a passion for crafting elegant solutions. 
              My code is my canvas, and I paint with algorithms and data structures. 
              When I'm not pushing pixels or debugging, I'm exploring the endless possibilities of technology 
              and collaborating with amazing developers to build the future.
            </p>
          </div>
        );
        break;
      case "posts":
        commandResponse = (
          <div key={`response-${history.length}`} className="mb-4">
            {allPosts.map((post: any) => (
              <Link key={post.slug} href={`/posts/${post.slug}`} className="block mb-1 hover:bg-white/5 px-2 py-1 rounded transition-colors text-xs">
                <span className="text-gray-400">→</span> <span className="text-white">{post.title}</span>
                <span className="text-gray-500"> • {formatDate(post.date)} • </span>
                <span className="text-gray-400">[{post.category}]</span>
              </Link>
            ))}
          </div>
        );
        break;
      case "help":
        commandResponse = (
          <div key={`response-${history.length}`} className="mb-4 text-sm">
            <p className="text-white">Available commands:</p>
            <div className="mt-2">
              <p className="flex items-center gap-2">
                <span className="text-gray-400">about</span>
                <span className="text-gray-500">-</span>
                <span className="text-white">Meet the developer</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gray-400">posts</span>
                <span className="text-gray-500">-</span>
                <span className="text-white">Browse my writings</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gray-400">clear</span>
                <span className="text-gray-500">-</span>
                <span className="text-white">Clear terminal</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gray-400">help</span>
                <span className="text-gray-500">-</span>
                <span className="text-white">Show this help message</span>
              </p>
            </div>
          </div>
        );
        break;
      case "clear":
        setOutput([]);
        setInput("");
        return;
      default:
        commandResponse = (
          <div key={`response-${history.length}`} className="text-gray-400 mb-4 text-sm">
            zsh: command not found: {command}
          </div>
        );
    }

    setOutput(prev => [...prev, commandOutput, commandResponse]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <div className="w-full max-w-3xl">
      <div className="relative w-full border border-foreground/20 bg-black/90 rounded-lg shadow-lg overflow-hidden font-mono backdrop-blur-sm">
        <div className="bg-black/80 p-2 flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-gray-500"></div>
            <div className="w-2 h-2 rounded-full bg-gray-500"></div>
            <div className="w-2 h-2 rounded-full bg-gray-500"></div>
          </div>
        </div>
        
        <div className="p-4 h-[500px] overflow-y-auto bg-black/30 backdrop-blur-sm border-t border-foreground/20">
          <div className="text-foreground mb-4 text-sm">
            {initialMessage}
          </div>

          {output}

          <div className="flex items-center">
            <TerminalIcon className="w-3 h-3 text-foreground mr-2" />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none text-white flex-1 font-mono text-sm"
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  );
}