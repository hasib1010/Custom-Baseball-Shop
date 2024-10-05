import React, { useState } from 'react';

// Importing assets from front folder
import binding from "./../../../assets/front/binding.png";
import interiorLeather from "./../../../assets/front/interior-leather.png";
import lacesFinger from "./../../../assets/front/laces-finger.png";
import lacesPalm from "./../../../assets/front/laces-palm.png";
import lacesWingtipPinky from "./../../../assets/front/laces-wingtip-pinky.png";
import lacesWingtipThumb from "./../../../assets/front/laces-wingtip-thumb.png";
import lacesWrist from "./../../../assets/front/laces-wrist.png";
import leather1 from "./../../../assets/front/leather-1.png";
import leather2 from "./../../../assets/front/leather-2.png";
import leather3 from "./../../../assets/front/leather-3.png";
import leather4 from "./../../../assets/front/leather-4.png";
import leather5 from "./../../../assets/front/leather-5.png";
import leather6 from "./../../../assets/front/leather-6.png";
import leather7 from "./../../../assets/front/leather-7.png";
import leather8 from "./../../../assets/front/leather-8.png";
import padding from "./../../../assets/front/padding.png";
import palm from "./../../../assets/front/palm.png";
import stitching from "./../../../assets/front/stitching.png";
import welting from "./../../../assets/front/welting.png";
import wingtipPinky from "./../../../assets/front/wingtip-pinky.png";
import wingtipThumb from "./../../../assets/front/wingtip-thumb.png";
import websLaces from "./../../../assets/front/webs/laces.png";
import websStitching from "./../../../assets/front/webs/stitching.png";
import websWeb from "./../../../assets/front/webs/web.png";
import palmLogo from "./../../../assets/front/palm-graphics/44-logo.png";

const imageLayers = [
  { id: 'binding', src: binding, alt: 'Binding' },
  { id: 'interiorLeather', src: interiorLeather, alt: 'Interior Leather' },
  { id: 'lacesFinger', src: lacesFinger, alt: 'Laces Finger' },
  { id: 'lacesPalm', src: lacesPalm, alt: 'Laces Palm' },
  { id: 'lacesWingtipPinky', src: lacesWingtipPinky, alt: 'Laces Wingtip Pinky' },
  { id: 'lacesWingtipThumb', src: lacesWingtipThumb, alt: 'Laces Wingtip Thumb' },
  { id: 'lacesWrist', src: lacesWrist, alt: 'Laces Wrist' },
  { id: 'leather1', src: leather1, alt: 'Leather 1' },
  { id: 'leather2', src: leather2, alt: 'Leather 2' },
  { id: 'leather3', src: leather3, alt: 'Leather 3' },
  { id: 'leather4', src: leather4, alt: 'Leather 4' },
  { id: 'leather5', src: leather5, alt: 'Leather 5' },
  { id: 'leather6', src: leather6, alt: 'Leather 6' },
  { id: 'leather7', src: leather7, alt: 'Leather 7' },
  { id: 'leather8', src: leather8, alt: 'Leather 8' },
  { id: 'padding', src: padding, alt: 'Padding' },
  { id: 'palm', src: palm, alt: 'Palm' },
  { id: 'stitching', src: stitching, alt: 'Stitching' },
  { id: 'welting', src: welting, alt: 'Welting' },
  { id: 'wingtipPinky', src: wingtipPinky, alt: 'Wingtip Pinky' },
  { id: 'wingtipThumb', src: wingtipThumb, alt: 'Wingtip Thumb' },
  { id: 'websLaces', src: websLaces, alt: 'Webs Laces' },
  { id: 'websStitching', src: websStitching, alt: 'Webs Stitching' },
  { id: 'websWeb', src: websWeb, alt: 'Webs Web' },
  { id: 'palmLogo', src: palmLogo, alt: 'Palm Logo' },
];

const Front = () => {
  // State to store the selected color filter
  const [filter, setFilter] = useState('');  

  // Static colors array with adjusted filters
  const staticColors = [
    { name: 'Red', color: 'red', filter: 'brightness(0.9) invert(91%) sepia(56%) saturate(5430%) hue-rotate(7deg) brightness(104%) contrast(128%)' },
    { name: 'Green', color: 'green', filter: 'brightness(0.9) invert(48%) sepia(91%) saturate(1090%) hue-rotate(83deg) brightness(58%) contrast(126%)' },
    { name: 'Blue', color: 'blue', filter: 'brightness(0.9) brightness(0) saturate(100%) invert(30%) sepia(88%) saturate(1185%) hue-rotate(206deg) brightness(97%) contrast(90%)' },
    { name: 'Orange', color: 'orange', filter: 'invert(94%) sepia(56%) saturate(3430%) hue-rotate(5deg) brightness(113%) contrast(109%)' },
    { name: 'Purple', color: 'purple', filter: 'brightness(0.9) invert(17%) sepia(58%) saturate(5837%) hue-rotate(267deg) brightness(98%) contrast(127%)' },
  ];

  // Function to handle color button click
  const handleColorChange = (color) => {
    console.log(`Changing palm color to: ${color}`); // Debugging output
    setFilter(color);
  };

  return (
    <div className="relative max-h-[800px] max-w-[800px] min-h-screen">
      {/* Color buttons */}
      <div className="absolute top-0 left-0 p-4 z-10 flex flex-col">
        {staticColors.map((color) => (
          <button
            key={color.name}
            onClick={() => handleColorChange(color.filter)}
            style={{ backgroundColor: color.color }}
            className="w-10 h-10 rounded-full m-1 focus:outline-none border-2 border-black"
            title={color.name}
          />
        ))}
      </div>

      {/* Map through image layers and render them */}
      {imageLayers.map((layer) => (
        <div key={layer.id} className={`${layer.id}-container relative`}>
          <img
            id={layer.id}
            className="absolute"
            src={layer.src}
            alt={layer.alt}
            style={{
              zIndex: 1, 
              opacity: layer.id === 'palm' ? 1 : 1,  
              filter: layer.id === 'palm' ? filter : 'none', // Apply the filter directly to the palm image
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Front;
