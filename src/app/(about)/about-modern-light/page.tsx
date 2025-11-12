import AboutModernMain from '@/pages/about/about-modern/AboutModernMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "SAB Creative - About Modern light",
};

const page = () => {
    return (
            <AboutModernMain/>
    );
};

export default page;