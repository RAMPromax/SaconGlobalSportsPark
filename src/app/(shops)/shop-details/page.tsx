
import ShopDetailsMain from '@/pages/shops/shop-details/ShopDetailsMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "SAB Creative - Shop Details",
};

const page = () => {

    return (
        <ShopDetailsMain />
    );
};

export default page;