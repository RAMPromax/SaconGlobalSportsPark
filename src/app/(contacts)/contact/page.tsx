import ContactMain from '@/pages/contacts/contact/ContactMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "SAB Creative - Contact Main",
};

const page = () => {
    return (
        <ContactMain />
    );
};

export default page;