import ArchitectureHubMain from '@/pages/homes/architecture-hub/ArchitectureHubMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "SAB Creative - Architecture hub light",
};

const page = () => {
    return (
        <ArchitectureHubMain />
    );
};

export default page;