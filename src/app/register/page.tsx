import RegisterMain from '@/pages/register/RegisterMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "SAB Creative - Register Main",
};

const page = () => {
    return (
        <RegisterMain />
    );
};

export default page;