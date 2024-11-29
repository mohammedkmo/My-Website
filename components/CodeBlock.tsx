'use client'

import { useState, useCallback } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Geist_Mono } from 'next/font/google';

const geistMono = Geist_Mono({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-geist-mono',
});

interface CodeBlockProps {
    children: string;
    className?: string;
}

export default function CodeBlock({ children, className }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);
    const match = /language-(\w+)/.exec(className || '');
    const language = match ? match[1] : 'text';

    const copyToClipboard = useCallback(async () => {
        if (typeof window === 'undefined') return;
        
        try {
            const text = children.replace(/\n$/, '');
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    }, [children]);

    return (
        <div className="not-prose relative my-8">
            <div className="relative h-full border border-white/10 rounded-lg overflow-hidden group">
                <div className="absolute right-2 top-2 z-10">
                    <button
                        onClick={copyToClipboard}
                        className="flex items-center gap-1.5 px-3 py-1.5 
                                 text-xs font-medium text-white/80 hover:text-white
                                 transition-all duration-200 ease-in-out
                                 bg-black/40 hover:bg-black/60 backdrop-blur-sm
                                 border border-white/20 hover:border-white/40 
                                 rounded-md opacity-0 group-hover:opacity-100"
                        aria-label={copied ? 'Copied!' : 'Copy code'}
                    >
                        {copied ? (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <span>Copied!</span>
                            </>
                        ) : (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                </svg>
                                <span>Copy</span>
                            </>
                        )}
                    </button>
                </div>
                <div className="w-full">
                    <SyntaxHighlighter
                        language={language}
                        style={atomDark}
                        customStyle={{
                            margin: 0,
                            padding: '1rem',
                            backgroundColor: '#000',
                            fontSize: '0.875rem',
                            lineHeight: '1.5',
                            fontFamily: 'var(--font-geist-mono)', 
                            borderRadius: '0.5rem',
                        }}
                        wrapLongLines={true}
                    >
                        {children}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    );
}
