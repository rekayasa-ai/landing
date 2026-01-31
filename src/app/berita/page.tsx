'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Calendar, Rss, Loader2, ArrowRight } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import NewsCard from '@/components/NewsCard';
import Link from 'next/link';
import { getNewsArticles, getFeaturedNews, NewsArticle } from '@/lib/supabase';

export default function BeritaPage() {
    const [news, setNews] = useState<NewsArticle[]>([]);
    const [featured, setFeatured] = useState<NewsArticle | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchNews() {
            try {
                const [articlesData, featuredData] = await Promise.all([
                    getNewsArticles(),
                    getFeaturedNews()
                ]);
                setNews(articlesData);
                setFeatured(featuredData);
            } catch (error) {
                console.error('Error fetching news:', error);
                setNews([]);
                setFeatured(null);
            } finally {
                setLoading(false);
            }
        }
        fetchNews();
    }, []);

    // Filter out featured article from the grid
    const gridNews = news.filter(article => article.id !== featured?.id);

    return (
        <PageWrapper>
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20" />

                {/* Floating Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-16 right-24 w-28 h-28 bg-blue-500/10 rounded-full blur-2xl"
                    />
                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-20 left-16 w-36 h-36 bg-indigo-500/10 rounded-full blur-3xl"
                    />
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4"
                        >
                            Berita{' '}
                            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                                AI
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600 max-w-xl mx-auto text-base sm:text-lg"
                        >
                            Update terbaru dari dunia AI, khususnya yang relevan untuk Indonesia.
                        </motion.p>
                    </div>

                    {/* Featured Article */}
                    {loading ? (
                        <div className="flex items-center justify-center py-20">
                            <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                        </div>
                    ) : !featured && news.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="glass-card rounded-2xl p-12 text-center"
                        >
                            <Newspaper className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">Belum ada berita</h3>
                            <p className="text-gray-500">Berita AI terbaru akan segera hadir.</p>
                        </motion.div>
                    ) : featured && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="glass-card rounded-2xl overflow-hidden"
                        >
                            <div className="grid lg:grid-cols-2 gap-0">
                                {/* Image */}
                                <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-blue-100 to-indigo-100 relative min-h-[200px] sm:min-h-[300px]">
                                    {featured.image_url ? (
                                        <img
                                            src={featured.image_url}
                                            alt={featured.title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Newspaper className="w-20 h-20 text-blue-200" />
                                        </div>
                                    )}
                                    <div className="absolute top-4 left-4">
                                        <span className="px-4 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-bold rounded-full uppercase tracking-wide">
                                            Featured
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5 sm:p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                                        <Calendar className="w-4 h-4" />
                                        <span>
                                            {new Date(featured.published_at).toLocaleDateString('id-ID', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric'
                                            })}
                                        </span>
                                        {featured.source_name && (
                                            <>
                                                <span className="text-gray-300">•</span>
                                                <span>{featured.source_name}</span>
                                            </>
                                        )}
                                    </div>
                                    <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-4">
                                        {featured.title}
                                    </h2>
                                    <p className="text-gray-600 mb-8 leading-relaxed">
                                        {featured.excerpt}
                                    </p>
                                    <Link
                                        href={`/berita/${featured.id}`}
                                        className="self-start inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
                                    >
                                        Baca Selengkapnya
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* News Grid - Only show if there are articles beyond the featured one */}
            {!loading && gridNews.length > 0 && (
                <section className="py-16 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-navy">Artikel Terbaru</h3>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {gridNews.map((article, index) => (
                                <NewsCard key={article.id} article={article} index={index} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </PageWrapper>
    );
}

