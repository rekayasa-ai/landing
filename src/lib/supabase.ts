import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Only create client if credentials are provided
export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

// Types for our database tables
export interface Module {
  id: string;
  title: string;
  description: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  icon: string;
  resource_url: string;
  created_at: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  image_url?: string;
  source_url: string;
  source_name?: string;
  published_at: string;
  is_featured?: boolean;
  ai_generated?: boolean;
  created_at?: string;
}

export interface SiteConfig {
  key: string;
  value: string;
}

// ============================================
// NEWS ARTICLES - Supabase Functions
// ============================================

/**
 * Fetch all news articles from Supabase, ordered by published_at desc
 * Returns empty array if no articles or Supabase not connected
 */
export async function getNewsArticles(): Promise<NewsArticle[]> {
  if (!supabase) {
    console.log('Supabase not connected');
    return [];
  }

  const { data, error } = await supabase
    .from('news_articles')
    .select('*')
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching news:', error);
    return [];
  }

  return data || [];
}

/**
 * Fetch the featured news article
 * Returns the first article with is_featured = true, or the most recent article
 */
export async function getFeaturedNews(): Promise<NewsArticle | null> {
  if (!supabase) {
    return null;
  }

  // Try to get featured article first
  const { data: featured, error: featuredError } = await supabase
    .from('news_articles')
    .select('*')
    .eq('is_featured', true)
    .limit(1)
    .single();

  if (!featuredError && featured) {
    return featured;
  }

  // Fall back to most recent article
  const { data: recent, error: recentError } = await supabase
    .from('news_articles')
    .select('*')
    .order('published_at', { ascending: false })
    .limit(1)
    .single();

  if (recentError) {
    return null;
  }

  return recent;
}

/**
 * Fetch a single news article by ID
 */
export async function getNewsArticleById(id: string): Promise<NewsArticle | null> {
  if (!supabase) {
    return null;
  }

  const { data, error } = await supabase
    .from('news_articles')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching article:', error);
    return null;
  }

  return data;
}

// Helper to get site config
export async function getSiteConfig(key: string): Promise<string | null> {
  if (!supabase) return null;

  const { data, error } = await supabase
    .from('site_config')
    .select('value')
    .eq('key', key)
    .single();

  if (error) return null;
  return data?.value || null;
}

// Seed data for development (when Supabase is not connected)
export const SEED_MODULES: Module[] = [
  {
    id: '1',
    title: 'Pengenalan AI Engineering',
    description: 'Pelajari dasar-dasar AI Engineering dan bagaimana teknologi ini mengubah industri di Indonesia.',
    category: 'Fundamental',
    level: 'Beginner',
    icon: 'Brain',
    resource_url: '#',
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Prompt Engineering Masterclass',
    description: 'Kuasai seni berkomunikasi dengan AI. Dari basic prompting hingga advanced techniques.',
    category: 'Fundamental',
    level: 'Beginner',
    icon: 'MessageSquare',
    resource_url: '#',
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'RAG: Retrieval Augmented Generation',
    description: 'Build AI yang bisa menjawab pertanyaan berdasarkan dokumen Anda sendiri.',
    category: 'Advanced',
    level: 'Intermediate',
    icon: 'Database',
    resource_url: '#',
    created_at: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'LangChain untuk Developer Indonesia',
    description: 'Framework populer untuk membangun aplikasi AI. Tutorial lengkap dalam Bahasa Indonesia.',
    category: 'Framework',
    level: 'Intermediate',
    icon: 'Link',
    resource_url: '#',
    created_at: new Date().toISOString(),
  },
  {
    id: '5',
    title: 'Fine-tuning Model AI',
    description: 'Cara melatih ulang model AI untuk kebutuhan spesifik bisnis Anda.',
    category: 'Advanced',
    level: 'Advanced',
    icon: 'Settings',
    resource_url: '#',
    created_at: new Date().toISOString(),
  },
  {
    id: '6',
    title: 'AI Agents & Automation',
    description: 'Bangun autonomous AI agents yang bisa menyelesaikan tugas kompleks secara otomatis.',
    category: 'Advanced',
    level: 'Advanced',
    icon: 'Bot',
    resource_url: '#',
    created_at: new Date().toISOString(),
  },
];

export const SEED_NEWS: NewsArticle[] = [
  {
    id: '1',
    title: 'Indonesia Luncurkan Roadmap AI Nasional 2025-2030',
    excerpt: 'Pemerintah Indonesia mengumumkan roadmap pengembangan AI yang akan fokus pada sektor kesehatan, pertanian, dan pendidikan.',
    image_url: '/images/news-ai-roadmap.jpg',
    source_url: '#',
    published_at: '2026-01-28',
  },
  {
    id: '2',
    title: 'Startup AI Indonesia Raih Pendanaan $50 Juta',
    excerpt: 'Startup AI asal Jakarta berhasil mendapatkan pendanaan Series B untuk ekspansi ke Asia Tenggara.',
    image_url: '/images/news-startup.jpg',
    source_url: '#',
    published_at: '2026-01-25',
  },
  {
    id: '3',
    title: 'OpenAI Umumkan Model Terbaru dengan Kemampuan Reasoning',
    excerpt: 'Model terbaru dari OpenAI menunjukkan kemampuan reasoning yang lebih baik untuk task kompleks.',
    image_url: '/images/news-openai.jpg',
    source_url: '#',
    published_at: '2026-01-22',
  },
  {
    id: '4',
    title: 'Universitas Indonesia Buka Program S2 AI Engineering',
    excerpt: 'UI menjadi universitas pertama di Indonesia yang membuka program magister khusus AI Engineering.',
    image_url: '/images/news-university.jpg',
    source_url: '#',
    published_at: '2026-01-20',
  },
];

// Paper Breakdowns
export interface Paper {
  id: string;
  title: string;
  authors: string;
  year: string;
  category: 'LLM' | 'Vision' | 'NLP' | 'Agents' | 'Multimodal';
  summary: string;
  keyInsights: string[];
  resource_url: string;
}

export const SEED_PAPERS: Paper[] = [
  {
    id: '1',
    title: 'Attention Is All You Need',
    authors: 'Vaswani et al.',
    year: '2017',
    category: 'LLM',
    summary: 'Paper revolusioner yang memperkenalkan arsitektur Transformer, fondasi dari semua model bahasa modern seperti GPT dan BERT.',
    keyInsights: ['Self-attention mechanism', 'Parallel processing', 'Positional encoding'],
    resource_url: '#',
  },
  {
    id: '2',
    title: 'LoRA: Low-Rank Adaptation',
    authors: 'Hu et al.',
    year: '2021',
    category: 'LLM',
    summary: 'Teknik fine-tuning yang efisien dengan menambahkan low-rank matrices ke pretrained weights, mengurangi parameter trainable hingga 10.000x.',
    keyInsights: ['Memory efficient', 'Preserves pretrained knowledge', 'Modular adapters'],
    resource_url: '#',
  },
  {
    id: '3',
    title: 'ReAct: Reasoning and Acting',
    authors: 'Yao et al.',
    year: '2022',
    category: 'Agents',
    summary: 'Framework yang menggabungkan reasoning traces dengan action sequences, memungkinkan LLM untuk berinteraksi dengan tools dan environment.',
    keyInsights: ['Thought-action loop', 'Tool augmentation', 'Interpretable decisions'],
    resource_url: '#',
  },
  {
    id: '4',
    title: 'RAG: Retrieval-Augmented Generation',
    authors: 'Lewis et al.',
    year: '2020',
    category: 'NLP',
    summary: 'Arsitektur yang menggabungkan retrieval dengan generation, memungkinkan model untuk mengakses knowledge base eksternal.',
    keyInsights: ['Knowledge grounding', 'Reduced hallucination', 'Dynamic knowledge'],
    resource_url: '#',
  },
];

// Konsep Inti (Micro-content)
export interface Konsep {
  id: string;
  title: string;
  icon: string;
  category: 'Fundamental' | 'Architecture' | 'Training' | 'Deployment';
  shortExplanation: string;
  analogy: string;
  size: 'normal' | 'wide' | 'tall' | 'large';
  resource_url: string;
}

export const SEED_KONSEP: Konsep[] = [
  {
    id: '1',
    title: 'Transformer',
    icon: 'Cpu',
    category: 'Architecture',
    shortExplanation: 'Arsitektur neural network yang menggunakan self-attention untuk memproses sequence secara paralel.',
    analogy: 'Seperti membaca buku dengan kemampuan melihat semua halaman sekaligus, bukan satu per satu.',
    size: 'large',
    resource_url: '#',
  },
  {
    id: '2',
    title: 'LoRA',
    icon: 'Layers',
    category: 'Training',
    shortExplanation: 'Teknik fine-tuning yang hanya melatih sebagian kecil parameter model.',
    analogy: 'Seperti mengganti lensa kamera tanpa mengganti seluruh kamera.',
    size: 'wide',
    resource_url: '#',
  },
  {
    id: '3',
    title: 'Embedding',
    icon: 'Hash',
    category: 'Fundamental',
    shortExplanation: 'Representasi numerik dari teks/gambar dalam ruang vektor berdimensi tinggi.',
    analogy: 'Seperti koordinat GPS yang menunjukkan "lokasi" makna sebuah kata.',
    size: 'normal',
    resource_url: '#',
  },
  {
    id: '4',
    title: 'Attention',
    icon: 'Eye',
    category: 'Architecture',
    shortExplanation: 'Mekanisme yang memungkinkan model "fokus" pada bagian input yang relevan.',
    analogy: 'Seperti highlighter yang menandai kata-kata penting dalam dokumen.',
    size: 'normal',
    resource_url: '#',
  },
  {
    id: '5',
    title: 'Tokenization',
    icon: 'Scissors',
    category: 'Fundamental',
    shortExplanation: 'Proses memecah teks menjadi unit-unit kecil (tokens) yang dapat diproses model.',
    analogy: 'Seperti memotong kalimat menjadi puzzle pieces yang bisa disusun ulang.',
    size: 'tall',
    resource_url: '#',
  },
  {
    id: '6',
    title: 'Prompt Engineering',
    icon: 'MessageSquare',
    category: 'Deployment',
    shortExplanation: 'Seni merancang instruksi yang optimal untuk mendapatkan output terbaik dari LLM.',
    analogy: 'Seperti menulis brief yang jelas untuk designer agar hasilnya sesuai ekspektasi.',
    size: 'wide',
    resource_url: '#',
  },
];

// E-books
export interface Ebook {
  id: string;
  title: string;
  author: string;
  description: string;
  coverUrl: string;
  price: string;
  lynkUrl: string;
  tags: string[];
}

export const SEED_EBOOKS: Ebook[] = [
  {
    id: '1',
    title: 'Prompt Engineering Masterclass',
    author: 'Tim Rekayasa AI',
    description: 'Panduan lengkap menguasai seni berkomunikasi dengan AI. Dari zero to advanced.',
    coverUrl: '/images/ebook-prompt.jpg',
    price: 'Rp 149.000',
    lynkUrl: 'https://lynk.id/rekayasa-ai/prompt-engineering',
    tags: ['Beginner', 'Bestseller'],
  },
  {
    id: '2',
    title: 'RAG Implementation Guide',
    author: 'Tim Rekayasa AI',
    description: 'Step-by-step membangun sistem RAG production-ready dengan Python dan LangChain.',
    coverUrl: '/images/ebook-rag.jpg',
    price: 'Rp 199.000',
    lynkUrl: 'https://lynk.id/rekayasa-ai/rag-guide',
    tags: ['Intermediate', 'Praktis'],
  },
  {
    id: '3',
    title: 'AI Agents dari Nol',
    author: 'Tim Rekayasa AI',
    description: 'Membangun autonomous AI agents yang bisa menyelesaikan tugas kompleks.',
    coverUrl: '/images/ebook-agents.jpg',
    price: 'Rp 249.000',
    lynkUrl: 'https://lynk.id/rekayasa-ai/ai-agents',
    tags: ['Advanced', 'Trending'],
  },
  {
    id: '4',
    title: 'LLM Fine-tuning Handbook',
    author: 'Tim Rekayasa AI',
    description: 'Teknik fine-tuning model AI untuk kebutuhan spesifik bisnis Indonesia.',
    coverUrl: '/images/ebook-finetune.jpg',
    price: 'Rp 299.000',
    lynkUrl: 'https://lynk.id/rekayasa-ai/finetuning',
    tags: ['Advanced', 'Enterprise'],
  },
];

// Placeholder URLs (to be replaced with real ones)
export const PLACEHOLDER_URLS = {
  adsterra: 'https://example.com/adsterra-placeholder',
  discord: 'https://discord.gg/s9jwwtXc6V',
  lynkid: 'https://lynk.id/rekayasa-ai',
};
