import ServiceThreeMain from '@/pages/services/service-3/ServiceThreeMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "SAB Creative - Service 3 Light",
};

const page = () => {
    return (
        <ServiceThreeMain />
    );
};

export default page;