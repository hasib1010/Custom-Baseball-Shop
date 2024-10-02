import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import wheel from "./../../../assets/navimg/color-wheel.png"

const CustomProductsSlide = () => {
    return (
        <div>
            <div className='pb-20 pt-10  grid grid-cols-4 gap-5' >
                <div>
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
                        <SwiperSlide>
                            <img className='' src="https://44.imgix.net/frontend/builder-carousel/gloves/duck.jpeg?auto=format&w=728" alt="Duck" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='' src="https://44.imgix.net/frontend/builder-carousel/gloves/heartbreaker.jpeg?auto=format&w=728" alt="Heartbreaker" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='' src="https://44.imgix.net/frontend/builder-carousel/gloves/ice-cream.jpeg?auto=format&w=728" alt="Ice Cream" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='' src="https://44.imgix.net/frontend/builder-carousel/gloves/elephant-1b.jpeg?auto=format&w=728" alt="Elephant" />
                        </SwiperSlide>
                    </Swiper>
                    <button className='flex items-center justify-center w-full mx-auto text-white px-4 py-2 rounded-md text-xl mt-3 bg-slate-900 hover:bg-slate-700 '> <img src={wheel} alt="" /> Gloves</button>
                </div>

                <div>
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
                        <SwiperSlide>
                            <img className='' src="https://44.imgix.net/frontend/builder-carousel/bats/blonde.jpeg?auto=format&w=728" alt="Blonde Bat" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='' src="https://44.imgix.net/frontend/builder-carousel/bats/group-alloy-xp-color.jpg?auto=format&w=728" alt="Alloy XP Color" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='' src="https://44.imgix.net/frontend/builder-carousel/bats/blue.jpeg?auto=format&w=728" alt="Blue Bat" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='' src="https://44.imgix.net/frontend/builder-carousel/bats/group-alloy-xp-metal.jpeg?auto=format&w=728" alt="Alloy XP Metal" />
                        </SwiperSlide>
                    </Swiper>
                    <button className='flex items-center justify-center w-full mx-auto text-white px-4 py-2 rounded-md text-xl mt-3 bg-slate-900 hover:bg-slate-700 '> <img src={wheel} alt="" /> Gloves</button>
                </div>
                <div>
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
                        <SwiperSlide>
                            <img className='' src="https://44.imgix.net/frontend/builder-carousel/batting-gloves/pink.jpeg?auto=format&w=728" alt="Blonde Bat" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='' src="https://44.imgix.net/frontend/builder-carousel/batting-gloves/white.jpeg?auto=format&w=728" alt="Alloy XP Color" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='' src="https://44.imgix.net/frontend/builder-carousel/batting-gloves/blue.jpeg?auto=format&w=728" alt="Blue Bat" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='' src="https://44.imgix.net/frontend/builder-carousel/batting-gloves/black-gold.jpeg?auto=format&w=728" alt="Alloy XP Metal" />
                        </SwiperSlide>
                    </Swiper>
                    <button className='flex items-center justify-center w-full mx-auto text-white px-4 py-2 rounded-md text-xl mt-3 bg-slate-900 hover:bg-slate-700 '> <img src={wheel} alt="" /> Gloves</button>
                </div>
                <div>
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
                        <SwiperSlide>
                            <img className='' src="https://44.imgix.net/frontend/builder-carousel/guards/pink.jpeg?auto=format&w=728" alt="Blonde Bat" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='' src="https://44.imgix.net/frontend/builder-carousel/guards/gold.jpeg?auto=format&w=728" alt="Alloy XP Color" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='' src="https://44.imgix.net/frontend/builder-carousel/guards/slider.jpeg?auto=format&w=728" alt="Blue Bat" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='' src="https://44.imgix.net/frontend/builder-carousel/guards/red-blue.jpeg?auto=format&w=728" alt="Alloy XP Metal" />
                        </SwiperSlide>
                    </Swiper>
                    <button className='flex items-center justify-center w-full mx-auto text-white px-4 py-2 rounded-md text-xl mt-3 bg-slate-900 hover:bg-slate-700 '> <img src={wheel} alt="" /> Gloves</button>
                </div>
            </div>
        </div>
    );
};

export default CustomProductsSlide;
