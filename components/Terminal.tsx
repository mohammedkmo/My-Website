'use client'

import { useState, useEffect, useRef } from "react";
import { allPosts } from "content-collections";
import { formatDate } from "@/utils/helpers";
import { Terminal as TerminalIcon, Mail, Linkedin, Github, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface TerminalProps {
  initialMessage?: string;
}

export default function Terminal({ initialMessage = "Welcome to my terminal! Type 'help' to see available commands." }: TerminalProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [output, setOutput] = useState<JSX.Element[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  const handleCommand = (command: string) => {
    setHistory(prev => [...prev, command]);
    setHistoryIndex(-1);

    const commandOutput = (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        key={`command-${history.length}`} 
        className="mb-2 flex items-center gap-2"
      >
        <TerminalIcon className="w-3 h-3 text-gray-400" />
        <span className="text-gray-400 text-sm">{command}</span>
      </motion.div>
    );

    let commandResponse: JSX.Element;
    
    switch(command.toLowerCase()) {
      case "about":
        commandResponse = (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            key={`response-${history.length}`} 
            className="mb-4"
          >
            <div className="mb-1 hover:bg-white/10 px-2 py-1 rounded transition-all duration-300 text-xs items-start gap-2">
              <div className="text-sm leading-relaxed">
                <p className="text-white">
                  Hey there! 👋 I'm Mohammed, a passionate Software Engineer who loves turning complex problems into elegant solutions.
                </p>
                <p className="text-gray-400 mt-2">
                  With expertise in full-stack development, I specialize in building scalable web applications using modern technologies like React, Node.js, and TypeScript.
                </p>
                <p className="text-gray-400 mt-2">
                  I'm deeply interested in system design, cloud architecture, and creating exceptional user experiences.
                </p>
                <p className="text-gray-500 mt-2">
                  Beyond coding, I'm an avid learner who enjoys exploring new technologies, contributing to open-source projects, and sharing knowledge through technical writing.
                </p>
              </div>
            </div>
          </motion.div>
        );
        break;
      case "posts":
        commandResponse = (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            key={`response-${history.length}`} 
            className="mb-4"
          >
            {allPosts.map((post: any, index: number) => (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                key={post.slug}
              >
                <Link href={`/posts/${post.slug}`} className="flex mb-1 hover:bg-white/10 px-2 py-1 rounded transition-all duration-300 text-xs items-start gap-2">
                  <div className="bg-white/10 rounded-md">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                  <div className="">
                    <span className="text-white">{post.title}</span>
                    <span>
                      <span className="text-gray-500"> • {formatDate(post.date)} • </span>
                      <span className="text-gray-400">[{post.category}]</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        );
        break;
      case "help":
        commandResponse = (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            key={`response-${history.length}`} 
            className="mb-4"
          >
            {[
              { cmd: "about", desc: "Meet the developer" },
              { cmd: "posts", desc: "Browse my writings" },
              { cmd: "exp", desc: "View my experience" },
              { cmd: "skills", desc: "Check out my skills" },
              { cmd: "resume", desc: "View my resume" },
              { cmd: "clear", desc: "Clear terminal" },
              { cmd: "help", desc: "Show this help message" }
            ].map((item, index) => (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                key={item.cmd} 
                className="hover:bg-white/10 px-2 py-1 rounded transition-all duration-300 text-xs"
              >
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">{item.cmd}</span>
                  <span className="text-gray-500">-</span>
                  <span className="text-white">{item.desc}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        );
        break;
      case "clear":
        setOutput([]);
        setInput("");
        return;
      case "exp":
        commandResponse = (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            key={`response-${history.length}`} 
            className="mb-4"
          >
            {[
              {
                title: "Full Stack Software Engineer - freelancer",
                period: "2014 - present",
                desc: "Worked with a range of large and small agencies, start-ups and individuals to build products. Clients included TNFX, Miss Iraq Org, Uniborsa, IDB bank ...",
                tech: "Nginx • MySQL • Laravel • Flutter • Svelte • ReactJS • VueJS"
              },
              {
                title: "Graphic Designer - freelancer", 
                period: "2012 - present",
                desc: "I have worked with many companies on several projects and different visual identities, as well as designing many user interfaces with modern and simple methods.",
                tech: "Adobe collection • Figma • Adobe XD • Microsoft Office"
              }
            ].map((job, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
                key={job.title} 
                className="mb-4 hover:bg-white/10 px-2 py-1 rounded transition-all duration-300 text-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="text-white">{job.title}</span>
                  <span className="text-gray-400">{job.period}</span>
                </div>
                <p className="text-gray-400 mt-2">{job.desc}</p>
                <p className="text-gray-500 mt-2">{job.tech}</p>
              </motion.div>
            ))}
          </motion.div>
        );
        break;
      case "resume":
        commandResponse = (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            key={`response-${history.length}`} 
            className="mb-4"
          >
            <Link 
              href="https://link.mohammedk.me/resume" 
              target="_blank" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-primary/20 text-gray-400 hover:text-primary rounded-md transition-all duration-300 group"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">📄</span>
              <span className="text-sm">Get my resume</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
            </Link>
          </motion.div>
        );
        break;
      case "skills":
        commandResponse = (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            key={`response-${history.length}`} 
            className="mb-4"
          >
            {[
              { category: "Programming Languages", skills: "TypeScript • JavaScript • PHP • Dart • SQL" },
              { category: "Frontend", skills: "React • Next.js • TailwindCSS • HTML • CSS • SASS" },
              { category: "Backend", skills: "Node.js • Express • Laravel • MySQL • PostgreSQL • MongoDB" },
              { category: "Mobile", skills: "Flutter • React Native" },
              { category: "DevOps", skills: "Docker • Git • Linux • Nginx • Apache" },
              { category: "Design", skills: "Figma • Adobe XD • Photoshop • Illustrator • After Effects" },
              { category: "Other", skills: "REST APIs • GraphQL • WebSockets • OAuth • JWT • Unit Testing" }
            ].map((item, index) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                key={item.category} 
                className="mb-1 hover:bg-white/10 px-2 py-1 rounded transition-all duration-300 text-xs items-start gap-2"
              >
                <div className="flex items-center gap-2">
                  <span className="text-white">{item.category}:</span>
                  <span className="text-gray-400">{item.skills}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        );
        break;
      case "contact":
        commandResponse = (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            key={`response-${history.length}`} 
            className="mb-4"
          >
            {[
              { icon: <Mail className="w-3 h-3 text-white" />, label: "Email", value: "hello@mohammedk.me", link: "mailto:hello@mohammedk.me" },
              { icon: <Linkedin className="w-3 h-3 text-white" />, label: "LinkedIn", value: "linkedin.com/in/mohammedkmo", link: "https://www.linkedin.com/in/mohammedkmo/" },
              { icon: <Github className="w-3 h-3 text-white" />, label: "GitHub", value: "github.com/mohammedkmo", link: "https://github.com/mohammedkmo" }
            ].map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                key={item.label}
              >
                <Link href={item.link} target="_blank" className="flex mb-1 hover:bg-white/10 px-2 py-1 rounded transition-all duration-300 text-xs items-start gap-2">
                  <div className="bg-white/10 p-1 rounded-md">
                    {item.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white">{item.label}:</span>
                    <span className="text-gray-400 hover:text-primary transition-colors">{item.value}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        );
        break;
      default:
        commandResponse = (
          <motion.div 
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            key={`response-${history.length}`} 
            className="text-gray-400 mb-4 text-sm"
          >
            zsh: command not found: {command}
          </motion.div>
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

  const handleTerminalClick = () => {
    const inputElement = document.querySelector("input");
    if (inputElement) {
      inputElement.focus();
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-3xl" 
      onClick={handleTerminalClick}
    >
      <div className="relative w-full border border-foreground/20 bg-black rounded-lg shadow-lg overflow-hidden text-gray-700">
        <div className="bg-black/80 p-2 flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-gray-500"></div>
            <div className="w-2 h-2 rounded-full bg-gray-500"></div>
            <div className="w-2 h-2 rounded-full bg-gray-500"></div>
          </div>
        </div>
        
        <div ref={terminalRef} className="p-4 h-[500px] overflow-y-auto scrollbar-hide backdrop-blur-sm border-t border-foreground/20">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-foreground mb-4 text-sm"
          >
            {initialMessage}
          </motion.div>

          <AnimatePresence>
            {output}
          </AnimatePresence>

          <div className="flex items-center">
            <TerminalIcon className="w-3 h-3 text-foreground mr-2" />
            <input
              type="text"
              value={input}
              autoComplete="on"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none text-white flex-1 font-mono text-sm"
              autoFocus
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}