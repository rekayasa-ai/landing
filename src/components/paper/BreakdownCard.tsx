'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, ChevronDown, BookOpen } from 'lucide-react';
import type { BreakdownSection } from '@/lib/supabase';

interface BreakdownCardProps {
    section: BreakdownSection;
    index: number;
}

export default function BreakdownCard({ section, index }: BreakdownCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
        >
            {/* Section Title */}
            <div className="bg-gradient-to-r from-navy/5 to-transparent px-6 py-4 border-b border-gray-100">
                <h3 className="text-lg sm:text-xl font-bold text-navy flex items-center gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-bold">
                        {index + 1}
                    </span>
                    {section.title}
                </h3>
            </div>

            {/* Content Area */}
            <div className="p-6">
                {/* Desktop: Side-by-side layout */}
                <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6">
                    {/* Left: Original Text (Academic Feel) */}
                    <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <div className="flex items-center gap-2 mb-3">
                            <BookOpen className="w-4 h-4 text-gray-400" />
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                                Original Text
                            </span>
                        </div>
                        <p className="font-mono text-sm text-gray-600 leading-relaxed">
                            {section.original_text}
                        </p>
                    </div>

                    {/* Right: Simplified Explanation (Casual Feel) */}
                    <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                                🇮🇩 Penjelasan Bahasa Indonesia
                            </span>
                        </div>
                        <p className="text-base text-navy leading-relaxed font-medium">
                            {section.simplified_explanation}
                        </p>
                    </div>
                </div>

                {/* Mobile: Stacked with Accordion */}
                <div className="lg:hidden">
                    {/* Simplified Explanation First (Priority on Mobile) */}
                    <div className="bg-blue-50 rounded-xl p-5 border border-blue-100 mb-4">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                                🇮🇩 Penjelasan Simpel
                            </span>
                        </div>
                        <p className="text-base text-navy leading-relaxed font-medium">
                            {section.simplified_explanation}
                        </p>
                    </div>

                    {/* Collapsible Original Text */}
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 rounded-xl text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                        <span className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4" />
                            Show Technical Context
                        </span>
                        <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''
                                }`}
                        />
                    </button>

                    <motion.div
                        initial={false}
                        animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <div className="pt-4">
                            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                                <p className="font-mono text-sm text-gray-600 leading-relaxed">
                                    {section.original_text}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Analogy Box - Highlighted */}
                {section.analogy && (
                    <div className="mt-6 analogy-box bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-5 border-2 border-dashed border-amber-300">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                                <Lightbulb className="w-5 h-5 text-amber-600" />
                            </div>
                            <div>
                                <span className="text-xs font-semibold text-amber-600 uppercase tracking-wide">
                                    Analogi
                                </span>
                                <p className="mt-1 text-amber-900 leading-relaxed">
                                    {section.analogy}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </motion.article>
    );
}
