import React from 'react';

// Importing assets from left folder
import binding from "./../../../assets/left/binding.png";
import interiorLeather from "./../../../assets/left/interior-leather.png";
import lacesFinger from "./../../../assets/left/laces-finger.png";
import lacesPalm from "./../../../assets/left/laces-palm.png";
import lacesWingtipPinky from "./../../../assets/left/laces-wingtip-pinky.png";
import lacesWrist from "./../../../assets/left/laces-wrist.png"; 
import leather2 from "./../../../assets/left/leather-2.png";
import leather3 from "./../../../assets/left/leather-3.png";
import leather4 from "./../../../assets/left/leather-4.png";
import leather5 from "./../../../assets/left/leather-5.png";
import leather6 from "./../../../assets/left/leather-6.png";
import leather7 from "./../../../assets/left/leather-7.png";
import leather8 from "./../../../assets/left/leather-8.png";
import padding from "./../../../assets/left/padding.png";
import stitching from "./../../../assets/left/stitching.png";
import welting from "./../../../assets/left/welting.png";
import wingtipPinky from "./../../../assets/left/wingtip-pinky.png";
import wrist from "./../../../assets/left/wrist.png";

const imageLayers = [
  { id: 'binding', src: binding, alt: 'Binding', zIndex: 100 },
  { id: 'interiorLeather', src: interiorLeather, alt: 'Interior Leather', zIndex: 110 },
  { id: 'lacesFinger', src: lacesFinger, alt: 'Laces Finger', zIndex: 120 },
  { id: 'lacesFinger', src: lacesPalm, alt: 'Laces Palm', zIndex: 130 },
  { id: 'lacesFinger', src: lacesWingtipPinky, alt: 'Laces Wingtip Pinky', zIndex: 140 },
  { id: 'lacesFinger', src: lacesWrist, alt: 'Laces Wrist', zIndex: 150 }, 
  { id: 'leather2', src: leather2, alt: 'Leather 2', zIndex: 160 },
  { id: 'leather3', src: leather3, alt: 'Leather 3', zIndex: 170 },
  { id: 'leather4', src: leather4, alt: 'Leather 4', zIndex: 180 },
  { id: 'leather5', src: leather5, alt: 'Leather 5', zIndex: 190 },
  { id: 'leather6', src: leather6, alt: 'Leather 6', zIndex: 200 },
  { id: 'leather7', src: leather7, alt: 'Leather 7', zIndex: 210 },
  { id: 'leather8', src: leather8, alt: 'Leather 8', zIndex: 220 },
  { id: 'padding', src: padding, alt: 'Padding', zIndex: 230 },
  { id: 'stitching', src: stitching, alt: 'Stitching', zIndex: 240 },
  { id: 'welting', src: welting, alt: 'Welting', zIndex: 250 },
  { id: 'wingtipPinky', src: wingtipPinky, alt: 'Wingtip Pinky', zIndex: 260 },
  { id: 'wrist', src: wrist, alt: 'Wrist', zIndex: 270 },
];

const Left = ({ filters }) => {
    return (
        <div className="relative  ">
            {imageLayers.map((layer, index) => (
                <div key={index} className={`${layer.id}-container relative`}>
                    <img
                        id={layer.id}
                        className="absolute"
                        src={layer.src}
                        alt={layer.alt}
                        style={{ 
                            filter: filters[layer.id] || 'none',
                            zIndex: layer.zIndex,
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

export default Left;
