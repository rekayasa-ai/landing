'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';
import Link from 'next/link';
import type { PaperSummary } from '@/lib/supabase';

interface QuestCardProps {
    paper: PaperSummary;
    index: number;
}

export default function QuestCard({ paper, index }: QuestCardProps) {
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
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="group bg-white rounded-xl border border-gray-200
                           overflow-hidden hover:border-gray-300 hover:shadow-md
                           transition-all duration-200 cursor-pointer"
            >
                {/* Post Header */}
                <div className="px-5 pt-5 pb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                            <User className="w-4 h-4 text-gray-400" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-700">{authorsDisplay}</p>
                            <p className="text-xs text-gray-400 flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {paper.year}
                            </p>
                        </div>
                    </div>
                    {paper.status === 'draft' && (
                        <span className="px-2 py-0.5 bg-amber-50 text-amber-600 text-[10px] 
                                       font-semibold rounded-md border border-amber-200 uppercase tracking-wide">
                            Draft
                        </span>
                    )}
                </div>

                {/* Post Body */}
                <div className="px-5 pb-4">
                    <h3 className="text-lg font-bold text-gray-900 leading-snug mb-1
                                  group-hover:text-indigo-700 transition-colors">
                        {paper.alt_title || paper.title}
                    </h3>
                    {paper.alt_title && (
                        <p className="text-gray-400 text-xs mb-2">{paper.title}</p>
                    )}
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mt-2">
                        {paper.summary}
                    </p>
                </div>

                {/* Post Footer */}
                <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-end">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium 
                                    text-indigo-600 group-hover:text-indigo-700 transition-colors">
                        Baca Selengkapnya
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                </div>
            </motion.article>
        </Link>
    );
}
