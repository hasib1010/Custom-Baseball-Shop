import React from 'react';

// Importing assets from back folder
import homePlate from "./../../../assets/back/home-plate/home-plate.png";
import homePlateLogo from "./../../../assets/back/home-plate/logo.png";
import homePlateStitching from "./../../../assets/back/home-plate/stitching.png";
import mainLogo from "./../../../assets/back/logo/logo.png";
import binding from "./../../../assets/back/webs/binding.png";
import interiorLeather from "./../../../assets/back/webs/interior-leather.png";
import lacesFinger from "./../../../assets/back/webs/laces-finger.png";
import lacesPalm from "./../../../assets/back/webs/laces-palm.png";
import lacesWingtipPinky from "./../../../assets/back/webs/laces-wingtip-pinky.png";
import lacesWingtipThumb from "./../../../assets/back/webs/laces-wingtip-thumb.png";
import lacesWrist from "./../../../assets/back/webs/laces-wrist.png";
import leather1 from "./../../../assets/back/webs/leather-1.png";
import leather2 from "./../../../assets/back/webs/leather-2.png";
import leather3 from "./../../../assets/back/webs/leather-3.png";
import leather4 from "./../../../assets/back/webs/leather-4.png";
import leather5 from "./../../../assets/back/webs/leather-5.png";
import leather6 from "./../../../assets/back/webs/leather-6.png";
import leather7 from "./../../../assets/back/webs/leather-7.png";
import leather8 from "./../../../assets/back/webs/leather-8.png";
import padding from "./../../../assets/back/webs/padding.png";
import palm from "./../../../assets/back/webs/palm.png";
import webStitching from "./../../../assets/back/webs/stitching.png";
import welting from "./../../../assets/back/webs/welting.png";
import wingtipThumb from "./../../../assets/back/webs/wingtip-thumb.png";
import wrist from "./../../../assets/back/webs/wrist.png";
import folderLaces from "./../../../assets/back/webs/New folder/laces.png";
import folderStitching from "./../../../assets/back/webs/New folder/stitching.png";
import folderLogo from "./../../../assets/back/webs/New folder/logo.png";
import folderWeb from "./../../../assets/back/webs/New folder/web.png";
import logo from "./../../../assets/back/logo/logo.png";     

// Define image layers
const imageLayers = [
  { id: 'homePlate', src: homePlate, alt: 'Home Plate', zIndex: 10000 },
  { id: 'mainLogo', src: homePlateLogo, alt: 'Home Plate Logo', zIndex: 11000 },
  { id: 'stitching', src: homePlateStitching, alt: 'Home Plate Stitching', zIndex: 1200 },
  { id: 'logo', src: mainLogo, alt: 'Main Logo', zIndex: 130 },
  { id: 'binding', src: binding, alt: 'Binding', zIndex: 140 },
  { id: 'interiorLeather', src: interiorLeather, alt: 'Interior Leather', zIndex: 150 },
  { id: 'lacesFinger', src: lacesFinger, alt: 'Laces Finger', zIndex: 160 },
  { id: 'lacesFinger', src: lacesPalm, alt: 'Laces Palm', zIndex: 170 },
  { id: 'lacesWingtipPinky', src: lacesWingtipPinky, alt: 'Laces Wingtip Pinky', zIndex: 180 },
  { id: 'lacesWingtipThumb', src: lacesWingtipThumb, alt: 'Laces Wingtip Thumb', zIndex: 190 },
  { id: 'lacesWrist', src: lacesWrist, alt: 'Laces Wrist', zIndex: 200 },
  { id: 'leather1', src: leather1, alt: 'Leather 1', zIndex: 210 },
  { id: 'leather2', src: leather2, alt: 'Leather 2', zIndex: 220 },
  { id: 'leather3', src: leather3, alt: 'Leather 3', zIndex: 230 },
  { id: 'leather4', src: leather4, alt: 'Leather 4', zIndex: 240 },
  { id: 'leather5', src: leather5, alt: 'Leather 5', zIndex: 250 },
  { id: 'leather6', src: leather6, alt: 'Leather 6', zIndex: 260 },
  { id: 'leather7', src: leather7, alt: 'Leather 7', zIndex: 270 },
  { id: 'leather8', src: leather8, alt: 'Leather 8', zIndex: 280 },
  { id: 'padding', src: padding, alt: 'Padding', zIndex: 290 },
  { id: 'palm', src: palm, alt: 'Palm', zIndex: 300 },
  { id: 'stitching', src: webStitching, alt: 'Web Stitching', zIndex: 310 },
  { id: 'welting', src: welting, alt: 'Welting', zIndex: 350 },
  { id: 'wingtipThumb', src: wingtipThumb, alt: 'Wingtip Thumb', zIndex: 330 },
  { id: 'wrist', src: wrist, alt: 'Wrist', zIndex: 340 },
  { id: 'lacesFinger', src: folderLaces, alt: 'Folder Laces', zIndex: 350 },
  { id: 'stitching', src: folderStitching, alt: 'Folder Stitching', zIndex: 3060 },
  { id: 'folderLogo', src: folderLogo, alt: 'Folder Logo', zIndex: 370 },
  { id: 'folderWeb', src: folderWeb, alt: 'Folder Web', zIndex: 380 },
  { id: 'mainLogo', src: logo, alt: 'Logo', zIndex: 390 }, 
];

const Back = ({ filters }) => {
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

export default Back;
