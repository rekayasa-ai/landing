'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Brain, Cpu, Layers, Zap, Network, Box, GitBranch, Search, Filter, ChevronDown, X } from 'lucide-react';
import BridgeButton from '@/components/BridgeButton';
import type { Konsep } from '@/lib/supabase';

const categories = ['Fundamental', 'Architecture', 'Training', 'Deployment'];
const sortOptions = ['Terbaru', 'Populer', 'A-Z'];

const iconMap: { [key: string]: React.ElementType } = {
    Brain, Cpu, Layers, Zap, Network, Box, GitBranch, Lightbulb
};

interface KonsepListProps {
    konsepList: Konsep[];
}

export default function KonsepList({ konsepList }: KonsepListProps) {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [sortBy, setSortBy] = useState('Terbaru');
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilters, setShowFilters] = useState(false);

    const toggleCategory = (cat: string) => {
        setSelectedCategories(prev =>
            prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
        );
    };

    const filteredKonsep = konsepList.filter((item) => {
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(item.category);
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.shortExplanation.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const clearFilters = () => {
        setSelectedCategories([]);
    };

    return (
        <>
            {/* Header */}
            <section className="bg-white border-b border-gray-100">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
                    <h1 className="text-2xl sm:text-3xl font-bold text-navy mb-2 text-center">
                        Modul Konsep AI
                    </h1>
                    <p className="text-gray-500 text-center text-sm sm:text-base">
                        Pahami konsep-konsep AI dengan penjelasan sederhana
                    </p>
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
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-full text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric/20 focus:border-electric text-sm"
                        />
                    </div>

                    {/* Filter & Sort Row */}
                    <div className="flex items-center justify-between">
                        {/* Filters Button */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className={`flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${selectedCategories.length > 0
                                ? 'border-electric text-electric bg-electric/5'
                                : 'border-gray-200 text-gray-600 hover:border-gray-300'
                                }`}
                        >
                            <Filter className="w-4 h-4" />
                            Filters
                            {selectedCategories.length > 0 && (
                                <span className="w-5 h-5 bg-electric text-white text-xs rounded-full flex items-center justify-center">
                                    {selectedCategories.length}
                                </span>
                            )}
                        </button>

                        {/* Sort Dropdown */}
                        <div className="relative">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="appearance-none pl-4 pr-8 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-electric/20 cursor-pointer"
                            >
                                {sortOptions.map((opt) => (
                                    <option key={opt} value={opt}>{opt}</option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                    </div>

                    {/* Filter Dropdown */}
                    <AnimatePresence>
                        {showFilters && (
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
                                            onClick={() => toggleCategory(cat)}
                                            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${selectedCategories.includes(cat)
                                                ? 'bg-electric text-white'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                    {selectedCategories.length > 0 && (
                                        <button
                                            onClick={clearFilters}
                                            className="px-3 py-1.5 text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
                                        >
                                            <X className="w-3 h-3" />
                                            Clear
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* Konsep Cards */}
            <section className="bg-gray-50 min-h-[50vh]">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    {filteredKonsep.length > 0 ? (
                        <div className="space-y-4">
                            {filteredKonsep.map((konsep, index) => {
                                const IconComponent = iconMap[konsep.icon] || Lightbulb;
                                return (
                                    <motion.div
                                        key={konsep.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.03 }}
                                        className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 hover:shadow-md transition-shadow"
                                    >
                                        {/* Category Badge */}
                                        <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-xs font-semibold rounded-lg mb-3">
                                            {konsep.category}
                                        </span>

                                        {/* Title */}
                                        <h3 className="text-lg sm:text-xl font-bold text-navy mb-2">
                                            {konsep.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-500 text-sm sm:text-base mb-4 leading-relaxed">
                                            {konsep.shortExplanation}
                                        </p>

                                        {/* Source/Action Row */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="w-7 h-7 rounded-lg bg-navy/5 flex items-center justify-center">
                                                    <IconComponent className="w-4 h-4 text-navy" />
                                                </div>
                                                <span className="text-sm text-gray-600">rekayasa.ai</span>
                                            </div>
                                            <BridgeButton
                                                resourceUrl={konsep.resource_url}
                                                label="Baca"
                                                className="text-sm"
                                            />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-xl border border-gray-100">
                            <Lightbulb className="w-12 h-12 text-gray-200 mx-auto mb-4" />
                            <p className="text-gray-400">Tidak ada konsep ditemukan</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
