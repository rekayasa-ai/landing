'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Brain,
  Code,
  Database,
  Bot,
  Sparkles,
  MessageCircle,
  Mail,
  Users2,
  CheckCircle,
  ChevronRight,
  Cpu,
  Layers,
  Rocket,
  Target,
  Zap,
} from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';

const roadmapSteps = [
  {
    phase: '01',
    title: 'Foundation',
    duration: '1-2 bulan',
    icon: Brain,
    color: 'from-blue-500 to-cyan-500',
    skills: ['Python Basics', 'Mathematics for AI', 'Data Structures'],
    description: 'Bangun fondasi kuat dengan pemahaman Python dan matematika dasar.',
  },
  {
    phase: '02',
    title: 'Machine Learning',
    duration: '2-3 bulan',
    icon: Database,
    color: 'from-purple-500 to-pink-500',
    skills: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation'],
    description: 'Kuasai algoritma ML klasik dan cara mengevaluasi performa model.',
  },
  {
    phase: '03',
    title: 'Deep Learning',
    duration: '2-3 bulan',
    icon: Layers,
    color: 'from-orange-500 to-red-500',
    skills: ['Neural Networks', 'CNNs & RNNs', 'Transformers'],
    description: 'Dalami arsitektur deep learning dari neural network hingga Transformer.',
  },
  {
    phase: '04',
    title: 'LLM & Prompt Engineering',
    duration: '1-2 bulan',
    icon: MessageCircle,
    color: 'from-green-500 to-emerald-500',
    skills: ['Prompt Design', 'Few-shot Learning', 'Chain-of-Thought'],
    description: 'Belajar berinteraksi dengan LLM secara efektif untuk berbagai use case.',
  },
  {
    phase: '05',
    title: 'AI Applications',
    duration: '2-3 bulan',
    icon: Code,
    color: 'from-indigo-500 to-purple-500',
    skills: ['RAG Systems', 'LangChain/LlamaIndex', 'Vector Databases'],
    description: 'Bangun aplikasi AI production-ready dengan framework modern.',
  },
  {
    phase: '06',
    title: 'AI Agents & MLOps',
    duration: '2-3 bulan',
    icon: Bot,
    color: 'from-pink-500 to-rose-500',
    skills: ['Autonomous Agents', 'Fine-tuning', 'Deployment & Monitoring'],
    description: 'Level up ke AI agents yang autonomous dan DevOps untuk ML systems.',
  },
];

const collaborationTypes = [
  {
    icon: Target,
    title: 'Content Creator',
    description: 'Kolaborasi membuat konten edukasi AI berbahasa Indonesia.',
  },
  {
    icon: Cpu,
    title: 'Technical Writer',
    description: 'Menulis paper breakdown, tutorial, atau e-book bersama.',
  },
  {
    icon: Rocket,
    title: 'Community Partner',
    description: 'Partnership untuk membangun komunitas AI di Indonesia.',
  },
];

export default function HomePage() {
  return (
    <PageWrapper>
      {/* Hero Section - Introduction */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-electric/5 to-purple-50" />

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-20 w-32 h-32 bg-electric/10 rounded-full blur-2xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-40 left-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-navy text-white rounded-full text-sm font-medium mb-8"
            >
              #1 Platform AI Engineering Indonesia
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-7xl font-bold text-navy leading-tight mb-6"
            >
              Bangun Karir di
              <br />
              <span className="bg-gradient-to-r from-electric to-purple-500 bg-clip-text text-transparent">
                AI Engineering
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              <span className="font-semibold text-navy">rekayasa.ai</span> adalah platform edukasi AI
              berbahasa Indonesia. Kami membantu Anda menguasai AI Engineering dari fundamental
              hingga production-ready applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Link
                href="/belajar"
                className="btn-primary px-8 py-4 rounded-xl text-base font-semibold flex items-center justify-center gap-2 shadow-lg shadow-electric/25"
              >
                Mulai Belajar Gratis
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#roadmap"
                className="btn-secondary px-8 py-4 rounded-xl text-base font-semibold flex items-center justify-center gap-2"
              >
                Lihat Roadmap
                <ChevronRight className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto"
            >
              {[
                { value: '10+', label: 'Learning Paths' },
                { value: '50+', label: 'Materi' },
                { value: '5,000+', label: 'Learners' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-navy to-electric bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, y: { duration: 2, repeat: Infinity } }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-electric rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* AI Engineer Roadmap Section */}
      <section id="roadmap" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-electric/10 text-electric rounded-full text-sm font-medium mb-4"
            >
              <Zap className="w-4 h-4" />
              Learning Path
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-navy mb-4"
            >
              AI Engineer <span className="text-electric">Roadmap</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto text-lg"
            >
              Perjalanan dari zero ke AI Engineer dalam 12-18 bulan. Setiap phase dirancang
              untuk membangun skill secara sistematis.
            </motion.p>
          </div>

          {/* Roadmap Timeline */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric via-purple-500 to-pink-500" />

            <div className="space-y-8 lg:space-y-0">
              {roadmapSteps.map((step, index) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1 }}
                  className={`lg:grid lg:grid-cols-2 lg:gap-8 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                    }`}
                >
                  {/* Card */}
                  <div className={`${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16 lg:col-start-2'}`}>
                    <div className="glass-card rounded-2xl p-6 sm:p-8 card-scale">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                          <step.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-gray-200">{step.phase}</div>
                          <div className="text-sm text-electric font-medium">{step.duration}</div>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-navy mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{step.description}</p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {step.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-600 font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Point (Desktop) */}
                  <div className={`hidden lg:flex ${index % 2 === 0 ? 'justify-start' : 'justify-end col-start-1 row-start-1'}`}>
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${step.color} ring-4 ring-white shadow-lg ${index % 2 === 0 ? '-ml-2' : '-mr-2'
                      }`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              href="/belajar"
              className="btn-primary px-8 py-4 rounded-xl text-base font-semibold inline-flex items-center gap-2 shadow-lg shadow-electric/25"
            >
              Mulai dari Foundation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Consulting Section */}
      <section id="konsultasi" className="py-24 bg-navy relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-electric rounded-full text-sm font-medium mb-6"
              >
                <MessageCircle className="w-4 h-4" />
                Collaboration
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl font-bold text-white mb-6"
              >
                Mari
                <br />
                <span className="text-electric">Berkolaborasi!</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-lg mb-8"
              >
                Kami selalu terbuka untuk kolaborasi dengan siapa saja yang ingin
                berkontribusi dalam pengembangan ekosistem AI di Indonesia.
              </motion.p>

              {/* Collaboration Types */}
              <div className="space-y-4 mb-10">
                {collaborationTypes.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-electric/20 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-5 h-5 text-electric" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{service.title}</h4>
                      <p className="text-gray-400 text-sm">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Content - Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl">
                <h3 className="text-2xl font-bold text-navy mb-2">
                  Hubungi Kami
                </h3>
                <p className="text-gray-500 mb-8">
                  Punya ide kolaborasi? Kami ingin mendengarnya!
                </p>

                {/* Contact Options */}
                <div className="space-y-4 mb-8">
                  <a
                    href="mailto:hello@rekayasa.ai"
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-electric/5 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center group-hover:bg-electric/20 transition-colors">
                      <Mail className="w-6 h-6 text-electric" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Email</div>
                      <div className="font-semibold text-navy">hello@rekayasa.ai</div>
                    </div>
                  </a>

                  <a
                    href="https://discord.gg/s9jwwtXc6V"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-electric/5 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#5865F2]/10 flex items-center justify-center group-hover:bg-[#5865F2]/20 transition-colors">
                      <Users2 className="w-6 h-6 text-[#5865F2]" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Discord</div>
                      <div className="font-semibold text-navy">discord.gg/s9jwwtXc6V</div>
                    </div>
                  </a>
                </div>

                {/* Benefits */}
                <div className="border-t border-gray-100 pt-6">
                  <div className="text-sm text-gray-500 mb-3">Bentuk kolaborasi:</div>
                  <div className="space-y-2">
                    {[
                      'Kontribusi konten & tutorial',
                      'Partnership komunitas',
                      'Sponsorship & branding',
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
