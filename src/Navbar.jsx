import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaAngleDown, FaShoppingCart } from 'react-icons/fa';
import img1 from "./assets/navimg/custom-glove.png";
import img2 from "./assets/navimg/alloy-xp-homepage-bat-image.png";
import img3 from "./assets/navimg/custom-batting-gloves.png";
import img4 from "./assets/navimg/custom-guards.png";
import wheel from "./assets/navimg/color-wheel.png"

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    return (
        <div className="bg-white shadow-md">
            <h3 className='bg-[#E5E5E5] font-bold text-xl py-4 text-center'>
                25% OFF GLOVES WITH CODE DEAL25 + FREE USA SHIPPING
                <Link className='text-base underline-offset-4 ml-10 underline'> Start Your Custom</Link>
            </h3>
            <div className="container mx-auto mt-2 flex items-center justify-between py-5">
                <svg data-v-15756ab6="" viewBox="0 0 146 44" fill="none" xmlns="http://www.w3.org/2000/svg" width="120"><path d="M21.5758 35.9105H0V26.0263L21.5758 0H31.897V26.5895H37.2495V35.9158H31.897V44H21.5758V35.9158V35.9105ZM21.5758 26.5842V12.9684L10.1759 26.5842H21.5758Z" fill="#231F20"></path><path d="M55.6511 44H45.33V35.9158H39.9775V26.5895H45.33V0H55.6511L77.227 26.0263V35.9105H55.6511V43.9947V44ZM67.0511 26.5895L55.6511 12.9737V26.5895H67.0511Z" fill="#231F20"></path><path d="M140.923 26.8H130.332C127.516 26.8 125.249 29.1158 125.249 31.9948V38.6264C125.249 41.5001 127.516 43.8211 130.332 43.8211H140.923C143.739 43.8211 146 41.5053 146 38.6264V31.9948C146 29.1211 143.734 26.8 140.923 26.8ZM140.84 37.9316C140.84 38.8316 140.077 39.5527 139.133 39.5527H132.116C131.172 39.5527 130.41 38.8316 130.41 37.9316V32.6895C130.41 31.7948 131.172 31.0737 132.116 31.0737H139.133C140.077 31.0737 140.84 31.7948 140.84 32.6895V37.9316Z" fill="#4D4D4F"></path><path d="M81.9521 26.8158V43.8368H87.0401V39.6684H95.769C98.5853 39.6684 100.852 37.3526 100.852 34.4737V32.0105C100.852 29.1368 98.5853 26.8158 95.769 26.8158H81.9573H81.9521ZM87.0401 31.079H88.6635L94.0834 31.0842C95.0273 31.0842 95.7897 31.8053 95.7897 32.7053V33.9053H95.7845C95.7171 34.7421 94.9858 35.3947 94.0886 35.3947H88.6687L87.0453 35.4053V31.079H87.0401Z" fill="#4D4D4F"></path><path d="M103.331 26.8158V43.8368H108.413V39.6684H111.432L116.229 43.8211H123.299L118.18 39.5947C120.581 39.179 122.401 37.0526 122.401 34.4737V32.0105C122.401 29.1368 120.135 26.8158 117.319 26.8158H103.331ZM108.419 31.079H110.042L115.638 31.0842C116.582 31.0842 117.344 31.8053 117.344 32.7053V33.9053H117.339C117.272 34.7421 116.541 35.3947 115.643 35.3947H110.047L108.424 35.4053V31.079H108.419Z" fill="#4D4D4F"></path></svg>

                <div className='flex gap-14 relative items-center  '>
                    <button onClick={toggleDropdown} className='flex items-center gap-2 text-base   hover:text-blue-600 transition duration-300'>
                        Custom Crafted
                        <FaAngleDown className={`transform transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isDropdownOpen && (
                        <ul className='absolute bg-slate-100 shadow-lg top-14 flex gap-10 px-2 py-4 rounded-lg z-10'>
                            <li>
                                <Link to="/custom-gloves" className='gap-4 flex flex-col items-center w-full py-2'>
                                    <img className='h-52 bg-white    w-[235px] rounded-md hover:shadow-md  transition transform hover:scale-105' src={img1} alt="Custom Gloves" />
                                    <span className='mt-2  text-center flex items-center justify-center text-sm font-bold'> <img src={wheel} alt="" /> Custom Gloves</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/custom-bats" className='gap-4 flex flex-col items-center w-full py-2'>
                                    <img className='h-52 bg-white    w-[235px] rounded-md hover:shadow-md  transition transform hover:scale-105' src={img2} alt="Custom Bats" />
                                    <span className='mt-2  text-center flex items-center justify-center text-sm font-bold'> <img src={wheel} alt="" /> Custom Bats</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/custom-batting-gloves" className='gap-4 flex flex-col items-center w-full py-2'>
                                    <img className='h-52 bg-white    w-[235px] rounded-md hover:shadow-md transition transform hover:scale-105' src={img3} alt="Custom Batting Gloves" />
                                    <span className='mt-2  text-center flex items-center justify-center text-sm font-bold'> <img src={wheel} alt="" /> Custom Batting Gloves</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/custom-guards" className='gap-4 flex flex-col items-center w-full py-2'>
                                    <img className='h-52 bg-white    w-[235px] rounded-md hover:shadow-md  transition transform hover:scale-105' src={img4} alt="Custom Guards" />
                                    <span className='mt-2  text-center flex items-center justify-center text-sm font-bold'> <img src={wheel} alt="" /> Custom Guards</span>
                                </Link>
                            </li>
                        </ul>
                    )}
                    <NavLink className="text-base hover:text-blue-600 transition duration-300" to="/stock-products">Stock Products</NavLink>
                    <NavLink className="text-base hover:text-blue-600 transition duration-300" to="/trending-designs">Trending Designs</NavLink>
                    <NavLink className="text-base hover:text-blue-600 transition duration-300" to="/team-44">Team 44</NavLink>
                    <NavLink className="text-base hover:text-blue-600 transition duration-300" to="/help-center">Help Center</NavLink>

                    <button className='text-base  transition duration-300 flex font-bold text-white bg-gray-700 px-2 py-2 rounded-md'> <img src={wheel} alt="" /> Custom Builder</button>
                </div>

                <div className='flex items-center gap-6'>
                    <Link className="text-base hover:text-blue-600 transition duration-300" to="/login">Login/Register</Link>
                    <div className='relative'>
                    <FaShoppingCart className='text-2xl hover:text-blue-600 transition duration-300' />
                    <p className='absolute bottom-5 -right-2 bg-blue-700 text-sm font-bold text-white rounded-full  h-5 w-5 text-center '>0</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
