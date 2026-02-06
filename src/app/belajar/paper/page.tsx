import PageWrapper from '@/components/PageWrapper';
import PaperList from '@/components/PaperList';
import { getPapers } from '@/lib/supabase';

export default async function PaperPage() {
    const papers = await getPapers();

    return (
        <PageWrapper>
            <PaperList papers={papers} />
        </PageWrapper>
    );
}
