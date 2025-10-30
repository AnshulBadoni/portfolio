import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="px-14 pb-16 bg-[#f7f7f7]">
            <div className="w-full max-w-305 mx-auto">
                <div className="flex flex-col gap-46">
                    {/* Footer Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10 items-center">
                        {/* Logo Section */}
                        <div className="flex justify-center md:justify-start">
                            <Link href="/" className="inline-block">
                                <p className="font-roobert text-[1rem] md:text-[2rem] sm:text-[1.875rem] font-normal leading-[0.96] whitespace-normal lg:whitespace-nowrap opacity-100">Anshul</p>
                            </Link>
                        </div>
                        {/* Navigation Links */}
                        <div className="flex flex-wrap justify-center md:justify-center items-center gap-0">
                            <Link href="/about" className="text-rich-black px-3.5 py-1 text-sm leading-none hover:text-[#66787a] transition-colors duration-280">
                                About Us
                            </Link>
                            <Link href="/solutions" className="text-rich-black px-3.5 py-1 text-sm leading-none hover:text-[#66787a] transition-colors duration-280">
                                Solutions
                            </Link>
                            <Link href="#" className="text-rich-black px-3.5 py-1 text-sm leading-none hover:text-[#66787a] transition-colors duration-280">
                                News
                            </Link>
                            <Link href="/contact-us" className="text-rich-black px-3.5 py-1 text-sm leading-none hover:text-[#66787a] transition-colors duration-280">
                                Contact
                            </Link>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center md:justify-end items-center gap-4 md:col-start-3">
                            {/* Twitter/X */}
                            <a
                                href="https://twitter.com/pellonium"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-6 h-6 rounded bg-white text-[#002b31] hover:bg-midnight-green hover:text-white transition-all duration-280"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                                    <g clipPath="url(#clip0_2570_5018)">
                                        <path d="M9.45 0.5625H11.2903L7.27029 5.16879L12 11.4379H8.29714L5.39486 7.6365L2.07771 11.4379H0.235714L4.53514 6.50936L0 0.563357H3.79714L6.41657 4.03736L9.45 0.5625ZM8.80286 10.3339H9.82286L3.24 1.60907H2.14629L8.80286 10.3339Z" fill="currentColor"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2570_5018">
                                            <rect width="12" height="12" fill="currentColor"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/company/pelloniuminc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-6 h-6 rounded bg-white text-[#002b31] hover:bg-midnight-green hover:text-white transition-all duration-280"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                                    <path d="M0 1.61369C0 1.22889 0.135139 0.911425 0.405405 0.661313C0.675672 0.411189 1.02703 0.286133 1.45946 0.286133C1.88417 0.286133 2.2278 0.409261 2.49035 0.655541C2.76061 0.909509 2.89575 1.24043 2.89575 1.64833C2.89575 2.01773 2.76448 2.32557 2.50193 2.57185C2.23166 2.82581 1.87645 2.9528 1.43629 2.9528H1.42471C0.999996 2.9528 0.656375 2.82581 0.393822 2.57185C0.13127 2.31788 0 1.99849 0 1.61369ZM0.150579 11.7147V4.0033H2.72201V11.7147H0.150579ZM4.14672 11.7147H6.71815V7.40878C6.71815 7.13942 6.74904 6.93162 6.81081 6.78541C6.91891 6.52374 7.08301 6.30248 7.30309 6.12163C7.52317 5.94077 7.79922 5.85034 8.13127 5.85034C8.99614 5.85034 9.42857 6.43139 9.42857 7.59349V11.7147H12V7.29335C12 6.15433 11.7297 5.29046 11.1892 4.70172C10.6486 4.11297 9.93437 3.8186 9.04633 3.8186C8.05019 3.8186 7.27413 4.24573 6.71815 5.09998V5.12307H6.70656L6.71815 5.09998V4.0033H4.14672C4.16216 4.24957 4.16988 5.01532 4.16988 6.30056C4.16988 7.58579 4.16216 9.3905 4.14672 11.7147Z" fill="currentColor"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;