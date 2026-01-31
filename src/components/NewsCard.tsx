'use client';

import { motion } from 'framer-motion';
import { Calendar, Newspaper } from 'lucide-react';
import BridgeButton from './BridgeButton';
import { NewsArticle } from '@/lib/supabase';

interface NewsCardProps {
    article: NewsArticle;
    index: number;
}

export default function NewsCard({ article, index }: NewsCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card rounded-xl overflow-hidden group"
        >
            {/* Image Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                    <Newspaper className="w-10 h-10 text-gray-300" />
                </div>
            </div>

            {/* Content */}
            <div className="p-4">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(article.published_at).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                    })}
                </div>
                <h3 className="font-semibold text-navy text-sm mb-3 line-clamp-2 group-hover:text-electric transition-colors">
                    {article.title}
                </h3>
                <BridgeButton
                    resourceUrl={article.source_url}
                    label="Baca Selengkapnya"
                    className="w-full justify-center text-xs py-2"
                />
            </div>
        </motion.div>
    );
}
