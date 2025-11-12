import ITSolutionMain from '@/pages/homes/it-solution/ITSolutionMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "SAB Creative - IT Solution Light",
};

const page = () => {
    return (
        <ITSolutionMain />
    );
};

export default page;