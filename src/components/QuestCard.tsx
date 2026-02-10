'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, BookMarked } from 'lucide-react';
import Link from 'next/link';
import type { PaperSummary } from '@/lib/supabase';

interface QuestCardProps {
    paper: PaperSummary;
    index: number;
}

// Rotate through warm spine colors for variety
const SPINE_COLORS = [
    'from-amber-500 to-orange-500',
    'from-rose-500 to-pink-500',
    'from-indigo-500 to-violet-500',
    'from-emerald-500 to-teal-500',
    'from-violet-500 to-purple-500',
    'from-sky-500 to-blue-500',
    'from-fuchsia-500 to-pink-500',
];

const SPINE_GLOW_COLORS = [
    'rgba(245, 158, 11, 0.15)',
    'rgba(244, 63, 94, 0.15)',
    'rgba(99, 102, 241, 0.15)',
    'rgba(16, 185, 129, 0.15)',
    'rgba(139, 92, 246, 0.15)',
    'rgba(14, 165, 233, 0.15)',
    'rgba(217, 70, 239, 0.15)',
];

export default function QuestCard({ paper, index }: QuestCardProps) {
    const spineColor = SPINE_COLORS[index % SPINE_COLORS.length];
    const glowColor = SPINE_GLOW_COLORS[index % SPINE_GLOW_COLORS.length];

    // Format authors
    const authorsDisplay = Array.isArray(paper.authors)
        ? paper.authors.length > 2
            ? `${paper.authors[0]} et al.`
            : paper.authors.join(', ')
        : paper.authors;

    return (
        <Link href={`/belajar/paper/${paper.id}`}>
            <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
                whileHover={{
                    y: -6,
                    rotateY: 2,
                    transition: { duration: 0.25 },
                }}
                className="group relative h-full flex cursor-pointer"
                style={{ perspective: '800px' }}
            >
                {/* Book Spine */}
                <div
                    className={`w-2 sm:w-2.5 rounded-l-lg bg-gradient-to-b ${spineColor} 
                               flex-shrink-0 transition-all duration-300
                               group-hover:w-3`}
                />

                {/* Book Cover / Card Body */}
                <div
                    className="flex-1 bg-[#FFFBF5] rounded-r-xl border border-amber-100/80 
                               border-l-0 overflow-hidden flex flex-col
                               shadow-sm transition-all duration-300
                               group-hover:shadow-xl"
                    style={{
                        boxShadow: `0 2px 8px rgba(0,0,0,0.04)`,
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 12px 40px ${glowColor}, 0 4px 12px rgba(0,0,0,0.06)`;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = `0 2px 8px rgba(0,0,0,0.04)`;
                    }}
                >
                    {/* Top Bar — Year + Badges */}
                    <div className="px-4 sm:px-5 pt-4 sm:pt-5 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                            {/* Year shelf tag */}
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 
                                           bg-stone-100 text-stone-500 text-xs font-medium rounded-md
                                           border border-stone-200/60">
                                <BookMarked className="w-3 h-3" />
                                {paper.year}
                            </span>
                            {/* Draft badge */}
                            {paper.status === 'draft' && (
                                <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs 
                                               font-semibold rounded-md border border-amber-200">
                                    Draft
                                </span>
                            )}
                        </div>
                        {/* Impact badge */}
                        {paper.impact_badge && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 
                                           bg-gradient-to-r from-amber-500 to-orange-500 
                                           text-white text-xs font-semibold rounded-md 
                                           shadow-sm">
                                <Sparkles className="w-3 h-3" />
                                <span className="truncate max-w-[100px]">{paper.impact_badge}</span>
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <div className="px-4 sm:px-5 pt-3 pb-1">
                        <h3 className="text-base sm:text-lg font-bold text-stone-800 leading-snug 
                                      line-clamp-2 group-hover:text-amber-800 transition-colors duration-200">
                            {paper.title}
                        </h3>
                    </div>

                    {/* Authors */}
                    <div className="px-4 sm:px-5 pb-2">
                        <p className="text-stone-400 text-xs italic">
                            {authorsDisplay}
                        </p>
                    </div>

                    {/* Summary */}
                    <div className="px-4 sm:px-5 pb-4 flex-grow">
                        <p className="text-stone-500 text-sm leading-relaxed line-clamp-3">
                            {paper.summary}
                        </p>
                    </div>

                    {/* Footer CTA */}
                    <div className="px-4 sm:px-5 py-3 border-t border-amber-100/60 
                                  bg-gradient-to-r from-amber-50/40 to-transparent
                                  flex items-center justify-between">
                        <span className="text-xs text-stone-400">
                            Bedah lengkap tersedia
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold 
                                        text-amber-700 group-hover:text-amber-800 transition-colors">
                            Baca
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </div>
                </div>
            </motion.article>
        </Link>
    );
}
