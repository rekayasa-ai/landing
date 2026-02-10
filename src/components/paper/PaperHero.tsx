'use client';

import { motion } from 'framer-motion';
import { Brain, Sparkles, Users, Calendar, ExternalLink } from 'lucide-react';
import type { Paper } from '@/lib/supabase';

interface PaperHeroProps {
    paper: Paper;
}

export default function PaperHero({ paper }: PaperHeroProps) {
    return (
        <section className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
                {/* Impact Badge - "Rare Item" style */}
                {paper.impact_badge && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex justify-center mb-6"
                    >
                        <span className="impact-badge inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold">
                            <Sparkles className="w-4 h-4" />
                            {paper.impact_badge}
                            <Sparkles className="w-4 h-4" />
                        </span>
                    </motion.div>
                )}

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy text-center leading-tight mb-8"
                >
                    {paper.title}
                </motion.h1>

                {/* Meta Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                >
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
                        {(Array.isArray(paper.authors) ? paper.authors : [paper.authors]).map((author, i) => (
                            <span
                                key={i}
                                className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-600 
                                         text-sm font-medium rounded-lg border border-gray-200"
                            >
                                {author}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            {paper.year}
                        </span>
                        {paper.resource_url && (
                            <a
                                href={paper.resource_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-electric hover:underline"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Baca Paper Asli
                            </a>
                        )}
                    </div>
                </motion.div>

                {/* 5-Year-Old Summary - The Hook */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="summary-box bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 sm:p-8"
                >
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                            <Brain className="w-6 h-6 text-amber-600" />
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold text-amber-700 uppercase tracking-wide mb-2">
                                Penjelasan Simpel
                            </h2>
                            <p className="text-lg sm:text-xl text-amber-900 leading-relaxed font-medium">
                                {paper.summary}
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Key Takeaways */}
                {paper.key_insights && paper.key_insights.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-10"
                    >
                        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 sm:p-8 border border-indigo-100">
                            <h3 className="text-lg font-bold text-navy mb-6 flex items-center gap-2">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100">
                                    🎯
                                </span>
                                Key Takeaways
                            </h3>
                            <div className="space-y-3">
                                {paper.key_insights.map((insight, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 + i * 0.1 }}
                                        className="flex items-start gap-3 bg-white rounded-xl p-4 border border-indigo-100 shadow-sm"
                                    >
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">
                                            {i + 1}
                                        </span>
                                        <p className="text-gray-700 leading-relaxed">
                                            {insight}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
