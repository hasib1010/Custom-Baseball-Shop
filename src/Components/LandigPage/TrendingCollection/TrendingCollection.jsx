import React from 'react';
import ReviewSlide from '../Review/ReviewSlide';
import TrendingSlide from './trendingSlide';

const TrendingCollection = () => {
    return (
        <div
            className=' py-10 mt-10'
            style={{ backgroundImage: 'url("https://44.imgix.net/frontend/bg-textures/grit-bg-light.jpg?auto=format")' }}
        >
            <div className='my-10 container mx-auto'>
                <div className="md:flex items-end mb-10">
                    <div className="text-center md:text-left">
                        <p className="font-semibold text-lg">
                            Custom Curated
                        </p>
                        <h2 className="font-black text-4xl md:text-5xl leading-snug md:mt-2">
                            <span className="relative"> Trending  <svg className="absolute bottom-1 left-0 w-full" viewBox="0 0 147 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.69828 6.47C20.6679 4.90897 38.5498 4.15434 56.5999 3.72083C74.6018 3.28834 92.5721 3.22505 110.556 4.1523C115.402 4.4016 120.438 4.78038 125.347 5.18651C130.404 5.60524 135.363 6.34857 140.366 6.98C142.104 7.19912 145.205 7.03599 146.065 5.82963C146.937 4.61057 144.268 3.80962 142.854 3.69409C140.288 3.48512 137.721 3.35856 135.146 3.21204C135.632 3.24025 134.134 3.1425 134.012 3.13437C133.499 3.10026 132.989 3.06758 132.477 3.03489C131.069 2.94499 129.649 2.88627 128.244 2.77934C123.941 2.45358 119.006 2.13106 114.455 1.8828C105.428 1.39118 96.4025 1.04166 87.356 0.809908C68.8906 0.336198 50.4264 0.773358 32.0818 2.1039C21.8814 2.84301 11.7179 3.88795 1.58924 4.94597C0.894129 5.01833 -0.241016 5.31153 0.102445 5.89843C0.437263 6.46962 1.96599 6.5321 2.70265 6.46861L2.69828 6.47Z" fill="#D03421"></path></svg>
                            </span> Collection
                        </h2>
                    </div>
                    <div className="hidden ml-auto md:flex">
                        <button type="button" className="js-testimonials-previous bg-torch-600 rounded mr-2 w-12 h-12 flex items-center justify-center hover:opacity-90 cursor-default opacity-50" disabled="">
                            <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.25 8.75C20.25 9.13672 19.9062 9.4375 19.5195 9.4375H3.32031L9.33594 15.8828C9.59375 16.1406 9.59375 16.5703 9.29297 16.8281C9.16406 16.957 8.99219 17 8.82031 17C8.60547 17 8.43359 16.957 8.30469 16.7852L1.17188 9.22266C0.914062 8.96484 0.914062 8.57812 1.17188 8.32031L8.30469 0.757812C8.5625 0.457031 8.99219 0.457031 9.29297 0.714844C9.59375 0.972656 9.59375 1.40234 9.33594 1.66016L3.32031 8.0625H19.5195C19.9062 8.0625 20.25 8.40625 20.25 8.75Z" fill="white">
                                </path>
                            </svg>
                        </button>
                        <button type="button" className="js-testimonials-next bg-torch-600 rounded mr-2 w-12 h-12 flex items-center justify-center hover:opacity-90"><svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.0352 9.22266L11.9023 16.7852C11.7734 16.957 11.5586 17 11.3867 17C11.2148 17 11.043 16.957 10.9141 16.8281C10.6133 16.5703 10.6133 16.1406 10.8711 15.8828L16.8867 9.4375H0.6875C0.300781 9.4375 0 9.13672 0 8.79297C0 8.44922 0.300781 8.0625 0.6875 8.0625H16.8867L10.8711 1.66016C10.6133 1.40234 10.6133 0.972656 10.9141 0.714844C11.2148 0.457031 11.6445 0.457031 11.9023 0.757812L19.0352 8.32031C19.293 8.57812 19.293 8.96484 19.0352 9.22266Z" fill="white">
                        </path>
                        </svg>
                        </button>
                    </div>
                </div>

            </div>
            <div className=' mx-auto'>
                <TrendingSlide></TrendingSlide>
            </div>
        </div>
    );
}


export default TrendingCollection;