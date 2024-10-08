import React from 'react';

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

// leather1 colors
import leather1ElephantSkin from "./../../../assets/front/leather/leather-1--elephantskin.png";
import leather1Gator from "./../../../assets/front/leather/leather-1--gator.png";
import leather1Jeans from "./../../../assets/front/leather/leather-1--jeans.png";
import leather1PaisleyGold from "./../../../assets/front/leather/leather-1--paisley--gold.png";
import leather1Paisley from "./../../../assets/front/leather/leather-1--paisley.png";
import leather1Perforated from "./../../../assets/front/leather/leather-1--perforated.png";
import leather1SnakeskinCamo from "./../../../assets/front/leather/leather-1--snakeskin--camo.png";
import leather1SnakeskinCottonCandy from "./../../../assets/front/leather/leather-1--snakeskin--cotton-candy.png";
import leather1SnakeskinTieDye from "./../../../assets/front/leather/leather-1--snakeskin--tie-dye.png";
import leather1Snakeskin from "./../../../assets/front/leather/leather-1--snakeskin.png";
import leather1Steel from "./../../../assets/front/leather/leather-1--steel.png";
import leather1Suede from "./../../../assets/front/leather/leather-1--suede.png";

// Define image layers for the Front component
const imageLayers = [
  { id: 'binding', src: binding, alt: 'Binding', zIndex: 10 },
  { id: 'interiorLeather', src: interiorLeather, alt: 'Interior Leather', zIndex: 20 },
  { id: 'lacesFinger', src: lacesFinger, alt: 'Laces Finger', zIndex: 300 },
  { id: 'lacesFinger', src: lacesPalm, alt: 'Laces Palm', zIndex: 40 },
  { id: 'lacesFinger', src: lacesWingtipPinky, alt: 'Laces Wingtip Pinky', zIndex: 50 },
  { id: 'lacesFinger', src: lacesWingtipThumb, alt: 'Laces Wingtip Thumb', zIndex: 60 },
  { id: 'lacesFinger', src: lacesWrist, alt: 'Laces Wrist', zIndex: 70 },
  { id: 'leather1', src: leather1, alt: 'Leather 1', zIndex: 82 },
  { id: 'leather2', src: leather2, alt: 'Leather 2', zIndex: 90 },
  { id: 'leather3', src: leather3, alt: 'Leather 3', zIndex: 100 },
  { id: 'leather4', src: leather4, alt: 'Leather 4', zIndex: 110 },
  { id: 'leather5', src: leather5, alt: 'Leather 5', zIndex: 120 },
  { id: 'leather6', src: leather6, alt: 'Leather 6', zIndex: 130 },
  { id: 'leather7', src: leather7, alt: 'Leather 7', zIndex: 140 },
  { id: 'leather8', src: leather8, alt: 'Leather 8', zIndex: 150 },
  { id: 'padding', src: padding, alt: 'Padding', zIndex: 160 },
  { id: 'palm', src: palm, alt: 'Palm', zIndex: -10 },
  { id: 'stitching', src: stitching, alt: 'Stitching', zIndex: 180 },
  { id: 'welting', src: welting, alt: 'Welting', zIndex: 190 },
  { id: 'wingtipPinky', src: wingtipPinky, alt: 'Wingtip Pinky', zIndex: 200 },
  { id: 'wingtipThumb', src: wingtipThumb, alt: 'Wingtip Thumb', zIndex: 210 },
  { id: 'lacesFinger', src: websLaces, alt: 'Webs Laces', zIndex: 220 },
  { id: 'stitching', src: websStitching, alt: 'Webs Stitching', zIndex: 2300 },
  { id: 'folderWeb', src: websWeb, alt: 'Webs Web', zIndex: 240 },
  { id: "leather1ElephantSkin", src: leather1ElephantSkin, zIndex: 80 },
  { id: "leather1Gator", src: leather1Gator, zIndex: 80 },
  { id: "leather1Jeans", src: leather1Jeans, zIndex: 80 },
  { id: "leather1PaisleyGold", src: leather1PaisleyGold, zIndex: 80 },
  { id: "leather1Paisley", src: leather1Paisley, zIndex: 80 },
  { id: "leather1Perforated", src: leather1Perforated, zIndex: 80 },
  { id: "leather1SnakeskinCamo", src: leather1SnakeskinCamo, zIndex: 80 },
  { id: "leather1SnakeskinCottonCandy", src: leather1SnakeskinCottonCandy, zIndex: 80 },
  { id: "leather1SnakeskinTieDye", src: leather1SnakeskinTieDye, zIndex: 80 },
  { id: "leather1Snakeskin", src: leather1Snakeskin, zIndex: 80 },
  { id: "leather1Steel", src: leather1Steel, zIndex: 80 },
  { id: "leather1Suede", src: leather1Suede, zIndex: 80 },
]

const Front = ({ filters }) => {
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
              filter: filters?.[layer.id] ? `${filters[layer.id]}` : 'none', // Adjust the opacity here
              zIndex: layer.zIndex,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Front;
