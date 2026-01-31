'use client';

import { motion } from 'framer-motion';
import { Cpu, Layers, Hash, Eye, Scissors, MessageSquare, LucideIcon } from 'lucide-react';
import BridgeButton from './BridgeButton';
import { Konsep } from '@/lib/supabase';

interface KonsepCardProps {
    konsep: Konsep;
    index: number;
}

const iconMap: Record<string, LucideIcon> = {
    Cpu,
    Layers,
    Hash,
    Eye,
    Scissors,
    MessageSquare,
};

const categoryColors: Record<string, string> = {
    Fundamental: 'from-blue-500 to-cyan-500',
    Architecture: 'from-purple-500 to-pink-500',
    Training: 'from-orange-500 to-red-500',
    Deployment: 'from-green-500 to-emerald-500',
};

export default function KonsepCard({ konsep, index }: KonsepCardProps) {
    const Icon = iconMap[konsep.icon] || Cpu;
    const gradientClass = categoryColors[konsep.category] || 'from-gray-500 to-gray-600';

    const sizeClasses: Record<string, string> = {
        normal: '',
        wide: 'bento-item-wide',
        tall: 'bento-item-tall',
        large: 'bento-item-large',
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className={`glass-card rounded-xl p-5 flex flex-col ${sizeClasses[konsep.size]}`}
        >
            {/* Icon & Category */}
            <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradientClass} flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                    {konsep.category}
                </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-navy mb-2">
                {konsep.title}
            </h3>

            {/* Short Explanation */}
            <p className="text-gray-600 text-sm mb-3 flex-grow">
                {konsep.shortExplanation}
            </p>

            {/* Analogy */}
            <div className="bg-electric/5 rounded-lg p-3 mb-4">
                <p className="text-sm text-electric font-medium">
                    💡 {konsep.analogy}
                </p>
            </div>

            {/* Action */}
            <BridgeButton
                resourceUrl={konsep.resource_url}
                label="Baca Selengkapnya"
                className="w-full justify-center text-sm"
            />
        </motion.div>
    );
}
