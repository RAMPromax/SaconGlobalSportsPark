import AboutMeMain from '@/pages/about/about-me/AboutMeMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "SAB Creative - About Me light",
};

const page = () => {
    return (
          <AboutMeMain/>
    );
};

export default page;