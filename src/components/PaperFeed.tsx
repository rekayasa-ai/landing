'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Search, X, Sparkles } from 'lucide-react';
import QuestCard from './QuestCard';
import type { PaperSummary } from '@/lib/supabase';

interface PaperFeedProps {
    papers: PaperSummary[];
}

// Floating decoration component
function FloatingEmoji({ emoji, delay, x, y }: { emoji: string; delay: number; x: string; y: string }) {
    return (
        <motion.span
            className="absolute text-2xl sm:text-3xl select-none pointer-events-none opacity-20"
            style={{ left: x, top: y }}
            animate={{
                y: [0, -12, 0],
                rotate: [0, 8, -8, 0],
            }}
            transition={{
                duration: 4 + delay,
                repeat: Infinity,
                delay: delay,
                ease: 'easeInOut',
            }}
        >
            {emoji}
        </motion.span>
    );
}

export default function PaperFeed({ papers }: PaperFeedProps) {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPapers = papers.filter((paper) => {
        const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            paper.summary?.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch;
    });

    return (
        <>
            {/* Library Header — Compact & Warm */}
            <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-orange-50/50 to-stone-50 border-b border-amber-100/60">
                {/* Floating decorations */}
                <FloatingEmoji emoji="📚" delay={0} x="8%" y="20%" />
                <FloatingEmoji emoji="✨" delay={1.2} x="85%" y="15%" />
                <FloatingEmoji emoji="🧠" delay={0.6} x="92%" y="60%" />
                <FloatingEmoji emoji="📖" delay={1.8} x="5%" y="70%" />
                <FloatingEmoji emoji="💡" delay={0.9} x="75%" y="75%" />

                {/* Warm ambient glow */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-200/15 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
                    <div className="flex flex-col items-center text-center">
                        {/* Icon + Title row */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-3 mb-3"
                        >
                            <div className="p-2.5 rounded-xl bg-amber-100 border border-amber-200/60">
                                <BookOpen className="w-6 h-6 text-amber-700" />
                            </div>
                            <h1 className="text-2xl sm:text-3xl font-bold text-stone-800">
                                Perpustakaan Paper
                            </h1>
                        </motion.div>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="text-stone-500 text-sm sm:text-base max-w-md mb-6"
                        >
                            Paper AI yang diterjemahin ke{' '}
                            <span className="text-amber-700 font-medium">Bahasa Manusia</span>.
                            Masuk dulu, baca nanti juga ketagihan ✨
                        </motion.p>

                        {/* Search Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="w-full max-w-lg relative"
                        >
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-400" />
                            <input
                                type="text"
                                placeholder="Cari paper... transformer, GPT, attention"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-11 pr-11 py-3 bg-white/80 backdrop-blur-sm 
                                         border border-amber-200/60 rounded-xl
                                         text-stone-700 placeholder-stone-400 
                                         shadow-sm shadow-amber-100/50
                                         focus:outline-none focus:ring-2 focus:ring-amber-300/40 focus:border-amber-300
                                         text-sm transition-all"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 
                                             text-stone-400 hover:text-stone-600 transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                        </motion.div>

                        {/* Paper count */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.35 }}
                            className="text-stone-400 text-xs mt-3"
                        >
                            {papers.length} paper di rak — selamat menjelajah 📖
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Bookshelf Section */}
            <section className="bg-gradient-to-b from-stone-50 to-stone-100/50 min-h-[60vh]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
                    {/* Shelf label */}
                    {filteredPapers.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-2 mb-6"
                        >
                            <Sparkles className="w-4 h-4 text-amber-500" />
                            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                                {searchQuery ? `Hasil pencarian — ${filteredPapers.length} paper` : 'Semua Paper'}
                            </span>
                        </motion.div>
                    )}

                    <AnimatePresence mode="wait">
                        {filteredPapers.length > 0 ? (
                            <motion.div
                                key="grid"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
                            >
                                {filteredPapers.map((paper, index) => (
                                    <QuestCard key={paper.id} paper={paper} index={index} />
                                ))}
                            </motion.div>
                        ) : (
                            /* Empty State — Library style */
                            <motion.div
                                key="empty"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="flex flex-col items-center justify-center py-20 px-4"
                            >
                                <div className="w-20 h-20 rounded-2xl bg-amber-50 border border-amber-100 
                                              flex items-center justify-center mb-6">
                                    <span className="text-4xl">📚</span>
                                </div>
                                <h3 className="text-lg font-bold text-stone-500 mb-2">
                                    Rak ini masih kosong
                                </h3>
                                <p className="text-stone-400 text-sm text-center mb-6 max-w-sm">
                                    {searchQuery
                                        ? 'Coba kata kunci lain, atau reset pencarian untuk lihat semua koleksi.'
                                        : 'Belum ada paper yang dipublish. Stay tuned ya! 🔥'}
                                </p>
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="px-5 py-2.5 bg-amber-600 text-white text-sm font-semibold 
                                                 rounded-xl hover:bg-amber-700 transition-colors 
                                                 shadow-sm shadow-amber-200"
                                    >
                                        Reset Pencarian
                                    </button>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>
        </>
    );
}
