
import ServiceTwoMain from '@/pages/services/service-2/ServiceTwoMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "SAB Creative - Service 2 Light",
};

const page = () => {
    return (
        <ServiceTwoMain />
    );
};

export default page;