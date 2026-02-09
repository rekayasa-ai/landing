'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GlossaryTerm } from '@/lib/supabase';

interface GlossaryGridProps {
    terms: GlossaryTerm[];
}

export default function GlossaryGrid({ terms }: GlossaryGridProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!terms || terms.length === 0) {
        return null;
    }

    const currentTerm = terms[currentIndex];
    const totalTerms = terms.length;

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? totalTerms - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === totalTerms - 1 ? 0 : prev + 1));
    };

    return (
        <section className="bg-white py-10 sm:py-16 border-t border-gray-100">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-100 mb-4">
                        <BookOpen className="w-6 h-6 text-purple-600" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-2">
                        Glossary
                    </h2>
                    <p className="text-gray-500">
                        Istilah-istilah penting dari paper ini
                    </p>
                </div>

                {/* Flashcard Container */}
                <div className="relative">
                    {/* Progress Indicator */}
                    <div className="flex justify-center items-center gap-2 mb-6">
                        <span className="text-sm font-medium text-gray-500">
                            {currentIndex + 1} / {totalTerms}
                        </span>
                        <div className="flex gap-1">
                            {terms.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-2 h-2 rounded-full transition-all duration-200 ${idx === currentIndex
                                            ? 'bg-purple-500 w-4'
                                            : 'bg-gray-200 hover:bg-gray-300'
                                        }`}
                                    aria-label={`Go to term ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Flashcard */}
                    <div className="relative min-h-[280px] sm:min-h-[240px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                                className="flashcard bg-gradient-to-br from-purple-50 via-white to-indigo-50 rounded-2xl p-8 sm:p-10 border-2 border-purple-100 shadow-lg"
                            >
                                {/* Term */}
                                <h4 className="text-2xl sm:text-3xl font-bold text-navy mb-4 text-center">
                                    {currentTerm.term}
                                </h4>

                                {/* Divider */}
                                <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full mx-auto mb-6" />

                                {/* Definition */}
                                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
                                    {currentTerm.definition}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button
                            onClick={goToPrevious}
                            className="flex items-center gap-2 px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
                            aria-label="Previous term"
                        >
                            <ChevronLeft className="w-5 h-5" />
                            <span className="hidden sm:inline">Sebelumnya</span>
                        </button>

                        <button
                            onClick={goToNext}
                            className="flex items-center gap-2 px-5 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
                            aria-label="Next term"
                        >
                            <span className="hidden sm:inline">Selanjutnya</span>
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Keyboard Hint */}
                    <p className="text-center text-xs text-gray-400 mt-4">
                        Gunakan tombol panah ← → atau klik dot di atas
                    </p>
                </div>
            </div>
        </section>
    );
}
