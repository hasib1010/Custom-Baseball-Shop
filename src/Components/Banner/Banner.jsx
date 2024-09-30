import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import splash1 from "./../../assets/navimg/paintspatter.png"

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
    const data = [
        {
            img: "https://i.ibb.co/CnTcgn7/background-alt.jpg",
            splash: "https://i.ibb.co.com/6D2BgW1/custom-is-better-heading-bg-2.png"
        },
        {
            img: "https://i.ibb.co/qY5fKJC/bg-1.jpg",
            splash: "https://i.ibb.co.com/L99bYHh/heading-bg-1.png"
        },
        {
            img: "https://i.ibb.co/YDmsC76/bg.jpg",
            splash: "https://i.ibb.co.com/QdQr7zZ/heading-bg.png"
        },
        {
            img: "https://i.ibb.co/17c6xMH/custom-is-better-bg.jpg",
            splash: "https://i.ibb.co.com/558ZSfB/paintspatter.png"
        }
    ];

    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {data.map((item, index) => (
                <SwiperSlide
                    key={index}
                    style={{
                        backgroundImage: `url(${item.img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: "relative"
                    }}
                >
                    <div className='relative'>
                        <img src={item.splash} alt="" />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
