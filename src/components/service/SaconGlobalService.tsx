"use client"
import service1 from "../../../public/assets/img/sacon-global/service/service-4.jpg";
import service2 from "../../../public/assets/img/sacon-global/service/service-2.jpg";
import service3 from "../../../public/assets/img/sacon-global/service/service-3.jpg";
import service4 from "../../../public/assets/img/sacon-global/service/service-1.jpg";
import service5 from "../../../public/assets/img/sacon-global/service/service-1.jpg";
import { StaticImageData } from "next/image";
import { useState } from 'react';

interface ServiceItem {
    id: number;
    title: string;
    imageUrl: StaticImageData;
};

const SaconGlobalService = () => {
    const [activeId, setActiveId] = useState<number>(1); 

    const services: ServiceItem[] = [
        {
            id: 1,
            title: 'FootBall',
            imageUrl: service1,
        },
        {
            id: 2,
            title: 'Cricket',
            imageUrl: service2,
        },
        {
            id: 3,
            title: 'Hokey',
            imageUrl: service3,
        },
        {
            id: 4,
            title: 'Badminton',
            imageUrl: service4,
        },
         {
            id: 5,
            title: 'Baseball',
            imageUrl: service5,
        },
        {
            id: 6,
            title: 'Basketball',
            imageUrl: service5,
        },
        {
            id: 7,
            title: 'Volleyball',
            imageUrl: service5,
        },
        
    ];

    const handleMouseEnter = (id: number) => {
        setActiveId(id);
    };

    return (
        <div className="ar-service-area ar-service-height ar-service-mr p-relative fix">
            <div className="ar-service-title-box">
                <span className="tp-section-subtitle-satisfy text-white mb-20 tp_fade_anim" data-delay=".3">
                  Sacon process
                </span>
                <h3 className="tp-section-title-clash-600 text-white fs-60 mb-0 tp_fade_anim" data-delay=".4">
                    INDIA’S FIRST PORTABLE  <br /> MULTI-SPORT COURTS.
                </h3>
            </div>

            {services.map((service) => (
                <div
                    key={service.id}
                    className={`ar-service-item d-flex align-items-end justify-content-end ${activeId === service.id ? 'active' : ''}`}
                    onMouseEnter={() => handleMouseEnter(service.id)}
                >
                    <div className="ar-service-bg" style={{ backgroundImage: `url(${service.imageUrl.src})` }}></div>
                    <span className="ar-service-title">{service.title}</span>
                </div>
            ))}
        </div>
    );
};

export default SaconGlobalService;