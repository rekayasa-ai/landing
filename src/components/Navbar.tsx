'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, FileText, Lightbulb, BookOpen, Newspaper, Users, Handshake } from 'lucide-react';

const belajarDropdown = [
    { href: '/belajar/paper', label: 'Paper', icon: FileText, description: 'Breakdown paper AI terkini' },
    { href: '/belajar/konsep', label: 'Modul', icon: Lightbulb, description: 'Konsep inti AI' },
    { href: '/belajar/ebook', label: 'E-book', icon: BookOpen, description: 'Panduan lengkap' },
];

const navLinks = [
    { href: '/berita', label: 'Berita', icon: Newspaper },
    { href: '/komunitas', label: 'Komunitas', icon: Users },
    { href: '/kolaborasi', label: 'Kolaborasi', icon: Handshake },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isBelajarOpen, setIsBelajarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActiveBelajar = pathname.startsWith('/belajar');

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm'
            : 'bg-white border-b border-gray-100'
            }`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo - Links to Home */}
                    <Link href="/" className="flex items-center group">
                        <span className="font-['Hero'] text-2xl font-bold tracking-tight text-navy group-hover:text-electric transition-colors">
                            rekayasa<span className="text-electric">.ai</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {/* Belajar Dropdown */}
                        <div className="relative dropdown-trigger">
                            <button
                                className={`text-sm font-medium flex items-center gap-1 transition-colors ${isActiveBelajar
                                    ? 'text-electric'
                                    : 'text-gray-600 hover:text-electric'
                                    }`}
                            >
                                Belajar
                                <ChevronDown className="w-3.5 h-3.5" />
                            </button>

                            {/* Dropdown Menu */}
                            <div className="dropdown-menu absolute top-full left-0 pt-2 w-64">
                                <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 overflow-hidden">
                                    {belajarDropdown.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${pathname === item.href
                                                ? 'bg-electric/10 text-navy'
                                                : 'hover:bg-gray-50 text-gray-600 hover:text-navy'
                                                }`}
                                        >
                                            <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${pathname === item.href ? 'bg-electric text-white' : 'bg-navy/5 text-navy'
                                                }`}>
                                                <item.icon className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <div className="font-medium text-sm">{item.label}</div>
                                                <div className="text-xs text-gray-400">{item.description}</div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Other Nav Links */}
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium transition-colors ${pathname === link.href
                                    ? 'text-electric'
                                    : 'text-gray-600 hover:text-electric'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* CTA Button */}
                        <a
                            href="https://discord.gg/s9jwwtXc6V"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-electric text-white text-sm font-medium rounded-lg hover:bg-electric/90 transition-colors"
                        >
                            Join Discord
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg text-gray-500 hover:text-electric transition-colors"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation - Full Page */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="md:hidden fixed left-0 right-0 bg-white z-50 flex flex-col"
                        style={{ top: '64px', height: 'calc(100vh - 64px)' }}
                    >
                        {/* Scrollable nav content */}
                        <div className="flex-1 overflow-y-auto px-6 py-6">
                            {/* Belajar Section */}
                            <div className="mb-1">
                                <button
                                    onClick={() => setIsBelajarOpen(!isBelajarOpen)}
                                    className="w-full px-3 py-3 rounded-lg text-base font-medium flex items-center justify-between text-navy"
                                >
                                    <div className="flex items-center gap-3">
                                        <BookOpen className="w-5 h-5" />
                                        <span>Belajar</span>
                                    </div>
                                    <ChevronDown className={`w-4 h-4 transition-transform ${isBelajarOpen ? 'rotate-180' : ''}`} />
                                </button>

                                <AnimatePresence>
                                    {isBelajarOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="ml-8 mt-1 space-y-1 overflow-hidden"
                                        >
                                            {belajarDropdown.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="px-3 py-2 rounded-lg text-sm flex items-center gap-2 text-gray-600"
                                                >
                                                    <item.icon className="w-4 h-4" />
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Other Nav Links */}
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="px-3 py-3 rounded-lg text-base font-medium flex items-center gap-3 text-navy"
                                >
                                    <link.icon className="w-5 h-5" />
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Discord CTA - Always visible at bottom */}
                        <div className="flex-shrink-0 p-6 bg-white border-t border-gray-100">
                            <a
                                href="https://discord.gg/s9jwwtXc6V"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-3 bg-electric text-white text-sm font-medium rounded-lg text-center hover:bg-electric/90 transition-colors"
                            >
                                Join Discord
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
