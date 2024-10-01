import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import wheel from "./../../assets/navimg/color-wheel.png"

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
    const data = [
        {
            img: "https://i.ibb.co/CnTcgn7/background-alt.jpg",
            splash: "https://i.ibb.co.com/6D2BgW1/custom-is-better-heading-bg-2.png",
            overSplash: "https://i.ibb.co.com/pxkhGxj/heading.png",
            overlay: "https://i.ibb.co.com/6JH109R/bats.png"
        },
        {
            img: "https://i.ibb.co/qY5fKJC/bg-1.jpg",
            splash: "https://i.ibb.co.com/L99bYHh/heading-bg-1.png",
            overSplash: "https://i.ibb.co.com/41M3wYc/text.png",
            overlay: "https://i.ibb.co.com/kDw549G/custom-is-better-players-2.png"
        },
        {
            img: "https://i.ibb.co/YDmsC76/bg.jpg",
            splash: "https://i.ibb.co.com/QdQr7zZ/heading-bg.png",
            overSplash: "https://i.ibb.co.com/p20LZYx/custom-is-better-heading.png",
            overlay: "https://i.ibb.co.com/cvNb3xH/gloves-2.png"
        },
        {
            img: "https://i.ibb.co/17c6xMH/custom-is-better-bg.jpg",
            splash: "https://i.ibb.co.com/558ZSfB/paintspatter.png",
            overSplash: "https://i.ibb.co.com/RvDxdMT/heading-1.png",
            overlay: "https://i.ibb.co.com/4TSX4gm/polaroid.png"
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

            <SwiperSlide
                className=' min-h-[600px] max-h-[600px] '

                style={{
                    backgroundImage: `url(${data[0].img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: "relative"
                }}
            >
                <div className='  container mx-auto items-center flex justify-between'>
                    <div className="relative w-[700px]  ">
                        <img className='' src={data[3].splash} alt="" />
                        <div className='absolute top-[15%] left-32'>
                            <img className=' w-2/3' src={data[1].overSplash} alt="" />
                            <h4 className='mt-5 text-2xl font-bold text-white'>Designed for speed & performance infield.</h4>
                            <button className='flex items-center  gap-2 bg-pink-600 text-white font-semibold px-2 py-3 rounded-md mt-5 '><img src={wheel} alt="" /><span className='hover:underline'>
                                Customize Your PRX</span></button>
                        </div>
                    </div>
                    <img className='' src={data[3].overlay} alt="" />

                </div>
            </SwiperSlide>
            <SwiperSlide
                className=' min-h-[600px] max-h-[600px] '

                style={{
                    backgroundImage: `url(${data[1].img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: "relative"
                }}
            >
                <div className='  container mx-auto items-center flex  min-h-[600px] max-h-[600px]   justify-between'>
                    <div className="relative max-w-[700px] h-fit my-auto  ">
                        <img className='' src={data[1].splash} alt="" />
                        <div className='absolute top-[15%] left-32'>
                            <span className='text-xl font-medium text-white'>See why we are #1 in</span>
                            <img className=' w-2/3' src={data[3].overSplash} alt="" />
                            <h4 className='mt-5 text-2xl font-bold text-white'>For baseball and softball.</h4>
                            <button className='flex items-center  gap-2 bg-teal-400 text-white font-semibold px-2 py-3 rounded-md mt-5 '><img src={wheel} alt="" /><span className='hover:underline'>
                                Build Your Custom 44</span></button>
                        </div>
                    </div>
                    <img className='w-[59%]' src={data[2].overlay} alt="" />

                </div>
            </SwiperSlide>
            <SwiperSlide
                className=' min-h-[600px] max-h-[600px] '

                style={{
                    backgroundImage: `url(${data[3].img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: "relative"
                }}
            >
                <div className='  container mx-auto items-center flex  min-h-[600px] max-h-[600px]   justify-between'>
                    <div className="relative max-w-[700px] h-fit my-auto  ">
                        <img className='' src={data[0].splash} alt="" />
                        <div className='absolute top-[15%] left-32'>
                            <img className=' w-2/3' src={data[2].overSplash} alt="" />
                            <h4 className='mt-5 text-2xl font-bold text-white'>There is a reason why we are the fast-growing brand with pros.</h4>
                            <button className='flex items-center  gap-2 bg-teal-400 text-white font-semibold px-2 py-3 rounded-md mt-5 '><img src={wheel} alt="" /><span className='hover:underline'>
                                Build Your Custom 44</span></button>
                        </div>
                    </div>
                    <img className='w-[55%]' src={data[1].overlay} alt="" />

                </div>
            </SwiperSlide>
            <SwiperSlide
                className=' min-h-[600px] max-h-[600px] '

                style={{
                    backgroundImage: `url(${data[2].img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: "relative"
                }}
            >
                <div className='  container mx-auto items-center flex  min-h-[600px] max-h-[600px]   justify-between'>
                    <div className="relative max-w-[700px] h-fit my-auto flex-1 ">
                        <img className='' src={data[2].splash} alt="" />
                        <div className='absolute top-[15%] left-32'>
                            <img className=' w-2/3' src={data[0].overSplash} alt="" />
                            <h4 className='mt-5 text-2xl font-bold text-white'>Max Power score rating by the BaseballBatBros.</h4>
                            <button className='flex items-center bg-gradient-to-l from-orange-600 to-green-400  gap-2  text-white font-semibold px-2 py-3 rounded-md mt-5 '><img src={wheel} alt="" /><span className='hover:underline'>
                                Build Your Custom 44</span></button>
                        </div>
                    </div>
                    <img className='w-[60%]' src={data[0].overlay} alt="" />

                </div>
            </SwiperSlide>

        </Swiper>
    );
}
