import PageWrapper from '@/components/PageWrapper';
import EbookList from '@/components/EbookList';
import { getEbooks } from '@/lib/supabase';

export default async function EbookPage() {
    const ebooks = await getEbooks();

    return (
        <PageWrapper>
            <EbookList ebooks={ebooks} />
        </PageWrapper>
    );
}
