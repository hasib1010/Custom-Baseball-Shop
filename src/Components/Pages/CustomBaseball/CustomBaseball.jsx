import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaPalette, FaUserEdit } from 'react-icons/fa';
import Front from '../../ProductsModel/BaseballGlove/Front';
import Back from '../../ProductsModel/BaseballGlove/Back';
import Left from '../../ProductsModel/BaseballGlove/Left';
import Right from '../../ProductsModel/BaseballGlove/Right';
import CustomTab from './CustomTab';
import { MdVerified } from 'react-icons/md';
import { VscVerifiedFilled } from 'react-icons/vsc';
import { Link, useNavigate } from 'react-router-dom';

// Constants for initial states
const initialFilters = {
    binding: '', folderWeb: '', interiorLeather: '', lacesFinger: '', lacesPalm: '', lacesWingtipPinky: '', lacesWingtipThumb: '', lacesWrist: '', leather1: '', leather2: '', leather3: '', leather4: '', leather5: '', leather6: '', leather7: '', leather8: '', mainLogo: '', padding: '', palm: '', palmLogo: '', stitching: '', websLaces: '', websStitching: '', websWeb: '', welting: '', wingtipPinky: '', wingtipThumb: '', wrist: ''
};
const initialOrderData = {
    size: '', binding: '', folderWeb: '', interiorLeather: '', lacesFinger: '', lacesPalm: '', lacesWingtipPinky: '', lacesWingtipThumb: '', lacesWrist: '', leather1: '', leather2: '', leather3: '', leather4: '', leather5: '', leather6: '', leather7: '', leather8: '', mainLogo: '', padding: '', palm: '', palmLogo: '', stitching: '', websLaces: '', websStitching: '', websWeb: '', welting: '', wingtipPinky: '', wingtipThumb: '', wrist: ''
};
const colors = [
    { name: 'White', color: '#FFFFFF', filter: '' }, { name: 'Red', color: '#fdda4c', filter: 'brightness(0.9) sepia(90%) saturate(900%) hue-rotate(0deg)' }, { name: 'Blue', color: '#fabefe', filter: 'brightness(0.8) sepia(80%) saturate(700%) hue-rotate(210deg)' }, { name: 'Green', color: '#4bfecb', filter: 'brightness(0.8) sepia(90%) saturate(800%) hue-rotate(100deg)' }, { name: 'Black', color: '#4b4c4c', filter: 'brightness(0) sepia(0%) saturate(0%)' }, { name: 'Yellow', color: '#73f969', filter: 'brightness(0.1) sepia(90%) saturate(900%) hue-rotate(60deg)' }, { name: 'Peach', color: '#c7f079', filter: 'brightness(0.5) sepia(60%) saturate(500%) hue-rotate(30deg)' }, { name: 'Purple', color: '#fdaefe', filter: 'brightness(.4) sepia(90%) saturate(800%) hue-rotate(240deg)' }, { name: 'Orange', color: '#b1f64d', filter: 'brightness(.5) sepia(90%) saturate(700%) hue-rotate(30deg)' }, { name: 'Pink', color: '#fdd754', filter: 'brightness(0.5) sepia(90%) saturate(600%) hue-rotate(350deg)' }, { name: 'Brown', color: '#cbeb4c', filter: 'brightness(0.5) sepia(90%) saturate(600%) hue-rotate(20deg)' }, { name: 'Gray', color: '#999a9a', filter: 'brightness(0.5) sepia(0%) saturate(0%)' }, { name: 'Turquoise', color: '#91dafe', filter: 'brightness(0.5) sepia(90%) saturate(700%) hue-rotate(170deg)' }, { name: 'Violet', color: '#fda7fe', filter: 'brightness(0.5) sepia(90%) saturate(800%) hue-rotate(270deg)' }, { name: 'Cyan', color: '#b0d5fe', filter: 'brightness(0.5) sepia(90%) saturate(700%) hue-rotate(180deg)' }, { name: 'Indigo', color: '#f5bdfe', filter: 'brightness(0.5) sepia(90%) saturate(600%) hue-rotate(210deg)' }, { name: 'Lavender', color: '#fdccfe', filter: 'brightness(0.5) sepia(60%) saturate(400%) hue-rotate(240deg)' }, { name: 'Lime', color: '#4bfeae', filter: 'brightness(0.5) sepia(90%) saturate(700%) hue-rotate(90deg)' }, { name: 'Mint', color: '#4bfefd', filter: 'brightness(0.5) sepia(90%) saturate(600%) hue-rotate(120deg)' }, { name: 'Coral', color: '#d7e94c', filter: 'brightness(0.5) sepia(70%) saturate(500%) hue-rotate(15deg)' }, { name: 'Salmon', color: '#e5df4c', filter: 'brightness(0.5) sepia(80%) saturate(600%) hue-rotate(10deg)' }, { name: 'Gold', color: '#8efb5b', filter: 'brightness(0.5) sepia(90%) saturate(600%) hue-rotate(45deg)' },];

const sizes = ['11"', '11.25"', '11.5"', '11.75"', '12"', '12.25"'];

const tabs = [
    { id: 'base', label: 'Base', icon: <FaPalette /> },
    { id: 'colors', label: 'Colors', icon: <FaPalette /> },
    { id: 'personalize', label: 'Personalize', icon: <FaUserEdit /> },
];

const partNames = [
    { id: 'leather1', displayName: 'Leather 1' }, { id: 'leather2', displayName: 'Leather 2' }, { id: 'leather3', displayName: 'Leather 3' }, { id: 'leather4', displayName: 'Leather 4' }, { id: 'leather5', displayName: 'Leather 5' }, { id: 'leather6', displayName: 'Leather 6' }, { id: 'leather7', displayName: 'Leather 7' }, { id: 'leather8', displayName: 'Leather 8' }, { id: 'palm', displayName: 'Palm' }, { id: 'folderWeb', displayName: 'Web' }, { id: 'wrist', displayName: 'Wrist' }, { id: 'wingtipPinky', displayName: 'Wingtip Pinky' }, { id: 'wingtipThumb', displayName: 'Wingtip Thumb' }, { id: 'binding', displayName: 'Binding' }, { id: 'welting', displayName: 'Welting' }, { id: 'stitching', displayName: 'Stitching' }, { id: 'mainLogo', displayName: 'Logo Color' }, { id: 'lacesFinger', displayName: 'Laces' }, { id: 'padding', displayName: 'Padding' },];

const CustomBaseball = () => {
    const [orderData, setOrderData] = useState(() => {
        const savedData = localStorage.getItem('orderData');
        return savedData ? JSON.parse(savedData) : initialOrderData;
    });

    const [filters, setFilters] = useState(() => {
        const localStorageData = localStorage.getItem('filters');
        return localStorageData ? JSON.parse(localStorageData) : initialFilters;
    });

    const [activeTab, setActiveTab] = useState('base');
    const [selectedSize, setSelectedSize] = useState(() => {
        const savedSize = localStorage.getItem('selectedSize');
        return savedSize || '';
    });

    const swiperRef = useRef(null);
    const colorSwiperRef = useRef(null);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleColorChange = (filter, type, name) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [type]: filter,
        }));
        updateOrderData(type, name);
    };

    const handleSizeChange = (size) => {
        setSelectedSize(size);
        updateOrderData('size', size);
    };

    const handleReset = () => {
        setFilters(initialFilters);
        setSelectedSize('');
        setActiveTab('base');
        setOrderData(initialOrderData);
        localStorage.clear();
        resetSwiper();
    };

    const updateOrderData = (key, value) => {
        setOrderData(prevData => {
            const newData = { ...prevData, [key]: value };
            localStorage.setItem('orderData', JSON.stringify(newData));
            return newData;
        });
    };

    const resetSwiper = () => {
        if (swiperRef.current) swiperRef.current.swiper.slideTo(0);
        if (colorSwiperRef.current) colorSwiperRef.current.swiper.slideTo(0);
    };

    useEffect(() => {
        localStorage.setItem('filters', JSON.stringify(filters));
        localStorage.setItem('selectedSize', selectedSize);
    }, [filters, selectedSize]);

    const navigate = useNavigate()
    const handleAddToCart = () => {
        const completeOrderData = { ...orderData, filters };
        console.log('Adding to cart:', completeOrderData); 
        localStorage.setItem('cartData', JSON.stringify(completeOrderData));
 
        navigate('/cart');
    };


    const isAddToCartEnabled = selectedSize && Object.values(filters).some(filter => filter);

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50 p-6">
            <div className='flex-1 max-w-7xl customSwiper rounded-lg shadow-lg overflow-hidden'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-screen" slidesPerView={1} ref={swiperRef}>
                    <SwiperSlide><Back filters={filters} /></SwiperSlide>
                    <SwiperSlide><Front filters={filters} /></SwiperSlide>
                    <SwiperSlide><Left filters={filters} /></SwiperSlide>
                    <SwiperSlide><Right filters={filters} /></SwiperSlide>
                </Swiper>
            </div>

            <div className="flex flex-col gap-10">
                <button onClick={handleReset} className="mt-6 bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors">
                    Reset
                </button>
                <div className="flex flex-col min-w-[500px] h-fit p-4 bg-white rounded-lg shadow-md">
                    <CustomTab tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} />

                    {activeTab === 'base' && <SizeSelector sizes={sizes} selectedSize={selectedSize} onSizeChange={handleSizeChange} />}
                    {activeTab === 'colors' && <ColorSelector colors={colors} partNames={partNames} filters={filters} onColorChange={handleColorChange} colorSwiperRef={colorSwiperRef} />}
                    {activeTab === 'personalize' && <div className="mt-4">Personalize content here</div>}
                </div>
                <button
                    onClick={handleAddToCart}
                    className={`btn btn-active w-fit font-bold text-xl ${isAddToCartEnabled ? 'bg-blue-500' : 'bg-gray-300 cursor-not-allowed'}`}
                    disabled={!isAddToCartEnabled}>
                    Add to Cart $264
                </button>
            </div>
        </div>
    );
};

const SizeSelector = ({ sizes, selectedSize, onSizeChange }) => (
    <div className="text-black mt-4">
        <h2 className="text-lg font-semibold mb-2">Size</h2>
        <div className="flex flex-col items-start w-96 gap-5">
            {sizes.map(size => (
                <label key={size} className="cursor-pointer label">
                    <input
                        type="radio"
                        className="radio radio-success mr-5"
                        name="size"
                        checked={selectedSize === size}
                        onChange={() => onSizeChange(size)}
                    />
                    <span className="label-text text-xl">{size}</span>
                </label>
            ))}
        </div>
    </div>
);

const ColorSelector = ({ colors, partNames, filters, onColorChange, colorSwiperRef }) => (
    <div className='w-96'>
        <div className='flex justify-between mb-10'>
            <button onClick={() => colorSwiperRef.current.swiper.slidePrev()} className="bg-gray-200 p-2 rounded">Prev</button>
            <button onClick={() => colorSwiperRef.current.swiper.slideNext()} className="bg-gray-200 p-2 rounded">Next</button>
        </div>
        <Swiper navigation={false} modules={[Navigation]} className="mySwiper" slidesPerView={1} ref={colorSwiperRef}>
            {partNames.map(part => (
                <SwiperSlide key={part.id}>
                    <div className="mt-4">
                        <h4 className='my-5 text-3xl'>{part.displayName}</h4>
                        <div className='grid grid-cols-5'>
                            {colors.map(color => (
                                <div className="relative w-fit h-fit z-10" key={color.name}>
                                    <button
                                        onClick={() => onColorChange(color.filter, part.id, color.name)}
                                        style={{ backgroundColor: color.color, width: '60px', height: '56px' }} // Set fixed width and height
                                        className={`rounded-md m-1 focus:outline-none border-2 z-10 border-black transition-transform transform hover:scale-110 ${filters[part.id] === color.filter ? '  ' : ''}`}
                                        title={color.name}
                                    />
                                    {filters[part.id] === color.filter && (
                                        <VscVerifiedFilled className='absolute top-1 bg-white rounded-full text-xl -right-1 z-30 text-blue-500 w-5 h-5' /> // Set size for the icon
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
);

export default CustomBaseball;
