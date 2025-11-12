
import PortfolioWebglMain from '@/pages/portfolios/portfolio-webgl/PortfolioWebglMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "SAB Creative - Portfolio Webgl Showcase",
};

const page = () => {
    return (
        <PortfolioWebglMain />
    );
};

export default page;