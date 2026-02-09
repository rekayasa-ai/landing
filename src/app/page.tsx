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
  FileText,
  Lightbulb,
  BookOpen,
  GraduationCap,
} from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';

const roadmapSteps = [
  {
    phase: '01',
    title: 'Introduction to AI Engineering',
    duration: '1 bulan',
    icon: Brain,
    color: 'from-blue-500 to-cyan-500',
    skills: ['AI Engineering', 'Workflow & Orchestration', 'AI Application'],
    description: 'Fondasi AI Engineering: memahami sistem AI, workflow, dan arsitektur aplikasi AI modern.',
  },
  {
    phase: '02',
    title: 'Large Language Models',
    duration: '1-2 bulan',
    icon: MessageCircle,
    color: 'from-purple-500 to-pink-500',
    skills: ['LLM Architecture', 'Model Selection', 'API Integration'],
    description: 'Memahami cara kerja LLM, arsitektur Transformer, dan integrasi dengan berbagai provider.',
  },
  {
    phase: '03',
    title: 'Prompt Engineering',
    duration: '1-2 bulan',
    icon: Sparkles,
    color: 'from-orange-500 to-red-500',
    skills: ['Prompting Techniques', 'Prompt Versioning', 'Prompt Defense'],
    description: 'Teknik utama dalam pembuatan sistem AI modern: memaksimalkan output LLM tanpa mengubah model weights, cukup dengan crafting prompt.',
  },
  {
    phase: '04',
    title: 'Retrieval Augmented Generation',
    duration: '2-3 bulan',
    icon: Database,
    color: 'from-green-500 to-emerald-500',
    skills: ['Vector Databases', 'Embeddings', 'RAG Systems'],
    description: 'Meningkatkan kapabilitas AI dengan data spesifik untuk memitigasi halusinasi dan memperkaya konteks respons.',
  },
  {
    phase: '05',
    title: 'Fine-Tuning LLM',
    duration: '2-3 bulan',
    icon: Layers,
    color: 'from-indigo-500 to-purple-500',
    skills: ['Supervised Fine-Tuning', 'Preference Fine-Tuning', 'Dataset Engineering'],
    description: 'Solusi ketika RAG tidak cukup: melatih ulang model untuk perilaku dan output yang lebih spesifik.',
  },
  {
    phase: '06',
    title: 'Agentic AI',
    duration: '2-3 bulan',
    icon: Bot,
    color: 'from-pink-500 to-rose-500',
    skills: ['AI Agents', 'Tools', 'Context Engineering', 'Multi-Agent'],
    description: 'AI yang autonomous dan terhubung ke dunia luar melalui tool calling, standar implementasi AI masa depan.',
  },
  {
    phase: '07',
    title: 'LLMOps',
    duration: '2-3 bulan',
    icon: Rocket,
    color: 'from-cyan-500 to-blue-500',
    skills: ['Observability', 'Evaluation', 'Deployment'],
    description: 'Production-ready AI: monitoring, evaluasi performa, dan deployment sistem LLM.',
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

const belajarSections = [
  {
    href: '/belajar/paper',
    icon: FileText,
    title: 'Paper Breakdowns',
    description: 'Breakdown detail paper-paper AI paling influential. Transformer, LoRA, RAG, dan lainnya dijelaskan secara mendalam.',
    color: 'from-purple-500 to-pink-500',
    stats: '4 Papers',
  },
  {
    href: '/belajar/konsep',
    icon: Lightbulb,
    title: 'Microlearning',
    description: 'Konsep-konsep AI fundamental dijelaskan dengan istilah sederhana dan analogi yang mudah dipahami.',
    color: 'from-electric to-cyan-500',
    stats: '6 Konsep',
  },
  {
    href: '/belajar/ebook',
    icon: BookOpen,
    title: 'E-book Premium',
    description: 'Panduan lengkap AI Engineering dalam Bahasa Indonesia. Ditulis praktisi, untuk praktisi.',
    color: 'from-orange-500 to-red-500',
    stats: '4 E-books',
    isPremium: true,
  },
];

const belajarFeatures = [
  { icon: Sparkles, title: 'Bahasa Sederhana', description: 'Analogi-based learning yang bikin konsep kompleks jadi gampang.' },
  { icon: Rocket, title: 'Selalu Update', description: 'Konten baru ditambahkan setiap minggu mengikuti perkembangan AI.' },
  { icon: Users2, title: 'Komunitas', description: 'Diskusi langsung dengan AI Engineers Indonesia di Discord.' },
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
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-navy leading-tight mb-6"
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
              className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              <span className="font-semibold text-navy">Rekayasa AI</span> adalah platform edukasi AI berbahasa Indonesia. Kami
              membantu Anda menguasai AI Engineering dari fundamental hingga production-ready applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <a
                href="#belajar"
                className="btn-primary px-8 py-4 rounded-xl text-base font-semibold flex items-center justify-center gap-2 shadow-lg shadow-electric/25"
              >
                Mulai Belajar Sekarang
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#roadmap"
                className="btn-secondary px-8 py-4 rounded-xl text-base font-semibold flex items-center justify-center gap-2"
              >
                Lihat Roadmap
                <ChevronRight className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Stats - Commented out for now
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
            */}
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

      {/* Belajar Section - Learning Resources */}
      <section id="belajar" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 text-orange-600 rounded-full text-sm font-semibold mb-4"
            >
              <Rocket className="w-4 h-4" />
              Saatnya Upgrade Skill
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4"
            >
              Kuasai <span className="text-electric">AI Engineering</span> Sekarang
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
            >
              AI adoption meningkat pesat. Perusahaan berlomba mengintegrasikan AI ke bisnis mereka.
              <span className="font-semibold text-navy"> Skill AI Engineering bukan pilihan namun kebutuhan.</span>
            </motion.p>
          </div>

          {/* Resource Cards */}
          <div className="grid lg:grid-cols-3 gap-6">
            {belajarSections.map((section, index) => (
              <motion.div
                key={section.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={section.href}
                  className="block h-full bg-gray-50 rounded-2xl border border-gray-100 p-8 card-scale group hover:shadow-lg transition-all"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center shadow-lg`}>
                      <section.icon className="w-8 h-8 text-white" />
                    </div>
                    {section.isPremium && (
                      <span className="px-3 py-1 bg-gradient-to-r from-electric to-purple-500 text-white text-xs font-bold rounded-full">
                        PREMIUM
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-electric transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    {section.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-sm text-gray-500 font-medium">{section.stats}</span>
                    <span className="flex items-center gap-1 text-electric font-semibold text-sm">
                      Explore
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Why Learn Here */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20 mb-10"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-navy">
              Kenapa Belajar di Rekayasa AI?
            </h3>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto">
              Platform edukasi AI yang dirancang untuk Indonesia
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {belajarFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-2xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-electric/10 to-purple-500/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-electric" />
                </div>
                <h4 className="font-bold text-navy text-lg mb-2">{feature.title}</h4>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Engineer Roadmap Section */}
      <section id="roadmap" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4"
            >
              AI Engineering <span className="text-electric">Roadmap</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
            >
              Roadmap yang <span className="font-semibold text-navy">diselaraskan dengan kebutuhan industri global</span>.
              Perjalanan 12-18 bulan untuk menjadi AI Engineer yang siap bersaing di pasar internasional.
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
              Start your journey
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-electric/20 text-electric rounded-full text-sm font-semibold mb-6"
              >
                <Users2 className="w-4 h-4" />
                Bangun Bersama
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
              >
                Mari <span className="text-electric">Berkolaborasi!</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-lg leading-relaxed mb-8"
              >
                Ekosistem AI Indonesia butuh lebih banyak kontributor.
                <span className="text-white font-medium"> Jadilah bagian dari movement ini.</span> Bangun konten, komunitas, atau partnership bersama kami.
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
                    href="mailto:mail.rekayasaai@gmail.com"
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-electric/5 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center group-hover:bg-electric/20 transition-colors">
                      <Mail className="w-6 h-6 text-electric" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Email</div>
                      <div className="font-semibold text-navy">mail.rekayasaai@gmail.com</div>
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
