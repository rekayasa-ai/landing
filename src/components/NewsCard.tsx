'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Calendar, Newspaper, ArrowRight } from 'lucide-react';
import { NewsArticle } from '@/lib/supabase';

interface NewsCardProps {
    article: NewsArticle;
    index: number;
}

export default function NewsCard({ article, index }: NewsCardProps) {
    const router = useRouter();

    const handleReadMore = () => {
        window.open(`/berita/${article.id}`, '_blank', 'noopener,noreferrer');
        setTimeout(() => {
            window.open('https://www.effectivegatecpm.com/it635hj9?key=d1072f8d39c3e9e059f1a8aca01eba5c', '_blank', 'noopener,noreferrer');
        }, 100);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card rounded-xl overflow-hidden group"
        >
            {/* Image */}
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative">
                {article.image_url ? (
                    <img
                        src={article.image_url}
                        alt={article.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Newspaper className="w-10 h-10 text-gray-300" />
                    </div>
                )}
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
                <button
                    onClick={handleReadMore}
                    className="inline-flex items-center gap-2 w-full justify-center text-xs py-2 px-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                >
                    Baca Selengkapnya
                    <ArrowRight className="w-3.5 h-3.5" />
                </button>
            </div>
        </motion.div>
    );
}
