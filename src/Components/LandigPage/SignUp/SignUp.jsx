import React from 'react';

const SignUp = () => {
    return (
        <div
            className=" w-full flex items-center justify-between"
            style={{ backgroundImage: 'url("https://44.imgix.net/frontend/bg-textures/grit-bg-light.jpg?auto=format")' }}>
            <div className="flex  flex-1 flex-col lg:flex-row  justify-between py-12 mx-auto">
                <div className="  w-full flex-1">
                    <div className="text-center">
                        <div className="font-semibold text-lg">Sign Up Today</div>
                        <h2 className="font-black lg:text-4xl leading-snug mt-2">Join The 44 Pro Team</h2>
                        <div className="mt-4 flex flex-col gap-x-6 gap-y-2 justify-center items-center">
                            {["New Product Launch Info", "Advanced Notice On Sales", "Subscriber Exclusive Deals"].map((text, index) => (
                                <div className="flex items-center" key={index}>
                                    <svg viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg" className="text-green-500 w-5 h-5 mr-2">
                                        <path d="M9 18.25C4.00781 18.25 0 14.2422 0 9.25C0 4.29297 4.00781 0.25 9 0.25C13.957 0.25 18 4.29297 18 9.25C18 14.2422 13.957 18.25 9 18.25ZM12.9727 7.59766H12.9375C13.2891 7.28125 13.2891 6.75391 12.9375 6.40234C12.6211 6.08594 12.0938 6.08594 11.7773 6.40234L7.875 10.3398L6.22266 8.6875C5.87109 8.33594 5.34375 8.33594 5.02734 8.6875C4.67578 9.00391 4.67578 9.53125 5.02734 9.84766L7.27734 12.0977C7.59375 12.4492 8.12109 12.4492 8.47266 12.0977L12.9727 7.59766Z" fill="currentColor"></path>
                                    </svg>
                                    <span className="text-lg">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-6  ">
                        <form className='flex  flex-col   items-start lg:px-10 gap-6 '>
                           
                                <label htmlFor="email">Email Address *</label>
                                <input
                                    className="required email  rounded-md h-11  w-full  text-black"
                                    id="email"
                                    name="EMAIL"
                                    type="email"
                                    required
                                />
                                <label htmlFor="name">Name</label>
                                <input
                                    className="rounded-md h-11   w-full  text-black"
                                    id="name"
                                    name="NAME"
                                    type="text"
                                />

                                <input
                                    className="hover:opacity-80 focus:opacity-90 disabled:opacity-25 transition ease-in-out duration-150 cursor-pointer font-semibold text-center rounded-md w-fit py-3 px-5 text-white bg-gray-800"
                                    name="subscribe"
                                    type="submit"
                                    value="Subscribe Now"
                                />
                             
                        </form>
                    </div>
                </div>
                <div className="flex-1 ">
                    <img
                        src="https://44.imgix.net/frontend/homepage/newsletter/player-throwing.jpg?auto=format"
                        alt=""
                        className="max-h-[500px] object-cover w-full h-full object-top"
                    />
                </div>
            </div>
        </div>
    );
}

export default SignUp;
