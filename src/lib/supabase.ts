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

// ============================================
// PAPERS - Supabase Functions
// ============================================

/**
 * Fetch all papers from Supabase
 * Returns empty array if no papers or Supabase not connected
 */
export async function getPapers(): Promise<Paper[]> {
  if (!supabase) {
    console.log('Supabase not connected');
    return [];
  }

  const { data, error, status, statusText } = await supabase
    .from('papers')
    .select('*')
    .order('year', { ascending: false });

  if (error) {
    console.error('Error fetching papers:', error);
    console.error('Status:', status, statusText);
    return [];
  }

  console.log('Papers fetched:', data?.length || 0, 'records');
  return data || [];
}

// Lightweight type for listing (avoids heavy breakdown_sections JSON)
export type PaperSummary = {
  id: string;
  title: string;
  alt_title?: string | null;
  summary: string;
  impact_badge: string;
  authors: string[];
  year: number;
  created_at: string;
  status?: 'draft' | 'published';
};

/**
 * Fetch papers with only summary fields (optimized for listing).
 * - Production (main branch): returns only published papers
 * - Preview (dev branch): returns both draft and published papers
 */
export async function getPublishedPapers(): Promise<PaperSummary[]> {
  if (!supabase) {
    console.log('Supabase not connected');
    return [];
  }

  // Show drafts everywhere EXCEPT production (main branch on Vercel)
  const isProduction = process.env.VERCEL_ENV === 'production';
  const showDrafts = !isProduction;

  console.log('[Papers] VERCEL_ENV:', process.env.VERCEL_ENV, '| showDrafts:', showDrafts);

  let query = supabase
    .from('papers')
    .select('id, title, alt_title, summary, impact_badge, authors, year, created_at, status');

  if (!showDrafts) {
    query = query.eq('status', 'published');
  }

  const { data, error } = await query.order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching papers:', error);
    return [];
  }

  return data || [];
}

// ============================================
// EBOOKS - Supabase Functions
// ============================================

/**
 * Fetch all ebooks from Supabase
 * Returns empty array if no ebooks or Supabase not connected
 */
export async function getEbooks(): Promise<Ebook[]> {
  if (!supabase) {
    console.log('Supabase not connected');
    return [];
  }

  const { data, error } = await supabase
    .from('ebooks')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching ebooks:', error);
    return [];
  }

  return data || [];
}

// ============================================
// KONSEP - Supabase Functions
// ============================================

/**
 * Fetch all konsep from Supabase
 * Returns empty array if no konsep or Supabase not connected
 */
export async function getKonsep(): Promise<Konsep[]> {
  if (!supabase) {
    console.log('Supabase not connected');
    return [];
  }

  const { data, error } = await supabase
    .from('konsep')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching konsep:', error);
    return [];
  }

  return data || [];
}

// Paper Breakdowns - Types for JSONB columns
export type BreakdownSection = {
  title: string;
  original_text: string;
  simplified_explanation: string;
  analogy: string;
};

export type GlossaryTerm = {
  term: string;
  definition: string;
};

export interface Paper {
  id: string;
  title: string;
  alt_title?: string | null;
  authors: string[];
  year: number;
  resource_url: string;
  summary: string;
  impact_badge: string;
  key_insights: string[];
  breakdown_sections: BreakdownSection[];
  glossary: GlossaryTerm[];
  created_at: string;
  category?: 'LLM' | 'Vision' | 'NLP' | 'Agents' | 'Multimodal';
  status?: 'draft' | 'published';
}

/**
 * Fetch a single paper by ID from Supabase
 */
export async function getPaperById(id: string): Promise<Paper | null> {
  if (!supabase) {
    console.log('Supabase not connected');
    return null;
  }

  const { data, error } = await supabase
    .from('papers')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching paper:', error);
    return null;
  }

  return data;
}

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

// Placeholder URLs (to be replaced with real ones)
export const PLACEHOLDER_URLS = {
  adsterra: 'https://example.com/adsterra-placeholder',
  discord: 'https://discord.gg/s9jwwtXc6V',
  lynkid: 'https://lynk.id/rekayasa-ai',
};

