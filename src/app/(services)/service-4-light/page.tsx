import ServiceFourMain from '@/pages/services/service-4/ServiceFourMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "SAB Creative - Service 4 Light",
};

const page = () => {
    return (
        <ServiceFourMain />
    );
};

export default page;