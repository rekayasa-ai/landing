import PageWrapper from '@/components/PageWrapper';
import KonsepList from '@/components/KonsepList';
import { getKonsep } from '@/lib/supabase';

export default async function KonsepPage() {
    const konsepList = await getKonsep();

    return (
        <PageWrapper>
            <KonsepList konsepList={konsepList} />
        </PageWrapper>
    );
}
