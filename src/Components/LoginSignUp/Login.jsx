import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <a
                    href="/"
                    className="hover:opacity-80 focus:opacity-90 transition ease-in-out duration-150 cursor-pointer"
                >
                    <svg
                        viewBox="0 0 146 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto h-12 w-auto"
                    >
                        <path d="M21.5758 35.9105H0V26.0263L21.5758 0H31.897V26.5895H37.2495V35.9158H31.897V44H21.5758V35.9158V35.9105ZM21.5758 26.5842V12.9684L10.1759 26.5842H21.5758Z" fill="#231F20"></path>
                        <path d="M55.6511 44H45.33V35.9158H39.9775V26.5895H45.33V0H55.6511L77.227 26.0263V35.9105H55.6511V43.9947V44ZM67.0511 26.5895L55.6511 12.9737V26.5895H67.0511Z" fill="#231F20"></path>
                        <path d="M140.923 26.8H130.332C127.516 26.8 125.249 29.1158 125.249 31.9948V38.6264C125.249 41.5001 127.516 43.8211 130.332 43.8211H140.923C143.739 43.8211 146 41.5053 146 38.6264V31.9948C146 29.1211 143.734 26.8 140.923 26.8ZM140.84 37.9316C140.84 38.8316 140.077 39.5527 139.133 39.5527H132.116C131.172 39.5527 130.41 38.8316 130.41 37.9316V32.6895C130.41 31.7948 131.172 31.0737 132.116 31.0737H139.133C140.077 31.0737 140.84 31.7948 140.84 32.6895V37.9316Z" fill="#4D4D4F"></path>
                        <path d="M81.9521 26.8158V43.8368H87.0401V39.6684H95.769C98.5853 39.6684 100.852 37.3526 100.852 34.4737V32.0105C100.852 29.1368 98.5853 26.8158 95.769 26.8158H81.9573H81.9521ZM87.0401 31.079H88.6635L94.0834 31.0842C95.0273 31.0842 95.7897 31.8053 95.7897 32.7053V33.9053H95.7845C95.7171 34.7421 94.9858 35.3947 94.0886 35.3947H88.6687L87.0453 35.4053V31.079H87.0401Z" fill="#4D4D4F"></path>
                        <path d="M103.331 26.8158V43.8368H108.413V39.6684H111.432L116.229 43.8211H123.299L118.18 39.5947C120.581 39.179 122.401 37.0526 122.401 34.4737V32.0105C122.401 29.1368 120.135 26.8158 117.319 26.8158H103.331ZM108.419 31.079H110.042L115.638 31.0842C116.582 31.0842 117.344 31.8053 117.344 32.7053V33.9053H117.339C117.272 34.7421 116.541 35.3947 115.643 35.3947H110.047L108.424 35.4053V31.079H108.419Z" fill="#4D4D4F"></path>
                    </svg>
                </a>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                <p className="mt-2 text-center text-gray-600">
                    Or <Link
                        to="/register"
                        className="hover:opacity-80 text-blue-500 hover:underline focus:opacity-90 transition ease-in-out duration-150 cursor-pointer text-primary-500"
                    >
                        register if you don't have one
                    </Link>
                </p>
                <div className="mt-8 sm:mx-auto">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="flex font-medium text-sm text-gray-700"
                                >
                                    Email<span className="text-red-500">*</span>
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="username"
                                        required
                                        className="mt-1 block w-full px-3 py-1 border border-gray-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="flex font-medium text-sm text-gray-700"
                                >
                                    Password<span className="text-red-500">*</span>
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        autoComplete="current-password"
                                        required
                                        className="mt-1 block w-full px-3 py-1 border border-gray-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                        <button
                                            type="button"
                                            className="hover:opacity-80 focus:opacity-90 transition ease-in-out duration-150 cursor-pointer"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-end justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember"
                                        name="remember"
                                        type="checkbox"
                                        className="h-4 w-4 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
                                    />
                                    <label
                                        htmlFor="remember"
                                        className="ml-2 flex font-medium text-sm text-gray-700"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <div className="text-sm">
                                    <a
                                        href="https://44pro.com/forgot-password"
                                        className="hover:opacity-80 focus:opacity-90 transition ease-in-out duration-150 cursor-pointer underline text-sm text-gray-600 hover:text-gray-900"
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>
                            <div>
                            <button 
                                    type="submit" 
                                    className="hover:opacity-80 focus:opacity-90 disabled:opacity-25 transition ease-in-out duration-150 cursor-pointer font-semibold text-center rounded-md inline-flex items-center justify-center py-3 px-5 text-white bg-black w-full"
                                >
                                    Log in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
