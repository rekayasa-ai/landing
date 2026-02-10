'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Library, Search, X } from 'lucide-react';
import QuestCard from './QuestCard';
import type { PaperSummary } from '@/lib/supabase';

interface PaperFeedProps {
    papers: PaperSummary[];
}

export default function PaperFeed({ papers }: PaperFeedProps) {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPapers = papers.filter((paper) => {
        const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            paper.alt_title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            paper.summary?.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch;
    });

    return (
        <>
            {/* Hero Header */}
            <section className="bg-gradient-to-b from-indigo-50 to-white border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
                    {/* Icon */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-100 mb-6"
                    >
                        <Library className="w-8 h-8 text-indigo-600" />
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl font-bold text-navy mb-3"
                    >
                        Paper Feed
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto mb-8"
                    >
                        Kumpulan paper AI yang udah diterjemahin ke Bahasa Manusia. ✨
                    </motion.p>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-xl mx-auto relative"
                    >
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Cari paper transformer, GPT, attention..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-12 py-4 bg-white border border-gray-200 rounded-2xl 
                                     text-navy placeholder-gray-400 shadow-sm
                                     focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-300
                                     text-base transition-all"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 
                                         text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        )}
                    </motion.div>

                    {/* Stats */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-400 text-sm mt-4"
                    >
                        {papers.length} paper tersedia untuk dijelajahi
                    </motion.p>
                </div>
            </section>

            {/* Timeline Feed */}
            <section className="bg-gray-50/50 min-h-[60vh]">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
                    <AnimatePresence mode="wait">
                        {filteredPapers.length > 0 ? (
                            <motion.div
                                key="feed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col gap-4"
                            >
                                {filteredPapers.slice(0, 10).map((paper, index) => (
                                    <QuestCard key={paper.id} paper={paper} index={index} />
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="empty"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center justify-center py-20 px-4"
                            >
                                <Library className="w-10 h-10 text-gray-200 mb-4" />
                                <h3 className="text-base font-semibold text-gray-400 mb-1">
                                    Belum ada paper
                                </h3>
                                <p className="text-gray-400 text-sm text-center mb-5 max-w-xs">
                                    {searchQuery
                                        ? 'Coba kata kunci lain.'
                                        : 'Belum ada paper yang dipublish.'}
                                </p>
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="px-4 py-2 bg-gray-900 text-white text-sm font-medium 
                                                 rounded-lg hover:bg-gray-800 transition-colors"
                                    >
                                        Reset
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
