'use client';

import { motion } from 'framer-motion';
import { LucideIcon, BookOpen, Brain, MessageSquare, Database, Link, Settings, Bot } from 'lucide-react';
import BridgeButton from './BridgeButton';
import type { Module } from '@/lib/supabase';

interface ResourceCardProps {
    module: Module;
    index?: number;
}

const iconMap: Record<string, LucideIcon> = {
    Brain, MessageSquare, Database, Link, Settings, Bot, BookOpen,
};

export default function ResourceCard({ module, index = 0 }: ResourceCardProps) {
    const IconComponent = iconMap[module.icon] || BookOpen;

    const levelStyles = {
        Beginner: 'bg-green-50 text-green-700',
        Intermediate: 'bg-amber-50 text-amber-700',
        Advanced: 'bg-red-50 text-red-700',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-xl p-5 border border-gray-100 card-hover group"
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                    <IconComponent className="w-5 h-5 text-navy" />
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium ${levelStyles[module.level]}`}>
                    {module.level}
                </span>
            </div>

            {/* Content */}
            <h3 className="font-semibold text-navy mb-2 group-hover:text-gray-700 transition-colors">
                {module.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                {module.description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                <span className="text-xs text-gray-400">
                    {module.category}
                </span>
                <BridgeButton
                    resourceUrl={module.resource_url}
                    label="Akses"
                    className="!px-3 !py-1.5 text-xs"
                />
            </div>
        </motion.div>
    );
}
