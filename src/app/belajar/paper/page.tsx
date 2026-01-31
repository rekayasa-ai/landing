'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Search, ArrowUpRight, Calendar, Users, Tag } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import BridgeButton from '@/components/BridgeButton';
import { SEED_PAPERS } from '@/lib/supabase';

const categories = ['Semua', 'LLM', 'Vision', 'NLP', 'Agents', 'Multimodal'];

export default function PaperPage() {
    const [selectedCategory, setSelectedCategory] = useState('Semua');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPapers = SEED_PAPERS.filter((paper) => {
        const matchesCategory = selectedCategory === 'Semua' || paper.category === selectedCategory;
        const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            paper.summary.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <PageWrapper>
            {/* Clean Header */}
            <section className="bg-white border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="flex items-start justify-between">
                        <div>
                            <h1 className="text-4xl font-bold text-navy mb-3">
                                Paper Breakdowns
                            </h1>
                            <p className="text-gray-500 text-lg max-w-lg">
                                Riset AI terkini, dijelaskan dengan bahasa yang mudah dipahami.
                            </p>
                        </div>
                        <div className="hidden md:flex items-center gap-2 text-sm text-gray-400">
                            <FileText className="w-4 h-4" />
                            {SEED_PAPERS.length} papers
                        </div>
                    </div>

                    {/* Search & Filter */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Cari paper..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 bg-gray-50 border-0 rounded-lg text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/10 text-sm"
                            />
                        </div>
                        <div className="flex gap-2 overflow-x-auto pb-1">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === cat
                                            ? 'bg-navy text-white'
                                            : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Paper List */}
            <section className="bg-gray-50 min-h-[50vh]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {filteredPapers.length > 0 ? (
                        <div className="space-y-4">
                            {filteredPapers.map((paper, index) => (
                                <motion.article
                                    key={paper.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="bg-white rounded-xl p-6 border border-gray-100 hover:border-gray-200 transition-colors"
                                >
                                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="px-2.5 py-1 bg-navy/5 text-navy text-xs font-medium rounded">
                                                    {paper.category}
                                                </span>
                                                <span className="text-gray-400 text-xs flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    {paper.year}
                                                </span>
                                            </div>

                                            <h3 className="text-xl font-semibold text-navy mb-2 leading-tight">
                                                {paper.title}
                                            </h3>

                                            <p className="text-gray-500 text-sm mb-4 flex items-center gap-1.5">
                                                <Users className="w-3.5 h-3.5" />
                                                {paper.authors}
                                            </p>

                                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                                                {paper.summary}
                                            </p>
                                        </div>

                                        {/* Action */}
                                        <div className="lg:flex-shrink-0">
                                            <BridgeButton
                                                resourceUrl={paper.resource_url}
                                                label="Baca Breakdown"
                                                className="w-full lg:w-auto"
                                            />
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <FileText className="w-12 h-12 text-gray-200 mx-auto mb-4" />
                            <p className="text-gray-400">Tidak ada paper ditemukan</p>
                        </div>
                    )}
                </div>
            </section>
        </PageWrapper>
    );
}
