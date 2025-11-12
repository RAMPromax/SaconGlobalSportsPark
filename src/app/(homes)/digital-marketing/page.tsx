import DigitalMarketingMain from '@/pages/homes/digital-marketing/DigitalMarketingMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "SAB Creative - Digital Marketing Light",
};

const page = () => {
    return (
        <DigitalMarketingMain />
    );
};

export default page;