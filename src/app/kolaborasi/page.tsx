'use client';

import { motion } from 'framer-motion';
import {
    Handshake,
    Award,
    Users,
    CheckCircle,
    ArrowRight,
    Star,
    BookOpen,
    Send,
    Sparkles,
    PenTool,
} from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';

const benefits = [
    { icon: Award, title: 'Nama di Platform', description: 'Profil kamu ditampilkan sebagai kontributor.' },
    { icon: Users, title: 'Expand Network', description: 'Terhubung dengan AI practitioners.' },
    { icon: Star, title: 'Personal Brand', description: 'Bangun reputasi sebagai expert.' },
    { icon: BookOpen, title: 'Premium Access', description: 'Akses eksklusif ke resources.' },
];

const steps = [
    { step: '01', title: 'Pilih Topik', description: 'Pilih topik AI yang kamu kuasai.', color: 'from-green-500 to-emerald-500' },
    { step: '02', title: 'Tulis Konten', description: 'Buat modul dengan gaya analogi-based.', color: 'from-electric to-cyan-500' },
    { step: '03', title: 'Review', description: 'Tim kami bantu polish kontenmu.', color: 'from-purple-500 to-pink-500' },
    { step: '04', title: 'Publish', description: 'Konten live dan membantu ribuan learners.', color: 'from-orange-500 to-red-500' },
];

const topics = [
    'Prompt Engineering', 'LangChain & LlamaIndex', 'RAG Implementation',
    'AI Agents', 'Fine-tuning', 'NLP Bahasa Indonesia',
    'Computer Vision', 'MLOps', 'AI Ethics',
];

export default function KolaborasiPage() {
    return (
        <PageWrapper>
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/20" />

                {/* Floating Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-20 right-24 w-28 h-28 bg-green-500/10 rounded-full blur-2xl"
                    />
                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-24 left-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"
                    />
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-sm font-medium mb-6"
                        >
                            <PenTool className="w-4 h-4" />
                            Open Contribution
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl font-bold text-navy mb-4"
                        >
                            Jadi{' '}
                            <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                                Kontributor
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600 max-w-xl mx-auto text-lg"
                        >
                            Share knowledge tentang AI dan bantu membangun ekosistem AI Engineering di Indonesia.
                        </motion.p>
                    </div>

                    {/* Benefits */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
                    >
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center mx-auto mb-3">
                                    <benefit.icon className="w-6 h-6 text-green-600" />
                                </div>
                                <h4 className="font-bold text-navy mb-1">{benefit.title}</h4>
                                <p className="text-gray-500 text-sm">{benefit.description}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* How to Contribute */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-navy">Cara Berkontribusi</h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((item, index) => (
                            <div key={index} className="relative">
                                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}>
                                        <span className="text-white font-bold">{item.step}</span>
                                    </div>
                                    <h4 className="font-bold text-navy text-lg mb-2">{item.title}</h4>
                                    <p className="text-gray-500">{item.description}</p>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                                        <ArrowRight className="w-6 h-6 text-gray-300" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Topics */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card rounded-2xl p-8 text-center"
                    >
                        <h4 className="font-bold text-navy text-xl mb-6">Topik yang Dibutuhkan</h4>
                        <div className="flex flex-wrap justify-center gap-3">
                            {topics.map((topic, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 font-medium hover:border-green-500 hover:text-green-600 transition-colors cursor-default"
                                >
                                    {topic}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-navy relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '32px 32px'
                    }} />
                </div>

                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/25">
                            <Handshake className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Tertarik Berkontribusi?
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-md mx-auto">
                            Kirim proposal topik kamu. Tim kami akan review dan menghubungi dalam 2-3 hari kerja.
                        </p>
                        <a
                            href="mailto:contribute@rekayasa.ai"
                            className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2 transition-all shadow-lg shadow-green-500/25"
                        >
                            <Send className="w-5 h-5" />
                            Kirim Proposal
                        </a>
                    </motion.div>
                </div>
            </section>
        </PageWrapper>
    );
}
