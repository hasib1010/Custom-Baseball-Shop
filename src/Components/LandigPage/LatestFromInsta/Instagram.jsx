import React from 'react';

const Instagram = () => {
    return (
        <div>
            <div
                className="bg-gray-800"
                style={{
                    backgroundImage: 'url("https://44.imgix.net/frontend/bg-textures/grit-bg-dark.jpg?auto=format")'
                }}
            >
                <div className="container py-12 mx-auto">
                    <div className="text-center w-fit mx-auto text-white">
                        <div className="font-semibold text-lg">Latest From Instagram</div>
                        <h2 className="font-black text-4xl md:text-5xl leading-snug md:mt-2">
                            Join Over <span className="relative">430k+
                                <svg className="absolute bottom-1 left-0 w-full" viewBox="0 0 147 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.69828 6.47C20.6679 4.90897 38.5498 4.15434 56.5999 3.72083C74.6018 3.28834 92.5721 3.22505 110.556 4.1523C115.402 4.4016 120.438 4.78038 125.347 5.18651C130.404 5.60524 135.363 6.34857 140.366 6.98C142.104 7.19912 145.205 7.03599 146.065 5.82963C146.937 4.61057 144.268 3.80962 142.854 3.69409C140.288 3.48512 137.721 3.35856 135.146 3.21204C135.632 3.24025 134.134 3.1425 134.012 3.13437C133.499 3.10026 132.989 3.06758 132.477 3.03489C131.069 2.94499 129.649 2.88627 128.244 2.77934C123.941 2.45358 119.006 2.13106 114.455 1.8828C105.428 1.39118 96.4025 1.04166 87.356 0.809908C68.8906 0.336198 50.4264 0.773358 32.0818 2.1039C21.8814 2.84301 11.7179 3.88795 1.58924 4.94597C0.894129 5.01833 -0.241016 5.31153 0.102445 5.89843C0.437263 6.46962 1.96599 6.5321 2.70265 6.46861L2.69828 6.47Z" fill="#D03421"></path>
                                </svg>
                            </span> Followers
                        </h2>
                    </div>
                    <div className="text-center mt-8 md:mt-12">
                        <a
                            href="https://www.instagram.com/44procustom/"
                            className="hover:opacity-80 focus:opacity-90 transition ease-in-out duration-150 cursor-pointer font-semibold text-center rounded-md inline-flex items-center justify-center py-3 px-5 bg-gray-200"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg className="fill-current w-4 h-4 mr-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                            </svg>
                            Follow @44procustom
                        </a>
                    </div>
                </div>
                <div className="flex ">
                    <a className="aspect-w-1 aspect-h-1 hover:opacity-75" href="https://www.instagram.com/reel/DApJbWEyCzy/" target="_blank" rel="noopener noreferrer" aria-label="View post on Instagram">
                        <img className="h-full" src="https://scontent-sjc3-1.cdninstagram.com/v/t51.29350-15/461912970_553280177143408_9179015583649825496_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=d1b6Waa-xJAQ7kNvgF7grpP&_nc_ht=scontent-sjc3-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AroPn63okwvOySt5kT2Sr4l&oh=00_AYAQmqbY4KNz-qo765hwyYvlXibqGBMLjYfYLRQW9wKjFQ&oe=6703DECD" alt="" />
                    </a>
                    {/* Repeat similar anchor and img structure for each Instagram post */}
                    <a className="aspect-w-1 aspect-h-1 hover:opacity-75" href="https://www.instagram.com/p/DAo2LGCT2Mh/" target="_blank" rel="noopener noreferrer" aria-label="View post on Instagram">
                        <img className="h-full" src="https://scontent-sjc3-1.cdninstagram.com/v/t39.30808-6/461941453_18463445998038852_8592079058364277461_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=6xbZCqHzd_0Q7kNvgGJVIff&_nc_ht=scontent-sjc3-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AroPn63okwvOySt5kT2Sr4l&oh=00_AYCBNeXnfrRpFBGYgW79hc6KAh8T6V7wAgQkO67MhnU3eg&oe=6703ED42" alt="" />
                    </a>
                    <a className="aspect-w-1 aspect-h-1 hover:opacity-75" href="https://www.instagram.com/p/DAodt_nSIxY/" target="_blank" rel="noopener noreferrer" aria-label="View post on Instagram">
                        <img className="h-full" src="https://scontent-sjc3-1.cdninstagram.com/v/t39.30808-6/461948689_18463417108038852_8769373925476438925_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=5jjhENAwPgAQ7kNvgF39Nb7&_nc_ht=scontent-sjc3-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AroPn63okwvOySt5kT2Sr4l&oh=00_AYD_OwS83XInRyqDxcvCxQPPsulDJcMM5DpQr2_D5-w2Cw&oe=6703F01D" alt="" />
                    </a>
                    <a className="aspect-w-1 aspect-h-1 hover:opacity-75" href="https://www.instagram.com/p/DAmgyV0y54z/" target="_blank" rel="noopener noreferrer" aria-label="View post on Instagram">
                        <img className="h-full" src="https://scontent-sjc3-1.cdninstagram.com/v/t39.30808-6/461826071_18463265815038852_1269652745104996387_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=kwIe5VpE7l4Q7kNvgGiiwfz&_nc_ht=scontent-sjc3-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AroPn63okwvOySt5kT2Sr4l&oh=00_AYDjHu2Q1uD-WHu6MaK0k2Z24JgGKvAmEJKsd7EgHd7rRQ&oe=6703DEC7" alt="" />
                    </a>
                    <a className="aspect-w-1 aspect-h-1 hover:opacity-75 hidden sm:block" href="https://www.instagram.com/p/DAmOOM6z_a5/" target="_blank" rel="noopener noreferrer" aria-label="View post on Instagram">
                        <img className="h-full" src="https://scontent-sjc3-1.cdninstagram.com/v/t39.30808-6/461505737_18463245964038852_3289379272139801736_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=8hIItKKujFgQ7kNvgFZWTVW&_nc_ht=scontent-sjc3-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AroPn63okwvOySt5kT2Sr4l&oh=00_AYD191y4MTfnRp2uiIqbW98DwU00c_Q2_6EZc5BfhwDwDw&oe=6703C2ED" alt="" />
                    </a>
                    <a className="aspect-w-1 aspect-h-1 hover:opacity-75 hidden sm:block" href="https://www.instagram.com/p/DAkEJiePaeX/" target="_blank" rel="noopener noreferrer" aria-label="View post on Instagram">
                        <img className="h-full" src="https://scontent-sjc3-1.cdninstagram.com/v/t39.30808-6/461735832_18463081471038852_7045589873488964879_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=txjH92FnbBwQ7kNvgFd4Gx5&_nc_ht=scontent-sjc3-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AroPn63okwvOySt5kT2Sr4l&oh=00_AYAapm17-QTPEqoEKdRK-AM4mFVuMpfmSnupTI6uGAD5kA&oe=6703D451" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Instagram;
