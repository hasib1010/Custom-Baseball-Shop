import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { log } from 'three/webgpu';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


export default function ReviewSlide() {


    const fakeReviews = [
        {
            review: "Amazing experience! I was updated throughout the entire process, from production to shipping. The customization options were fantastic, and the glove quality is outstanding—top-notch leather. You simply won’t find a better glove for the price!",
            name: "Jake P.",
            product: "Custom Glove"
        },
        {
            review: "Superb product! The emails kept me informed every step of the way, and the glove arrived in no time. The craftsmanship and leather quality are unbeatable for the price. Would highly recommend it to any player looking for a custom glove!",
            name: "Emily R.",
            product: "Custom Glove"
        },
        {
            review: "Very impressed with my purchase! I was notified at every stage, and the glove arrived quicker than expected. The leather feels premium, and the custom options were endless. For this quality, the price is a steal!",
            name: "Mike T.",
            product: "Custom Glove"
        },
        {
            review: "Excellent quality and great communication from start to finish. The glove exceeded my expectations—it’s durable, well-crafted, and affordable. Best deal I’ve found for a custom glove!",
            name: "Sarah M.",
            product: "Custom Glove"
        },
        {
            review: "Couldn't be happier with my new glove! Updates came regularly, and the customization options were perfect for my needs. The leather is of excellent quality, and for the price, it’s a fantastic deal. I’m already recommending it to friends!",
            name: "Chris L.",
            product: "Custom Glove"
        },
        {
            review: "This glove is everything I hoped for! Great communication throughout the process, and the quality is way beyond what I expected for the price. Customization was easy, and the leather feels premium. Can’t recommend it enough!",
            name: "Lisa G.",
            product: "Custom Glove"
        },
        {
            review: "The entire process was smooth and easy! I received emails with every update, and the glove arrived exactly as I customized it. The leather is fantastic quality, and for the price, you just can’t go wrong. Definitely a great buy!",
            name: "Tom W.",
            product: "Custom Glove"
        },
        {
            review: "I’m blown away by the quality! They kept me informed at every stage, and the glove arrived quickly. The leather feels amazing, and the customization options let me design the perfect glove. Best value for the price!",
            name: "Jenna K.",
            product: "Custom Glove"
        },
        {
            review: "Top-notch experience from start to finish! I was updated every step of the way, and the glove itself is incredible quality. The leather feels premium, and the price is unbeatable for a custom glove. I’m thrilled with my purchase!",
            name: "Ryan F.",
            product: "Custom Glove"
        },
        {
            review: "Such a great purchase! They kept me in the loop the entire time, and the glove exceeded my expectations. The leather is high-quality, and you can’t find a better glove for this price. Will definitely be buying again!",
            name: "Kelly S.",
            product: "Custom Glove"
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
                    className={`px-4 py-2 bg-[#d03421] rounded text-white ${isBeginning ? 'bg-[#e09289] cursor-none' : 'bg-gray-800'}`}
                    disabled={isBeginning}
                >
                    <FaArrowLeft />
                </button>
                <button
                    onClick={handleNext}
                    className={`px-4 py-2 bg-[#d03421] rounded text-white ${isEnd ? 'bg-[#e09289] cursor-none' : 'bg-gray-800'}`}
                    disabled={isEnd}
                >
                    <FaArrowRight />
                </button>
            </div>

            <Swiper
                className='ml-44'
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
                    <SwiperSlide className='bg-slate-300 p-5 rounded-md min-h-96 flex flex-col justify-between' key={index}>
                        <div>
                            <div className="text-[#febb32] flex mb-3">
                                {/* Star icons */}
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className='text-xl w-5 h-5 text-secondary-400'
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                ))}
                            </div>
                            <p className='min-h-60'>{slideContent.review}</p>
                        </div>

                        <div>
                            <hr className='border border-black' />
                            <p className='text-xl font-bold'>{slideContent.name}</p>
                            <p className='text-base font-medium'>{slideContent.product}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>


        </div>
    );
}
