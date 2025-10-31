// app/components/Projects.tsx
'use client';

import { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Calendar, Tag, TrendingUp, LayoutGrid, List } from 'lucide-react';
import { client } from '@/sanity/lib/client';
import { projectsQuery } from '@/sanity/lib/queries';

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

const projects = await client.fetch(projectsQuery)

const categories = ['All', 'AI/ML', 'Full-Stack', 'FinTech'];

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [viewMode, setViewMode] = useState<'detailed' | 'minimal'>('detailed');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter((project: any) => project.category === activeCategory);

    return (
        <section id='projects'>
            <div className="w-full max-w-360 mx-auto px-4 sm:px-6 md:px-8 lg:px-14">
                <div className="flex flex-col gap-12 sm:gap-16 md:gap-20">
                    {/* Heading Section */}
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 sm:gap-8">
                        <div className="flex flex-col gap-4 sm:gap-6 max-w-full md:max-w-180">
                            <h2 className="font-roobert text-3xl sm:text-4xl md:text-[2.625rem] lg:text-[3.5rem] font-normal leading-tight md:leading-[0.96] text-rich-black opacity-100">
                                <AnimatedText text="Projects" className="text-start space-x-4" />
                            </h2>
                            <p className="text-sm sm:text-base font-normal text-midnight-green-70 leading-[1.44]">
                                Transforming ideas into scalable, production-ready applications. Each project represents a unique challenge solved with modern technologies and best practices.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-8 sm:gap-12">
                            <div className="flex flex-col gap-1">
                                <span className="font-roobert text-2xl sm:text-3xl font-medium text-rich-black">
                                    {projects.length}
                                </span>
                                <span className="text-xs text-midnight-green-70 uppercase tracking-wide">
                                    Projects
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="font-roobert text-2xl sm:text-3xl font-medium text-rich-black">
                                    1.5 + Y
                                </span>
                                <span className="text-xs text-midnight-green-70 uppercase tracking-wide">
                                    experience
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Category Filter & View Toggle */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded font-roobert text-xs sm:text-sm font-medium transition-all duration-280 ${activeCategory === category
                                        ? 'bg-rich-black text-white'
                                        : 'bg-white text-rich-black hover:bg-midnight-green hover:text-white border border-light-blue'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* View Mode Toggle */}
                        <div className="flex items-center gap-2 bg-transparent lg:bg-white border-0 sm:border border-light-blue rounded p-1">
                            <button
                                onClick={() => setViewMode('detailed')}
                                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded font-roobert text-xs sm:text-sm font-medium transition-all duration-280 ${viewMode === 'detailed'
                                    ? 'bg-rich-black text-white'
                                    : 'text-rich-black bg-white hover:bg-anti-flash-white'
                                    }`}
                            >
                                <LayoutGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                <span className="hidden sm:inline">Detailed</span>
                            </button>
                            <button
                                onClick={() => setViewMode('minimal')}
                                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded font-roobert text-xs sm:text-sm font-medium transition-all duration-280 ${viewMode === 'minimal'
                                    ? 'bg-rich-black text-white'
                                    : 'text-rich-black bg-white hover:bg-anti-flash-white'
                                    }`}
                            >
                                <List className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                <span className="hidden sm:inline">Minimal</span>
                            </button>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className={`grid gap-4 sm:gap-6 ${viewMode === 'detailed'
                        ? 'grid-cols-1 lg:grid-cols-2'
                        : 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'
                        }`}>
                        {filteredProjects.map((project: any, index: number) => (
                            viewMode === 'detailed' ? (
                                // Detailed View (Current)
                                <div
                                    key={index}
                                    className="flex flex-col bg-white rounded-lg border border-light-blue p-5 sm:p-6 md:p-8 hover:border-rich-black transition-all duration-280 group"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    {/* Header */}
                                    <div className="flex items-start justify-between gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-light-blue">
                                        <div className="flex flex-col gap-2 sm:gap-3">
                                            <div className="flex items-center gap-2 sm:gap-3">
                                                <div className="bg-[#ff8060] text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs font-medium">
                                                    [{index + 1}]
                                                </div>
                                                <span className="text-[10px] sm:text-xs font-medium text-midnight-green-70 uppercase tracking-wide">
                                                    {project.category}
                                                </span>
                                            </div>
                                            <h3 className="font-roobert text-lg sm:text-xl md:text-2xl font-medium text-rich-black">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-midnight-green-70 shrink-0">
                                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                                            <span>{project.year}</span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="flex flex-col gap-4 sm:gap-6 py-4 sm:py-6">
                                        <p className="text-xs sm:text-sm text-midnight-green-70 leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Metrics */}
                                        <div className="grid grid-cols-3 gap-2 sm:gap-4">
                                            {project.metrics.map((metric: any, idx: number) => (
                                                <div key={idx} className="flex flex-col gap-0.5 sm:gap-1 p-2 sm:p-4 bg-anti-flash-white rounded border border-light-blue">
                                                    <span className="font-roobert text-sm sm:text-xl font-medium text-rich-black">
                                                        {metric.value}
                                                    </span>
                                                    <span className="text-[10px] sm:text-xs text-midnight-green-70 leading-tight">
                                                        {metric.label}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Highlights */}
                                        <div className="flex flex-col gap-2 sm:gap-2.5">
                                            {project.highlights.map((highlight: any, idx: number) => (
                                                <div key={idx} className="flex items-start gap-2 sm:gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-vivid-sky-blue mt-1 sm:mt-1.5 shrink-0"></div>
                                                    <span className="text-xs sm:text-sm text-rich-black font-medium">
                                                        {highlight}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Footer */}
                                    <div className="flex flex-col gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-light-blue mt-auto">
                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                            {project.tags.map((tag: any, tagIndex: number) => (
                                                <span
                                                    key={tagIndex}
                                                    className="px-2 sm:px-3 py-1 sm:py-1.5 bg-anti-flash-white border border-light-blue rounded text-[10px] sm:text-xs font-medium text-rich-black"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Links */}
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-xs sm:text-sm font-medium text-rich-black hover:text-vivid-sky-blue transition-colors duration-280 group/link"
                                            >
                                                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                                <span>Live Demo</span>
                                                <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-280" />
                                            </a>
                                            <span className="hidden sm:block w-1 h-1 rounded-full bg-light-blue"></span>
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-xs sm:text-sm font-medium text-rich-black hover:text-vivid-sky-blue transition-colors duration-280"
                                            >
                                                <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                                <span>Source Code</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                // Minimal View
                                <div
                                    key={index}
                                    className="flex flex-col bg-white rounded-lg border border-light-blue p-4 sm:p-5 hover:border-rich-black transition-all duration-280 group"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    {/* Compact Header */}
                                    <div className="flex items-start justify-between gap-3 pb-3 border-b border-light-blue">
                                        <div className="flex flex-col gap-1.5">
                                            <div className="flex items-center gap-2">
                                                <div className="bg-[#ff8060] text-white px-2 py-0.5 rounded text-[10px] font-medium">
                                                    [{project.number}]
                                                </div>
                                                <span className="text-[10px] font-medium text-midnight-green-70 uppercase tracking-wide">
                                                    {project.category}
                                                </span>
                                            </div>
                                            <h3 className="font-roobert text-base sm:text-lg font-medium text-rich-black">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <span className="text-[10px] text-midnight-green-70 shrink-0">{project.year}</span>
                                    </div>

                                    {/* Compact Content */}
                                    <div className="flex flex-col gap-3 py-3">
                                        <p className="text-xs text-midnight-green-70 leading-relaxed line-clamp-2">
                                            {project.description}
                                        </p>

                                        {/* Key Metric */}
                                        {project.metrics && project.metrics[0] && (
                                            <div className="flex items-center gap-4 p-2 bg-anti-flash-white rounded border border-light-blue">
                                                <div className="flex flex-col">
                                                    <span className="font-roobert text-lg font-medium text-rich-black">
                                                        {project.metrics[0].value}
                                                    </span>
                                                    <span className="text-[10px] text-midnight-green-70">
                                                        {project.metrics[0].label}
                                                    </span>
                                                </div>
                                                {project.metrics[1] && (
                                                    <>
                                                        <div className="w-px h-8 bg-light-blue"></div>
                                                        <div className="flex flex-col">
                                                            <span className="font-roobert text-lg font-medium text-rich-black">
                                                                {project.metrics[1].value}
                                                            </span>
                                                            <span className="text-[10px] text-midnight-green-70">
                                                                {project.metrics[1].label}
                                                            </span>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        )}

                                        {/* Top 2 Highlights */}
                                        <div className="flex flex-col gap-1.5">
                                            {project.highlights.slice(0, 2).map((highlight: any, idx: number) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <div className="w-1 h-1 rounded-full bg-vivid-sky-blue mt-1.5 shrink-0"></div>
                                                    <span className="text-xs text-rich-black font-medium line-clamp-1">
                                                        {highlight}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Compact Footer */}
                                    <div className="flex flex-col gap-2.5 pt-3 border-t border-light-blue mt-auto">
                                        {/* Top 3 Tags */}
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tags.slice(0, 3).map((tag: any, tagIndex: number) => (
                                                <span
                                                    key={tagIndex}
                                                    className="px-2 py-1 bg-anti-flash-white border border-light-blue rounded text-[10px] font-medium text-rich-black"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                            {project.tags.length > 3 && (
                                                <span className="px-2 py-1 bg-anti-flash-white border border-light-blue rounded text-[10px] font-medium text-midnight-green-70">
                                                    +{project.tags.length - 3}
                                                </span>
                                            )}
                                        </div>

                                        {/* Compact Links */}
                                        <div className="flex items-center gap-3">
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 text-xs font-medium text-rich-black hover:text-vivid-sky-blue transition-colors duration-280"
                                            >
                                                <ExternalLink className="w-3.5 h-3.5" />
                                                <span>Demo</span>
                                            </a>
                                            <span className="w-1 h-1 rounded-full bg-light-blue"></span>
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 text-xs font-medium text-rich-black hover:text-vivid-sky-blue transition-colors duration-280"
                                            >
                                                <Github className="w-3.5 h-3.5" />
                                                <span>Code</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="flex flex-col items-center gap-4 sm:gap-6 p-6 sm:p-10 border border-light-blue rounded-lg text-center bg-white">
                        <h3 className="font-roobert text-lg sm:text-2xl font-medium text-rich-black max-w-2xl">
                            Interested in working together?
                        </h3>
                        <p className="text-xs sm:text-sm text-midnight-green-70 max-w-xl">
                            Let's collaborate and bring your vision to life with cutting-edge technology and innovative solutions.
                        </p>
                        <a
                            href="#contact"
                            className="flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-rich-black text-white rounded font-roobert font-medium text-xs sm:text-sm hover:bg-midnight-green transition-all duration-280 group"
                        >
                            <span>Get in Touch</span>
                            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-280" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}