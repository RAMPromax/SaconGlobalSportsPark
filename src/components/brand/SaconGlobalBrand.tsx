
"use client"

// Import Swiper components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

interface BrandItem {
    id: number;
    title: string;
}

const SaconGlobalBrand = () => {
    const brandItems: BrandItem[] = [
        { id: 1, title: 'Football' },
        { id: 2, title: 'Badminton' },
        { id: 3, title: 'Cricket' },
        { id: 4, title: 'Swimming' },
        { id: 5, title: 'Hockey' },
        { id: 6, title: 'Basketball' },
        { id: 7, title: 'Volleyball' },
        { id: 8, title: 'Baseball' },
        { id: 9, title: 'Tennis' },
    ];

    return (
        <div className="ar-brand-area ar-brand-style">
            <div className="tp-brand-wrapper red-bg z-index-1">
                <div className="swiper-container tp-brand-active">
                    <div className="swiper-wrapper slide-transtion">
                        <Swiper
                            modules={[Autoplay, FreeMode]}
                            loop={true}
                            freeMode={true}
                            slidesPerView='auto'
                            spaceBetween={30}
                            centeredSlides={true}
                            allowTouchMove={false}
                            speed={12000}
                            autoplay={{
                                delay: 1,
                                disableOnInteraction: true,
                            }}
                        >
                            {brandItems.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="tp-brand-item">
                                        <span className="tp-brand-title">{item.title}</span>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SaconGlobalBrand;