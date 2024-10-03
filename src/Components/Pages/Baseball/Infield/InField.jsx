import React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const InField = () => {
    return (
        <div>
            <h4 className='text-7xl font-bold text-center my-5'>Baseball {">"} Infield</h4>
            <div className='container mx-auto my-4'>
                <button className='flex items-center text-xl my-2 gap-3'><IoMdArrowRoundBack className='text-2xl' />Back</button>
                <div className='grid lg:grid-cols-3 grid-cols-1 '>
                    <div className="flex">
                        <div className="relative bg-white shadow max-h-100 w-full flex flex-col items-start rounded-md px-6 pb-6">
                            <div className="absolute top-0 right-0 text-sm font-bold px-2 py-1 ribbon bg-yellow-500 text-white ribbon-gold">
                                Most Popular
                                <div className="ribbon-fold"></div>
                            </div>
                            <div className="w-full aspect-w-1 aspect-h-1 mb-2">
                                <div className="w-full">
                                    <Link className="block w-full aspect-w-1 aspect-h-1 my-3 hover:opacity-75" to="/custom-gloves">
                                        <img className="object-contain" src="https://cloud.44progloves.com/builder/picker/pro-44.png" alt="Pro 44 Glove" />
                                    </Link>
                                </div>
                            </div>
                            <div className="mb-4 w-full">
                                <div className="flex items-end text-3xl">
                                    <Link className="font-semibold mr-2" to="/custom-gloves">Pro 44</Link>
                                    <div className="ml-auto font-bold text-right">
                                        <div>$249</div>
                                    </div>
                                </div>
                                <div className="flex mt-1">
                                    <span className="mt-1 inline-flex items-center px-2 py-0.5 rounded text-sm font-medium bg-yellow-200 text-yellow-900">Signature Series</span>
                                    <span className="mt-1 inline-flex items-center px-2 py-0.5 rounded text-sm font-medium bg-gray-700 text-white ml-auto">Pro Japan Kip</span>
                                </div>
                            </div>
                            <div className="mb-4 text-lg font-semibold">Our most popular glove of all time and the most customizable!</div>
                            <div className="mb-6">
                                <div className="flex font-bold mb-2">Highlights</div>
                                <ul className="text-left leading-6 list-none pl-0">
                                    <li className="py-2 flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5 mr-2 text-green-500">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                        The original Signature Series pattern
                                    </li>
                                    <li className="py-2 flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5 mr-2 text-green-500">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                        The choice of over 125 big league players
                                    </li>
                                    <li className="py-2 flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5 mr-2 text-green-500">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                        Webs: 30+ options
                                    </li>
                                    <li className="py-2 flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5 mr-2 text-green-500">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                        Pocket: Medium
                                    </li>
                                    <li className="py-2 flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5 mr-2 text-green-500">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                        Sizes: 11, 11.25, 11.5, 11.75, 12, 12.25
                                    </li>
                                    <li className="flex items-center mt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 mr-2 text-blue-500 w-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"></path>
                                        </svg>
                                        <Link to="https://44progloves.zendesk.com/hc/en-us/articles/22286725991309-Custom-Gloves-Warranty-Policy" target="_blank" className="hover:underline">
                                            1 year glove and lace warranty included
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <Link
                                className="hover:opacity-80 bg-yellow-600 focus:opacity-90 disabled:opacity-25 transition ease-in-out duration-150 cursor-pointer font-semibold text-center rounded-md inline-flex items-center justify-center py-3 px-8 text-lg text-white bg-secondary-500 w-full mt-auto"
                                to="/custom-gloves"
                            >
                                 
                                Customize
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InField;