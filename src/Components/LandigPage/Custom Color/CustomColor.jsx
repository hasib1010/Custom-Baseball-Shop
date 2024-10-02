import React from 'react';
import { Link } from 'react-router-dom';
import wheel from "./../../../assets/navimg/color-wheel.png"

const CustomColor = () => {
    return (
        <div className=''>
            <div className='container mx-auto '>
                <div className="w-full rounded-lg overflow-hidden mx-auto lg:relative lg:p-12 my-10">
                    <div className="aspect-w-1 aspect-h-1 bg-gray-500 lg:hidden">
                        <img src="https://44.imgix.net/frontend/homepage/featured-block/feature_wowfactor--mobile.jpg?auto=format" className="w-full h-full object-cover" alt="" />
                    </div>
                    <div className="hidden lg:block bg-gray-500 absolute inset-0">
                        <img src="https://44.imgix.net/frontend/homepage/featured-block/feature_wowfactor--desktop.jpg?auto=format" className="w-full h-full object-cover" alt="" />
                    </div>
                    <div className="bg-gray-800 p-7 sm:p-10 lg:relative lg:z-10 lg:max-w-md lg:rounded" style={{ backgroundImage: "url('https://44.imgix.net/frontend/bg-textures/grit-bg-dark.jpg?auto=format')" }}>
                        <div className="text-[#e2971f] text-lg font-bold ">44 Pro #1 Custom Brand</div>
                        <div className="text-white text-3xl font-black">Custom Is More Than Color</div>
                        <div className="text-white text-lg mt-4 mb-8">High performance gear personalized to match your style of play.</div>
                        <Link className="hover:opacity-80 focus:opacity-90 transition ease-in-out duration-150 cursor-pointer font-semibold text-center rounded-md inline-flex items-center justify-center py-3 px-5 bg-gray-200 w-full"
                            to={"/"}>
                            <img src={wheel} alt="" />
                            Build Your Custom 44
                        </Link>
                    </div>
                </div>


                {/* xxxx */}
                <div className="w-full rounded-lg overflow-hidden mx-auto lg:relative lg:p-12">
                    <div className="aspect-w-1 aspect-h-1 bg-gray-500 lg:hidden">
                        <img
                            src="https://44.imgix.net/frontend/homepage/featured-block/feature_progradematerials--mobile.jpg?auto=format"
                            className="w-full h-full object-cover"
                            alt=""
                        />
                    </div>
                    <div className="hidden lg:block bg-gray-500 absolute inset-0">
                        <img
                            src="https://44.imgix.net/frontend/homepage/featured-block/feature_progradematerials--desktop.jpg?auto=format"
                            className="w-full h-full object-cover"
                            alt=""
                        />
                    </div>
                    <div
                        className="bg-gray-800 p-7 sm:p-10 lg:relative lg:z-10 lg:max-w-md lg:rounded lg:ml-auto"
                        style={{ backgroundImage: "url('https://44.imgix.net/frontend/bg-textures/grit-bg-dark.jpg?auto=format')" }}
                    >
                        <div className="text-[#e2971f] text-lg font-bold">
                            Get The Pro Treatment
                        </div>
                        <div className="text-white text-3xl font-black">
                            Highest Quality Materials in the Game
                        </div>
                        <div className="text-white text-lg mt-4 mb-8">
                            Crafted with the same pro grade Japanese Kip leather that pro players demand, your glove is meticulously handcrafted side by side with some of the game's most elite players like Justin Turner, Nestor Cortes, Joe Musgrove, and hundreds more!
                        </div>
                        <Link className="hover:opacity-80 focus:opacity-90 transition ease-in-out duration-150 cursor-pointer font-semibold text-center rounded-md inline-flex items-center justify-center py-3 px-5 bg-gray-200 w-full"
                            to={"/"}>
                            <img src={wheel} alt="" />
                            Build Your Custom 44
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomColor;
