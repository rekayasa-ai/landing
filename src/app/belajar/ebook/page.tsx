'use client';

import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import { SEED_EBOOKS } from '@/lib/supabase';

export default function EbookPage() {
    return (
        <PageWrapper>
            {/* Library Header */}
            <section className="bg-white border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h1 className="text-4xl font-bold text-navy mb-3">
                        Koleksi E-book
                    </h1>
                    <p className="text-gray-500 text-lg max-w-lg">
                        Panduan AI Engineering dalam Bahasa Indonesia. Ditulis praktisi, untuk praktisi.
                    </p>
                </div>
            </section>

            {/* Book Collection */}
            <section className="bg-gray-50 min-h-[50vh]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SEED_EBOOKS.map((ebook, index) => (
                            <motion.a
                                key={ebook.id}
                                href={ebook.lynkUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="group block"
                            >
                                {/* Book Cover */}
                                <div className="aspect-[3/4] bg-gradient-to-br from-navy via-navy-dark to-navy rounded-lg mb-4 flex items-center justify-center relative overflow-hidden group-hover:shadow-xl transition-shadow">
                                    <BookOpen className="w-16 h-16 text-white/20" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>

                                {/* Book Info */}
                                <div>
                                    <h3 className="font-semibold text-navy group-hover:text-electric transition-colors mb-1">
                                        {ebook.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-2">
                                        {ebook.author}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {ebook.tags.slice(0, 2).map((tag) => (
                                            <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Lynk.id Link */}
                    <div className="mt-12 text-center">
                        <a
                            href="https://lynk.id/rekayasa-ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-gray-500 hover:text-navy transition-colors"
                        >
                            Lihat semua di Lynk.id
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
}
