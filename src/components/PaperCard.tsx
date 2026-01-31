'use client';

import { motion } from 'framer-motion';
import { FileText, Download, Calendar, Users } from 'lucide-react';
import BridgeButton from './BridgeButton';
import { Paper } from '@/lib/supabase';

interface PaperCardProps {
    paper: Paper;
    index: number;
}

export default function PaperCard({ paper, index }: PaperCardProps) {
    const categoryColors: Record<string, string> = {
        LLM: 'bg-purple-100 text-purple-700',
        Vision: 'bg-blue-100 text-blue-700',
        NLP: 'bg-green-100 text-green-700',
        Agents: 'bg-orange-100 text-orange-700',
        Multimodal: 'bg-pink-100 text-pink-700',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card rounded-xl p-6 group"
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-navy" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[paper.category] || 'bg-gray-100 text-gray-600'}`}>
                    {paper.category}
                </span>
            </div>

            {/* Content */}
            <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-electric transition-colors">
                {paper.title}
            </h3>

            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    {paper.authors}
                </span>
                <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {paper.year}
                </span>
            </div>

            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {paper.summary}
            </p>

            {/* Key Insights */}
            <div className="flex flex-wrap gap-2 mb-5">
                {paper.keyInsights.slice(0, 3).map((insight, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                        {insight}
                    </span>
                ))}
            </div>

            {/* Action */}
            <BridgeButton
                resourceUrl={paper.resource_url}
                label="Download Breakdown"
                className="w-full justify-center"
            />
        </motion.div>
    );
}
