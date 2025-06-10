"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ClientSideStrings } from '../translations/ClientSideTranslations';
import { LanguageSelector } from './LanguageSelector';
import ContainerLayout from '../layouts/ContainerLayout';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    const { navigation } = ClientSideStrings();

    const navItems = [
        { name: navigation.home, path: '/' },
        { name: navigation.about, path: '/about' },
        { name: navigation.services, path: '/services' },
        { name: navigation.fleet, path: '/fleet' },
        { name: navigation.contact, path: '/contact' },
    ];

    return (
        <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
            scrolled ? "bg-black shadow-md py-4" : "py-4 bg-black/50"
        }`}>
            <ContainerLayout>
                <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2 text-3xl text-white font-extrabold tracking-tight">
                            Logo
                        </Link>
                    </div>
                    
                    <div className="flex items-center gap-4 md:gap-8">
                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.path}
                                    className={`relative px-1 py-2 text-base font-semibold transition-colors duration-300 ${
                                        pathname === item.path
                                            ? 'text-secondary'
                                            : 'text-white hover:text-secondary'
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

                        {/* Language Selector - Desktop */}
                        <div className="hidden md:block">
                            <LanguageSelector />
                        </div>

                        {/* Mobile Menu Button and Language Selector */}
                        <div className="flex items-center gap-4 md:hidden">
                            <div className="md:hidden">
                                <LanguageSelector />
                            </div>
                            <button
                                className="text-white focus:outline-none"
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
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden  overflow-hidden transition-all duration-300 ease-in-out ${
                    mobileMenuOpen ? 'max-h-[500px] opacity-100 bg-black' : 'max-h-0 opacity-0'
                }`}>
                    <div className="pb-6 space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`block px-5 py-3.5 text-lg font-semibold rounded-lg transition-colors duration-200 ${
                                    pathname === item.path
                                        ? 'text-secondary bg-secondary/10'
                                        : 'text-white hover:text-secondary hover:bg-secondary/5'
                                }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </ContainerLayout>
        </header>
    );
}