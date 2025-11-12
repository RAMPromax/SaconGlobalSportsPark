
import PortfolioHorizontalShowcase from '@/pages/portfolios/portfolio-horizontal-showcase/PortfolioHorizontalShowcase';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "SAB Creative - Portfolio Horizontal Showcase Light",
};

const page = () => {
    return (
        <PortfolioHorizontalShowcase />
    );
};

export default page;