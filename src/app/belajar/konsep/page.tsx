'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Brain, Cpu, Layers, Zap, Network, Box, GitBranch, Search, ChevronDown } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import BridgeButton from '@/components/BridgeButton';
import { SEED_KONSEP } from '@/lib/supabase';

const categories = ['Fundamental', 'Architecture', 'Training', 'Deployment'];
const levels = ['Beginner', 'Intermediate'];
const sortOptions = ['Terbaru', 'Populer'];

const iconMap: { [key: string]: React.ElementType } = {
    Brain, Cpu, Layers, Zap, Network, Box, GitBranch, Lightbulb
};

export default function KonsepPage() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
    const [sortBy, setSortBy] = useState('Terbaru');
    const [searchQuery, setSearchQuery] = useState('');

    const toggleCategory = (cat: string) => {
        setSelectedCategories(prev =>
            prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
        );
    };

    const toggleLevel = (level: string) => {
        setSelectedLevels(prev =>
            prev.includes(level) ? prev.filter(l => l !== level) : [...prev, level]
        );
    };

    const filteredKonsep = SEED_KONSEP.filter((item) => {
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(item.category);
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.shortExplanation.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const clearFilters = () => {
        setSelectedCategories([]);
        setSelectedLevels([]);
    };

    return (
        <PageWrapper>
            {/* Header */}
            <section className="bg-white border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="max-w-xl">
                        <h1 className="text-4xl font-bold text-navy mb-3">
                            Konsep Inti
                        </h1>
                        <p className="text-gray-500 text-lg">
                            Pahami konsep-konsep AI fundamental dengan penjelasan sederhana dan analogi yang memorable.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar Filters */}
                        <aside className="lg:w-64 flex-shrink-0">
                            <div className="bg-white rounded-lg border border-gray-100 p-5">
                                {/* Search */}
                                <div className="relative mb-6">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Cari..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border-0 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/10"
                                    />
                                </div>

                                {/* Filters Header */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm font-semibold text-navy">Filters</span>
                                    {(selectedCategories.length > 0 || selectedLevels.length > 0) && (
                                        <button
                                            onClick={clearFilters}
                                            className="text-xs text-electric hover:underline"
                                        >
                                            Clear All
                                        </button>
                                    )}
                                </div>

                                {/* Category Filter */}
                                <div className="mb-6">
                                    <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">
                                        Kategori
                                    </h4>
                                    <div className="space-y-2">
                                        {categories.map((cat) => (
                                            <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedCategories.includes(cat)}
                                                    onChange={() => toggleCategory(cat)}
                                                    className="w-4 h-4 rounded border-gray-300 text-navy focus:ring-navy/20"
                                                />
                                                <span className="text-sm text-gray-600 group-hover:text-navy">
                                                    {cat}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Level Filter */}
                                <div>
                                    <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">
                                        Level
                                    </h4>
                                    <div className="space-y-2">
                                        {levels.map((level) => (
                                            <label key={level} className="flex items-center gap-2 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedLevels.includes(level)}
                                                    onChange={() => toggleLevel(level)}
                                                    className="w-4 h-4 rounded border-gray-300 text-navy focus:ring-navy/20"
                                                />
                                                <span className="text-sm text-gray-600 group-hover:text-navy">
                                                    {level}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Content */}
                        <div className="flex-1">
                            {/* Sort & Count */}
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-sm text-gray-500">
                                    {filteredKonsep.length} konsep
                                </span>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-500">Sort by:</span>
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="text-sm font-medium text-navy bg-transparent border-0 focus:outline-none cursor-pointer"
                                    >
                                        {sortOptions.map((opt) => (
                                            <option key={opt} value={opt}>{opt}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Konsep List */}
                            {filteredKonsep.length > 0 ? (
                                <div className="space-y-4">
                                    {filteredKonsep.map((konsep, index) => {
                                        const IconComponent = iconMap[konsep.icon] || Lightbulb;
                                        return (
                                            <motion.div
                                                key={konsep.id}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: index * 0.03 }}
                                                className="bg-white rounded-lg border border-gray-100 p-5 hover:border-gray-200 transition-colors"
                                            >
                                                <div className="flex gap-4">
                                                    {/* Icon */}
                                                    <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center flex-shrink-0">
                                                        <IconComponent className="w-6 h-6 text-navy" />
                                                    </div>

                                                    {/* Content */}
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-start justify-between gap-4 mb-2">
                                                            <div>
                                                                <span className="inline-block px-2 py-0.5 bg-electric/10 text-electric text-xs font-medium rounded mb-2">
                                                                    {konsep.category}
                                                                </span>
                                                                <h3 className="font-semibold text-navy">
                                                                    {konsep.title}
                                                                </h3>
                                                            </div>
                                                            <BridgeButton
                                                                resourceUrl={konsep.resource_url}
                                                                label="Baca"
                                                                className="flex-shrink-0"
                                                            />
                                                        </div>
                                                        <p className="text-gray-600 text-sm mb-3">
                                                            {konsep.shortExplanation}
                                                        </p>
                                                        <p className="text-sm text-gray-400 italic">
                                                            💡 {konsep.analogy}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="text-center py-20 bg-white rounded-lg border border-gray-100">
                                    <Lightbulb className="w-12 h-12 text-gray-200 mx-auto mb-4" />
                                    <p className="text-gray-400">Tidak ada konsep ditemukan</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
}
