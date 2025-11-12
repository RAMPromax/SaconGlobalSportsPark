import CareerDetailsMain from '@/pages/career-details/CareerDetailsMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "SAB Creative - Career Details Light",
};

const page = () => {
    return (
        <CareerDetailsMain />
    );
};

export default page;