// app/components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const PelloniumLogo = () => {
    return (
        <img
            src="logo.png"
            alt="Pellonium logo"
            width={30}
            height={30}
            className="inline-block"
        />
    );
};
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`relative lg:sticky lg:top-0 z-50 py-3 sm:py-4 px-4 sm:px-6 md:px-8 lg:px-20 xl:px-40 transition-all duration-300 ${isScrolled ? 'lg:bg-white' : 'lg:bg-transparent'
            }`}>
            <div className="flex justify-between items-center relative z-3">
                {/* Logo */}
                <Link
                    href="/"
                    className="relative float-left flex text-midnight-green"
                    aria-label="home"
                >
                    <PelloniumLogo />
                    <p className='text-slate-800 my-0.5 mx-1.5 sm:mx-2 text-base sm:text-lg font-medium'>Anshul</p>
                </Link>

                {/* Desktop Navigation */}
                <div className="lg:flex hidden items-center justify-end z-3">
                    <div className="flex items-center justify-end">
                        <Link
                            href="#skills"
                            className="text-rich-black text-center px-2 xl:px-3.5 py-3.5 text-sm xl:text-base leading-none transition-colors duration-280 hover:text-faded-green"
                        >
                            Skills
                        </Link>

                        <Link
                            href="#projects"
                            className="text-rich-black text-center px-2 xl:px-3.5 py-3.5 text-sm xl:text-base leading-none transition-colors duration-280 hover:text-faded-green"
                        >
                            Projects
                        </Link>

                        <Link
                            href="#career"
                            className="text-rich-black text-center px-2 xl:px-3.5 py-3.5 text-sm xl:text-base leading-none transition-colors duration-280 hover:text-faded-green"
                        >
                            Career
                        </Link>


                        <Link
                            href="#contact"
                            className="text-rich-black text-center px-2 xl:px-3.5 py-3.5 text-sm xl:text-base leading-none transition-colors duration-280 hover:text-faded-green"
                        >
                            Contact
                        </Link>

                        {/* Desktop Button */}
                        <div className="pl-2 xl:pl-2.5">
                            <a
                                href="anshulbadoni_resume.pdf"
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block border border-rich-black bg-transparent text-rich-black text-center rounded px-3 xl:px-5 py-2 xl:py-2.5 font-roobert font-medium text-sm xl:text-base leading-[1.3] transition-all duration-280 hover:border-rich-black hover:bg-rich-black hover:text-white whitespace-nowrap"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden float-right cursor-pointer p-2 sm:p-4 relative select-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="menu"
                >
                    <div className="relative">
                        <div className={`w-5 sm:w-6 h-0.5 bg-rich-black mb-1.5 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                        <div className={`w-5 sm:w-6 h-0.5 bg-rich-black mb-1.5 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
                        <div className={`w-5 sm:w-6 h-0.5 bg-rich-black transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden fixed inset-0 top-[60px] sm:top-[72px] bg-white z-2 overflow-y-auto">
                    <div className="flex flex-col items-center justify-start p-6 sm:p-8">
                        <Link
                            href="#skills"
                            className="text-rich-black text-center px-4 py-3 sm:px-3.5 sm:py-3.5 text-sm sm:text-base leading-none transition-colors duration-280 hover:text-faded-green w-full"
                            onClick={() => setIsOpen(false)}
                        >
                            Skills
                        </Link>

                        <Link
                            href="#projects"
                            className="text-rich-black text-center px-4 py-3 sm:px-3.5 sm:py-3.5 text-sm sm:text-base leading-none transition-colors duration-280 hover:text-faded-green w-full"
                            onClick={() => setIsOpen(false)}
                        >
                            Projects
                        </Link>

                        <Link
                            href="#contact"
                            className="text-rich-black text-center px-4 py-3 sm:px-3.5 sm:py-3.5 text-sm sm:text-base leading-none transition-colors duration-280 hover:text-faded-green w-full"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>

                        {/* Mobile Button */}
                        <div className="mt-4 w-full max-w-xs">
                            <a
                                href="anshulbadoni_resume.pdf"
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full border border-rich-black bg-transparent text-rich-black text-center rounded px-8 sm:px-12 py-2.5 sm:py-3 font-roobert font-medium text-sm sm:text-base leading-[1.3] transition-all duration-280 hover:bg-rich-black hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                Download Resume
                            </a>
                        </div>

                        <Image
                            src="https://cdn.prod.website-files.com/662fddcc9cd39be8e1c8fe0b/663142af83d229a65e61565d_Mobile%20Menu%20Graphic.svg"
                            alt=""
                            width={300}
                            height={200}
                            className="mt-6 sm:mt-8 w-full max-w-[200px] sm:max-w-xs"
                        />
                    </div>
                </div>
            )}
        </nav>
    );
}
