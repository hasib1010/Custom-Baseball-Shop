import React from 'react';
import PropTypes from 'prop-types';
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter, FaTiktok } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className="bg-gray-800 mt-auto px-6  " 
        style={{ backgroundImage: 'url("https://44.imgix.net/frontend/bg-textures/grit-bg-dark.jpg?auto=format")' }}>
            <div className="footer mx-auto text-white pt-16 pb-12 container">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 pb-9">
                    <div className="hidden lg:block">
                        <a className="hover:opacity-90" href="/?ref=footer">
                            <svg viewBox="0 0 146 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-28">
                                <path d="M21.5758 35.9105H0V26.0263L21.5758 0H31.897V26.5895H37.2495V35.9158H31.897V44H21.5758V35.9158V35.9105ZM21.5758 26.5842V12.9684L10.1759 26.5842H21.5758Z" fill="#fff"></path>
                                <path d="M55.6511 44H45.33V35.9158H39.9775V26.5895H45.33V0H55.6511L77.227 26.0263V35.9105H55.6511V43.9947V44ZM67.0511 26.5895L55.6511 12.9737V26.5895H67.0511Z" fill="#fff"></path>
                                <path d="M140.923 26.8H130.332C127.516 26.8 125.249 29.1158 125.249 31.9948V38.6264C125.249 41.5001 127.516 43.8211 130.332 43.8211H140.923C143.739 43.8211 146 41.5053 146 38.6264V31.9948C146 29.1211 143.734 26.8 140.923 26.8ZM140.84 37.9316C140.84 38.8316 140.077 39.5527 139.133 39.5527H132.116C131.172 39.5527 130.41 38.8316 130.41 37.9316V32.6895C130.41 31.7948 131.172 31.0737 132.116 31.0737H139.133C140.077 31.0737 140.84 31.7948 140.84 32.6895V37.9316Z" fill="#9D9D9D"></path>
                                <path d="M81.9521 26.8158V43.8368H87.0401V39.6684H95.769C98.5853 39.6684 100.852 37.3526 100.852 34.4737V32.0105C100.852 29.1368 98.5853 26.8158 95.769 26.8158H81.9573H81.9521ZM87.0401 31.079H88.6635L94.0834 31.0842C95.0273 31.0842 95.7897 31.8053 95.7897 32.7053V33.9053H95.7845C95.7171 34.7421 94.9858 35.3947 94.0886 35.3947H88.6687L87.0453 35.4053V31.079H87.0401Z" fill="#9D9D9D"></path>
                                <path d="M103.331 26.8158V43.8368H108.413V39.6684H111.432L116.229 43.8211H123.299L118.18 39.5947C120.581 39.179 122.401 37.0526 122.401 34.4737V32.0105C122.401 29.1368 120.135 26.8158 117.319 26.8158H103.331ZM108.419 31.079H110.042L115.638 31.0842C116.582 31.0842 117.344 31.8053 117.344 32.7053V33.9053H117.339C117.272 34.7421 116.541 35.3947 115.643 35.3947H110.047L108.424 35.4053V31.079H108.419Z" fill="#9D9D9D"></path>
                            </svg>
                        </a>
                    </div>
                    <div>
                        <div className="text-xl font-bold mb-4">Products</div>
                        <ul className="list-none pl-0 grid grid-cols-1 space-y-2">
                            {[
                                { href: "https://44pro.com/gift-card?ref=footer-menu", text: "Gift Cards" },
                                { href: "https://44pro.com/builder?items=gloves&ref=footer-menu", text: "Custom Gloves" },
                                { href: "https://44pro.com/product/alloy-xp-bbcor-bat?ref=footer-menu", text: "Custom Baseball Bats" },
                                { href: "https://44pro.com/builder/batter?ref=footer-menu", text: "Custom Batting Gloves" },
                                { href: "https://44proguards.com?ref=44pro-footer-menu", text: "Custom Guards" },
                                { href: "/stock-products?ref=footer-menu", text: "Stock Products" },
                            ].map(item => (
                                <li key={item.text}>
                                    <a className="hover:opacity-80 focus:opacity-90 transition ease-in-out duration-150" href={item.href}>{item.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className="text-xl font-bold mb-4">Support</div>
                        <ul className="list-none pl-0 grid grid-cols-1 space-y-2">
                            {[
                                { href: "https://44progloves.zendesk.com/hc/en-us?ref=footer-menu", text: "Support Center" },
                                { href: "https://44progloves.zendesk.com/hc/en-us/sections/22289768489869-Returns?ref=footer-menu", text: "Return Policy" },
                                { href: "https://44progloves.zendesk.com/hc/en-us/sections/22286722929805-Warranty-Policies?ref=footer-menu", text: "Warranty Information" },
                                { href: "https://44pro.com/order-status?ref=footer-menu", text: "Check Order Status" },
                                { href: "https://44pro.com/gift-card-balance?ref=footer-menu", text: "Check Gift Card Balance" },
                                { href: "https://44pro.com/about-us?ref=footer-menu", text: "About Us" },
                                { href: "https://44pro.com/careers?ref=footer-menu", text: "Careers" },
                                { href: "https://44pro.com/ambassador-program?ref=footer-menu", text: "Ambassador Program" },
                            ].map(item => (
                                <li key={item.text}>
                                    <a className="hover:opacity-80 focus:opacity-90 transition ease-in-out duration-150" href={item.href}>{item.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className="text-xl font-bold mb-4">Follow Us</div>
                        <div className="grid gap-6">
                            <a
                                href="https://www.instagram.com/44procustom/"
                                className="hover:opacity-80 focus:opacity-90 transition ease-in-out duration-150 cursor-pointer text-secondary-500 flex items-center gap-3"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram className="fill-current w-6 h-6" />
                                <span className="text-white">@44procustom</span>
                            </a>
                            <a
                                href="https://www.tiktok.com/@44pro"
                                className="hover:opacity-80 focus:opacity-90 transition ease-in-out duration-150 cursor-pointer text-secondary-500 flex items-center gap-3"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaTiktok className="fill-current w-6 h-6" />
                                <span className="text-white">@44pro</span>
                            </a>
                            <a
                                href="https://www.youtube.com/channel/UCa_YwBu3uhAhVJ-qjPzPvWA"
                                className="hover:opacity-80 focus:opacity-90 transition ease-in-out duration-150 cursor-pointer text-secondary-500 flex items-center gap-3"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaYoutube className="fill-current w-6 h-6" />
                                <span className="text-white">44 Pro</span>
                            </a>
                            <a
                                href="https://twitter.com/44ProCustom"
                                className="hover:opacity-80 focus:opacity-90 transition ease-in-out duration-150 cursor-pointer text-secondary-500 flex items-center gap-3"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaTwitter className="fill-current w-6 h-6" />
                                <span className="text-white">@44ProCustom</span>
                            </a>
                            <a
                                href="https://www.facebook.com/44ProCustom"
                                className="hover:opacity-80 focus:opacity-90 transition ease-in-out duration-150 cursor-pointer text-secondary-500 flex items-center gap-3"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebookF className="fill-current w-6 h-6" />
                                <span className="text-white">44 Pro</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 py-5 flex flex-wrap justify-between items-center">
                    <div className="text-sm text-gray-400">© 2024 44Pro. All rights reserved.</div>
                    <ul className="list-none pl-0 flex space-x-5">
                        {[
                            { href: "https://44pro.com/privacy-policy?ref=footer", text: "Privacy Policy" },
                            { href: "https://44pro.com/terms-conditions?ref=footer", text: "Terms & Conditions" },
                            { href: "https://44pro.com/faq?ref=footer", text: "FAQ" },
                        ].map(item => (
                            <li key={item.text}>
                                <a className="hover:opacity-80 focus:opacity-90 transition ease-in-out duration-150 text-gray-400" href={item.href}>{item.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

Footer.propTypes = {
    children: PropTypes.node,
};

export default Footer;
