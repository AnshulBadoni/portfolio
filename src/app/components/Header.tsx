// components/Header.tsx
'use client';

import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header id="top" className="fixed top-0 left-0 right-0 z-40 bg-transparent">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo Section */}
                        <ul className="logo-section flex items-center space-x-4">
                            <li>
                                <a
                                    href="/"
                                    className="logo block w-32 h-8 bg-contain bg-no-repeat"
                                    style={{ backgroundImage: 'url(https://www.uxpert.com/wp-content/uploads/2020/05/Group_8.svg)' }}
                                    aria-label="UXpert"
                                ></a>
                            </li>
                            <li className="w-px h-6 bg-gray-300"></li>
                            <li className="b-tit text-sm font-medium">Home</li>
                        </ul>

                        {/* Hamburger Menu */}
                        <div
                            className="hamburger menu-hamburger flex items-center space-x-2 cursor-pointer"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <div className="hamburger-box w-6 h-6 relative">
                                <div className="hamburger-inner absolute top-1/2 left-0 w-full h-0.5 bg-black transform -translate-y-1/2"></div>
                            </div>
                            <div className="menu-name flex space-x-1">
                                {['M', 'E', 'N', 'U'].map((letter, index) => (
                                    <span key={index} className="text-sm font-medium">{letter}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Navigation Menu */}
            <section className={`menu fixed inset-0 z-30 bg-white transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="inside h-full">
                    <div className="menu-wrapper h-full flex flex-col justify-between py-20 px-6">
                        {/* Main Menu */}
                        <div className="menu-main-container">
                            <ul className="menu space-y-6">
                                {[
                                    { href: '/', label: 'Home' },
                                    { href: '/about', label: 'About' },
                                    { href: '/work', label: 'Works' },
                                    { href: '/blog', label: 'Blog' },
                                    { href: '/join', label: 'JOIN' },
                                    { href: '/contact', label: 'Contact' }
                                ].map((item, index) => (
                                    <li key={index} className="menu-item">
                                        <span>
                                            <a
                                                href={item.href}
                                                className="text-2xl font-bold hover:text-orange-500 transition-colors"
                                            >
                                                {item.label}
                                            </a>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social Links */}
                        <ul className="socials flex space-x-6">
                            {[
                                {
                                    href: 'https://www.facebook.com/UXpert.Israel',
                                    visible: 'https://www.uxpert.com/wp-content/uploads/2020/05/facebook.svg',
                                    hidden: 'https://www.uxpert.com/wp-content/uploads/2020/06/facebook_copy.svg'
                                },
                                {
                                    href: 'https://www.instagram.com/uxpert_il/',
                                    visible: 'https://www.uxpert.com/wp-content/uploads/2020/07/instgram.svg',
                                    hidden: 'https://www.uxpert.com/wp-content/uploads/2020/07/hover.svg'
                                },
                                {
                                    href: 'https://www.linkedin.com/company/uxpert',
                                    visible: 'https://www.uxpert.com/wp-content/uploads/2020/05/Combined_shape_275.svg',
                                    hidden: 'https://www.uxpert.com/wp-content/uploads/2020/06/Combined_shape_275_Copy.svg'
                                }
                            ].map((social, index) => (
                                <li key={index}>
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-6 h-6 bg-contain bg-no-repeat hover:opacity-75 transition-opacity"
                                        style={{ backgroundImage: `url(${social.visible})` }}
                                    ></a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Menu Background Overlay */}
            <section
                className={`menu-bg fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMenuOpen(false)}
            ></section>
        </>
    );
}