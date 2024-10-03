import React from 'react';
import { Link } from 'react-router-dom';

const CustomBuilder = () => {
    return (
        <div>
            <h4 className='text-center lg:text-6xl text-3xl font-bold my-5'>Custom Builder</h4>

            <div className="grid grid-cols-12 gap-6 container mx-auto pb-14">
                <div className="col-span-12"> 

                    <div className="grid gap-6 justify-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 place-items-center">
                        <div className="flex">
                            <div className="relative bg-white shadow w-full flex flex-col items-start rounded-md p-6">
                                <div className="w-full aspect-w-1 aspect-h-1 mb-2">
                                    <Link className="block w-full aspect-w-1 aspect-h-1 my-3 hover:opacity-75" to="/builder/baseball">
                                        <img className="object-contain h-80" src="https://cloud.44progloves.com/builder/picker/pro-44.png" alt="Baseball Gloves" />
                                    </Link>
                                </div>
                                <div className="mb-4 w-full">
                                    <div className="flex items-end text-3xl">
                                        <Link className="font-semibold mr-2" to="/builder/baseball">Baseball Gloves</Link>
                                    </div>
                                </div>
                                <Link className="hover:opacity-80 bg-yellow-600 focus:opacity-90 transition ease-in-out duration-150 cursor-pointer font-semibold text-center rounded-md inline-flex items-center justify-center py-3 px-8 text-lg text-white bg-secondary-500 w-full mt-auto" to="/builder/baseball">Select</Link>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="relative bg-white shadow w-full flex flex-col items-start rounded-md p-6">
                                <div className="w-full aspect-w-1 aspect-h-1 mb-2">
                                    <Link className="block w-full aspect-w-1 aspect-h-1 my-3 hover:opacity-75" to="/builder/baseball/bat/alloyXp3">
                                        <img className="object-contain h-80" src="https://cloud.44progloves.com/builder/picker/bat-alloy-xp.png" alt="Baseball Bats" />
                                    </Link>
                                </div>
                                <div className="mb-4 w-full">
                                    <div className="flex items-end text-3xl">
                                        <Link className="font-semibold mr-2" to="/builder/baseball/bat/alloyXp3">Baseball Bats</Link>
                                    </div>
                                </div>
                                <Link className="hover:opacity-80 bg-yellow-600 focus:opacity-90 transition ease-in-out duration-150 cursor-pointer font-semibold text-center rounded-md inline-flex items-center justify-center py-3 px-8 text-lg text-white bg-secondary-500 w-full mt-auto" to="/builder/baseball/bat/alloyXp3">Select</Link>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="relative bg-white shadow w-full flex flex-col items-start rounded-md p-6">
                                <div className="w-full aspect-w-1 aspect-h-1 mb-2">
                                    <Link className="block w-full aspect-w-1 aspect-h-1 my-3 hover:opacity-75" to="/builder/softball">
                                        <img className="object-contain h-80" src="https://cloud.44progloves.com/builder/picker/pro-44.png" alt="Softball Gloves" />
                                    </Link>
                                </div>
                                <div className="mb-4 w-full">
                                    <div className="flex items-end text-3xl">
                                        <Link className="font-semibold mr-2" to="/builder/softball">Softball Gloves</Link>
                                    </div>
                                </div>
                                <Link className="hover:opacity-80 bg-yellow-600 focus:opacity-90 transition ease-in-out duration-150 cursor-pointer font-semibold text-center rounded-md inline-flex items-center justify-center py-3 px-8 text-lg text-white bg-secondary-500 w-full mt-auto" to="/builder/softball">Select</Link>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="relative bg-white shadow w-full flex flex-col items-start rounded-md p-6">
                                <div className="w-full aspect-w-1 aspect-h-1 mb-2">
                                    <Link className="block w-full aspect-w-1 aspect-h-1 my-3 hover:opacity-75" to="/builder/batter">
                                        <img className="object-contain h-80" src="https://cloud.44progloves.com/builder/picker/batting-glove-pro-44.png" alt="Batting Gloves" />
                                    </Link>
                                </div>
                                <div className="mb-4 w-full">
                                    <div className="flex items-end text-3xl">
                                        <Link className="font-semibold mr-2" to="/builder/batter">Batting Gloves</Link>
                                    </div>
                                </div>
                                <Link className="hover:opacity-80 bg-yellow-600 focus:opacity-90 transition ease-in-out duration-150 cursor-pointer font-semibold text-center rounded-md inline-flex items-center justify-center py-3 px-8 text-lg text-white bg-secondary-500 w-full mt-auto" to="/builder/batter">Select</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomBuilder;
