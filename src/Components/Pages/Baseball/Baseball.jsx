import React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Baseball = () => {
    return (
        <div className='container mx-auto'>
            <h4 className='text-6xl font-bold text-center my-5'>Baseball</h4>
            <div>
                <button className='flex items-center my-2 gap-3'><IoMdArrowRoundBack className='text-2xl' />Back</button>
                <div>
                <div className="grid gap-6 justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex">
                <div className="relative bg-white shadow max-h-100 w-full flex flex-col items-start rounded-md p-6">
                    <div className="w-full aspect-w-1 aspect-h-1 mb-2">
                        <Link className="block w-full aspect-w-1 aspect-h-1 my-3 hover:opacity-75" to="/builder/baseball/infield">
                            <img className="object-contain" src="https://cloud.44progloves.com/builder/picker/position-infield.png" alt="Infield" />
                        </Link>
                    </div>
                    <div className="mb-4 w-full">
                        <div className="flex items-end text-3xl">
                            <Link className="font-semibold mr-2" to="/builder/baseball/infield">Infield</Link>
                        </div>
                    </div>
                    <Link className="hover:opacity-80 bg-yellow-600 focus:opacity-90 transition ease-in-out duration-150 cursor-pointer font-semibold text-center rounded-md inline-flex items-center justify-center py-3 px-8 text-lg text-white bg-secondary-500 w-full mt-auto" to="/builder/baseball/infield">Select</Link>
                </div>
            </div>

            <div className="flex">
                <div className="relative bg-white shadow max-h-100 w-full flex flex-col items-start rounded-md p-6">
                    <div className="w-full aspect-w-1 aspect-h-1 mb-2">
                        <Link className="block w-full aspect-w-1 aspect-h-1 my-3 hover:opacity-75" to="/builder/baseball/outfield">
                            <img className="object-contain" src="https://cloud.44progloves.com/builder/picker/position-outfield.png" alt="Outfield" />
                        </Link>
                    </div>
                    <div className="mb-4 w-full">
                        <div className="flex items-end text-3xl">
                            <Link className="font-semibold mr-2" to="/builder/baseball/outfield">Outfield</Link>
                        </div>
                    </div>
                    <Link className="hover:opacity-80 bg-yellow-600 focus:opacity-90 transition ease-in-out duration-150 cursor-pointer font-semibold text-center rounded-md inline-flex items-center justify-center py-3 px-8 text-lg text-white bg-secondary-500 w-full mt-auto" to="/builder/baseball/outfield">Select</Link>
                </div>
            </div>

            <div className="flex">
                <div className="relative bg-white shadow max-h-100 w-full flex flex-col items-start rounded-md p-6">
                    <div className="w-full aspect-w-1 aspect-h-1 mb-2">
                        <Link className="block w-full aspect-w-1 aspect-h-1 my-3 hover:opacity-75" to="/builder/baseball/first-base">
                            <img className="object-contain" src="https://cloud.44progloves.com/builder/picker/position-first.png" alt="First Base" />
                        </Link>
                    </div>
                    <div className="mb-4 w-full">
                        <div className="flex items-end text-3xl">
                            <Link className="font-semibold mr-2" to="/builder/baseball/first-base">First Base</Link>
                        </div>
                    </div>
                    <Link className="hover:opacity-80 bg-yellow-600 focus:opacity-90 transition ease-in-out duration-150 cursor-pointer font-semibold text-center rounded-md inline-flex items-center justify-center py-3 px-8 text-lg text-white bg-secondary-500 w-full mt-auto" to="/builder/baseball/first-base">Select</Link>
                </div>
            </div>

            <div className="flex">
                <div className="relative bg-white shadow max-h-100 w-full flex flex-col items-start rounded-md p-6">
                    <div className="w-full aspect-w-1 aspect-h-1 mb-2">
                        <Link className="block w-full aspect-w-1 aspect-h-1 my-3 hover:opacity-75" to="/builder/baseball/catcher">
                            <img className="object-contain" src="https://cloud.44progloves.com/builder/picker/catchers.jpg" alt="Catcher" />
                        </Link>
                    </div>
                    <div className="mb-4 w-full">
                        <div className="flex items-end text-3xl">
                            <Link className="font-semibold mr-2" to="/builder/baseball/catcher">Catcher</Link>
                        </div>
                    </div>
                    <Link className="hover:opacity-80 bg-yellow-600 focus:opacity-90 transition ease-in-out duration-150 cursor-pointer font-semibold text-center rounded-md inline-flex items-center justify-center py-3 px-8 text-lg text-white bg-secondary-500 w-full mt-auto" to="/builder/baseball/catcher">Select</Link>
                </div>
            </div>
        </div>
                </div>
            </div>
        </div>
    );
}


export default Baseball;