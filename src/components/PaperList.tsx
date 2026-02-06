'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Search, Calendar, Users, ChevronDown, SlidersHorizontal } from 'lucide-react';
import BridgeButton from '@/components/BridgeButton';
import type { Paper } from '@/lib/supabase';

const categories = ['Semua', 'LLM', 'Vision', 'NLP', 'Agents', 'Multimodal'];
const sortOptions = ['Terbaru', 'Paling Relevan'];

interface PaperListProps {
    papers: Paper[];
}

export default function PaperList({ papers }: PaperListProps) {
    const [selectedCategory, setSelectedCategory] = useState('Semua');
    const [sortBy, setSortBy] = useState('Terbaru');
    const [searchQuery, setSearchQuery] = useState('');
    const [showCategories, setShowCategories] = useState(false);

    const filteredPapers = papers.filter((paper) => {
        const matchesCategory = selectedCategory === 'Semua' || paper.category === selectedCategory;
        const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            paper.summary.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <>
            {/* Header */}
            <section className="bg-white border-b border-gray-100">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                            <FileText className="w-5 h-5 text-indigo-600" />
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-navy">
                            Paper Breakdowns
                        </h1>
                    </div>
                    <p className="text-gray-500 text-center text-sm sm:text-base">
                        Riset AI terkini dengan penjelasan mudah dipahami
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400">
                        <FileText className="w-4 h-4" />
                        <span>{papers.length} papers tersedia</span>
                    </div>
                </div>
            </section>

            {/* Search & Filters */}
            <section className="bg-white sticky top-16 z-40 border-b border-gray-100">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    {/* Search Bar */}
                    <div className="relative mb-4">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Cari paper..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border-0 rounded-xl text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-sm"
                        />
                    </div>

                    {/* Category & Sort Row */}
                    <div className="flex items-center justify-between gap-3">
                        {/* Category Dropdown */}
                        <button
                            onClick={() => setShowCategories(!showCategories)}
                            className={`flex items-center gap-2 px-4 py-2 border rounded-xl text-sm font-medium transition-colors ${selectedCategory !== 'Semua'
                                ? 'border-indigo-500 text-indigo-600 bg-indigo-50'
                                : 'border-gray-200 text-gray-600 hover:border-gray-300'
                                }`}
                        >
                            <SlidersHorizontal className="w-4 h-4" />
                            {selectedCategory === 'Semua' ? 'Kategori' : selectedCategory}
                        </button>

                        {/* Sort Dropdown */}
                        <div className="relative">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="appearance-none pl-4 pr-8 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 cursor-pointer"
                            >
                                {sortOptions.map((opt) => (
                                    <option key={opt} value={opt}>{opt}</option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                    </div>

                    {/* Category Pills */}
                    <AnimatePresence>
                        {showCategories && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-4 overflow-hidden"
                            >
                                <div className="flex flex-wrap gap-2">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => {
                                                setSelectedCategory(cat);
                                                setShowCategories(false);
                                            }}
                                            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${selectedCategory === cat
                                                ? 'bg-indigo-600 text-white'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* Paper Cards */}
            <section className="bg-gray-50 min-h-[50vh]">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    {filteredPapers.length > 0 ? (
                        <div className="space-y-4">
                            {filteredPapers.map((paper, index) => (
                                <motion.article
                                    key={paper.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.03 }}
                                    className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 hover:shadow-md transition-shadow"
                                >
                                    {/* Top Row: Category & Year */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-lg">
                                            {paper.category}
                                        </span>
                                        <span className="text-gray-400 text-xs flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {paper.year}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 leading-snug">
                                        {paper.title}
                                    </h3>

                                    {/* Authors */}
                                    <p className="text-gray-400 text-sm mb-3 flex items-center gap-1.5">
                                        <Users className="w-3.5 h-3.5" />
                                        {paper.authors}
                                    </p>

                                    {/* Summary */}
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                                        {paper.summary}
                                    </p>

                                    {/* Action */}
                                    <div className="flex justify-end">
                                        <BridgeButton
                                            resourceUrl={paper.resource_url}
                                            label="Baca Breakdown"
                                            className="text-sm"
                                        />
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-xl border border-gray-100">
                            <FileText className="w-12 h-12 text-gray-200 mx-auto mb-4" />
                            <p className="text-gray-400">Tidak ada paper ditemukan</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
