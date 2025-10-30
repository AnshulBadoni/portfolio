// app/components/Hero.tsx
'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Skills from './Skills';

// Dynamically import the 3D model component (client-side only)
const Model3D = dynamic(() => import('./Model3D'), {
    ssr: false,
    loading: () => (
        <div className="flex items-center justify-center w-full h-full">
            <div className="w-16 h-16 border-4 border-rich-black border-t-transparent rounded-full animate-spin"></div>
        </div>
    )
});

const AnimatedText = ({ text, className = '' }: { text: string; className?: string }) => {
    const words = text.split(' ');

    return (
        <span className={`block w-full ${className}`}>
            {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block">
                    {word.split('').map((char, charIndex) => (
                        <span
                            key={charIndex}
                            className="inline-block translate-y-0"
                        >
                            {char}
                        </span>
                    ))}
                    {wordIndex < words.length - 1 && ' '}
                </span>
            ))}
        </span>
    );
};

export default function Hero() {
    return (
        <section id="hero" className="w-full mx-auto px-4 my-24 md:my-32 sm:my-16">
            <div className="flex flex-col items-center justify-start gap-8 text-center">
                {/* Hero Copy Section */}
                <div className="flex flex-col items-center justify-start gap-8 text-center">
                    <h1 className="font-roobert text-[4.5rem] md:text-[3.5rem] sm:text-[2.5rem] font-normal leading-[1.11] text-rich-black opacity-100">
                        <AnimatedText text="Hi, I'am Anshul Badoni" className="text-center space-x-4 space-y-4 lg:text-7xl text-4xl animate-char-appear" />
                        <AnimatedText text="Software Engineer" className="text-center space-x-4 lg:text-7xl text-4xl animate-char-appear" />
                    </h1>

                    <p className="text-base font-normal w-full max-w-[90%] md:max-w-[50%] sm:max-w-full opacity-100">
                        I design and develop scalable web applications with a focus on reliability, performance, and clean architecture, helping businesses deliver faster, more efficient, and data-driven digital experiences.
                    </p>

                    <div className="opacity-100">
                        <a
                            href="anshulbadoni_resume.pdf"
                            download="anshulbadoni_resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-rich-black text-white text-center border border-black rounded px-12 py-3 font-roobert font-medium leading-[1.3] transition-all duration-280 hover:bg-faded-green"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>

                {/* 3D Model Section */}
                <div className="flex justify-center items-center opacity-100 w-full">
                    <div className="w-full flex justify-center items-center h-[350px] sm:h-96 md:h-[560px]">
                        <Suspense fallback={
                            <div className="flex items-center justify-center w-full h-full">
                                <div className="w-16 h-16 border-4 border-rich-black border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        }>
                            <Model3D />
                        </Suspense>
                    </div>
                </div>

                {/* Hero Card Section */}
                <Skills />
            </div>
        </section>
    );
}