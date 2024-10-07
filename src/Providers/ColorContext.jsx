import React, { createContext, useContext, useState } from 'react';

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
    const [filter, setFilter] = useState('');

    const staticColors = [
        { name: 'Red', color: 'red', filter: 'brightness(0.9) invert(91%) sepia(56%) saturate(5430%) hue-rotate(7deg) brightness(104%) contrast(128%)' },
        { name: 'Green', color: 'green', filter: 'brightness(0.9) invert(48%) sepia(91%) saturate(1090%) hue-rotate(83deg) brightness(58%) contrast(126%)' },
        { name: 'Blue', color: 'blue', filter: 'brightness(0.9) brightness(0) saturate(100%) invert(30%) sepia(88%) saturate(1185%) hue-rotate(206deg) brightness(97%) contrast(90%)' },
        { name: 'Orange', color: 'orange', filter: 'invert(94%) sepia(56%) saturate(3430%) hue-rotate(5deg) brightness(113%) contrast(109%)' },
        { name: 'Purple', color: 'purple', filter: 'brightness(0.9) invert(17%) sepia(58%) saturate(5837%) hue-rotate(267deg) brightness(98%) contrast(127%)' },
    ];

    const changeColor = (newFilter) => {
        setFilter(newFilter);
    };

    return (
        <ColorContext.Provider value={{ filter, staticColors, changeColor }}>
            {children}
        </ColorContext.Provider>
    );
};

export const useColor = () => {
    return useContext(ColorContext);
};
