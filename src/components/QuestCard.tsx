'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04, duration: 0.3 }}
                className="group relative bg-white rounded-lg border border-gray-200
                           h-full flex flex-col overflow-hidden
                           hover:border-gray-300 hover:shadow-md
                           transition-all duration-200 cursor-pointer"
            >
                {/* Card Body */}
                <div className="p-4 sm:p-5 flex flex-col flex-grow">

                    {/* Year + Title */}
                    <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="text-base font-semibold text-gray-900 leading-snug 
                                      line-clamp-2 group-hover:text-gray-700 transition-colors">
                            {paper.alt_title || paper.title}
                        </h3>
                        <span className="text-xs text-gray-400 font-semibold shrink-0 mt-0.5">
                            {paper.year}
                        </span>
                    </div>
                    {paper.alt_title && (
                        <p className="text-gray-400 text-[11px] mb-2 line-clamp-1">
                            {paper.title}
                        </p>
                    )}

                    {/* Summary */}
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-grow mt-1">
                        {paper.summary}
                    </p>
                </div>

                {/* Footer */}
                <div className="px-4 sm:px-5 py-2.5 border-t border-gray-100 
                              flex items-center justify-between">
                    <span className="text-[11px] text-gray-500 font-semibold truncate max-w-[65%]">
                        {authorsDisplay}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium 
                                    text-gray-500 group-hover:text-gray-900 transition-colors">
                        Baca
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                </div>
            </motion.article>
        </Link>
    );
}
