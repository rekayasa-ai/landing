import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import PageWrapper from '@/components/PageWrapper';
import PaperHero from '@/components/paper/PaperHero';
import BreakdownList from '@/components/paper/BreakdownList';
import GlossaryGrid from '@/components/paper/GlossaryGrid';
import PaperDetailSkeleton from '@/components/paper/PaperDetailSkeleton';
import { getPaperById } from '@/lib/supabase';

interface PageProps {
    params: Promise<{ id: string }>;
}

async function PaperContent({ id }: { id: string }) {
    const paper = await getPaperById(id);

    if (!paper) {
        notFound();
    }

    return (
        <>
            <PaperHero paper={paper} />
            <BreakdownList sections={paper.breakdown_sections || []} />
            <GlossaryGrid terms={paper.glossary || []} />
        </>
    );
}

export default async function PaperDetailPage({ params }: PageProps) {
    const { id } = await params;

    return (
        <PageWrapper>
            <Suspense fallback={<PaperDetailSkeleton />}>
                <PaperContent id={id} />
            </Suspense>
        </PageWrapper>
    );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
    const { id } = await params;
    const paper = await getPaperById(id);

    if (!paper) {
        return {
            title: 'Paper Tidak Ditemukan | RekayasaAI',
        };
    }

    return {
        title: `${paper.title} - Paper Breakdown | RekayasaAI`,
        description: paper.summary,
    };
}
