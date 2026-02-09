'use client';

import { Layers } from 'lucide-react';
import BreakdownCard from './BreakdownCard';
import type { BreakdownSection } from '@/lib/supabase';

interface BreakdownListProps {
    sections: BreakdownSection[];
}

export default function BreakdownList({ sections }: BreakdownListProps) {
    if (!sections || sections.length === 0) {
        return null;
    }

    return (
        <section className="bg-gray-50 py-10 sm:py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-100 mb-4">
                        <Layers className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-2">
                        Deep Dive
                    </h2>
                    <p className="text-gray-500">
                        Breakdown per bagian dengan penjelasan mudah dipahami
                    </p>
                </div>

                {/* Breakdown Cards */}
                <div className="space-y-6">
                    {sections.map((section, index) => (
                        <BreakdownCard key={index} section={section} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
