import MobileApplicationMain from '@/pages/homes/mobile-application/MobileApplicationMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "SAB Creative - Mobile Application Light",
};

const page = () => {
    return (
        <MobileApplicationMain />
    );
};

export default page;