import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import wheel from "./../../../assets/navimg/color-wheel.png"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


export default function TrendingSlide() {


    const fakeReviews = [
        {
            thumb: "https://44.imgix.net/files/2749971/Final_Faith.png?auto=format%2Ccompress&w=285",
            type: "Infield / Pro 44",
            brand: "Duck Hunt"
        },
        {
            thumb: "https://44.imgix.net/files/2749979/1709807--BACK.png?auto=format%2Ccompress&w=285",
            type: "Infield / Pro 44",
            brand: "Duck Hunt"
        },
        {
            thumb: "https://44.imgix.net/files/2749970/Final_CityConnect.png?auto=format%2Ccompress&w=285",
            type: "Infield / Pro 44",
            brand: "Duck Hunt"
        },
        {
            thumb: "https://44.imgix.net/files/2749968/Final_USA.png?auto=format%2Ccompress&w=285",
            type: "Infield / Pro 44",
            brand: "Duck Hunt"
        },
        {
            thumb: "https://44.imgix.net/files/2749987/1709809--BACK.png?auto=format%2Ccompress&w=285",
            type: "Infield / Pro 44",
            brand: "Duck Hunt"
        },
        {
            thumb: "https://44.imgix.net/files/2749959/Final_Joker.png?auto=format%2Ccompress&w=285",
            type: "Infield / Pro 44",
            brand: "Duck Hunt"
        },
        {
            thumb: "https://44.imgix.net/files/2749969/Final_Sakura.png?auto=format%2Ccompress&w=285",
            type: "Infield / Pro 44",
            brand: "Duck Hunt"
        },
        {
            thumb: "https://44.imgix.net/files/2749994/1709810--BACK.png?auto=format%2Ccompress&w=285",
            type: "Infield / Pro 44",
            brand: "Duck Hunt"
        },
        {
            thumb: "https://44.imgix.net/files/2750002/1709811--BACK.png?auto=format%2Ccompress&w=285",
            type: "Infield / Pro 44",
            brand: "Duck Hunt"
        },
        {
            thumb: "https://44.imgix.net/files/2749983/1709808--BACK.png?auto=format%2Ccompress&w=285",
            type: "Infield / Pro 44",
            brand: "Duck Hunt"
        }
    ];

    const [swiperInstance, setSwiperInstance] = useState(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handlePrev = () => {
        if (swiperInstance) {
            swiperInstance.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperInstance) {
            swiperInstance.slideNext();
        }
    };

    const handleSlideChange = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <div>
            <div className="flex justify-end mb-10 space-x-4 container mx-auto">
                <button
                    onClick={handlePrev}
                    className={`px-4 py-2 bg-[#d03421] rounded text-white ${isBeginning ? 'bg-[#e09289] cursor-not-allowed' : 'bg-gray-800'}`}
                    disabled={isBeginning}
                >
                    <FaArrowLeft />
                </button>
                <button
                    onClick={handleNext}
                    className={`px-4 py-2 bg-[#d03421] rounded text-white ${isEnd ? 'bg-[#e09289] cursor-not-allowed' : 'bg-gray-800'}`}
                    disabled={isEnd}
                >
                    <FaArrowRight />
                </button>
            </div>

            <Swiper
            className='lg:ml-44'
                onSwiper={setSwiperInstance} // Set the Swiper instance here
                onSlideChange={handleSlideChange}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2.5,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4.5,
                        spaceBetween: 20,
                    },
                }}
            >
                {fakeReviews.map((slideContent, index) => (
                    <SwiperSlide className='bg-white p-5 rounded-md min-h-96 flex flex-col justify-between' key={index}>
                        <div>
                            <img src={slideContent.thumb} alt="" />
                        </div>

                        <div>
                            <div>
                                <p className='text-xl font-bold'>{slideContent.type}</p>
                                <p className='text-base font-medium'>{slideContent.brand}</p>
                            </div>
                            <button className='flex items-center justify-center w-full mx-auto text-white px-4 py-2 rounded-md text-xl mt-3 bg-slate-900 hover:bg-slate-700'>
                                <img src={wheel} alt="" /> Gloves
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}