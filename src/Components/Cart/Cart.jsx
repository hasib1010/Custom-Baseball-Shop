import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Front from '../ProductsModel/BaseballGlove/Front';
import Back from '../ProductsModel/BaseballGlove/Back';
import Left from '../ProductsModel/BaseballGlove/Left';
import Right from '../ProductsModel/BaseballGlove/Right';

const colorMapping = { 
      'brightness(0.9) sepia(90%) saturate(900%) hue-rotate(0deg)': 'Red',
      'brightness(0.8) sepia(a80%) saturate(700%) hue-rotate(210deg)': 'Blue',
      'brightness(0.8) sepia(90%) saturate(800%) hue-rotate(100deg)': 'Green',
      'brightness(0) sepia(0%) saturate(0%)': 'Black',
      'brightness(0.1) sepia(90%) saturate(900%) hue-rotate(60deg)': 'Yellow',
      'brightness(0.5) sepia(60%) saturate(500%) hue-rotate(30deg)': 'Peach',
      'brightness(.4) sepia(90%) saturate(800%) hue-rotate(240deg)': 'Purple',
      'brightness(.5) sepia(90%) saturate(700%) hue-rotate(30deg)': 'Orange',
      'brightness(0.5) sepia(90%) saturate(600%) hue-rotate(350deg)': 'Pink',
      'brightness(0.5) sepia(90%) saturate(600%) hue-rotate(20deg)': 'Brown',
      'brightness(0.5) sepia(0%) saturate(0%)': 'Gray',
      'brightness(0.5) sepia(90%) saturate(700%) hue-rotate(170deg)': 'Turquoise',
      'brightness(0.5) sepia(90%) saturate(800%) hue-rotate(270deg)': 'Violet',
      'brightness(0.5) sepia(90%) saturate(700%) hue-rotate(180deg)': 'Cyan',
      'brightness(0.5) sepia(90%) saturate(600%) hue-rotate(210deg)': 'Indigo',
      'brightness(0.5) sepia(60%) saturate(400%) hue-rotate(240deg)': 'Lavender',
      'brightness(0.5) sepia(90%) saturate(700%) hue-rotate(90deg)': 'Lime',
      'brightness(0.5) sepia(90%) saturate(600%) hue-rotate(120deg)': 'Mint',
      'brightness(0.5) sepia(70%) saturate(500%) hue-rotate(15deg)': 'Coral',
      'brightness(0.5) sepia(80%) saturate(600%) hue-rotate(10deg)': 'Salmon',
      'brightness(0.5) sepia(90%) saturate(600%) hue-rotate(45deg)': 'Gold',
};

const Cart = () => {
    const location = useLocation();
    const [cartData, setCartData] = useState(() => {
        const savedData = localStorage.getItem('cartData');
        return savedData ? JSON.parse(savedData) : [];
    });

    useEffect(() => {
        if (location.state && location.state.orderData) {
            setCartData(location.state.orderData);
        }
    }, [location.state]);

    const calculateTotal = () => {
        return cartData.length * 246; // Assuming each item is $246
    };

    return (
        <div className='container mx-auto'>
            <h1 className='text-center font-bold text-7xl mb-20'>Your Cart</h1>
            {cartData.length > 0 ? (
                <div className='flex flex-col gap-20'>
                    {cartData.map((orderData, index) => {
                        const { filters, size, ...details } = orderData;
                        console.log(filters);

                        return (
                            <div key={index} className='flex justify-between gap-20'>
                                <div className='flex-1'>
                                    <div className='flex w-full justify-between items-center'>
                                        <div className='grid grid-cols-2 w-52 h-52 border-2 shadow-md rounded-md'>
                                            <Front filters={filters} />
                                            <Back filters={filters} />
                                            <Left filters={filters} />
                                            <Right filters={filters} />
                                        </div>
                                        <div className='flex items-center justify-evenly'>
                                            <div className='flex flex-col justify-evenly h-full w-full'>
                                                <h4 className='text-2xl font-bold'>Custom Gloves</h4>
                                                <p>5-6 Week Lead Time</p>
                                                <a
                                                    href="https://44progloves.zendesk.com/hc/en-us/articles/22286725991309-Custom-Gloves-Warranty-Policy"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-blue-50 text-blue-900 border border-blue-100 px-2 py-1 rounded-full inline-flex items-center gap-1 hover:underline"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"></path>
                                                    </svg>
                                                    1 Year Warranty Included
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <p>Quantity</p>
                                            <p className='border text-center rounded-md'>1</p>
                                            <button className='text-red-500 hover:underline'>Remove</button>
                                        </div>
                                        <div>
                                            <p>Total</p>
                                            <p className='text-lg font-bold'>$246</p>
                                        </div>
                                    </div>
                                    <ul className='grid grid-cols-3 my-20'>
                                        {Object.entries(details).map(([key, value]) => {
                                            const colorName = colorMapping[value] || value || "White";
                                            return (
                                                <li
                                                    key={key}
                                                    // style={{ backgroundColor: colorName }}
                                                    className={`border w-fit px-5 my-2 ${colorName === "White" ? "text-black shadow-lg" : "text-white bg-gray-500"}`}
                                                >
                                                    <strong>{key}:</strong> {colorName}
                                                </li>
                                            );
                                        })}
                                        <li>
                                            <strong>Size:</strong> {size}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                    <div className='w-80 bg-white border h-fit py-10 px-5 shadow-lg flex flex-col gap-5'>
                        <h5 className='flex justify-between text-2xl font-bold'>Total <p>${calculateTotal()}</p></h5>
                        <h5 className='flex justify-between text-xl font-semibold'>Estimated Shipping <br />
                            (To United States) <p>free</p>
                        </h5>
                        <h5 className='flex justify-between font-semibold'>Subtotal <p>${calculateTotal()}</p></h5>
                        <p className='text-sm'>Final shipping and taxes will be calculated at checkout.</p>
                        <button className='btn btn-primary'>Proceed to Checkout</button>
                        <button className='btn btn-link outline'>or Continue Shopping</button>
                    </div>
                </div>
            ) : (
                <p className='text-center text-xl'>No items in the cart.</p>
            )}
        </div>
    );
};

export default Cart;
