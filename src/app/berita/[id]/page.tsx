'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, ExternalLink, Loader2, Newspaper } from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import PageWrapper from '@/components/PageWrapper';
import AdUnit from '@/components/AdUnit';
import { getNewsArticleById, NewsArticle } from '@/lib/supabase';

export default function NewsDetailPage() {
    const params = useParams();
    const [article, setArticle] = useState<NewsArticle | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchArticle() {
            if (params.id && typeof params.id === 'string') {
                const data = await getNewsArticleById(params.id);
                setArticle(data);
            }
            setLoading(false);
        }
        fetchArticle();
    }, [params.id]);

    if (loading) {
        return (
            <PageWrapper>
                <div className="min-h-[60vh] flex items-center justify-center">
                    <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                </div>
            </PageWrapper>
        );
    }

    if (!article) {
        return (
            <PageWrapper>
                <div className="min-h-[60vh] flex flex-col items-center justify-center">
                    <Newspaper className="w-16 h-16 text-gray-300 mb-4" />
                    <h1 className="text-2xl font-bold text-gray-600 mb-2">Artikel tidak ditemukan</h1>
                    <p className="text-gray-500 mb-6">Artikel yang Anda cari tidak ada atau telah dihapus.</p>
                    <Link
                        href="/berita"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Kembali ke Berita
                    </Link>
                </div>
            </PageWrapper>
        );
    }

    return (
        <PageWrapper>
            <article className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-8"
                    >
                        <Link
                            href="/berita"
                            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Kembali ke Berita
                        </Link>
                    </motion.div>

                    {/* Article Header */}
                    <motion.header
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mb-8"
                    >
                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>
                                    {new Date(article.published_at).toLocaleDateString('id-ID', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    })}
                                </span>
                            </div>
                            {article.source_name && (
                                <>
                                    <span className="text-gray-300">•</span>
                                    <span>{article.source_name}</span>
                                </>
                            )}
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-6">
                            {article.title}
                        </h1>

                        {/* Excerpt */}
                        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                            {article.excerpt}
                        </p>
                    </motion.header>

                    {/* Featured Image */}
                    {article.image_url && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mb-8 rounded-2xl overflow-hidden"
                        >
                            <img
                                src={article.image_url}
                                alt={article.title}
                                className="w-full h-auto object-cover"
                            />
                        </motion.div>
                    )}

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="prose prose-lg max-w-none"
                    >
                        {article.content ? (
                            <div className="text-gray-700 leading-relaxed prose prose-lg max-w-none prose-headings:text-navy prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:mb-4 prose-ul:my-4 prose-li:my-1 prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-navy">
                                <ReactMarkdown>{article.content}</ReactMarkdown>
                            </div>
                        ) : (
                            <div className="glass-card rounded-xl p-8 text-center">
                                <p className="text-gray-600 mb-4">
                                    Konten lengkap artikel ini tersedia di sumber asli.
                                </p>
                                <a
                                    href={article.source_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                                >
                                    Baca di Sumber Asli
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        )}
                    </motion.div>

                    {/* Ad Unit - Native Banner */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="my-8 flex justify-center"
                    >
                        <AdUnit />
                    </motion.div>

                    {/* Source Link */}
                    {article.content && article.source_url && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-12 pt-8 border-t border-gray-200"
                        >
                            <a
                                href={article.source_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Lihat sumber asli
                            </a>
                        </motion.div>
                    )}
                </div>
            </article>
        </PageWrapper>
    );
}
