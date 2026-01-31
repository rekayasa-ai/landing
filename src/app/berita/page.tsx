'use client';

import { motion } from 'framer-motion';
import { Newspaper, Calendar, Rss } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import NewsCard from '@/components/NewsCard';
import BridgeButton from '@/components/BridgeButton';
import { SEED_NEWS } from '@/lib/supabase';

export default function BeritaPage() {
    return (
        <PageWrapper>
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20" />

                {/* Floating Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-16 right-24 w-28 h-28 bg-blue-500/10 rounded-full blur-2xl"
                    />
                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-20 left-16 w-36 h-36 bg-indigo-500/10 rounded-full blur-3xl"
                    />
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-sm font-medium mb-6"
                        >
                            <Rss className="w-4 h-4" />
                            AI News
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl font-bold text-navy mb-4"
                        >
                            Berita{' '}
                            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                                AI
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600 max-w-xl mx-auto text-lg"
                        >
                            Update terbaru dari dunia AI, khususnya yang relevan untuk Indonesia.
                        </motion.p>
                    </div>

                    {/* Featured Article */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="glass-card rounded-2xl overflow-hidden"
                    >
                        <div className="grid lg:grid-cols-2 gap-0">
                            {/* Image */}
                            <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-blue-100 to-indigo-100 relative min-h-[300px]">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Newspaper className="w-20 h-20 text-blue-200" />
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span className="px-4 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-bold rounded-full uppercase tracking-wide">
                                        Featured
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 lg:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                                    <Calendar className="w-4 h-4" />
                                    <span>28 Januari 2026</span>
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-4">
                                    Indonesia Luncurkan Roadmap AI Nasional 2025-2030
                                </h2>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    Pemerintah Indonesia mengumumkan roadmap pengembangan AI yang akan fokus pada
                                    sektor kesehatan, pertanian, dan pendidikan.
                                </p>
                                <BridgeButton
                                    resourceUrl="#"
                                    label="Baca Selengkapnya"
                                    className="self-start"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* News Grid */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-navy">Artikel Terbaru</h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {SEED_NEWS.map((article, index) => (
                            <NewsCard key={article.id} article={article} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
}
