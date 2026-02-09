import PageWrapper from '@/components/PageWrapper';
import PaperFeed from '@/components/PaperFeed';
import { getPublishedPapers } from '@/lib/supabase';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Perpustakaan Paper | RekayasaAI',
    description: 'Kumpulan paper AI yang udah diterjemahin ke Bahasa Manusia. Belajar riset AI terbaru dengan penjelasan sederhana.',
};

export default async function PaperPage() {
    const papers = await getPublishedPapers();

    return (
        <PageWrapper>
            <PaperFeed papers={papers} />
        </PageWrapper>
    );
}
export const revalidate = 10;
