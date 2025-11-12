import AboutUsLightMain from '@/pages/about/about-us/AboutUsLightMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "SAB Creative - About Us light",
};

const page = () => {
    return (
        <AboutUsLightMain />
    );
};

export default page;