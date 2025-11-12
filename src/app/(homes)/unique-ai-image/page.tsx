import UniqueAIImageMain from '@/pages/homes/unique-ai-image/UniqueAIImageMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "SAB Creative - Unique AI Image Light",
};

const page = () => {
    return (
        <UniqueAIImageMain />
    );
};

export default page;
