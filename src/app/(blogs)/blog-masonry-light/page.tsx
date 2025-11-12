import BlogMasonryMain from '@/pages/blogs/blog-masonry/BlogMasonryMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "SAB Creative - Blog Masonry Light",
};

const page = () => {
    return (
        <BlogMasonryMain />
    );
};

export default page;