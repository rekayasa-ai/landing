'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { PaperSummary } from '@/lib/supabase';

interface QuestCardProps {
    paper: PaperSummary;
    index: number;
}

export default function QuestCard({ paper, index }: QuestCardProps) {
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
                transition={{ delay: index * 0.05 }}
                className="group relative bg-white rounded-xl border border-gray-100 
                           overflow-hidden
                           hover:-translate-y-1 hover:shadow-xl hover:border-indigo-200 
                           transition-all duration-300 cursor-pointer h-full flex flex-col"
            >
                {/* Card Header - Gradient Strip */}
                <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600" />

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                    {/* Top Row: Year + Impact Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-lg">
                            {paper.year}
                        </span>
                        {paper.impact_badge && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 
                                           bg-gradient-to-r from-purple-500 to-indigo-500 
                                           text-white text-xs font-semibold rounded-lg 
                                           shadow-sm">
                                <Sparkles className="w-3 h-3" />
                                <span className="truncate max-w-[120px]">{paper.impact_badge}</span>
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-navy mb-2 leading-snug line-clamp-2 
                                  group-hover:text-indigo-600 transition-colors">
                        {paper.title}
                    </h3>

                    {/* Authors */}
                    <p className="text-gray-400 text-xs mb-3">
                        {authorsDisplay}
                    </p>

                    {/* Summary */}
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-grow">
                        {paper.summary}
                    </p>

                    {/* CTA Footer */}
                    <div className="flex items-center justify-end mt-4 pt-4 border-t border-gray-50">
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold 
                                       text-indigo-600 group-hover:text-indigo-700">
                            Bedah Paper
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </div>
                </div>
            </motion.article>
        </Link>
    );
}
