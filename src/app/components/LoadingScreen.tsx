// app/components/LoadingScreen.tsx
'use client';

import { useEffect, useState } from 'react';

const greetings = [
    { text: 'Hello', lang: 'English' },
    { text: 'Hola', lang: 'Spanish' },
    { text: 'Bonjour', lang: 'French' },
    { text: 'Hallo', lang: 'German' },
    { text: 'Ciao', lang: 'Italian' },
    { text: 'こんにちは', lang: 'Japanese' },
    { text: '안녕하세요', lang: 'Korean' },
    { text: 'नमस्ते', lang: 'Hindi' },
    { text: 'Olá', lang: 'Portuguese' },
    { text: '你好', lang: 'Chinese' },
];

export default function LoadingScreen({ onLoadingComplete }: { onLoadingComplete: () => void }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Cycle through greetings every 100ms
        const greetingInterval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % greetings.length);
        }, 100);

        // After 1 second, start exit animation
        const exitTimer = setTimeout(() => {
            setIsExiting(true);
        }, 1000);

        // Complete loading after fade out
        const completeTimer = setTimeout(() => {
            onLoadingComplete();
        }, 1300); // 1s + 300ms fade out

        return () => {
            clearInterval(greetingInterval);
            clearTimeout(exitTimer);
            clearTimeout(completeTimer);
        };
    }, [onLoadingComplete]);

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-rich-black transition-opacity duration-300 ${isExiting ? 'opacity-0' : 'opacity-100'
                }`}
        >
            <div className="flex flex-col items-center gap-4">
                <div className="relative h-24 flex items-center justify-center">
                    <h1 className="font-roobert text-5xl sm:text-6xl md:text-7xl font-bold text-gray-200 animate-pulse">
                        {greetings[currentIndex].text}
                    </h1>
                </div>
                <p className="text-sm text-gray-400 font-medium">
                    {greetings[currentIndex].lang}
                </p>

                {/* Loading dots */}
                <div className="flex gap-2 mt-4">
                    <div className="w-2 h-2 rounded-full bg-vivid-sky-blue animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-vivid-sky-blue animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-vivid-sky-blue animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
            </div>
        </div>
    );
}