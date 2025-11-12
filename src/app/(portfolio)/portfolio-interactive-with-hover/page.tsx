import PortfolioInteractiveHover from '@/pages/portfolios/Portfolio-Interactive/PortfolioInteractiveHover';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "SAB Creative - Portfolio Interactive With Hover",
};

const page = () => {
    return (
        <PortfolioInteractiveHover />
    );
};

export default page;