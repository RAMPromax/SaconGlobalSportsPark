import PortfolioPerspectiveSlider from '@/pages/portfolios/portfolio-perspective-slider/PortfolioPerspectiveSlider';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "SAB Creative - Portfolio Perspective Slider",
};

const page = () => {
    return (
        <PortfolioPerspectiveSlider />
    );
};

export default page;