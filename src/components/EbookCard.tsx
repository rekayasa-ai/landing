'use client';

import { motion } from 'framer-motion';
import { Book, Star } from 'lucide-react';
import DirectBuyButton from './DirectBuyButton';
import { Ebook } from '@/lib/supabase';

interface EbookCardProps {
    ebook: Ebook;
    index: number;
}

export default function EbookCard({ ebook, index }: EbookCardProps) {
    const tagColors: Record<string, string> = {
        Beginner: 'bg-green-100 text-green-700',
        Intermediate: 'bg-yellow-100 text-yellow-700',
        Advanced: 'bg-red-100 text-red-700',
        Bestseller: 'bg-electric text-white',
        Trending: 'bg-purple-100 text-purple-700',
        Praktis: 'bg-blue-100 text-blue-700',
        Enterprise: 'bg-navy text-white',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 card-scale"
        >
            {/* Book Cover */}
            <div className="relative aspect-[3/4] bg-gradient-to-br from-navy via-navy-light to-electric overflow-hidden">
                {/* Cover Placeholder with Book Icon */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white/90 p-6">
                    <Book className="w-16 h-16 mb-4 opacity-80" />
                    <h3 className="text-xl font-bold text-center leading-tight">
                        {ebook.title}
                    </h3>
                    <p className="text-sm text-white/60 mt-2">{ebook.author}</p>
                </div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4">
                    <span className="price-badge text-sm">
                        {ebook.price}
                    </span>
                </div>

                {/* Tags */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
                    {ebook.tags.map((tag, i) => (
                        <span
                            key={i}
                            className={`px-2.5 py-1 rounded-full text-xs font-medium ${tagColors[tag] || 'bg-gray-100 text-gray-600'}`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {ebook.description}
                </p>

                {/* Rating Placeholder */}
                <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">5.0</span>
                </div>

                {/* Direct Buy Button - No Adsterra Bridge */}
                <DirectBuyButton
                    lynkUrl={ebook.lynkUrl}
                    price={ebook.price}
                />
            </div>
        </motion.div>
    );
}
