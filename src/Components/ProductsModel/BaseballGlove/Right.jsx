import React from 'react';

// Importing assets from the right folder
import homePlate from "./../../../assets/right/home-plate/home-plate.png";
import homePlateLogo from "./../../../assets/right/home-plate/logo.png";
import homePlateStitching from "./../../../assets/right/home-plate/stitching.png";
import mainLogo from "./../../../assets/right/logo/logo.png";
import laces from "./../../../assets/right/webs/laces.png";
import webLogo from "./../../../assets/right/webs/logo.png";
import webStitching from "./../../../assets/right/webs/stitching.png";
import web from "./../../../assets/right/webs/web.png";
import binding from "./../../../assets/right/binding.png";
import interiorLeather from "./../../../assets/right/interior-leather.png";
import lacesFinger from "./../../../assets/right/laces-finger.png";
import lacesPalm from "./../../../assets/right/laces-palm.png";
import lacesWingtipThumb from "./../../../assets/right/laces-wingtip-thumb.png";
import leather1 from "./../../../assets/right/leather-1.png";
import padding from "./../../../assets/right/padding.png";
import leather2 from "./../../../assets/right/leather-2.png";
import palm from "./../../../assets/right/palm.png";
import stitching from "./../../../assets/right/stitching.png";
import welting from "./../../../assets/right/welting.png";
import wingtipThumb from "./../../../assets/right/wingtip-thumb.png";
import wrist from "./../../../assets/right/wrist.png";

const imageLayers = [
  { id: 'homePlate', src: homePlate, alt: 'Home Plate', zIndex: 1000 },
  { id: 'homePlateLogo', src: homePlateLogo, alt: 'Home Plate Logo', zIndex: 1100 },
  { id: 'homePlateStitching', src: homePlateStitching, alt: 'Home Plate Stitching', zIndex: 1200 },
  { id: 'mainLogo', src: mainLogo, alt: 'Main Logo', zIndex: 1300 },
  { id: 'websLaces', src: laces, alt: 'Laces', zIndex: 200 },
  { id: 'webLogo', src: webLogo, alt: 'Web Logo', zIndex: 15000 },
  { id: 'webStitching', src: webStitching, alt: 'Web Stitching', zIndex: 20000 },
  { id: 'folderWeb', src: web, alt: 'Web', zIndex: 1700 },
  { id: 'binding', src: binding, alt: 'Binding', zIndex: 580 },
  { id: 'interiorLeather', src: interiorLeather, alt: 'Interior Leather', zIndex: 890 },
  { id: 'lacesFinger', src: lacesFinger, alt: 'Laces Finger', zIndex: 5000 },
  { id: 'lacesPalm', src: lacesPalm, alt: 'Laces Palm', zIndex: 2100},
  { id: 'lacesWingtipThumb', src: lacesWingtipThumb, alt: 'Laces Wingtip Thumb', zIndex: 2200 },
  { id: 'leather1', src: leather1, alt: 'Leather 1', zIndex: 180 },
  { id: 'padding', src: padding, alt: 'Padding', zIndex: 240 },
  { id: 'leather2', src: leather2, alt: 'Leather 2', zIndex: 50 },
  { id: 'palm', src: palm, alt: 'Palm', zIndex: 26 },
  { id: 'stitching', src: stitching, alt: 'Stitching', zIndex: 27000 },
  { id: 'welting', src: welting, alt: 'Welting', zIndex: 2 },
  { id: 'wingtipThumb', src: wingtipThumb, alt: 'Wingtip Thumb', zIndex: 29 },
  { id: 'wrist', src: wrist, alt: 'Wrist', zIndex: 30 }, 
];

const Right = ({ filters }) => {
    return (
        <div className="relative min-h-screen">
            {imageLayers.map((layer) => (
                <div key={layer.id} className={`${layer.id}-container relative`}>
                    <img
                        id={layer.id}
                        className="absolute"
                        src={layer.src}
                        alt={layer.alt}
                        style={{ 
                            filter: filters[layer.id] || 'none', // Apply filter dynamically based on ID
                            zIndex: layer.zIndex,
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

export default Right;
