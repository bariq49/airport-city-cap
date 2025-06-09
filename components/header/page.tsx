"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { ClientSideStrings } from '../translations/ClientSideTranslations';
import { LanguageSelector } from './LanguageSelector';
// import TopBar from './TopBar';

export default function Header() {
    const pathname = usePathname();
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const { navigation } = ClientSideStrings(); 

    const navItems = [
        { name: navigation.home, path: '/' },
        { name: navigation.about, path: '/about' },
        { name: navigation.services, path: '/services' },
        { name: navigation.support, path: '/support' },
        { name: navigation.driver, path: '/driver' },
        { name: navigation.contact, path: '/contact' },

    ];

    return (
        <>
        {/* <TopBar/> */}
        <header className="sticky top-0 z-50 bg-white shadow-sm md:bg-primary">

            {/* <ContainerLayout> */}

                <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2 text-3xl font-extrabold tracking-tight">
                            <Image
                                src=''
                                alt="Taxi Gate"
                                width={100}
                                height={100}
                                quality={100}
                                className="md:h-12 h-12 w-auto"
                            />
                        </Link>
                    </div>
<LanguageSelector/>
                    <div className="flex items-center gap-8">
                        <nav className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.path}
                                    className={`relative px-1 py-2 text-base font-semibold transition-colors duration-300 ${
                                        pathname === item.path
                                            ? 'text-secondary'
                                            : 'text-secondary hover:text-secondary/95'
                                    }`}
                                    onMouseEnter={() => setHoveredItem(item.name)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    {item.name}
                                    <span
                                        className={`absolute bottom-0 left-0 h-[2px] bg-secondary transition-all duration-500 ${
                                            pathname === item.path
                                                ? 'w-full'
                                                : hoveredItem === item.name
                                                ? 'w-full'
                                                : 'w-0'
                                        }`}
                                    />
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-gray-800 md:text-secondary"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                    <div className="pb-6 space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`block px-5 py-3.5 text-lg font-semibold rounded-lg transition-colors duration-200 ${
                                    pathname === item.path
                                        ? 'text-primary bg-primary/10'
                                        : 'text-gray-800 hover:text-primary hover:bg-primary/5'
                                }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            {/* </ContainerLayout> */}
        </header>
        </>
    );
}