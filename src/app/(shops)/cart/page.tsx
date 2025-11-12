
import CartMain from '@/pages/shops/cart/CartMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "SAB Creative - Cart Main",
};

const page = () => {

    return (
        <CartMain />
    );
};

export default page;