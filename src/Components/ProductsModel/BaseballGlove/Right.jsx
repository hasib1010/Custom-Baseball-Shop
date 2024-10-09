import React from 'react';

// Importing assets from the right folder
import homePlateImage from "./../../../assets/right/home-plate/home-plate.png";
import homePlateLogoImage from "./../../../assets/right/home-plate/logo.png";
import homePlateStitchingImage from "./../../../assets/right/home-plate/stitching.png";
import mainLogoImage from "./../../../assets/right/logo/logo.png";
import lacesImage from "./../../../assets/right/webs/laces.png";
import webLogoImage from "./../../../assets/right/webs/logo.png";
import webStitchingImage from "./../../../assets/right/webs/stitching.png";
import webImage from "./../../../assets/right/webs/web.png";
import bindingImage from "./../../../assets/right/binding.png";
import interiorLeatherImage from "./../../../assets/right/interior-leather.png";
import lacesFingerImage from "./../../../assets/right/laces-finger.png";
import lacesPalmImage from "./../../../assets/right/laces-palm.png";
import lacesWingtipThumbImage from "./../../../assets/right/laces-wingtip-thumb.png";
import leather1Image from "./../../../assets/right/leather-1.png";
import paddingImage from "./../../../assets/right/padding.png";
import leather2Image from "./../../../assets/right/leather-2.png";
import palmImage from "./../../../assets/right/palm.png";
import stitchingImage from "./../../../assets/right/stitching.png";
import weltingImage from "./../../../assets/right/welting.png";
import wingtipThumbImage from "./../../../assets/right/wingtip-thumb.png";
import wristImage from "./../../../assets/right/wrist.png";
import leatherElephantSkinImage from "./../../../assets/right/leather/leather-1--elephantskin.png";
import leatherGatorImage from "./../../../assets/right/leather/leather-1--gator.png";
import leatherJeansImage from "./../../../assets/right/leather/leather-1--jeans.png";
import leatherPaisleyGoldImage from "./../../../assets/right/leather/leather-1--paisley--gold.png";
import leatherPaisleyImage from "./../../../assets/right/leather/leather-1--paisley.png";
import leatherPerforatedImage from "./../../../assets/right/leather/leather-1--perforated.png";
import leatherSnakeskin2Image from "./../../../assets/right/leather/leather-1--snakeskin (2).png";
import leatherSnakeskinCamoImage from "./../../../assets/right/leather/leather-1--snakeskin--camo.png";
import leatherSnakeskinCottonCandyImage from "./../../../assets/right/leather/leather-1--snakeskin--cotton-candy.png";
import leatherSnakeskinTieDyeImage from "./../../../assets/right/leather/leather-1--snakeskin--tie-dye.png";
import leatherSteelImage from "./../../../assets/right/leather/leather-1--steel.png";
import leatherSuedeImage from "./../../../assets/right/leather/leather-1--suede.png";

const imageLayers = [
    { id: 'homePlate', src: homePlateImage, alt: 'Home Plate', zIndex: 10000 },
    { id: 'mainLogo', src: homePlateLogoImage, alt: 'Home Plate Logo', zIndex: 11000 },
    { id: 'stitching', src: homePlateStitchingImage, alt: 'Home Plate Stitching', zIndex: 1200 },
    { id: 'mainLogo', src: mainLogoImage, alt: 'Main Logo', zIndex: 1300 },
    { id: 'lacesFinger', src: lacesImage, alt: 'Laces', zIndex: 200 },
    { id: 'webLogo', src: webLogoImage, alt: 'Web Logo', zIndex: 15000 },
    { id: 'stitching', src: webStitchingImage, alt: 'Web Stitching', zIndex: 20000 },
    { id: 'folderWeb', src: webImage, alt: 'Web', zIndex: 1700 },
    { id: 'binding', src: bindingImage, alt: 'Binding', zIndex: 580 },
    { id: 'interiorLeather', src: interiorLeatherImage, alt: 'Interior Leather', zIndex: 890 },
    { id: 'lacesFinger', src: lacesFingerImage, alt: 'Laces Finger', zIndex: 5000 },
    { id: 'lacesFinger', src: lacesPalmImage, alt: 'Laces Palm', zIndex: 2100 },
    { id: 'lacesFinger', src: lacesWingtipThumbImage, alt: 'Laces Wingtip Thumb', zIndex: 2200 },
    { id: 'leather1', src: leather1Image, alt: 'Leather 1', zIndex: 181 },
    { id: 'padding', src: paddingImage, alt: 'Padding', zIndex: 240 },
    { id: 'leather2', src: leather2Image, alt: 'Leather 2', zIndex: 50 },
    { id: 'palm', src: palmImage, alt: 'Palm', zIndex: 26 },
    { id: 'stitching', src: stitchingImage, alt: 'Stitching', zIndex: 27000 },
    { id: 'welting', src: weltingImage, alt: 'Welting', zIndex: 2 },
    { id: 'wingtipThumb', src: wingtipThumbImage, alt: 'Wingtip Thumb', zIndex: 29 },
    { id: 'wrist', src: wristImage, alt: 'Wrist', zIndex: 30 },
    { id: 'leather1ElephantSkin', src: leatherElephantSkinImage, alt: 'Leather Elephant Skin', zIndex: 180 },
    { id: 'leather1Gator', src: leatherGatorImage, alt: 'Leather Gator', zIndex: 180 },
    { id: 'leather1Jeans', src: leatherJeansImage, alt: 'Leather Jeans', zIndex: 180 },
    { id: 'leather1PaisleyGold', src: leatherPaisleyGoldImage, alt: 'Leather Paisley Gold', zIndex: 180 },
    { id: 'leather1Paisley', src: leatherPaisleyImage, alt: 'Leather Paisley', zIndex: 180 },
    { id: 'leather1Perforated', src: leatherPerforatedImage, alt: 'Leather Perforated', zIndex: 180 },
    { id: 'leather1Snakeskin2', src: leatherSnakeskin2Image, alt: 'Leather Snakeskin 2', zIndex: 180 },
    { id: 'leather1SnakeskinCamo', src: leatherSnakeskinCamoImage, alt: 'Leather Snakeskin Camo', zIndex: 180 },
    { id: 'leather1SnakeskinCottonCandy', src: leatherSnakeskinCottonCandyImage, alt: 'Leather Snakeskin Cotton Candy', zIndex: 180 },
    { id: 'leather1SnakeskinTieDye', src: leatherSnakeskinTieDyeImage, alt: 'Leather Snakeskin Tie Dye', zIndex: 180 },
    { id: 'leather1Steel', src: leatherSteelImage, alt: 'Leather Steel', zIndex: 180 },
    { id: 'leather1Suede', src: leatherSuedeImage, alt: 'Leather Suede', zIndex: 180 },
];1

const Right = ({ filters }) => {
    return (
        <div className="relative    ">
            {imageLayers.map((layer, index) => (
               
                    <img
                        id={layer.alt}
                        className="absolute"
                        src={layer.src}
                        alt={layer.alt}
                        style={{
                            filter: filters[layer.id] || 'none',  
                            zIndex: layer.zIndex,
                        }}
                    />
                
            ))}
        </div>
    );
};

export default Right;
