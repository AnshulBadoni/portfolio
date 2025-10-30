'use client';

import { client } from '@/sanity/lib/client';
import { experiencesQuery } from '@/sanity/lib/queries';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

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

const experiences = await client.fetch(experiencesQuery);

export default function CareerHistory() {
    return (
        <section id="career" className="my-16 sm:my-20 md:my-24 lg:my-28 py-12 sm:py-16 md:py-20 bg-midnight-green">
            <div className="w-full max-w-360 mx-auto px-4 sm:px-6 md:px-8 lg:px-14">
                <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
                    {/* Heading */}
                    <div className="flex flex-col gap-3 sm:gap-4 max-w-full lg:max-w-180">
                        <h2 className="font-roobert text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-normal leading-tight lg:leading-[0.96] text-white">
                            <AnimatedText text="Career Journey" className="text-start space-x-2" />
                        </h2>
                        <p className="text-xs sm:text-sm text-light-green/80 leading-relaxed">
                            1.5+ years building scalable applications and working with teams across various industries.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-4 top-0 bottom-0 w-px bg-vivid-sky-blue/20 hidden md:block"></div>

                        {/* Experience Cards */}
                        <div className="flex flex-col gap-3 sm:gap-4">
                            {experiences.map((exp: any, index: number) => (
                                <div key={index} className="relative flex gap-3 sm:gap-4 md:gap-6">
                                    {/* Timeline Dot */}
                                    <div className="hidden md:flex items-start pt-2 sm:pt-3 shrink-0">
                                        <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${exp.current
                                            ? 'bg-vivid-sky-blue'
                                            : 'bg-rich-black border border-vivid-sky-blue/30'
                                            }`}>
                                            <Briefcase className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${exp.current ? 'text-rich-black' : 'text-vivid-sky-blue'
                                                }`} />
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div className="flex-1 bg-rich-black rounded border border-vivid-sky-blue/20 p-4 sm:p-5 hover:border-vivid-sky-blue/40 transition-all duration-280">
                                        <div className="flex flex-col gap-2.5 sm:gap-3">
                                            {/* Header */}
                                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                                                <div className="flex flex-col gap-1">
                                                    <div className="flex items-center gap-2">
                                                        {exp.current && (
                                                            <span className="bg-vivid-sky-blue text-rich-black px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wide">
                                                                Current
                                                            </span>
                                                        )}
                                                        <h3 className="font-roobert text-base sm:text-lg font-medium text-white">
                                                            {exp.position}
                                                        </h3>
                                                    </div>
                                                    <p className="text-sm sm:text-base text-vivid-sky-blue">
                                                        {exp.company}
                                                    </p>
                                                </div>

                                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-xs text-light-green/70">
                                                    <div className="flex items-center gap-1.5">
                                                        <Calendar className="w-3 h-3" />
                                                        <span>{exp.period}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1.5">
                                                        <MapPin className="w-3 h-3" />
                                                        <span>{exp.location}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-xs sm:text-sm text-light-green/80 leading-relaxed">
                                                {exp.description}
                                            </p>

                                            {/* Technologies */}
                                            <div className="flex flex-wrap gap-1.5">
                                                {exp.technologies.map((tech: string, idx: number) => (
                                                    <span
                                                        key={idx}
                                                        className="px-2 py-1 bg-midnight-green border border-vivid-sky-blue/20 rounded text-[10px] font-medium text-light-green"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}