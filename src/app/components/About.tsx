// components/AboutSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users } from 'lucide-react';

const skills = [
    {
        icon: Code,
        title: 'Development',
        description: 'Clean, efficient code with modern frameworks and best practices',
        technologies: ['React', 'Next.js', 'TypeScript', 'Node.js'],
    },
    {
        icon: Palette,
        title: 'Design',
        description: 'Beautiful, user-centered designs that solve real problems',
        technologies: ['Figma', 'Adobe CC', 'Framer', 'Webflow'],
    },
    {
        icon: Zap,
        title: 'Performance',
        description: 'Lightning-fast websites optimized for speed and SEO',
        technologies: ['Core Web Vitals', 'Lighthouse', 'GTmetrix', 'Web Vitals'],
    },
    {
        icon: Users,
        title: 'Collaboration',
        description: 'Effective teamwork and communication with clients and teams',
        technologies: ['Agile', 'Git', 'Slack', 'Notion'],
    },
];

export default function AboutSection() {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">
                            About <span className="gradient-text">Me</span>
                        </h2>

                        <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                            <p>
                                I'm a passionate designer and developer with over 3 years of experience
                                creating digital products that users love. I believe in the power of
                                design and technology to solve complex problems and create meaningful experiences.
                            </p>

                            <p>
                                My approach combines creative thinking with technical expertise to deliver
                                solutions that are not only beautiful but also functional, scalable, and
                                user-friendly.
                            </p>

                            <p>
                                When I'm not coding or designing, you can find me exploring new technologies,
                                contributing to open-source projects, or sharing knowledge with the community.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6 mt-8">
                            {[
                                { value: '3+', label: 'Years Experience' },
                                { value: '50+', label: 'Projects Completed' },
                                { value: '25+', label: 'Happy Clients' },
                                { value: '10+', label: 'Awards Won' },
                            ].map((stat, index) => (
                                <div key={index} className="text-center p-4 glass rounded-xl">
                                    <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Content - Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="grid gap-6"
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 glass rounded-2xl hover-lift group"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl group-hover:scale-110 transition-transform">
                                        <skill.icon className="w-6 h-6" />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold font-space-grotesk mb-2">
                                            {skill.title}
                                        </h3>
                                        <p className="text-gray-300 mb-4">{skill.description}</p>

                                        <div className="flex flex-wrap gap-2">
                                            {skill.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}