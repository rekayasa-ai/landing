'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileText, Lightbulb, BookOpen, ArrowRight, Sparkles, Rocket, Users, GraduationCap, ChevronRight } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';

const sections = [
    {
        href: '/belajar/paper',
        icon: FileText,
        title: 'Paper Breakdowns',
        description: 'Bedah paper AI paling influential. Transformer, LoRA, RAG, dan lainnya dijelaskan dengan analogi yang mudah dipahami.',
        color: 'from-purple-500 to-pink-500',
        stats: '4 Papers',
    },
    {
        href: '/belajar/konsep',
        icon: Lightbulb,
        title: 'Konsep Inti',
        description: 'Micro-content tentang konsep-konsep AI fundamental. Setiap kartu = 1 konsep + 1 analogi memorable.',
        color: 'from-electric to-cyan-500',
        stats: '6 Konsep',
    },
    {
        href: '/belajar/ebook',
        icon: BookOpen,
        title: 'E-book Premium',
        description: 'Panduan lengkap AI Engineering dalam Bahasa Indonesia. Ditulis praktisi, untuk praktisi.',
        color: 'from-orange-500 to-red-500',
        stats: '4 E-books',
        isPremium: true,
    },
];

const features = [
    { icon: Sparkles, title: 'Gaya Rekayasa.ai', description: 'Analogi-based learning yang bikin konsep kompleks jadi gampang.' },
    { icon: Rocket, title: 'Selalu Update', description: 'Konten baru ditambahkan setiap minggu mengikuti perkembangan AI.' },
    { icon: Users, title: 'Komunitas', description: 'Diskusi langsung dengan AI Engineers Indonesia di Discord.' },
];

export default function BelajarPage() {
    return (
        <PageWrapper>
            {/* Hero Section */}
            <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/50 to-electric/5" />

                {/* Floating Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-20 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"
                    />
                    <motion.div
                        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-40 left-20 w-48 h-48 bg-electric/10 rounded-full blur-3xl"
                    />
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                    <div className="text-center">
                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-4xl md:text-6xl font-bold text-navy leading-tight mb-6"
                        >
                            Belajar{' '}
                            <span className="bg-gradient-to-r from-electric to-purple-500 bg-clip-text text-transparent">
                                AI Engineering
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
                        >
                            Resources lengkap untuk menjadi AI Engineer. Dari paper breakdowns hingga
                            e-book praktis, semua dalam Bahasa Indonesia.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex justify-center gap-6 sm:gap-12"
                        >
                            {[
                                { value: '14+', label: 'Resources' },
                                { value: '3', label: 'Kategori' },
                                { value: '100%', label: 'Bahasa Indonesia' },
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-navy to-electric bg-clip-text text-transparent">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-500 text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section Cards */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-6">
                        {sections.map((section, index) => (
                            <motion.div
                                key={section.href}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={section.href}
                                    className="block h-full bg-white rounded-2xl border border-gray-100 p-8 card-scale group shadow-sm"
                                >
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center shadow-lg`}>
                                            <section.icon className="w-8 h-8 text-white" />
                                        </div>
                                        {section.isPremium && (
                                            <span className="px-3 py-1 bg-gradient-to-r from-electric to-purple-500 text-white text-xs font-bold rounded-full">
                                                PREMIUM
                                            </span>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-electric transition-colors">
                                        {section.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        {section.description}
                                    </p>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <span className="text-sm text-gray-500 font-medium">{section.stats}</span>
                                        <span className="flex items-center gap-1 text-electric font-semibold">
                                            Explore
                                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-navy mb-4">
                            Kenapa Belajar di <span className="text-electric">rekayasa.ai</span>?
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-6"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-electric/10 to-purple-500/10 flex items-center justify-center mx-auto mb-4">
                                    <feature.icon className="w-7 h-7 text-electric" />
                                </div>
                                <h4 className="font-bold text-navy text-lg mb-2">{feature.title}</h4>
                                <p className="text-gray-500">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
}
