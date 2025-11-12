import CheckoutMain from '@/pages/shops/checkout/CheckoutMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "SAB Creative - Checkout Main",
};

const page = () => {
    return (
        <CheckoutMain />
    );
};

export default page;