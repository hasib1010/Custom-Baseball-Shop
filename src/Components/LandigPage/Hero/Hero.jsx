import React from 'react';

const Hero = () => {
    return (
        <div className='container mx-auto mt-10'>
            <h4 className='text-xl text-center'>Always Custom Since 2011</h4>
            <h2 class="font-black text-4xl md:text-5xl leading-snug mt-2 text-center">Over <span class="relative">500,000<svg class="absolute bottom-1 left-0 w-full" viewBox="0 0 147 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.69828 6.47C20.6679 4.90897 38.5498 4.15434 56.5999 3.72083C74.6018 3.28834 92.5721 3.22505 110.556 4.1523C115.402 4.4016 120.438 4.78038 125.347 5.18651C130.404 5.60524 135.363 6.34857 140.366 6.98C142.104 7.19912 145.205 7.03599 146.065 5.82963C146.937 4.61057 144.268 3.80962 142.854 3.69409C140.288 3.48512 137.721 3.35856 135.146 3.21204C135.632 3.24025 134.134 3.1425 134.012 3.13437C133.499 3.10026 132.989 3.06758 132.477 3.03489C131.069 2.94499 129.649 2.88627 128.244 2.77934C123.941 2.45358 119.006 2.13106 114.455 1.8828C105.428 1.39118 96.4025 1.04166 87.356 0.809908C68.8906 0.336198 50.4264 0.773358 32.0818 2.1039C21.8814 2.84301 11.7179 3.88795 1.58924 4.94597C0.894129 5.01833 -0.241016 5.31153 0.102445 5.89843C0.437263 6.46962 1.96599 6.5321 2.70265 6.46861L2.69828 6.47Z" fill="#D03421"></path></svg></span> Players Choose 44</h2>


            <div class="container pb-16 mt-20">
                <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <a class="block group" href="/builder/baseball/bat/alloyXp3?ref=banner">
                            <div class="rounded w-fit  bg-gray-500 group-hover:opacity-90">
                                <img src="https://44.imgix.net/files/2966031/240906_EndofSeason_Homepage_new.jpg?auto=format%2Ccompress&w=630" alt="" />
                            </div>
                            <div class="text-red-500 font-bold mt-2 group-hover:underline">End of Season Sale</div>
                            <div class="text-lg group-hover:underline">Save 40% off your new custom bat while supplies last</div>
                        </a></div>
                    <div>
                        <a class="block group" href="/builder/baseball/infield/pro-44-sc?ref=banner">
                            <div class="rounded w-fit  bg-gray-500 group-hover:opacity-90">
                           <img src="https://44.imgix.net/files/2755851/saleblock_speedcustom.jpg?auto=format%2Ccompress&w=630" alt="" />
                            </div>
                            <div class="text-red-500 font-bold mt-2 group-hover:underline">Need It Fast?</div>
                            <div class="text-lg group-hover:underline">Get Speed Custom Infield or Outfield models in 2 weeks</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Hero;