import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Front from '../ProductsModel/BaseballGlove/Front';
import Back from '../ProductsModel/BaseballGlove/Back';
import Left from '../ProductsModel/BaseballGlove/Left';
import Right from '../ProductsModel/BaseballGlove/Right';

const Cart = () => {
    const location = useLocation();
    const [orderData, setOrderData] = useState(() => {
        // Try to get order data from localStorage
        const savedData = localStorage.getItem('cartData');
        return savedData ? JSON.parse(savedData) : null;
    });

    useEffect(() => {
        // If there's data passed through location.state, update state
        if (location.state && location.state.orderData) {
            setOrderData(location.state.orderData);
        }
    }, [location.state]);

    // Extract relevant order details (excluding filters)
    const { filters, size, ...details } = orderData || {};

    return (
        <div className=' '>

            <div className='container mx-auto '>
                <h1 className='text-center font-bold text-7xl'>Your Cart</h1>
                {orderData ? (
                    <div>
                        <div className='flex w-full  '>
                            <div className='grid grid-cols-2 w-52 h-52 border-2 shadow-md rounded-md '>
                                <Front filters={filters} />
                                <Back filters={filters} />
                                <Left filters={filters} />
                                <Right filters={filters} />
                            </div>
                            <div className='flex items-center justify-evenly'>
                                <div className='flex flex-col justify-evenly h-full w-full'>
                                    <h4 className='text-2xl font-bold'>Custom Gloves</h4>
                                    <p>5-6 Week Lead Time</p>
                                    <a href="https://44progloves.zendesk.com/hc/en-us/articles/22286725991309-Custom-Gloves-Warranty-Policy" target="_blank" class="bg-blue-50 text-blue-900 border border-blue-100 px-2 py-1 rounded-full inline-flex items-center gap-1 hover:underline"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"></path></svg> 1 Year Warranty Included</a>
                                </div>
                                <div>
                                    <p>Quantity</p>
                                    <p className='border text-center rounded-md'>1</p>
                                    <button>Remove</button>
                                </div>
                                <div>sdd</div>

                            </div>

                        </div>
                        <ul>
                            {Object.entries(details).map(([key, value]) => (
                                <li key={key}>
                                    <strong>{key}:</strong> {typeof value === 'object' ? JSON.stringify(value) : value ? value : "White"}
                                </li>
                            ))}
                            <li>
                                <strong>Size:</strong> {size}
                            </li>
                        </ul>

                    </div>
                ) : (
                    <p>No items in the cart.</p>
                )}
            </div>
        </div>
    );
};

export default Cart;
