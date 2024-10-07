import React, { useState, useRef } from 'react';
import Front from '../../ProductsModel/BaseballGlove/Front';
import Back from '../../ProductsModel/BaseballGlove/Back';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import CustomTab from './CustomTab';
import { FaPalette, FaUserEdit } from 'react-icons/fa';
import Left from '../../ProductsModel/BaseballGlove/Left';
import Right from '../../ProductsModel/BaseballGlove/Right';

const CustomBaseball = () => {
    const initialFilters = {
        binding: '',
        interiorLeather: '',
        lacesFinger: '',
        lacesPalm: '',
        lacesWingtipPinky: '',
        lacesWingtipThumb: '',
        lacesWrist: '',
        leather1: '',
        leather2: '',
        leather3: '',
        leather4: '',
        leather5: '',
        leather6: '',
        leather7: '',
        leather8: '',
        padding: '',
        palm: '',
        stitching: '',
        welting: '',
        wingtipPinky: '',
        wingtipThumb: '',
        websLaces: '',
        websStitching: '',
        websWeb: '',
        palmLogo: '',
        folderWeb: '',
        wrist: '',
        mainLogo: '',
    };

    const [filters, setFilters] = useState(initialFilters);
    const [activeTab, setActiveTab] = useState('base');
    const [selectedSize, setSelectedSize] = useState('');
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const swiperRef = useRef(null);
    const colorSwiperRef = useRef(null);

    const tabs = [
        { id: 'base', label: 'Base', icon: <FaPalette /> },
        { id: 'colors', label: 'Colors', icon: <FaPalette /> },
        { id: 'personalize', label: 'Personalize', icon: <FaUserEdit /> },
    ];

    const colors = [
        { name: 'White', color: '#FFFFFF', filter: '' },
        { name: 'Red', color: '#fdda4c', filter: 'brightness(0.9) sepia(90%) saturate(900%) hue-rotate(0deg)' },
        { name: 'Blue', color: '#fabefe', filter: 'brightness(0.8) sepia(80%) saturate(700%) hue-rotate(210deg)' },
        { name: 'Green', color: '#4bfecb', filter: 'brightness(0.8) sepia(90%) saturate(800%) hue-rotate(100deg)' },
        { name: 'Black', color: '#4b4c4c', filter: 'brightness(0) sepia(0%) saturate(0%)' },
        { name: 'Yellow', color: '#73f969', filter: 'brightness(0.1) sepia(90%) saturate(900%) hue-rotate(60deg)' },
        { name: 'Peach', color: '#c7f079', filter: 'brightness(0.5) sepia(60%) saturate(500%) hue-rotate(30deg)' },
        { name: 'Purple', color: '#fdaefe', filter: 'brightness(.4) sepia(90%) saturate(800%) hue-rotate(240deg)' },
        { name: 'Orange', color: '#b1f64d', filter: 'brightness(.5) sepia(90%) saturate(700%) hue-rotate(30deg)' },
        { name: 'Pink', color: '#fdd754', filter: 'brightness(0.5) sepia(90%) saturate(600%) hue-rotate(350deg)' },
        { name: 'Brown', color: '#cbeb4c', filter: 'brightness(0.5) sepia(90%) saturate(600%) hue-rotate(20deg)' },
        { name: 'Gray', color: '#999a9a', filter: 'brightness(0.5) sepia(0%) saturate(0%)' },
        { name: 'Turquoise', color: '#91dafe', filter: 'brightness(0.5) sepia(90%) saturate(700%) hue-rotate(170deg)' },
        { name: 'Violet', color: '#fda7fe', filter: 'brightness(0.5) sepia(90%) saturate(800%) hue-rotate(270deg)' },
        { name: 'Cyan', color: '#b0d5fe', filter: 'brightness(0.5) sepia(90%) saturate(700%) hue-rotate(180deg)' },
        { name: 'Indigo', color: '#f5bdfe', filter: 'brightness(0.5) sepia(90%) saturate(600%) hue-rotate(210deg)' },
        { name: 'Lavender', color: '#fdccfe', filter: 'brightness(0.5) sepia(60%) saturate(400%) hue-rotate(240deg)' },
        { name: 'Lime', color: '#4bfeae', filter: 'brightness(0.5) sepia(90%) saturate(700%) hue-rotate(90deg)' },
        { name: 'Mint', color: '#4bfefd', filter: 'brightness(0.5) sepia(90%) saturate(600%) hue-rotate(120deg)' },
        { name: 'Coral', color: '#d7e94c', filter: 'brightness(0.5) sepia(70%) saturate(500%) hue-rotate(15deg)' },
        { name: 'Salmon', color: '#e5df4c', filter: 'brightness(0.5) sepia(80%) saturate(600%) hue-rotate(10deg)' },
        { name: 'Gold', color: '#8efb5b', filter: 'brightness(0.5) sepia(90%) saturate(600%) hue-rotate(45deg)' },
    ];



    const sizes = ['11"', '11.25"', '11.5"', '11.75"', '12"', '12.25"'];

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleColorChange = (color, type) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [type]: color,
        }));
    };




    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    const handleNextColor = () => {
        if (colorSwiperRef.current) {
            colorSwiperRef.current.swiper.slideNext();
        }
    };

    const handlePrevColor = () => {
        if (colorSwiperRef.current) {
            colorSwiperRef.current.swiper.slidePrev();
        }
    };

    const handleSlideChange = (swiper) => {
        setCurrentSlideIndex(swiper.activeIndex);
    };

    const handleReset = () => {
        setFilters(initialFilters);
        setSelectedSize('');
        setActiveTab('base');
        setCurrentSlideIndex(0);
        if (swiperRef.current) swiperRef.current.swiper.slideTo(0);
        if (colorSwiperRef.current) colorSwiperRef.current.swiper.slideTo(0);
    };

    const partNames = [
        { id: 'leather1', displayName: 'Leather 1' },
        { id: 'leather2', displayName: 'Leather 2' },
        { id: 'leather3', displayName: 'Leather 3' },
        { id: 'leather4', displayName: 'Leather 4' },
        { id: 'leather5', displayName: 'Leather 5' },
        { id: 'leather6', displayName: 'Leather 6' },
        { id: 'leather7', displayName: 'Leather 7' },
        { id: 'leather8', displayName: 'Leather 8' },
        { id: 'palm', displayName: 'Palm' },
        { id: 'folderWeb',displayName: 'Web'   },
        { id: 'wrist',displayName: 'Wrist'   },
        { id: 'wingtipPinky', displayName: 'Wingtip Pinky' },
        { id: 'wingtipThumb', displayName: 'Wingtip Thumb' }, 
        { id: 'binding', displayName: 'Binding' },
        { id: 'welting', displayName: 'Welting' },
        { id: 'homePlate', displayName: 'Home Plate' },
        { id: 'stitching', displayName: 'Stitching' },
        { id: 'mainLogo',displayName: 'Logo Color'   },
        { id: 'lacesFinger', displayName: 'Laces ' },
        { id: 'padding', displayName: 'Padding' },
        // { id: 'interiorLeather', displayName: 'Interior Leather' },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 p-6">
            <div className='flex-1 max-w-7xl customSwiper rounded-lg shadow-lg overflow-hidden'>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                    slidesPerView={1}
                    spaceBetween={10}
                    onSlideChange={handleSlideChange}
                    ref={swiperRef}
                >
                    <SwiperSlide>
                        <Back filters={filters} />
                        back
                    </SwiperSlide>
                    <SwiperSlide>
                        <Front filters={filters} />
                        front
                    </SwiperSlide>
                    <SwiperSlide>
                        <Left filters={filters} />
                        left
                    </SwiperSlide>
                    <SwiperSlide>
                        <Right filters={filters} />
                        right
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="flex flex-col min-w-[500px] h-fit p-4 bg-white rounded-lg shadow-md">
                <CustomTab tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} />

                {activeTab === 'base' && (
                    <div className="text-black mt-4">
                        <h2 className="text-lg font-semibold mb-2">Size</h2>
                        <div className="flex flex-col items-start w-96 gap-5">
                            {sizes.map(size => (
                                <div className="form-control" key={size}>
                                    <label className="cursor-pointer label">
                                        <input
                                            type="radio"
                                            className="radio radio-success mr-5"
                                            name="size"
                                            checked={selectedSize === size}
                                            onChange={() => handleSizeChange(size)}
                                        />
                                        <span className="label-text text-xl">{size}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'colors' && (
                    <div className='w-96'>
                        <div className='flex justify-between mb-10'>
                            <button
                                onClick={handlePrevColor}
                                className={`${currentSlideIndex === 0 ? "hidden" : ""}bg-gray-200 p-2 rounded`}
                            >
                                Prev
                            </button>
                            <button
                                onClick={handleNextColor}
                                className="bg-gray-200 p-2 rounded"
                                disabled={currentSlideIndex === partNames.length - 1}
                            >
                                Next
                            </button>
                        </div>
                        <Swiper
                            navigation={false}
                            modules={[Navigation]}
                            className="mySwiper"
                            slidesPerView={1}
                            spaceBetween={10}
                            onSlideChange={handleSlideChange}
                            ref={colorSwiperRef}
                        >
                            {partNames.map(part => (
                                <SwiperSlide key={part.id}>
                                    <div className="mt-4">
                                        <h4 className='my-5 text-3xl'>{part.displayName}</h4>
                                        <div className='grid grid-cols-5'>
                                            {colors.map(color => (
                                                <button
                                                    key={color.name}
                                                    onClick={() => handleColorChange(color.filter, part.id)}
                                                    style={{ backgroundColor: color.color }}
                                                    className={`w-30 h-14 rounded-md m-1 focus:outline-none border-2 border-black transition-transform transform hover:scale-110 ${filters[part.id] === color.filter ? 'border-4 border-blue-500' : ''}`}
                                                    title={color.name}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}

                {activeTab === 'personalize' && (
                    <div className="mt-4">Personalize content here</div>
                )}

                {/* Reset Button */}
                <button
                    onClick={handleReset}
                    className="mt-6 bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors"
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default CustomBaseball;
